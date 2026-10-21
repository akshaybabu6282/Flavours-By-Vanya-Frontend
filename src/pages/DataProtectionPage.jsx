import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowLeft, Mail, ShieldCheck } from 'lucide-react'
import Footer from '../components/Footer'
import WhatsAppFloating from '../components/WhatsAppFloating'

const sections = [
    {
        title: '1. Information We Collect',
        content: (
            <>
                <p>We may receive personal information when you:</p>

                <ul>
                    <li>contact us by phone, email or WhatsApp;</li>
                    <li>request a community stall;</li>
                    <li>place a product, bulk or export enquiry; or</li>
                    <li>otherwise voluntarily communicate with us.</li>
                </ul>

                <p>
                    This information may include your name, phone number, email address,
                    apartment or organisation name, location, preferred stall date,
                    approximate number of families, order requirements and the contents
                    of your communication.
                </p>
            </>
        ),
    },
    {
        title: '2. Information Collected Automatically',
        content: (
            <>
                <p>
                    We use Google Analytics to understand how visitors use our website.
                    It may collect information such as browser type, device type, pages
                    visited, approximate location, referring website and interaction
                    data.
                </p>

                <p>
                    This information helps us understand website performance and improve
                    our content and user experience. We do not use this information to
                    directly identify you.
                </p>
            </>
        ),
    },
    {
        title: '3. How We Use Your Information',
        content: (
            <>
                <p>We use personal information only when reasonably necessary to:</p>

                <ul>
                    <li>respond to product and customer-support enquiries;</li>

                    <li>
                        process and coordinate orders made through WhatsApp or other direct
                        channels;
                    </li>

                    <li>respond to community-stall requests;</li>

                    <li>handle bulk, wholesale and export enquiries;</li>

                    <li>
                        maintain business, tax and transaction records where required by
                        law;
                    </li>

                    <li>
                        protect our website, customers and business from misuse or fraud;
                        and
                    </li>

                    <li>analyse and improve the website.</li>
                </ul>

                <p>
                    We do not sell or rent your personal information to third parties.
                </p>
            </>
        ),
    },
    {
        title: '4. WhatsApp and External Services',
        content: (
            <>
                <p>
                    Our order and community-stall buttons open WhatsApp with a prepared
                    message. Information is not sent until you review and send that
                    message through WhatsApp. Once sent, the information is processed
                    through WhatsApp under its own privacy terms.
                </p>

                <p>
                    Our website may also link to Google Maps, Instagram, Facebook,
                    LinkedIn and YouTube. These services operate independently and have
                    their own privacy policies. We are not responsible for their privacy
                    practices or content.
                </p>
            </>
        ),
    },
    {
        title: '5. Cookies and Analytics',
        content: (
            <>
                <p>
                    Cookies and similar technologies may be used to keep the website
                    functioning, understand traffic and measure website performance.
                    Google Analytics may place analytics cookies on your device where
                    permitted by your browser settings and applicable requirements.
                </p>

                <p>
                    You can restrict or delete cookies through your browser settings.
                    Disabling some cookies may affect how parts of the website function.
                </p>
            </>
        ),
    },
    {
        title: '6. Sharing of Information',
        content: (
            <>
                <p>We may share information only where reasonably necessary with:</p>

                <ul>
                    <li>
                        service providers supporting website analytics, communication,
                        hosting or delivery;
                    </li>

                    <li>
                        delivery and logistics partners when required to fulfil an order;
                    </li>

                    <li>
                        professional advisers such as accountants or legal advisers; and
                    </li>

                    <li>
                        government, regulatory or law-enforcement authorities when required
                        by law.
                    </li>
                </ul>

                <p>
                    We expect service providers handling personal information for us to
                    use it only for the relevant service and to apply reasonable
                    safeguards.
                </p>
            </>
        ),
    },
    {
        title: '7. Data Retention and Security',
        content: (
            <>
                <p>
                    We retain personal information only for as long as reasonably
                    necessary for the purpose for which it was collected, to maintain
                    legitimate business records, resolve disputes or comply with legal,
                    accounting and tax obligations.
                </p>

                <p>
                    We use reasonable administrative and technical safeguards to protect
                    information under our control. However, no internet transmission or
                    electronic storage method can be guaranteed to be completely secure.
                </p>
            </>
        ),
    },
    {
        title: '8. Your Choices and Rights',
        content: (
            <>
                <p>Subject to applicable law, you may ask us to:</p>

                <ul>
                    <li>
                        confirm whether we hold personal information about you;
                    </li>

                    <li>
                        correct incomplete or inaccurate information;
                    </li>

                    <li>update your information;</li>

                    <li>
                        erase information that is no longer required;
                    </li>

                    <li>
                        withdraw consent for consent-based processing; or
                    </li>

                    <li>
                        address a privacy-related grievance.
                    </li>
                </ul>

                <p>
                    We may need to verify your identity before responding. Certain
                    information may still be retained when required by law or for a valid
                    legal or business purpose.
                </p>
            </>
        ),
    },
    {
        title: '9. Children’s Privacy',
        content: (
            <p>
                Our website and products are intended for adults. We do not knowingly
                request personal information directly from children. A parent or
                guardian who believes that a child has provided personal information
                may contact us to request appropriate action.
            </p>
        ),
    },
    {
        title: '10. Changes to This Policy',
        content: (
            <p>
                We may update this Privacy Policy when our services, technology or
                legal obligations change. The latest version will be published on this
                page with an updated effective date. Material changes may also be
                communicated through an appropriate notice on the website.
            </p>
        ),
    },
]

export default function DataProtectionPage() {
    return (
        <div className="min-h-screen bg-[#f6f4ee] text-gray-900">
            <Helmet>
                <title>Privacy Policy | Vanya Eco Products</title>

                <meta
                    name="description"
                    content="Read the Vanya Eco Products Privacy Policy and learn how we collect, use, protect and manage personal information."
                />

                <meta name="robots" content="index, follow" />

                <link
                    rel="canonical"
                    href="https://www.vanyaecoproducts.in/data-protection"
                />
            </Helmet>

            {/* Page header */}
            <header className="border-b border-white/10 bg-[#030504] text-white">
                <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                    <Link
                        to="/"
                        aria-label="Vanya Eco Products home"
                    >
                        <img
                            src="/assets/logo.png"
                            alt="Vanya Eco Products"
                            className="h-14 w-auto rounded-xl object-contain sm:h-16"
                        />
                    </Link>

                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-2 text-sm font-semibold transition hover:border-green-500 hover:text-green-400"
                    >
                        <ArrowLeft
                            className="h-4 w-4"
                            aria-hidden="true"
                        />

                        Back to Home
                    </Link>
                </div>
            </header>

            <main>
                {/* Page introduction */}
                <section className="bg-[#07110b] px-6 py-16 text-white sm:py-20">
                    <div className="mx-auto max-w-4xl text-center">
                        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-green-500/40 bg-green-500/10">
                            <ShieldCheck
                                className="h-7 w-7 text-green-400"
                                aria-hidden="true"
                            />
                        </span>

                        <p className="mt-5 text-xs font-semibold uppercase tracking-[0.25em] text-green-400">
                            Your information matters
                        </p>

                        <h1
                            className="mt-3 text-4xl font-bold sm:text-5xl"
                            style={{
                                fontFamily: '"Raleway", sans-serif',
                            }}
                        >
                            Privacy Policy
                        </h1>

                        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-300 sm:text-lg">
                            This policy explains how Vanya Eco Products collects, uses,
                            protects and manages personal information received through our
                            website and direct communication channels.
                        </p>

                        <p className="mt-5 text-sm text-gray-400">
                            Effective date: 21 October 2026
                        </p>
                    </div>
                </section>

                {/* Policy content */}
                <section className="px-6 py-12 sm:py-16">
                    <div className="mx-auto max-w-4xl">
                        <div className="rounded-2xl border border-green-800/15 bg-white p-6 shadow-sm sm:p-10">
                            <div className="border-b border-gray-200 pb-8">
                                <h2 className="text-2xl font-bold text-gray-950">
                                    About This Policy
                                </h2>

                                <p className="mt-4 leading-7 text-gray-700">
                                    This Privacy Policy applies to the website operated by Vanya
                                    Eco Products at www.vanyaecoproducts.in and to personal
                                    information we receive through website-related enquiries.
                                    Vanya Eco Products is based in Mananthavady, Wayanad, Kerala
                                    670645, India.
                                </p>

                                <p className="mt-4 leading-7 text-gray-700">
                                    Our website does not currently create customer accounts or
                                    process online payments. Orders and enquiries are handled
                                    directly through WhatsApp, phone or email.
                                </p>
                            </div>

                            <div className="divide-y divide-gray-200">
                                {sections.map((section) => (
                                    <section
                                        key={section.title}
                                        className="py-8 first:pt-8 last:pb-0"
                                    >
                                        <h2 className="text-xl font-bold text-gray-950 sm:text-2xl">
                                            {section.title}
                                        </h2>

                                        <div className="mt-4 space-y-4 leading-7 text-gray-700 [&_ul]:ml-5 [&_ul]:list-disc [&_ul]:space-y-2">
                                            {section.content}
                                        </div>
                                    </section>
                                ))}
                            </div>
                        </div>

                        {/* Privacy contact */}
                        <div className="mt-8 rounded-2xl bg-[#07110b] p-6 text-white sm:p-8">
                            <h2 className="text-2xl font-bold">
                                Privacy Contact and Grievances
                            </h2>

                            <p className="mt-3 max-w-2xl leading-7 text-gray-300">
                                For privacy questions, requests, consent withdrawal or
                                grievances, contact Vanya Eco Products using the details below.
                                Please include enough information for us to identify and
                                respond to your request.
                            </p>

                            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                                <a
                                    href="mailto:support@vanyaecoproducts.in"
                                    className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-5 py-3 font-semibold text-white transition hover:bg-green-500"
                                >
                                    <Mail
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                    />

                                    support@vanyaecoproducts.in
                                </a>

                                <a
                                    href="tel:+917907662508"
                                    className="inline-flex items-center justify-center rounded-lg border border-white/20 px-5 py-3 font-semibold transition hover:border-green-500 hover:text-green-400"
                                >
                                    +91 79076 62508
                                </a>
                            </div>

                            <p className="mt-5 text-sm leading-6 text-gray-400">
                                Postal address: Vanya Eco Products, Mananthavady, Wayanad,
                                Kerala 670645, India.
                            </p>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
            <WhatsAppFloating />
        </div>
    )
}