import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { products } from '../data/products'
import { blogs } from '../data/blogs'

const SITE_URL = 'https://www.vanyaecoproducts.in'

const DEFAULT_IMAGE =
  `${SITE_URL}/assets/og-image.png`

const pageMeta = {
  '/': {
    title:
      'Vanya Eco Products | Authentic Wayanad Spices, Masalas & Kerala Products',

    description:
      'Authentic spices, masalas, teas, coffees, coconut oils, nuts and honey from Wayanad, Kerala. Sourced carefully and processed in small batches.',

    image: DEFAULT_IMAGE,
    type: 'website',
  },

  '/blogs': {
    title:
      'Vanya Knowledge Stories | Spices, Food & Kerala Traditions',

    description:
      'Read useful stories from Vanya Eco Products about spices, masalas, coconut oils, freshness, storage and traditional Kerala food products.',

    image: DEFAULT_IMAGE,
    type: 'website',
  },

  '/data-protection': {
    title:
      'Privacy & Data Protection | Vanya Eco Products',

    description:
      'Learn how Vanya Eco Products collects, uses, protects and manages personal information received through our website and direct communication channels.',

    image: DEFAULT_IMAGE,
    type: 'website',
  },

  '/terms': {
    title:
      'Terms and Conditions | Vanya Eco Products',

    description:
      'Read the terms governing Vanya Eco Products direct orders, payments, shipping, replacements, refunds and use of our website.',

    image: DEFAULT_IMAGE,
    type: 'website',
  },

  '/shipping-and-refunds': {
    title:
      'Shipping and Refunds | Vanya Eco Products',

    description:
      'Read the Vanya Eco Products shipping, delivery, cancellation, replacement and refund policy for Indian and international orders.',

    image: DEFAULT_IMAGE,
    type: 'website',
  },

  '/product-disclaimer': {
    title:
      'Product Disclaimer | Vanya Eco Products',

    description:
      'Read important information about product descriptions, allergies, natural variations, traditional uses and health-related website content.',

    image: DEFAULT_IMAGE,
    type: 'website',
  },
}

function toAbsoluteUrl(value) {
  if (!value) {
    return DEFAULT_IMAGE
  }

  if (/^https?:\/\//i.test(value)) {
    return value
  }

  return `${SITE_URL}${
    value.startsWith('/')
      ? value
      : `/${value}`
  }`
}

function getRouteMeta(pathname) {
  const cleanPath =
    pathname !== '/'
      ? pathname.replace(/\/+$/, '')
      : '/'

  /*
   * Static website pages
   */
  if (pageMeta[cleanPath]) {
    return {
      ...pageMeta[cleanPath],

      url: `${SITE_URL}${
        cleanPath === '/'
          ? '/'
          : cleanPath
      }`,
    }
  }

  /*
   * Product pages
   */
  if (cleanPath.startsWith('/product/')) {
    const slug = decodeURIComponent(
      cleanPath.replace('/product/', '')
    )

    const product = products.find(
      (item) => item.slug === slug
    )

    if (product) {
      return {
        title:
          `${product.name} | Vanya Eco Products`,

        description:
          product.shortDescription ||
          `Learn more about ${product.name} from Vanya Eco Products.`,

        image: toAbsoluteUrl(
          product.imageBg ||
          product.imageFront
        ),

        url:
          `${SITE_URL}/product/${product.slug}`,

        type: 'product',
      }
    }
  }

  /*
   * Blog article pages
   */
  if (cleanPath.startsWith('/blog/')) {
    const slug = decodeURIComponent(
      cleanPath.replace('/blog/', '')
    )

    const blog = blogs.find(
      (item) => item.slug === slug
    )

    if (blog) {
      return {
        title:
          `${blog.title} | Vanya Eco Products`,

        description: blog.excerpt,

        image: toAbsoluteUrl(blog.image),

        url:
          `${SITE_URL}/blog/${blog.slug}`,

        type: 'article',
      }
    }
  }

  /*
   * Unknown pages
   */
  return {
    title:
      'Page Not Found | Vanya Eco Products',

    description:
      'The requested page could not be found. Return to Vanya Eco Products to explore our products and services.',

    image: DEFAULT_IMAGE,

    url: `${SITE_URL}${cleanPath}`,

    type: 'website',

    robots: 'noindex, follow',
  }
}

function setMeta(selector, attributes) {
  let element =
    document.head.querySelector(selector)

  if (!element) {
    element = document.createElement('meta')
    document.head.appendChild(element)
  }

  Object.entries(attributes).forEach(
    ([name, value]) => {
      element.setAttribute(name, value)
    }
  )
}

function setCanonical(url) {
  let canonical =
    document.head.querySelector(
      'link[rel="canonical"]'
    )

  if (!canonical) {
    canonical =
      document.createElement('link')

    canonical.setAttribute(
      'rel',
      'canonical'
    )

    document.head.appendChild(canonical)
  }

  canonical.setAttribute('href', url)
}

export default function RouteMeta() {
  const { pathname } = useLocation()

  useLayoutEffect(() => {
    const meta = getRouteMeta(pathname)

    const robots =
      meta.robots || 'index, follow'

    /*
     * Browser title
     */
    document.title = meta.title

    /*
     * Canonical URL
     */
    setCanonical(meta.url)

    /*
     * Standard SEO metadata
     */
    setMeta(
      'meta[name="description"]',
      {
        name: 'description',
        content: meta.description,
      }
    )

    setMeta(
      'meta[name="robots"]',
      {
        name: 'robots',
        content: robots,
      }
    )

    /*
     * Open Graph metadata
     */
    setMeta(
      'meta[property="og:site_name"]',
      {
        property: 'og:site_name',
        content: 'Vanya Eco Products',
      }
    )

    setMeta(
      'meta[property="og:title"]',
      {
        property: 'og:title',
        content: meta.title,
      }
    )

    setMeta(
      'meta[property="og:description"]',
      {
        property: 'og:description',
        content: meta.description,
      }
    )

    setMeta(
      'meta[property="og:image"]',
      {
        property: 'og:image',
        content: meta.image,
      }
    )

    setMeta(
      'meta[property="og:url"]',
      {
        property: 'og:url',
        content: meta.url,
      }
    )

    setMeta(
      'meta[property="og:type"]',
      {
        property: 'og:type',
        content: meta.type,
      }
    )

    /*
     * Twitter and social sharing metadata
     */
    setMeta(
      'meta[name="twitter:card"]',
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      }
    )

    setMeta(
      'meta[name="twitter:title"]',
      {
        name: 'twitter:title',
        content: meta.title,
      }
    )

    setMeta(
      'meta[name="twitter:description"]',
      {
        name: 'twitter:description',
        content: meta.description,
      }
    )

    setMeta(
      'meta[name="twitter:image"]',
      {
        name: 'twitter:image',
        content: meta.image,
      }
    )
  }, [pathname])

  return null
}