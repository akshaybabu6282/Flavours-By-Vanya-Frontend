import React from 'react'
import { Helmet } from 'react-helmet-async'

import Footer from '../components/Footer'
import WhatsAppFloating from '../components/WhatsAppFloating'

export default function NotFoundPage({
  title = 'Page unavailable',
  description = 'The page you are looking for may have been moved, renamed or is no longer available.',
}) {
  return (
    <div className="min-h-screen bg-[#f4f0e7] text-[#111811]">
      <Helmet>
        <title>
          Page Not Found | Vanya Eco Products
        </title>

        <meta
          name="description"
          content="The requested page could not be found on the Vanya Eco Products website."
        />

        <meta
          name="robots"
          content="noindex, nofollow"
        />
      </Helmet>

      <main className="relative flex min-h-[76vh] items-center overflow-hidden px-5 pb-16 pt-32 sm:px-6 lg:px-8">
        {/* Soft background shapes */}
        <div
          aria-hidden="true"
          className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-green-800/[0.06] blur-3xl"
        />

        <div
          aria-hidden="true"
          className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-amber-700/[0.07] blur-3xl"
        />

        <div className="relative mx-auto w-full max-w-6xl">
          <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            {/* Large error number */}
            <div className="relative text-center lg:text-left">
              <p
                aria-hidden="true"
                className="select-none text-[9rem] font-black leading-[0.78] tracking-[-0.09em] text-[#173c25] sm:text-[13rem] lg:text-[17rem]"
                style={{
                  fontFamily: '"Raleway", sans-serif',
                }}
              >
                404
              </p>

              <div className="mx-auto mt-7 h-1 w-20 bg-green-700 lg:mx-0" />
            </div>

            {/* Message */}
            <div className="text-center lg:text-left">
              <p
                className="text-xs font-bold uppercase tracking-[0.3em] text-green-700 sm:text-sm"
                style={{
                  fontFamily: '"Raleway", sans-serif',
                }}
              >
                Vanya Eco Products
              </p>

              <h1
                className="mt-5 text-4xl font-bold leading-tight text-[#111811] sm:text-5xl lg:text-6xl"
                style={{
                  fontFamily: '"Raleway", sans-serif',
                }}
              >
                {title}
              </h1>

              <p
                className="mx-auto mt-5 max-w-xl text-base leading-7 text-gray-600 sm:text-lg lg:mx-0"
                style={{
                  fontFamily: '"Roboto", sans-serif',
                }}
              >
                {description}
              </p>

              <p
                className="mx-auto mt-7 max-w-xl border-l-0 border-green-700 text-sm leading-6 text-gray-500 lg:mx-0 lg:border-l-2 lg:pl-5"
                style={{
                  fontFamily: '"Roboto", sans-serif',
                }}
              >
                Use the navigation menu above to continue exploring
                our products, stories, community stalls and contact
                information.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppFloating />
    </div>
  )
}