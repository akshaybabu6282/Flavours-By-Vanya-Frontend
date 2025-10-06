import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import WhatsAppFloating from '../components/WhatsAppFloating';
import Footer from '../components/Footer'


export default function ProductPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.slug === slug);

  if (!product) return (
    <div className="min-h-screen flex items-center justify-center text-gray-400 bg-black">
      Product not found
    </div>
  );


  return (
    <div className="bg-white text-black font-sans relative">

      {/* Sticky Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="fixed top-6 left-6 z-50 px-4 py-2 text-white bg-gray-800 hover:bg-gray-700 hover:text-white rounded-md flex items-center gap-2 shadow-lg"
      >
        &#8592; Back
      </button>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <img
          src={product.imageBg}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        />
        <div className="relative z-10 text-center max-w-3xl px-6 space-y-6">
          <h1 className="text-6xl md:text-7xl text-white font-display font-bold">{product.name}</h1>
          <p className="text-gray-300 text-lg md:text-xl">{product.shortDescription || 'Premium quality product from Wayanad.'}</p>
          <div className="flex justify-center gap-4 mt-4 flex-wrap">
            <a
              href="mailto:business@vanyaecoproducts.in"
              className="px-6 py-3 bg-white text-black rounded-lg font-semibold shadow hover:shadow-lg transition"
            >
              Bulk / Export Enquiry
            </a>
            <a
              href={`https://wa.me/917907662508?text=${encodeURIComponent('Hi, I want to order ' + product.name)}`}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold shadow hover:shadow-lg transition"
            >
              Order on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-display mb-6">About {product.name}</h2>
        {product.description.split('\n\n').map((para, index) => {
          const parts = para.split(/(\*\*[^*]+\*\*)/g).map((part, i) => {
            if (part.startsWith('**') && part.endsWith('**')) {
              return <strong key={i}>{part.slice(2, -2)}</strong>;
            }
            return part;
          });

          return (
            <p key={index} className="text-gray-700 text-lg mb-4">
              {parts}
            </p>
          );
        })}
      </section>

      {/* Info Cards Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-8">
        {product.descriptionSections?.map((card, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col items-center text-center transition hover:shadow-2xl">
            <img src={card.image} alt={card.title} className="w-full h-48 object-cover" />
            <div className="p-6 space-y-4">
              <h3 className="text-2xl font-display">{card.title}</h3>
              <p className="text-gray-600">{card.text}</p>
            </div>
          </div>
        ))}
      </section>


      {/* Gallery Section */}
      {product.smallImages?.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-4xl font-display mb-8 text-center">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {product.smallImages.map((img, i) => (
              <div key={i} className="w-full h-48 overflow-hidden rounded-xl shadow-lg">
                <img
                  src={img}
                  alt={`${product.name} ${i}`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Sourcing Details */}
     {/* {product.sourcing && (
        <section className="max-w-6xl mx-auto px-6 py-16 bg-white rounded-xl shadow-xl space-y-4">
          <h2 className="text-3xl font-display mb-4 text-center">Sourcing Details</h2>
          <p className="text-gray-700">Farm: {product.sourcing.farm}</p>
          <p className="text-gray-700">Type: {product.sourcing.type}</p>
          <p className="text-gray-700">Harvest Season: {product.sourcing.harvestSeason}</p>
        </section>
      )} */}
      <Footer />

      {/* Floating WhatsApp */}
      <WhatsAppFloating productName={product.name} />
    </div>
  );
}
