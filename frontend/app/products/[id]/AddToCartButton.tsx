"use client";

import { useCart } from "@/context/CartContext";
import { ProductVariant } from "@/lib/api";

interface Props {
  productId: number;
  variant: ProductVariant;
  productName: string;
  thumbnail: string;
}

export default function AddToCartButton({ productId, variant, productName, thumbnail }: Props) {
  const { addItem } = useCart();

  function handleAdd() {
    addItem({
      variantId: variant.id,
      productId,
      name: `${productName} — ${variant.name.split(" / ").slice(-2).join(" / ")}`,
      price: variant.retail_price,
      image: variant.files?.[0]?.preview_url ?? thumbnail,
      quantity: 1,
    });
  }

  return (
    <button
      onClick={handleAdd}
      className="bg-black text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
    >
      Ajouter au panier
    </button>
  );
}
