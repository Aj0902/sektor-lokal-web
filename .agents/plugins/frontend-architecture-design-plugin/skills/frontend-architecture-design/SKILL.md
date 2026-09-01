---
name: frontend-architecture-design
description: Runbook for Frontend Roadmap, Software Design & Architecture (roadmap.sh), Atomic Design, SOLID principles for React, and enterprise-grade component patterns.
---

# Frontend Software Design & Architecture Skill

Skill ini berisi acuan standar dari **roadmap.sh (Frontend & Software Design Architecture)** untuk membangun basis kode Next.js yang rapi, *scalable*, teruji, dan siap menampung skalabilitas tinggi.

---

## 1. Arsitektur Komponen (Atomic Design)
Pisahkan struktur komponen React di `src/components/` menjadi:
* **Atoms:** Komponen paling dasar tanpa logika bisnis (Button, Badge, Input, Typography, Icon).
* **Molecules:** Gabungan beberapa Atoms (SearchBar, FilterDropdown, ProfileCardHeader).
* **Organisms:** Komponen kompleks pembentuk fitur (FigureCard, FilterBar, NavigationHeader).
* **Templates / Layouts:** Struktur kerangka halaman (DashboardShell, GridContainer).

---

## 2. Prinsip SOLID untuk React & Next.js
* **Single Responsibility Principle (SRP):** Satu komponen hanya memiliki 1 alasan untuk berubah. Pisahkan logika data fetching (Server Component/Custom Hooks) dari komponen presentasional visual.
* **Open/Closed Principle (OCP):** Komponen harus dapat diperluas (*open for extension*) via `props`/`children` tanpa mengubah kode internalnya (*closed for modification*).
* **Dependency Inversion:** Gunakan abstraksi API client dan provider context alih-alih ketergantungan langsung.
