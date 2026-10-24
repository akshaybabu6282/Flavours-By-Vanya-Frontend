import React, {
  useCallback,
  useEffect,
  useState,
} from 'react'

import {
  ChevronLeft,
  ChevronRight,
  Expand,
  X,
} from 'lucide-react'

export default function Gallery({
  images = [],
  productName = 'Product',
}) {
  const [openIndex, setOpenIndex] = useState(null)

  const closeGallery = useCallback(() => {
    setOpenIndex(null)
  }, [])

  const showPrevious = useCallback(() => {
    setOpenIndex((currentIndex) => {
      if (currentIndex === null) return null

      return currentIndex === 0
        ? images.length - 1
        : currentIndex - 1
    })
  }, [images.length])

  const showNext = useCallback(() => {
    setOpenIndex((currentIndex) => {
      if (currentIndex === null) return null

      return currentIndex === images.length - 1
        ? 0
        : currentIndex + 1
    })
  }, [images.length])

  useEffect(() => {
    if (openIndex === null) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeGallery()
      }

      if (event.key === 'ArrowLeft') {
        showPrevious()
      }

      if (event.key === 'ArrowRight') {
        showNext()
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [
    openIndex,
    closeGallery,
    showPrevious,
    showNext,
  ])

  if (!images.length) return null

  return (
    <section className="bg-[#fffdf8] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#39734d]">
            A closer look
          </p>

          <h2
            className="mt-3 text-3xl font-extrabold text-[#18251c] sm:text-4xl"
            style={{
              fontFamily: '"Raleway", sans-serif',
            }}
          >
            Product Gallery
          </h2>

          <p className="mt-4 text-[#68736b]">
            Select any image to view it in greater detail.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-4">
          {images.map((image, index) => (
            <button
              key={`${image}-${index}`}
              type="button"
              onClick={() => setOpenIndex(index)}
              className="group relative aspect-square overflow-hidden rounded-xl bg-[#ece8de] text-left shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#39734d] focus-visible:ring-offset-2 sm:rounded-2xl"
              aria-label={`Open ${productName} gallery image ${index + 1}`}
            >
              <img
                src={image}
                alt={`${productName} gallery view ${index + 1}`}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <span className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />

              <span className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[#21452e] opacity-0 shadow-md transition group-hover:opacity-100">
                <Expand className="h-4 w-4" />
              </span>
            </button>
          ))}
        </div>
      </div>

      {openIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${productName} image viewer`}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              closeGallery()
            }
          }}
        >
          <button
            type="button"
            onClick={closeGallery}
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-6 sm:top-6"
            aria-label="Close gallery"
          >
            <X className="h-6 w-6" />
          </button>

          {images.length > 1 && (
            <button
              type="button"
              onClick={showPrevious}
              className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:left-6"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          )}

          <div className="flex max-h-[85vh] max-w-6xl flex-col items-center">
            <img
              src={images[openIndex]}
              alt={`${productName} enlarged gallery view ${openIndex + 1}`}
              className="max-h-[78vh] max-w-full rounded-xl object-contain"
            />

            <p className="mt-4 text-sm text-white/70">
              {openIndex + 1} / {images.length}
            </p>
          </div>

          {images.length > 1 && (
            <button
              type="button"
              onClick={showNext}
              className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-6"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          )}
        </div>
      )}
    </section>
  )
}