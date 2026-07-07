import { CartItem } from "@/context/CartContext";

// Produits en promo "2ème article à -20%" (tous coloris/tailles confondus)
export const SECOND_ITEM_DISCOUNT_PRODUCTS: Record<number, number> = {
  439033673: 0.2, // Tshirt oversize Faithful
  445132020: 0.2, // Little Faithful — Jesus Loves Me (body bébé)
};

export interface PricedLine {
  variantId: number;
  productId: number;
  name: string;
  image: string;
  unitPrice: number;
  quantity: number;
  discounted: boolean;
}

export interface PromotionResult {
  lines: PricedLine[];
  subtotal: number;
  total: number;
  totalDiscount: number;
}

export function applyPromotions(items: CartItem[]): PromotionResult {
  const lines: PricedLine[] = [];
  let totalDiscount = 0;

  const byProduct = new Map<number, CartItem[]>();
  for (const item of items) {
    const arr = byProduct.get(item.productId) ?? [];
    arr.push(item);
    byProduct.set(item.productId, arr);
  }

  for (const [productId, group] of byProduct) {
    const discountRate = SECOND_ITEM_DISCOUNT_PRODUCTS[productId];

    if (!discountRate) {
      for (const item of group) {
        lines.push({
          variantId: item.variantId,
          productId,
          name: item.name,
          image: item.image,
          unitPrice: parseFloat(item.price),
          quantity: item.quantity,
          discounted: false,
        });
      }
      continue;
    }

    // Éclate chaque item en unités pour répartir la remise sur les moins chères
    const units: { item: CartItem; price: number }[] = [];
    for (const item of group) {
      for (let i = 0; i < item.quantity; i++) {
        units.push({ item, price: parseFloat(item.price) });
      }
    }
    units.sort((a, b) => a.price - b.price);
    const discountedCount = Math.floor(units.length / 2);

    const perVariant = new Map<
      number,
      { item: CartItem; fullQty: number; discQty: number }
    >();
    units.forEach((u, idx) => {
      const agg = perVariant.get(u.item.variantId) ?? { item: u.item, fullQty: 0, discQty: 0 };
      if (idx < discountedCount) agg.discQty += 1;
      else agg.fullQty += 1;
      perVariant.set(u.item.variantId, agg);
    });

    for (const { item, fullQty, discQty } of perVariant.values()) {
      const fullPrice = parseFloat(item.price);
      if (fullQty > 0) {
        lines.push({
          variantId: item.variantId,
          productId,
          name: item.name,
          image: item.image,
          unitPrice: fullPrice,
          quantity: fullQty,
          discounted: false,
        });
      }
      if (discQty > 0) {
        const discPrice = Math.round(fullPrice * (1 - discountRate) * 100) / 100;
        lines.push({
          variantId: item.variantId,
          productId,
          name: `${item.name} (2ème article -20%)`,
          image: item.image,
          unitPrice: discPrice,
          quantity: discQty,
          discounted: true,
        });
        totalDiscount += (fullPrice - discPrice) * discQty;
      }
    }
  }

  const subtotal = items.reduce((sum, i) => sum + parseFloat(i.price) * i.quantity, 0);
  const total = lines.reduce((sum, l) => sum + l.unitPrice * l.quantity, 0);

  return { lines, subtotal, total, totalDiscount };
}
