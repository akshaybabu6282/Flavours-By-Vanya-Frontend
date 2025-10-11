import React, { useRef, useEffect, useState } from 'react'

const licenses = [
  { id: 'fssai', title: 'FSSAI Certified', number: 'Lic No: 21325247000571', desc: 'Ensures food safety, hygiene\n & quality standards.', logo: '/assets/fssai-logo.png' },
  { id: 'gst', title: 'GST Registered', number: 'GSTIN: 32DZEPK4981E1ZE', desc: 'Transparent tax compliance for\n business transactions.', logo: '/assets/gst-logo.png' },
  { id: 'udyam', title: 'Udyam (MSME)', number: 'UDYAM-KL-14-0022806', desc: 'Recognized under MSME for \n small business credibility.', logo: '/assets/msme-logo.webp' },
  { id: 'tm', title: 'Trademark', number: 'In Process', desc: 'Our brand is officially trademarked \n(application in process).', logo: '/assets/trademark-logo.png' },
  { id: 'iec', title: 'Import Export License \n (IEC)', number: 'IEC: DZEPK4981E', desc: 'Certified by DGFT under the\n Ministry of Commerce & Industry\n for import and export.', logo: '/assets/iec.png' }
]

export default function LicensesInfiniteSlider() {
  const containerRef = useRef(null)
  const [offset, setOffset] = useState(0)
  const speed = 0.8

  useEffect(() => {
    const container = containerRef.current
    let animationId

    // Duplicate licenses for seamless loop
    const items = Array.from(container.children)
    items.forEach(item => container.appendChild(item.cloneNode(true)))

    const scroll = () => {
      setOffset(prev => {
        const newOffset = prev + speed
        if (newOffset >= container.scrollWidth / 2) return 0
        return newOffset
      })
      animationId = requestAnimationFrame(scroll)
    }

    animationId = requestAnimationFrame(scroll)
    return () => cancelAnimationFrame(animationId)
  }, [])

  return (
    <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-gray-100 text-gray-900">
      <div className="mx-auto max-w-7xl px-6 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: '"Raleway", sans-serif' }}>
          Our Certifications & Licenses
        </h2>
        <p className="text-gray-600 text-md md:text-lg max-w-xl mx-auto" style={{ fontFamily: '"Roboto", sans-serif' }}>
          We are a fully certified and compliant business, ensuring trust, authenticity, and transparency in every step.
        </p>
      </div>

      <div className="overflow-hidden">
        <div
          ref={containerRef}
          className="flex gap-12 whitespace-nowrap py-4"
          style={{ transform: `translateX(-${offset}px)` }}
        >
          {licenses.concat(licenses).map((l, idx) => (
            <div
              key={`${l.id}-${idx}`}
              className="flex-shrink-0 inline-flex flex-col items-center text-center"
              style={{ minWidth: '200px', width: 'fit-content' }}
            >
              <div className="bg-gray-100 w-24 h-24 sm:w-28 sm:h-28 md:w-30 md:h-30 lg:w-34 lg:h-34 rounded-full flex items-center justify-center shadow-inner mb-4 transition-transform duration-300 hover:scale-110">
                <img src={l.logo} alt={l.title} className="w-16 sm:w-20 md:w-22 lg:w-26 h-16 sm:h-20 md:h-22 lg:h-26 object-contain" />
              </div>
              <div className="flex flex-col items-center justify-center" style={{ width: '100%' }}>
                <h3 className="text-base sm:text-lg md:text-lg lg:text-xl font-semibold text-gray-800 mb-1" style={{ fontFamily: '"Merriweather", serif', whiteSpace: 'pre-line' }}>
                  {l.title}
                </h3>
                <p className="text-xs sm:text-sm md:text-sm lg:text-sm text-gray-500 mb-1" style={{ fontFamily: '"Roboto", sans-serif', whiteSpace: 'pre-line' }}>
                  {l.number}
                </p>
                <p className="text-xs sm:text-sm md:text-sm lg:text-sm text-gray-600 leading-relaxed" style={{ fontFamily: '"Roboto", sans-serif', whiteSpace: 'pre-line' }}>
                  {l.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
