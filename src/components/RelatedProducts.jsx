import React from "react";
import { Link } from "react-router-dom";

export default function RelatedProducts({ currentProduct, products }) {

  const relatedProducts = products
    .filter(
      (item) =>
        item.category === currentProduct.category &&
        item.slug !== currentProduct.slug
    )
    .slice(0, 4);

  if (relatedProducts.length === 0) return null;

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">

      <h2
        className="text-4xl mb-10 text-center"
        style={{
          fontFamily: '"Raleway", sans-serif',
          fontWeight: "bold",
        }}
      >
        Related Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        {relatedProducts.map((item) => (

          <Link
            key={item.id}
            to={`/product/${item.slug}`}
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition"
          >

            <img
              src={item.imageBg}
              alt={item.name}
              className="w-full h-52 object-cover"
              loading="lazy"
            />

            <div className="p-5 text-center">

              <h3
                className="text-xl text-black"
                style={{
                  fontFamily: '"Merriweather", serif',
                  fontWeight: "bold",
                }}
              >
                {item.name}
              </h3>

              <p
                className="text-gray-600 mt-2 text-sm"
                style={{ fontFamily: '"Roboto", sans-serif' }}
              >
                {item.shortDescription}
              </p>

            </div>

          </Link>

        ))}

      </div>

    </section>
  );
}