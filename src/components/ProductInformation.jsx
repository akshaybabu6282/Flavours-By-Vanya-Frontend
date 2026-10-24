import React, { useState } from 'react'

import {
  Archive,
  Check,
  ChevronDown,
  CircleAlert,
  CookingPot,
  ListChecks,
  Sparkles,
  Utensils,
} from 'lucide-react'

const sectionConfiguration = [
  {
    id: 'ingredients',
    label: 'Ingredients',
    icon: ListChecks,
  },
  {
    id: 'usage',
    label: 'Usage',
    icon: Utensils,
  },
  {
    id: 'benefits',
    label: 'Benefits',
    icon: Sparkles,
  },
  {
    id: 'howToUse',
    label: 'How to Use',
    icon: CookingPot,
  },
  {
    id: 'storage',
    label: 'Storage & Allergens',
    icon: Archive,
  },
]

function InformationContent({
  section,
  information,
}) {
  if (section === 'ingredients') {
    const hasOneIngredient =
      information.ingredients.items.length === 1

    return (
      <div
        className={`grid gap-5 ${
          information.ingredients.note
            ? 'lg:grid-cols-[minmax(0,1fr)_minmax(260px,0.72fr)] lg:items-center'
            : ''
        }`}
      >
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#39734d]">
            What it contains
          </p>

          <ul
            className={`grid gap-3 ${
              hasOneIngredient
                ? 'max-w-xl'
                : 'sm:grid-cols-2'
            }`}
          >
            {information.ingredients.items.map(
              (ingredient) => (
                <li
                  key={ingredient}
                  className="flex min-h-12 items-center gap-3 rounded-xl border border-[#285c3a]/10 bg-white/80 px-4 py-3 text-[#35463a] shadow-sm"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#e3eee5] text-[#39734d]">
                    <Check
                      aria-hidden="true"
                      className="h-4 w-4"
                    />
                  </span>

                  <span className="font-medium">
                    {ingredient}
                  </span>
                </li>
              )
            )}
          </ul>
        </div>

        {information.ingredients.note && (
          <div className="rounded-xl border border-[#285c3a]/10 bg-[#e9f0ea] px-5 py-4">
            <p className="text-xs font-bold uppercase tracking-[0.17em] text-[#39734d]">
              Product note
            </p>

            <p className="mt-2 text-sm leading-6 text-[#5b675e]">
              {information.ingredients.note}
            </p>
          </div>
        )}
      </div>
    )
  }

  if (section === 'usage') {
    return (
      <div className="grid gap-5 lg:grid-cols-[auto_minmax(0,1fr)] lg:items-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#dfeae1] text-[#39734d]">
          <Utensils
            aria-hidden="true"
            className="h-6 w-6"
          />
        </span>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#39734d]">
            Recommended uses
          </p>

          <p className="mt-2 max-w-4xl text-base leading-7 text-[#59655d] sm:text-lg sm:leading-8">
            {information.usageInfo}
          </p>
        </div>
      </div>
    )
  }

  if (section === 'benefits') {
    return (
      <ul className="grid gap-4 sm:grid-cols-3">
        {information.benefits.map(
          (benefit, index) => (
            <li
              key={benefit}
              className="rounded-xl border border-[#285c3a]/10 bg-white/80 p-4 shadow-sm"
            >
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#39734d]">
                {String(index + 1).padStart(
                  2,
                  '0'
                )}
              </span>

              <p className="mt-2 leading-7 text-[#536058]">
                {benefit}
              </p>
            </li>
          )
        )}
      </ul>
    )
  }

  if (section === 'howToUse') {
    return (
      <ol className="grid gap-4 lg:grid-cols-3">
        {information.howToUse.map(
          (instruction, index) => (
            <li
              key={instruction}
              className="flex gap-4 rounded-xl border border-[#285c3a]/10 bg-white/80 p-4 shadow-sm"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#234c31] text-sm font-bold text-white">
                {index + 1}
              </span>

              <p className="pt-0.5 text-sm leading-6 text-[#59655d] sm:text-base">
                {instruction}
              </p>
            </li>
          )
        )}
      </ol>
    )
  }

  return (
    <div className="grid gap-5 lg:grid-cols-[1fr_0.9fr]">
      <div className="rounded-xl border border-[#285c3a]/10 bg-white/80 p-5 shadow-sm">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#39734d]">
          Storage
        </p>

        <p className="mt-3 leading-7 text-[#59655d]">
          {information.storage}
        </p>
      </div>

      <div className="flex items-start gap-3 rounded-xl border border-amber-500/20 bg-amber-50 p-5">
        <CircleAlert
          aria-hidden="true"
          className="mt-0.5 h-5 w-5 shrink-0 text-amber-700"
        />

        <div>
          <p className="font-semibold text-[#493714]">
            Allergen and product information
          </p>

          <p className="mt-2 text-sm leading-6 text-[#6f603d]">
            {information.allergenInfo}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function ProductInformation({
  information,
}) {
  const [activeSection, setActiveSection] =
    useState('ingredients')

  const [mobileSection, setMobileSection] =
    useState('ingredients')

  if (!information) return null

  return (
    <section
      aria-labelledby="product-information-title"
      className="bg-[#fffdf8] py-14 sm:py-16"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p
            className="text-xs font-bold uppercase tracking-[0.25em] text-[#39734d]"
            style={{
              fontFamily: '"Roboto", sans-serif',
            }}
          >
            Useful information
          </p>

          <h2
            id="product-information-title"
            className="mt-3 text-3xl font-extrabold text-[#18251c] sm:text-4xl"
            style={{
              fontFamily: '"Raleway", sans-serif',
            }}
          >
            Product Information
          </h2>

          <p
            className="mt-3 text-base leading-7 text-[#68736b]"
            style={{
              fontFamily: '"Roboto", sans-serif',
            }}
          >
            Ingredients, suggested uses and practical
            guidance for getting the best from this
            product.
          </p>
        </div>

        {/* Laptop and tablet tabs */}
        <div className="mt-8 hidden overflow-hidden rounded-2xl border border-[#285c3a]/10 bg-[#f1f4ef] shadow-[0_16px_45px_rgba(31,56,39,0.08)] md:block">
          <div
            role="tablist"
            aria-label="Product information sections"
            className="grid grid-cols-5 border-b border-[#285c3a]/10 bg-white"
          >
            {sectionConfiguration.map(
              ({
                id,
                label,
                icon,
              }) => {
                const isActive =
                  activeSection === id

                return (
                  <button
                    key={id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`product-panel-${id}`}
                    onClick={() =>
                      setActiveSection(id)
                    }
                    className={`relative flex min-h-[76px] flex-col items-center justify-center gap-2 px-3 py-3 text-sm font-semibold transition ${
                      isActive
                        ? 'bg-[#eef4ef] text-[#285c3a]'
                        : 'text-[#68736b] hover:bg-[#f8faf8] hover:text-[#285c3a]'
                    }`}
                  >
                    {React.createElement(icon, {
                      'aria-hidden': true,
                      className: 'h-5 w-5',
                    })}

                    <span>{label}</span>

                    {isActive && (
                      <span className="absolute inset-x-5 bottom-0 h-0.5 rounded-full bg-[#39734d]" />
                    )}
                  </button>
                )
              }
            )}
          </div>

          <div
            id={`product-panel-${activeSection}`}
            role="tabpanel"
            className="p-6 lg:p-7"
            style={{
              fontFamily: '"Roboto", sans-serif',
            }}
          >
            <InformationContent
              section={activeSection}
              information={information}
            />
          </div>
        </div>

        {/* Mobile accordion */}
        <div className="mt-7 space-y-3 md:hidden">
          {sectionConfiguration.map(
            ({
              id,
              label,
              icon,
            }) => {
              const isOpen =
                mobileSection === id

              return (
                <article
                  key={id}
                  className="overflow-hidden rounded-2xl border border-[#285c3a]/10 bg-white shadow-sm"
                >
                  <h3>
                    <button
                      type="button"
                      onClick={() =>
                        setMobileSection(
                          isOpen ? null : id
                        )
                      }
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    >
                      <span className="flex items-center gap-3 font-semibold text-[#263b2d]">
                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e8f0e9] text-[#39734d]">
                          {React.createElement(
                            icon,
                            {
                              'aria-hidden': true,
                              className:
                                'h-4 w-4',
                            }
                          )}
                        </span>

                        {label}
                      </span>

                      <ChevronDown
                        aria-hidden="true"
                        className={`h-5 w-5 text-[#39734d] transition-transform duration-300 ${
                          isOpen
                            ? 'rotate-180'
                            : ''
                        }`}
                      />
                    </button>
                  </h3>

                  {isOpen && (
                    <div
                      className="border-t border-[#285c3a]/10 bg-[#f7f8f5] px-5 py-5"
                      style={{
                        fontFamily:
                          '"Roboto", sans-serif',
                      }}
                    >
                      <InformationContent
                        section={id}
                        information={information}
                      />
                    </div>
                  )}
                </article>
              )
            }
          )}
        </div>
      </div>
    </section>
  )
}