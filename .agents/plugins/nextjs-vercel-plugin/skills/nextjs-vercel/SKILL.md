---
name: nextjs-vercel
description: Advanced Next.js App Router and Vercel deployment patterns, including Server Components, Server Actions, PPR, Glassmorphism UI, ISR, and caching strategies.
---

# Next.js & Vercel Ultra-Mutakhir Plugin Skill (v2.0)

Runbook ini berisi pola koding elit, arsitektur Next.js App Router (React 19 / Next.js 15+), integrasi Vercel zero-config, dan teknik optimasi UI/UX Glassmorphism modern.

---

## 1. Arsitektur Next.js App Router (Pola Utama)
* **React Server Components (RSC) by Default:** Selalu gunakan RSC di tingkat halaman dan komponen layout untuk performa rendering server-side tanpa beban JavaScript di browser.
* **Client Components (`'use client'`):** Batasi penggunaan `'use client'` HANYA pada komponen interaktif (seperti state filter, modal, animasi interaktif).
* **Server Actions:** Gunakan Server Actions untuk mutasi data aman langsung dari komponen tanpa membuat API endpoint terpisah.

---

## 2. Standar Desain UI/UX (Glassmorphism Dark Mode)
* **Warna Dasar:** `#0b0f19` / `bg-slate-950` untuk latar belakang utama.
* **Glassmorphism Styling:**
  ```css
  background: rgba(17, 24, 39, 0.7);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  ```
* **Typography:** Gunakan font Google *Plus Jakarta Sans* atau *Geist*.
* **Iconography:** Gunakan `lucide-react` untuk ikon-ikon bersih dan modern.

---

## 3. Caching & Performance Optimization (ISR & PPR)
* **Incremental Static Regeneration (ISR):** Gunakan `export const revalidate = 60` atau `revalidateTag()` untuk membuat halaman statis yang otomatis memperbarui datanya secara berkala tanpa rebuild Vercel.
* **Partial Prerendering (PPR):** Gabungkan shell halaman statis dengan React `Suspense` untuk rendering komponen dinamis secara paralel.
* **Image Optimization:** Gunakan `next/image` dengan properti `priority` untuk LCP images dan remote pattern terkonfigurasi.

---

## 4. Vercel Deployment Pipeline
* **Environment Variables:** Kelola variabel lingkungan di Vercel Dashboard; gunakan `.env.local` untuk lingkungan lokal (wajib gitignored).
* **Vercel Analytics & Speed Insights:** Aktifkan `@vercel/analytics` dan `@vercel/speed-insights` untuk memantau performa Core Web Vitals real-time.
* **Edge Functions & Middleware:** Manfaatkan Edge Runtime untuk geo-routing dan perlindungan middleware berlatensi rendah.
