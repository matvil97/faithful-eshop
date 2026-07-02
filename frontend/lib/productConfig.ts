export const COMING_SOON: Record<number, string> = {
  439033624: "Septembre 2026",
};

export function getComingSoon(productId: number): string | null {
  return COMING_SOON[productId] ?? null;
}

// Produits mis en avant dans l'onglet "Collection Summer"
export const SUMMER_COLLECTION: number[] = [444405946];

export function isSummerCollection(productId: number): boolean {
  return SUMMER_COLLECTION.includes(productId);
}
