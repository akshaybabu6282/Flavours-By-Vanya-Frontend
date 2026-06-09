import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Footer from "../components/Footer";
import WhatsAppFloating from "../components/WhatsAppFloating";
import { blogs } from "../data/blogs";

export default function BlogDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        Blog not found
      </div>
    );
  }

  return (
    <div className="bg-[#f6f0e7] text-black min-h-screen">
      <Helmet>
        <title>{blog.title} | Vanya Eco Products Blog</title>
        <meta name="description" content={blog.excerpt} />
        <link
          rel="canonical"
          href={`https://www.vanyaecoproducts.in/blog/${blog.slug}`}
        />

        <meta property="og:type" content="article" />
        <meta property="og:title" content={`${blog.title} | Vanya Eco Products`} />
        <meta property="og:description" content={blog.excerpt} />
        <meta
          property="og:image"
          content={`https://www.vanyaecoproducts.in${blog.image}`}
        />
        <meta
          property="og:url"
          content={`https://www.vanyaecoproducts.in/blog/${blog.slug}`}
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${blog.title} | Vanya Eco Products`} />
        <meta name="twitter:description" content={blog.excerpt} />
        <meta
          name="twitter:image"
          content={`https://www.vanyaecoproducts.in${blog.image}`}
        />
      </Helmet>

      <button
        onClick={() => navigate(-1)}
        className="fixed top-5 left-5 z-50 px-4 py-2 bg-black/70 backdrop-blur-md text-white rounded-full shadow-lg hover:bg-black transition"
        style={{ fontFamily: '"Roboto", sans-serif' }}
      >
        ← Back
      </button>

      <main>
        <section className="relative min-h-[85vh] flex items-end overflow-hidden">
          <img
            src={blog.image}
            alt={blog.title}
            className="absolute inset-0 w-full h-full object-cover brightness-[0.45]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

          <div className="relative z-10 w-full px-6 pb-16 md:pb-24">
            <div className="max-w-6xl mx-auto">
              <p
                className="text-amber-300 mb-4 tracking-[0.25em] uppercase text-xs md:text-sm"
                style={{ fontFamily: '"Roboto", sans-serif' }}
              >
                {blog.category}
              </p>

              <h1
                className="text-4xl md:text-7xl text-white mb-6 leading-tight max-w-5xl"
                style={{ fontFamily: '"Raleway", sans-serif', fontWeight: "bold" }}
              >
                {blog.title}
              </h1>

              <p
                className="text-gray-200 text-lg md:text-2xl max-w-4xl leading-relaxed"
                style={{ fontFamily: '"Roboto", sans-serif' }}
              >
                {blog.excerpt}
              </p>
            </div>
          </div>
        </section>

        <article className="max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-20">
          <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden">
            {blog.intro && (
              <div className="p-6 md:p-12 border-b border-gray-100">
                <p
                  className="text-xl md:text-2xl text-gray-700 leading-relaxed"
                  style={{ fontFamily: '"Merriweather", serif' }}
                >
                  {blog.intro}
                </p>
              </div>
            )}

            <div className="p-6 md:p-12">
              {blog.content.map((section, index) => (
                <section
                  key={index}
                  className={`mb-14 ${
                    index % 2 === 0 ? "" : "md:grid md:grid-cols-2 md:gap-10 md:items-center"
                  }`}
                >
                  {section.image && index % 2 !== 0 && (
                    <div className="mb-6 md:mb-0">
                      <img
                        src={section.image}
                        alt={section.heading}
                        className="w-full h-72 md:h-96 object-cover rounded-3xl shadow-md"
                        loading="lazy"
                      />
                    </div>
                  )}

                  <div>
                    <h2
                      className="text-3xl md:text-4xl mb-5 leading-tight"
                      style={{ fontFamily: '"Raleway", sans-serif', fontWeight: "bold" }}
                    >
                      {section.heading}
                    </h2>

                    {Array.isArray(section.text) ? (
                      <div className="space-y-5">
                        {section.text.map((para, i) => (
                          <p
                            key={i}
                            className="text-gray-700 text-lg leading-relaxed"
                            style={{ fontFamily: '"Roboto", sans-serif' }}
                          >
                            {para}
                          </p>
                        ))}
                      </div>
                    ) : (
                      <p
                        className="text-gray-700 text-lg leading-relaxed"
                        style={{ fontFamily: '"Roboto", sans-serif' }}
                      >
                        {section.text}
                      </p>
                    )}
                  </div>

                  {section.image && index % 2 === 0 && (
                    <div className="mt-7">
                      <img
                        src={section.image}
                        alt={section.heading}
                        className="w-full h-72 md:h-[420px] object-cover rounded-3xl shadow-md"
                        loading="lazy"
                      />
                    </div>
                  )}
                </section>
              ))}

              <div className="mt-10 grid md:grid-cols-2 gap-6">
                <div className="bg-[#f6f0e7] rounded-3xl p-8">
                  <h3
                    className="text-2xl mb-4"
                    style={{ fontFamily: '"Raleway", sans-serif', fontWeight: "bold" }}
                  >
                    Why this matters
                  </h3>
                  <p
                    className="text-gray-700 leading-relaxed"
                    style={{ fontFamily: '"Roboto", sans-serif' }}
                  >
                    Good food begins with good ingredients. When spices and natural
                    products are sourced carefully, handled properly, and processed in
                    small batches, the difference can be felt in aroma, flavour, and
                    freshness.
                  </p>
                </div>

                <div className="bg-black text-white rounded-3xl p-8">
                  <h3
                    className="text-2xl mb-4"
                    style={{ fontFamily: '"Raleway", sans-serif', fontWeight: "bold" }}
                  >
                    Explore more from Vanya
                  </h3>
                  <p
                    className="text-gray-300 leading-relaxed mb-6"
                    style={{ fontFamily: '"Roboto", sans-serif' }}
                  >
                    Discover authentic Wayanad spices, masalas, teas, coffees,
                    coconut oils, nuts, and honey crafted with freshness and care.
                  </p>

                  <Link
                    to="/"
                    className="inline-block px-6 py-3 bg-white text-black rounded-full font-semibold"
                    style={{ fontFamily: '"Roboto", sans-serif' }}
                  >
                    View Products
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>

      <Footer />
      <WhatsAppFloating />
    </div>
  );
}