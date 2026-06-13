import { getProducts } from "@/lib/api";
import ProductsGrid from "@/components/ProductsGrid";
import ProductsHeader from "@/components/ProductsHeader";

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="relative min-h-screen">
      {/* Fond image fixe */}
      <div
        className="fixed inset-0 -z-10"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&q=80")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.15)",
        }}
      />
      <div className="fixed inset-0 -z-10" style={{ background: "rgba(242,239,233,0.96)" }} />

      <ProductsHeader />

      {/* Grille avec filtres */}
      <div className="max-w-6xl mx-auto px-6 pb-24">
        <ProductsGrid products={products} />
      </div>
    </div>
  );
}
