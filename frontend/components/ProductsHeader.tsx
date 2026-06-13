"use client";

import { motion } from "framer-motion";
import { useLang } from "@/context/LanguageContext";

const ease = [0.22, 1, 0.36, 1];

export default function ProductsHeader() {
  const { t } = useLang();
  return (
    <div className="pt-32 pb-14 text-center px-6">
      <motion.p
        className="text-xs tracking-[0.4em] uppercase text-stone-400 mb-3"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease, delay: 0.1 }}
      >
        {t.collection}
      </motion.p>
      <motion.h1
        className="text-5xl text-stone-900"
        style={{ fontFamily: "var(--font-playfair)" }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease, delay: 0.2 }}
      >
        {t.laBoutique}
      </motion.h1>
      <motion.div
        className="w-12 h-px bg-stone-300 mx-auto mt-6"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.6, ease, delay: 0.45 }}
      />
    </div>
  );
}
