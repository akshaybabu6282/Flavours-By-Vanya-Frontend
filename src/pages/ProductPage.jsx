import React, {
  useEffect,
  useState,
} from 'react'

import {
  ArrowLeft,
  CheckCircle2,
  Mail,
  MessageCircle,
  PackageCheck,
  Sprout,
  Tag,
} from 'lucide-react'

import {
  useNavigate,
  useParams,
} from 'react-router-dom'

import { Helmet } from 'react-helmet-async'

import Footer from '../components/Footer'
import Gallery from '../components/Gallery'
import ProductFAQ from '../components/ProductFAQ'
import ProductInformation from '../components/ProductInformation'
import ProductStructuredData from '../components/ProductStructuredData'
import RelatedProducts from '../components/RelatedProducts'
import WhatsAppFloating from '../components/WhatsAppFloating'

import { products } from '../data/products'
import { getProductInformation } from '../data/productInformation'

import NotFoundPage from './NotFoundPage'

function renderFormattedText(text = '') {
  return text
    .split(/(\*\*[^*]+\*\*)/g)
    .map((part, index) => {
      if (
        part.startsWith('**') &&
        part.endsWith('**')
      ) {
        return (
          <strong
            key={index}
            className="font-semibold text-[#203526]"
          >
            {part.slice(2, -2)}
          </strong>
        )
      }

      return part
    })
}

export default function ProductPage() {
  const { slug } = useParams()
  const navigate = useNavigate()

  const product = products.find(
    (item) => item.slug === slug
  )

  const [selectedSide, setSelectedSide] =
    useState('front')

  useEffect(() => {
    setSelectedSide('front')
  }, [slug])

  if (!product) {
    return (
      <NotFoundPage
        title="Product not found"
        description="The product you are looking for may have been moved, renamed or is no longer available on this page."
      />
    )
  }

  const information = getProductInformation(
    product.slug
  )

  const selectedImage =
    selectedSide === 'back' && product.imageBack
      ? product.imageBack
      : product.imageFront

  const whatsappMessage = encodeURIComponent(
    `Hi Vanya Eco Products,

I am interested in ${product.name}.

Please share the current availability and ordering details.`
  )

  const bulkEmailSubject = encodeURIComponent(
    `Bulk / Export Enquiry for ${product.name}`
  )

  const bulkEmailBody = encodeURIComponent(
    `Hi Vanya Eco Products,

I would like to enquire about bulk or export supply of ${product.name}.

Please share the available details.

Thank you.`
  )

  return (
    <div className="relative bg-[#f8f6f0] font-sans text-[#17231b]">
      <Helmet>
        <title>
          {product.name} | Vanya Eco Products
        </title>

        <meta
          name="description"
          content={
            product.shortDescription ||
            `${product.name} from Vanya Eco Products.`
          }
        />

        <link
          rel="canonical"
          href={`https://www.vanyaecoproducts.in/product/${product.slug}`}
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:title"
          content={`${product.name} | Vanya Eco Products`}
        />

        <meta
          property="og:description"
          content={
            product.shortDescription ||
            `${product.name} from Vanya Eco Products`
          }
        />

        <meta
          property="og:image"
          content={`https://www.vanyaecoproducts.in${product.imageBg}`}
        />

        <meta
          property="og:url"
          content={`https://www.vanyaecoproducts.in/product/${product.slug}`}
        />

        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="twitter:title"
          content={`${product.name} | Vanya Eco Products`}
        />

        <meta
          name="twitter:description"
          content={
            product.shortDescription ||
            `${product.name} from Vanya Eco Products`
          }
        />

        <meta
          name="twitter:image"
          content={`https://www.vanyaecoproducts.in${product.imageBg}`}
        />
      </Helmet>

      <ProductStructuredData product={product} />

      {/* Product showcase */}
      <section className="relative overflow-hidden bg-[#f4f0e7] pb-14 pt-24 sm:pb-16 sm:pt-28 lg:pb-20 lg:pt-32">
        <div
          aria-hidden="true"
          className="absolute inset-0"
        >
          <img
            src={product.imageBg}
            alt=""
            className="h-full w-full object-cover opacity-[0.07]"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#f4f0e7] via-[#f4f0e7]/95 to-[#f4f0e7]/80" />
        </div>

        <div
          aria-hidden="true"
          className="absolute -left-24 top-28 h-72 w-72 rounded-full bg-[#c99845]/10 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#285c3a]/10 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#1d3e29]/15 bg-white/70 px-4 py-2 text-sm font-semibold text-[#23452f] shadow-sm backdrop-blur-sm transition hover:border-[#285c3a]/35 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#285c3a]"
            style={{
              fontFamily: '"Roboto", sans-serif',
            }}
          >
            <ArrowLeft
              aria-hidden="true"
              className="h-4 w-4"
            />

            Back
          </button>

          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            {/* Product image */}
            <div className="order-2 lg:order-1">
              <div className="relative mx-auto max-w-[620px]">
                <div
                  aria-hidden="true"
                  className="absolute inset-x-[12%] bottom-4 h-16 rounded-[50%] bg-black/15 blur-2xl"
                />

                <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/55 p-4 shadow-[0_24px_70px_rgba(28,48,34,0.14)] backdrop-blur-sm sm:p-6">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-[#ebe5d8]">
                    <img
                      key={selectedImage}
                      src={selectedImage}
                      alt={`${product.name} ${
                        selectedSide === 'front'
                          ? 'front'
                          : 'back'
                      } view`}
                      className="h-full w-full object-contain p-2 sm:p-4"
                      fetchPriority="high"
                      decoding="async"
                    />

                    <span className="absolute left-4 top-4 rounded-full border border-white/70 bg-white/80 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#285c3a] shadow-sm backdrop-blur-md">
                      {selectedSide === 'front'
                        ? 'Front view'
                        : 'Back view'}
                    </span>
                  </div>

                  {/* Front and back selectors */}
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() =>
                        setSelectedSide('front')
                      }
                      aria-pressed={
                        selectedSide === 'front'
                      }
                      className={`flex items-center gap-3 rounded-xl border p-2 text-left transition ${
                        selectedSide === 'front'
                          ? 'border-[#39734d] bg-[#eef5ef] shadow-sm'
                          : 'border-black/10 bg-white/60 hover:border-[#39734d]/40 hover:bg-white'
                      }`}
                    >
                      <span className="h-14 w-14 shrink-0 overflow-hidden rounded-lg bg-[#eee8dc]">
                        <img
                          src={product.imageFront}
                          alt=""
                          className="h-full w-full object-cover"
                          loading="lazy"
                          decoding="async"
                        />
                      </span>

                      <span className="text-sm font-semibold">
                        Front
                      </span>
                    </button>

                    {product.imageBack && (
                      <button
                        type="button"
                        onClick={() =>
                          setSelectedSide('back')
                        }
                        aria-pressed={
                          selectedSide === 'back'
                        }
                        className={`flex items-center gap-3 rounded-xl border p-2 text-left transition ${
                          selectedSide === 'back'
                            ? 'border-[#39734d] bg-[#eef5ef] shadow-sm'
                            : 'border-black/10 bg-white/60 hover:border-[#39734d]/40 hover:bg-white'
                        }`}
                      >
                        <span className="h-14 w-14 shrink-0 overflow-hidden rounded-lg bg-[#eee8dc]">
                          <img
                            src={product.imageBack}
                            alt=""
                            className="h-full w-full object-cover"
                            loading="lazy"
                            decoding="async"
                          />
                        </span>

                        <span className="text-sm font-semibold">
                          Back
                        </span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Product information */}
            <div className="order-1 lg:order-2">
              <p
                className="text-xs font-bold uppercase tracking-[0.28em] text-[#39734d] sm:text-sm"
                style={{
                  fontFamily: '"Roboto", sans-serif',
                }}
              >
                {product.category}
              </p>

              <h1
                className="mt-4 max-w-2xl text-4xl font-extrabold leading-[1.08] text-[#17271d] sm:text-5xl lg:text-6xl"
                style={{
                  fontFamily: '"Raleway", sans-serif',
                }}
              >
                {product.name}
              </h1>

              <div className="mt-5 h-1 w-16 rounded-full bg-[#c69038]" />

              <p
                className="mt-6 max-w-xl text-base leading-7 text-[#536157] sm:text-lg sm:leading-8"
                style={{
                  fontFamily: '"Roboto", sans-serif',
                }}
              >
                {product.shortDescription ||
                  `Discover ${product.name} from Vanya Eco Products.`}
              </p>

              {/* Trust points */}
              <div className="mt-7 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {[
                  'Carefully selected',
                  'Thoughtfully processed',
                  'Direct assistance',
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 rounded-xl border border-[#285c3a]/10 bg-white/50 px-3 py-3 text-sm font-medium text-[#334b3a]"
                  >
                    <CheckCircle2
                      aria-hidden="true"
                      className="h-4 w-4 shrink-0 text-[#39734d]"
                    />

                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Enquiry buttons */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`https://wa.me/917907662508?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#23763c] px-6 py-3 font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#195f30]"
                  style={{
                    fontFamily:
                      '"Roboto", sans-serif',
                  }}
                >
                  <MessageCircle
                    aria-hidden="true"
                    className="h-5 w-5"
                  />

                  Order on WhatsApp
                </a>

                <a
                  href={`mailto:business@vanyaecoproducts.in?subject=${bulkEmailSubject}&body=${bulkEmailBody}`}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-[#285c3a]/25 bg-white/65 px-6 py-3 font-semibold text-[#23452f] transition hover:-translate-y-0.5 hover:bg-white"
                  style={{
                    fontFamily:
                      '"Roboto", sans-serif',
                  }}
                >
                  <Mail
                    aria-hidden="true"
                    className="h-5 w-5"
                  />

                  Bulk / Export Enquiry
                </a>
              </div>

              <p
                className="mt-4 text-sm leading-6 text-[#6e786f]"
                style={{
                  fontFamily: '"Roboto", sans-serif',
                }}
              >
                Contact us directly for current
                availability and ordering assistance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About product */}
      <section className="bg-[#fffdf8] py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.34fr_0.66fr] lg:gap-16 lg:px-8">
          <div>
            <p
              className="text-xs font-bold uppercase tracking-[0.25em] text-[#39734d]"
              style={{
                fontFamily: '"Roboto", sans-serif',
              }}
            >
              Product story
            </p>

            <h2
              className="mt-3 text-3xl font-extrabold leading-tight text-[#18251c] sm:text-4xl"
              style={{
                fontFamily: '"Raleway", sans-serif',
              }}
            >
              About {product.name}
            </h2>

            <div className="mt-5 h-1 w-14 rounded-full bg-[#c69038]" />

            <p
              className="mt-5 text-sm leading-6 text-[#68736b]"
              style={{
                fontFamily: '"Roboto", sans-serif',
              }}
            >
              Learn more about the product, its
              character and how it is prepared.
            </p>
          </div>

          <div className="relative">
            <span
              aria-hidden="true"
              className="absolute -left-6 top-0 hidden text-8xl font-bold leading-none text-[#39734d]/5 lg:block"
            >
              “
            </span>

            <div className="relative space-y-5">
              {product.description
                .split('\n\n')
                .filter(Boolean)
                .map((paragraph, index) => (
                  <p
                    key={index}
                    className={`leading-8 text-[#566159] ${
                      index === 0
                        ? 'text-lg font-medium text-[#34433a] sm:text-xl'
                        : 'text-base sm:text-lg'
                    }`}
                    style={{
                      fontFamily:
                        '"Roboto", sans-serif',
                    }}
                  >
                    {renderFormattedText(
                      paragraph
                    )}
                  </p>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* What makes it special */}
      {product.descriptionSections?.length >
        0 && (
        <section className="bg-[#edf1eb] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p
                className="text-xs font-bold uppercase tracking-[0.25em] text-[#39734d]"
                style={{
                  fontFamily:
                    '"Roboto", sans-serif',
                }}
              >
                Product details
              </p>

              <h2
                className="mt-3 text-3xl font-extrabold text-[#18251c] sm:text-4xl"
                style={{
                  fontFamily:
                    '"Raleway", sans-serif',
                }}
              >
                What Makes It Special
              </h2>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {product.descriptionSections.map(
                (card, index) => (
                  <article
                    key={`${card.title}-${index}`}
                    className="group overflow-hidden rounded-2xl border border-[#285c3a]/10 bg-[#fffdf8] shadow-[0_14px_40px_rgba(32,53,38,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(32,53,38,0.14)]"
                  >
                    <div className="relative h-52 overflow-hidden">
                      <img
                        src={card.image}
                        alt={card.title}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      />

                      <span className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#183b27] text-sm font-bold text-white shadow-lg">
                        {String(index + 1).padStart(
                          2,
                          '0'
                        )}
                      </span>
                    </div>

                    <div className="p-6">
                      <h3
                        className="text-xl font-bold text-[#1b2c20]"
                        style={{
                          fontFamily:
                            '"Merriweather", serif',
                        }}
                      >
                        {card.title}
                      </h3>

                      <p
                        className="mt-3 text-sm leading-7 text-[#667168] sm:text-base"
                        style={{
                          fontFamily:
                            '"Roboto", sans-serif',
                        }}
                      >
                        {card.text}
                      </p>
                    </div>
                  </article>
                )
              )}
            </div>
          </div>
        </section>
      )}

      {/* Structured product information */}
      <ProductInformation
        information={information}
      />

      {/* Sourcing information */}
      {product.sourcing && (
        <section className="bg-[#173722] py-12 text-white">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="grid gap-6 rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-8 md:grid-cols-3">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#c89a48]/15">
                  <Sprout
                    aria-hidden="true"
                    className="h-5 w-5 text-[#dfb86c]"
                  />
                </span>

                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-[#aebdaf]">
                    Source
                  </p>

                  <p className="mt-1 font-semibold text-white">
                    {product.sourcing.farm}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#c89a48]/15">
                  <PackageCheck
                    aria-hidden="true"
                    className="h-5 w-5 text-[#dfb86c]"
                  />
                </span>

                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-[#aebdaf]">
                    Product type
                  </p>

                  <p className="mt-1 font-semibold text-white">
                    {product.sourcing.type}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#c89a48]/15">
                  <Tag
                    aria-hidden="true"
                    className="h-5 w-5 text-[#dfb86c]"
                  />
                </span>

                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-[#aebdaf]">
                    Harvest information
                  </p>

                  <p className="mt-1 font-semibold text-white">
                    {
                      product.sourcing
                        .harvestSeason
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Gallery */}
      {product.smallImages?.length > 0 && (
        <Gallery
          images={product.smallImages}
          productName={product.name}
        />
      )}

      {/* Frequently asked questions */}
      <ProductFAQ faqs={product.faqs} />

      {/* Related products */}
      <RelatedProducts
        currentProduct={product}
        products={products}
      />

      {/* Final enquiry */}
      <section className="bg-[#f1ebdf] px-5 py-14 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-[#193d28] px-6 py-10 text-center text-white shadow-[0_20px_60px_rgba(23,55,34,0.2)] sm:px-10">
          <p
            className="text-xs font-bold uppercase tracking-[0.24em] text-[#d9b365]"
            style={{
              fontFamily: '"Roboto", sans-serif',
            }}
          >
            Need assistance?
          </p>

          <h2
            className="mt-3 text-2xl font-bold sm:text-3xl"
            style={{
              fontFamily: '"Raleway", sans-serif',
            }}
          >
            Interested in {product.name}?
          </h2>

          <p
            className="mx-auto mt-4 max-w-2xl leading-7 text-white/70"
            style={{
              fontFamily: '"Roboto", sans-serif',
            }}
          >
            Contact our team for current
            availability, ordering assistance, bulk
            supply or export enquiries.
          </p>

          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={`https://wa.me/917907662508?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#2a8a49] px-6 py-3 font-semibold text-white transition hover:bg-[#23763c]"
              style={{
                fontFamily:
                  '"Roboto", sans-serif',
              }}
            >
              <MessageCircle
                aria-hidden="true"
                className="h-5 w-5"
              />

              Enquire on WhatsApp
            </a>

            <a
              href={`mailto:business@vanyaecoproducts.in?subject=${bulkEmailSubject}&body=${bulkEmailBody}`}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white transition hover:bg-white/20"
              style={{
                fontFamily:
                  '"Roboto", sans-serif',
              }}
            >
              <Mail
                aria-hidden="true"
                className="h-5 w-5"
              />

              Bulk / Export Enquiry
            </a>
          </div>
        </div>
      </section>

      <Footer />

      <WhatsAppFloating
        productName={product.name}
      />
    </div>
  )
}