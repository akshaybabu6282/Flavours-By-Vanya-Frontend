import React, { useCallback, useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import ProductCard from './ProductCard'

export default function ProductSlider({
  products = [],
  categoryTitle = 'products',
}) {
  const containerRef = useRef(null)
  const [canScrollPrevious, setCanScrollPrevious] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  const updateScrollControls = useCallback(() => {
    const container = containerRef.current

    if (!container) return

    const maximumScroll =
      container.scrollWidth - container.clientWidth

    setCanScrollPrevious(container.scrollLeft > 4)
    setCanScrollNext(container.scrollLeft < maximumScroll - 4)
  }, [])

  useEffect(() => {
    const container = containerRef.current

    if (!container) return undefined

    updateScrollControls()

    const handleScroll = () => {
      updateScrollControls()
    }

    container.addEventListener('scroll', handleScroll, {
      passive: true,
    })

    const resizeObserver = new ResizeObserver(() => {
      updateScrollControls()
    })

    resizeObserver.observe(container)

    return () => {
      container.removeEventListener('scroll', handleScroll)
      resizeObserver.disconnect()
    }
  }, [products, updateScrollControls])

  const scrollProducts = (direction) => {
    const container = containerRef.current

    if (!container) return

    const scrollDistance = container.clientWidth * 0.82

    container.scrollBy({
      left:
        direction === 'next'
          ? scrollDistance
          : -scrollDistance,
      behavior: 'smooth',
    })
  }

  if (products.length === 0) {
    return null
  }

  return (
    <div className="relative">
      {/* Slider controls */}
      <div className="mb-4 flex items-center justify-between">
        <p
          className="text-xs text-gray-500 sm:text-sm"
          style={{
            fontFamily: '"Roboto", sans-serif',
          }}
        >
          <span className="sm:hidden">Swipe to explore</span>
          <span className="hidden sm:inline">
            Browse the complete {categoryTitle.toLowerCase()} collection
          </span>
        </p>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => scrollProducts('previous')}
            disabled={!canScrollPrevious}
            aria-label={`View previous ${categoryTitle} products`}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-white transition duration-300 hover:border-green-500/50 hover:bg-green-500 hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-500 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-white/15 disabled:hover:bg-white/[0.06] disabled:hover:text-white"
          >
            <ChevronLeft
              aria-hidden="true"
              className="h-5 w-5"
              strokeWidth={2}
            />
          </button>

          <button
            type="button"
            onClick={() => scrollProducts('next')}
            disabled={!canScrollNext}
            aria-label={`View more ${categoryTitle} products`}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-white transition duration-300 hover:border-green-500/50 hover:bg-green-500 hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-500 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-white/15 disabled:hover:bg-white/[0.06] disabled:hover:text-white"
          >
            <ChevronRight
              aria-hidden="true"
              className="h-5 w-5"
              strokeWidth={2}
            />
          </button>
        </div>
      </div>

      {/* Products */}
      <div
        ref={containerRef}
        role="region"
        aria-label={`${categoryTitle} product collection`}
        className="no-scrollbar flex w-full snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-5 sm:gap-5"
      >
        {products.map((product) => (
          <div
            key={product.id ?? product.slug}
            className="h-auto flex-shrink-0 basis-[82%] snap-start sm:basis-[47%] md:basis-[31%] lg:basis-[24%] xl:basis-[23%]"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      {/* Mobile progress line */}
      <div
        aria-hidden="true"
        className="mx-auto mt-1 h-px w-20 overflow-hidden bg-white/10 sm:hidden"
      >
        <div className="h-full w-1/2 bg-green-500" />
      </div>
    </div>
  )
}