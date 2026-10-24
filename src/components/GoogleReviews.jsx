import React, {
  useRef,
  useState,
} from 'react'

import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  MessageSquareQuote,
  PenLine,
  Star,
} from 'lucide-react'

const googleReviews = [
  {
    id: 1,
    name: 'pooja s.p',
    initials: 'PS',
    rating: 5,
    review:
      'I am a regular customer of Vanya Eco Products, and I have been using your products for quite some time. I usually order coconut cooking oil, Venda Velichena (especially for my daughter), and various masala powders. I am really impressed with the quality, freshness, and authenticity of the products. The products are consistently good, and I truly appreciate the effort you put into maintaining such high standards. I am very happy with my purchases and will definitely continue to recommend Vanya Eco Products to my friends and family.',
  },
  {
    id: 2,
    name: 'Manaf Kp',
    initials: 'MK',
    rating: 5,
    review:
      'I recently ordered Vanya Virgin Coconut Oil to the UAE, and I’m genuinely very happy with the overall experience. The international shipping was smooth, and the product reached me safely in excellent condition. The packaging was done really well, with the bottle properly secured and absolutely no leakage or damage during transit. Coming to the oil itself, the quality feels excellent. It has a fresh, natural coconut aroma and feels very pure compared to many commercially available coconut oils I have tried here in the UAE. You can really feel the difference in quality. It’s wonderful to receive a product from Wayanad all the way here in the UAE with the same freshness and care. Very satisfied with Vanya Eco Products and will definitely be ordering again. Highly recommended!',
  },
  {
    id: 3,
    name: 'sufail ps',
    initials: 'SP',
    rating: 5,
    review:
      'Tried Vanya’s cashews, almonds and Pepper Cashew. Everything was fresh and crunchy, but the Pepper Cashew was definitely the favourite in our house.',
  },
  {
    id: 4,
    name: 'Chethan Kumar M Jetty',
    initials: 'CJ',
    rating: 5,
    review:
      'I have recently purchased honey bottle from Vanya Eco, and had a great experience. When I tasted it first time, it took me back to my childhood days where I was having original (genuine) honey. Thanks to Vanya Eco for giving the best products. My best wishes to the team.',
  },
  {
    id: 5,
    name: 'ajay dominic',
    initials: 'AD',
    rating: 5,
    review:
      'I recently purchased from Vanya Eco Products, and I am extremely impressed! The quality of the products is top-notch, clearly made with great care and attention to eco-friendly standards. On top of that, their customer service was smooth, helpful, and very prompt. It’s wonderful to support a brand that offers both sustainable quality and excellent service. Highly recommended.',
  },
]

const googleProfileUrl =
  'https://www.google.com/maps?cid=15219443237594813071'

const googleReviewUrl =
  'https://g.page/r/CY9SDxD9UjbTEAE/review'

export default function GoogleReviews() {
  const sliderRef = useRef(null)
  const [expandedReview, setExpandedReview] =
    useState(null)

  const scrollReviews = (direction) => {
    const slider = sliderRef.current

    if (!slider) return

    const firstCard =
      slider.querySelector('[data-review-card]')

    const cardWidth =
      firstCard?.getBoundingClientRect().width ||
      slider.clientWidth

    const gap = 20

    slider.scrollBy({
      left:
        direction === 'next'
          ? cardWidth + gap
          : -(cardWidth + gap),
      behavior: 'smooth',
    })
  }

  return (
    <section
      id="google-reviews"
      aria-labelledby="google-reviews-title"
      className="relative overflow-hidden bg-[#f5f1e8] py-16 text-[#17231b] sm:py-20"
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="absolute -left-28 top-10 h-72 w-72 rounded-full bg-green-700/[0.05] blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute -right-28 bottom-0 h-80 w-80 rounded-full bg-amber-500/[0.07] blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p
              className="text-xs font-bold uppercase tracking-[0.26em] text-[#39734d] sm:text-sm"
              style={{
                fontFamily: '"Roboto", sans-serif',
              }}
            >
              Customer Reviews
            </p>

            <h2
              id="google-reviews-title"
              className="mt-3 text-3xl font-extrabold leading-tight text-[#17271d] sm:text-4xl"
              style={{
                fontFamily: '"Raleway", sans-serif',
              }}
            >
              Loved by Our Customers
            </h2>

            <p
              className="mt-4 max-w-2xl text-base leading-7 text-[#637067] sm:text-lg"
              style={{
                fontFamily: '"Roboto", sans-serif',
              }}
            >
              Real experiences shared by customers who have
              purchased and used Vanya Eco Products.
            </p>
          </div>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-3 sm:flex">
            <button
              type="button"
              onClick={() => scrollReviews('previous')}
              aria-label="Show previous customer review"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#285c3a]/20 bg-white text-[#285c3a] shadow-sm transition hover:border-[#285c3a]/40 hover:bg-[#285c3a] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#39734d]"
            >
              <ChevronLeft
                aria-hidden="true"
                className="h-5 w-5"
              />
            </button>

            <button
              type="button"
              onClick={() => scrollReviews('next')}
              aria-label="Show next customer review"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#285c3a]/20 bg-white text-[#285c3a] shadow-sm transition hover:border-[#285c3a]/40 hover:bg-[#285c3a] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#39734d]"
            >
              <ChevronRight
                aria-hidden="true"
                className="h-5 w-5"
              />
            </button>
          </div>
        </div>

        {/* Reviews slider */}
        <div
          ref={sliderRef}
          className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {googleReviews.map((review) => {
            const isExpanded =
              expandedReview === review.id

            const isLongReview =
              review.review.length > 280

            return (
              <article
                key={review.id}
                data-review-card
                className="flex min-w-[88%] snap-start flex-col rounded-2xl border border-[#285c3a]/10 bg-white p-5 shadow-[0_12px_35px_rgba(31,56,39,0.07)] sm:min-w-[47%] sm:p-6 lg:min-w-[calc((100%-40px)/3)] lg:basis-[calc((100%-40px)/3)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex min-w-0 items-center gap-3">
                    <span
                      aria-hidden="true"
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#e8efe9] text-sm font-bold uppercase text-[#285c3a]"
                      style={{
                        fontFamily:
                          '"Raleway", sans-serif',
                      }}
                    >
                      {review.initials}
                    </span>

                    <div className="min-w-0">
                      <h3
                        className="truncate font-bold text-[#1d3023]"
                        style={{
                          fontFamily:
                            '"Raleway", sans-serif',
                        }}
                      >
                        {review.name}
                      </h3>

                      <p
                        className="mt-0.5 text-xs text-[#788279]"
                        style={{
                          fontFamily:
                            '"Roboto", sans-serif',
                        }}
                      >
                        Posted on Google
                      </p>
                    </div>
                  </div>

                  <MessageSquareQuote
                    aria-hidden="true"
                    className="h-6 w-6 shrink-0 text-[#39734d]/45"
                  />
                </div>

                {/* Star rating */}
                <div
                  className="mt-5 flex items-center gap-1"
                  aria-label={`${review.rating} out of 5 stars`}
                >
                  {Array.from({
                    length: review.rating,
                  }).map((_, index) => (
                    <Star
                      key={index}
                      aria-hidden="true"
                      className="h-5 w-5 fill-[#e3a72f] text-[#e3a72f]"
                    />
                  ))}
                </div>

                {/* Review text */}
                <p
                  className={`mt-5 text-sm leading-7 text-[#58635b] sm:text-base ${
                    isExpanded
                      ? ''
                      : 'line-clamp-6'
                  }`}
                  style={{
                    fontFamily: '"Roboto", sans-serif',
                  }}
                >
                  {review.review}
                </p>

                {isLongReview && (
                  <button
                    type="button"
                    onClick={() =>
                      setExpandedReview(
                        isExpanded
                          ? null
                          : review.id
                      )
                    }
                    className="mt-3 self-start text-sm font-semibold text-[#39734d] transition hover:text-[#244f32]"
                  >
                    {isExpanded
                      ? 'Show less'
                      : 'Read more'}
                  </button>
                )}

                <div className="mt-auto pt-6">
                  <div className="border-t border-[#285c3a]/10 pt-4">
                    <span className="text-xs font-medium text-[#7b857d]">
                      Google customer review
                    </span>
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        {/* Mobile navigation */}
        <div className="mt-2 flex items-center justify-center gap-3 sm:hidden">
          <button
            type="button"
            onClick={() => scrollReviews('previous')}
            aria-label="Show previous customer review"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#285c3a]/20 bg-white text-[#285c3a]"
          >
            <ChevronLeft
              aria-hidden="true"
              className="h-5 w-5"
            />
          </button>

          <button
            type="button"
            onClick={() => scrollReviews('next')}
            aria-label="Show next customer review"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#285c3a]/20 bg-white text-[#285c3a]"
          >
            <ChevronRight
              aria-hidden="true"
              className="h-5 w-5"
            />
          </button>
        </div>

        {/* Google actions */}
        <div className="mt-8 rounded-2xl border border-[#285c3a]/10 bg-[#173722] px-5 py-7 text-white sm:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h3
                className="text-xl font-bold sm:text-2xl"
                style={{
                  fontFamily: '"Raleway", sans-serif',
                }}
              >
                Your experience matters to us
              </h3>

              <p
                className="mt-2 text-sm leading-6 text-white/65 sm:text-base"
                style={{
                  fontFamily: '"Roboto", sans-serif',
                }}
              >
                Read more customer experiences or share your
                own genuine experience with Vanya on Google.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={googleProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3 font-semibold text-white transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                style={{
                  fontFamily:
                    '"Roboto", sans-serif',
                }}
              >
                Read All Reviews

                <ExternalLink
                  aria-hidden="true"
                  className="h-4 w-4"
                />
              </a>

              <a
                href={googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-[#173722] transition hover:bg-[#edf4ee] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                style={{
                  fontFamily:
                    '"Roboto", sans-serif',
                }}
              >
                <PenLine
                  aria-hidden="true"
                  className="h-4 w-4"
                />

                Write a Review
              </a>
            </div>
          </div>
        </div>

        <p
          className="mt-5 text-center text-xs leading-5 text-[#778179]"
          style={{
            fontFamily: '"Roboto", sans-serif',
          }}
        >
          Selected customer reviews originally shared on
          Google.
        </p>
      </div>
    </section>
  )
}