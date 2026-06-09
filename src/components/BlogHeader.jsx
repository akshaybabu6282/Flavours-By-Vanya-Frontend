import React from "react";
import { Link, useNavigate } from "react-router-dom";

const logo = "/assets/logo.png";

export default function BlogHeader() {
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Vanya Eco Products"
            className="h-12 md:h-14 w-auto object-contain rounded-xl"
          />
        </Link>

        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 border border-white/20 text-white rounded-lg hover:bg-white hover:text-black transition"
          style={{ fontFamily: '"Roboto", sans-serif' }}
        >
          ← Back
        </button>
      </div>
    </header>
  );
}