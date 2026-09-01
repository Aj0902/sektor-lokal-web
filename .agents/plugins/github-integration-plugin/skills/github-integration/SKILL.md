---
name: github-integration
description: Expert integration patterns for GitHub, including GitHub CLI automation, Git workflows, GitHub Actions, Vercel auto-deploy hooks, and repository management.
---

# GitHub & Deployment Automation Plugin Skill (v2.0)

Runbook ini mencakup manajemen repositori GitHub, alur kerja Git yang rapi, otomatisasi GitHub CLI (`gh`), serta integrasi CI/CD otomatis dengan Vercel.

---

## 1. Alur Kerja Repositori & Git Standard
* **Struktur Branching:**
  * `main` / `master` ➔ Production Branch (Otomatis me-trigger deployment Vercel Production).
  * `feature/*` atau `dev` ➔ Branch pengembangan (Otomatis me-trigger Vercel Preview Deployment).
* **Pesan Commit yang Rapi (Conventional Commits):**
  * `feat: ...` ➔ Penambahan fitur baru.
  * `fix: ...` ➔ Perbaikan bug.
  * `style: ...` ➔ Perubahan tampilan/UI.
  * `docs: ...` ➔ Dokumentasi.

---

## 2. Otomatisasi GitHub CLI (`gh`)
Gunakan GitHub CLI untuk membuat dan mengelola repositori secara instan dari terminal:
* **Membuat Repositori Baru:**
  ```bash
  gh repo create sektor-lokal-web --public --source=. --remote=origin --push
  ```
* **Status Deployment Vercel:**
  Setiap kali `git push origin main` dieksekusi, Vercel akan membaca commit dari GitHub dan membangun aplikasi secara otomatis dalam beberapa detik.

---

## 3. Keamanan & Kebersihan Repositori
* **File `.gitignore` Wajib:**
  ```text
  node_modules/
  .next/
  .env.local
  .env*.local
  *.log
  .DS_Store
  ```
* **Penanganan Kredensial:** DILARANG KERAS meng-commit token API atau Kunci Rahasia ke GitHub. Selalu gunakan Vercel Environment Variables.
