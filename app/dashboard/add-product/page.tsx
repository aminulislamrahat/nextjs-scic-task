'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function AddProductPage() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState<number | "">("");
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const res = await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, description, price: Number(price) })
    });
    setSubmitting(false);
    if (res.ok) {
      toast.success("Product added!");
      router.push("/products");
    } else {
      toast.error("Failed to add product");
    }
  };

  return (
    <div className="max-w-lg mx-auto">
      <h1 className="text-3xl font-bold mb-6">Add Product</h1>
      <form onSubmit={onSubmit} className="space-y-4">
        <input required className="w-full border rounded-xl px-4 py-2" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} />
        <textarea required className="w-full border rounded-xl px-4 py-2" placeholder="Description" value={description} onChange={(e)=>setDescription(e.target.value)} />
        <input required type="number" step="0.01" className="w-full border rounded-xl px-4 py-2" placeholder="Price" value={price} onChange={(e)=>setPrice(e.target.value as any)} />
        <button disabled={submitting} className="rounded-xl bg-green-600 text-white px-5 py-3 disabled:opacity-60">{submitting? "Saving…" : "Save"}</button>
      </form>
    </div>
  );
}
