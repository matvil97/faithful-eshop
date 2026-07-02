"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Product } from "@/lib/api";
import { useLang } from "@/context/LanguageContext";
import { isSummerCollection } from "@/lib/productConfig";
import ProductCard from "./ProductCard";

const CATEGORY_IDS: Record<string, number[] | null> = {
  tout: null,
  tshirts: [24, 58],
  hoodies: [28],
  accessoires: [195, 41, 46, 48, 244],
};

export default function ProductsGrid({ products }: { products: Product[] }) {
  const { t } = useLang();
  const [activeKey, setActiveKey] = useState("tout");

  const categories = [
    { key: "tout", label: t.tout },
    { key: "tshirts", label: t.tshirts },
    { key: "hoodies", label: t.hoodies },
    { key: "accessoires", label: t.accessoires },
    { key: "summer", label: t.summer },
  ];

  const filtered =
    activeKey === "summer"
      ? products.filter((p) => isSummerCollection(p.id))
      : CATEGORY_IDS[activeKey] === null
      ? products
      : products.filter((p) => CATEGORY_IDS[activeKey]?.includes(p.category_id));

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
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12"
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
