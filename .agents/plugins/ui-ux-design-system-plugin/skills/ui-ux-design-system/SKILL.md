---
name: ui-ux-design-system
description: Deep-web runbook for Material Design 3 (M3) Dynamic Colors, Tailwind CSS v4 Container Queries, Native View Transitions API, and Dribbble Badass Glassmorphism UI Aesthetics.
---

# UI/UX & Badass Design System Architecture Skill (v2.0 - Deep Edition)

Runbook ini berisi **rahasia tingkat dalam (Deep Web Level)** untuk merancang antarmuka Next.js 15 yang **super-cadas, non-generik, berestetika tinggi (Dribbble/Material Design 3), dan berkinerja ekstrim**.

---

## 1. Native View Transitions API (React 19 & Next.js 15)
* **Zero-Library Morphing Animation:** Manfaatkan fitur native View Transitions browser tanpa perpustakaan animasi berat.
* **Shared Element Morphing:** Sematkan properti CSS `view-transition-name: figure-card-[id]` pada elemen kartu agar dapat beranimasi *morph* mulus menjadi halaman detail profil tanpa *jank*.

---

## 2. CSS Container Queries (Tailwind CSS v4 `@container`)
* **Component-Level Responsiveness:** Jangan gunakan viewport media query (`md:`, `lg:`) untuk komponen terisolasi. Gunakan `@container` agar kartu profil beradaptasi dengan lebar kontainer induknya.
  ```css
  .card-container { container-type: inline-size; }
  @container (min-width: 400px) {
    .figure-card { display: grid; grid-template-columns: 1fr 2fr; }
  }
  ```

---

## 3. Material Design 3 (M3) Dynamic Color Tokens & Tailwind v4
* **Dynamic Seed Palette:** Gunakan paket `@material/material-color-utilities` untuk mengekstrak palet warna tonal (Primary, Secondary, Tertiary, Surface Container) dari satu warna benih (*seed color*).
* **CSS Custom Property Injection:** Injeksi palet ke dalam `globals.css` dan petakan ke Tailwind v4 `@theme`.

---

## 4. Dribbble-Level Badass Glassmorphism
* **Multilayer Background Depth:** `#0b0f19` dengan gradien radial *glowing neon teal/indigo* di latar belakang.
* **Glass Card Formula:**
  ```css
  background: rgba(17, 24, 39, 0.65);
  backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  ```
