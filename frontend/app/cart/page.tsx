"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { useLang } from "@/context/LanguageContext";
import Link from "next/link";
import Image from "next/image";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

export default function CartPage() {
  const { items, removeItem, updateQty, total } = useCart();
  const { t } = useLang();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleCheckout() {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`${API_URL}/api/checkout/session`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: items.map((i) => ({
            name: i.name,
            price: i.price,
            image: i.image,
            quantity: i.quantity,
            variantId: i.variantId,
          })),
        }),
      });
      if (!res.ok) throw new Error("Erreur serveur");
      const { url } = await res.json();
      window.location.href = url;
    } catch {
      setError("Une erreur est survenue. Réessaie.");
      setLoading(false);
    }
  }

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4" style={{ background: "#F7F5F0" }}>
        <p className="text-stone-500 text-sm">{t.panierVide}</p>
        <Link href="/products" className="text-xs tracking-widest uppercase underline text-stone-700 hover:text-stone-900">
          {t.retourBoutique}
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ background: "#F7F5F0" }}>
      <div className="max-w-3xl mx-auto px-6 pt-32 pb-16">
        <h1 className="text-3xl text-stone-900 mb-10" style={{ fontFamily: "var(--font-playfair)" }}>
          {t.monPanier}
        </h1>

        <div className="flex flex-col gap-3 mb-8">
          {items.map((item) => (
            <div
              key={item.variantId}
              className="flex items-center gap-5 p-4"
              style={{ background: "#fff", border: "1px solid #e8e4de" }}
            >
              {item.image && (
                <div className="w-16 h-16 relative flex-shrink-0" style={{ background: "#faf9f7" }}>
                  <Image src={item.image} alt={item.name} fill className="object-contain" style={{ mixBlendMode: "multiply" }} />
                </div>
              )}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-stone-900 truncate">{item.name}</p>
                <p className="text-xs text-stone-400 mt-0.5">€{item.price}</p>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => updateQty(item.variantId, item.quantity - 1)} className="w-7 h-7 border border-stone-300 text-stone-600 hover:bg-stone-50 text-sm">−</button>
                <span className="w-6 text-center text-sm text-stone-900">{item.quantity}</span>
                <button onClick={() => updateQty(item.variantId, item.quantity + 1)} className="w-7 h-7 border border-stone-300 text-stone-600 hover:bg-stone-50 text-sm">+</button>
              </div>
              <button onClick={() => removeItem(item.variantId)} className="text-[10px] tracking-widest uppercase text-stone-400 hover:text-red-500 transition-colors ml-2">
                {t.supprimer}
              </button>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between p-6" style={{ background: "#fff", border: "1px solid #e8e4de" }}>
          <div>
            <p className="text-xs tracking-widest uppercase text-stone-400">{t.totalEstime}</p>
            <p className="text-2xl font-semibold text-stone-900 mt-1">€{total.toFixed(2)}</p>
          </div>
          <div className="flex flex-col items-end gap-2">
            {error && <p className="text-xs text-red-500">{error}</p>}
            <button
              onClick={handleCheckout}
              disabled={loading}
              className="text-xs tracking-widest uppercase bg-stone-900 text-white px-8 py-4 hover:bg-stone-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Redirection..." : t.commander}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
