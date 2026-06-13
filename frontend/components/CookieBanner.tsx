"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useLang } from "@/context/LanguageContext";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const { t } = useLang();

  useEffect(() => {
    if (!localStorage.getItem("cookie-consent")) setVisible(true);
  }, []);

  function accept() { localStorage.setItem("cookie-consent", "accepted"); setVisible(false); }
  function decline() { localStorage.setItem("cookie-consent", "declined"); setVisible(false); }

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8"
      style={{ background: "#111", borderTop: "1px solid #2a2a2a" }}
    >
      <p className="text-xs text-stone-400 leading-relaxed flex-1">
        {t.cookieText}{" "}
        <Link href="/cookies" className="underline text-stone-300 hover:text-white transition-colors">
          {t.enSavoirPlus}
        </Link>
      </p>
      <div className="flex items-center gap-3 shrink-0">
        <button onClick={decline} className="text-xs tracking-widest uppercase text-stone-500 hover:text-stone-300 transition-colors px-1">
          {t.refuser}
        </button>
        <button onClick={accept} className="text-xs tracking-widest uppercase bg-white text-stone-900 px-6 py-2.5 hover:bg-stone-100 transition-colors">
          {t.accepter}
        </button>
      </div>
    </div>
  );
}
