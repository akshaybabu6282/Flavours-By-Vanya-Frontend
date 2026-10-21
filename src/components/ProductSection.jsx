import React from 'react'
import ProductSlider from './ProductSlider'

export default function ProductSection({
  title,
  id,
  products,
  subtitle,
}) {
  return (
    <section
      id={id}
      className="py-10 md:py-14"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
        <h2
          className="mb-2 text-center font-display text-2xl md:mb-4 md:text-3xl"
          style={{
            fontFamily: '"Raleway", sans-serif',
          }}
        >
          {title}
        </h2>

        <p
          className="mb-4 text-center text-sm text-gray-400 md:mb-6 md:text-base"
          style={{
            fontFamily: '"Roboto", sans-serif',
          }}
        >
          {subtitle}
        </p>
      </div>

      <div className="w-full overflow-x-hidden px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <ProductSlider products={products} />
      </div>
    </section>
  )
}