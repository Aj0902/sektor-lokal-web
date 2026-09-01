# PRD v3.0: Sektor Lokal Web — Mahakarya Editorial Edition

---

## 1. Visi & Tujuan Utama
Mengubah platform **Sektor Lokal Web** ([sektor-lokal-web](file:///c:/AI%20Challlenge/sektor-lokal-web)) menjadi mahakarya antarmuka web (Awwwards-Level Editorial Magazine) untuk mempresentasikan figur kebanggaan lokal (**Ferry Irwandi**) secara otentik, megah, dan berjiwa *Editorial Brutalism*.

**Prinsip Utama:** Tetap mempertahankan 100% pola dan 7 struktur bagian dari sketsa Canva pengguna tanpa mengubah urutan, namun menyempurnakan tata letak desktop, tipografi, tema, dan kerapian geometri visual.

---

## 2. 5 Pilar Koreksi & Hasil Riset UI/UX

### A. Tipografi Trinitas Presisi
* **Display Headline (Super Bold & Condensed):** **`Anton`** (Google Font) untuk judul-judul bab raksasa dan nama tokoh.
* **Editorial Sub-Header & Quote (Aksen Mentereng):** **`Playfair Display`** (Google Font - Italic & High Contrast Serif) untuk kutipan, aksen sub-judul, dan metadata.
* **Body Naskah (Keterbacaan Tinggi):** **`Plus Jakarta Sans`** untuk paragraf utama.

### B. Tata Letak Desktop 2-Kolom Asimetris (`max-w-7xl`)
* **Kolom Kiri (Sticky Profile Sidebar - 5/12 Grid):**
  * Logo `SEKTOR LOKAL` dengan aksen lantern merah.
  * Foto Ferry Irwandi berbingkai *dark slate/concrete*.
  * Headline `FERRY IRWANDI` + Red Accent Bar vertikal (`#e11d48`).
  * Subtitle *THE VOICES • DISRUPTOR • LITERASI KRITIS* (`Playfair Display`).
  * **Bar Ikon Sosmed Interaktif** (`YouTube`, `X/Twitter`, `Instagram`, `Spotify`, `Email`).
  * **Tombol Theme Switcher Toggle** (Light / Dark Mode).
* **Kolom Kanan (Fluid Content Feed - 7/12 Grid):**
  * Alur bagian *Tentang*, *Perjalanan Hidup (Timeline Track Red)*, *Discovery Karya (Accordion)*, *Artikel & Wawasan*, *Kata Warga*, dan *Produk Terkait*.

### C. Sakelar Tema Ganda (Dual Theme Switcher)
* **Light Newspaper Mode:** Warna dasar putih bersih (`#f8fafc`), teks hitam pekat, garis batas 2px tegas, aksen Merah Magenta (`#e11d48`).
* **Dark Brutalist Mode:** Warna dasar hitam slate bersih (`#090d16`), teks putih tajam, tanpa glow kotor.

### D. Deretan Ikon Sosmed di Bawah Nama
* Tombol-tombol ikon sosmed (`YouTube`, `X`, `Instagram`, `Spotify`, `Email`) dengan efek hover red glow yang presisi.

### E. Geometri Brutalis Bersih & Berseri
* Menghapus gradien radial kotor yang mengganggu penglihatan.
* Menggunakan garis batas struktur 2px tegas, Red Accent Bar 12px, dan ruang napas (*whitespace*) yang lega.

---

## 3. Spesifikasi 7 Struktur Bagian Tetap

1. **Header & Hero Cover Section:**
   * Logo `SEKTOR LOKAL` + Red Emblem + Hamburger Menu.
   * Frame Foto + Title `FERRY IRWANDI` (`Anton`) + Red Accent Bar + Subtitle (`Playfair Display`) + Bar Ikon Sosmed + Theme Toggle.
2. **Section Tentang:**
   * Title `TENTANG FERRY IRWANDI` (`Anton`).
   * 2 Paragraf naskah perkenalan.
   * Quote Block (`Playfair Display Italic`) dengan **Red Vertical Bar** di sebelah kanan.
3. **Perjalanan Hidup (Timeline):**
   * Title `PERJALANAN HIDUP`.
   * **Garis Trek Merah Vertikal** di sebelah kiri dengan *notch/node* hitam 4 Fase (*Abdi Negara, Titik Balik, Inisiatif Kolektif, Dampak Lapangan*).
4. **Discovery Karya (Accordion List):**
   * Title `DISCOVERY KARYA`.
   * Accordion list berpendar border merah + deskripsi + tombol **`🔗 Link`**.
5. **Artikel & Wawasan:**
   * Title `ARTIKEL & WAWASAN`.
   * Red outline cards + tombol **`🔗 Link`** + Animated Loading Spinner.
6. **Kata Warga (Testimonials):**
   * Quotes & pandangan warga/tokoh lain tentang Ferry Irwandi (Gita Wirjawan, Baskara Putra, Warga Akar Rumput).
7. **Produk Terkait & Dukungan:**
   * Malaka Project, Beasiswa Warga, dan Merchandise Resmi.

---

## 4. Rencana Eksekusi Teknis
* Framework: Next.js 15 (App Router) + React 19 + Tailwind CSS + Framer Motion.
* Font Loading: `@import` Google Fonts (`Anton`, `Playfair Display`, `Plus Jakarta Sans`).
* Repositori GitHub: `https://github.com/Aj0902/sektor-lokal-web`
* Deployment Target: Vercel.
