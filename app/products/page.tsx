import ProductCard from "@/components/ProductCard";
import { getAllProducts } from "@/lib/productsStore";

export const dynamic = "force-dynamic";

export default async function ProductsPage() {
  const products = await getAllProducts();
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">Products</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {products.map((p) => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  );
}
