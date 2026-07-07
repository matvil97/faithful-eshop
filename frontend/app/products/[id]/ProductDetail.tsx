"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { useLang } from "@/context/LanguageContext";
import { Product, ProductVariant } from "@/lib/api";
import { getComingSoon, isColorExcluded } from "@/lib/productConfig";
import { SECOND_ITEM_DISCOUNT_PRODUCTS } from "@/lib/promotions";
import { getLocalImages, getDefaultColor } from "@/lib/localImages";

function getVariantImage(variant: ProductVariant, thumbnail: string): string {
  const priority = ["mockup", "preview", "front_large", "front"];
  for (const type of priority) {
    const file = variant.files?.find((f) => f.type === type && f.preview_url);
    if (file) return file.preview_url;
  }
  const any = variant.files?.find((f) => f.preview_url);
  return any?.preview_url ?? thumbnail;
}

const KNOWN_COLORS = new Set([
  "Black", "Black Heather", "White", "Ash", "Stone", "Light Blue",
  "Heather Ice Blue", "Carolina Blue", "Navy", "Grey", "Khaki", "Red", "Yellow",
]);

function getColorName(variant: ProductVariant): string {
  const parts = variant.name.split(" / ");
  if (parts.length >= 3) return parts[parts.length - 2];
  if (parts.length === 2 && KNOWN_COLORS.has(parts[1])) return parts[1];
  return parts[0];
}

function getSizeName(variant: ProductVariant): string {
  const parts = variant.name.split(" / ");
  if (parts.length >= 3) return parts[parts.length - 1];
  if (parts.length === 2 && !KNOWN_COLORS.has(parts[1])) return parts[1];
  return "One Size";
}
function isAvailable(v: ProductVariant): boolean {
  return v.availability_status == null || v.availability_status === "active";
}

export default function ProductDetail({ product }: { product: Product }) {
  const variants = (product.sync_variants ?? []).filter(
    (v) => !isColorExcluded(product.id, getColorName(v))
  );
  const { addItem } = useCart();
  const { tSize } = useLang();

  // One representative variant per color (for the carousel)
  const colorVariants = [...new Map(variants.map((v) => [getColorName(v), v])).values()];

  const preferredColor = getDefaultColor(product.id);
  const initialIndex = preferredColor
    ? Math.max(0, colorVariants.findIndex((v) => getColorName(v) === preferredColor))
    : 0;
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const selectedColor = colorVariants[activeIndex];
  const rawColor = getColorName(selectedColor);

  const sizesForColor = variants.filter(
    (v) => getColorName(v) === rawColor
  );
  const [selectedSize, setSelectedSize] = useState<ProductVariant>(
    sizesForColor.find(isAvailable) ?? sizesForColor[0]
  );

  function handleColorSelect(index: number) {
    setActiveIndex(index);
    setAngleIndex(0);
    const newSizes = variants.filter(
      (v) => getColorName(v) === getColorName(colorVariants[index])
    );
    setSelectedSize(newSizes.find(isAvailable) ?? newSizes[0]);
  }

  const localAngleImages =
    getLocalImages(product.id, rawColor) ?? getLocalImages(product.id, getSizeName(selectedSize));
  const angleImages = localAngleImages ?? [getVariantImage(selectedSize, product.thumbnail_url)];
  const [angleIndex, setAngleIndex] = useState(0);
  useEffect(() => setAngleIndex(0), [rawColor, selectedSize]);
  const mainImage = angleImages[angleIndex] ?? angleImages[0];
  const comingSoon = getComingSoon(product.id);

  const [isZoomOpen, setIsZoomOpen] = useState(false);
  const [isMagnified, setIsMagnified] = useState(false);

  function closeZoom() {
    setIsZoomOpen(false);
    setIsMagnified(false);
  }

  function handlePrev() {
    handleColorSelect((activeIndex - 1 + colorVariants.length) % colorVariants.length);
  }

  function handleNext() {
    handleColorSelect((activeIndex + 1) % colorVariants.length);
  }

  function handleAddToCart() {
    const variant = variants.find(
      (v) => getColorName(v) === getColorName(selectedColor) && getSizeName(v) === getSizeName(selectedSize)
    ) ?? selectedSize;

    addItem({
      variantId: variant.id,
      productId: product.id,
      name: `${product.name} — ${getColorName(selectedColor)} / ${tSize(getSizeName(selectedSize))}`,
      price: variant.retail_price,
      image: mainImage,
      quantity: 1,
    });
  }

  return (
    <>
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

        {/* Carrousel */}
        <div className="flex flex-col gap-4">
          {/* Image principale */}
          <div className="relative aspect-square bg-gray-50 rounded-2xl overflow-hidden">
            <Image
              key={mainImage}
              src={mainImage}
              alt={`${product.name} — ${getColorName(selectedColor)}`}
              fill
              className="object-contain cursor-zoom-in"
              priority
              onClick={() => setIsZoomOpen(true)}
            />
            {/* Bouton zoom */}
            <button
              onClick={() => setIsZoomOpen(true)}
              className="absolute top-3 right-3 z-10 w-9 h-9 bg-white/80 backdrop-blur rounded-full shadow flex items-center justify-center hover:bg-white transition"
              aria-label="Zoomer l'image"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <circle cx="11" cy="11" r="7" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                <line x1="8" y1="11" x2="14" y2="11" />
                <line x1="11" y1="8" x2="11" y2="14" />
              </svg>
            </button>
            {/* Points de navigation entre les angles (face / dos...) */}
            {angleImages.length > 1 && (
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                {angleImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setAngleIndex(i)}
                    aria-label={`Vue ${i + 1}`}
                    className="transition-all duration-200 rounded-full"
                    style={{
                      width: i === angleIndex ? 18 : 7,
                      height: 7,
                      background: i === angleIndex ? "rgba(0,0,0,0.8)" : "rgba(0,0,0,0.25)",
                    }}
                  />
                ))}
              </div>
            )}
            {/* Flèches */}
            {colorVariants.length > 1 && (
              <>
                <button
                  onClick={handlePrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/80 backdrop-blur rounded-full shadow flex items-center justify-center hover:bg-white transition"
                  aria-label="Précédent"
                >
                  ‹
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/80 backdrop-blur rounded-full shadow flex items-center justify-center hover:bg-white transition"
                  aria-label="Suivant"
                >
                  ›
                </button>
              </>
            )}
          </div>

          {/* Miniatures des angles (face, dos...) pour la couleur sélectionnée */}
          {angleImages.length > 1 && (
            <div className="flex gap-2 justify-center flex-wrap">
              {angleImages.map((img, i) => (
                <button
                  key={img}
                  onClick={() => setAngleIndex(i)}
                  className={`w-16 h-16 relative rounded-xl overflow-hidden border-2 transition-colors flex-shrink-0 ${
                    i === angleIndex ? "border-black" : "border-transparent"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${product.name} — vue ${i + 1}`}
                    fill
                    className="object-contain bg-gray-50"
                  />
                </button>
              ))}
            </div>
          )}

          {/* Thumbnails couleurs */}
          <div className="flex gap-2 justify-center flex-wrap">
            {colorVariants.map((v, i) => {
              const img = getLocalImages(product.id, getColorName(v))?.[0] ?? getVariantImage(v, product.thumbnail_url);
              return (
                <button
                  key={v.id}
                  onClick={() => handleColorSelect(i)}
                  className={`w-16 h-16 relative rounded-xl overflow-hidden border-2 transition-colors flex-shrink-0 ${
                    i === activeIndex ? "border-black" : "border-transparent"
                  }`}
                >
                  <Image
                    src={img}
                    alt={getColorName(v)}
                    fill
                    className="object-contain bg-gray-50"
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* Infos produit */}
        <div className="flex flex-col gap-6 pt-2">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
            <p className="text-sm text-gray-400 mt-1">{getColorName(selectedColor)}</p>
          </div>

          <p className="text-3xl font-semibold text-gray-900">€{selectedSize.retail_price}</p>
          <p className="text-xs text-stone-400 -mt-3">Livraison offerte · +6,99€ DOM-TOM</p>
          {SECOND_ITEM_DISCOUNT_PRODUCTS[product.id] && (
            <p className="text-xs text-emerald-700 -mt-3 font-medium">2ème article -20%</p>
          )}

          {/* Tailles */}
          <div className="space-y-3">
            <p className="text-sm font-medium text-gray-500">
              Taille — <span className="text-gray-900 font-semibold">{tSize(getSizeName(selectedSize))}</span>
            </p>
            <div className="flex flex-wrap gap-2">
              {sizesForColor.map((v) => {
                const available = isAvailable(v);
                return (
                  <button
                    key={v.id}
                    disabled={!available}
                    onClick={() => available && setSelectedSize(v)}
                    title={available ? undefined : "Rupture de stock temporaire"}
                    className={`min-w-[3rem] px-3 py-2 text-sm rounded-full border transition-colors ${
                      !available
                        ? "border-gray-200 text-gray-300 line-through cursor-not-allowed"
                        : getSizeName(v) === getSizeName(selectedSize)
                        ? "bg-black text-white border-black"
                        : "border-gray-200 text-gray-700 hover:border-gray-400"
                    }`}
                  >
                    {tSize(getSizeName(v))}
                  </button>
                );
              })}
            </div>
          </div>

          {comingSoon ? (
            <div className="w-full mt-2">
              <div
                className="w-full py-4 text-center text-sm tracking-widest uppercase"
                style={{ background: "#f0ebe2", color: "#78716c", border: "1px solid #e2ddd6" }}
              >
                Bientôt disponible — {comingSoon}
              </div>
              <p className="text-xs text-stone-400 text-center mt-3">
                Ce produit sera disponible en {comingSoon}. Reviens vite !
              </p>
            </div>
          ) : (
            <button
              onClick={handleAddToCart}
              className="w-full bg-black text-white py-4 rounded-full text-sm font-semibold hover:bg-gray-800 transition-colors mt-2"
            >
              Ajouter au panier — €{selectedSize.retail_price}
            </button>
          )}

          <p className="text-xs text-gray-400 text-center">
            Livraison estimée sous 5–10 jours ouvrés · Produit à la commande
          </p>
        </div>
      </div>
    </div>

    {/* Lightbox zoom */}
    {isZoomOpen && (
      <div
        className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-6"
        onClick={closeZoom}
      >
        <button
          onClick={closeZoom}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition"
          aria-label="Fermer"
        >
          ✕
        </button>
        <div
          className="relative w-full h-full max-w-4xl max-h-[90vh] overflow-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div
            className="relative w-full h-full"
            style={{ minHeight: isMagnified ? "150vh" : "100%", minWidth: isMagnified ? "150%" : "100%" }}
            onClick={() => setIsMagnified((v) => !v)}
          >
            <Image
              src={mainImage}
              alt={`${product.name} — ${getColorName(selectedColor)}`}
              fill
              className={isMagnified ? "object-cover cursor-zoom-out" : "object-contain cursor-zoom-in"}
            />
          </div>
        </div>
      </div>
    )}
    </>
  );
}
