import clientPromise from "./mongodb";
import { nanoid } from "./utils";

export type Product = { id: string; name: string; description: string; price: number };

export async function getCollection() {
  const client = await clientPromise;
  const db = client.db(process.env.DB_NAME || "productsdb");
  return db.collection<Product>("products");
}

export async function getAllProducts(): Promise<Product[]> {
  const col = await getCollection();
  return await col.find({}, { projection: { _id: 0 } }).toArray();
}

export async function getProductById(id: string): Promise<Product | undefined> {
  const col = await getCollection();
  const doc = await col.findOne({ id }, { projection: { _id: 0 } });
  return (doc as Product) || undefined;
}

export async function addProduct(input: Omit<Product, "id">): Promise<Product> {
  const col = await getCollection();
  const created: Product = { id: nanoid(), ...input };
  await col.insertOne(created as any);
  return created;
}
