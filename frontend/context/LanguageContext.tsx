"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "fr" | "en";

const T = {
  fr: {
    // Navbar
    boutique: "Boutique",
    panier: "Panier",
    inspiration: "Parole",

    // Products page header
    collection: "Collection 2026",
    laBoutique: "La Boutique",

    // Filters
    tout: "Tout",
    tshirts: "Vêtements",
    hoodies: "Hoodies",
    accessoires: "Accessoires",
    aucunProduit: "Aucun produit dans cette catégorie.",

    // ProductCard
    voirDesign: "Voir design",
    vueFace: "Vue face",
    vueDos: "Vue dos",
    ajouterPanier: "Ajouter au panier",
    ajoute: "✓ Ajouté",

    // Cart
    monPanier: "Mon panier",
    panierVide: "Ton panier est vide.",
    retourBoutique: "Retour à la boutique",
    totalEstime: "Total estimé",
    commander: "Commander",
    supprimer: "Supprimer",

    // Cookie banner
    cookieText: "Nous utilisons des cookies essentiels au fonctionnement du site (panier, paiement).",
    enSavoirPlus: "En savoir plus",
    refuser: "Refuser",
    accepter: "Accepter",

    // Footer
    mentionsLegales: "Mentions légales",
    cgu: "CGU",
    politiqueCookies: "Politique cookies",
    droitsReserves: "Tous droits réservés.",

    // Color names from Printful
    colors: {
      Black: "Noir",
      "Black Heather": "Noir chiné",
      White: "Blanc",
      Ash: "Gris cendré",
      Stone: "Pierre",
      "Light Blue": "Bleu clair",
      "Heather Ice Blue": "Bleu glacé chiné",
      "Carolina Blue": "Bleu carolina",
      Asphalt: "Gris anthracite",
      Navy: "Marine",
      Grey: "Gris",
      Khaki: "Kaki",
      Red: "Rouge",
      "Forest Green": "Vert forêt",
      Olive: "Olive",
      "Athletic Grey": "Gris chiné",
      "Sport Grey": "Gris sport",
      Blue: "Bleu",
      Brown: "Marron",
      Natural: "Naturel",
      Heather: "Chiné",
    } as Record<string, string>,
  },
  en: {
    boutique: "Shop",
    panier: "Cart",
    inspiration: "Inspiration",
    collection: "Collection 2026",
    laBoutique: "The Shop",
    tout: "All",
    tshirts: "Clothing",
    hoodies: "Hoodies",
    accessoires: "Accessories",
    aucunProduit: "No products in this category.",
    voirDesign: "View design",
    vueFace: "Front view",
    vueDos: "Back view",
    ajouterPanier: "Add to cart",
    ajoute: "✓ Added",
    monPanier: "My cart",
    panierVide: "Your cart is empty.",
    retourBoutique: "Back to the shop",
    totalEstime: "Estimated total",
    commander: "Order now",
    supprimer: "Remove",
    cookieText: "We use essential cookies to make the site work (cart, payment).",
    enSavoirPlus: "Learn more",
    refuser: "Decline",
    accepter: "Accept",
    mentionsLegales: "Legal notice",
    cgu: "Terms",
    politiqueCookies: "Cookie policy",
    droitsReserves: "All rights reserved.",
    colors: {} as Record<string, string>,
  },
};

type Translations = typeof T.fr;

interface LanguageCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Translations;
  tColor: (name: string) => string;
}

const LanguageContext = createContext<LanguageCtx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("fr");
  const t = T[lang] as Translations;
  const tColor = (name: string) =>
    lang === "fr" ? (T.fr.colors[name] ?? name) : name;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, tColor }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be inside LanguageProvider");
  return ctx;
}
