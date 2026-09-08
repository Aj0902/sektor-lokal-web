# Walkthrough: Ekosistem Web Sektor Lokal (Sitemap & Arsitektur Lengkap)

Platform web **Sektor Lokal** telah berhasil dibangun dan dikompilasi 100% lulus produksi (`next build` lulus tanpa error). Seluruh arsitektur informasi, filosofi pemisahan desk warga & brand mandiri, ruang redaksi independen, serta standar integritas hukum telah terpasang secara harmonis dan siap diindeks oleh mesin pencari maupun sistem kecerdasan buatan (*AEO/LLM-Ready*).

---

## 1. Peta Rute & Arsitektur Situs (Sitemap & Hierarchy)

| Rute / Path | Nama Halaman | Fungsi & Karakteristik | Status Build |
| :--- | :--- | :--- | :--- |
| `/` | **Radar Utama (Home)** | Hero naratif, Hook 6-seksi, CTA Manifesto, CTA Arsip Warga, CTA Brand Lokal, CTA Artikel, dan Kontak | `Prerendered (Static)` |
| `/arsip` | **Hub Discovery Arsip** | Gerbang ganda *(Dual-Gateway)* yang memisahkan dan mengarahkan pengunjung ke Warga Lokal atau Brand Lokal | `Prerendered (Static)` |
| `/arsip/warga` | **Katalog 100 Warga Lokal** | Direktori 100 tokoh humaniora lintas 10 Laci Peradaban dengan switcher filter laci dan pencarian instan | `Prerendered (Static)` |
| `/arsip/brand` | **Direktori Brand Lokal Mandiri** | Kurasi jenama mandiri nusantara (Spedagi, Javara, Du'Anyam, Brodo, Kata.ai, dll.) dengan tautan relasi langsung ke profil *Founder* | `Prerendered (Static)` |
| `/manifesto` | **Manifesto Jiwa Raga Bangsa** | Dokumen sikap 3 babak mengenai kedaulatan lokal, penolakan distorsi, dan prinsip *"Semua adalah Warga"* | `Prerendered (Static)` |
| `/artikel` | **Ruang Redaksi & Esai** | Kompilasi esai kritis dan wacana kebangsaan mandiri (di luar profil terafiliasi) dengan filter topik dan waktu baca | `Prerendered (Static)` |
| `/artikel/[slug]` | **Pembaca Esai Editorial** | Mode baca esai jernih berbalut tipografi editorial Tempo/Narasi, pull-quotes, dan Schema.org `NewsArticle` | `Dynamic / SSG` |
| `/profil/[slug]` | **Berkas Profil Warga** | Halaman profil individu 100 tokoh dengan 7 seksi kanon, audio dossier, galeri, dan Schema.org `Person` + `hasOfferCatalog` | `SSG / Dynamic` |
| `/kontak` | **Ruang Dialog, Kolaborasi & Tip-Off** | 4 kanal komunikasi (Kolaborasi Strategis, Nominasi Warga/Brand, Tip-Off Terenkripsi, dan Media) | `Prerendered (Static)` |
| `/legal/kriteria-kurasi` | **Kriteria Kurasi 6-Tahap** | Protokol metodologi deduktif transparan, rasio Octalysis 60:40, dan ikrar garansi bebas titipan berbayar *(Zero Paid Placement)* | `Prerendered (Static)` |
| `/legal/policy-brief` | **Policy Brief Kedaulatan Data** | Telaah strategis perlindungan hak cipta komunal masyarakat adat, korpus bahasa daerah, dan kedaulatan data di era AI | `Prerendered (Static)` |
| `/legal/terms` | **Syarat & Ketentuan** | Lisensi Creative Commons CC BY-NC 4.0, doktrin Fair Use, batasan tanggung jawab, dan yurisdiksi Indonesia | `Prerendered (Static)` |
| `/legal/privacy` | **Kebijakan Privasi** | Kebijakan *Privacy-by-Design*: nol monetisasi data, tanpa cookie pelacak iklan pihak ketiga, dan proteksi narasumber | `Prerendered (Static)` |
| `/robots.txt` & `/sitemap.xml` | **SEO & AEO Crawler Gateway** | Indexer otomatis untuk Google Search SGE, Perplexity, OpenAI Search, dan Claude | `Automated XML` |

---

## 2. Fitur Unggulan Antarmuka & Optimasi Mesin Pencari (AEO)

1. **Desain Dual-Mode Otentik (Dark / Light)**:
   - Partikel konstelasi merah `ConstellationCanvas` responsif.
   - Tipografi Anton & Playfair Display dengan aksen Crimson `#E11D48`.
   - Micro-interactions halus berbasis `framer-motion`.

2. **Graph Relasi Organik Brand ⇄ Warga**:
   - Setiap kartu Brand Lokal di `/arsip/brand` yang didirikan oleh tokoh terdaftar (seperti Singgih Susilo Kartono, Helianti Hilman, Irzan Raditya) memiliki tautan internal langsung ke profil Warga Lokal (`/profil/[slug]`), memperkuat *semantic link graph* internal tanpa memanipulasi skema basis data Supabase.

3. **Mesin Pengetahuan Terstruktur (Schema.org JSON-LD)**:
   - `WebSite` & `Organization` di halaman Root.
   - `CollectionPage` & `ItemList` di Direktori Warga, Brand, dan Artikel.
   - `Person`, `ProfilePage`, `sameAs`, dan `hasOfferCatalog` di Halaman Profil.
   - `NewsArticle` dan `TechArticle` di Esai Redaksi dan Policy Brief.

---

## 3. Hasil Pengujian & Verifikasi Build

```bash
> sektor-lokal-web@1.0.2 build
> next build

   ▲ Next.js 15.5.25
   - Environments: .env.local

   Creating an optimized production build ...
 ✓ Compiled successfully in 23.5s
   Skipping linting
   Checking validity of types ...
   Collecting page data ...
 ✓ Generating static pages (27/27)
   Finalizing page optimization ...
   Collecting build traces ...

Route (app)                                 Size  First Load JS
┌ ○ /                                    4.87 kB         158 kB
├ ○ /arsip                               3.04 kB         156 kB
├ ○ /arsip/brand                         5.69 kB         164 kB
├ ○ /arsip/warga                         3.95 kB         239 kB
├ ○ /artikel                             6.76 kB         165 kB
├ ƒ /artikel/[slug]                       5.4 kB         225 kB
├ ○ /kontak                              5.08 kB         158 kB
├ ○ /legal/kriteria-kurasi               4.22 kB         157 kB
├ ○ /legal/policy-brief                  4.38 kB         157 kB
├ ○ /legal/privacy                       3.39 kB         156 kB
├ ○ /legal/terms                         3.63 kB         157 kB
├ ○ /manifesto                            3.7 kB         157 kB
├ ● /profil/[slug]                       8.72 kB         231 kB
├ ○ /robots.txt                            136 B         103 kB
└ ○ /sitemap.xml                           136 B         103 kB
```

**Semua 27 rute statis & dinamis berhasil ter-generate dengan sempurna.**
