import React from 'react'
import { Handshake, PackageCheck, Settings2 } from 'lucide-react'
import useInView from '../hooks/useInView'

const storyHighlights = [
  {
    id: 'sourcing',
    title: 'Trusted Sourcing',
    description: 'Ingredients selected through trusted sourcing relationships.',
    icon: Handshake,
  },
  {
    id: 'processing',
    title: 'Small-Batch Processing',
    description: 'Carefully cleaned and processed through controlled batches.',
    icon: Settings2,
  },
  {
    id: 'packing',
    title: 'Packed with Care',
    description: 'Prepared and packed with attention to quality and freshness.',
    icon: PackageCheck,
  },
]

export default function AboutUs() {
  const [ref, inView] = useInView()

  return (
    <section
      id="about"
      className="scroll-mt-24 overflow-hidden bg-[#f5f4ef] py-16 text-gray-900 sm:py-20 lg:py-24"
    >
      <div
        ref={ref}
        className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 lg:px-8"
      >
        {/* Story image */}
        <div
          className={`relative transition-all duration-700 motion-reduce:transition-none ${
            inView
              ? 'translate-x-0 opacity-100'
              : '-translate-x-8 opacity-0'
          }`}
        >
          <div className="relative overflow-hidden rounded-[2rem] bg-gray-200 shadow-[0_24px_70px_rgba(15,23,42,0.14)]">
            <div className="aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/5] xl:aspect-square">
              <img
                src="/assets/hero.webp"
                alt="Spices and ingredients representing the Vanya Eco Products journey"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Image shading */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent"
            />

            {/* Image message */}
            <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
              <div className="mb-4 h-0.5 w-14 bg-green-400" />

              <p
                className="max-w-md text-xl font-bold leading-snug sm:text-2xl"
                style={{
                  fontFamily: '"Raleway", sans-serif',
                }}
              >
                From thoughtful sourcing to careful preparation
              </p>

              <p
                className="mt-2 text-sm leading-6 text-white/80 sm:text-base"
                style={{
                  fontFamily: '"Roboto", sans-serif',
                }}
              >
                Every Vanya product carries our commitment to quality, honesty
                and personal care.
              </p>
            </div>
          </div>

          {/* Decorative glow */}
          <div
            aria-hidden="true"
            className="absolute -bottom-5 -left-5 -z-10 h-32 w-32 rounded-full bg-green-600/10 blur-2xl"
          />
        </div>

        {/* Story content */}
        <div
          className={`transition-all delay-100 duration-700 motion-reduce:transition-none ${
            inView
              ? 'translate-x-0 opacity-100'
              : 'translate-x-8 opacity-0'
          }`}
        >
          <p
            className="text-xs font-bold uppercase tracking-[0.26em] text-green-700 sm:text-sm"
            style={{
              fontFamily: '"Montserrat", sans-serif',
            }}
          >
            Our Story
          </p>

          <h2
            className="mt-4 max-w-2xl text-3xl font-extrabold leading-tight text-gray-950 sm:text-4xl lg:text-[2.75rem]"
            style={{
              fontFamily: '"Raleway", sans-serif',
            }}
          >
            Rooted in Trust.
            <span className="block text-green-700">
              Prepared with Care.
            </span>
          </h2>

          <div className="mt-6 h-0.5 w-16 bg-green-600" />

          <div
            className="mt-6 max-w-2xl space-y-4 text-base leading-7 text-gray-600 sm:text-lg sm:leading-8"
            style={{
              fontFamily: '"Roboto", sans-serif',
            }}
          >
            <p>
              Vanya Eco Products began with a simple belief: dependable food
              products start with careful sourcing and honest relationships.
              We work closely with trusted farmers and selected suppliers to
              bring together spices, masalas, tea, coffee, oils, nuts and honey
              for everyday kitchens.
            </p>

            <p>
              Selected spices are cleaned, processed and ground through our
              facilities in controlled batches. From sourcing to preparation
              and packing, we focus on preserving the natural character of
              every product while maintaining consistency and care.
            </p>

            <p>
              For us, Vanya is more than a product range. It is a relationship
              built through community stalls, personal conversations, repeat
              orders and the trust customers place in every pack they choose.
            </p>
          </div>

          {/* Story highlights */}
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {storyHighlights.map(
              (
                {
                  id,
                  title,
                  description,
                  icon: iconComponent,
                },
                index
              ) => (
                <article
                  key={id}
                  className={`rounded-2xl border border-gray-200 bg-white p-4 shadow-[0_8px_25px_rgba(15,23,42,0.05)] transition-all duration-500 hover:-translate-y-1 hover:border-green-600/30 hover:shadow-[0_14px_30px_rgba(22,101,52,0.09)] motion-reduce:transition-none ${
                    inView
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-5 opacity-0'
                  }`}
                  style={{
                    transitionDelay: inView
                      ? `${250 + index * 120}ms`
                      : '0ms',
                  }}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-700 text-white shadow-sm">
                    {React.createElement(iconComponent, {
                      'aria-hidden': true,
                      className: 'h-5 w-5',
                      strokeWidth: 1.8,
                    })}
                  </div>

                  <h3
                    className="mt-4 text-sm font-bold leading-snug text-gray-900 sm:text-base"
                    style={{
                      fontFamily: '"Raleway", sans-serif',
                    }}
                  >
                    {title}
                  </h3>

                  <p
                    className="mt-2 text-xs leading-5 text-gray-600 sm:text-sm"
                    style={{
                      fontFamily: '"Roboto", sans-serif',
                    }}
                  >
                    {description}
                  </p>
                </article>
              )
            )}
          </div>

          {/* Brand statement */}
          <div className="mt-8 flex items-center gap-4 border-t border-gray-300 pt-6">
            <span
              aria-hidden="true"
              className="h-2.5 w-2.5 shrink-0 rounded-full bg-green-600 shadow-[0_0_0_6px_rgba(22,163,74,0.10)]"
            />

            <p
              className="text-sm font-semibold tracking-wide text-gray-800 sm:text-base"
              style={{
                fontFamily: '"Montserrat", sans-serif',
              }}
            >
              Vanya Eco Products
              <span className="ml-2 font-normal text-gray-500">
                Pure Spices, True Flavours
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}