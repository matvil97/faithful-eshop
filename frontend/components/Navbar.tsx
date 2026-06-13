"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useLang } from "@/context/LanguageContext";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { count } = useCart();
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const textColor = scrolled ? "#78716c" : "rgba(255,255,255,0.8)";

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 px-8 py-5 flex items-center justify-between transition-all duration-500"
      style={{
        background: scrolled ? "rgba(247,245,240,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(229,224,216,0.8)" : "none",
      }}
    >
      <Link
        href="/"
        className="text-sm tracking-[0.3em] uppercase font-semibold transition-colors duration-300"
        style={{ fontFamily: "var(--font-playfair)", color: scrolled ? "#1a1a1a" : "#ffffff" }}
      >
        Faithful
      </Link>

      <div className="flex items-center gap-8">
        <Link href="/products" className="text-xs tracking-[0.2em] uppercase transition-colors duration-300" style={{ color: textColor }}>
          {t.boutique}
        </Link>

        <Link href="/cart" className="relative text-xs tracking-[0.2em] uppercase transition-colors duration-300" style={{ color: textColor }}>
          {t.panier}
          {count > 0 && (
            <span
              className="absolute -top-2 -right-4 text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-medium"
              style={{ background: scrolled ? "#1a1a1a" : "rgba(255,255,255,0.9)", color: scrolled ? "#fff" : "#1a1a1a" }}
            >
              {count}
            </span>
          )}
        </Link>

        {/* Sélecteur de langue */}
        <div className="flex items-center gap-1 text-[10px] tracking-widest">
          <button
            onClick={() => setLang("fr")}
            style={{ color: lang === "fr" ? (scrolled ? "#1a1a1a" : "#ffffff") : textColor, fontWeight: lang === "fr" ? 600 : 400 }}
            className="transition-colors duration-200 uppercase"
          >
            FR
          </button>
          <span style={{ color: textColor, opacity: 0.4 }}>|</span>
          <button
            onClick={() => setLang("en")}
            style={{ color: lang === "en" ? (scrolled ? "#1a1a1a" : "#ffffff") : textColor, fontWeight: lang === "en" ? 600 : 400 }}
            className="transition-colors duration-200 uppercase"
          >
            EN
          </button>
        </div>
      </div>
    </nav>
  );
}
