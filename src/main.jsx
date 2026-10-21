import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import ProductPage from './pages/ProductPage'
import "./index.css";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from './components/ScrollToTop'
import BlogsPage from './pages/BlogsPage'
import BlogDetailPage from './pages/BlogDetailPage'
import DataProtectionPage from './pages/DataProtectionPage'
import TermsPage from './pages/TermsPage'
import OrderSupportPage from './pages/OrderSupportPage'
import ProductDisclaimerPage from './pages/ProductDisclaimerPage'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/product/:slug" element={<ProductPage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/blog/:slug" element={<BlogDetailPage />} />
          <Route
            path="/data-protection"
            element={<DataProtectionPage />}
          />
          <Route
            path="/terms"
            element={<TermsPage />}
          />
          <Route
            path="/shipping-and-refunds"
            element={<OrderSupportPage />}
          />
          <Route
            path="/product-disclaimer"
            element={<ProductDisclaimerPage />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
)