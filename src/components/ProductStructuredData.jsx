import React from "react";

export default function ProductStructuredData({ product }) {
  if (!product) return null;

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: `https://www.vanyaecoproducts.in${product.imageBg}`,
    description: product.shortDescription,
    brand: {
      "@type": "Brand",
      name: "Vanya Eco Products"
    },
    category: product.category
  };

  const faqSchema = product.faqs?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: product.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer
          }
        }))
      }
    : null;

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(productSchema)}
      </script>

      {faqSchema && (
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      )}
    </>
  );
}