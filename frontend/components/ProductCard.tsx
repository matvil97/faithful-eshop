"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { useLang } from "@/context/LanguageContext";
import { Product, ProductVariant } from "@/lib/api";
import { getLocalImages, getLocalName, getDefaultColor } from "@/lib/localImages";
import { getComingSoon } from "@/lib/productConfig";

const COLOR_HEX: Record<string, string> = {
  "Black": "#1c1c1c",
  "Black Heather": "#2e2e2e",
  "White": "#f0f0f0",
  "Ash": "#b8b5ae",
  "Stone": "#c9c4b8",
  "Light Blue": "#a4c4d8",
  "Heather Ice Blue": "#b2d4da",
  "Carolina Blue": "#88b4d2",
  "Navy": "#1e3a5f",
  "Grey": "#8a8a8a",
  "Khaki": "#bba96a",
  "Red": "#c0392b",
  "Yellow": "#d4ac0d",
};

const KNOWN_COLORS = new Set(Object.keys(COLOR_HEX));

function getPrintfulImages(variant: ProductVariant, thumbnail: string): string[] {
  const priority = ["mockup", "preview", "front_large", "back"];
  const found: Record<string, string> = {};
  for (const f of variant.files ?? []) {
    if (f.preview_url && priority.includes(f.type)) found[f.type] = f.preview_url;
  }
  const main = found["mockup"] ?? found["preview"] ?? thumbnail;
  const imgs = [main];
  if (found["front_large"] && found["front_large"] !== main) imgs.push(found["front_large"]);
  if (found["back"]) imgs.push(found["back"]);
  return imgs;
}

function getColorName(v: ProductVariant) {
  const p = v.name.split(" / ");
  if (p.length >= 3) return p[p.length - 2];
  if (p.length === 2 && KNOWN_COLORS.has(p[1])) return p[1];
  return p[0];
}
function getSizeName(v: ProductVariant) {
  const p = v.name.split(" / ");
  if (p.length >= 3) return p[p.length - 1];
  if (p.length === 2 && !KNOWN_COLORS.has(p[1])) return p[1];
  return "One Size";
}

export default function ProductCard({ product }: { product: Product }) {
  const variants = product.sync_variants ?? [];
  const { addItem } = useCart();
  const { t, tColor } = useLang();

  const colorVariants = [...new Map(variants.map((v) => [getColorName(v), v])).values()];
  const preferredColor = getDefaultColor(product.id);
  const initialColorIdx = preferredColor
    ? Math.max(0, colorVariants.findIndex((v) => getColorName(v) === preferredColor))
    : 0;
  const [colorIdx, setColorIdx] = useState(initialColorIdx);
  const [imgIdx, setImgIdx] = useState(0);
  const [added, setAdded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [pressed, setPressed] = useState(false);

  const selectedColor = colorVariants[colorIdx];
  const rawColor = getColorName(selectedColor);
  const sizesForColor = variants.filter((v) => getColorName(v) === rawColor);
  const [selectedSize, setSelectedSize] = useState<ProductVariant>(sizesForColor[0]);

  const localImgs = getLocalImages(product.id, rawColor);
  const images = localImgs ?? getPrintfulImages(selectedColor, product.thumbnail_url);
  const isLocal = !!localImgs;
  const displayName = getLocalName(product.id) ?? product.name;
  const comingSoon = getComingSoon(product.id);

  const hoverInterval = useRef<ReturnType<typeof setInterval> | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  function handleMouseEnter() {
    setIsHovered(true);
    if (images.length <= 1) return;
    hoverInterval.current = setInterval(() => {
      setImgIdx((i) => (i + 1) % images.length);
    }, 2000);
  }

  function handleMouseLeave() {
    setIsHovered(false);
    setPressed(false);
    if (hoverInterval.current) {
      clearInterval(hoverInterval.current);
      hoverInterval.current = null;
    }
    setImgIdx(0);
  }

  useEffect(() => () => { if (hoverInterval.current) clearInterval(hoverInterval.current); }, []);

  function handleColorSelect(i: number) {
    if (hoverInterval.current) { clearInterval(hoverInterval.current); hoverInterval.current = null; }
    setColorIdx(i);
    setImgIdx(0);
    const s = variants.filter((v) => getColorName(v) === getColorName(colorVariants[i]));
    setSelectedSize(s[0]);
  }

  function handleAddToCart(e: React.MouseEvent) {
    e.stopPropagation();
    const variant =
      variants.find(
        (v) => getColorName(v) === rawColor && getSizeName(v) === getSizeName(selectedSize)
      ) ?? selectedSize;
    addItem({
      variantId: variant.id,
      productId: product.id,
      name: `${product.name} — ${rawColor} / ${getSizeName(selectedSize)}`,
      price: variant.retail_price,
      image: images[0],
      quantity: 1,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  }

  const translateZ = pressed ? 35 : isHovered ? 20 : 0;
  const shadow = pressed
    ? "0 24px 48px rgba(0,0,0,0.18)"
    : isHovered
    ? "0 14px 32px rgba(0,0,0,0.12)"
    : "0 2px 8px rgba(0,0,0,0.06)";

  return (
    <div
      ref={cardRef}
      className="flex flex-col"
      style={{
        transform: `perspective(1000px) translateZ(${translateZ}px)`,
        boxShadow: shadow,
        border: "1px solid #e2ddd6",
        transition: "transform 300ms ease, box-shadow 300ms ease",
        willChange: "transform",
        padding: "0 0 12px 0",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
    >
      {/* ── IMAGE ── */}
      <div
        className="relative overflow-hidden"
        style={{ aspectRatio: "3/4", background: "#faf9f7" }}
      >
        {/* Images avec crossfade */}
        {images.map((src, i) => (
          <Image
            key={`${product.id}-${rawColor}-${i}`}
            src={src}
            alt={`${product.name} — ${tColor(rawColor)}`}
            fill
            className="object-contain"
            style={{
              opacity: i === imgIdx ? 1 : 0,
              transform: isHovered ? "scale(1.05)" : "scale(1)",
              transition: "opacity 500ms ease-in-out, transform 600ms ease-in-out",
              ...(isLocal ? {} : { mixBlendMode: "multiply" }),
            }}
          />
        ))}

        {/* Badge bientôt disponible */}
        {comingSoon && (
          <div
            className="absolute top-3 right-3 z-20 px-3 py-1 text-[10px] tracking-widest uppercase"
            style={{ background: "#1a1a1a", color: "#f0ebe2" }}
          >
            Bientôt — {comingSoon}
          </div>
        )}

        {/* Dots de navigation */}
        {images.length > 1 && (
          <div className="absolute bottom-3 left-3 flex gap-1 z-10">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setImgIdx(i); }}
                className="transition-all duration-200 rounded-full"
                style={{
                  width: i === imgIdx ? 16 : 6,
                  height: 6,
                  background: i === imgIdx ? "rgba(0,0,0,0.75)" : "rgba(0,0,0,0.25)",
                }}
              />
            ))}
          </div>
        )}

        {/* ── OVERLAY HOVER : couleurs + tailles + panier ── */}
        <div
          className="absolute bottom-0 left-0 right-0 z-20"
          style={{
            transform: isHovered ? "translateY(0)" : "translateY(100%)",
            transition: "transform 300ms cubic-bezier(0.4, 0, 0.2, 1)",
            background: "rgba(15,15,15,0.88)",
            backdropFilter: "blur(6px)",
            padding: "12px",
          }}
        >
          {/* Couleurs */}
          {colorVariants.length > 1 && (
            <div className="flex flex-wrap gap-1.5 mb-2.5">
              {colorVariants.map((v, i) => {
                const col = getColorName(v);
                return (
                  <button
                    key={v.id}
                    title={tColor(col)}
                    onClick={(e) => { e.stopPropagation(); handleColorSelect(i); }}
                    className="rounded-full transition-transform hover:scale-110"
                    style={{
                      width: 16,
                      height: 16,
                      background: COLOR_HEX[col] ?? "#999",
                      outline: i === colorIdx ? "2px solid #fff" : "2px solid transparent",
                      outlineOffset: 2,
                      border: col === "White" ? "1px solid #ccc" : "none",
                    }}
                  />
                );
              })}
            </div>
          )}

          {/* Tailles */}
          {sizesForColor.length > 1 && (
            <div className="flex flex-wrap gap-1 mb-2.5">
              {sizesForColor.map((v) => (
                <button
                  key={v.id}
                  onClick={(e) => { e.stopPropagation(); setSelectedSize(v); }}
                  className="transition-all"
                  style={{
                    padding: "2px 8px",
                    fontSize: 10,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    background: getSizeName(v) === getSizeName(selectedSize) ? "#fff" : "transparent",
                    color: getSizeName(v) === getSizeName(selectedSize) ? "#111" : "#aaa",
                    border: getSizeName(v) === getSizeName(selectedSize) ? "1px solid #fff" : "1px solid #555",
                  }}
                >
                  {getSizeName(v)}
                </button>
              ))}
            </div>
          )}

          {/* Bouton ajouter au panier */}
          {comingSoon ? (
            <div
              className="w-full text-center"
              style={{
                padding: "9px 0",
                fontSize: 10,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontWeight: 500,
                color: "#aaa",
              }}
            >
              Disponible en {comingSoon}
            </div>
          ) : (
            <button
              onClick={handleAddToCart}
              className="w-full transition-all"
              style={{
                padding: "9px 0",
                fontSize: 10,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontWeight: 500,
                background: added ? "#3a3a3a" : "#fff",
                color: added ? "#888" : "#111",
              }}
            >
              {added ? t.ajoute : t.ajouterPanier}
            </button>
          )}
        </div>
      </div>

      {/* ── INFOS ── */}
      <div className="mt-3 px-3 flex justify-between items-baseline">
        <p className="text-sm font-medium text-stone-800">{displayName}</p>
        <p className="text-sm font-semibold text-stone-900">€{selectedSize.retail_price}</p>
      </div>
      <p className="text-xs text-stone-400 mt-0.5 px-3 tracking-wide">{tColor(rawColor)}</p>
    </div>
  );
}
