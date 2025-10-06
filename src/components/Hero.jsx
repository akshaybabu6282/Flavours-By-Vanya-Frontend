import React, { useState, useEffect } from "react";

const banners = [
  {
    id: 1,
    title: "Vanya Eco Products",
    subtitle: "Handcrafted spices, teas and coffees from Wayanad.",
    image: "/assets/hero1.webp",
    ctas: [
      { text: "Teas & Coffees", href: "#beverages", primary: true },
    ],
  },
  {
    id: 2,
    title: "Sustainably Sourced",
    subtitle: "From farm to your home, pure & honest.",
    image: "/assets/hero2.webp",
    ctas: [
      { text: "Spices", href: "#raw-spices", primary: false },
    ],
  },
  {
    id: 3,
    title: "Premium Quality",
    subtitle: "Experience authentic flavors with every dish.",
    image: "/assets/hero3.webp",
    ctas: [
      { text: "Masalas", href: "#masalas", primary: true },
    ],
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {banners.map((banner, idx) => (
        <div
          key={banner.id}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
            idx === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Banner Image */}
          <img
            src={banner.image}
            alt={banner.title}
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 z-10"></div>

          {/* Text on Image */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 z-20">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-white animate-fadeInUp">
              {banner.title}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 text-gray-200 animate-fadeInUp delay-150">
              {banner.subtitle}
            </p>
            <div className="flex flex-wrap gap-4 justify-center animate-fadeInUp delay-300">
              {banner.ctas.map((cta, i) => (
                <a
                  key={i}
                  href={cta.href}
                  className={`px-6 py-3 rounded-md text-sm sm:text-base ${
                    cta.primary
                      ? "bg-white text-black"
                      : "border border-white/30 text-white"
                  }`}
                >
                  {cta.text}
                </a>
              ))}
            </div>
          </div>
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-10 w-full flex justify-center gap-3 z-30">
        {banners.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full transition ${
              idx === current ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
