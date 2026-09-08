'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  FileText, 
  ShieldCheck, 
  Globe, 
  Cpu, 
  Database, 
  Scale, 
  CheckCircle, 
  ArrowRight,
  Download,
  Share2,
  Check
} from 'lucide-react';
import { motion } from 'framer-motion';
import ConstellationCanvas from '../../../components/ConstellationCanvas';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Breadcrumbs from '../../../components/Breadcrumbs';

export default function PolicyBriefPage() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    if (typeof navigator !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

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
            "@type": "TechArticle",
            "headline": "Policy Brief: Kedaulatan Data & Hak Cipta Komunitas Lokal di Era AI",
            "description": "Telaah kebijakan strategis tentang perlindungan ekspresi budaya, korpus linguistik daerah, dan kedaulatan data akar rumput Indonesia.",
            "author": {
              "@type": "Organization",
              "name": "Dewan Riset & Kebijakan Sektor Lokal"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Sektor Lokal",
              "url": "https://sektorlokal.id"
            },
            "datePublished": "2026-09-01"
          })
        }}
      />

      <ConstellationCanvas isDarkMode={isDarkMode} />

      <Navbar 
        isDarkMode={isDarkMode} 
        onToggleDarkMode={() => setIsDarkMode(!isDarkMode)} 
      />

      <main className="max-w-4xl mx-auto px-6 relative z-10 space-y-16 py-12 flex-1 w-full">
        
        {/* BREADCRUMBS */}
        <Breadcrumbs 
          items={[
            { label: 'Integritas & Etika', href: '/legal/terms' },
            { label: 'Policy Brief Kedaulatan' }
          ]} 
          isDarkMode={isDarkMode}
        />

        {/* HERO TITLE */}
        <section className="space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#E11D48]/30 bg-[#E11D48]/10 text-[#E11D48] text-xs font-mono font-bold tracking-widest uppercase">
              <FileText className="w-3.5 h-3.5" />
              <span>DOKUMEN KEBIJAKAN // PB-SEKTORLOKAL-2026-01</span>
            </div>

            <button
              onClick={handleCopyLink}
              className={`px-3 py-1.5 rounded-xl border text-xs font-mono font-bold flex items-center gap-1.5 transition shadow-sm ${
                isDarkMode ? 'border-white/10 text-[#EDE8DC] hover:border-[#E11D48]' : 'border-black/10 text-[#0A0E1A] hover:border-[#E11D48]'
              }`}
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Share2 className="w-3.5 h-3.5 text-[#E11D48]" />}
              <span>{copied ? 'LINK TERSALIN' : 'BAGIKAN BRIEF'}</span>
            </button>
          </div>

          <div className="space-y-4">
            <h1 className="text-3xl sm:text-5xl font-display uppercase tracking-tight leading-[0.98]">
              KEDAULATAN DATA, KEKAYAAN INTELEKTUAL KOMUNITAS, & PERLINDUNGAN BUDAYA LOKAL DI ERA KECERDASAN BUATAN
            </h1>

            <p className="font-editorial italic text-lg sm:text-xl text-[#E11D48] leading-relaxed">
              &ldquo;Tanah air ini bukan ladang data gratis bagi korporasi algoritma global. Kedaulatan digital bangsa harus berpijak pada perlindungan martabat warga dan hak cipta komunal.&rdquo;
            </p>
          </div>
        </section>

        {/* EXECUTIVE SUMMARY BOX */}
        <div className={`p-8 sm:p-10 rounded-3xl border space-y-4 ${cardClass}`}>
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#E11D48]">
            <ShieldCheck className="w-4 h-4" />
            <span>RINGKASAN EKSEKUTIF</span>
          </div>
          <p className="text-base sm:text-lg font-serif leading-relaxed text-justify">
            Kemunculan model kecerdasan buatan skala masif (LLM & Generative AI) telah memicu perampasan pengetahuan komunal (*data scraping*) tanpa atribusi dan tanpa kompensasi adil terhadap pencipta lokal. Dokumen ini merumuskan pandangan etis Sektor Lokal serta mengajukan kerangka perlindungan hukum atas warisan pengetahuan adat (*traditional knowledge*), korpus dialek nusantara, dan hasil karya cipta independen dari ancaman kolonisasi digital modern.
          </p>
        </div>

        {/* 4 PILAR KEBIJAKAN */}
        <article className="space-y-12 text-justify text-base sm:text-lg leading-relaxed">
          
          {/* PILAR 1 */}
          <section className="space-y-4">
            <div className="flex items-center gap-3 border-b pb-3 border-inherit/10">
              <span className="font-mono text-xs text-[#E11D48] font-bold">PILAR I //</span>
              <h2 className="text-2xl font-display uppercase tracking-tight">
                KEDAULATAN KORPUS BAHASA & PENGETAHUAN NUSANTARA
              </h2>
            </div>
            <p>
              Ratusan bahasa daerah dan dialek nusantara memiliki struktur filosofis dan nilai etika yang tidak dapat disederhanakan oleh mesin terjemahan komersial. Ketika pengembang AI global melatih model mereka menggunakan karya sastra, manuskrip, dan tuturan warga lokal tanpa izin etis, mereka berisiko memonopoli pemahaman budaya bangsa kita.
            </p>
            <p>
              <strong>Sikap Sektor Lokal:</strong> Kami menuntut kewajiban atribusi eksplisit (*Fair Attribution*) dan pembentukan repositori data pengetahuan terbuka berbasis komunitas yang dikelola di bawah naungan kedaulatan warga, bukan sekadar menjadi aset proprietary pemodal ventura luar negeri.
            </p>
          </section>

          {/* PILAR 2 */}
          <section className="space-y-4">
            <div className="flex items-center gap-3 border-b pb-3 border-inherit/10">
              <span className="font-mono text-xs text-[#E11D48] font-bold">PILAR II //</span>
              <h2 className="text-2xl font-display uppercase tracking-tight">
                PERLINDUNGAN HAK CIPTA KOMUNAL MASYARAKAT ADAT
              </h2>
            </div>
            <p>
              Motif kain tenun tradisional, varietas benih tanaman lokal, ramuan obat leluhur, dan arsitektur vernakular adalah hak cipta komunal yang diwariskan turun-temurun. Praktik biopiracy dan pembajakan desain etnik oleh rumah mode global tanpa kompensasi kepada perajin lokal merupakan bentuk eksploitasi kultural nyata.
            </p>
            <p>
              <strong>Sikap Sektor Lokal:</strong> Hak ulayat intelektual harus diakui setara dengan hak cipta individual. Setiap komersialisasi desain dan kearifan lokal wajib melalui persetujuan bebas tanpa paksaan (*Free, Prior, and Informed Consent - FPIC*) serta skema bagi hasil adil langsung ke kas perbendaharaan desa/komunitas penenun.
            </p>
          </section>

          {/* PILAR 3 */}
          <section className="space-y-4">
            <div className="flex items-center gap-3 border-b pb-3 border-inherit/10">
              <span className="font-mono text-xs text-[#E11D48] font-bold">PILAR III //</span>
              <h2 className="text-2xl font-display uppercase tracking-tight">
                TRANSPARANSI ALGORITMA & PENETRASI EKONOMI MANDIRI
              </h2>
            </div>
            <p>
              Algoritma platform distribusi digital sering kali menerapkan kebijakan *pay-to-reach* yang mencekik merek lokal mandiri, sembari membanjiri beranda pengguna dengan produk impor subsidi harga murah (*predatory pricing*). 
            </p>
            <p>
              <strong>Sikap Sektor Lokal:</strong> Sektor Lokal menyediakan panggung direktori terbuka tanpa algoritma bayaran tersembunyi. Kami memperjuangkan transparansi jalur kurasi agar karya autentik anak negeri memiliki ruang bernapas yang setara untuk ditemukan oleh jutaan warga.
            </p>
          </section>

          {/* PILAR 4 */}
          <section className="space-y-4">
            <div className="flex items-center gap-3 border-b pb-3 border-inherit/10">
              <span className="font-mono text-xs text-[#E11D48] font-bold">PILAR IV //</span>
              <h2 className="text-2xl font-display uppercase tracking-tight">
                BUDAYA OPEN ACCESS & LISENSI KREATIF BERBASIS WARGA
              </h2>
            </div>
            <p>
              Ilmu pengetahuan dan nalar kritis tidak boleh disandera di balik paywall komersial yang eksklusif. Untuk memajukan peradaban, bahan ajar, esai reflektif, dan riset-riset dasar harus dapat diakses secara gratis oleh pelajar dan pemuda di pelosok tanah air.
            </p>
            <p>
              <strong>Sikap Sektor Lokal:</strong> Seluruh esai dan kurasi dalam Sektor Lokal diterbitkan dengan semangat lisensi terbuka (Creative Commons Attribution-NonCommercial) untuk mendorong edukasi publik yang merata.
            </p>
          </section>

        </article>

        {/* CALLOUT ACTION BOX */}
        <section className={`p-8 sm:p-10 rounded-3xl border text-center space-y-6 ${cardClass}`}>
          <div className="space-y-2">
            <h3 className="text-2xl font-display uppercase tracking-tight">
              INGIN MENJADI MITRA ADVOKASI KEDAULATAN DATA?
            </h3>
            <p className={`text-xs sm:text-sm max-w-xl mx-auto ${mutedText}`}>
              Kami menyambut akademisi, peneliti hukum siber, organisasi masyarakat sipil, dan pakar teknologi untuk berjejaring bersama Dewan Riset Sektor Lokal.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link 
              href="/kontak"
              className="px-6 py-3 bg-[#E11D48] hover:bg-[#BE123C] text-white text-xs font-mono font-bold uppercase rounded-xl shadow-md shadow-[#E11D48]/30 transition"
            >
              <span>Hubungi Tim Riset Kebijakan</span>
            </Link>
            <Link 
              href="/manifesto"
              className="px-6 py-3 border border-inherit/20 hover:border-[#E11D48] text-inherit text-xs font-mono font-bold uppercase rounded-xl transition"
            >
              <span>Baca Manifesto Sektor Lokal</span>
            </Link>
          </div>
        </section>

      </main>

      <Footer isDarkMode={isDarkMode} />

    </div>
  );
}
