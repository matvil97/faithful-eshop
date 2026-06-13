import { getProduct } from "@/lib/api";
import ProductDetail from "./ProductDetail";

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = await getProduct(id);
  return <ProductDetail product={product} />;
}
