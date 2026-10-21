import React, { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const productLinks = [
  { label: 'Masalas', to: '/#masalas' },
  { label: 'Spices', to: '/#raw-spices' },
  { label: 'Tea & Coffee', to: '/#beverages' },
  { label: 'Nuts & Honey', to: '/#nutsHoney' },
  { label: 'Coconut Oil', to: '/#coconut-oil' },
]

const mainLinks = [
  { label: 'About Us', to: '/#about' },
  { label: 'Book a Stall', to: '/#community-stall' },
  { label: 'Bulk / Export', to: '/#bulk' },
  { label: 'Our Certifications', to: '/#licenses' },
]

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(false)

  const headerRef = useRef(null)
  const location = useLocation()

  const closeNavigation = () => {
    setOpenDropdown(false)
    setOpenMenu(false)
  }

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target)
      ) {
        setOpenDropdown(false)
        setOpenMenu(false)
      }
    }

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setOpenDropdown(false)
        setOpenMenu(false)
      }
    }

    document.addEventListener(
      'pointerdown',
      handleOutsideClick
    )

    document.addEventListener(
      'keydown',
      handleEscape
    )

    return () => {
      document.removeEventListener(
        'pointerdown',
        handleOutsideClick
      )

      document.removeEventListener(
        'keydown',
        handleEscape
      )
    }
  }, [])

  useEffect(() => {
    setOpenDropdown(false)
    setOpenMenu(false)
  }, [location.pathname, location.hash])

  useEffect(() => {
    if (!openMenu) return undefined

    const previousOverflow =
      document.body.style.overflow

    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [openMenu])

  return (
    <header
      ref={headerRef}
      id="site-header"
      className="fixed left-0 top-0 z-50 w-full border-b border-white/50 bg-black/80 text-white backdrop-blur-md "
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-6 lg:px-8">
        <Link
          to="/"
          onClick={closeNavigation}
          aria-label="Vanya Eco Products homepage"
          className="flex items-center"
        >
          <img
            src="/assets/logo.png"
            alt="Vanya Eco Products"
            className="h-14 w-auto rounded-2xl object-contain md:h-16"
          />
        </Link>

        {/* Desktop navigation */}
        <nav
          aria-label="Main navigation"
          className="relative hidden items-center gap-5 text-sm lg:flex"
        >
          <div className="relative">
            <button
              type="button"
              onClick={() =>
                setOpenDropdown((current) => !current)
              }
              aria-expanded={openDropdown}
              aria-controls="desktop-products-menu"
              className="flex items-center gap-1.5 font-bold transition hover:text-green-400"
              style={{
                fontFamily: '"Raleway", sans-serif',
              }}
            >
              Products

              <span
                aria-hidden="true"
                className={`text-[10px] transition-transform duration-200 ${
                  openDropdown ? 'rotate-180' : ''
                }`}
              >
                ▼
              </span>
            </button>

            {openDropdown && (
              <div
                id="desktop-products-menu"
                className="absolute left-0 top-full mt-4 w-56 overflow-hidden rounded-xl border border-white/10 bg-black/95 py-2 shadow-2xl"
              >
                {productLinks.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={closeNavigation}
                    className="block px-4 py-3 text-gray-200 transition hover:bg-green-500/10 hover:text-green-400"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {mainLinks.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={closeNavigation}
              className="font-bold transition hover:text-green-400"
              style={{
                fontFamily: '"Raleway", sans-serif',
              }}
            >
              {item.label}
            </Link>
          ))}

          <Link
            to="/blogs"
            onClick={closeNavigation}
            className="font-bold transition hover:text-green-400"
            style={{
              fontFamily: '"Raleway", sans-serif',
            }}
          >
            Blogs
          </Link>

          <Link
            to="/#contact"
            onClick={closeNavigation}
            className="rounded-lg border border-green-500/60 px-4 py-2 font-bold transition hover:bg-green-500"
            style={{
              fontFamily: '"Raleway", sans-serif',
            }}
          >
            Contact
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => {
            setOpenMenu((current) => !current)
            setOpenDropdown(false)
          }}
          aria-label={
            openMenu
              ? 'Close navigation menu'
              : 'Open navigation menu'
          }
          aria-expanded={openMenu}
          aria-controls="mobile-navigation"
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 transition hover:border-green-500/60 hover:text-green-400 lg:hidden"
        >
          <svg
            aria-hidden="true"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                openMenu
                  ? 'M6 18L18 6M6 6l12 12'
                  : 'M4 6h16M4 12h16M4 18h16'
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile navigation */}
      {openMenu && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="max-h-[calc(100dvh-89px)] overflow-y-auto border-t border-white/10 bg-black/95 px-5 py-4 shadow-2xl lg:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col">
            <div className="border-b border-white/10">
              <button
                type="button"
                onClick={() =>
                  setOpenDropdown(
                    (current) => !current
                  )
                }
                aria-expanded={openDropdown}
                aria-controls="mobile-products-menu"
                className="flex w-full items-center justify-between py-4 text-left font-bold transition hover:text-green-400"
                style={{
                  fontFamily:
                    '"Raleway", sans-serif',
                }}
              >
                <span>Products</span>

                <span
                  aria-hidden="true"
                  className={`text-xs transition-transform duration-200 ${
                    openDropdown ? 'rotate-180' : ''
                  }`}
                >
                  ▼
                </span>
              </button>

              <div
                id="mobile-products-menu"
                className={`grid overflow-hidden transition-all duration-300 ${
                  openDropdown
                    ? 'grid-rows-[1fr] opacity-100'
                    : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="min-h-0">
                  <div className="mb-3 overflow-hidden rounded-xl border border-white/10 bg-white/[0.04]">
                    {productLinks.map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        onClick={closeNavigation}
                        className="block border-b border-white/5 px-4 py-3.5 text-sm text-gray-200 transition last:border-b-0 hover:bg-green-500/10 hover:text-green-400"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {mainLinks.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={closeNavigation}
                className="border-b border-white/10 py-4 font-bold transition hover:text-green-400"
                style={{
                  fontFamily:
                    '"Raleway", sans-serif',
                }}
              >
                {item.label}
              </Link>
            ))}

            <Link
              to="/blogs"
              onClick={closeNavigation}
              className="border-b border-white/10 py-4 font-bold transition hover:text-green-400"
              style={{
                fontFamily:
                  '"Raleway", sans-serif',
              }}
            >
              Blogs
            </Link>

            <Link
              to="/#contact"
              onClick={closeNavigation}
              className="mt-4 flex min-h-12 items-center justify-center rounded-lg bg-green-600 px-5 py-3 font-bold transition hover:bg-green-500"
              style={{
                fontFamily:
                  '"Raleway", sans-serif',
              }}
            >
              Contact
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}