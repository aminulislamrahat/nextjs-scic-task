'use client'
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const { data: session } = useSession();
  return (
    <header className="sticky top-0 z-40 bg-white/70 dark:bg-gray-950/70 backdrop-blur border-b">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-bold">Products Demo</Link>
        <nav className="flex items-center gap-4">
          <Link href="/products">Products</Link>
          <Link href="/dashboard/add-product">Add Product</Link>
          <ThemeToggle />
          {session?.user ? (
            <button onClick={() => signOut({ callbackUrl: "/" })} className="px-3 py-1.5 rounded-lg border">Logout</button>
          ) : (
            <div className="flex gap-2">
              <Link href="/signup" className="px-3 py-1.5 rounded-lg border">Sign up</Link>
              <button onClick={() => signIn(undefined, { callbackUrl: "/products" })} className="px-3 py-1.5 rounded-lg border">Login</button>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
