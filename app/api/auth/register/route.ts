import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { createUser, findUserByEmail } from "@/lib/users";

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(6)
});

export async function POST(req: NextRequest) {
  const body = await req.json();
  const parsed = schema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: "Invalid input" }, { status: 400 });

  const { name, email, password } = parsed.data;
  const existing = await findUserByEmail(email);
  if (existing) return NextResponse.json({ error: "Email already registered" }, { status: 409 });

  const user = await createUser(name, email, password);
  return NextResponse.json({ user }, { status: 201 });
}
