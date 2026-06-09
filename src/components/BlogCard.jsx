import React from "react";
import { Link } from "react-router-dom";

export default function BlogCard({ blog }) {
  return (
    <Link
      to={`/blog/${blog.slug}`}
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition block"
    >
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-56 object-cover"
        loading="lazy"
      />

      <div className="p-6">
        <p
          className="text-sm text-amber-700 mb-2"
          style={{ fontFamily: '"Roboto", sans-serif' }}
        >
          {blog.category}
        </p>

        <h2
          className="text-2xl text-black mb-3"
          style={{ fontFamily: '"Raleway", sans-serif', fontWeight: "bold" }}
        >
          {blog.title}
        </h2>

        <p
          className="text-gray-600 leading-relaxed"
          style={{ fontFamily: '"Roboto", sans-serif' }}
        >
          {blog.excerpt}
        </p>

        <p
          className="mt-4 text-black font-semibold"
          style={{ fontFamily: '"Roboto", sans-serif' }}
        >
          Read More →
        </p>
      </div>
    </Link>
  );
}