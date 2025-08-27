'use client'
import { signIn } from "next-auth/react";
import { useState } from "react";
import { toast } from "sonner";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const onCreds = async () => {
    try {
      setLoading(true);
      const res = await signIn("credentials", { email, password, redirect: true, callbackUrl: "/products" });
      if (!res?.ok) toast.error("Invalid credentials");
    } catch (e) {
      toast.error("Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto space-y-6">
      <h1 className="text-3xl font-bold">Login</h1>
      <div className="space-y-2">
        <input className="w-full border rounded-xl px-4 py-2" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
        <input className="w-full border rounded-xl px-4 py-2" placeholder="password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
        <button disabled={loading} onClick={onCreds} className="w-full rounded-xl bg-blue-600 text-white py-3 disabled:opacity-60">
          {loading? "Logging in…" : "Login"}
        </button>
      </div>
      <p className="opacity-70 text-sm">No account? <a className="underline" href="/signup">Create one</a>.</p>
    </div>
  );
}
