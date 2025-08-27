import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-20">
      <section className="text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold">
          Build & Manage Products Effortlessly
        </h1>
        <p className="text-lg opacity-80">
          Public pages, protected dashboard, DB-backed auth, and API routes.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link
            href="/products"
            className="px-5 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700"
          >
            View Products
          </Link>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-6">
        {[
          {
            title: "Authentication",
            desc: "Secure signup and login with NextAuth (Credentials Provider) and MongoDB persistence.",
          },
          {
            title: "Product Management",
            desc: "Public product listing and details, plus a protected dashboard to add new products.",
          },
          {
            title: "Modern UI/UX",
            desc: "Responsive design with Tailwind CSS, theme toggle (light/dark), toasts, and loading states.",
          },
        ].map((f, i) => (
          <div key={i} className="rounded-2xl border p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
            <p className="opacity-80">{f.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
