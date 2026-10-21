import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { products } from '../src/data/products.js'
import { blogs } from '../src/data/blogs.js'

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url))
const projectRoot = path.resolve(scriptDirectory, '..')
const distDirectory = path.join(projectRoot, 'dist')
const publicDirectory = path.join(projectRoot, 'public')
const baseHtmlPath = path.join(distDirectory, 'index.html')

const SITE_URL = 'https://www.vanyaecoproducts.in'
const DEFAULT_IMAGE = `${SITE_URL}/assets/og-image.png`

function escapeHtml(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')
}

function escapeXml(value = '') {
  return escapeHtml(value)
}

function absoluteUrl(value) {
  if (!value) return DEFAULT_IMAGE
  if (/^https?:\/\//i.test(value)) return value

  return `${SITE_URL}${value.startsWith('/') ? value : `/${value}`}`
}

function replaceTitle(html, title) {
  return html.replace(
    /<title>[\s\S]*?<\/title>/i,
    `<title>${escapeHtml(title)}</title>`
  )
}

function replaceMetaByName(html, name, content) {
  const pattern = new RegExp(
    `<meta\\s+name=["']${name}["'][^>]*>`,
    'i'
  )

  const tag = `<meta name="${name}" content="${escapeHtml(content)}" />`

  if (pattern.test(html)) {
    return html.replace(pattern, tag)
  }

  return html.replace('</head>', `  ${tag}\n</head>`)
}

function replaceMetaByProperty(html, property, content) {
  const pattern = new RegExp(
    `<meta\\s+property=["']${property}["'][^>]*>`,
    'i'
  )

  const tag = `<meta property="${property}" content="${escapeHtml(content)}" />`

  if (pattern.test(html)) {
    return html.replace(pattern, tag)
  }

  return html.replace('</head>', `  ${tag}\n</head>`)
}

function replaceCanonical(html, url) {
  const pattern = /<link\s+rel=["']canonical["'][^>]*>/i
  const tag = `<link rel="canonical" href="${escapeHtml(url)}" />`

  if (pattern.test(html)) {
    return html.replace(pattern, tag)
  }

  return html.replace('</head>', `  ${tag}\n</head>`)
}

function addStructuredData(html, structuredData) {
  if (!structuredData) return html

  const json = JSON.stringify(structuredData).replaceAll('<', '\\u003c')

  const script = `  <script type="application/ld+json">${json}</script>\n`

  return html.replace('</head>', `${script}</head>`)
}

function createPageHtml(baseHtml, page) {
  let html = baseHtml

  html = replaceTitle(html, page.title)
  html = replaceCanonical(html, page.url)
  html = replaceMetaByName(html, 'description', page.description)
  html = replaceMetaByName(
    html,
    'robots',
    page.robots || 'index, follow'
  )

  html = replaceMetaByName(
    html,
    'twitter:card',
    'summary_large_image'
  )

  html = replaceMetaByName(
    html,
    'twitter:title',
    page.title
  )

  html = replaceMetaByName(
    html,
    'twitter:description',
    page.description
  )

  html = replaceMetaByName(
    html,
    'twitter:image',
    page.image
  )

  html = replaceMetaByProperty(
    html,
    'og:site_name',
    'Vanya Eco Products'
  )

  html = replaceMetaByProperty(
    html,
    'og:title',
    page.title
  )

  html = replaceMetaByProperty(
    html,
    'og:description',
    page.description
  )

  html = replaceMetaByProperty(
    html,
    'og:image',
    page.image
  )

  html = replaceMetaByProperty(
    html,
    'og:url',
    page.url
  )

  html = replaceMetaByProperty(
    html,
    'og:type',
    page.type
  )

  html = addStructuredData(html, page.structuredData)

  return html
}

async function writeRoutePage(routePath, html) {
  const cleanPath = routePath
    .replace(/^\//, '')
    .replace(/\/$/, '')

  const outputDirectory = path.join(
    distDirectory,
    cleanPath
  )

  await fs.mkdir(outputDirectory, {
    recursive: true,
  })

  await fs.writeFile(
    path.join(outputDirectory, 'index.html'),
    html,
    'utf8'
  )
}

const staticPages = [
  {
    path: '/blogs',
    title:
      'Vanya Knowledge Stories | Spices, Food & Kerala Traditions',
    description:
      'Read useful stories from Vanya Eco Products about spices, masalas, coconut oils, freshness, storage and traditional Kerala food products.',
  },
  {
    path: '/data-protection',
    title:
      'Privacy & Data Protection | Vanya Eco Products',
    description:
      'Learn how Vanya Eco Products collects, uses, protects and manages personal information received through our website and direct communication channels.',
  },
  {
    path: '/terms',
    title:
      'Terms and Conditions | Vanya Eco Products',
    description:
      'Read the terms governing Vanya Eco Products direct orders, payments, shipping, replacements, refunds and use of our website.',
  },
  {
    path: '/shipping-and-refunds',
    title:
      'Shipping and Refunds | Vanya Eco Products',
    description:
      'Read the Vanya Eco Products shipping, delivery, cancellation, replacement and refund policy for Indian and international orders.',
  },
  {
    path: '/product-disclaimer',
    title:
      'Product Disclaimer | Vanya Eco Products',
    description:
      'Read important information about product descriptions, allergies, natural variations, traditional uses and health-related website content.',
  },
].map((page) => ({
  ...page,
  url: `${SITE_URL}${page.path}`,
  image: DEFAULT_IMAGE,
  type: 'website',
}))

const productPages = products.map((product) => {
  const routePath = `/product/${product.slug}`

  const description =
    product.shortDescription ||
    `Learn more about ${product.name} from Vanya Eco Products.`

  const image = absoluteUrl(
    product.imageBg || product.imageFront
  )

  const url = `${SITE_URL}${routePath}`

  return {
    path: routePath,
    title: `${product.name} | Vanya Eco Products`,
    description,
    image,
    url,
    type: 'product',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: product.name,
      description,
      image,
      url,
      category: product.category,
      brand: {
        '@type': 'Brand',
        name: 'Vanya Eco Products',
      },
    },
  }
})

const blogPages = blogs.map((blog) => {
  const routePath = `/blog/${blog.slug}`
  const image = absoluteUrl(blog.image)
  const url = `${SITE_URL}${routePath}`

  return {
    path: routePath,
    title: `${blog.title} | Vanya Eco Products`,
    description: blog.excerpt,
    image,
    url,
    type: 'article',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: blog.title,
      description: blog.excerpt,
      image,
      mainEntityOfPage: url,
      publisher: {
        '@type': 'Organization',
        name: 'Vanya Eco Products',
        logo: {
          '@type': 'ImageObject',
          url: `${SITE_URL}/assets/logo.png`,
        },
      },
    },
  }
})

function createSitemap(pages) {
  const urls = [
    {
      url: `${SITE_URL}/`,
      priority: '1.0',
      changefreq: 'weekly',
    },
    ...pages.map((page) => ({
      url: page.url,
      priority:
        page.path === '/blogs' ? '0.8' : '0.7',
      changefreq:
        page.path.startsWith('/product/')
          ? 'weekly'
          : 'monthly',
    })),
  ]

  const entries = urls
    .map(
      ({ url, priority, changefreq }) => `  <url>
    <loc>${escapeXml(url)}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
    )
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</urlset>
`
}

async function main() {
  const baseHtml = await fs.readFile(
    baseHtmlPath,
    'utf8'
  )

  const pages = [
    ...staticPages,
    ...productPages,
    ...blogPages,
  ]

  await Promise.all(
    pages.map(async (page) => {
      const html = createPageHtml(baseHtml, page)

      await writeRoutePage(page.path, html)
    })
  )

  const sitemap = createSitemap(pages)

  await Promise.all([
    fs.writeFile(
      path.join(distDirectory, 'sitemap.xml'),
      sitemap,
      'utf8'
    ),
    fs.writeFile(
      path.join(publicDirectory, 'sitemap.xml'),
      sitemap,
      'utf8'
    ),
  ])

  console.log(
    `Generated ${pages.length} route-specific SEO pages and sitemap.xml`
  )
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})