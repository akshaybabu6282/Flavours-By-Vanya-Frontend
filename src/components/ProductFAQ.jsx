import React, { useState } from 'react'

import { ChevronDown } from 'lucide-react'

export default function ProductFAQ({
  faqs = [],
}) {
  const [openIndex, setOpenIndex] = useState(null)

  if (!faqs.length) return null

  return (
    <section className="bg-[#edf1eb] py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-5 sm:px-6">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#39734d]">
            Helpful information
          </p>

          <h2
            className="mt-3 text-3xl font-extrabold text-[#18251c] sm:text-4xl"
            style={{
              fontFamily: '"Raleway", sans-serif',
            }}
          >
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-10 space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            const panelId = `product-faq-panel-${index}`
            const buttonId = `product-faq-button-${index}`

            return (
              <article
                key={`${faq.question}-${index}`}
                className={`overflow-hidden rounded-2xl border bg-[#fffdf8] transition ${
                  isOpen
                    ? 'border-[#39734d]/35 shadow-[0_12px_35px_rgba(32,53,38,0.09)]'
                    : 'border-[#285c3a]/10'
                }`}
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    onClick={() =>
                      setOpenIndex(
                        isOpen ? null : index
                      )
                    }
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6"
                  >
                    <span
                      className="font-semibold leading-6 text-[#22382a]"
                      style={{
                        fontFamily: '"Roboto", sans-serif',
                      }}
                    >
                      {faq.question}
                    </span>

                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#e7eee8] text-[#39734d]">
                      <ChevronDown
                        className={`h-5 w-5 transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </span>
                  </button>
                </h3>

                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="border-t border-[#285c3a]/10 px-5 py-5 sm:px-6"
                  >
                    <p
                      className="leading-7 text-[#606b63]"
                      style={{
                        fontFamily: '"Roboto", sans-serif',
                      }}
                    >
                      {faq.answer}
                    </p>
                  </div>
                )}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}