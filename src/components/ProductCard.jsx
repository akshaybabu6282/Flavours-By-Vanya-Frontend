import React from "react";
import { Link } from "react-router-dom";
import useInView from "../hooks/useInView";

export default function ProductCard({ product }) {
  const [ref, inView] = useInView();

  return (
    <article
      ref={ref}
      className={`group bg-white/3 rounded-xl border border-white/5 transform transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <Link to={`/product/${product.slug}`}>
        <div className="relative w-full aspect-[4/3] rounded overflow-hidden">
          {/* front */}
          <img
            src={product.imageFront}
            alt={product.name + " front"}
            className="absolute inset-0 w-full h-full object-cover flip-front group-hover:opacity-0"
            loading="lazy"
          />
          {/* back */}
          <img
            src={product.imageBack}
            alt={product.name + " back"}
            className="absolute inset-0 w-full h-full object-cover flip-back opacity-0 group-hover:opacity-100"
            loading="lazy"
          />
        </div>
        <h3 className="mt-4 text-lg font-semibold">{product.name}</h3>
        <p className="text-xs text-gray-400">{product.shortDescriptionForHomePage}</p>
      </Link>
    </article>
  );
}
