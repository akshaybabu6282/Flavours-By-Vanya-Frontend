const SITE_NAME = 'Vanya Eco Products'

const seoOverrides = {
  'forest-honey': {
    title: `Forest Honey from Wayanad | ${SITE_NAME}`,
    description:
      'Discover natural Forest Honey from Vanya Eco Products, collected for its distinctive flavour, aroma and natural character.',
  },

  'vendha-velichenna-pure-virgin-coconut-oil-hot-pressed': {
    title: `Vendha Velichenna Virgin Coconut Oil | ${SITE_NAME}`,
    description:
      'Discover traditionally prepared Vendha Velichenna from Vanya Eco Products, made from coconut milk for its characteristic aroma and flavour.',
  },
}

const wayanadProductSlugs = new Set([
  'turmeric-powder',
  'chilli-powder',
  'kashmiri-chilli-powder',
  'pepper-powder',
  'coriander-powder',
  'raw-pepper',
  'cardamom',
  'malabar-tamarind',
  'cloves',
  'cinnamon',
  'dry-ginger',
  'wayanad-tea',
  'wayanad-coffee',
])

function cleanText(value = '') {
  return String(value)
    .replace(/\*\*/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

function shortenText(value, maximumLength = 155) {
  const text = cleanText(value)

  if (text.length <= maximumLength) {
    return text
  }

  const shortened = text.slice(0, maximumLength + 1)
  const lastSpace = shortened.lastIndexOf(' ')

  return `${shortened.slice(0, lastSpace).replace(/[.,;:!?]+$/, '')}.`
}

function createProductTitle(product) {
  if (wayanadProductSlugs.has(product.slug)) {
    return `${product.name} from Wayanad | ${SITE_NAME}`
  }

  if (product.category === 'Masala') {
    return `${product.name} Masala | ${SITE_NAME}`
  }

  if (product.category === 'Nuts & Honey') {
    return `${product.name} | Premium Nuts & Honey | ${SITE_NAME}`
  }

  if (product.category === 'Beverage') {
    return `${product.name} | Tea & Coffee | ${SITE_NAME}`
  }

  if (product.category === 'Coconut Oil') {
    return `${product.name} | Kerala Coconut Oil | ${SITE_NAME}`
  }

  return `${product.name} | ${SITE_NAME}`
}

function createProductDescription(product) {
  const sourceText =
    product.shortDescription ||
    product.shortDescriptionForHomePage ||
    product.description ||
    `Learn more about ${product.name} from Vanya Eco Products.`

  const firstParagraph = cleanText(sourceText).split(/\n\n/)[0]

  const description = `${firstParagraph} Available directly from Vanya Eco Products.`

  return shortenText(description)
}

export function productSeo(product) {
  if (!product) {
    return {
      title: SITE_NAME,
      description:
        'Explore spices, masalas, tea, coffee, coconut oils, nuts and honey from Vanya Eco Products.',
    }
  }

  const override = seoOverrides[product.slug]

  if (override) {
    return override
  }

  return {
    title: createProductTitle(product),
    description: createProductDescription(product),
  }
}