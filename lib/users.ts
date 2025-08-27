import clientPromise from "./mongodb";
import bcrypt from "bcryptjs";

export type DbUser = {
  _id?: any;
  name: string;
  email: string;
  passwordHash: string;
};

export async function usersCollection() {
  const client = await clientPromise;
  const db = client.db(process.env.DB_NAME || "productsdb");
  const col = db.collection<DbUser>("users");
  await col.createIndex({ email: 1 }, { unique: true });
  return col;
}

export async function findUserByEmail(email: string) {
  const col = await usersCollection();
  return await col.findOne({ email });
}

export async function createUser(name: string, email: string, password: string) {
  const col = await usersCollection();
  const passwordHash = bcrypt.hashSync(password, 10);
  const res = await col.insertOne({ name, email, passwordHash } as any);
  return { id: res.insertedId.toString(), name, email };
}
