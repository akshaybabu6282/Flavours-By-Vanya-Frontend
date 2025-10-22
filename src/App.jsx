import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ProductSection from './components/ProductSection'
import BulkOrders from './components/BulkOrders'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppFloating from './components/WhatsAppFloating'
import { products } from './data/products'
import AboutUs from "./components/AboutUs";
import Licenses from "./components/Licenses";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Helmet } from "react-helmet";


export default function App() {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const masalas = products.filter(p => p.category === 'Masala')
  const rawSpices = products.filter(p => p.category === 'Raw Spice')
  const beverages = products.filter(p => p.category === 'Beverage')
  const nutsHoney = products.filter(p => p.category === 'Nuts & Honey')


  return (
    <div className="min-h-screen font-body">
      <Helmet>
        <title>Vanya Eco Products | Flavours by Vanya | Authentic Kerala Spices & Masalas</title>
        <meta name="description" content="Shop authentic Kerala spices, masalas, teas, and coffees from Wayanad — pure, natural, and handcrafted by Vanya Eco Products." />
        <meta name="keywords" content="Vanya Eco Products, Wayanad spices, Kerala masalas, natural teas, organic coffees" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.vanyaecoproducts.in/" />
      </Helmet>


      <Header />
      <main >
        <Hero />
        <ProductSection id="masalas" title="Masalas" subtitle="Handcrafted masalas that blend tradition, purity, and the soulful taste of Kerala in every pinch." products={masalas} />
        <ProductSection id="raw-spices" title="Spices" subtitle="From Wayanad’s misty hills come spices that breathe aroma, warmth, and authenticity into every creation." products={rawSpices} />
        <ProductSection id="beverages" title="Teas & Coffees" subtitle="Brewed from Wayanad’s lush estates smooth, aromatic blends that awaken your senses and soothe your soul." products={beverages} />
        <ProductSection id="nutsHoney" title="Nuts & Honey" subtitle="Golden honey and wholesome nuts a symphony of health, purity, and Wayanad’s natural richness." products={nutsHoney} />
        <AboutUs />
        <BulkOrders />
        <Contact />
        <Licenses />
      </main>
      <Footer />
      <WhatsAppFloating />
    </div>
  )
}