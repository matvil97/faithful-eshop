const P = "/products";

export const NAME_OVERRIDES: Record<number, string> = {
  439033673: "Tshirt oversize Faithful",
  439033624: "Hoodie Faithful King of Kings",
  445115732: "T-shirt Faithful Women Edition",
};

export function getLocalName(productId: number): string | null {
  return NAME_OVERRIDES[productId] ?? null;
}

export const LOCAL_IMAGES: Record<number, Record<string, string[]>> = {
  // "Bob Faithful edition summer" — ID Printful 441875248
  441875248: {
    Black: [
      `${P}/bucket-hat-black-front-6a3ba0d2d75f7.png`,
      `${P}/bucket-hat-black-front-6a3ba0d2d7a04.png`,
      `${P}/bucket-hat-black-front-6a3ba0d2d7c64.png`,
    ],
    Navy: [
      `${P}/bucket-hat-navy-front-6a3ba0d2d77c1.png`,
      `${P}/bucket-hat-navy-front-6a3ba0d2d7aa5.png`,
      `${P}/bucket-hat-navy-front-6a3ba0d2d7d05.png`,
    ],
    Grey: [
      `${P}/bucket-hat-grey-front-6a3ba0d2d7750.png`,
      `${P}/bucket-hat-grey-front-6a3ba0d2d7a4d.png`,
      `${P}/bucket-hat-grey-front-6a3ba0d2d7ca9.png`,
    ],
    Khaki: [
      `${P}/bucket-hat-khaki-front-6a3ba0d2d7791.png`,
      `${P}/bucket-hat-khaki-front-6a3ba0d2d7a7b.png`,
      `${P}/bucket-hat-khaki-front-6a3ba0d2d7cd8.png`,
    ],
    White: [
      `${P}/bucket-hat-white-front-6a3ba0d2d77f8.png`,
      `${P}/bucket-hat-white-front-6a3ba0d2d7ad0.png`,
      `${P}/bucket-hat-white-front-6a3ba0d2d7d31.png`,
    ],
  },


  // "Tshirt Faithful" (staple) — ID Printful 439033692
  439033692: {
    "Black Heather": [
      `${P}/tshirt-black-heather-model-front-1.png`,
      `${P}/tshirt-black-heather-model-front-2.png`,
      `${P}/tshirt-black-heather-mockup-front.png`,
      `${P}/tshirt-black-heather-mockup-back.png`,
      `${P}/tshirt-black-heather-model-back-3.png`,
      `${P}/tshirt-black-heather-mockup-front-back.png`,
    ],
    Ash: [
      `${P}/unisex-staple-t-shirt-ash-right-front-6a2d826ba16b2.png`,
      `${P}/unisex-staple-t-shirt-ash-right-front-6a2d826c013d4.png`,
      `${P}/unisex-staple-t-shirt-ash-right-front-6a2d826e689db.png`,
      `${P}/unisex-staple-t-shirt-ash-back-6a2d826d369fe.png`,
    ],
    "Heather Ice Blue": [
      `${P}/tshirt-ice-blue-model-front-1.png`,
      `${P}/tshirt-ice-blue-model-front-2.png`,
      `${P}/tshirt-ice-blue-mockup-front-back.png`,
      `${P}/tshirt-ice-blue-model-back-1.png`,
      `${P}/tshirt-ice-blue-model-back-2.png`,
    ],
    "Light Blue": [
      `${P}/tshirt-light-blue-model-front-1.png`,
      `${P}/tshirt-light-blue-mockup-front.png`,
      `${P}/tshirt-light-blue-model-front-2.png`,
      `${P}/tshirt-light-blue-model-back-1.png`,
      `${P}/tshirt-light-blue-model-back-2.png`,
      `${P}/tshirt-light-blue-model-back-3.png`,
      `${P}/tshirt-light-blue-model-back-4.png`,
    ],
  },

  // "Casquette Faithful" — ID Printful 439140231
  439140231: {
    Black: [
      `${P}/snapback-black-mockup-front.png`,
      `${P}/snapback-black-mockup-left-front.png`,
      `${P}/snapback-black-mockup-right-front.png`,
      `${P}/snapback-black-mockup-left-side.png`,
      `${P}/snapback-black-mockup-right-side.png`,
      `${P}/snapback-black-mockup-back.png`,
    ],
    White: [
      `${P}/snapback-white-mockup-front.png`,
      `${P}/snapback-white-mockup-left-front.png`,
      `${P}/snapback-white-mockup-right-front.png`,
      `${P}/snapback-white-mockup-left-side.png`,
      `${P}/snapback-white-mockup-right-side.png`,
      `${P}/snapback-white-mockup-back.png`,
    ],
  },

  // "Hoodie Faith" — ID Printful 439033624
  439033624: {
    Black: [
      `${P}/unisex-premium-pullover-hoodie-black-front-6a2e98e2a8a44.png`,
      `${P}/unisex-premium-pullover-hoodie-black-front-6a2e98e2b1e2e.png`,
      `${P}/unisex-premium-pullover-hoodie-black-back-6a2e98e2c7f9a.png`,
      `${P}/unisex-premium-pullover-hoodie-black-back-6a2e98e2ca588.png`,
      `${P}/unisex-premium-pullover-hoodie-black-back-6a2e98e2d40ae.png`,
      `${P}/unisex-premium-pullover-hoodie-black-back-6a2e98e2d5ff7.png`,
    ],
    "Carolina Blue": [
      `${P}/unisex-premium-pullover-hoodie-carolina-blue-front-6a2e98e31074b.png`,
      `${P}/unisex-premium-pullover-hoodie-carolina-blue-front-6a2e98e3bffdd.png`,
      `${P}/unisex-premium-pullover-hoodie-carolina-blue-front-6a2e98e3c9173.png`,
      `${P}/unisex-premium-pullover-hoodie-carolina-blue-back-6a2e98e33ec45.png`,
      `${P}/unisex-premium-pullover-hoodie-carolina-blue-back-6a2e98e345b87.png`,
      `${P}/unisex-premium-pullover-hoodie-carolina-blue-back-6a2e98e365a8c.png`,
    ],
    White: [
      `${P}/unisex-premium-pullover-hoodie-white-front-6a2e98e3dd797.png`,
      `${P}/unisex-premium-pullover-hoodie-white-front-6a2e98e402675.png`,
      `${P}/unisex-premium-pullover-hoodie-white-front-6a2e98e551bd1.png`,
      `${P}/unisex-premium-pullover-hoodie-white-back-6a2e98e4b0d7b.png`,
      `${P}/unisex-premium-pullover-hoodie-white-back-6a2e98e4c1bc2.png`,
      `${P}/unisex-premium-pullover-hoodie-white-back-6a2e98e4d0587.png`,
    ],
  },

  // "Tshirt oversized Faithful" — ID Printful 439033673
  439033673: {
    Black: [
      `${P}/unisex-organic-oversized-high-neck-blaster-2.0-t-shirt-black-back-6a4c44c9d7d0a.png`,
      `${P}/unisex-organic-oversized-high-neck-blaster-2.0-t-shirt-black-front-2-6a4c44c9d9200.png`,
      `${P}/unisex-organic-oversized-high-neck-blaster-2.0-t-shirt-black-front-6a4c44c9d76bf.png`,
    ],
    Stone: [
      `${P}/unisex-organic-oversized-high-neck-blaster-2.0-t-shirt-stone-back-6a4c44c9d7d8d.png`,
      `${P}/unisex-organic-oversized-high-neck-blaster-2.0-t-shirt-stone-front-6a4c44c9d87ee.png`,
      `${P}/unisex-organic-oversized-high-neck-blaster-2.0-t-shirt-stone-front-2-6a4c44c9d9272.png`,
    ],
    White: [
      `${P}/unisex-organic-oversized-high-neck-blaster-2.0-t-shirt-white-back-6a4c44c9d7de4.png`,
      `${P}/unisex-organic-oversized-high-neck-blaster-2.0-t-shirt-white-front-2-6a4c44c9d92c4.png`,
      `${P}/unisex-organic-oversized-high-neck-blaster-2.0-t-shirt-white-front-6a4c44c9d787e.png`,
    ],
  },

  // "Little Faithful — Jesus Loves Me" (body bébé) — ID Printful 445132020
  445132020: {
    Black: [
      `${P}/baby-jersey-bodysuit-black-front-6a4c644b9b1a2.png`,
      `${P}/baby-jersey-bodysuit-black-back-6a4c644b9b65d.png`,
    ],
    Pink: [
      `${P}/baby-jersey-bodysuit-pink-front-6a4c644b9b1cd.png`,
      `${P}/baby-jersey-bodysuit-pink-back-6a4c644b9b685.png`,
    ],
    Ash: [
      `${P}/baby-jersey-bodysuit-ash-front-6a4c644b9b15a.png`,
      `${P}/baby-jersey-bodysuit-ash-back-6a4c644b9b621.png`,
    ],
    White: [
      `${P}/baby-jersey-bodysuit-white-front-6a4c644b9b1f4.png`,
      `${P}/baby-jersey-bodysuit-white-back-6a4c644b9b6ab.png`,
    ],
  },

  // "Coque Iphone noir Faithful" — ID Printful 441892429 (une image par modèle d'iPhone)
  441892429: {
    "iPhone 11": [`${P}/clear-case-for-iphone-iphone-11-case-on-phone-6a4c558e62a78.png`],
    "iPhone 11 Pro": [`${P}/clear-case-for-iphone-iphone-11-pro-case-on-phone-6a4c558e6325c.png`],
    "iPhone 11 Pro Max": [`${P}/clear-case-for-iphone-iphone-11-pro-max-case-on-phone-6a4c558e62e57.png`],
    "iPhone 12": [`${P}/clear-case-for-iphone-iphone-12-case-on-phone-6a4c558e63e29.png`],
    "iPhone 12 mini": [`${P}/clear-case-for-iphone-iphone-12-mini-case-on-phone-6a4c558e63a37.png`],
    "iPhone 12 Pro": [`${P}/clear-case-for-iphone-iphone-12-pro-case-on-phone-6a4c558e645fb.png`],
    "iPhone 12 Pro Max": [`${P}/clear-case-for-iphone-iphone-12-pro-max-case-on-phone-6a4c558e64228.png`],
    "iPhone 13": [`${P}/clear-case-for-iphone-iphone-13-case-on-phone-6a4c558e64de5.png`],
    "iPhone 13 mini": [`${P}/clear-case-for-iphone-iphone-13-mini-case-on-phone-6a4c558e649f8.png`],
    "iPhone 13 Pro": [`${P}/clear-case-for-iphone-iphone-13-pro-case-on-phone-6a4c558e65212.png`],
    "iPhone 13 Pro Max": [`${P}/clear-case-for-iphone-iphone-13-pro-max-case-on-phone-6a4c558e655de.png`],
    "iPhone 14": [`${P}/clear-case-for-iphone-iphone-14-case-on-phone-6a4c558e659d2.png`],
    "iPhone 14 Plus": [`${P}/clear-case-for-iphone-iphone-14-plus-case-on-phone-6a4c558e6618b.png`],
    "iPhone 14 Pro": [`${P}/clear-case-for-iphone-iphone-14-pro-case-on-phone-6a4c558e65daa.png`],
    "iPhone 14 Pro Max": [`${P}/clear-case-for-iphone-iphone-14-pro-max-case-on-phone-6a4c558e665a1.png`],
    "iPhone 15": [`${P}/clear-case-for-iphone-iphone-15-case-on-phone-6a4c558e66984.png`],
    "iPhone 15 Plus": [`${P}/clear-case-for-iphone-iphone-15-plus-case-on-phone-6a4c558e66d43.png`],
    "iPhone 15 Pro": [`${P}/clear-case-for-iphone-iphone-15-pro-case-on-phone-6a4c558e6714f.png`],
    "iPhone 15 Pro Max": [`${P}/clear-case-for-iphone-iphone-15-pro-max-case-on-phone-6a4c558e67556.png`],
    "iPhone 16": [`${P}/clear-case-for-iphone-iphone-16-case-on-phone-6a4c558e6796f.png`],
    "iPhone 16 Plus": [`${P}/clear-case-for-iphone-iphone-16-plus-case-on-phone-6a4c558e67dd4.png`],
    "iPhone 16 Pro": [`${P}/clear-case-for-iphone-iphone-16-pro-case-on-phone-6a4c558e6822a.png`],
    "iPhone 16 Pro Max": [`${P}/clear-case-for-iphone-iphone-16-pro-max-case-on-phone-6a4c558e68694.png`],
    "iPhone 17": [`${P}/clear-case-for-iphone-iphone-17-case-on-phone-6a4c558e68a68.png`],
    "iPhone 17 Air": [`${P}/clear-case-for-iphone-iphone-17-air-case-on-phone-6a4c558e68e51.png`],
    "iPhone 17 Pro": [`${P}/clear-case-for-iphone-iphone-17-pro-case-on-phone-6a4c558e692a8.png`],
    "iPhone 17 Pro Max": [`${P}/clear-case-for-iphone-iphone-17-pro-max-case-on-phone-6a4c558e69759.png`],
    "iPhone 7/8": [`${P}/clear-case-for-iphone-iphone-7-8-case-on-phone-6a4c558e6172d.png`],
    "iPhone SE": [`${P}/clear-case-for-iphone-iphone-se-case-on-phone-6a4c558e63660.png`],
    "iPhone X/XS": [`${P}/clear-case-for-iphone-iphone-x-xs-case-on-phone-6a4c558e61f46.png`],
    "iPhone XR": [`${P}/clear-case-for-iphone-iphone-xr-case-on-phone-6a4c558e622ce.png`],
  },

  // "Mug Faithful" — ID Printful 439032232
  439032232: {
    "Mug Faithful": [
      `${P}/travel-mug-with-a-handle-white-40-oz-front-6a51145d2677e.png`,
      `${P}/travel-mug-with-a-handle-white-40-oz-left-6a51145d2696e.png`,
      `${P}/travel-mug-with-a-handle-white-40-oz-right-6a51145d26b4a.png`,
      `${P}/travel-mug-with-a-handle-white-25-oz-front-6a51145d2604a.png`,
      `${P}/travel-mug-with-a-handle-white-25-oz-left-6a51145d26388.png`,
      `${P}/travel-mug-with-a-handle-white-25-oz-right-6a51145d26589.png`,
    ],
  },

  // "T-shirt FAITHFUL women edition" — ID Printful 445115732
  445115732: {
    "Vintage White": [
      `${P}/unisex-oversized-garment-dyed-t-shirt-vintage-white-front-6a510ce70591b.png`,
      `${P}/unisex-oversized-garment-dyed-t-shirt-vintage-white-back-6a510ce70604b.png`,
      `${P}/unisex-oversized-garment-dyed-t-shirt-vintage-white-left-front-6a510ce706517.png`,
    ],
    "Washed Black": [
      `${P}/unisex-oversized-garment-dyed-t-shirt-washed-black-front-6a510ce705b94.png`,
      `${P}/unisex-oversized-garment-dyed-t-shirt-washed-black-back-6a510ce7060b5.png`,
      `${P}/unisex-oversized-garment-dyed-t-shirt-washed-black-left-front-6a510ce706583.png`,
    ],
    "Washed Charcoal": [
      `${P}/unisex-oversized-garment-dyed-t-shirt-washed-charcoal-front-6a510ce705bf8.png`,
      `${P}/unisex-oversized-garment-dyed-t-shirt-washed-charcoal-back-6a510ce706108.png`,
      `${P}/unisex-oversized-garment-dyed-t-shirt-washed-charcoal-left-front-6a510ce7065d4.png`,
    ],
  },
};

export function getLocalImages(productId: number, colorName: string): string[] | null {
  return LOCAL_IMAGES[productId]?.[colorName] ?? null;
}

const DEFAULT_COLOR: Record<number, string> = {
  439033624: "White",
  441875248: "White",
  439033673: "White",
};

export function getDefaultColor(productId: number): string | null {
  return DEFAULT_COLOR[productId] ?? null;
}
