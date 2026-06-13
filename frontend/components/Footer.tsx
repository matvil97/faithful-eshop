"use client";

import Link from "next/link";
import { useLang } from "@/context/LanguageContext";

const year = new Date().getFullYear();

export default function Footer() {
  const { t } = useLang();

  return (
    <footer style={{ background: "#111", color: "#888" }}>
      <div className="max-w-6xl mx-auto px-6 py-14 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <p className="text-white text-sm tracking-[0.3em] uppercase font-medium">Faithful</p>
          <p className="text-xs mt-1 tracking-widest text-stone-500">By Grace Alone</p>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {[
            { href: "/mentions-legales", label: t.mentionsLegales },
            { href: "/cgu", label: t.cgu },
            { href: "/cookies", label: t.politiqueCookies },
          ].map(({ href, label }) => (
            <Link key={href} href={href} className="text-xs tracking-widest uppercase hover:text-white transition-colors duration-200">
              {label}
            </Link>
          ))}
        </nav>

        <p className="text-xs tracking-wider text-center md:text-right">
          © {year} Faithful. {t.droitsReserves}
        </p>
      </div>
    </footer>
  );
}
