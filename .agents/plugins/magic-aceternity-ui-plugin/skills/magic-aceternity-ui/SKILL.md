---
name: magic-aceternity-ui
description: Runbook for integrating Aceternity UI and Magic UI components into Next.js App Router using Framer Motion, Tailwind CSS, and cn utility.
---

# Aceternity UI & Magic UI Development Skill (v1.0)

Runbook ini berisi pustaka pola koding komponen animasi elit gabungan **Aceternity UI** dan **Magic UI** untuk membangun antarmuka Next.js yang bernilai estetika ekstrim dan interaktif.

---

## 1. Dependensi & Utility Terinstal
* **Animasi:** `framer-motion` (React 19 / Next.js 15 compatible).
* **Styling Merge:** `clsx` & `tailwind-merge` via `lib/utils.ts` (`cn()` helper).
* **Ikon:** `lucide-react`.

---

## 2. Komponen Utama Aceternity UI & Magic UI
* **Card Spotlight:** Kartu berpendar dinamis yang mengikuti pergerakan kursor mouse pengguna.
* **Border Beam:** Garis neon memutar di sekeliling kartu untuk sorotan utama (*hero focus*).
* **Meteors & Background Beams:** Animasi latar belakang partikel hujan meteor & sinar berkilau di kegelapan.
* **Text Generate & Typewriter Effect:** Efek animasi penulisan teks kata demi kata yang dramatis.
* **Wobble Card:** Kartu interaktif 3D yang miring mengikuti gerakan mouse (*3D tilt effect*).

---

## 3. Aturan Penggunaan Komponen
* Selalu cantumkan petunjuk `'use client'` di komponen beranimasi Framer Motion.
* Padukan komponen Aceternity UI dengan skema warna Material Design 3 (M3) & Glassmorphism `#05070c`.
