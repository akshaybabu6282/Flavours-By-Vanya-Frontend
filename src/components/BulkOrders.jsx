import React from "react";
import { Mail, Package, Globe } from "lucide-react";

export default function BulkOrders() {
  return (
    <section
      id="bulk"
      className="py-20 bg-gradient-to-b from-black to-black text-white"
    >
      <div className="max-w-6xl mx-auto px-6 text-center" data-aos="fade-up">
        <h2
          className="text-3xl md:text-4xl font-display mb-6"
          data-aos="zoom-in"
        >
          🌍 Bulk Orders & Export
        </h2>
        <p
          className="text-gray-300 max-w-2xl mx-auto mb-10"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          We specialize in bulk supply and international exports of premium
          spices, teas, and coffees.  
          With trusted sourcing and authentic quality, we’re the partner you can
          count on for global trade.
        </p>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition">
            <Package className="w-10 h-10 mx-auto mb-4 text-white" />
            <h3 className="text-xl font-semibold mb-2">Custom Packaging</h3>
            <p className="text-gray-400 text-sm">
              Tailored packaging and branding options to suit your business
              needs.
            </p>
          </div>
          <div
            className="p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <Globe className="w-10 h-10 mx-auto mb-4 text-white" />
            <h3 className="text-xl font-semibold mb-2">Worldwide Export</h3>
            <p className="text-gray-400 text-sm">
              Supplying to international markets with reliable logistics.
            </p>
          </div>
          <div
            className="p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            <Mail className="w-10 h-10 mx-auto mb-4 text-white" />
            <h3 className="text-xl font-semibold mb-2">Direct Enquiry</h3>
            <p className="text-gray-400 text-sm">business@vanyaecoproducts.in</p>
          </div>
        </div>

        <a
          href="mailto:business@vanyaecoproducts.in"
          className="inline-block mt-10 px-8 py-4 bg-white text-black font-medium rounded-lg shadow-md hover:shadow-xl transition"
          data-aos="zoom-in"
          data-aos-delay="1000"
        >
          📩 Send Bulk / Export Enquiry
        </a>
      </div>
      <hr className="mt-26" />
    </section>
  );
}
