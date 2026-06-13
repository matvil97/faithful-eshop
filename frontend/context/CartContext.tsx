"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export interface CartItem {
  variantId: number;
  productId: number;
  name: string;
  price: string;
  image: string;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (variantId: number) => void;
  updateQty: (variantId: number, qty: number) => void;
  total: number;
  count: number;
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  function addItem(item: CartItem) {
    setItems((prev) => {
      const existing = prev.find((i) => i.variantId === item.variantId);
      if (existing) {
        return prev.map((i) =>
          i.variantId === item.variantId ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  }

  function removeItem(variantId: number) {
    setItems((prev) => prev.filter((i) => i.variantId !== variantId));
  }

  function updateQty(variantId: number, qty: number) {
    if (qty <= 0) return removeItem(variantId);
    setItems((prev) =>
      prev.map((i) => (i.variantId === variantId ? { ...i, quantity: qty } : i))
    );
  }

  const total = items.reduce((sum, i) => sum + parseFloat(i.price) * i.quantity, 0);
  const count = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, updateQty, total, count }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
