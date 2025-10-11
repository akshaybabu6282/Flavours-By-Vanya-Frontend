import React, { useRef, useEffect, useState } from 'react'

const licenses = [
  { id: 'fssai', title: 'FSSAI Certified', number: 'Lic No: 21325247000571', desc: 'Ensures food safety, hygiene\n & quality standards.', logo: '/assets/fssai-logo.png' },
  { id: 'gst', title: 'GST Registered', number: 'GSTIN: 32DZEPK4981E1ZE', desc: 'Transparent tax compliance for\n business transactions.', logo: '/assets/gst-logo.png' },
  { id: 'udyam', title: 'Udyam (MSME)', number: 'UDYAM-KL-14-0022806', desc: 'Recognized under MSME for \n small business credibility.', logo: '/assets/msme-logo.webp' },
  { id: 'tm', title: 'Trademark', number: 'In Process', desc: 'Our brand is officially trademarked \n(application in process).', logo: '/assets/trademark-logo.png' },
  { id: 'iec', title: 'Import Export License \n (IEC)', number: 'IEC: DZEPK4981E', desc: 'Certified by DGFT under the\n Ministry of Commerce & Industry\n for import and export.', logo: '/assets/iec.png' }
]

export default function LicensesInfiniteSlider() {
  const scrollRef = useRef(null)
  const [isPaused, setIsPaused] = useState(false)
  const speed = 0.8

  useEffect(() => {
    const container = scrollRef.current

    // Clone children for infinite scroll
    const children = Array.from(container.children)
    children.forEach(child => {
      const clone = child.cloneNode(true)
      container.appendChild(clone)
    })

    let animationFrameId

    const scroll = () => {
      if (!isPaused) {
        container.scrollLeft += speed
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0
        }
      }
      animationFrameId = requestAnimationFrame(scroll)
    }

    animationFrameId = requestAnimationFrame(scroll)

    // Desktop hover
    const handleMouseEnter = () => setIsPaused(true)
    const handleMouseLeave = () => setIsPaused(false)

    // Mobile touch
    const handleTouchStart = () => setIsPaused(true)
    const handleTouchEnd = () => setIsPaused(false)

    container.addEventListener('mouseenter', handleMouseEnter)
    container.addEventListener('mouseleave', handleMouseLeave)
    container.addEventListener('touchstart', handleTouchStart)
    container.addEventListener('touchend', handleTouchEnd)

    return () => {
      cancelAnimationFrame(animationFrameId)
      container.removeEventListener('mouseenter', handleMouseEnter)
      container.removeEventListener('mouseleave', handleMouseLeave)
      container.removeEventListener('touchstart', handleTouchStart)
      container.removeEventListener('touchend', handleTouchEnd)
    }
  }, [isPaused])

  return (
    <section id="licenses" className="py-24 bg-gradient-to-b from-white via-gray-50 to-gray-100 text-gray-900">
      <div className="mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800" style={{ fontFamily: '"Raleway", sans-serif' }}>
            Our Certifications & Licenses
          </h2>
          <p className="text-gray-600 text-md md:text-lg max-w-xl mx-auto" style={{ fontFamily: '"Roboto", sans-serif' }}>
            We are a fully certified and compliant business, ensuring trust, authenticity, and transparency in every step.
          </p>
        </div>

        {/* Infinite Horizontal Scroll */}
        <div
          ref={scrollRef}
          className="flex gap-12 whitespace-nowrap py-4 no-scrollbar"
          style={{
            overflowX: 'auto',
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          {licenses.map((l, idx) => (
            <div
              key={`${l.id}-${idx}`}
              className="inline-flex flex-col items-center text-center flex-shrink-0"
              style={{ minWidth: '200px', width: 'fit-content' }}
            >
              {/* Logo inside circle */}
              <div className="bg-gray-100 w-24 h-24 sm:w-28 sm:h-28 md:w-30 md:h-30 lg:w-34 lg:h-34 rounded-full flex items-center justify-center shadow-inner mb-4 transition-transform duration-300 hover:scale-110">
                <img src={l.logo} alt={l.title} className="w-16 sm:w-20 md:w-22 lg:w-26 h-16 sm:h-20 md:h-22 lg:h-26 object-contain" />
              </div>

              {/* Text aligned with logo width */}
              <div className="flex flex-col items-center justify-center" style={{ width: 'calc(var(--tw-width, 100%) * 1)' }}>
                <h3 className="text-base sm:text-lg md:text-lg lg:text-xl font-semibold text-gray-800 mb-1" style={{ fontFamily: '"Merriweather", serif', maxWidth: '100%', wordWrap: 'break-word', whiteSpace: 'pre-line' }}>
                  {l.title}
                </h3>
                <p className="text-xs sm:text-sm md:text-sm lg:text-sm text-gray-500 mb-1" style={{ fontFamily: '"Roboto", sans-serif', maxWidth: '100%', wordWrap: 'break-word'}}>
                  {l.number}
                </p>
                <p className="text-xs sm:text-sm md:text-sm lg:text-sm text-gray-600 leading-relaxed" style={{ fontFamily: '"Roboto", sans-serif', maxWidth: '100%', wordWrap: 'break-word', whiteSpace: 'pre-line' }}>
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
