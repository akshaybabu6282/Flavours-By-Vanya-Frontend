import React from "react";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-black to-gray-800 text-white"
    >
      <div className="max-w-6xl mx-auto px-6 text-center" data-aos="fade-up">
        <h2
          className="text-3xl md:text-4xl font-display mb-6"
          data-aos="zoom-in"
          style={{fontFamily: '"Raleway", sans-serif'}}
        >
           Get in Touch
        </h2>
        <p
          className="text-gray-300 max-w-2xl mx-auto mb-10"
          data-aos="fade-up"
          data-aos-delay="200"
          style={{ fontFamily: '"Roboto", sans-serif'}}
        >
          Have questions or need assistance? Reach out to us for product details, 
          small orders, or export collaborations. We’re happy to help.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Call */}
          <a
            href="tel:+917907662508"
            className="p-6 bg-white/10 rounded-xl shadow hover:shadow-lg hover:bg-white/20 transition text-left flex items-start gap-4"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <Phone className="w-8 h-8 text-green-400" />
            <div>
              <h3 className="font-semibold text-lg" style={{fontFamily: '"Merriweather", serif'}}>Call Us</h3>
              <p className="text-gray-200" style={{ fontFamily: '"Roboto", sans-serif'}}>+91 7907662508</p>
            </div>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/917907662508"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 bg-white/10 rounded-xl shadow hover:shadow-lg hover:bg-white/20 transition text-left flex items-start gap-4"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <MessageCircle className="w-8 h-8 text-green-400" />
            <div>
              <h3 className="font-semibold text-lg" style={{fontFamily: '"Merriweather", serif'}}>WhatsApp</h3>
              <p className="text-gray-200" style={{ fontFamily: '"Roboto", sans-serif'}}>Quick orders & support on WhatsApp</p>
            </div>
          </a>

          {/* Email */}
          <a
            href="mailto:support@vanyaecoproducts.in"
            className="p-6 bg-white/10 rounded-xl shadow hover:shadow-lg hover:bg-white/20 transition text-left flex items-start gap-4"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <Mail className="w-8 h-8 text-blue-400" />
            <div>
              <h3 className="font-semibold text-lg" style={{fontFamily: '"Merriweather", serif'}}>Email Us</h3>
              <p className="text-gray-200" style={{ fontFamily: '"Roboto", sans-serif'}}>support@vanyaecoproducts.in</p>
            </div>
          </a>

          {/* Location */}
          <a
            href="https://www.google.com/maps/place/Wayanad,+Kerala"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 bg-white/10 rounded-xl shadow hover:shadow-lg hover:bg-white/20 transition text-left flex items-start gap-4"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <MapPin className="w-8 h-8 text-red-400" />
            <div>
              <h3 className="font-semibold text-lg" style={{fontFamily: '"Merriweather", serif'}}>Location</h3>
              <p className="text-gray-200" style={{ fontFamily: '"Roboto", sans-serif'}}>Wayanad, Kerala, India</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
