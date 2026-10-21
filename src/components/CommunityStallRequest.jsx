import { useEffect, useRef, useState } from 'react'
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
        threshold: 0.18,
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

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <section
      ref={sectionRef}
      id="community-stall"
      aria-labelledby="community-stall-title"
      className="relative scroll-mt-24 overflow-hidden border-y border-white/10 bg-[#030504] py-12 text-white lg:py-14"
    >
      {/* Subtle background glow */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-600/10 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-6 md:grid-cols-[1.18fr_0.82fr] lg:gap-12 lg:px-8">
        {/* Left side */}
        <div
          className={`flex min-w-0 flex-col transition-all duration-700 motion-reduce:transition-none ${isVisible
              ? 'translate-x-0 opacity-100'
              : '-translate-x-7 opacity-0'
            }`}
        >
          <div className="relative z-10">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-500">
              Community Stall Requests
            </p>

            <h2
              id="community-stall-title"
              className="mt-4 max-w-xl text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.65rem]"
              style={{
                fontFamily: '"Raleway", sans-serif',
              }}
            >
              Bring Vanya to Your Community
            </h2>

            <p
              className="mt-4 max-w-lg text-base leading-7 text-gray-200 sm:text-lg"
              style={{
                fontFamily: '"Roboto", sans-serif',
              }}
            >
              Invite Vanya Eco Products to organise a community stall at your
              apartment.
            </p>

            <div className="mt-5 h-0.5 w-16 bg-green-500" />

            <p
              className="mt-5 max-w-lg text-base leading-7 text-gray-400"
              style={{
                fontFamily: '"Roboto", sans-serif',
              }}
            >
              Enter your apartment details. Our team will contact you to
              discuss availability and arrangements.
            </p>
          </div>

          {/* Larger image below the text */}
          <div
            className={`-mb-6 mt-4 hidden w-full transition-all delay-150 duration-1000 motion-reduce:transition-none sm:block ${isVisible
                ? 'translate-y-0 scale-100 opacity-100'
                : 'translate-y-7 scale-[0.97] opacity-0'
              }`}
          >
            <img
              src="/assets/community-stall-request.png"
              alt="Vanya serving residents at a community stall near their apartment"
              className="mx-auto h-auto max-h-[410px] w-full max-w-3xl object-contain drop-shadow-[0_20px_35px_rgba(34,197,94,0.12)] md:w-[115%] md:max-w-none lg:max-h-[440px]"
              loading="lazy"
              decoding="async"
              width="1200"
              height="900"
            />
          </div>
        </div>

        {/* Right side form */}
        <form
          onSubmit={handleSubmit}
          className={`rounded-2xl border border-green-500/80 bg-black/70 p-4 shadow-2xl shadow-green-950/20 backdrop-blur-sm transition-all delay-100 duration-700 motion-reduce:transition-none sm:p-5 ${isVisible
              ? 'translate-x-0 opacity-100'
              : 'translate-x-7 opacity-0'
            }`}
        >
          <div className="flex items-center gap-3 border-b border-white/20 pb-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-green-400 bg-green-500/10 shadow-[0_0_22px_rgba(34,197,94,0.35)]">
              <MessageCircle
                aria-hidden="true"
                className="h-5 w-5 text-green-400"
              />
            </span>

            <h3 className="text-base font-bold sm:text-lg">
              Tell us about your community
            </h3>
          </div>

          {/* Two fields per row on laptop */}
          <div className="mt-4 grid gap-x-3 gap-y-2.5 md:grid-cols-2">
            {formFields.map(
              ({
                name,
                label,
                icon: Icon,
                type,
                placeholder,
                min,
              }) => (
                <label key={name} className="block">
                  <span className="mb-1 block text-xs font-medium text-gray-200 sm:text-sm">
                    {label}
                  </span>

                  <span className="relative block">
                    <Icon
                      aria-hidden="true"
                      className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-green-500"
                    />

                    <input
                      name={name}
                      type={type}
                      placeholder={placeholder}
                      min={min}
                      required
                      className="min-h-10 w-full rounded-lg border border-white/20 bg-white/[0.06] py-2 pl-9 pr-2.5 text-sm text-white outline-none transition placeholder:text-gray-500 hover:border-white/35 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 [color-scheme:dark]"
                    />
                  </span>
                </label>
              )
            )}
          </div>

          <button
            type="submit"
            className="group relative mt-4 flex min-h-11 w-full items-center justify-center gap-2 overflow-hidden rounded-lg bg-green-600 px-5 py-2.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-green-500 hover:shadow-lg hover:shadow-green-900/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-500"
            style={{
              fontFamily: '"Roboto", sans-serif',
            }}
          >
            <span
              aria-hidden="true"
              className="absolute inset-y-0 -left-1/2 w-1/3 skew-x-[-20deg] bg-white/20 transition-transform duration-700 group-hover:translate-x-[500%]"
            />

            <MessageCircle
              aria-hidden="true"
              className="relative h-5 w-5"
            />

            <span className="relative">
              Send Request on WhatsApp
            </span>
          </button>

          <p className="mt-2.5 text-center text-xs leading-5 text-gray-400">
            Your details are added to the WhatsApp message. You can review it
            before sending.
          </p>
        </form>
      </div>
    </section>
  )
}