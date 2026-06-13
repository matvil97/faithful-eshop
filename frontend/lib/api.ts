const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

export interface ProductVariant {
  id: number;
  name: string;
  retail_price: string;
  currency: string;
  files: { type: string; preview_url: string }[];
}

export interface Product {
  id: number;
  name: string;
  thumbnail_url: string;
  sync_variants: ProductVariant[];
  category_id: number;
}

export async function getProducts(): Promise<Product[]> {
  const res = await fetch(`${API_URL}/api/products`, { next: { revalidate: 60 } });
  if (!res.ok) throw new Error("Failed to fetch products");
  const list: { id: number; name: string; thumbnail_url: string }[] = await res.json();
  const full = await Promise.all(list.map((p) => getProduct(String(p.id))));
  return full;
}

export async function getProduct(id: string): Promise<Product> {
  const res = await fetch(`${API_URL}/api/products/${id}`, { next: { revalidate: 60 } });
  if (!res.ok) throw new Error("Failed to fetch product");
  const data = await res.json();
  // Printful wraps single product under sync_product + sync_variants
  return {
    id: data.sync_product.id,
    name: data.sync_product.name,
    thumbnail_url: data.sync_product.thumbnail_url,
    sync_variants: data.sync_variants ?? [],
    category_id: data.sync_variants?.[0]?.main_category_id ?? 0,
  };
}
