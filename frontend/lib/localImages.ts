const P = "/products";

export const NAME_OVERRIDES: Record<number, string> = {
  439033673: "Tshirt oversize Faithful pour femme",
  439033624: "Hoodie Faithful King of Kings",
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
    "Casquette Faithful": [
      `${P}/snapback-black-mockup-front.png`,
      `${P}/snapback-black-mockup-left-front.png`,
      `${P}/snapback-black-mockup-right-front.png`,
      `${P}/snapback-black-mockup-left-side.png`,
      `${P}/snapback-black-mockup-right-side.png`,
      `${P}/snapback-black-mockup-back.png`,
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
      `${P}/unisex-organic-oversized-high-neck-blaster-2.0-t-shirt-black-front-2-6a2d7b4f44636.png`,
      `${P}/unisex-organic-oversized-high-neck-blaster-2.0-t-shirt-black-back-6a2d7b4f41b2e.png`,
    ],
    Stone: [
      `${P}/unisex-organic-oversized-high-neck-blaster-2.0-t-shirt-stone-front-2-6a2d7b4f4a795.png`,
      `${P}/unisex-organic-oversized-high-neck-blaster-2.0-t-shirt-stone-back-6a2d7b4f448e1.png`,
    ],
    White: [
      `${P}/unisex-organic-oversized-high-neck-blaster-2.0-t-shirt-white-front-2-6a2d7b4f547ec.png`,
      `${P}/unisex-organic-oversized-high-neck-blaster-2.0-t-shirt-white-back-6a2d7b4f4ad97.png`,
    ],
  },
};

export function getLocalImages(productId: number, colorName: string): string[] | null {
  return LOCAL_IMAGES[productId]?.[colorName] ?? null;
}

const DEFAULT_COLOR: Record<number, string> = {
  439033624: "White",
};

export function getDefaultColor(productId: number): string | null {
  return DEFAULT_COLOR[productId] ?? null;
}
