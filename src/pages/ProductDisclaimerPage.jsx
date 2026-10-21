import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import {
  AlertCircle,
  ArrowLeft,
  Mail,
  ShieldAlert,
} from 'lucide-react'
import Footer from '../components/Footer'
import WhatsAppFloating from '../components/WhatsAppFloating'

const disclaimerSections = [
  {
    title: '1. General Information',
    paragraphs: [
      'The information published on this website is provided for general product, culinary, educational and informational purposes.',
      'We make reasonable efforts to keep the information clear and accurate. However, website content should not be treated as professional medical, nutritional, legal or regulatory advice.',
      'Customers should use products according to the information and instructions provided on the product packaging.',
    ],
  },
  {
    title: '2. Not Medical Advice',
    paragraphs: [
      'Information about spices, teas, coffee, coconut oils, nuts, honey and other products is not intended to replace advice from a qualified doctor, dietitian, nutritionist or other healthcare professional.',
      'Website content should not be used to diagnose, treat, cure, manage or prevent any disease, health condition or medical symptom.',
      'Do not delay or discontinue professional medical treatment because of information found on this website.',
    ],
  },
  {
    title: '3. Product Claims',
    paragraphs: [
      'Vanya Eco Products are food, culinary and personal-use products. They are not medicines unless a specific product is separately approved, licensed and clearly presented as such under applicable law.',
      'General references to traditional practices, ingredients, nutrients, wellness or customary uses are provided for informational purposes.',
      'Such references should not be interpreted as a guarantee of a particular medical, therapeutic or health result.',
    ],
  },
  {
    title: '4. Individual Results and Experiences',
    paragraphs: [
      'Taste, aroma, texture, suitability and personal experience may vary between individuals.',
      'A product that is suitable for one person may not be suitable for another person because of allergies, sensitivities, health conditions, dietary requirements or personal preferences.',
      'Vanya Eco Products does not guarantee that every customer will experience the same result from using a product.',
    ],
  },
  {
    title: '5. Allergies and Sensitivities',
    paragraphs: [
      'Customers must review the product label, ingredients and allergen information before purchasing or using a product.',
      'Our product range includes nuts, spices, spice blends, tea, coffee, honey and coconut products. These products may contain ingredients that cause allergic reactions or sensitivities in some individuals.',
      'Products may be processed or packed in facilities that also handle other food ingredients.',
      'Customers with known or suspected allergies should obtain appropriate medical advice before using a product.',
      'Stop using a product and seek appropriate medical assistance if an adverse reaction occurs.',
    ],
  },
  {
    title: '6. Children, Pregnancy and Medical Conditions',
    paragraphs: [
      'A qualified healthcare professional should be consulted before using a product for infants, young children, pregnancy-related purposes or alongside treatment for a medical condition.',
      'Customers taking prescription medication should obtain professional advice before making significant dietary changes or using products for wellness purposes.',
      'References to traditional family or Ayurvedic practices do not replace individual medical advice.',
    ],
  },
  {
    title: '7. Baby Care and External Use',
    paragraphs: [
      'Any reference to coconut oil or another product for baby massage, skincare, haircare or external use is general information about traditional or common use.',
      'Customers should perform an appropriate patch test before applying a product externally.',
      'Avoid contact with the eyes, damaged skin or other sensitive areas.',
      'A paediatrician or qualified healthcare professional should be consulted before using a product on a newborn, infant or child.',
      'Stop use and seek professional advice if irritation or an unexpected reaction occurs.',
    ],
  },
  {
    title: '8. Honey Information',
    paragraphs: [
      'Honey should not be given to children below 12 months of age.',
      'Natural honey may crystallise, thicken or vary in colour, aroma and taste. Crystallisation is a natural characteristic and does not by itself indicate that the product is defective.',
      'Customers managing diabetes, blood-sugar concerns, allergies or other medical conditions should consult an appropriate healthcare professional before consuming honey.',
    ],
  },
  {
    title: '9. Natural Product Variations',
    paragraphs: [
      'Many Vanya products are made using agricultural ingredients. Natural differences can occur because of harvest conditions, climate, growing location, season, processing and batch characteristics.',
      'Colour, aroma, flavour, texture and appearance may therefore vary reasonably between batches.',
      'Natural variation does not by itself indicate contamination, adulteration or a product defect.',
    ],
  },
  {
    title: '10. Product Packaging Takes Priority',
    paragraphs: [
      'The product label and packaging supplied with the product should be reviewed before use.',
      'Where the current product packaging contains more recent or product-specific information, the packaging information takes priority over general website descriptions.',
      'Customers should follow the ingredients, allergen information, storage instructions, preparation guidance, best-before information and warnings printed on the package.',
    ],
  },
  {
    title: '11. Product Photographs',
    paragraphs: [
      'Product photographs are provided to help customers identify and understand our products.',
      'Packaging, label layout, colour, shape or other visual details may be updated from time to time.',
      'Screen settings, lighting and photography may also affect how colours and textures appear.',
      'Reasonable visual differences between the website photograph and the delivered product do not automatically mean that the wrong product was supplied.',
    ],
  },
  {
    title: '12. Storage and Handling',
    paragraphs: [
      'Customers should follow the storage instructions printed on the product packaging.',
      'Products should be protected from contamination, moisture, excessive heat and direct sunlight where applicable.',
      'Pouches, containers and bottles should be closed properly after use.',
      'Vanya Eco Products may not be responsible for deterioration caused by incorrect storage, contamination, improper handling or continued use after the applicable best-before period.',
    ],
  },
  {
    title: '13. Food Preparation and Consumption',
    paragraphs: [
      'Customers are responsible for preparing, cooking and consuming products safely and appropriately.',
      'Spice quantities and preparation methods may need to be adjusted according to taste, recipe and dietary needs.',
      'General recipes or usage suggestions on the website are optional suggestions and not guaranteed outcomes.',
    ],
  },
  {
    title: '14. Organic and Natural Descriptions',
    paragraphs: [
      'Terms such as natural, traditional, pure, authentic or minimally processed describe product characteristics, sourcing approach or processing methods where appropriate.',
      'Such wording should not automatically be interpreted as an organic certification, medical approval or guarantee of a health outcome.',
      'A product will be described as certified organic only where the relevant certification applies and can be substantiated.',
    ],
  },
  {
    title: '15. Third-Party Information and Links',
    paragraphs: [
      'The website may contain links to WhatsApp, Google Maps, Instagram, Facebook, LinkedIn, YouTube and other third-party services.',
      'Vanya Eco Products does not control third-party websites and is not responsible for their content, advice, availability, security or privacy practices.',
      'Customers should review the terms and policies of any third-party platform they choose to use.',
    ],
  },
  {
    title: '16. No Guaranteed Availability',
    paragraphs: [
      'Displaying a product on the website does not guarantee that it is currently available.',
      'Product availability, sourcing, packaging and batch production may change.',
      'Current availability and complete order information will be confirmed directly through WhatsApp, phone or email before payment.',
    ],
  },
  {
    title: '17. Limitation of Website Information',
    paragraphs: [
      'We make reasonable efforts to maintain accurate website information, but errors, omissions or outdated details may occasionally occur.',
      'We may update product information, photographs, descriptions and other website content when necessary.',
      'Nothing in this disclaimer excludes or limits consumer rights or liabilities that cannot legally be excluded or limited.',
    ],
  },
  {
    title: '18. Changes to This Disclaimer',
    paragraphs: [
      'We may update this Product Disclaimer when our products, website content, business practices or legal obligations change.',
      'The latest version will be published on this page with its effective date.',
    ],
  },
]

export default function ProductDisclaimerPage() {
  return (
    <div className="min-h-screen bg-[#f6f4ee] text-gray-900">
      <Helmet>
        <title>
          Product Disclaimer | Vanya Eco Products
        </title>

        <meta
          name="description"
          content="Read important information about Vanya Eco Products, product descriptions, allergies, natural variations, traditional uses and health-related website content."
        />

        <meta name="robots" content="index, follow" />

        <link
          rel="canonical"
          href="https://www.vanyaecoproducts.in/product-disclaimer"
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
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-amber-400/40 bg-amber-400/10">
              <ShieldAlert
                className="h-7 w-7 text-amber-300"
                aria-hidden="true"
              />
            </span>

            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.25em] text-green-400">
              Important product information
            </p>

            <h1
              className="mt-3 text-4xl font-bold sm:text-5xl"
              style={{
                fontFamily: '"Raleway", sans-serif',
              }}
            >
              Product Disclaimer
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-300 sm:text-lg">
              Please read this information before relying on product
              descriptions, traditional-use references or general
              health-related content published on our website.
            </p>

            <p className="mt-5 text-sm text-gray-400">
              Effective date: 21 October 2026
            </p>
          </div>
        </section>

        {/* Important notice */}
        <section className="relative z-10 -mt-7 px-6">
          <div className="mx-auto max-w-4xl rounded-2xl border border-amber-300/30 bg-amber-50 p-6 shadow-md">
            <div className="flex items-start gap-4">
              <AlertCircle
                className="mt-0.5 h-6 w-6 shrink-0 text-amber-700"
                aria-hidden="true"
              />

              <div>
                <h2 className="text-lg font-bold text-amber-950">
                  Important Notice
                </h2>

                <p className="mt-2 leading-7 text-amber-900">
                  Vanya products are not presented as medicines. Website
                  information is not intended to diagnose, treat, cure or
                  prevent any disease or replace professional medical advice.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Disclaimer content */}
        <section className="px-6 pb-12 pt-10 sm:pb-16">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-2xl border border-green-800/15 bg-white p-6 shadow-sm sm:p-10">
              <div className="border-b border-gray-200 pb-8">
                <h2 className="text-2xl font-bold text-gray-950">
                  About This Disclaimer
                </h2>

                <p className="mt-4 leading-7 text-gray-700">
                  This disclaimer applies to general information published by
                  Vanya Eco Products at www.vanyaecoproducts.in, including
                  product descriptions, articles, FAQs, recipes, traditional
                  uses and wellness-related information.
                </p>
              </div>

              <div className="divide-y divide-gray-200">
                {disclaimerSections.map((section) => (
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

            {/* Contact */}
            <div className="mt-8 rounded-2xl bg-[#07110b] p-6 text-white sm:p-8">
              <h2 className="text-2xl font-bold">
                Product Information Questions
              </h2>

              <p className="mt-3 max-w-2xl leading-7 text-gray-300">
                Contact us if you need current product information,
                ingredient details, storage instructions or other assistance
                before placing an order.
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
                  href="https://wa.me/917907662508?text=Hi%20Vanya%20Eco%20Products%2C%20I%20need%20more%20information%20about%20a%20product."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg border border-white/20 px-5 py-3 font-semibold transition hover:border-green-500 hover:text-green-400"
                >
                  Ask on WhatsApp
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