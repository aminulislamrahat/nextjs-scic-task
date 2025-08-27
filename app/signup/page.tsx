'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password })
    });
    setSubmitting(false);
    if (res.ok) {
      toast.success("Account created! You can log in now.");
      router.push("/login");
    } else {
      const data = await res.json().catch(()=>({error:"Error"}));
      toast.error(data.error || "Failed to sign up");
    }
  };

  return (
    <div className="max-w-md mx-auto space-y-6">
      <h1 className="text-3xl font-bold">Create an account</h1>
      <form onSubmit={onSubmit} className="space-y-2">
        <input required className="w-full border rounded-xl px-4 py-2" placeholder="full name" value={name} onChange={(e)=>setName(e.target.value)} />
        <input required className="w-full border rounded-xl px-4 py-2" placeholder="email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
        <input required minLength={6} className="w-full border rounded-xl px-4 py-2" placeholder="password (min 6 chars)" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
        <button disabled={submitting} className="w-full rounded-xl bg-green-600 text-white py-3 disabled:opacity-60">
          {submitting? "Creating…" : "Create account"}
        </button>
      </form>
      <p className="opacity-70 text-sm">Already have an account? <a className="underline" href="/login">Log in</a>.</p>
    </div>
  );
}
