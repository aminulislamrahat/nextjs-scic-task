# Vercel Deployment Guide

1. Push the project to GitHub.
2. Create a MongoDB Atlas cluster and copy your connection string.
3. In Vercel, create a New Project and import the GitHub repo.
4. Add Environment Variables:
   - `MONGODB_URI` — your Atlas connection string
   - `DB_NAME` — productsdb (or your preferred name)
   - `NEXTAUTH_SECRET` — a strong random string
5. Deploy. No extra config needed.
6. After deploy:
   - Sign up at `/signup`.
   - Log in at `/login`.
   - Add products at `/dashboard/add-product`.
