import React, {
  lazy,
  Suspense,
} from 'react'

import { createRoot } from 'react-dom/client'

import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom'

import { HelmetProvider } from 'react-helmet-async'

import App from './App'

import GlobalHeader from './components/GlobalHeader'
import PageLoader from './components/PageLoader'
import RouteMeta from './components/RouteMeta'
import ScrollToTop from './components/ScrollToTop'

import './index.css'

const ProductPage = lazy(
  () => import('./pages/ProductPage')
)

const BlogsPage = lazy(
  () => import('./pages/BlogsPage')
)

const BlogDetailPage = lazy(
  () => import('./pages/BlogDetailPage')
)

const DataProtectionPage = lazy(
  () => import('./pages/DataProtectionPage')
)

const TermsPage = lazy(
  () => import('./pages/TermsPage')
)

const OrderSupportPage = lazy(
  () => import('./pages/OrderSupportPage')
)

const ProductDisclaimerPage = lazy(
  () => import('./pages/ProductDisclaimerPage')
)

const NotFoundPage = lazy(
  () => import('./pages/NotFoundPage')
)

createRoot(
  document.getElementById('root')
).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <RouteMeta />
        <ScrollToTop />
        <GlobalHeader />

        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route
              path="/"
              element={<App />}
            />

            <Route
              path="/product/:slug"
              element={<ProductPage />}
            />

            <Route
              path="/blogs"
              element={<BlogsPage />}
            />

            <Route
              path="/blog/:slug"
              element={<BlogDetailPage />}
            />

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

            <Route
              path="*"
              element={<NotFoundPage />}
            />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
)