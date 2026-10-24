const dryStorage =
  'Keep the pack tightly closed in a cool, dry place away from direct sunlight, moisture and strong odours. Always use a clean, dry spoon.'

const nutStorage =
  'Keep tightly closed in a cool, dry place away from sunlight, heat and moisture. Refrigeration after opening may help maintain freshness in warm conditions.'

const beverageStorage =
  'Keep the pack tightly closed in a cool, dry place away from sunlight, heat, moisture and strong odours. Always use a clean, dry spoon.'

const oilStorage =
  'Store tightly closed in a cool, dry place away from direct sunlight and heat. Natural clouding or solidification at lower temperatures is normal and does not affect quality.'

const packLabelNote =
  'Refer to the current pack label for the final ingredient and allergen declaration.'

const ownMillNote =
  'Selected ingredients are blended and milled by Vanya Eco Products in our own facility.'

function createInformation({
  ingredients,
  ingredientNote,
  verificationRequired = false,
  usageInfo,
  benefits,
  howToUse,
  storage = dryStorage,
  allergenInfo = packLabelNote,
}) {
  return {
    ingredients: {
      items: ingredients,
      note: ingredientNote,
      verificationRequired,
    },
    usageInfo,
    benefits,
    howToUse,
    storage,
    allergenInfo,
  }
}

export const productInformation = {
  'turmeric-powder': createInformation({
    ingredients: ['Turmeric'],
    ingredientNote:
      'A single-ingredient ground spice.',
    usageInfo:
      'An everyday ground spice for curries, lentils, rice dishes, marinades, pickles and selected traditional beverages.',
    benefits: [
      'Adds a warm earthy flavour',
      'Provides a naturally golden-yellow colour',
      'Suitable for a wide range of everyday recipes',
    ],
    howToUse: [
      'Add a small quantity while preparing the curry or masala base.',
      'Cook thoroughly with the other ingredients.',
      'Adjust according to the colour and flavour required.',
    ],
  }),

  'chilli-powder': createInformation({
    ingredients: ['Dried chilli'],
    ingredientNote:
      'Ground from selected dried chillies.',
    usageInfo:
      'Suitable for curries, gravies, marinades, stir-fries, sauces and spice blends requiring direct chilli heat.',
    benefits: [
      'Adds direct chilli heat',
      'Contributes a strong red tone',
      'Allows easy adjustment of the spice level',
    ],
    howToUse: [
      'Begin with a small quantity.',
      'Add while cooking the masala base or preparing a marinade.',
      'Increase gradually according to your preferred heat level.',
    ],
  }),

  'kashmiri-chili-powder': createInformation({
    ingredients: ['Kashmiri chilli'],
    ingredientNote:
      'Ground from selected Kashmiri chillies.',
    usageInfo:
      'Suitable for curries, tandoori marinades, gravies and sauces where rich colour and comparatively gentle warmth are preferred.',
    benefits: [
      'Adds a vivid red colour',
      'Offers comparatively gentle chilli warmth',
      'Suitable for marinades and colourful gravies',
    ],
    howToUse: [
      'Add to the masala base, marinade or sauce.',
      'Mix thoroughly to distribute the colour evenly.',
      'Adjust according to the colour and heat required.',
    ],
  }),

  'pepper-powder': createInformation({
    ingredients: ['Black pepper'],
    ingredientNote:
      'Ground from selected black pepper.',
    usageInfo:
      'A versatile seasoning for soups, eggs, salads, curries, marinades, roasted vegetables and table use.',
    benefits: [
      'Adds clean pepper warmth',
      'Provides a bold woody aroma',
      'Works during cooking or as a finishing seasoning',
    ],
    howToUse: [
      'Add during cooking for blended pepper flavour.',
      'Sprinkle near the end for a stronger aroma.',
      'Use sparingly at first and adjust according to taste.',
    ],
  }),

  'coriander-powder': createInformation({
    ingredients: ['Coriander seeds'],
    ingredientNote:
      'Ground from selected dried coriander seeds.',
    usageInfo:
      'Suitable for curries, gravies, lentil dishes, vegetables, marinades and homemade masala blends.',
    benefits: [
      'Adds mild earthy depth',
      'Contributes a warm citrus-like aroma',
      'Balances stronger chilli and pepper flavours',
    ],
    howToUse: [
      'Add while cooking the onion, tomato or masala base.',
      'Allow it to cook with the other spices.',
      'Adjust according to the recipe.',
    ],
  }),

  'garam-masala': createInformation({
    ingredients: [
      'Coriander',
      'Cumin',
      'Black pepper',
      'Fennel',
      'Cinnamon',
      'Cloves',
      'Cardamom',
    ],
    ingredientNote: ownMillNote,
    verificationRequired: true,
    usageInfo:
      'A warming finishing blend for curries, gravies, lentils, rice dishes and vegetable preparations.',
    benefits: [
      'Adds layered warm-spice aroma',
      'Combines several complementary spices',
      'Useful as a finishing seasoning',
    ],
    howToUse: [
      'Add a small quantity near the final stage of cooking.',
      'Mix well and simmer briefly.',
      'Use lightly so the blend does not dominate the dish.',
    ],
  }),

  'chicken-masala': createInformation({
    ingredients: [
      'Coriander',
      'Chilli',
      'Turmeric',
      'Black pepper',
      'Cumin',
      'Fennel',
      'Cinnamon',
      'Cloves',
      'Cardamom',
    ],
    ingredientNote: ownMillNote,
    verificationRequired: true,
    usageInfo:
      'Prepared for chicken curry, chicken roast, grills, marinades, stir-fries and dry chicken preparations.',
    benefits: [
      'Provides balanced seasoning for chicken',
      'Combines savoury and warming spice notes',
      'Reduces the need to measure several spices',
    ],
    howToUse: [
      'Mix with chicken, salt and preferred wet ingredients for marination.',
      'Add more while preparing the curry or roast base if required.',
      'Cook thoroughly and adjust according to taste.',
    ],
  }),

  'biriyani-masala': createInformation({
    ingredients: [
      'Coriander',
      'Cumin',
      'Fennel',
      'Black pepper',
      'Cinnamon',
      'Cloves',
      'Cardamom',
      'Star anise',
      'Bay leaf',
      'Mace',
      'Nutmeg',
    ],
    ingredientNote: ownMillNote,
    verificationRequired: true,
    usageInfo:
      'A fragrant blend for chicken, mutton, vegetable and egg biriyani, pulao and seasoned rice dishes.',
    benefits: [
      'Adds a full aromatic spice profile',
      'Suitable for several biriyani styles',
      'Creates consistent flavour across rice and masala layers',
    ],
    howToUse: [
      'Add while preparing the meat or vegetable masala.',
      'Layer the prepared masala with cooked rice.',
      'Adjust according to the quantity of rice.',
    ],
  }),

  'sambar-powder': createInformation({
    ingredients: [
      'Coriander',
      'Chilli',
      'Cumin',
      'Fenugreek',
      'Black pepper',
      'Turmeric',
      'Asafoetida',
    ],
    ingredientNote: ownMillNote,
    verificationRequired: true,
    usageInfo:
      'Prepared for sambar, lentil curries, vegetable gravies and selected South Indian dishes.',
    benefits: [
      'Adds a roasted savoury profile',
      'Complements lentils, tamarind and vegetables',
      'Provides convenient everyday seasoning',
    ],
    howToUse: [
      'Cook the lentils and vegetables.',
      'Add the powder during the simmering stage.',
      'Boil sufficiently and adjust salt, sourness and spice.',
    ],
    allergenInfo:
      'The draft list includes asafoetida. Confirm its carrier ingredients and allergen declaration against the pack label.',
  }),

  'rasam-powder': createInformation({
    ingredients: [
      'Coriander',
      'Cumin',
      'Black pepper',
      'Chilli',
      'Fenugreek',
      'Turmeric',
      'Asafoetida',
    ],
    ingredientNote: ownMillNote,
    verificationRequired: true,
    usageInfo:
      'Suitable for tomato rasam, pepper rasam, tamarind gravies and lightly seasoned lentil broths.',
    benefits: [
      'Adds peppery aromatic character',
      'Balances tangy rasam preparations',
      'Provides convenient seasoning for light gravies',
    ],
    howToUse: [
      'Prepare the tomato, tamarind or lentil base.',
      'Add the powder while the rasam is simmering.',
      'Finish with your preferred tempering.',
    ],
    allergenInfo:
      'The draft list includes asafoetida. Confirm its carrier ingredients and allergen declaration against the pack label.',
  }),

  'egg-masala': createInformation({
    ingredients: [
      'Coriander',
      'Chilli',
      'Turmeric',
      'Cumin',
      'Black pepper',
      'Fennel',
      'Cinnamon',
      'Cloves',
    ],
    ingredientNote: ownMillNote,
    verificationRequired: true,
    usageInfo:
      'A savoury blend for egg curry, egg roast, scrambled eggs, omelettes and dry egg preparations.',
    benefits: [
      'Complements the mild richness of eggs',
      'Adds balanced savoury warmth',
      'Works across curry, roast and quick recipes',
    ],
    howToUse: [
      'Prepare the onion and tomato base.',
      'Add the masala and cook until aromatic.',
      'Add the eggs and coat them evenly.',
    ],
    allergenInfo:
      'Confirm the masala declaration against the pack label. Prepared dishes contain egg.',
  }),

  'fish-masala': createInformation({
    ingredients: [
      'Coriander',
      'Chilli',
      'Turmeric',
      'Black pepper',
      'Fenugreek',
      'Cumin',
      'Fennel',
    ],
    ingredientNote: ownMillNote,
    verificationRequired: true,
    usageInfo:
      'Designed for fish curry, fish fry, seafood marinades, grilled fish and pan-fried preparations.',
    benefits: [
      'Adds balanced heat and savoury aroma',
      'Suitable for curry and dry preparations',
      'Provides consistent seasoning for seafood recipes',
    ],
    howToUse: [
      'Mix with salt and the wet ingredients required by the recipe.',
      'Coat the fish evenly and marinate where appropriate.',
      'Cook thoroughly using your preferred method.',
    ],
    allergenInfo:
      'Confirm the masala declaration against the pack label. Prepared dishes contain fish or shellfish depending on the recipe.',
  }),

  'pickle-powder': createInformation({
    ingredients: [
      'Chilli',
      'Mustard',
      'Fenugreek',
      'Turmeric',
      'Asafoetida',
      'Salt',
    ],
    ingredientNote: ownMillNote,
    verificationRequired: true,
    usageInfo:
      'A bold seasoning blend for mango, lemon, garlic, chilli, vegetable and other homemade pickles.',
    benefits: [
      'Adds a bold pickle spice profile',
      'Combines key pickle spices conveniently',
      'Suitable for several homemade pickle styles',
    ],
    howToUse: [
      'Prepare the fruit or vegetable according to the recipe.',
      'Add the powder during seasoning and mix evenly.',
      'Follow the recipe carefully for oil, salt, acidity and storage.',
    ],
    allergenInfo:
      'The draft list contains mustard and asafoetida. Confirm the complete declaration against the current pack label.',
  }),

  'raw-pepper': createInformation({
    ingredients: ['Whole black pepper'],
    ingredientNote:
      'A single-ingredient whole spice.',
    usageInfo:
      'Suitable for pepper mills, curries, marinades, soups, pickles, spice blends and freshly crushed seasoning.',
    benefits: [
      'Retains aroma until crushed',
      'Allows coarse or fine grinding',
      'Works across savoury recipes and spice blends',
    ],
    howToUse: [
      'Use whole in slow-cooked dishes or pickles.',
      'Crush or grind shortly before use.',
      'Adjust according to the required pepper warmth.',
    ],
  }),

  cardamom: createInformation({
    ingredients: ['Whole cardamom'],
    ingredientNote:
      'Selected whole cardamom pods.',
    usageInfo:
      'Suitable for tea, coffee, desserts, biriyani, festive dishes and whole-spice blends.',
    benefits: [
      'Adds a sweet floral aroma',
      'Works in sweet and savoury recipes',
      'Can be used whole, crushed or ground',
    ],
    howToUse: [
      'Lightly crush the pod to release its aroma.',
      'Add during brewing or cooking.',
      'Remove whole pods before serving where appropriate.',
    ],
  }),

  'malabar-tamarind': createInformation({
    ingredients: ['Dried Malabar tamarind'],
    ingredientNote:
      'A single-ingredient dried fruit product.',
    usageInfo:
      'Traditionally used in Kerala fish curry, seafood dishes and regional gravies requiring deep sourness.',
    benefits: [
      'Adds distinctive smoky sourness',
      'Provides acidity without sharp citrus flavour',
      'Especially suited to regional Kerala recipes',
    ],
    howToUse: [
      'Rinse the required pieces before use.',
      'Soak briefly in warm water if required.',
      'Add gradually because sourness can vary.',
    ],
  }),

  cloves: createInformation({
    ingredients: ['Whole cloves'],
    ingredientNote:
      'A single-ingredient whole spice.',
    usageInfo:
      'Suitable for rice dishes, curries, tea, baked foods, pickles and whole-spice blends.',
    benefits: [
      'Adds an intense sweet-spicy fragrance',
      'A small quantity provides noticeable flavour',
      'Works in sweet and savoury preparations',
    ],
    howToUse: [
      'Use whole while tempering, simmering or brewing.',
      'Remove before serving where appropriate.',
      'Use sparingly because the flavour is intense.',
    ],
  }),

  cinnamon: createInformation({
    ingredients: ['Cinnamon'],
    ingredientNote:
      'A single-ingredient whole spice.',
    usageInfo:
      'Suitable for tea, coffee, desserts, baking, rice dishes, curries and whole-spice blends.',
    benefits: [
      'Adds gentle sweetness and woody aroma',
      'Works in beverages, desserts and savoury dishes',
      'Can be infused whole for controlled flavour',
    ],
    howToUse: [
      'Add a small piece during cooking or brewing.',
      'Allow it to infuse until the desired aroma develops.',
      'Remove before serving where appropriate.',
    ],
  }),

  'dry-ginger': createInformation({
    ingredients: ['Dried ginger'],
    ingredientNote:
      'A single-ingredient dried spice.',
    usageInfo:
      'Suitable for tea, coffee, baking, spice blends, traditional recipes and savoury cooking.',
    benefits: [
      'Adds concentrated ginger warmth',
      'Convenient when dry ginger is required',
      'Suitable for beverages and cooking',
    ],
    howToUse: [
      'Crush, grate or grind according to the recipe.',
      'Add a small amount during brewing or cooking.',
      'Increase gradually because the flavour is concentrated.',
    ],
  }),

  almond: createInformation({
    ingredients: ['Almonds'],
    ingredientNote:
      'No Wayanad-origin claim is made for this product.',
    usageInfo:
      'Suitable for direct snacking, breakfast bowls, desserts, baking, nut mixes and savoury preparations.',
    benefits: [
      'Provides a firm natural crunch',
      'Works as a snack or recipe ingredient',
      'Easy to add to breakfast and desserts',
    ],
    howToUse: [
      'Consume directly or add to your preferred recipe.',
      'Slice, chop, soak or roast according to preference.',
      'Use only fresh, properly stored nuts.',
    ],
    storage: nutStorage,
    allergenInfo:
      'Contains almonds. Almonds are tree nuts and can cause serious allergic reactions in sensitive individuals.',
  }),

  cashew: createInformation({
    ingredients: ['Cashews'],
    ingredientNote:
      'No Wayanad-origin claim is made for this product.',
    usageInfo:
      'Suitable for direct snacking, desserts, curries, baking, garnishing and mixed-nut preparations.',
    benefits: [
      'Offers creamy taste and crisp bite',
      'Suitable for sweet and savoury recipes',
      'Convenient for snacking and garnishing',
    ],
    howToUse: [
      'Consume directly or use in your preferred recipe.',
      'Roast, fry, grind or chop according to the preparation.',
      'Check freshness before serving.',
    ],
    storage: nutStorage,
    allergenInfo:
      'Contains cashews. Cashews are tree nuts and can cause serious allergic reactions in sensitive individuals.',
  }),

  'forest-honey': createInformation({
    ingredients: ['Forest honey'],
    ingredientNote:
      'Natural colour, aroma and flavour may vary between collections.',
    usageInfo:
      'Suitable for drizzling, beverages, breakfast foods, desserts and everyday sweetening.',
    benefits: [
      'Offers natural sweetness',
      'Works in hot and cold preparations',
      'Has natural variation between collections',
    ],
    howToUse: [
      'Use as a topping, sweetener or recipe ingredient.',
      'Stir into warm beverages according to preference.',
      'Natural crystallisation may occur over time.',
    ],
    storage:
      'Store tightly closed in a cool, dry place away from direct sunlight. Do not refrigerate unless the pack recommends it.',
    allergenInfo:
      'Honey is not suitable for infants under 12 months. People sensitive to honey or bee products should seek appropriate advice.',
  }),

  'black-pepper-cashews': createInformation({
    ingredients: [
      'Cashews',
      'Black pepper',
      'Salt',
      'Edible oil',
      'Selected seasoning spices',
    ],
    ingredientNote:
      'Seasoned and packed as a ready-to-eat savoury snack.',
    verificationRequired: true,
    usageInfo:
      'A ready-to-eat snack for tea time, travel, serving bowls, gifting and savoury snack platters.',
    benefits: [
      'Combines cashew flavour with pepper warmth',
      'Ready to serve without preparation',
      'Suitable for sharing, travel and gifting',
    ],
    howToUse: [
      'Open and serve directly.',
      'Use clean, dry hands or serving utensils.',
      'Close the pack immediately after use.',
    ],
    storage: nutStorage,
    allergenInfo:
      'Contains cashews. Confirm the edible oil, seasoning and complete allergen declaration against the pack label.',
  }),

  'wayanad-tea': createInformation({
    ingredients: ['Tea'],
    ingredientNote:
      'Tea selected for a bright, full-bodied cup.',
    usageInfo:
      'Suitable for milk tea, black tea, spiced tea and hot or iced preparations.',
    benefits: [
      'Offers a brisk everyday tea character',
      'Can be prepared with or without milk',
      'Suitable for hot and chilled tea',
    ],
    howToUse: [
      'Bring fresh water to the required temperature.',
      'Add tea and brew according to preferred strength.',
      'Strain and serve plain or with milk.',
    ],
    storage: beverageStorage,
  }),

  'wayanad-coffee': createInformation({
    ingredients: ['Roasted coffee'],
    ingredientNote:
      'Confirm against the pack whether the current blend contains chicory.',
    verificationRequired: true,
    usageInfo:
      'Suitable for filter coffee, brewed coffee, milk coffee and other preferred preparations.',
    benefits: [
      'Provides rich roasted aroma',
      'Suitable for black or milk coffee',
      'Can be adjusted to preferred strength',
    ],
    howToUse: [
      'Use the quantity suitable for your brewing method.',
      'Brew with fresh water.',
      'Serve plain or add milk and sweetener.',
    ],
    storage: beverageStorage,
  }),

  'cardamom-tea': createInformation({
    ingredients: ['Tea', 'Cardamom'],
    ingredientNote:
      'A tea blend with aromatic cardamom.',
    verificationRequired: true,
    usageInfo:
      'Suitable for milk tea, black tea and lightly sweetened hot infusions.',
    benefits: [
      'Combines brisk tea with floral aroma',
      'Convenient for flavoured tea',
      'Can be served with or without milk',
    ],
    howToUse: [
      'Add the blend to hot water.',
      'Brew briefly and add milk if desired.',
      'Strain, sweeten and serve.',
    ],
    storage: beverageStorage,
  }),

  'masala-tea': createInformation({
    ingredients: [
      'Tea',
      'Ginger',
      'Cardamom',
      'Cinnamon',
      'Cloves',
      'Black pepper',
    ],
    ingredientNote:
      'A tea blend prepared with selected aromatic spices.',
    verificationRequired: true,
    usageInfo:
      'Suitable for traditional milk tea, black spiced tea and warming infusions.',
    benefits: [
      'Combines tea and complementary spices',
      'Provides layered warm-spice aroma',
      'Convenient for everyday masala tea',
    ],
    howToUse: [
      'Add the blend to hot water and simmer briefly.',
      'Add milk and sweetener according to preference.',
      'Strain and serve hot.',
    ],
    storage: beverageStorage,
  }),

  'ginger-tea': createInformation({
    ingredients: ['Tea', 'Ginger'],
    ingredientNote:
      'A tea blend with a clear ginger note.',
    verificationRequired: true,
    usageInfo:
      'Suitable for milk tea, black tea and warming hot infusions.',
    benefits: [
      'Combines brisk tea with ginger warmth',
      'Convenient for preparing ginger tea',
      'Can be served plain or with milk',
    ],
    howToUse: [
      'Add the blend to freshly heated water.',
      'Brew and add milk if desired.',
      'Strain, sweeten and serve hot.',
    ],
    storage: beverageStorage,
  }),

  'lemon-tea': createInformation({
    ingredients: [
      'Tea',
      'Lemon ingredient or flavour',
    ],
    ingredientNote:
      'Confirm the exact lemon ingredient or flavour against the current pack.',
    verificationRequired: true,
    usageInfo:
      'Suitable for hot lemon tea, lightly sweetened tea and chilled citrus tea.',
    benefits: [
      'Offers a light citrus-style profile',
      'Suitable for hot or chilled preparation',
      'Provides an alternative to milk tea',
    ],
    howToUse: [
      'Brew with hot water.',
      'Sweeten if desired and serve without milk.',
      'Cool completely before serving as iced tea.',
    ],
    storage: beverageStorage,
  }),

  'green-tea': createInformation({
    ingredients: ['Green tea'],
    ingredientNote:
      'A single-tea infusion unless otherwise stated on the pack.',
    usageInfo:
      'Suitable for a light hot infusion or chilled tea prepared to preferred strength.',
    benefits: [
      'Provides a clean light tea character',
      'Suitable for hot and chilled preparation',
      'Requires only a short brewing time',
    ],
    howToUse: [
      'Heat fresh water.',
      'Add the tea and steep briefly.',
      'Strain and serve plain or lightly sweetened.',
    ],
    storage: beverageStorage,
  }),

  'earl-grey-tea': createInformation({
    ingredients: [
      'Black tea',
      'Bergamot flavour',
    ],
    ingredientNote:
      'Confirm the exact bergamot ingredient or flavour against the current pack.',
    verificationRequired: true,
    usageInfo:
      'Suitable for hot tea served plain, with milk according to preference, or as chilled tea.',
    benefits: [
      'Combines brisk tea with citrus fragrance',
      'Suitable for hot and iced preparation',
      'Offers an alternative to plain black tea',
    ],
    howToUse: [
      'Add the tea to freshly heated water.',
      'Steep to the preferred strength.',
      'Strain and serve according to preference.',
    ],
    storage: beverageStorage,
  }),

  'masala-coffee': createInformation({
    ingredients: [
      'Roasted coffee',
      'Cardamom',
      'Cinnamon',
      'Ginger',
      'Cloves',
    ],
    ingredientNote:
      'A coffee blend prepared with aromatic spices.',
    verificationRequired: true,
    usageInfo:
      'Suitable for warming black coffee or milk coffee prepared to preferred strength.',
    benefits: [
      'Combines roasted coffee with warm spices',
      'Suitable for black or milk coffee',
      'Provides a convenient flavoured option',
    ],
    howToUse: [
      'Use the quantity suitable for your brewing method.',
      'Brew with fresh water.',
      'Add milk and sweetener according to preference.',
    ],
    storage: beverageStorage,
  }),

  'ginger-coffee': createInformation({
    ingredients: [
      'Roasted coffee',
      'Ginger',
    ],
    ingredientNote:
      'A coffee blend with a warm ginger finish.',
    verificationRequired: true,
    usageInfo:
      'Suitable for black coffee, milk coffee and warming hot beverages.',
    benefits: [
      'Combines coffee aroma with ginger warmth',
      'Can be prepared with or without milk',
      'Provides a convenient flavoured option',
    ],
    howToUse: [
      'Use the quantity suitable for your brewing method.',
      'Brew with fresh water.',
      'Serve plain or add milk and sweetener.',
    ],
    storage: beverageStorage,
  }),

  'pure-coconut-oil': createInformation({
    ingredients: ['Coconut oil'],
    ingredientNote:
      'A single-ingredient cooking oil.',
    usageInfo:
      'Suitable for frying, sautéing, tempering, baking and traditional Kerala cooking.',
    benefits: [
      'Offers familiar coconut aroma',
      'Suitable for several cooking methods',
      'Works across traditional and general recipes',
    ],
    howToUse: [
      'Pour the quantity required by the recipe.',
      'Use for frying, sautéing, tempering or baking.',
      'Close the cap properly after use.',
    ],
    storage: oilStorage,
    allergenInfo:
      'Contains coconut. Customers with coconut sensitivity should check the current pack label.',
  }),

  'pure-virgin-coconut-oil-cold-pressed':
    createInformation({
      ingredients: ['Virgin coconut oil'],
      ingredientNote:
        'A single-ingredient cold-pressed coconut oil.',
      usageInfo:
        'Suitable for cooking and other uses permitted by the current product label.',
      benefits: [
        'Offers a gentle fresh-coconut aroma',
        'Produced using a cold-pressing method',
        'Suitable for selected culinary and household uses',
      ],
      howToUse: [
        'Use the quantity required for the intended purpose.',
        'For cooking, add according to the recipe.',
        'For external use, follow the current pack directions.',
      ],
      storage: oilStorage,
      allergenInfo:
        'Contains coconut. Customers with coconut sensitivity should check the current pack label.',
    }),

  'vendha-velichenna-pure-virgin-coconut-oil-hot-pressed':
    createInformation({
      ingredients: ['Coconut oil'],
      ingredientNote:
        'Prepared using Vanya’s traditional hot-process method.',
      usageInfo:
        'Suitable for traditional household applications and uses stated on the current product label.',
      benefits: [
        'Offers a distinctive roasted-coconut aroma',
        'Prepared using a traditional hot-process style',
        'Suitable for uses stated on the current pack',
      ],
      howToUse: [
        'Use only for purposes stated on the pack label.',
        'Take the required quantity using clean, dry utensils.',
        'For external use, patch-test first and stop if irritation occurs.',
      ],
      storage: oilStorage,
      allergenInfo:
        'Contains coconut. For babies, children, sensitive skin or therapeutic use, follow professional advice and pack directions.',
    }),
}

export function getProductInformation(slug) {
  return productInformation[slug] || null
}