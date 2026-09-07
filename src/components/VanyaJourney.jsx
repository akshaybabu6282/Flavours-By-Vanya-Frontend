import { useEffect, useRef, useState } from 'react'

const journeySteps = [
  {
    number: '01',
    title: 'Sourced Directly',
    description: 'Selected from trusted Wayanad farmers.',
    image: '/assets/journey-sourced-directly.webp',
    alt: 'Illustration of a hand selecting pepper from a vine',
  },
  {
    number: '02',
    title: 'Processed by Us',
    description: 'Cleaned and processed through our own mills.',
    image: '/assets/journey-processed-by-us.webp',
    alt: 'Illustration of a traditional spice grinding mill',
  },
  {
    number: '03',
    title: 'Packed Fresh',
    description: 'Prepared in small batches and packed with care.',
    image: '/assets/journey-packed-fresh.webp',
    alt: 'Illustration of hands carefully sealing a spice pouch',
  },
  {
    number: '04',
    title: 'Delivered Personally',
    description:
      'Shared through community stalls and WhatsApp reorders.',
    image: '/assets/journey-delivered-personally.webp',
    alt: 'Illustration of customers at the Vanya community kiosk',
  },
]

export default function VanyaJourney() {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const section = sectionRef.current

    if (!section) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      {
        threshold: 0.15,
      }
    )

    observer.observe(section)

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      aria-labelledby="vanya-journey-title"
      className="relative overflow-hidden bg-black py-12 text-white sm:py-14 lg:py-16"
    >
      {/* Subtle green background glow */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-600/[0.05] blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p
            className={`text-xs font-semibold uppercase tracking-[0.26em] text-green-500 transition-all duration-700 motion-reduce:transition-none sm:text-sm ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-3 opacity-0'
            }`}
          >
            The Vanya Journey
          </p>

          <h2
            id="vanya-journey-title"
            className={`mt-3 text-3xl font-bold leading-tight transition-all delay-100 duration-700 motion-reduce:transition-none sm:text-4xl lg:text-4xl ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-4 opacity-0'
            }`}
            style={{
              fontFamily: '"Raleway", sans-serif',
            }}
          >
            From Wayanad to Your Kitchen
          </h2>

          <p
            className={`mx-auto mt-3 max-w-2xl text-base leading-6 text-gray-300 transition-all delay-200 duration-700 motion-reduce:transition-none ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-4 opacity-0'
            }`}
            style={{
              fontFamily: '"Roboto", sans-serif',
            }}
          >
            Four careful steps connect Wayanad&apos;s farms with your
            everyday cooking.
          </p>
        </div>

        <div className="relative mt-10 lg:mt-12">
          {/* Mobile vertical line */}
          <div
            aria-hidden="true"
            className="absolute bottom-5 left-[19px] top-5 w-px bg-white/10 sm:hidden"
          >
            <span
              className={`block h-full w-full origin-top bg-green-500 shadow-[0_0_12px_rgba(34,197,94,0.75)] transition-transform duration-[1600ms] motion-reduce:transition-none ${
                isVisible ? 'scale-y-100' : 'scale-y-0'
              }`}
            />
          </div>

          {/* Laptop and desktop horizontal line */}
          <div
            aria-hidden="true"
            className="absolute left-[12.5%] right-[12.5%] top-5 hidden h-px bg-white/10 lg:block"
          >
            <span
              className={`block h-full w-full origin-left bg-green-500 shadow-[0_0_12px_rgba(34,197,94,0.75)] transition-transform duration-[1600ms] motion-reduce:transition-none ${
                isVisible ? 'scale-x-100' : 'scale-x-0'
              }`}
            />
          </div>

          {/* Journey steps */}
          <div className="grid gap-7 sm:grid-cols-2 sm:gap-x-7 sm:gap-y-10 lg:grid-cols-4 lg:gap-6">
            {journeySteps.map((step, index) => (
              <article
                key={step.number}
                className={`relative grid grid-cols-[40px_88px_minmax(0,1fr)] items-center gap-3 transition-all duration-700 motion-reduce:transition-none sm:block sm:border-t sm:border-green-500/20 sm:px-3 sm:text-center lg:border-0 lg:px-0 ${
                  isVisible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-6 opacity-0'
                }`}
                style={{
                  transitionDelay: isVisible
                    ? `${250 + index * 140}ms`
                    : '0ms',
                }}
              >
                {/* Step number */}
                <div
                  aria-hidden="true"
                  className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-green-400 bg-black text-xs font-bold text-white shadow-[0_0_14px_rgba(34,197,94,0.4)] sm:mx-auto sm:-mt-5"
                >
                  {step.number}
                </div>

                {/* Illustration */}
                <div className="aspect-square w-[88px] overflow-hidden sm:mx-auto sm:mt-3 sm:w-[135px] lg:w-[165px]">
                  <img
                    src={step.image}
                    alt={step.alt}
                    className="h-full w-full object-contain transition-transform duration-500 hover:scale-105 motion-reduce:transition-none"
                    loading="lazy"
                    decoding="async"
                    width="720"
                    height="720"
                  />
                </div>

                {/* Text */}
                <div className="min-w-0 sm:mt-2">
                  <h3
                    className="text-lg font-bold leading-tight text-white lg:text-xl"
                    style={{
                      fontFamily: '"Raleway", sans-serif',
                    }}
                  >
                    {step.title}
                  </h3>

                  <p
                    className="mt-2 text-sm leading-5 text-gray-400 sm:mx-auto sm:max-w-[240px] lg:text-base lg:leading-6"
                    style={{
                      fontFamily: '"Roboto", sans-serif',
                    }}
                  >
                    {step.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}