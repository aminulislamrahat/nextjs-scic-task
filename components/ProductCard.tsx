import Link from "next/link";

export default function ProductCard({ product }: { product: { id: string; name: string; description: string; price: number } }) {
  return (
    <div className="rounded-2xl border p-6 shadow-sm flex flex-col">
      <h3 className="text-xl font-semibold">{product.name}</h3>
      <p className="opacity-80 mb-4">{product.description}</p>
      <div className="mt-auto flex items-center justify-between">
        <span className="font-bold">${product.price.toFixed(2)}</span>
        <Link href={`/products/${product.id}`} className="px-3 py-1.5 rounded-lg bg-blue-600 text-white">Details</Link>
      </div>
    </div>
  );
}
