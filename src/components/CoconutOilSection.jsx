import React from "react";
import { Link } from "react-router-dom";

export default function CoconutOilSection({ products }) {
  return (
    <section id="coconut-oil" className="bg-gradient-to-b from-black to-gray-100 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-15">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2
            className="text-2xl md:text-3xl font-display mb-2 md:mb-4"
            style={{ fontFamily: '"Raleway", sans-serif' }}
          >
            Coconut Oil
          </h2>
          <p
            className="max-w-2xl mx-auto leading-relaxed text-gray-400 text-sm md:text-base mb-6 md:mb-8 text-center"
            stystyle={{ fontFamily: '"Roboto", sans-serif' }}
          >
            Experience the essence of Kerala’s heritage through our cold-pressed
            and hot-pressed coconut oils crafted from fresh Kuttiyadi coconuts
            for natural aroma, flavor, and purity.
          </p>
        </div>

        {/* Product Sections */}
        {products.map((product, index) => (
          <div
            key={index}
            className={`flex flex-col  md:flex-row items-center gap-10 bg-black shadow-lg hover:shadow-2xl transition-all duration-500 rounded-4xl px-10 py-10 md:gap-16 ${index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
          >
            {/* Image */}
            <div
              className="w-full md:w-1/2 overflow-hidden shadow-2xl transform transition hover:scale-[1.02]"
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            >
              <img
                src={product.imageFront}
                alt={product.name}
                className="w-full h-60 sm:h-72 lg:h-[400px] object-cover"
              />
            </div>

            {/* Content */}
            <div
              className="w-full md:w-1/2 text-center md:text-left space-y-5"
              data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
            >
              <h3
                className="text-lg sm:text-xl font-display text-white"
                style={{ fontFamily: '"Merriweather", serif' }}
              >
                {product.name}
              </h3>
              <div
                className="text-gray-400 text-sm leading-relaxed space-y-1"
                style={{ fontFamily: '"Roboto", sans-serif' }}
              >
                {product.shortDescriptionForHomePage
                  .split('\n\n')
                  .map((para, index) => {
                    const parts = para.split(/(\*\*[^*]+\*\*)/g).map((part, i) => {
                      if (part.startsWith('**') && part.endsWith('**')) {
                        return <strong key={i}>{part.slice(2, -2)}</strong>;
                      }
                      return part;
                    });
                    return <p key={index}>{parts}</p>;
                  })}
              </div>


              {/* Buttons */}
              <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
                <Link
                  to={`/product/${product.slug}`}
                  className="px-6 py-2.5 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition"
                  style={{ fontFamily: '"Roboto", sans-serif' }}
                >
                  Learn More
                </Link>
                <a
                  href={`https://wa.me/917907662508?text=${encodeURIComponent(
                    "Hi, I want to order " + product.name
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-2.5 bg-white text-green-900 rounded-lg hover:bg-green-700 hover:text-white transition"
                  style={{ fontFamily: '"Roboto", sans-serif' }}
                >
                  Order on WhatsApp
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
