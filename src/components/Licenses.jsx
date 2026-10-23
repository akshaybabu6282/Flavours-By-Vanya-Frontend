import React from 'react'

const licenses = [
  {
    id: 'fssai',
    type: 'Food Licence',
    title: 'FSSAI Certified',
    number: 'Lic No: 21325247000571',
    desc: 'Ensures compliance with applicable food safety, hygiene and quality requirements.',
    logo: '/assets/fssai-logo.png',
  },
  {
    id: 'iso-9001',
    type: 'Quality Certification',
    title: 'ISO 9001:2015',
    number: 'Quality Management System',
    desc: 'Supports consistent quality, customer focus and continual improvement across our operations.',
    logo: '/assets/ISO_9001-2015.svg.webp',
  },
  {
    id: 'iso-22000',
    type: 'Food Safety Certification',
    title: 'ISO 22000:2018',
    number: 'Food Safety Management System',
    desc: 'Supports the systematic identification and management of food safety risks.',
    logo: '/assets/ISO-22000-2018.png',
  },
  {
    id: 'iaf',
    type: 'Accreditation',
    title: 'IAF-Accredited Certification',
    number: 'International Accreditation Recognition',
    desc: 'Our applicable ISO certifications are issued through an internationally recognized accreditation framework.',
    logo: '/assets/IAF.jpg.jpeg',
  },
  {
    id: 'haccp',
    type: 'Food Safety System',
    title: 'HACCP',
    number: 'Hazard Analysis & Critical Control Points',
    desc: 'Uses preventive controls to identify, evaluate and manage potential food safety hazards.',
    logo:
      '/assets/haccp-hazard-analysis-critical-control-point-food-safety-certified-vector-badge-icon-logo-231531605.webp',
  },
  {
    id: 'who-gmp',
    type: 'Manufacturing Standard',
    title: 'WHO-GMP',
    number: 'Good Manufacturing Practices',
    desc: 'Focuses on hygiene, controlled processes and consistent product quality during manufacturing.',
    logo: '/assets/who-gmp.png',
  },
  {
    id: 'gst',
    type: 'Tax Registration',
    title: 'GST Registered',
    number: 'Kerala: 32DZEPK4981E1ZE\nKarnataka: 29DZEPK4981E1Z1',
    desc: 'Registered in Kerala and Karnataka for transparent and compliant business transactions.',
    logo: '/assets/gst-logo.png',
  },
  {
    id: 'udyam',
    type: 'Business Registration',
    title: 'Udyam (MSME)',
    number: 'UDYAM-KL-14-0022806',
    desc: 'Recognized under the Ministry of Micro, Small and Medium Enterprises.',
    logo: '/assets/msme-logo.webp',
  },
  {
    id: 'iec',
    type: 'Trade Registration',
    title: 'Import Export Code (IEC)',
    number: 'IEC: DZEPK4981E',
    desc: 'Registered with DGFT under the Ministry of Commerce and Industry for international trade.',
    logo: '/assets/iec.png',
  },
  {
    id: 'tm',
    type: 'Brand Protection',
    title: 'Trademark',
    number: 'Application In Process',
    desc: 'Our trademark registration application is currently under process.',
    logo: '/assets/trademark-logo.png',
  },
]

function LicenseCard({ license }) {
  return (
    <article className="flex min-h-[360px] w-[250px] flex-shrink-0 flex-col rounded-2xl border border-gray-200 bg-white p-5 text-center shadow-[0_10px_35px_rgba(15,23,42,0.07)] transition duration-300 hover:-translate-y-1 hover:border-green-500/40 hover:shadow-[0_16px_40px_rgba(22,101,52,0.12)] sm:w-[280px] sm:p-6">
      <div className="mb-5 flex h-28 w-full items-center justify-center rounded-xl border border-gray-100 bg-gray-50 p-4">
        <img
          src={license.logo}
          alt={`${license.title} logo`}
          className="h-full max-h-20 w-full max-w-[150px] object-contain"
          loading="lazy"
          decoding="async"
        />
      </div>

      <span
        className="mx-auto mb-3 inline-flex min-h-7 items-center rounded-full bg-green-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-green-700"
        style={{
          fontFamily: '"Montserrat", sans-serif',
        }}
      >
        {license.type}
      </span>

      <h3
        className="text-lg font-bold leading-snug text-gray-900 sm:text-xl"
        style={{
          fontFamily: '"Merriweather", serif',
        }}
      >
        {license.title}
      </h3>

      <p
        className="mt-2 whitespace-pre-line text-xs font-medium leading-5 text-green-700 sm:text-sm"
        style={{
          fontFamily: '"Roboto", sans-serif',
        }}
      >
        {license.number}
      </p>

      <div className="mx-auto my-4 h-px w-12 bg-green-500/40" />

      <p
        className="text-sm leading-6 text-gray-600"
        style={{
          fontFamily: '"Roboto", sans-serif',
        }}
      >
        {license.desc}
      </p>
    </article>
  )
}

export default function LicensesInfiniteSlider() {
  return (
    <section
      id="licenses"
      className="scroll-mt-24 overflow-hidden bg-gradient-to-b from-white via-gray-50 to-gray-100 py-16 text-gray-900 sm:py-20"
    >
      <style>
        {`
          @keyframes vanyaLicenseScroll {
            from {
              transform: translateX(0);
            }

            to {
              transform: translateX(-50%);
            }
          }

          .vanya-license-track {
            animation: vanyaLicenseScroll 55s linear infinite;
            width: max-content;
          }

          .vanya-license-slider:hover .vanya-license-track {
            animation-play-state: paused;
          }

          @media (max-width: 767px) {
            .vanya-license-track {
              animation-duration: 65s;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .vanya-license-track {
              animation: none;
            }
          }
        `}
      </style>

      <div className="mx-auto mb-10 max-w-3xl px-5 text-center sm:mb-12">
        <p
          className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-green-700 sm:text-sm"
          style={{
            fontFamily: '"Montserrat", sans-serif',
          }}
        >
          Quality, Safety & Compliance
        </p>

        <h2
          className="text-3xl font-bold leading-tight text-gray-900 md:text-4xl"
          style={{
            fontFamily: '"Raleway", sans-serif',
          }}
        >
          Certifications, Licences & Registrations
        </h2>

        <div className="mx-auto mt-5 h-0.5 w-16 bg-green-600" />

        <p
          className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 md:text-lg"
          style={{
            fontFamily: '"Roboto", sans-serif',
          }}
        >
          Recognized systems and regulatory registrations supporting food
          safety, quality, compliance and transparency throughout our
          operations.
        </p>
      </div>

      <div
        className="vanya-license-slider relative overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        aria-label="Vanya certifications, licences and registrations"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-20 bg-gradient-to-r from-gray-50 to-transparent sm:block"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-20 bg-gradient-to-l from-gray-50 to-transparent sm:block"
        />

        <div className="vanya-license-track flex">
          <div className="flex gap-5 px-2 sm:gap-6 sm:px-3">
            {licenses.map((license) => (
              <LicenseCard key={license.id} license={license} />
            ))}
          </div>

          <div
            aria-hidden="true"
            className="flex gap-5 px-2 sm:gap-6 sm:px-3"
          >
            {licenses.map((license) => (
              <LicenseCard
                key={`${license.id}-duplicate`}
                license={license}
              />
            ))}
          </div>
        </div>
      </div>

      <p
        className="mt-5 px-5 text-center text-xs text-gray-500 sm:hidden"
        style={{
          fontFamily: '"Roboto", sans-serif',
        }}
      >
        Swipe to explore our certifications and registrations
      </p>
    </section>
  )
}