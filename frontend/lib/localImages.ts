const P = "/products";

export const NAME_OVERRIDES: Record<number, string> = {
  439033673: "T-shirt oversize Faithful",
  464383614: "Hoodie Faithful Women Edition",
  445115732: "T-shirt Faithful Women Edition",
  464484809: "Bonnet Faithful \"The Lifter\"",
  464815111: "Sweat Faithful Women Edition",
  464868999: "Hoodie Faithful For Men",
};

export function getLocalName(productId: number): string | null {
  return NAME_OVERRIDES[productId] ?? null;
}

export const LOCAL_IMAGES: Record<number, Record<string, string[]>> = {
  // "Hoodie Faithful for men" — ID Printful 464868999
  464868999: {
    Black: [
      `${P}/unisex-premium-pullover-hoodie-black-front-6a998e6447baa.png`,
      `${P}/unisex-premium-pullover-hoodie-black-front-6a998e6448fc8.png`,
      `${P}/unisex-premium-pullover-hoodie-black-front-6a998e6449efb.png`,
      `${P}/unisex-premium-pullover-hoodie-black-front-6a998e6449b2f.png`,
      `${P}/unisex-premium-pullover-hoodie-black-front-6a998e6448c08.png`,
      `${P}/unisex-premium-pullover-hoodie-black-left-front-6a998e644a285.png`,
      `${P}/unisex-premium-pullover-hoodie-black-back-6a998e64480c7.png`,
      `${P}/unisex-premium-pullover-hoodie-black-back-6a998e64493cd.png`,
      `${P}/unisex-premium-pullover-hoodie-black-back-6a998e644a644.png`,
      `${P}/unisex-premium-pullover-hoodie-black-back-6a998e644978d.png`,
      `${P}/unisex-premium-pullover-hoodie-black-left-6a998e644847e.png`,
      `${P}/unisex-premium-pullover-hoodie-black-right-6a998e6448872.png`,
    ],
  },

  // "Sweat Faithful women edition" — ID Printful 464815111
  464815111: {
    Black: [
      `${P}/womens-cropped-hoodie-black-front-6a996b288879c.png`,
      `${P}/womens-cropped-hoodie-black-front-6a996b2887f2f.png`,
      `${P}/womens-cropped-hoodie-black-back-6a996b2888b4d.png`,
      `${P}/womens-cropped-hoodie-black-back-6a996b28883ff.png`,
      `${P}/womens-cropped-hoodie-black-left-6a996b2888edb.png`,
      `${P}/womens-cropped-hoodie-black-right-6a996b2889285.png`,
    ],
    "Military Green": [
      `${P}/womens-cropped-hoodie-military-green-front-6a996b28887dc.png`,
      `${P}/womens-cropped-hoodie-military-green-front-6a996b2888047.png`,
      `${P}/womens-cropped-hoodie-military-green-back-6a996b2888b8c.png`,
      `${P}/womens-cropped-hoodie-military-green-back-6a996b288843f.png`,
      `${P}/womens-cropped-hoodie-military-green-left-6a996b2888f19.png`,
      `${P}/womens-cropped-hoodie-military-green-right-6a996b28892c4.png`,
    ],
    Storm: [
      `${P}/womens-cropped-hoodie-storm-front-6a996b288880b.png`,
      `${P}/womens-cropped-hoodie-storm-front-6a996b2888080.png`,
      `${P}/womens-cropped-hoodie-storm-back-6a996b2888bba.png`,
      `${P}/womens-cropped-hoodie-storm-back-6a996b288846f.png`,
      `${P}/womens-cropped-hoodie-storm-left-6a996b2888f4d.png`,
      `${P}/womens-cropped-hoodie-storm-right-6a996b28892f2.png`,
    ],
  },

  // "Faithful short blanc" — ID Printful 439122177
  439122177: {
    White: [
      `${P}/all-over-print-unisex-athletic-long-shorts-white-front-2-6a996079d10bc.png`,
      `${P}/all-over-print-unisex-athletic-long-shorts-white-front-6a996079d0913.png`,
      `${P}/all-over-print-unisex-athletic-long-shorts-white-front-6a996079d0f8f.png`,
      `${P}/all-over-print-unisex-athletic-long-shorts-white-back-6a996079d0e32.png`,
      `${P}/all-over-print-unisex-athletic-long-shorts-white-back-2-6a996079d1459.png`,
      `${P}/all-over-print-unisex-athletic-long-shorts-white-back-6a996079d133c.png`,
      `${P}/all-over-print-unisex-athletic-long-shorts-white-left-6a996079d0cee.png`,
      `${P}/all-over-print-unisex-athletic-long-shorts-white-right-6a996079d0bc4.png`,
      `${P}/all-over-print-unisex-athletic-long-shorts-white-left-back-6a996079d11e6.png`,
    ],
  },

  // "Bonnet Faithful The Lifter" — ID Printful 464484809
  464484809: {
    Black: [
      `${P}/cuffed-beanie-black-front-6a98c740091ce.png`,
      `${P}/cuffed-beanie-black-front-6a98c740096dc.png`,
    ],
    "Dark Grey": [
      `${P}/cuffed-beanie-dark-grey-front-6a98c740092ba.png`,
      `${P}/cuffed-beanie-dark-grey-front-6a98c74009724.png`,
    ],
    White: [
      `${P}/cuffed-beanie-white-front-6a98c740092e0.png`,
      `${P}/cuffed-beanie-white-front-6a98c7400974b.png`,
    ],
  },

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

  // "Hoodie Faithful women edition" — ID Printful 464383614
  464383614: {
    Black: [
      `${P}/unisex-heavy-blend-hoodie-black-front-6a98a51211a3b.png`,
      `${P}/unisex-heavy-blend-hoodie-black-left-front-6a98a512122eb.png`,
      `${P}/unisex-heavy-blend-hoodie-black-right-front-6a98a51212bf0.png`,
      `${P}/unisex-heavy-blend-hoodie-black-back-6a98a512114b5.png`,
      `${P}/unisex-heavy-blend-hoodie-black-left-6a98a51211e98.png`,
      `${P}/unisex-heavy-blend-hoodie-black-right-6a98a51212732.png`,
    ],
    Charcoal: [
      `${P}/unisex-heavy-blend-hoodie-charcoal-front-6a98a51211a9b.png`,
      `${P}/unisex-heavy-blend-hoodie-charcoal-left-front-6a98a51212329.png`,
      `${P}/unisex-heavy-blend-hoodie-charcoal-right-front-6a98a51212c8f.png`,
      `${P}/unisex-heavy-blend-hoodie-charcoal-back-6a98a512115e3.png`,
      `${P}/unisex-heavy-blend-hoodie-charcoal-left-6a98a51211f01.png`,
      `${P}/unisex-heavy-blend-hoodie-charcoal-right-6a98a5121277f.png`,
    ],
    "Dark Chocolate": [
      `${P}/unisex-heavy-blend-hoodie-dark-chocolate-front-6a98a51211acf.png`,
      `${P}/unisex-heavy-blend-hoodie-dark-chocolate-left-front-6a98a5121235a.png`,
      `${P}/unisex-heavy-blend-hoodie-dark-chocolate-right-front-6a98a51212cc9.png`,
      `${P}/unisex-heavy-blend-hoodie-dark-chocolate-back-6a98a51211620.png`,
      `${P}/unisex-heavy-blend-hoodie-dark-chocolate-left-6a98a51211f37.png`,
      `${P}/unisex-heavy-blend-hoodie-dark-chocolate-right-6a98a512127c2.png`,
    ],
    "Military Green": [
      `${P}/unisex-heavy-blend-hoodie-military-green-front-6a98a51211aff.png`,
      `${P}/unisex-heavy-blend-hoodie-military-green-left-front-6a98a51212388.png`,
      `${P}/unisex-heavy-blend-hoodie-military-green-right-front-6a98a51212cfa.png`,
      `${P}/unisex-heavy-blend-hoodie-military-green-back-6a98a51211653.png`,
      `${P}/unisex-heavy-blend-hoodie-military-green-left-6a98a51211f69.png`,
      `${P}/unisex-heavy-blend-hoodie-military-green-right-6a98a5121280d.png`,
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
  464383614: "Black",
  464484809: "Black",
  464815111: "Black",
  441875248: "White",
  439033673: "White",
};

export function getDefaultColor(productId: number): string | null {
  return DEFAULT_COLOR[productId] ?? null;
}
