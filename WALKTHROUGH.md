# Walkthrough: Pembaruan Menyeluruh Naskah Discovery & Palet Obsidian-Ivory-Crimson

Pembaruan besar pada antarmuka dan naskah website **Sektor Lokal** telah berhasil diimplementasikan, diverifikasi melalui kompilasi produksi `next build` (27/27 rute sukses), dan ter-push ke repositori GitHub.

---

## 1. Pembaruan Palet Warna Visual (Obsidian, Ivory, & Deep Crimson)

| Token Warna | Nilai Heksadesimal | Peran & Karakteristik Desain |
| :--- | :--- | :--- |
| **Obsidian Black** | `#07090E` / `#0B0F17` / `#0E131F` | Fondasi gelap bertekstur pekat yang memberi kedalaman visual mewah, elegan, dan menenangkan. |
| **Ivory White** | `#F5EFEB` / `#EDE8DC` | Putih tulang lembut untuk struktur teks, kartu, dan elemen antarmuka agar tidak menyilaukan mata dan ramah pembacaan panjang (*long-form reading*). |
| **Deep Crimson Red** | `#E11D48` / `#BE123C` / `#9F1239` | Merah darah pekat dengan efek pendaran halus (*subtle glow* / `box-shadow: 0 0 25px rgba(225, 29, 72, 0.45)`) sebagai pusat energi visual yang merobek kegelapan dan memberikan impresi berkelas. |

---

## 2. Rangkuman Perubahan Naskah & Suara Editorial (Grounded Discovery)

1. **Homepage (Radar Utama - `/`)**:
   - **Headline:** `MENEMUKAN APA YANG TUMBUH DARI TANAH SENDIRI`
   - **Sub-headline:** *"Menemukan manusia, karya, dan ide yang tumbuh dari Indonesia — sebelum semuanya lewat begitu saja."*
   - **Tagline Payung:** *“Manifestasi jiwa raga bangsa dari sebutan lokal.”*
   - **Hook 5 Babak:** Mengarahkan pembaca untuk berhenti sejenak, melihat temuan nyata di sekitarnya, bukan mendengarkan pidato kelembagaan.

2. **Hub Discovery Arsip (`/arsip`)**:
   - **Headline:** `DUA PINTU UNTUK MENEMUKAN`
   - **Dua Pintu:** Memisahkan lensa manusia (*Warga Lokal: Series 001–100*) dan lensa karya (*Brand Lokal: Karya & Proses*).

3. **Katalog Warga Lokal (`/arsip/warga`)**:
   - **Headline:** `100 CERITA WARGA YANG LAYAK DITEMUKAN` *(Series 001–100 // 10 Laci Penemuan)*
   - **Kompas Copy:** *"Kamu mungkin belum pernah dengar namanya. Tapi kamu mungkin pernah merasakan dampak kerjanya."*
   - **Framing:** Menghilangkan ranking kompetisi, menegaskan pemerataan bahwa *"semua adalah warga"*.

4. **Direktori Brand Lokal Mandiri (`/arsip/brand`)**:
   - **Headline:** `KARYA & JENAMA YANG BERAKAR DI SINI`
   - **Framing:** Mengangkat kisah di balik produk: siapa petaninya, bagaimana bahannya dipanen secara lestari, dan mengapa produk ini memiliki alasan kuat untuk ada.

5. **Manifesto Jiwa Raga Bangsa (`/manifesto`)**:
   - **Prinsip:** *"Narasi boleh puitis, tetapi setiap kalimat besar segera disusul dengan pembuktian konkret yang membumi."*

6. **Ruang Redaksi & Esai (`/artikel`)**:
   - Variasi judul esai: Explanatory, Case-Study, Curiosity, dan Reflective.

7. **Ruang Dialog & Usulan (`/kontak`)**:
   - Gaya bahasa bersahabat untuk menyambut kolaborasi riset, usulan figur/brand dari warga, dan kanal tip-off rahasia.

---

## 3. Hasil Verifikasi & Tangkapan Layar

- **Build Status:** `next build` 100% lulus (27 static & dynamic routes).
- **GitHub Commit:** `d743f72` (`master`).
- **Tangkapan Layar Resolusi Tinggi (12 Halaman):** Tersedia di `sektor-lokal-web/screenshots/` dan artefak `curator_showcase.md`.
