import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowLeft, FileText, Mail } from 'lucide-react'
import Footer from '../components/Footer'
import WhatsAppFloating from '../components/WhatsAppFloating'

const sections = [
  {
    title: '1. Acceptance of These Terms',
    paragraphs: [
      'By accessing this website, contacting us through a website link, requesting a community stall or placing an order with Vanya Eco Products, you agree to these Terms and Conditions. If you do not agree, please do not use the website or place an order through it.',
      'These terms apply together with our Privacy & Data Protection notice and any product, payment, shipping or order information confirmed directly by our team.',
    ],
  },
  {
    title: '2. Website and Ordering Process',
    paragraphs: [
      'The website is an informational product catalogue presenting Vanya Eco Products, our product categories, community stalls, bulk supply and export services. It does not provide customer accounts, an online shopping cart or online payment processing.',
      'Product orders and enquiries are handled directly through WhatsApp, phone or email. Clicking a WhatsApp button may prepare a message, but no order is placed until you send the message and our team confirms the selected products, requested quantity, current availability, total order amount and applicable courier charge.',
    ],
  },
  {
    title: '3. Product Information and Availability',
    paragraphs: [
      'We make reasonable efforts to present accurate product names, descriptions, ingredients and photographs. Natural food products may show reasonable variation in colour, aroma, texture or appearance between batches.',
      'The website does not display product prices or pack weights because product availability, sourcing costs, packaging and batch-related pricing may change.',
      'The currently available pack options, product price and order total will be communicated directly to the customer through WhatsApp, phone or email before payment.',
      'An item shown on the website is not guaranteed to be available until our team confirms the order.',
      'Customers should review the complete order details provided by our team before completing payment.',
    ],
  },
  {
    title: '4. Order Total, Shipping Charges and Taxes',
    paragraphs: [
      'The current product price, available pack options, total order amount and applicable courier charge will be communicated directly to the customer before payment.',
      'Prices may vary between batches because of changes in sourcing, production, packaging and market conditions.',
      'Customers are responsible for checking the selected products, requested quantities, delivery address, total order amount and courier charge before completing payment.',
      'For international orders, the customer is responsible for customs duties, import taxes, clearance fees and other charges imposed by the destination country or its authorities.',
      'International customs duties, import taxes, clearance fees and destination-country charges are not included unless we expressly confirm otherwise in writing.',
    ],
  },
  {
    title: '5. Payment and Order Confirmation',
    paragraphs: [
      'Payments are accepted through the UPI or bank-transfer details provided by Vanya Eco Products.',
      'Customers should make payment only to payment details communicated through our verified business contact channels.',
      'An order is confirmed only after the required payment is received and acknowledged by our team.',
      'We may request reasonable information required to verify payment, prepare an invoice, arrange delivery or meet legal and accounting obligations.',
      'Vanya Eco Products will not be responsible for a payment sent to an incorrect or unauthorised account where the payment details were not provided through our verified communication channels.',
    ],
  },
  {
    title: '6. Cancellation',
    paragraphs: [
      'Confirmed orders cannot be voluntarily cancelled after payment. Customers should review all order information carefully before making payment.',
      'This restriction does not remove any cancellation right or remedy that cannot legally be excluded under applicable consumer law.',
      'If we cannot fulfil a confirmed order, we will contact the customer and provide an appropriate replacement, credit or refund.',
    ],
  },
  {
    title: '7. Shipping and Delivery',
    paragraphs: [
      'We accept orders for delivery within India and to international destinations, subject to product availability, courier coverage, destination restrictions and applicable law.',
      'The customer is responsible for paying the applicable courier charge communicated before payment.',
      'Estimated delivery within India is 3 to 7 business days.',
      'Estimated international delivery is 7 to 21 business days.',
      'These are estimated delivery periods and not guaranteed delivery dates.',
      'Delivery may be affected by courier operations, customs inspections, public holidays, weather, transportation disruption, incorrect addresses, remote locations or events outside our reasonable control.',
      'We will assist customers with available shipment information, but reasonable delays caused by these circumstances will not automatically create liability for Vanya Eco Products.',
      'The customer must provide a complete and accurate delivery address and a reachable contact number.',
      'Additional costs resulting from an incorrect address, failed delivery or customer-requested redelivery may be charged to the customer where legally permitted.',
    ],
  },
  {
    title: '8. Damaged, Leaking, Missing or Incorrect Products',
    paragraphs: [
      'A customer who receives a damaged, leaking or incorrect product, or finds an item missing from the parcel, must contact us within 24 hours after recorded delivery.',
      'The customer must provide clear photographs of the outer parcel, shipping label, internal packaging and affected products.',
      'The customer must also provide one continuous parcel-opening video showing the sealed parcel and its complete contents.',
      'The parcel-opening video should begin before the parcel is opened and should clearly show all sides of the sealed parcel, the shipping label, the opening process and every item received.',
      'We will review the information and may request further reasonable details.',
      'If the claim is verified, we may provide a replacement or refund depending on the nature of the issue, product availability, delivery location and applicable law.',
      'The 24-hour reporting period and evidence requirements help us investigate courier-related claims. They do not limit any consumer right that cannot legally be excluded.',
    ],
  },
  {
    title: '9. Returns and Customer Preferences',
    paragraphs: [
      'Because our products are food and personal-use items, we do not accept returns for change of mind, personal taste preference, aroma preference, customer ordering mistakes or an opened product where there is no verified defect or fulfilment error.',
      'Natural variations in colour, aroma, taste or texture between batches will not by themselves be considered product defects.',
      'Nothing in this section prevents a customer from seeking an available remedy for a defective, damaged, incorrect, unsafe or materially misdescribed product under applicable law.',
    ],
  },
  {
    title: '10. Refunds',
    paragraphs: [
      'Where a refund is approved after verification, Vanya Eco Products will initiate it within 3 to 5 business days.',
      'The refund will be sent using the original payment method or another method mutually agreed with the customer.',
      'Banks, UPI providers and other payment institutions may require additional time to credit the amount after the refund has been initiated.',
      'Unless required by law or caused by our error, courier charges, customs duties, import taxes, clearance fees and destination-country charges may not be refundable.',
    ],
  },
  {
    title: '11. Food Safety, Allergies and Product Use',
    paragraphs: [
      'Customers should review the product label, ingredients, allergen information, storage instructions, best-before information and directions before use.',
      'Nuts, spice blends, beverages and other products may contain or be processed near ingredients that cause allergies or sensitivities.',
      'Customers are responsible for ensuring that a product is suitable for their personal dietary needs and intended use.',
      'Information on this website is general product and culinary information. It is not medical advice and should not replace advice from a qualified healthcare professional.',
      'Customers with allergies, medical conditions, dietary restrictions, pregnancy-related concerns or questions about use for children should obtain appropriate professional advice before using a product.',
    ],
  },
  {
    title: '12. Storage and Product Condition',
    paragraphs: [
      'Customers should follow the storage instructions printed on the product packaging.',
      'Products should be stored in appropriate conditions and protected from moisture, contamination, excessive heat and direct sunlight where relevant.',
      'Vanya Eco Products may not be responsible for deterioration caused by incorrect storage, improper handling or use after delivery.',
    ],
  },
  {
    title: '13. Bulk, Wholesale and Export Enquiries',
    paragraphs: [
      'Bulk, wholesale, private-label and export enquiries may be subject to separate written quotations, minimum quantities, specifications, packaging requirements, payment schedules, lead times and shipping terms.',
      'Where separate written commercial terms are agreed, those terms will apply to that transaction if they conflict with this general page.',
    ],
  },
  {
    title: '14. Community Stall Requests',
    paragraphs: [
      'Submitting a community-stall request does not guarantee acceptance or availability on the requested date.',
      'Our team will review the apartment or community information and contact the requester to discuss availability, venue requirements, access, timing and other arrangements.',
      'A community stall is confirmed only after Vanya Eco Products provides direct confirmation.',
    ],
  },
  {
    title: '15. Intellectual Property',
    paragraphs: [
      'The Vanya Eco Products name, Flavours by Vanya branding, website design, product text, graphics, photographs, logos and other original material are owned by or licensed to Vanya Eco Products unless stated otherwise.',
      'Website content may not be copied, reproduced, republished, sold, modified or used commercially without prior written permission, except where permitted by law.',
    ],
  },
  {
    title: '16. Acceptable Use',
    paragraphs: [
      'You must not misuse the website, attempt unauthorised access, interfere with its operation, introduce malicious code, submit false information, impersonate another person or use the website for unlawful, fraudulent or abusive activity.',
    ],
  },
  {
    title: '17. Third-Party Services and Links',
    paragraphs: [
      'The website links to services such as WhatsApp, Google Maps, Instagram, Facebook, LinkedIn and YouTube.',
      'We do not control these third-party platforms and are not responsible for their availability, security, terms, privacy practices or content.',
      'Customers should review the applicable terms and privacy policies before using a third-party service.',
    ],
  },
  {
    title: '18. Website Availability',
    paragraphs: [
      'We try to keep the website available and accurate, but we do not guarantee uninterrupted operation or that every website error will be corrected immediately.',
      'We may update, suspend or change parts of the website when reasonably necessary for maintenance, security, business or legal reasons.',
    ],
  },
  {
    title: '19. Limitation of Liability',
    paragraphs: [
      'To the extent permitted by law, Vanya Eco Products will not be liable for indirect or consequential loss resulting from use of the website, reliance on general website information, third-party services or events outside our reasonable control.',
      'Nothing in these terms excludes or limits liability, remedies or consumer rights that cannot legally be excluded or limited.',
    ],
  },
  {
    title: '20. Governing Law and Disputes',
    paragraphs: [
      'These terms are governed by the laws of India.',
      'The parties should first attempt to resolve concerns by contacting Vanya Eco Products using the customer-support and grievance details provided below.',
      'Subject to rights and forums available under applicable consumer law, disputes will be subject to the competent courts and authorities having jurisdiction in Kerala, India.',
    ],
  },
  {
    title: '21. Changes to These Terms',
    paragraphs: [
      'We may update these Terms and Conditions when our services, ordering process or legal obligations change.',
      'The updated version will be published on this page with its effective date.',
      'Terms accepted for an existing confirmed order will continue to apply to that order unless a change is required by law or agreed with the customer.',
    ],
  },
]

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#f6f4ee] text-gray-900">
      <Helmet>
        <title>Terms and Conditions | Vanya Eco Products</title>

        <meta
          name="description"
          content="Read the terms governing Vanya Eco Products direct orders, payments, shipping, replacements, refunds and use of our website."
        />

        <meta name="robots" content="index, follow" />

        <link
          rel="canonical"
          href="https://www.vanyaecoproducts.in/terms"
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
        {/* Introduction */}
        <section className="bg-[#07110b] px-6 py-16 text-white sm:py-20">
          <div className="mx-auto max-w-4xl text-center">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-green-500/40 bg-green-500/10">
              <FileText
                className="h-7 w-7 text-green-400"
                aria-hidden="true"
              />
            </span>

            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.25em] text-green-400">
              Website and order terms
            </p>

            <h1
              className="mt-3 text-4xl font-bold sm:text-5xl"
              style={{
                fontFamily: '"Raleway", sans-serif',
              }}
            >
              Terms and Conditions
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-300 sm:text-lg">
              These terms explain how website use, direct orders, payments,
              shipping, replacements and refunds are handled by Vanya Eco
              Products.
            </p>

            <p className="mt-5 text-sm text-gray-400">
              Effective date: 21 October 2026
            </p>
          </div>
        </section>

        {/* Terms */}
        <section className="px-6 py-12 sm:py-16">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-2xl border border-green-800/15 bg-white p-6 shadow-sm sm:p-10">
              <div className="border-b border-gray-200 pb-8">
                <h2 className="text-2xl font-bold text-gray-950">
                  Business Information
                </h2>

                <p className="mt-4 leading-7 text-gray-700">
                  This website is operated by Vanya Eco Products,
                  Mananthavady, Wayanad, Kerala 670645, India.
                </p>

                <p className="mt-4 leading-7 text-gray-700">
                  References to “Vanya”, “we”, “us” and “our” mean Vanya Eco
                  Products.
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

                    <div className="mt-4 space-y-4 leading-7 text-gray-700">
                      {section.paragraphs.map((paragraph) => (
                        <p key={paragraph}>
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </div>

            {/* Customer support */}
            <div className="mt-8 rounded-2xl bg-[#07110b] p-6 text-white sm:p-8">
              <h2 className="text-2xl font-bold">
                Customer Support and Grievances
              </h2>

              <p className="mt-3 max-w-2xl leading-7 text-gray-300">
                Contact us for questions, order concerns, delivery issues or
                grievances. Please include your name, order details and a
                clear description of the issue.
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