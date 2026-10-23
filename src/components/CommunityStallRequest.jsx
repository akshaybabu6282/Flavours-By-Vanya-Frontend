import React, {
  useEffect,
  useRef,
  useState,
} from 'react'

import {
  Building2,
  CalendarDays,
  MapPin,
  MessageCircle,
  Phone,
  UserRound,
  Users,
} from 'lucide-react'

const formFields = [
  {
    name: 'apartmentName',
    label: 'Apartment name',
    placeholder: 'Your apartment name',
    type: 'text',
    icon: Building2,
  },
  {
    name: 'location',
    label: 'Location',
    placeholder: 'Area and city',
    type: 'text',
    icon: MapPin,
  },
  {
    name: 'families',
    label: 'Approximate families',
    placeholder: 'Example: 200',
    type: 'number',
    min: '1',
    icon: Users,
  },
  {
    name: 'preferredDate',
    label: 'Preferred date',
    type: 'date',
    icon: CalendarDays,
  },
  {
    name: 'contactPerson',
    label: 'Contact person',
    placeholder: 'Your name',
    type: 'text',
    icon: UserRound,
  },
  {
    name: 'contactNumber',
    label: 'Contact number',
    placeholder: 'Your phone number',
    type: 'tel',
    icon: Phone,
  },
]

function formatDate(date) {
  if (!date) return ''

  return new Intl.DateTimeFormat('en-IN', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(new Date(`${date}T00:00:00`))
}

export default function CommunityStallRequest() {
  const sectionRef = useRef(null)
  const isInsideSectionRef = useRef(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const section = sectionRef.current

    if (!section) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (isInsideSectionRef.current) return

          isInsideSectionRef.current = true
          setIsVisible(true)
        } else {
          isInsideSectionRef.current = false
          setIsVisible(false)
        }
      },
      {
        threshold: 0.15,
      }
    )

    observer.observe(section)

    return () => {
      observer.disconnect()
    }
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    const apartmentName = formData.get('apartmentName')
    const location = formData.get('location')
    const families = formData.get('families')
    const preferredDate = formData.get('preferredDate')
    const contactPerson = formData.get('contactPerson')
    const contactNumber = formData.get('contactNumber')

    const message = `Hi Vanya Eco Products,

I would like to request a Vanya community stall at our apartment.

Apartment Name: ${apartmentName}
Location: ${location}
Approximate Number of Families: ${families}
Preferred Date: ${formatDate(preferredDate)}
Contact Person: ${contactPerson}
Contact Number: ${contactNumber}`

    const whatsappUrl = `https://wa.me/918111851226?text=${encodeURIComponent(
      message
    )}`

    window.open(
      whatsappUrl,
      '_blank',
      'noopener,noreferrer'
    )
  }

  return (
    <section
      ref={sectionRef}
      id="community-stall"
      aria-labelledby="community-stall-title"
      className="relative min-h-[680px] scroll-mt-24 overflow-hidden border-y border-[#d3c6ae] bg-[#eee4d3] py-14 text-[#15251a] sm:py-16 lg:flex lg:min-h-[700px] lg:items-center lg:py-20"
    >
      {/* Responsive section background */}
      <picture className="pointer-events-none absolute inset-0 block h-full w-full">
        {/* Mobile portrait background */}
        <source
          media="(max-width: 639px)"
          srcSet="/assets/community-stall-sketch-mobile.png"
        />

        {/* Tablet and laptop landscape background */}
        <img
          src="/assets/community-stall-sketch-bg.png"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-contain object-bottom opacity-80 sm:object-cover sm:object-center sm:opacity-55 lg:opacity-100"
          loading="lazy"
          decoding="async"
        />
      </picture>

      {/* Mobile and tablet readability layer */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[#f4ead9]/15 sm:bg-[#f4ead9]/35 lg:bg-transparent"
      />

      {/* Desktop text protection */}
      <div
        aria-hidden="true"
        className="absolute inset-0 hidden bg-gradient-to-r from-[#f4ead9]/95 via-[#f4ead9]/65 to-[#f4ead9]/10 lg:block"
      />

      {/* Soft top fade */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#f4ead9]/75 to-transparent"
      />

      {/* Soft bottom fade */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#e9ddc9]/55 to-transparent"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-10 px-5 sm:px-6 md:grid-cols-[0.92fr_1.08fr] md:items-center lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:px-8">
        {/* Left content */}
        <div
          className={`transition-all duration-700 motion-reduce:transition-none ${
            isVisible
              ? 'translate-x-0 opacity-100'
              : '-translate-x-7 opacity-0'
          }`}
        >
          <div className="max-w-xl rounded-[1.75rem] border border-[#cbbd9f]/40 bg-[#fff9ed]/75 p-5 shadow-[0_18px_55px_rgba(70,55,30,0.08)] backdrop-blur-[2px] sm:p-7 lg:bg-[#fff9ed]/65">
            <p
              className="text-xs font-bold uppercase tracking-[0.25em] text-green-800 sm:text-sm"
              style={{
                fontFamily: '"Montserrat", sans-serif',
              }}
            >
              Community Stall Requests
            </p>

            <h2
              id="community-stall-title"
              className="mt-4 text-3xl font-extrabold leading-tight text-[#102719] sm:text-4xl lg:text-[2.7rem]"
              style={{
                fontFamily: '"Raleway", sans-serif',
              }}
            >
              Bring Vanya to Your Community
            </h2>

            <div className="mt-5 h-0.5 w-16 bg-green-800" />

            <p
              className="mt-5 text-base leading-7 text-gray-800 sm:text-lg"
              style={{
                fontFamily: '"Roboto", sans-serif',
              }}
            >
              Invite Vanya Eco Products to organise a community stall at your
              apartment.
            </p>

            <p
              className="mt-4 text-sm leading-6 text-gray-600 sm:text-base sm:leading-7"
              style={{
                fontFamily: '"Roboto", sans-serif',
              }}
            >
              Enter your apartment details and our team will contact you to
              discuss availability and arrangements.
            </p>

            <div className="mt-6 flex items-start gap-3 rounded-xl border border-green-900/10 bg-green-900/[0.05] px-4 py-3">
              <span
                aria-hidden="true"
                className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-green-700"
              />

              <p
                className="text-xs leading-5 text-gray-600 sm:text-sm"
                style={{
                  fontFamily: '"Roboto", sans-serif',
                }}
              >
                Suitable for apartment communities, resident associations and
                organised neighbourhood events.
              </p>
            </div>
          </div>
        </div>

        {/* Enquiry form */}
        <form
          onSubmit={handleSubmit}
          className={`rounded-[1.75rem] border border-[#8f7c59]/55 bg-[#fffaf1]/75 p-5 shadow-[0_24px_70px_rgba(58,45,24,0.16)] backdrop-blur-[1px] transition-all delay-100 duration-700 motion-reduce:transition-none sm:bg-[#fffaf1]/90 sm:p-6 sm:backdrop-blur-md ${
            isVisible
              ? 'translate-x-0 opacity-100'
              : 'translate-x-7 opacity-0'
          }`}
        >
          <div className="flex items-center gap-3 border-b border-[#cdbf9f] pb-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-green-800/20 bg-green-800/[0.08] text-green-800">
              <MessageCircle
                aria-hidden="true"
                className="h-5 w-5"
                strokeWidth={2}
              />
            </span>

            <div>
              <p
                className="text-xs font-semibold uppercase tracking-[0.15em] text-green-800"
                style={{
                  fontFamily: '"Montserrat", sans-serif',
                }}
              >
                Stall Enquiry
              </p>

              <h3
                className="mt-0.5 text-base font-bold text-gray-950 sm:text-lg"
                style={{
                  fontFamily: '"Raleway", sans-serif',
                }}
              >
                Tell us about your community
              </h3>
            </div>
          </div>

          {/* Form fields */}
          <div className="mt-5 grid gap-x-3 gap-y-3 md:grid-cols-2">
            {formFields.map(
              ({
                name,
                label,
                icon: iconComponent,
                type,
                placeholder,
                min,
              }) => (
                <label key={name} className="block">
                  <span
                    className="mb-1.5 block text-xs font-semibold text-gray-700 sm:text-sm"
                    style={{
                      fontFamily: '"Roboto", sans-serif',
                    }}
                  >
                    {label}
                  </span>

                  <span className="relative block">
                    {React.createElement(iconComponent, {
                      'aria-hidden': true,
                      className:
                        'pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-green-800',
                    })}

                    <input
                      name={name}
                      type={type}
                      placeholder={placeholder}
                      min={min}
                      required
                      className="min-h-11 w-full rounded-xl border border-[#cfc3aa] bg-white/75 py-2.5 pl-9 pr-3 text-sm text-gray-950 outline-none transition placeholder:text-gray-400 hover:border-green-800/40 focus:border-green-700 focus:bg-white focus:ring-2 focus:ring-green-700/15 [color-scheme:light]"
                      style={{
                        fontFamily: '"Roboto", sans-serif',
                      }}
                    />
                  </span>
                </label>
              )
            )}
          </div>

          {/* WhatsApp button */}
          <button
            type="submit"
            className="group relative mt-5 flex min-h-12 w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-green-800 px-5 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-green-700 hover:shadow-lg hover:shadow-green-900/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-800"
            style={{
              fontFamily: '"Roboto", sans-serif',
            }}
          >
            <span
              aria-hidden="true"
              className="absolute inset-y-0 -left-1/2 w-1/3 skew-x-[-20deg] bg-white/15 transition-transform duration-700 group-hover:translate-x-[500%]"
            />

            <MessageCircle
              aria-hidden="true"
              className="relative h-5 w-5"
              strokeWidth={2}
            />

            <span className="relative">
              Send Request on WhatsApp
            </span>
          </button>

          <p
            className="mt-3 text-center text-xs leading-5 text-gray-500"
            style={{
              fontFamily: '"Roboto", sans-serif',
            }}
          >
            Your details will be added to the WhatsApp message. You can review
            everything before sending.
          </p>
        </form>
      </div>
    </section>
  )
}