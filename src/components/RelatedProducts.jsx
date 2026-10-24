import React from 'react'

import {
  ArrowRight,
} from 'lucide-react'

import {
  Link,
} from 'react-router-dom'

export default function RelatedProducts({
  currentProduct,
  products,
}) {
  const categoryProducts = products.filter(
    (item) =>
      item.category === currentProduct.category &&
      item.slug !== currentProduct.slug
  )

  const currentIndex = products
    .filter(
      (item) =>
        item.category === currentProduct.category
    )
    .findIndex(
      (item) =>
        item.slug === currentProduct.slug
    )

  const orderedProducts = [
    ...categoryProducts.slice(
      Math.max(currentIndex, 0)
    ),
    ...categoryProducts.slice(
      0,
      Math.max(currentIndex, 0)
    ),
  ]

  const relatedProducts = orderedProducts.slice(0, 4)

  if (!relatedProducts.length) return null

  return (
    <section className="bg-[#0e1b13] py-16 text-white sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#71ad80]">
              Continue exploring
            </p>

            <h2
              className="mt-3 text-3xl font-extrabold sm:text-4xl"
              style={{
                fontFamily: '"Raleway", sans-serif',
              }}
            >
              Related Products
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-white/55 sm:text-right">
            Discover more products from the same category.
          </p>
        </div>

        <div className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-4 md:overflow-visible">
          {relatedProducts.map((item) => (
            <Link
              key={item.id}
              to={`/product/${item.slug}`}
              className="group min-w-[78%] snap-start overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] transition duration-300 hover:-translate-y-1 hover:border-[#71ad80]/40 hover:bg-white/[0.09] sm:min-w-[44%] md:min-w-0"
            >
              <div className="aspect-[4/3] overflow-hidden bg-white/5">
                <img
                  src={item.imageBg}
                  alt={item.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="p-5">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#71ad80]">
                  {item.category}
                </p>

                <h3
                  className="mt-2 text-xl font-bold text-white"
                  style={{
                    fontFamily: '"Merriweather", serif',
                  }}
                >
                  {item.name}
                </h3>

                <p
                  className="mt-3 line-clamp-3 text-sm leading-6 text-white/55"
                  style={{
                    fontFamily: '"Roboto", sans-serif',
                  }}
                >
                  {item.shortDescription}
                </p>

                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#91c59d]">
                  View product

                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}