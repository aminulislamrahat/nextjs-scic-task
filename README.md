# nextjs-scic-task

---

## 🚀 Live Demo

- **Frontend:** [https://nextjs-scic-task.vercel.app/]

---

# Next.js 15 + NextAuth v4 + MongoDB (Users + Products)

- Credentials auth only
- **User signup** persists to MongoDB
- **Login** authenticates against MongoDB
- Products stored in MongoDB
- Protected `/dashboard/add-product`

## .env.local

```ini
MONGODB_URI=mongodb+srv://USER:PASS@HOST/?retryWrites=true&w=majority&appName=Cluster0
DB_NAME=productsdb
NEXTAUTH_SECRET=devsecret-please-change
```

## Run locally

```bash
pnpm i
pnpm dev
```

Login after signing up at `/signup`.

## Routes

- `/signup` — create user (saves to DB)
- `/login` — credentials login
- `/products` — list from DB
- `/products/[id]` — details
- `/dashboard/add-product` — protected create form
- `/api/auth/register` — POST: {name,email,password}
- `/api/products` — GET/POST
