import { getProductById } from "@/lib/productsStore";
import { notFound } from "next/navigation";

export default async function ProductDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await getProductById(id);
  if (!product) return notFound();

  return (
    <article className="max-w-2xl space-y-4">
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <p className="opacity-80">{product.description}</p>
      <p className="text-2xl font-semibold">${product.price.toFixed(2)}</p>
    </article>
  );
}
