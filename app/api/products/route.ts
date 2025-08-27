import { NextRequest, NextResponse } from "next/server";
import { getAllProducts, addProduct } from "@/lib/productsStore";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import type { Session } from "next-auth";
import { z } from "zod";

export async function GET() {
  const products = await getAllProducts();
  return NextResponse.json(products);
}

const schema = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
  price: z.number().nonnegative(),
});

export async function POST(req: NextRequest) {
  const session: Session | null = await getServerSession(authOptions);
  if (!session?.user)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const json = await req.json();
  const parsed = schema.safeParse(json);
  if (!parsed.success)
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });

  const created = await addProduct(parsed.data);
  return NextResponse.json(created, { status: 201 });
}
