'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  FileCheck, 
  ShieldCheck, 
  Scale, 
  AlertCircle, 
  BookOpen, 
  ArrowRight 
} from 'lucide-react';
import ConstellationCanvas from '../../../components/ConstellationCanvas';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Breadcrumbs from '../../../components/Breadcrumbs';

export default function TermsPage() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const bgCanvas = isDarkMode ? 'particle-wave-dark text-[#EDE8DC]' : 'particle-wave-light text-[#0A0E1A]';
  const cardClass = isDarkMode ? 'spotlight-card-dark' : 'spotlight-card-light';
  const mutedText = isDarkMode ? 'text-[#8A93A8]' : 'text-[#64748B]';

  return (
    <div className={`min-h-screen ${bgCanvas} font-sans antialiased selection:bg-[#E11D48] selection:text-white relative flex flex-col justify-between`}>
      
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Syarat & Ketentuan Layanan Sektor Lokal",
            "description": "Ketentuan penggunaan platform, lisensi karya, dan tanggung jawab hukum Sektor Lokal.",
            "publisher": {
              "@type": "Organization",
              "name": "Sektor Lokal",
              "url": "https://sektorlokal.id"
            }
          })
        }}
      />

      <ConstellationCanvas isDarkMode={isDarkMode} />

      <Navbar 
        isDarkMode={isDarkMode} 
        onToggleDarkMode={() => setIsDarkMode(!isDarkMode)} 
      />

      <main className="max-w-4xl mx-auto px-6 relative z-10 space-y-12 py-12 flex-1 w-full">
        
        {/* BREADCRUMBS */}
        <Breadcrumbs 
          items={[
            { label: 'Integritas & Etika', href: '/legal/kriteria-kurasi' },
            { label: 'Syarat & Ketentuan' }
          ]} 
          isDarkMode={isDarkMode}
        />

        {/* HERO */}
        <section className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#E11D48]/30 bg-[#E11D48]/10 text-[#E11D48] text-xs font-mono font-bold tracking-widest uppercase">
            <FileCheck className="w-3.5 h-3.5" />
            <span>KESEPAKATAN PENGGUNAAN LAYANAN</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-display uppercase tracking-tight leading-tight">
            SYARAT & KETENTUAN PENGGUNAAN
          </h1>

          <p className={`text-xs font-mono ${mutedText}`}>
            BERLAKU EFEKTIF SEJAK: 1 SEPTEMBER 2026 • VERSI 2.4-PROD
          </p>
        </section>

        {/* SUMMARY CARD */}
        <div className={`p-6 sm:p-8 rounded-3xl border space-y-3 ${cardClass}`}>
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#E11D48] uppercase">
            <Scale className="w-4 h-4" />
            <span>PRINSIP DASAR PENGGUNAAN</span>
          </div>
          <p className="text-sm sm:text-base leading-relaxed text-justify">
            Dengan mengakses atau menjelajahi platform <strong>Sektor Lokal</strong> (sektorlokal.id), Anda menyatakan telah membaca, memahami, dan menyetujui untuk terikat dengan seluruh syarat dan ketentuan ini. Platform ini dikelola dengan semangat independensi jurnalistik, kedaulatan data warga, dan penguatan peradaban lokal nusantara.
          </p>
        </div>

        {/* ARTICLES OF TERMS */}
        <article className="space-y-10 text-sm sm:text-base leading-relaxed text-justify">
          
          <section className="space-y-3">
            <h2 className="text-xl font-display uppercase tracking-tight text-inherit">
              1. SIFAT DAN TUJUAN PLATFORM
            </h2>
            <p>
              Sektor Lokal adalah entitas riset publik, kurasi pengetahuan mandiri, dan direktori etis non-pemerintah. Kami menyajikan ulasan profil tokoh pergerakan, pemikir kebudayaan, inovator teknologi akar rumput (Warga Lokal), serta jenama mandiri yang berintegritas tinggi (Brand Lokal).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-display uppercase tracking-tight text-inherit">
              2. HAK KEKAYAAN INTELEKTUAL & LISENSI
            </h2>
            <p>
              Seluruh teks esai editorial orisinal, narasi dossier kurasi, dan analisis peradaban yang diproduksi oleh Tim Redaksi Sektor Lokal dilisensikan di bawah <strong>Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)</strong>. Anda dipersilakan menyalin, membagikan, dan mengutip isi esai kami dengan mencantumkan atribusi yang jelas ke <code>sektorlokal.id</code> serta tidak menggunakannya untuk tujuan komersialisasi langsung.
            </p>
            <p>
              Foto profil, logo jenama, dan rujukan karya pihak ketiga yang ditampilkan merupakan hak milik dari masing-masing pemilik hak cipta dan digunakan semata-mata di bawah doktrin <em>Fair Use</em> untuk keperluan dokumentasi jurnalistik, kurasi edukatif, dan apresiasi karya bangsa.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-display uppercase tracking-tight text-inherit">
              3. BATASAN TANGGUNG JAWAB (DISCLAIMER)
            </h2>
            <p>
              Informasi yang dihimpun dalam radar Sektor Lokal telah melalui verifikasi multi-saluran dan uji penapisan 6-tahap. Namun demikian, Sektor Lokal tidak bertindak sebagai perwakilan hukum, agen transaksi komersial, maupun penjamin finansial dari entitas/tokoh yang dikurasi. Segala hubungan transaksi bisnis antara pembaca dengan jenama eksternal merupakan tanggung jawab langsung para pihak terkait.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-display uppercase tracking-tight text-inherit">
              4. KANAL PENGADUAN & KOREKSI HAK JAWAB
            </h2>
            <p>
              Kami menjunjung tinggi akurasi data. Apabila terdapat data rekam jejak, kesalahan ejaan nama, atau klarifikasi faktual yang ingin diajukan oleh tokoh/pemilik jenama yang dikurasi, pengajuan hak koreksi dapat dikirimkan secara langsung melalui kanal <Link href="/kontak" className="text-[#E11D48] underline font-semibold">Ruang Dialog Redaksi</Link>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-display uppercase tracking-tight text-inherit">
              5. YURISDIKSI DAN HUKUM YANG BERLAKU
            </h2>
            <p>
              Syarat dan Ketentuan ini tunduk pada dan ditafsirkan berdasarkan hukum Negara Kesatuan Republik Indonesia. Segala perselisihan yang timbul akan diselesaikan secara musyawarah mufakat demi menjunjung tinggi etika keterbukaan informasi publik.
            </p>
          </section>

        </article>

        {/* RELATED LINKS */}
        <section className={`p-6 sm:p-8 rounded-3xl border flex flex-col sm:flex-row items-center justify-between gap-4 ${cardClass}`}>
          <div>
            <h3 className="font-display text-base uppercase">BACA JUGA KEBIJAKAN PRIVASI DATA</h3>
            <p className={`text-xs ${mutedText}`}>Pelajari bagaimana kami mengamankan dan melindungi privasi pengunjung.</p>
          </div>
          <Link 
            href="/legal/privacy"
            className="px-5 py-2.5 bg-[#E11D48] text-white text-xs font-mono font-bold uppercase rounded-xl hover:bg-[#BE123C] transition flex items-center gap-2 shrink-0"
          >
            <span>KEBIJAKAN PRIVASI</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </section>

      </main>

      <Footer isDarkMode={isDarkMode} />

    </div>
  );
}
