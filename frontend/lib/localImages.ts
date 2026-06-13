const P = "/products";

export const LOCAL_IMAGES: Record<number, Record<string, string[]>> = {
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
      `${P}/tshirt-ash-model-front-1.png`,
      `${P}/tshirt-ash-model-front-2.png`,
      `${P}/tshirt-ash-model-front-3.png`,
      `${P}/tshirt-ash-mockup-front.png`,
      `${P}/tshirt-ash-mockup-right-front.png`,
      `${P}/tshirt-ash-model-back-1.png`,
      `${P}/tshirt-ash-model-back-2.png`,
      `${P}/tshirt-ash-model-side.png`,
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
      `${P}/hoodie-black-model-front-1.png`,
      `${P}/hoodie-black-model-front-2.png`,
      `${P}/hoodie-black-model-back-1.png`,
    ],
    "Carolina Blue": [
      `${P}/hoodie-carolina-blue-model-front-1.png`,
      `${P}/hoodie-carolina-blue-model-front-2.png`,
      `${P}/hoodie-carolina-blue-model-back-1.png`,
      `${P}/hoodie-carolina-blue-model-back-2.png`,
    ],
    White: [
      `${P}/hoodie-white-model-front-1.png`,
      `${P}/hoodie-white-model-front-2.png`,
      `${P}/hoodie-white-model-back-1.png`,
    ],
  },

  // "Tshirt oversized Faithful" — ID Printful 439033673
  439033673: {
    Black: [
      `${P}/t_shirt2_1face.png`,
      `${P}/t_shirt2_2face.png`,
      `${P}/tshirt1_1back.png`,
      `${P}/tshirt1_2back.png`,
      `${P}/unisex-organic-oversized-high-neck-blaster-2.0-t-shirt-black-back-6a2d7b4f41b2e.png`,
      `${P}/unisex-organic-oversized-high-neck-blaster-2.0-t-shirt-black-left-6a2d7b4f43e51.png`,
    ],
    Stone: [
      `${P}/t_face3_1.png`,
      `${P}/t_face3.png`,
      `${P}/t_back3.png`,
      `${P}/t_back3_1.png`,
      `${P}/unisex-organic-oversized-high-neck-blaster-2.0-t-shirt-stone-back-6a2d7b4f448e1.png`,
    ],
    White: [
      `${P}/t_face4_1.png`,
      `${P}/t_face4.png`,
      `${P}/t_back4.png`,
      `${P}/t_back4_1.png`,
      `${P}/unisex-organic-oversized-high-neck-blaster-2.0-t-shirt-white-back-6a2d7b4f4ad97.png`,
    ],
  },
};

export function getLocalImages(productId: number, colorName: string): string[] | null {
  return LOCAL_IMAGES[productId]?.[colorName] ?? null;
}
