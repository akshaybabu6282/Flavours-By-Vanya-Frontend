import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import useInView from '../hooks/useInView'

export default function ProductCard({ product }) {
  const [ref, inView] = useInView()
  const hasBackImage = Boolean(product.imageBack)

  return (
    <article
      ref={ref}
      className={`group h-full overflow-hidden rounded-2xl border border-white/[0.09] bg-white/[0.045] transition-all duration-700 hover:-translate-y-1 hover:border-green-500/35 hover:bg-white/[0.065] hover:shadow-[0_20px_50px_rgba(0,0,0,0.32)] motion-reduce:transition-none ${
        inView
          ? 'translate-y-0 opacity-100'
          : 'translate-y-6 opacity-0'
      }`}
    >
      <Link
        to={`/product/${product.slug}`}
        aria-label={`View ${product.name}`}
        className="flex h-full flex-col focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-green-500"
      >
        {/* Product image */}
        <div className="relative aspect-[4/3] overflow-hidden bg-[#111612]">
          <img
            src={product.imageFront}
            alt={`${product.name} front`}
            className={`absolute inset-0 h-full w-full object-cover transition-all duration-500 group-hover:scale-[1.03] motion-reduce:transition-none ${
              hasBackImage ? 'group-hover:opacity-0' : ''
            }`}
            loading="lazy"
            decoding="async"
          />

          {hasBackImage && (
            <img
              src={product.imageBack}
              alt={`${product.name} back`}
              className="absolute inset-0 h-full w-full scale-[1.03] object-cover opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100 motion-reduce:transition-none"
              loading="lazy"
              decoding="async"
            />
          )}

          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-50"
          />
        </div>

        {/* Product content */}
        <div className="flex flex-1 flex-col p-4 sm:p-5">
          <h3
            className="text-lg font-bold leading-snug text-white transition-colors duration-300 group-hover:text-green-400 sm:text-xl"
            style={{
              fontFamily: '"Raleway", sans-serif',
            }}
          >
            {product.name}
          </h3>

          <p
            className="mt-2 min-h-[4.5rem] overflow-hidden text-sm leading-6 text-gray-400"
            style={{
              fontFamily: '"Roboto", sans-serif',
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
            }}
          >
            {product.shortDescriptionForHomePage}
          </p>

          <div className="mt-auto flex items-center justify-between border-t border-white/[0.08] pt-4">
            <span
              className="text-sm font-semibold text-green-400"
              style={{
                fontFamily: '"Roboto", sans-serif',
              }}
            >
              View Product
            </span>

            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-white transition-all duration-300 group-hover:border-green-500 group-hover:bg-green-500 group-hover:text-black">
              <ArrowUpRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                strokeWidth={2}
              />
            </span>
          </div>
        </div>
      </Link>
    </article>
  )
}