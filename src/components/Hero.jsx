import React, { useState, useEffect } from "react";

const banners = [
  {
    id: 1,
    title: "Sip the Soul of Wayanad",
    subtitle: "Awaken your senses with our mountain-grown teas and hand-roasted coffees each cup a serene journey through Wayanad’s lush greenery.",
    image: "/assets/hero1.jpg",
    ctas: [
      { text: "Taste the Brew", href: "#beverages", primary: false },
    ],
  },
  {
    id: 2,
    title: "From Earth’s Heart to Your Kitchen",
    subtitle: "Grown in the misty hills of Wayanad, our spices capture the purity of the land bold, fragrant, and full of life in every grain.",
    image: "/assets/hero2.jpg",
    ctas: [
      { text: "Discover Spices", href: "#raw-spices", primary: false },
    ],
  },
  {
    id: 3,
    title: "A Symphony of Flavours in Every Pinch",
    subtitle: "From the heart of Wayanad’s kitchens, our masalas bring tradition alive blending handpicked ingredients into timeless tastes that whisper stories of home.",
    image: "/assets/hero3.jpg",
    ctas: [
      { text: "Experience the Essence", href: "#masalas", primary: false },
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
            <h1 className="text-3xl md:text-4xl mb-10 text-white animate-fadeInUp" style={{fontFamily: '"Raleway", sans-serif',fontWeight:'bold'}}>
              {banner.title}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 text-gray-200 animate-fadeInUp delay-150 max-w-5xl" style={{ fontFamily: '"Roboto", sans-serif'}}>
              {banner.subtitle}
            </p>
            <div className="flex flex-wrap gap-4 justify-center animate-fadeInUp delay-300" style={{ fontFamily: '"Roboto", sans-serif'}}>
              {banner.ctas.map((cta, i) => (
                <a
                  key={i}
                  href={cta.href}
                  className={`px-6 py-3 rounded-md text-sm sm:text-base mt-50px ${
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
     {/*  <div className="absolute bottom-10 w-full flex justify-center gap-3 z-30">
        {banners.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full transition ${
              idx === current ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div> */}
    </section>
  );
}
