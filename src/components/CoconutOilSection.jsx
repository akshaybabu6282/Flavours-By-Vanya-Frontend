import React, { useEffect, useState } from 'react'
import {
  ArrowUpRight,
  ChevronRight,
  MessageCircle,
  RotateCcw,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import useInView from '../hooks/useInView'

function ProductDescription({ description = '' }) {
  return description
    .split('\n\n')
    .filter(Boolean)
    .map((paragraph, paragraphIndex) => {
      const parts = paragraph.split(/(\*\*[^*]+\*\*)/g)

      return (
        <p key={`${paragraph}-${paragraphIndex}`}>
          {parts.map((part, partIndex) => {
            if (part.startsWith('**') && part.endsWith('**')) {
              return (
                <strong
                  key={`${part}-${partIndex}`}
                  className="font-semibold text-gray-900"
                >
                  {part.slice(2, -2)}
                </strong>
              )
            }

            return part
          })}
        </p>
      )
    })
}

export default function CoconutOilSection({ products = [] }) {
  const [sectionRef, inView] = useInView()
  const [activeIndex, setActiveIndex] = useState(0)
  const [showBackImage, setShowBackImage] = useState(false)

  useEffect(() => {
    if (activeIndex >= products.length) {
      setActiveIndex(0)
    }
  }, [activeIndex, products.length])

  if (products.length === 0) {
    return null
  }

  const activeProduct = products[activeIndex]
  const hasBackImage = Boolean(activeProduct.imageBack)
  const displayedImage =
    showBackImage && hasBackImage
      ? activeProduct.imageBack
      : activeProduct.imageFront

  const selectProduct = (index) => {
    setActiveIndex(index)
    setShowBackImage(false)
  }

  const whatsappMessage = `Hi Vanya Eco Products,

I would like to enquire about ${activeProduct.name}.

My Location:
Quantity Required:
Additional Information:`

  const whatsappUrl = `https://wa.me/917907662508?text=${encodeURIComponent(
    whatsappMessage
  )}`

  return (
    <section
      id="coconut-oil"
      className="scroll-mt-24 overflow-hidden bg-[#eee9df] py-16 text-gray-900 sm:py-20 lg:py-24"
    >
      <div
        ref={sectionRef}
        className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8"
      >
        {/* Section heading */}
        <div
          className={`mb-10 transition-all duration-700 motion-reduce:transition-none sm:mb-12 ${
            inView
              ? 'translate-y-0 opacity-100'
              : 'translate-y-6 opacity-0'
          }`}
        >
          <p
            className="text-xs font-bold uppercase tracking-[0.26em] text-green-800 sm:text-sm"
            style={{
              fontFamily: '"Montserrat", sans-serif',
            }}
          >
            Traditional Oils
          </p>

          <div className="mt-3 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <h2
                className="max-w-2xl text-3xl font-extrabold leading-tight text-gray-950 sm:text-4xl lg:text-[2.75rem]"
                style={{
                  fontFamily: '"Raleway", sans-serif',
                }}
              >
                The Vanya Coconut Oil Collection
              </h2>

              <div className="mt-5 h-0.5 w-16 bg-green-800" />
            </div>

            <p
              className="max-w-xl text-sm leading-6 text-gray-600 sm:text-base sm:leading-7 md:text-right"
              style={{
                fontFamily: '"Roboto", sans-serif',
              }}
            >
              Explore our coconut oil range, prepared in different styles for
              everyday cooking, traditional use and personal preferences.
            </p>
          </div>
        </div>

        {/* Interactive showcase */}
        <div
          className={`overflow-hidden rounded-[2rem] border border-[#d9d1c1] bg-[#f8f6f0] shadow-[0_24px_70px_rgba(71,60,40,0.13)] transition-all delay-100 duration-700 motion-reduce:transition-none ${
            inView
              ? 'translate-y-0 opacity-100'
              : 'translate-y-8 opacity-0'
          }`}
        >
          <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
            {/* Product image area */}
            <div className="relative min-h-[360px] overflow-hidden bg-[#dcd4c3] sm:min-h-[480px] lg:min-h-[590px]">
              <img
                key={`${activeProduct.slug}-${
                  showBackImage ? 'back' : 'front'
                }`}
                src={displayedImage}
                alt={`${activeProduct.name} ${
                  showBackImage ? 'back' : 'front'
                }`}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-[1.025] motion-reduce:transition-none"
                loading="lazy"
                decoding="async"
              />

              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent"
              />

              {/* Product position */}
              <span
                className="absolute left-5 top-5 flex h-11 min-w-11 items-center justify-center rounded-full border border-white/30 bg-black/30 px-3 text-xs font-bold tracking-[0.15em] text-white backdrop-blur-md sm:left-7 sm:top-7"
                style={{
                  fontFamily: '"Montserrat", sans-serif',
                }}
              >
                {String(activeIndex + 1).padStart(2, '0')}
              </span>

              {/* Front and back controls */}
              {hasBackImage && (
                <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-xl border border-white/20 bg-black/40 p-1.5 backdrop-blur-md sm:bottom-7 sm:left-7">
                  <button
                    type="button"
                    onClick={() => setShowBackImage(false)}
                    aria-pressed={!showBackImage}
                    className={`rounded-lg px-4 py-2 text-xs font-semibold transition sm:text-sm ${
                      !showBackImage
                        ? 'bg-white text-gray-950'
                        : 'text-white hover:bg-white/10'
                    }`}
                    style={{
                      fontFamily: '"Roboto", sans-serif',
                    }}
                  >
                    Front
                  </button>

                  <button
                    type="button"
                    onClick={() => setShowBackImage(true)}
                    aria-pressed={showBackImage}
                    className={`rounded-lg px-4 py-2 text-xs font-semibold transition sm:text-sm ${
                      showBackImage
                        ? 'bg-white text-gray-950'
                        : 'text-white hover:bg-white/10'
                    }`}
                    style={{
                      fontFamily: '"Roboto", sans-serif',
                    }}
                  >
                    Back
                  </button>
                </div>
              )}

              {showBackImage && (
                <button
                  type="button"
                  onClick={() => setShowBackImage(false)}
                  aria-label={`Return to the front image of ${activeProduct.name}`}
                  className="absolute bottom-6 right-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-md transition hover:bg-white hover:text-gray-950 sm:bottom-8 sm:right-7"
                >
                  <RotateCcw
                    aria-hidden="true"
                    className="h-4 w-4"
                    strokeWidth={2}
                  />
                </button>
              )}
            </div>

            {/* Product information */}
            <div className="flex flex-col p-5 sm:p-8 lg:p-10">
              {/* Product selectors */}
              <div
                role="tablist"
                aria-label="Select a coconut oil product"
                className="grid gap-2 sm:grid-cols-3 lg:grid-cols-1"
              >
                {products.map((product, index) => {
                  const isActive = index === activeIndex

                  return (
                    <button
                      key={product.id ?? product.slug}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => selectProduct(index)}
                      className={`group flex min-h-[72px] items-center gap-3 rounded-xl border p-3 text-left transition duration-300 sm:p-4 ${
                        isActive
                          ? 'border-green-800 bg-green-900 text-white shadow-lg shadow-green-950/10'
                          : 'border-gray-200 bg-white text-gray-700 hover:border-green-800/30 hover:bg-green-50/50'
                      }`}
                    >
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-xs font-bold ${
                          isActive
                            ? 'bg-green-300 text-green-950'
                            : 'bg-green-800/[0.08] text-green-800'
                        }`}
                        style={{
                          fontFamily: '"Montserrat", sans-serif',
                        }}
                      >
                        {String(index + 1).padStart(2, '0')}
                      </span>

                      <span
                        className="min-w-0 flex-1 text-sm font-bold leading-snug sm:text-base"
                        style={{
                          fontFamily: '"Raleway", sans-serif',
                        }}
                      >
                        {product.name}
                      </span>

                      <ChevronRight
                        aria-hidden="true"
                        className={`hidden h-4 w-4 shrink-0 transition-transform duration-300 lg:block ${
                          isActive
                            ? 'translate-x-0 text-green-300'
                            : 'text-gray-400 group-hover:translate-x-0.5 group-hover:text-green-800'
                        }`}
                      />
                    </button>
                  )
                })}
              </div>

              {/* Active product details */}
              <div
                key={activeProduct.slug}
                role="tabpanel"
                className="flex flex-1 flex-col pt-8"
              >
                <p
                  className="text-xs font-bold uppercase tracking-[0.2em] text-green-800"
                  style={{
                    fontFamily: '"Montserrat", sans-serif',
                  }}
                >
                  Coconut Oil Collection
                </p>

                <h3
                  className="mt-3 text-2xl font-extrabold leading-tight text-gray-950 sm:text-3xl"
                  style={{
                    fontFamily: '"Raleway", sans-serif',
                  }}
                >
                  {activeProduct.name}
                </h3>

                <div className="mt-5 h-0.5 w-12 bg-green-800" />

                <div
                  className="mt-5 space-y-3 text-sm leading-7 text-gray-600 sm:text-base"
                  style={{
                    fontFamily: '"Roboto", sans-serif',
                  }}
                >
                  <ProductDescription
                    description={
                      activeProduct.shortDescriptionForHomePage
                    }
                  />
                </div>

                {/* Actions */}
                <div className="mt-auto flex flex-col gap-3 pt-8 sm:flex-row">
                  <Link
                    to={`/product/${activeProduct.slug}`}
                    className="group inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-green-900 px-5 py-3 text-sm font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-green-800 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-800 sm:text-base"
                    style={{
                      fontFamily: '"Roboto", sans-serif',
                    }}
                  >
                    <span>View Product</span>

                    <ArrowUpRight
                      aria-hidden="true"
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </Link>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-xl border border-green-900/20 bg-white px-5 py-3 text-sm font-bold text-green-900 transition duration-300 hover:-translate-y-0.5 hover:border-green-800 hover:bg-green-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-800 sm:text-base"
                    style={{
                      fontFamily: '"Roboto", sans-serif',
                    }}
                  >
                    <MessageCircle
                      aria-hidden="true"
                      className="h-5 w-5"
                      strokeWidth={2}
                    />

                    <span>Order on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p
          className="mt-5 text-center text-xs leading-5 text-gray-500 sm:text-sm"
          style={{
            fontFamily: '"Roboto", sans-serif',
          }}
        >
          Select an oil above to view its details, images and ordering options.
        </p>
      </div>
    </section>
  )
}