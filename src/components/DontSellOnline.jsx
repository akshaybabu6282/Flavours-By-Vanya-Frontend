import React from 'react'
import { CheckCircle2 } from 'lucide-react'
import useInView from '../hooks/useInView'

const directSellingReasons = [
  {
    number: '01',
    title: 'Fresher Batches',
    description:
      'We prepare selected products in controlled batches and sell through direct channels, reducing the time products spend waiting across multiple retail locations.',
  },
  {
    number: '02',
    title: 'Better Product Handling',
    description:
      'Direct distribution gives us better oversight of how products are packed, stored and dispatched before they reach our customers.',
  },
  {
    number: '03',
    title: 'Direct Customer Relationships',
    description:
      'Community stalls and WhatsApp ordering allow us to answer questions, receive genuine feedback and support customers personally.',
  },
  {
    number: '04',
    title: 'Fairer Value',
    description:
      'Selling directly reduces additional marketplace, listing and retail layers, allowing us to focus more closely on product quality and customer service.',
  },
  {
    number: '05',
    title: 'Responsible Growth',
    description:
      'We prefer to grow through trusted relationships and manageable supply while maintaining attention to preparation, packing and customer experience.',
  },
]

const trustPoints = [
  {
    number: '01',
    title: 'Carefully Sourced',
    description:
      'Products and ingredients selected through trusted sourcing relationships.',
  },
  {
    number: '02',
    title: 'Controlled Batches',
    description:
      'Selected products are prepared in manageable batches with attention to consistency.',
  },
  {
    number: '03',
    title: 'Quality-Focused Systems',
    description:
      'Certified systems and food-safety processes support our daily operations.',
  },
  {
    number: '04',
    title: 'Personal Assistance',
    description:
      'Direct support for product enquiries, repeat orders and business requirements.',
  },
]

function DontSellOnline() {
  const [missionRef, missionInView] = useInView()
  const [whyRef, whyInView] = useInView()

  return (
    <section className="overflow-hidden">
      {/* Direct selling section */}
      <div
        ref={missionRef}
        className="relative bg-[#f5f4ef] py-16 text-gray-900 sm:py-20 lg:py-24"
      >
        {/* Background decoration */}
        <div
          aria-hidden="true"
          className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-green-700/[0.07] blur-3xl"
        />

        <div
          aria-hidden="true"
          className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-amber-500/[0.06] blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          {/* Heading */}
          <div
            className={`mx-auto max-w-4xl text-center transition-all duration-700 motion-reduce:transition-none ${
              missionInView
                ? 'translate-y-0 opacity-100'
                : 'translate-y-6 opacity-0'
            }`}
          >
            <p
              className="text-xs font-bold uppercase tracking-[0.26em] text-green-700 sm:text-sm"
              style={{
                fontFamily: '"Montserrat", sans-serif',
              }}
            >
              Why Direct Matters
            </p>

            <h2
              className="mx-auto mt-4 max-w-4xl text-3xl font-extrabold leading-tight text-gray-950 sm:text-4xl lg:text-[2.7rem]"
              style={{
                fontFamily: '"Raleway", sans-serif',
              }}
            >
              Why We Don’t Sell in Online Stores or Supermarkets
            </h2>

            <div className="mx-auto mt-6 h-0.5 w-16 bg-green-700" />

            <p
              className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8"
              style={{
                fontFamily: '"Roboto", sans-serif',
              }}
            >
              Our direct-selling approach helps us stay closer to our products
              and the people who choose them.
            </p>
          </div>

          {/* Five reasons */}
          <div className="mt-10 grid gap-4 sm:mt-12 md:grid-cols-2 lg:grid-cols-6 lg:gap-5">
            {directSellingReasons.map((reason, index) => {
              const isFinalPair = index >= 3

              return (
                <article
                  key={reason.number}
                  className={`group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 shadow-[0_10px_35px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-1 hover:border-green-700/30 hover:shadow-[0_18px_45px_rgba(22,101,52,0.11)] motion-reduce:transition-none sm:p-6 ${
                    isFinalPair
                      ? 'lg:col-span-3'
                      : 'lg:col-span-2'
                  } ${
                    missionInView
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-7 opacity-0'
                  }`}
                  style={{
                    transitionDelay: missionInView
                      ? `${180 + index * 110}ms`
                      : '0ms',
                  }}
                >
                  <div
                    aria-hidden="true"
                    className="absolute -right-12 -top-12 h-28 w-28 rounded-full bg-green-600/0 blur-2xl transition-colors duration-500 group-hover:bg-green-600/10"
                  />

                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <span
                        className="flex h-11 w-11 items-center justify-center rounded-xl border border-green-700/20 bg-green-700/[0.08] text-sm font-bold text-green-800"
                        style={{
                          fontFamily: '"Montserrat", sans-serif',
                        }}
                      >
                        {reason.number}
                      </span>

                      <span
                        aria-hidden="true"
                        className="h-px w-10 bg-gradient-to-r from-green-700/50 to-transparent transition-all duration-300 group-hover:w-16"
                      />
                    </div>

                    <h3
                      className="mt-5 text-lg font-bold leading-snug text-gray-950 sm:text-xl"
                      style={{
                        fontFamily: '"Raleway", sans-serif',
                      }}
                    >
                      {reason.title}
                    </h3>

                    <p
                      className="mt-3 text-sm leading-6 text-gray-600 sm:text-base sm:leading-7"
                      style={{
                        fontFamily: '"Roboto", sans-serif',
                      }}
                    >
                      {reason.description}
                    </p>
                  </div>
                </article>
              )
            })}
          </div>

          {/* Closing statement */}
          <div
            className={`mx-auto mt-10 flex max-w-3xl items-start gap-4 rounded-2xl border border-green-700/15 bg-green-700/[0.06] px-5 py-4 transition-all delay-500 duration-700 motion-reduce:transition-none sm:items-center sm:px-6 ${
              missionInView
                ? 'translate-y-0 opacity-100'
                : 'translate-y-5 opacity-0'
            }`}
          >
            <span
              aria-hidden="true"
              className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-green-700 shadow-[0_0_0_6px_rgba(21,128,61,0.10)] sm:mt-0"
            />

            <p
              className="text-sm leading-6 text-gray-700 sm:text-base"
              style={{
                fontFamily: '"Roboto", sans-serif',
              }}
            >
              This approach allows Vanya to grow personally, carefully and
              responsibly while maintaining direct customer support.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div
        ref={whyRef}
        className="relative overflow-hidden bg-[#123524] py-14 text-white sm:py-16 lg:py-20"
      >
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-green-400/[0.08] blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div
            className={`flex flex-col gap-6 transition-all duration-700 motion-reduce:transition-none lg:flex-row lg:items-end lg:justify-between ${
              whyInView
                ? 'translate-y-0 opacity-100'
                : 'translate-y-6 opacity-0'
            }`}
          >
            <div>
              <p
                className="text-xs font-bold uppercase tracking-[0.26em] text-green-300 sm:text-sm"
                style={{
                  fontFamily: '"Montserrat", sans-serif',
                }}
              >
                The Vanya Difference
              </p>

              <h2
                className="mt-3 text-3xl font-extrabold leading-tight text-white sm:text-4xl"
                style={{
                  fontFamily: '"Raleway", sans-serif',
                }}
              >
                Why Choose Us
              </h2>
            </div>

            <p
              className="max-w-xl text-sm leading-6 text-green-50/75 sm:text-base sm:leading-7 lg:text-right"
              style={{
                fontFamily: '"Roboto", sans-serif',
              }}
            >
              A straightforward approach built around careful sourcing,
              controlled preparation, quality-focused systems and direct
              customer relationships.
            </p>
          </div>

          <div className="mt-9 grid gap-px overflow-hidden rounded-2xl border border-white/15 bg-white/15 sm:grid-cols-2 lg:grid-cols-4">
            {trustPoints.map((point, index) => (
              <article
                key={point.number}
                className={`group relative bg-[#123524] p-5 transition-all duration-500 hover:bg-white/[0.07] motion-reduce:transition-none sm:p-6 ${
                  whyInView
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-6 opacity-0'
                }`}
                style={{
                  transitionDelay: whyInView
                    ? `${180 + index * 110}ms`
                    : '0ms',
                }}
              >
                <div className="flex items-center justify-between">
                  <span
                    className="text-xs font-bold tracking-[0.18em] text-green-300/70"
                    style={{
                      fontFamily: '"Montserrat", sans-serif',
                    }}
                  >
                    {point.number}
                  </span>

                  <CheckCircle2
                    aria-hidden="true"
                    className="h-5 w-5 text-green-300"
                    strokeWidth={1.8}
                  />
                </div>

                <h3
                  className="mt-6 text-lg font-bold leading-snug text-white sm:text-xl"
                  style={{
                    fontFamily: '"Raleway", sans-serif',
                  }}
                >
                  {point.title}
                </h3>

                <p
                  className="mt-3 text-sm leading-6 text-green-50/70"
                  style={{
                    fontFamily: '"Roboto", sans-serif',
                  }}
                >
                  {point.description}
                </p>

                <div className="mt-6 h-0.5 w-8 bg-green-400/50 transition-all duration-300 group-hover:w-16" />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default DontSellOnline