export const COMING_SOON: Record<number, string> = {
  439033624: "Septembre 2026",
};

export function getComingSoon(productId: number): string | null {
  return COMING_SOON[productId] ?? null;
}

// Coloris à ne pas proposer à la vente (ex: rendu du logo peu lisible)
export const EXCLUDED_COLORS: Record<number, string[]> = {
  445115732: ["Khaki"],
};

export function isColorExcluded(productId: number, colorName: string): boolean {
  return EXCLUDED_COLORS[productId]?.includes(colorName) ?? false;
}
