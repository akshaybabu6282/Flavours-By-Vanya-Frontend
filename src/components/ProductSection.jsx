import React from "react";
import ProductSlider from "./ProductSlider";

export default function ProductSection({ title, id, products,subtitle, className = "" }) {
  return (
    <section id={id} className="py-10 md:py-14 ">
      {/* Titles & Description */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 className="text-2xl md:text-3xl font-display mb-2 md:mb-4 text-center" style={{fontFamily: '"Raleway", sans-serif'}}>{title}</h1>
        <p className="text-gray-400 text-sm md:text-base mb-4 md:mb-6 text-center" style={{ fontFamily: '"Roboto", sans-serif'}}>
           {subtitle}
        </p>
      </div>

      {/* Full-width slider */}
      <div className="w-full overflow-x-hidden px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <ProductSlider products={products} />
      </div>
    </section>
  );
}
