import React from 'react'
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="mt-20 bg-gradient-to-t from-black to-gray-900 text-gray-300 py-14">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Brand & tagline */}
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-white">Vanya Eco Products</h3>
          <p className="text-gray-400 text-sm">Premium spices, teas & coffees crafted in Wayanad. Quality, trust & authenticity guaranteed.</p>
          <div className="flex items-center gap-3 mt-2 text-xs text-gray-500">
            <span>© {new Date().getFullYear()}</span>
            <span>Made with care in Wayanad</span>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-2">
          <h4 className="text-white font-semibold">Quick Links</h4>
          <ul className="space-y-1 text-gray-400 text-sm">
            <li><a href="#about" className="hover:text-white transition">About Us</a></li>
            <li><a href="#bulk" className="hover:text-white transition">Bulk Orders</a></li>
            <li><a href="#licenses" className="hover:text-white transition">Certifications</a></li>
            <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact / Social */}
        <div className="space-y-2">
          <h4 className="text-white font-semibold">Contact</h4>
          <ul className="space-y-1 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-green-400" />
              <a href="tel:+917907662508" className="hover:text-white transition">+91 7907662508</a>
            </li>
            <li className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-green-400" />
              <a href="https://wa.me/917907662508" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">WhatsApp</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-blue-400" />
              <a href="mailto:vanyaecoproducts@gmail.com" className="hover:text-white transition">Email Us</a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-red-400" />
              <a href="https://www.google.com/maps/search/?api=1&query=Wayanad+Kerala" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Wayanad, Kerala</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-500 text-xs">
        Designed & Developed by Vanya Eco Products Team
      </div>
    </footer>
  )
}
