"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const ease = [0.22, 1, 0.36, 1];

export default function AnimatedHero() {
  return (
    <section className="relative min-h-[92vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden">

      <div
        className="absolute inset-0 -z-20"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=1920&q=85")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: "linear-gradient(to bottom, rgba(10,8,5,0.55) 0%, rgba(10,8,5,0.45) 50%, rgba(10,8,5,0.65) 100%)",
        }}
      />

      <motion.p
        className="text-xs tracking-[0.4em] text-stone-300 uppercase mb-8 opacity-80"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 0.8, y: 0 }}
        transition={{ duration: 0.8, ease, delay: 0.1 }}
      >
        Collection 2026
      </motion.p>

      <motion.h1
        className="text-[clamp(4rem,12vw,10rem)] leading-none font-bold tracking-tight text-white mb-2 drop-shadow-lg"
        style={{ fontFamily: "var(--font-playfair)" }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease, delay: 0.25 }}
      >
        Faithful
      </motion.h1>

      <motion.p
        className="text-xs tracking-[0.6em] text-stone-300 uppercase mb-12"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease, delay: 0.5 }}
      >
        By Grace Alone
      </motion.p>

      <motion.p
        className="max-w-md text-stone-200 leading-relaxed mb-10 text-sm opacity-90"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 0.9, y: 0 }}
        transition={{ duration: 0.8, ease, delay: 0.7 }}
      >
        Des vêtements qui portent ta foi — conçus pour rappeler, chaque jour,
        que tu es habillé·e de quelque chose de plus grand.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease, delay: 0.9 }}
      >
        <Link
          href="/products"
          className="group inline-flex items-center gap-3 bg-white text-stone-900 px-10 py-4 text-xs tracking-widest uppercase hover:bg-stone-100 transition-all duration-300"
        >
          Découvrir la collection
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </motion.div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <motion.div
          className="w-px h-12 bg-white/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
        />
      </div>
    </section>
  );
}
