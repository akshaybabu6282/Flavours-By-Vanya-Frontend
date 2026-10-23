import React from 'react'
import ProductSlider from './ProductSlider'

export default function ProductSection({
  title,
  id,
  products = [],
  subtitle,
}) {
  const productCount = products.length

  return (
    <section
      id={id}
      className="scroll-mt-24 overflow-hidden border-b border-white/[0.07] bg-[#070a08] py-14 text-white sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Category heading */}
        <div className="mb-8 flex flex-col gap-5 sm:mb-10 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p
              className="text-xs font-bold uppercase tracking-[0.25em] text-green-500 sm:text-sm"
              style={{
                fontFamily: '"Montserrat", sans-serif',
              }}
            >
              Explore Our Collection
            </p>

            <h2
              className="mt-3 text-3xl font-extrabold leading-tight text-white sm:text-4xl"
              style={{
                fontFamily: '"Raleway", sans-serif',
              }}
            >
              {title}
            </h2>

            <div className="mt-4 h-0.5 w-14 bg-green-500" />

            <p
              className="mt-4 max-w-2xl text-sm leading-6 text-gray-400 sm:text-base sm:leading-7"
              style={{
                fontFamily: '"Roboto", sans-serif',
              }}
            >
              {subtitle}
            </p>
          </div>

          <div
            className="inline-flex w-fit items-center rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-gray-300"
            style={{
              fontFamily: '"Montserrat", sans-serif',
            }}
          >
            {productCount} {productCount === 1 ? 'Product' : 'Products'}
          </div>
        </div>

        <ProductSlider products={products} categoryTitle={title} />
      </div>
    </section>
  )
}