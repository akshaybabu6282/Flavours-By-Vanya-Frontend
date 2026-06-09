import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import ProductPage from './pages/ProductPage'
import "./index.css";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from './components/ScrollToTop'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/product/:slug" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
)