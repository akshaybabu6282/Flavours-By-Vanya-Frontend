import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import {
  ArrowLeft,
  Mail,
  PackageCheck,
  Truck,
} from 'lucide-react'
import Footer from '../components/Footer'
import WhatsAppFloating from '../components/WhatsAppFloating'

const policySections = [
  {
    title: '1. How Orders Are Placed',
    paragraphs: [
      'The Vanya Eco Products website functions as an informational product catalogue. Orders are handled directly through WhatsApp, phone or email.',
      'Our team will confirm the selected products, requested quantity, available pack options, current availability, total order amount and applicable courier charge before payment.',
      'An order is confirmed only after the required payment has been received and acknowledged by Vanya Eco Products.',
    ],
  },
  {
    title: '2. Shipping Coverage',
    paragraphs: [
      'We accept orders for delivery within India and to international destinations.',
      'Delivery is subject to product availability, courier coverage, destination restrictions, customs requirements and applicable laws.',
      'Certain products or destinations may not be available for international delivery because of courier, customs, food-import or destination-country restrictions.',
      'If we cannot ship an order to the requested location, we will inform the customer before confirming the order.',
    ],
  },
  {
    title: '3. Courier Charges',
    paragraphs: [
      'The customer is responsible for paying the applicable courier charge.',
      'The courier charge will be calculated according to the parcel weight, dimensions, destination, selected courier service and any special handling requirements.',
      'The applicable courier charge will be communicated to the customer before payment.',
      'Shipping is not included in the product amount unless Vanya Eco Products expressly confirms otherwise in writing.',
    ],
  },
  {
    title: '4. Estimated Delivery Within India',
    paragraphs: [
      'The estimated delivery time for orders within India is 3 to 7 business days after dispatch.',
      'Business days generally exclude Sundays, public holidays and courier non-working days.',
      'Delivery to remote or limited-service locations may require additional time.',
      'The estimated delivery period is not a guaranteed delivery date.',
    ],
  },
  {
    title: '5. Estimated International Delivery',
    paragraphs: [
      'The estimated delivery time for international orders is 7 to 21 business days after dispatch.',
      'International delivery may take longer because of customs inspection, import clearance, destination-country procedures, local courier operations or other conditions outside our reasonable control.',
      'The estimated international delivery period is not a guaranteed delivery date.',
    ],
  },
  {
    title: '6. International Customs and Import Charges',
    paragraphs: [
      'The customer is responsible for customs duties, import taxes, clearance fees, local handling charges and other charges imposed by the destination country or its authorities.',
      'These destination charges are not included in the product or courier amount unless Vanya Eco Products expressly confirms otherwise in writing.',
      'Customers are responsible for checking whether the products can legally be imported into their destination country before confirming an international order.',
      'Vanya Eco Products is not responsible for delays, additional charges, confiscation or rejection caused by destination-country customs or import restrictions where we have provided accurate shipment information.',
    ],
  },
  {
    title: '7. Dispatch and Tracking',
    paragraphs: [
      'Orders will be prepared and dispatched after payment confirmation and completion of the required packing process.',
      'Where shipment tracking is available, the tracking information will be shared with the customer after dispatch.',
      'Tracking updates are provided by the courier company and may not always appear immediately after collection.',
      'Customers should contact us if tracking information does not update for an unreasonable period.',
    ],
  },
  {
    title: '8. Delivery Delays',
    paragraphs: [
      'Delivery may be delayed by courier operations, customs procedures, public holidays, weather conditions, transportation disruption, strikes, natural events, incorrect addresses, remote locations or other circumstances outside our reasonable control.',
      'We will assist customers by providing available shipment information and raising reasonable enquiries with the courier company.',
      'A reasonable courier or customs delay does not automatically qualify an order for cancellation or refund.',
      'Nothing in this section limits any consumer right that cannot legally be excluded.',
    ],
  },
  {
    title: '9. Customer Address and Contact Information',
    paragraphs: [
      'Customers must provide a complete and accurate recipient name, delivery address, postal code, country and reachable telephone number.',
      'Customers should carefully verify the address before completing payment.',
      'Vanya Eco Products is not responsible for delivery failure or delay caused by incomplete, inaccurate or outdated information supplied by the customer.',
      'Additional courier costs caused by an incorrect address, failed delivery, refusal to accept the parcel or customer-requested redelivery may be charged to the customer where legally permitted.',
    ],
  },
  {
    title: '10. Cancellation',
    paragraphs: [
      'Confirmed orders cannot be voluntarily cancelled after payment.',
      'Customers should review the selected products, requested quantities, delivery information, total order amount and courier charge before completing payment.',
      'If Vanya Eco Products cannot fulfil a confirmed order, we will contact the customer and provide an appropriate replacement, credit or refund.',
      'This policy does not remove any cancellation right or remedy that cannot legally be excluded under applicable consumer law.',
    ],
  },
  {
    title: '11. Returns',
    paragraphs: [
      'Because our products are food and personal-use items, we do not accept returns for change of mind, personal taste preference, aroma preference, customer ordering mistakes or an opened product where there is no verified defect or fulfilment error.',
      'Natural variations in colour, aroma, taste or texture between batches will not by themselves be considered product defects.',
      'Nothing in this policy prevents a customer from seeking an available remedy for a defective, damaged, incorrect, unsafe or materially misdescribed product under applicable law.',
    ],
  },
  {
    title: '12. Damaged or Leaking Products',
    paragraphs: [
      'If a product arrives damaged or leaking, the customer must contact Vanya Eco Products within 24 hours after recorded delivery.',
      'The customer must provide clear photographs of the outer parcel, shipping label, internal packaging and affected products.',
      'The customer must also provide one continuous parcel-opening video showing the sealed parcel and the complete opening process.',
      'The product and all original packaging should be preserved until the claim has been reviewed.',
    ],
  },
  {
    title: '13. Missing or Incorrect Products',
    paragraphs: [
      'If an item is missing or an incorrect product is received, the customer must report the issue within 24 hours after recorded delivery.',
      'The customer must provide clear photographs of the parcel, shipping label, internal packaging and every product received.',
      'One continuous parcel-opening video showing the sealed parcel and its complete contents is also required.',
      'These materials help us verify the packing and courier-related circumstances.',
    ],
  },
  {
    title: '14. Parcel-Opening Video Requirements',
    paragraphs: [
      'The parcel-opening video should begin before the parcel is opened.',
      'It should clearly show all sides of the sealed parcel, the shipping label, visible external damage, the complete opening process and every item inside the parcel.',
      'The video should be continuous and should not contain cuts, edits or interruptions.',
      'Photographs and the parcel-opening video should be clear enough for us to review the reported issue.',
    ],
  },
  {
    title: '15. Claim Review',
    paragraphs: [
      'We will review the customer’s photographs, parcel-opening video, order details and available packing or courier information.',
      'We may request additional reasonable information where it is needed to understand or verify the claim.',
      'Submitting a claim does not automatically guarantee a replacement or refund.',
      'If the claim is verified, Vanya Eco Products may provide a replacement or refund depending on the issue, product availability, delivery destination and applicable law.',
      'The 24-hour reporting period and evidence requirements help us investigate courier-related claims. They do not limit consumer rights that cannot legally be excluded.',
    ],
  },
  {
    title: '16. Replacements',
    paragraphs: [
      'An approved replacement will be arranged according to product availability and courier coverage.',
      'We will communicate the estimated replacement-dispatch time directly to the customer.',
      'If the same product is unavailable, we may offer an appropriate alternative, store credit or refund after discussing the available options with the customer.',
    ],
  },
  {
    title: '17. Refund Processing',
    paragraphs: [
      'Where a refund is approved after verification, Vanya Eco Products will initiate it within 3 to 5 business days.',
      'The refund will be made through the original payment method or another method mutually agreed with the customer.',
      'Banks, UPI providers and other payment institutions may require additional time to credit the amount after the refund has been initiated.',
      'Vanya Eco Products cannot control processing times imposed by the customer’s bank or payment provider.',
    ],
  },
  {
    title: '18. Non-Refundable Charges',
    paragraphs: [
      'Unless required by applicable law or caused by an error by Vanya Eco Products, courier charges, customs duties, import taxes, clearance fees and destination-country charges may not be refundable.',
      'Costs caused by an incorrect customer address, refusal to accept delivery, failed delivery attempts or customer-requested redelivery may also be non-refundable where legally permitted.',
    ],
  },
  {
    title: '19. Policy Updates',
    paragraphs: [
      'We may update this Shipping, Cancellation, Replacement and Refund Policy when our delivery services, business processes or legal obligations change.',
      'The latest version will be published on this page with its effective date.',
      'The policy accepted for an existing confirmed order will continue to apply to that order unless a change is required by law or agreed with the customer.',
    ],
  },
]

export default function OrderSupportPage() {
  return (
    <div className="min-h-screen bg-[#f6f4ee] text-gray-900">
      <Helmet>
        <title>
          Shipping and Refunds | Vanya Eco Products
        </title>

        <meta
          name="description"
          content="Read the Vanya Eco Products shipping, delivery, cancellation, replacement and refund policy for Indian and international orders."
        />

        <meta name="robots" content="index, follow" />

        <link
          rel="canonical"
          href="https://www.vanyaecoproducts.in/shipping-and-refunds"
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
              <Truck
                className="h-7 w-7 text-green-400"
                aria-hidden="true"
              />
            </span>

            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.25em] text-green-400">
              Order and delivery support
            </p>

            <h1
              className="mt-3 text-4xl font-bold sm:text-5xl"
              style={{
                fontFamily: '"Raleway", sans-serif',
              }}
            >
              Shipping, Delivery & Refunds
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-300 sm:text-lg">
              This policy explains our shipping coverage, estimated delivery
              times, cancellations, delivery claims, replacements and refunds.
            </p>

            <p className="mt-5 text-sm text-gray-400">
              Effective date: 21 October 2026
            </p>
          </div>
        </section>

        {/* Summary */}
        <section className="relative z-10 -mt-7 px-6">
          <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-green-900/10 bg-white p-5 text-center shadow-md">
              <p className="text-sm font-semibold text-green-700">
                India Delivery
              </p>

              <p className="mt-1 text-xl font-bold text-gray-950">
                3 to 7 business days
              </p>
            </div>

            <div className="rounded-xl border border-green-900/10 bg-white p-5 text-center shadow-md">
              <p className="text-sm font-semibold text-green-700">
                International Delivery
              </p>

              <p className="mt-1 text-xl font-bold text-gray-950">
                7 to 21 business days
              </p>
            </div>

            <div className="rounded-xl border border-green-900/10 bg-white p-5 text-center shadow-md">
              <p className="text-sm font-semibold text-green-700">
                Delivery Issues
              </p>

              <p className="mt-1 text-xl font-bold text-gray-950">
                Report within 24 hours
              </p>
            </div>
          </div>
        </section>

        {/* Policy content */}
        <section className="px-6 pb-12 pt-10 sm:pb-16">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-2xl border border-green-800/15 bg-white p-6 shadow-sm sm:p-10">
              <div className="border-b border-gray-200 pb-8">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-green-100">
                    <PackageCheck
                      className="h-6 w-6 text-green-700"
                      aria-hidden="true"
                    />
                  </span>

                  <div>
                    <h2 className="text-2xl font-bold text-gray-950">
                      Important Information
                    </h2>

                    <p className="mt-3 leading-7 text-gray-700">
                      Customers should carefully review the complete order,
                      delivery address, total amount and courier charge before
                      making payment. Confirmed orders cannot be voluntarily
                      cancelled after payment.
                    </p>
                  </div>
                </div>
              </div>

              <div className="divide-y divide-gray-200">
                {policySections.map((section) => (
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

            {/* Support */}
            <div className="mt-8 rounded-2xl bg-[#07110b] p-6 text-white sm:p-8">
              <h2 className="text-2xl font-bold">
                Delivery and Refund Support
              </h2>

              <p className="mt-3 max-w-2xl leading-7 text-gray-300">
                Contact us for delivery problems, damaged products, missing
                items, incorrect products, replacement requests or approved
                refund enquiries.
              </p>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-amber-200">
                Damaged, leaking, missing or incorrect products must be
                reported within 24 hours with photographs and a continuous
                parcel-opening video.
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
                  href="https://wa.me/917907662508?text=Hi%20Vanya%20Eco%20Products%2C%20I%20need%20help%20with%20an%20order%20or%20delivery."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg border border-white/20 px-5 py-3 font-semibold transition hover:border-green-500 hover:text-green-400"
                >
                  Contact on WhatsApp
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