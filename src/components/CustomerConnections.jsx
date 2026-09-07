import { useEffect, useRef, useState } from 'react'
import { MessageCircle } from 'lucide-react'

const CUSTOMER_TOTAL = 3000
const ANIMATION_DURATION = 4200

export default function CustomerConnections() {
  const sectionRef = useRef(null)
  const animationFrameRef = useRef(null)
  const isInsideSectionRef = useRef(false)

  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const section = sectionRef.current

    if (!section) return undefined

    const stopCounterAnimation = () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
        animationFrameRef.current = null
      }
    }

    const startCounterAnimation = () => {
      stopCounterAnimation()
      setCount(0)

      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        setCount(CUSTOMER_TOTAL)
        return
      }

      const startedAt = performance.now()

      const updateCount = (currentTime) => {
        const progress = Math.min(
          (currentTime - startedAt) / ANIMATION_DURATION,
          1
        )

        const easedProgress = 1 - Math.pow(1 - progress, 3)

        setCount(Math.round(CUSTOMER_TOTAL * easedProgress))

        if (progress < 1) {
          animationFrameRef.current =
            requestAnimationFrame(updateCount)
        } else {
          animationFrameRef.current = null
        }
      }

      animationFrameRef.current =
        requestAnimationFrame(updateCount)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (isInsideSectionRef.current) return

          isInsideSectionRef.current = true
          setIsVisible(true)
          startCounterAnimation()
        } else {
          isInsideSectionRef.current = false
          setIsVisible(false)
          setCount(0)
          stopCounterAnimation()
        }
      },
      {
        threshold: 0.2,
      }
    )

    observer.observe(section)

    return () => {
      observer.disconnect()
      stopCounterAnimation()
    }
  }, [])

  return (
    <>
      {/* Space between Our Story and this section */}
      <div
        aria-hidden="true"
        className="h-12 bg-gray-100 sm:h-16 lg:h-20"
      />

      <section
        ref={sectionRef}
        aria-labelledby="customer-connections-title"
        className="relative overflow-hidden bg-black py-16 text-white sm:py-20 lg:py-24"
      >
        {/* Subtle green background light */}
        <div
          aria-hidden="true"
          className="absolute left-0 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-600/10 blur-3xl"
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 lg:px-8">
          {/* Left content */}
          <div className="order-1">
            <p
              className={`mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-green-500 transition-all duration-700 motion-reduce:transition-none ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-4 opacity-0'
              }`}
            >
              The Vanya Community
            </p>

            <h2
              id="customer-connections-title"
              className={`max-w-xl text-3xl font-bold leading-tight transition-all delay-100 duration-700 motion-reduce:transition-none sm:text-4xl lg:text-5xl ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-6 opacity-0'
              }`}
              style={{
                fontFamily: '"Raleway", sans-serif',
              }}
            >
              Growing Through Real Connections
            </h2>

            <p
              className={`mt-6 max-w-xl text-base leading-7 text-gray-300 transition-all delay-200 duration-700 motion-reduce:transition-none sm:text-lg ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-6 opacity-0'
              }`}
              style={{
                fontFamily: '"Roboto", sans-serif',
              }}
            >
              From first purchases at community stalls to repeat orders
              through WhatsApp, Vanya grows through real relationships
              and continued trust.
            </p>

            {/* Customer counter */}
            <div
              className={`mt-8 border-l-2 border-green-500 pl-5 transition-all delay-300 duration-700 motion-reduce:transition-none sm:mt-10 ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-6 opacity-0'
              }`}
            >
              <div
                aria-label="More than 3,000 happy customers"
                className="text-5xl font-bold tabular-nums sm:text-6xl"
                style={{
                  fontFamily: '"Montserrat", sans-serif',
                }}
              >
                {count.toLocaleString('en-IN')}+
              </div>

              <p className="mt-1 text-xl font-semibold sm:text-2xl">
                Happy Customers
              </p>
            </div>

            <p
              className={`mt-5 max-w-lg text-sm leading-6 text-gray-400 transition-all delay-[400ms] duration-700 motion-reduce:transition-none sm:text-base ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-5 opacity-0'
              }`}
              style={{
                fontFamily: '"Roboto", sans-serif',
              }}
            >
              Served directly through community stalls and repeat
              WhatsApp orders.
            </p>

            {/* WhatsApp button */}
            <a
              href="https://wa.me/917907662508?text=Hi%2C%20I%20would%20like%20to%20place%20a%20repeat%20order%20with%20Vanya%20Eco%20Products."
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative mt-7 inline-flex min-h-12 items-center justify-center gap-2 overflow-hidden rounded-lg bg-green-600 px-6 py-3 font-semibold text-white transition-all delay-500 duration-700 hover:-translate-y-1 hover:bg-green-500 hover:shadow-lg hover:shadow-green-900/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-500 motion-reduce:transition-none ${
                isVisible
                  ? 'translate-y-0 scale-100 opacity-100'
                  : 'translate-y-6 scale-95 opacity-0'
              }`}
              style={{
                fontFamily: '"Roboto", sans-serif',
              }}
            >
              {/* Button light animation */}
              <span
                aria-hidden="true"
                className={`absolute inset-y-0 -left-1/2 w-1/3 skew-x-[-20deg] bg-white/20 transition-transform delay-700 duration-1000 ${
                  isVisible
                    ? 'translate-x-[500%]'
                    : 'translate-x-0'
                }`}
              />

              <MessageCircle
                aria-hidden="true"
                className="relative h-5 w-5"
              />

              <span className="relative">
                Reorder on WhatsApp
              </span>
            </a>
          </div>

          {/* Kiosk visual */}
          <div
            className={`order-2 transition-all delay-200 duration-1000 motion-reduce:transition-none ${
              isVisible
                ? 'translate-x-0 scale-100 opacity-100'
                : 'translate-x-8 scale-[0.98] opacity-0'
            }`}
          >
            <div className="relative isolate mx-auto max-w-3xl py-6 sm:py-8">
              {/* Responsive forest-green brush shape */}
              <svg
                aria-hidden="true"
                viewBox="0 0 900 650"
                preserveAspectRatio="none"
                className={`pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[86%] w-[110%] -translate-x-1/2 -translate-y-1/2 transition-all delay-300 duration-1000 motion-reduce:transition-none sm:w-[116%] lg:w-[120%] ${
                  isVisible
                    ? 'scale-100 opacity-100'
                    : 'scale-90 opacity-0'
                }`}
              >
                <defs>
                  <linearGradient
                    id="vanya-brush-gradient"
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="1"
                  >
                    <stop
                      offset="0%"
                      stopColor="#06130b"
                    />

                    <stop
                      offset="45%"
                      stopColor="#123d23"
                    />

                    <stop
                      offset="75%"
                      stopColor="#0d2e1a"
                    />

                    <stop
                      offset="100%"
                      stopColor="#050d08"
                    />
                  </linearGradient>

                  <filter
                    id="vanya-brush-roughness"
                    x="-20%"
                    y="-20%"
                    width="140%"
                    height="140%"
                  >
                    <feTurbulence
                      type="fractalNoise"
                      baseFrequency="0.012 0.055"
                      numOctaves="2"
                      seed="17"
                      result="noise"
                    />

                    <feDisplacementMap
                      in="SourceGraphic"
                      in2="noise"
                      scale="24"
                      xChannelSelector="R"
                      yChannelSelector="B"
                    />
                  </filter>

                  <filter
                    id="vanya-brush-glow"
                    x="-30%"
                    y="-30%"
                    width="160%"
                    height="160%"
                  >
                    <feGaussianBlur stdDeviation="30" />
                  </filter>
                </defs>

                {/* Soft green glow */}
                <path
                  d="M105 122 C250 78 605 82 790 128 L815 490 C630 552 286 558 88 500 Z"
                  fill="#16a34a"
                  opacity="0.14"
                  filter="url(#vanya-brush-glow)"
                />

                {/* Main irregular brush */}
                <path
                  d="M92 145 C238 96 608 91 806 139 L833 181 L813 214 L835 250 L817 290 L840 329 L815 365 L833 408 L806 449 L824 495 C632 548 278 560 72 502 L92 458 L68 420 L89 379 L65 338 L88 299 L70 259 L93 220 L70 184 Z"
                  fill="url(#vanya-brush-gradient)"
                  opacity="0.9"
                  filter="url(#vanya-brush-roughness)"
                />

                {/* Subtle brush highlight */}
                <path
                  d="M135 177 C320 132 618 139 785 171"
                  fill="none"
                  stroke="#22c55e"
                  strokeWidth="4"
                  strokeLinecap="round"
                  opacity="0.18"
                />
              </svg>

              {/* Grounding shadow */}
              <div
                aria-hidden="true"
                className="absolute bottom-7 left-1/2 -z-[5] h-9 w-[70%] -translate-x-1/2 rounded-full bg-black/90 blur-xl sm:bottom-9"
              />

              {/* Transparent kiosk image */}
              <img
                src="/assets/customer-connections-stall.png"
                alt="Customers purchasing Vanya Eco Products at a community stall"
                className="relative z-10 h-auto w-full scale-105 object-contain drop-shadow-[0_24px_30px_rgba(0,0,0,0.55)] transition-transform duration-700 hover:scale-[1.08] motion-reduce:transition-none sm:scale-110 sm:hover:scale-[1.13]"
                loading="lazy"
                decoding="async"
                width="1536"
                height="1024"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}