export const COMING_SOON: Record<number, string> = {
  439033624: "Septembre 2026",
};

export function getComingSoon(productId: number): string | null {
  return COMING_SOON[productId] ?? null;
}
