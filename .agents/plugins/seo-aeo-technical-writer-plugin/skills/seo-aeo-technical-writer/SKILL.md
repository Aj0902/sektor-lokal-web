---
name: seo-aeo-technical-writer
description: Comprehensive guide for SEO (Search Engine Optimization), AEO (Answer Engine Optimization for Perplexity/SearchGPT), Schema.org JSON-LD, and Technical Writing Best Practices.
---

# SEO, AEO & Technical Writing Architecture Skill

Skill ini berisi standar mutakhir untuk membuat web Next.js yang **mudah dirayapi oleh Mesin Pencari Konvensional (Google SEO)** sekaligus **diindeks dan dikutip secara presisi oleh Mesin Penjawab AI (Perplexity, SearchGPT, Google SGE, Claude AEO)**.

---

## 1. Answer Engine Optimization (AEO) & Structured Data (Sanity.io Best Practices)
* **Perbedaan SEO vs AEO:**
  * **SEO:** Mengoptimalkan rangking kata kunci di halaman hasil pencarian (SERP).
  * **AEO:** Mengoptimalkan struktur data agar model AI (LLM) dapat mengekstrak jawaban langsung (*direct citations/answers*) dari situs web kita.
* **Schema.org / JSON-LD Injection:**
  Selalu sematkan skema JSON-LD terstruktur di setiap halaman Next.js (`ProfilePage`, `ItemList`, `Person`, `Organization`):
  ```json
  {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "mainEntity": {
      "@type": "Person",
      "name": "Nama Figur",
      "sameAs": ["https://twitter.com/handle", "https://instagram.com/handle"]
    }
  }
  ```
* **Heading-Direct Answer Pattern:**
  Gunakan elemen `<h2>` atau `<h3>` berbentuk pertanyaan/pernyataan jelas, diikuti paragraf ringkas (40-60 kata) di bawahnya agar mudah dikutip mesin AEO.

---

## 2. Technical SEO & Core Web Vitals (Next.js Metadata API)
* **Metadata API Next.js:** Kelola `title`, `description`, `openGraph`, `twitter`, dan `canonical` secara eksplisit melalui `generateMetadata()`.
* **Sitemap & Robots.txt Otomatis:** Buat file `sitemap.ts` dan `robots.ts` di App Router.
* **Core Web Vitals Metric:**
  * **LCP (Largest Contentful Paint):** `< 2.5s` (Optimasi gambar `next/image`).
  * **CLS (Cumulative Layout Shift):** `< 0.1` (Tentukan dimensi aspek rasio kontainer).
  * **INP (Interaction to Next Paint):** `< 200ms` (Minimalisir eksekusi JavaScript berat di main thread).

---

## 3. Technical Writing & Dokumentasi (roadmap.sh/technical-writer)
* **Prinsip Kejelasan (Clarity & Precision):** Gunakan bahasa Indonesia/Inggris yang ringkas, tanpa frasa ambigu, terstruktur dengan poin-poin tebal.
* **Arsitektur Dokumentasi:** Pisahkan dokumen menjadi:
  * `PRD / Specifications` (Tujuan & Aturan Bisnis)
  * `Architecture Runbooks` (Petunjuk Teknis)
  * `API / Component Specs` (Dokumentasi Komponen)
