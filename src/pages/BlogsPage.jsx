import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import WhatsAppFloating from "../components/WhatsAppFloating";
import BlogCard from "../components/BlogCard";
import { blogs } from "../data/blogs";

export default function BlogsPage() {
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);

  const blogsPerPage = 6;

  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  const startIndex = (currentPage - 1) * blogsPerPage;

  const currentBlogs = blogs.slice(
    startIndex,
    startIndex + blogsPerPage
  );

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-[#f6f0e7] min-h-screen text-black">
      <Helmet>
        <title>
          Blogs | Vanya Eco Products | Wayanad Spices & Kerala Products
        </title>

        <meta
          name="description"
          content="Read useful articles from Vanya Eco Products about Wayanad spices, Kerala masalas, coconut oil, freshness, storage tips, and traditional food products."
        />

        <link
          rel="canonical"
          href="https://www.vanyaecoproducts.in/blogs"
        />
      </Helmet>

      <button
        onClick={() => navigate(-1)}
        className="fixed top-5 left-5 z-50 px-5 py-2 bg-black text-white rounded-full shadow-lg hover:bg-gray-800 transition"
        style={{ fontFamily: '"Roboto", sans-serif' }}
      >
        ← Back
      </button>

      <main className="pt-28 pb-20">
        <section className="max-w-6xl mx-auto px-6 text-center mb-14">
          <p className="text-amber-700 tracking-[0.25em] uppercase text-sm mb-4">
            Vanya Eco Products
          </p>

          <h1
            className="text-4xl md:text-6xl mb-5"
            style={{
              fontFamily: '"Raleway", sans-serif',
              fontWeight: "bold",
            }}
          >
            Vanya Knowledge Stories
          </h1>

          <p
            className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed"
            style={{ fontFamily: '"Roboto", sans-serif' }}
          >
            Learn about Wayanad spices, Kerala flavours, natural
            processing, small batch freshness, coconut oils, and
            traditional food wisdom.
          </p>
        </section>

        <section className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentBlogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </section>

        <section className="flex items-center justify-center gap-4 mt-16">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className={`px-6 py-3 rounded-full transition ${
              currentPage === 1
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-black text-white hover:bg-gray-800"
            }`}
            style={{ fontFamily: '"Roboto", sans-serif' }}
          >
            ← Previous
          </button>

          <div
            className="px-5 py-3 bg-white rounded-full shadow-md"
            style={{ fontFamily: '"Roboto", sans-serif' }}
          >
            Page {currentPage} of {totalPages}
          </div>

          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className={`px-6 py-3 rounded-full transition ${
              currentPage === totalPages
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-black text-white hover:bg-gray-800"
            }`}
            style={{ fontFamily: '"Roboto", sans-serif' }}
          >
            Next →
          </button>
        </section>
      </main>

      <Footer />
      <WhatsAppFloating />
    </div>
  );
}