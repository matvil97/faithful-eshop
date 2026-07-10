"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Product } from "@/lib/api";
import { useLang } from "@/context/LanguageContext";
import ProductCard from "./ProductCard";

const CATEGORY_IDS: Record<string, number[] | null> = {
  tout: null,
  tshirts: [24, 58, 32, 14],
  hoodies: [28],
  accessoires: [195, 41, 46, 48, 244],
};

// Ordre d'affichage dans "Tout" : vêtements d'abord, accessoires ensuite
const CATEGORY_ORDER = ["tshirts", "hoodies", "accessoires"];

function categoryRank(product: Product): number {
  const idx = CATEGORY_ORDER.findIndex((key) => CATEGORY_IDS[key]?.includes(product.category_id));
  return idx === -1 ? CATEGORY_ORDER.length : idx;
}

// Échange manuellement la position du t-shirt oversize et du body bébé
const SWAP_PAIR: [number, number] = [439033673, 445132020];

function withSwap(products: Product[]): Product[] {
  const arr = [...products];
  const i = arr.findIndex((p) => p.id === SWAP_PAIR[0]);
  const j = arr.findIndex((p) => p.id === SWAP_PAIR[1]);
  if (i !== -1 && j !== -1) [arr[i], arr[j]] = [arr[j], arr[i]];
  return arr;
}

export default function ProductsGrid({ products }: { products: Product[] }) {
  const { t } = useLang();
  const [activeKey, setActiveKey] = useState("tout");

  const categories = [
    { key: "tout", label: t.tout },
    { key: "tshirts", label: t.tshirts },
    { key: "hoodies", label: t.hoodies },
    { key: "accessoires", label: t.accessoires },
  ];

  const filtered = withSwap(
    CATEGORY_IDS[activeKey] === null
      ? [...products].sort((a, b) => categoryRank(a) - categoryRank(b))
      : products.filter((p) => CATEGORY_IDS[activeKey]?.includes(p.category_id))
  );

  return (
    <div>
      {/* Filtres */}
      <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActiveKey(cat.key)}
            className="transition-all duration-200 text-xs tracking-widest uppercase px-5 py-2.5"
            style={{
              background: activeKey === cat.key ? "#1a1a1a" : "transparent",
              color: activeKey === cat.key ? "#ffffff" : "#78716c",
              border: activeKey === cat.key ? "1px solid #1a1a1a" : "1px solid #d6d0c8",
            }}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grille */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        {filtered.map((product) => (
          <motion.div
            key={String(product.id)}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
            }}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </motion.div>

      {filtered.length === 0 && (
        <p className="text-center text-stone-400 text-sm py-20">{t.aucunProduit}</p>
      )}
    </div>
  );
}
