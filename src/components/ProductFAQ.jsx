import React, { useState } from "react";

export default function ProductFAQ({ faqs = [] }) {
  const [openIndex, setOpenIndex] = useState(null);

  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2
        className="text-4xl mb-8 text-center"
        style={{ fontFamily: '"Raleway", sans-serif', fontWeight: "bold" }}
      >
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
            <button
              type="button"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full text-left px-6 py-4 flex justify-between items-center font-semibold bg-gray-50 hover:bg-gray-100"
              style={{ fontFamily: '"Roboto", sans-serif' }}
            >
              <span>{faq.question}</span>
              <span className="text-2xl">{openIndex === index ? "−" : "+"}</span>
            </button>

            {openIndex === index && (
              <p
                className="px-6 py-4 text-gray-700 leading-relaxed"
                style={{ fontFamily: '"Roboto", sans-serif' }}
              >
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}