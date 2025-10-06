import React, { useRef } from "react";
import ProductCard from "./ProductCard";

export default function ProductSlider({ products = [] }) {
  const containerRef = useRef(null);

  const scrollNext = () => {
    const el = containerRef.current;
    if (!el) return;
    el.scrollBy({ left: el.offsetWidth, behavior: "smooth" });
  };

  const scrollPrev = () => {
    const el = containerRef.current;
    if (!el) return;
    el.scrollBy({ left: -el.offsetWidth, behavior: "smooth" });
  };

  return (
    <div className="relative">
      {/* Left arrow */}
      <button
        onClick={scrollPrev}
        className="flex items-center justify-center absolute left-[-1px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 text-white z-10 hover:bg-white/30 transition"
      >
        &#8592;
      </button>

      {/* Carousel container */}
      <div
        ref={containerRef}
        className="flex gap-4 overflow-x-auto scroll-smooth pb-4 no-scrollbar w-full"
      >
        {products.map((product, idx) => (
          <div key={idx} className="flex-shrink-0 w-[60%] sm:w-[50%] md:w-[22%] lg:w-[18%]">
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      {/* Right arrow */}
      <button
        onClick={scrollNext}
        className="flex items-center justify-center absolute right-[-1px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 text-white z-10 hover:bg-white/30 transition"
      >
        &#8594;
      </button>
    </div>
  );
}
