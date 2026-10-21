import React, { useEffect, useRef, useState } from 'react'

const licenses = [
  {
    id: 'fssai',
    title: 'FSSAI Certified',
    number: 'Lic No: 21325247000571',
    desc: 'Ensures food safety, hygiene\n& quality standards.',
    logo: '/assets/fssai-logo.png',
  },
  {
    id: 'iso-22000',
    title: 'ISO 22000:2018',
    number: 'Food Safety Management System',
    desc: 'Supports systematic management\nof food safety risks throughout\nour operations.',
    logo: '/assets/ISO-22000-2018.png',
  },
  {
    id: 'haccp',
    title: 'HACCP',
    number: 'Food Safety System',
    desc: 'Uses preventive controls to identify,\nevaluate, and manage food\nsafety hazards.',
    logo: '/assets/haccp-hazard-analysis-critical-control-point-food-safety-certified-vector-badge-icon-logo-231531605.webp',
  },
  {
    id: 'who-gmp',
    title: 'WHO-GMP',
    number: 'Good Manufacturing Practices',
    desc: 'Focuses on hygiene, controlled\nprocesses, and consistent\nproduct quality.',
    logo: '/assets/who-gmp-certification-company-mePJanNWRQCwnR3j.avif',
  },
  {
    id: 'iso-9001',
    title: 'ISO 9001:2015',
    number: 'Quality Management System',
    desc: 'Supports consistent quality,\ncustomer focus, and continual\nimprovement.',
    logo: '/assets/ISO_9001-2015.svg.webp',
  },
  {
    id: 'gst',
    title: 'GST Registered',
    number: 'Kerala: 32DZEPK4981E1ZE\nKarnataka: 29DZEPK4981E1Z1',
    desc: 'Registered in Kerala and Karnataka\nfor transparent and compliant\nbusiness transactions.',
    logo: '/assets/gst-logo.png',
  },
  {
    id: 'udyam',
    title: 'Udyam (MSME)',
    number: 'UDYAM-KL-14-0022806',
    desc: 'Recognized under MSME for\nsmall business credibility.',
    logo: '/assets/msme-logo.webp',
  },
  {
    id: 'iec',
    title: 'Import Export Code\n(IEC)',
    number: 'IEC: DZEPK4981E',
    desc: 'Registered with DGFT under the\nMinistry of Commerce & Industry\nfor import and export.',
    logo: '/assets/iec.png',
  },
  {
    id: 'tm',
    title: 'Trademark',
    number: 'In Process',
    desc: 'Our trademark application is\ncurrently in process.',
    logo: '/assets/trademark-logo.png',
  },
]

export default function LicensesInfiniteSlider() {
  const containerRef = useRef(null)
  const [offset, setOffset] = useState(0)

  const speed = 0.8

  useEffect(() => {
    const container = containerRef.current
    let animationId

    if (!container) return undefined

    const scroll = () => {
      setOffset((previousOffset) => {
        const newOffset = previousOffset + speed

        if (newOffset >= container.scrollWidth / 2) {
          return 0
        }

        return newOffset
      })

      animationId = requestAnimationFrame(scroll)
    }

    animationId = requestAnimationFrame(scroll)

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <section
      id="licenses"
      className="scroll-mt-24 bg-gradient-to-b from-white via-gray-50 to-gray-100 py-24 text-gray-900"
    >
      <div className="mx-auto mb-12 px-5 text-center">
        <h2
          className="mb-4 text-3xl font-bold md:text-4xl"
          style={{
            fontFamily: '"Raleway", sans-serif',
          }}
        >
          Our Certifications & Licenses
        </h2>

        <p
          className="mx-auto max-w-2xl text-base text-gray-600 md:text-lg"
          style={{
            fontFamily: '"Roboto", sans-serif',
          }}
        >
          Certified systems and regulatory registrations supporting quality,
          food safety, compliance, and transparency throughout our operations.
        </p>
      </div>

      <div className="overflow-hidden">
        <div
          ref={containerRef}
          className="flex gap-12 whitespace-nowrap py-4"
          style={{
            transform: `translateX(-${offset}px)`,
          }}
        >
          {licenses.concat(licenses).map((license, index) => (
            <article
              key={`${license.id}-${index}`}
              className="inline-flex flex-shrink-0 flex-col items-center text-center"
              style={{
                minWidth: '220px',
                width: 'fit-content',
              }}
            >
              <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full border border-gray-200 bg-white shadow-inner transition-transform duration-300 hover:scale-110 sm:h-28 sm:w-28">
                {license.logo ? (
                  <img
                    src={license.logo}
                    alt={license.title}
                    className="h-16 w-16 object-contain sm:h-20 sm:w-20"
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <span
                    aria-hidden="true"
                    className="whitespace-pre-line text-center text-lg font-extrabold leading-tight tracking-tight text-green-700 sm:text-xl"
                    style={{
                      fontFamily: '"Montserrat", sans-serif',
                    }}
                  >
                    {license.badge}
                  </span>
                )}
              </div>

              <div
                className="flex w-full flex-col items-center justify-center"
              >
                <h3
                  className="mb-1 whitespace-pre-line text-base font-semibold text-gray-800 sm:text-lg lg:text-xl"
                  style={{
                    fontFamily: '"Merriweather", serif',
                  }}
                >
                  {license.title}
                </h3>

                <p
                  className="mb-1 whitespace-pre-line text-xs text-gray-500 sm:text-sm"
                  style={{
                    fontFamily: '"Roboto", sans-serif',
                  }}
                >
                  {license.number}
                </p>

                <p
                  className="whitespace-pre-line text-xs leading-relaxed text-gray-600 sm:text-sm"
                  style={{
                    fontFamily: '"Roboto", sans-serif',
                  }}
                >
                  {license.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}