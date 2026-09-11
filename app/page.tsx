'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Compass, Sparkles, BookOpen, Layers, Radio, ShieldCheck, Tag } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function HomePage() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const laciList = [
    { num: '01', name: 'Penjaga Nalar', desc: 'Jejak nalar kritis, jurnalisme investigasi, dan uji logika.', count: '10 Warga', color: 'border-l-4 border-l-[#E11D48]' },
    { num: '02', name: 'Penyelamat Bumi', desc: 'Konservasi rimba leuser, daur ulang sirkular, & mikrohidro desa.', count: '10 Warga', color: 'border-l-4 border-l-[#10B981]' },
    { num: '03', name: 'Pembangun Sistem', desc: 'Internet rakyat, paten tomografi 4D, civic tech, & AI lokal.', count: '10 Warga', color: 'border-l-4 border-l-[#3B82F6]' },
    { num: '04', name: 'Pejuang Akar Rumput', desc: 'Perlindungan tanah adat, rumah sakit apung, & advokasi tani.', count: '10 Warga', color: 'border-l-4 border-l-[#F59E0B]' },
    { num: '05', name: 'Arsitek Usaha Mandiri', desc: 'Sepeda bambu, wastra lontar, cokelat artisan, & kriya kulit ceker.', count: '10 Warga', color: 'border-l-4 border-l-[#EC4899]' },
    { num: '06', name: 'Perawat Jiwa & Rasa', desc: 'Musik kontemplatif, sastra kesunyian, sinema, & empati warga.', count: '10 Warga', color: 'border-l-4 border-l-[#8B5CF6]' },
    { num: '07', name: 'Penjaga Tawa', desc: 'Komedi satir sosial, penelusuran absurditas, & tawa akal sehat.', count: '10 Warga', color: 'border-l-4 border-l-[#E11D48]' },
    { num: '08', name: 'Pencerah Generasi', desc: 'Ruang belajar alternatif, literasi sains desa, & beasiswa komunitas.', count: '10 Warga', color: 'border-l-4 border-l-[#06B6D4]' },
    { num: '09', name: 'Duta Talenta', desc: 'Karya rekayasa sains dunia, sinema internasional, & riset biomedis.', count: '10 Warga', color: 'border-l-4 border-l-[#F97316]' },
    { num: '10', name: 'Panggung Ekspresi', desc: 'Kanal kreator bermartabat, pengarsipan budaya, & eksplorasi publik.', count: '10 Warga', color: 'border-l-4 border-l-[#E11D48]' }
  ];

  const featuredBrand = {
    name: 'Spedagi Bamboo',
    category: 'Kriya & Mobilitas Hijau',
    origin: 'Kandangan, Temanggung',
    founder: 'Singgih S. Kartono',
    highlight: 'Pelopor sepeda bambu lestari berstandar uji keselamatan internasional yang merevitalisasi ekonomi dusun.',
    spec: 'Material: Bambu Petung Pilihan // Standar Uji DIN Plus Jerman'
  };

  const supportingBrands = [
    { name: 'JAVARA Indigenous', category: 'Pangan Pusaka', origin: 'Bekasi / Jakarta', founder: 'Helianti Hilman', highlight: 'Kurasi benih pangan pusaka petani lokal ke 30+ negara.' },
    { name: 'Du\'Anyam', category: 'Kriya & Wirausaha Sosial', origin: 'Flores Timur, NTT', founder: 'Azalea Ayuningtyas', highlight: 'Anyaman lontar bernilai ekonomi tinggi untuk nutrisi ibu.' },
    { name: 'Brodo Footwear', category: 'Manufaktur Sepatu', origin: 'Bandung, Jawa Barat', founder: 'Yukka Harsono', highlight: 'Modernisasi sentra manufaktur kulit Cibaduyut.' },
    { name: 'CTech Labs', category: 'Deep-Tech Medis', origin: 'Tangerang, Banten', founder: 'Dr. Warsito P.', highlight: 'Pemindai tomografi volumetrik 4D tercepat di dunia.' },
    { name: 'Kata.ai', category: 'Kecerdasan Buatan', origin: 'Jakarta', founder: 'Irzan Raditya', highlight: 'Infrastruktur NLP dialek informal nusantara pertama.' }
  ];

  const articles = [
    {
      title: 'Benteng Nalar Kritis di Tengah Gempuran Distorsi Algoritma',
      tag: 'ETIKA & NALAR',
      date: '2026 // EDISI 04',
      readTime: '6 Menit Baca',
      desc: 'Skeptisisme metodis adalah instrumen pertahanan diri paling esensial saat linimasa dibanjiri rekayasa informasi dan polarisasi buatan.',
      slug: 'analisis-kritis-literasi-keuangan',
      isLead: true
    },
    {
      title: 'Kedaulatan Pangan Akar Rumput: Melawan Monokultur, Menjaga Benih',
      tag: 'KRISIS EKOLOGIS',
      date: '2026 // EDISI 03',
      readTime: '8 Menit Baca',
      desc: 'Komunitas adat dan petani gurem adalah penjaga terakhir keanekaragaman hayati nusantara dari ancaman monopoli benih.',
      slug: 'kedaulatan-pangan-bukan-gimik',
      isLead: false
    },
    {
      title: 'Membongkar Mental Inlander: Mengapa Karya Dusun Bisa Unggul',
      tag: 'KEDAULATAN BUDAYA',
      date: '2026 // EDISI 02',
      readTime: '7 Menit Baca',
      desc: 'Kualitas kelas dunia lahir bukan dari meniru megapolitan, melainkan dari kedalaman rasa dan kesetiaan pada bahan baku lokal.',
      slug: 'ilusi-kemajuan-di-balik-stigma-lokal',
      isLead: false
    }
  ];

  return (
    <div className={`min-h-screen font-sans antialiased selection:bg-[#E11D48] selection:text-white ${isDarkMode ? 'bg-[#07090E] text-[#F5EFEB]' : 'bg-[#F8F5EE] text-[#0A0E1A]'}`}>
      <Navbar isDarkMode={isDarkMode} onToggleDarkMode={() => setIsDarkMode(!isDarkMode)} />

      <main className="relative">
        
        {/* ═══════════════════════════════════════════════════════════════
            SECTION 1: HERO VIEWPORT (Anti-Slop Split Magazine)
            ═══════════════════════════════════════════════════════════════ */}
        <section className={`relative min-h-[90vh] lg:min-h-[92vh] flex items-center border-b transition-colors ${
          isDarkMode ? 'border-white/10 bg-[#07090E]' : 'border-black/10 bg-[#F8F5EE]'
        }`}>
          <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              
              {/* Left Column (7 Cols): Headline, Editorial Subtext, Primary Actions */}
              <div className="lg:col-span-7 space-y-8">
                
                {/* Tactical Telemetry Badge */}
                <div className="inline-flex items-center gap-2.5 px-3 py-1.5 border border-[#E11D48]/30 bg-[#E11D48]/5 text-[#E11D48] font-mono text-xs font-bold uppercase tracking-widest">
                  <Radio className="w-3.5 h-3.5 animate-pulse" />
                  <span>RADAR KURASI NASIONAL // DOKUMEN 2026</span>
                </div>

                {/* Macro Headline */}
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-display uppercase tracking-tight leading-[0.92] text-inherit">
                  MENEMUKAN APA YANG TUMBUH DARI TANAH SENDIRI
                </h1>

                {/* Literary Subtext with Descender Safe Spacing */}
                <p className={`font-editorial italic text-lg sm:text-xl md:text-2xl leading-relaxed descender-safe border-l-2 border-[#E11D48] pl-5 max-w-2xl ${
                  isDarkMode ? 'text-[#8E95A5]' : 'text-[#475569]'
                }`}>
                  Dokumentasi terbuka atas 100 figur, karya orisinil, dan gagasan berdaulat di Indonesia, sebelum semuanya hilang ditelan riuh linimasa.
                </p>

                {/* Primary Single-Line CTAs */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Link 
                    href="/arsip/warga" 
                    className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#E11D48] text-white font-mono text-xs font-bold uppercase tracking-widest hover:bg-[#BE123C] transition-all tactile-btn"
                  >
                    <span>JELAJAHI 100 WARGA</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link 
                    href="/arsip/brand" 
                    className={`inline-flex items-center gap-2.5 px-6 py-3.5 border font-mono text-xs font-bold uppercase tracking-widest transition-all tactile-btn ${
                      isDarkMode 
                        ? 'border-white/20 text-white hover:border-[#E11D48] hover:text-[#E11D48]' 
                        : 'border-black/20 text-[#0A0E1A] hover:border-[#E11D48] hover:text-[#E11D48]'
                    }`}
                  >
                    <span>BRAND MANDIRI</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

              </div>

              {/* Right Column (5 Cols): Archival Telemetry Radar Card */}
              <div className="lg:col-span-5">
                <div className={`p-8 border relative overflow-hidden transition-all ${
                  isDarkMode 
                    ? 'bg-[#0E131F] border-white/10' 
                    : 'bg-white border-black/10'
                }`}>
                  
                  {/* Card Header */}
                  <div className="flex justify-between items-center pb-6 border-b border-inherit/10 font-mono text-xs tracking-wider uppercase text-[#E11D48] font-bold">
                    <span>[ TELEMETRY KURASI // V.2.6 ]</span>
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E11D48] opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E11D48]" />
                    </span>
                  </div>

                  {/* Telemetry Metrics Grid */}
                  <div className="grid grid-cols-2 gap-6 py-6 border-b border-inherit/10">
                    <div>
                      <span className="font-display text-4xl sm:text-5xl text-inherit block leading-none">100</span>
                      <span className="text-[11px] font-mono uppercase tracking-widest text-[#8E95A5] mt-1 block">Warga Terdaftar</span>
                    </div>
                    <div>
                      <span className="font-display text-4xl sm:text-5xl text-inherit block leading-none">10</span>
                      <span className="text-[11px] font-mono uppercase tracking-widest text-[#8E95A5] mt-1 block">Laci Kurasi</span>
                    </div>
                    <div>
                      <span className="font-display text-4xl sm:text-5xl text-inherit block leading-none">200</span>
                      <span className="text-[11px] font-mono uppercase tracking-widest text-[#8E95A5] mt-1 block">Inisiatif & Produk</span>
                    </div>
                    <div>
                      <span className="font-display text-4xl sm:text-5xl text-[#E11D48] block leading-none">100%</span>
                      <span className="text-[11px] font-mono uppercase tracking-widest text-[#8E95A5] mt-1 block">Akses Terbuka</span>
                    </div>
                  </div>

                  {/* Curated Statement */}
                  <div className="pt-6 space-y-4">
                    <p className={`text-xs font-sans leading-relaxed ${isDarkMode ? 'text-[#8E95A5]' : 'text-[#64748B]'}`}>
                      Setiap profil dikurasi secara independen melalui 6 tahap verifikasi rekam jejak, kedaulatan karya, dan integritas nilai tanpa titipan komersial.
                    </p>
                    <Link 
                      href="/manifesto" 
                      className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#E11D48] hover:underline"
                    >
                      BACA MANIFESTO KAMI <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            SECTION 2: KATALOG 10 LACI (Asymmetric Archival Bento Grid)
            ═══════════════════════════════════════════════════════════════ */}
        <section className={`py-24 px-6 md:px-12 border-b transition-colors ${
          isDarkMode ? 'border-white/10 bg-[#0B0F19]' : 'border-black/10 bg-[#F4EFE6]'
        }`}>
          <div className="max-w-7xl mx-auto">
            
            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-inherit/10">
              <div>
                <span className="font-mono text-xs font-bold text-[#E11D48] tracking-widest uppercase block mb-2">
                  KLASIFIKASI MATRIKS
                </span>
                <h2 className="text-3xl md:text-5xl font-display uppercase tracking-tight text-inherit">
                  10 LACI KURASI WARGA LOKAL
                </h2>
              </div>
              <Link 
                href="/arsip/warga" 
                className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-[#E11D48] hover:underline shrink-0"
              >
                BUKA DIREKTORI LENGKAP <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* 10 Laci Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {laciList.map((laci) => (
                <Link
                  key={laci.num}
                  href={`/arsip/warga?laci=${encodeURIComponent(laci.name)}`}
                  className={`group p-7 border relative overflow-hidden transition-all duration-200 tactile-btn ${
                    isDarkMode 
                      ? 'bg-[#0E131F] border-white/10 hover:border-[#E11D48]' 
                      : 'bg-white border-black/10 hover:border-[#E11D48]'
                  } ${laci.color}`}
                >
                  <div className="flex justify-between items-start mb-6">
                    <span className="font-display text-4xl md:text-5xl text-inherit/20 group-hover:text-[#E11D48] transition-colors leading-none">
                      {laci.num}
                    </span>
                    <span className="font-mono text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 border border-inherit/10 bg-inherit/5 text-[#E11D48]">
                      {laci.count}
                    </span>
                  </div>
                  <h3 className="font-display text-xl uppercase tracking-tight text-inherit group-hover:text-[#E11D48] transition-colors mb-2">
                    {laci.name}
                  </h3>
                  <p className={`text-xs font-sans leading-relaxed ${isDarkMode ? 'text-[#8E95A5]' : 'text-[#64748B]'}`}>
                    {laci.desc}
                  </p>
                  <div className="mt-6 flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-widest text-[#E11D48] opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>LIHAT DAFTAR</span>
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </Link>
              ))}
            </div>

          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            SECTION 3: BRAND SHOWCASE (Asymmetric Featured + Grid)
            ═══════════════════════════════════════════════════════════════ */}
        <section className={`py-24 px-6 md:px-12 border-b transition-colors ${
          isDarkMode ? 'border-white/10 bg-[#07090E]' : 'border-black/10 bg-[#F8F5EE]'
        }`}>
          <div className="max-w-7xl mx-auto">
            
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-inherit/10">
              <div>
                <span className="font-mono text-xs font-bold text-[#E11D48] tracking-widest uppercase block mb-2">
                  KEDAULATAN PRODUKSI
                </span>
                <h2 className="text-3xl md:text-5xl font-display uppercase tracking-tight text-inherit">
                  BRAND & MANUFAKTUR MANDIRI
                </h2>
              </div>
              <Link 
                href="/arsip/brand" 
                className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-[#E11D48] hover:underline shrink-0"
              >
                LIHAT SEMUA BRAND <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Asymmetric Grid: 1 Big Featured Card + 5 Compact Tiles */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Featured Brand Spotlight (5 Cols) */}
              <div className={`lg:col-span-5 p-8 border flex flex-col justify-between relative overflow-hidden ${
                isDarkMode ? 'bg-[#0E131F] border-white/10' : 'bg-white border-black/10'
              }`}>
                <div className="space-y-6">
                  <div className="flex justify-between items-center text-[11px] font-mono tracking-wider uppercase text-[#E11D48] font-bold border-b border-inherit/10 pb-4">
                    <span>SOROTAN UTAMA</span>
                    <span>{featuredBrand.origin}</span>
                  </div>
                  <h3 className="text-3xl font-display uppercase tracking-tight text-inherit">
                    {featuredBrand.name}
                  </h3>
                  <p className={`text-sm font-sans leading-relaxed ${isDarkMode ? 'text-[#8E95A5]' : 'text-[#64748B]'}`}>
                    {featuredBrand.highlight}
                  </p>
                  <div className="p-4 border border-dashed border-[#E11D48]/30 bg-[#E11D48]/5 text-xs font-mono text-inherit">
                    {featuredBrand.spec}
                  </div>
                </div>
                <div className="pt-8 flex justify-between items-center border-t border-inherit/10 font-mono text-xs text-[#8E95A5] uppercase">
                  <span>Inisiator: {featuredBrand.founder}</span>
                  <span className="text-[#E11D48] font-bold">KRIYA HIJAU</span>
                </div>
              </div>

              {/* 5 Supporting Brands Grid (7 Cols) */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {supportingBrands.map((brand, idx) => (
                  <div 
                    key={idx} 
                    className={`p-6 border flex flex-col justify-between transition-all tactile-btn ${
                      isDarkMode 
                        ? 'bg-[#0E131F] border-white/10 hover:border-[#E11D48]' 
                        : 'bg-white border-black/10 hover:border-[#E11D48]'
                    }`}
                  >
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between items-center text-[10px] font-mono tracking-wider uppercase text-[#8E95A5] border-b border-inherit/10 pb-2">
                        <span>{brand.category}</span>
                        <span>{brand.origin}</span>
                      </div>
                      <h4 className="font-display text-xl uppercase tracking-tight text-inherit">
                        {brand.name}
                      </h4>
                      <p className={`text-xs font-sans leading-relaxed line-clamp-3 ${isDarkMode ? 'text-[#8E95A5]' : 'text-[#64748B]'}`}>
                        {brand.highlight}
                      </p>
                    </div>
                    <div className="text-[11px] font-mono uppercase text-[#8E95A5] border-t border-inherit/10 pt-3">
                      Oleh: {brand.founder}
                    </div>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            SECTION 4: RUANG REDAKSI & ESAI (Broadsheet Magazine Layout)
            ═══════════════════════════════════════════════════════════════ */}
        <section className={`py-24 px-6 md:px-12 border-b transition-colors ${
          isDarkMode ? 'border-white/10 bg-[#0B0F19]' : 'border-black/10 bg-[#F4EFE6]'
        }`}>
          <div className="max-w-7xl mx-auto">
            
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-inherit/10">
              <div>
                <span className="font-mono text-xs font-bold text-[#E11D48] tracking-widest uppercase block mb-2">
                  DISKURSUS & KRITIK
                </span>
                <h2 className="text-3xl md:text-5xl font-display uppercase tracking-tight text-inherit">
                  RUANG REDAKSI & ESAI INVESTIGASI
                </h2>
              </div>
              <Link 
                href="/artikel" 
                className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-[#E11D48] hover:underline shrink-0"
              >
                SEMUA TULISAN REDAKSI <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Broadsheet Columns */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Lead Article (7 Cols) */}
              <div className="lg:col-span-7">
                {articles.filter(a => a.isLead).map((art, idx) => (
                  <Link 
                    key={idx} 
                    href={`/artikel/${art.slug}`}
                    className={`group p-8 border block h-full flex flex-col justify-between transition-all tactile-btn ${
                      isDarkMode ? 'bg-[#0E131F] border-white/10 hover:border-[#E11D48]' : 'bg-white border-black/10 hover:border-[#E11D48]'
                    }`}
                  >
                    <div className="space-y-4">
                      <div className="flex justify-between items-center text-xs font-mono font-bold tracking-wider uppercase text-[#E11D48] border-b border-inherit/10 pb-3">
                        <span>{art.tag}</span>
                        <span>{art.readTime}</span>
                      </div>
                      <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-inherit group-hover:text-[#E11D48] transition-colors leading-snug">
                        {art.title}
                      </h3>
                      <p className={`text-sm font-sans leading-relaxed ${isDarkMode ? 'text-[#8E95A5]' : 'text-[#64748B]'}`}>
                        {art.desc}
                      </p>
                    </div>
                    <div className="mt-8 pt-4 border-t border-inherit/10 flex justify-between items-center font-mono text-xs">
                      <span className="text-[#8E95A5] uppercase">{art.date}</span>
                      <span className="text-[#E11D48] font-bold inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        BACA ESAI <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Secondary Articles (5 Cols) */}
              <div className="lg:col-span-5 space-y-6">
                {articles.filter(a => !a.isLead).map((art, idx) => (
                  <Link 
                    key={idx} 
                    href={`/artikel/${art.slug}`}
                    className={`group p-6 border block transition-all tactile-btn ${
                      isDarkMode ? 'bg-[#0E131F] border-white/10 hover:border-[#E11D48]' : 'bg-white border-black/10 hover:border-[#E11D48]'
                    }`}
                  >
                    <div className="flex justify-between items-center text-[11px] font-mono font-bold tracking-wider uppercase text-[#E11D48] mb-2">
                      <span>{art.tag}</span>
                      <span>{art.readTime}</span>
                    </div>
                    <h4 className="font-display text-lg uppercase tracking-tight text-inherit group-hover:text-[#E11D48] transition-colors mb-2 leading-snug">
                      {art.title}
                    </h4>
                    <p className={`text-xs font-sans leading-relaxed line-clamp-2 ${isDarkMode ? 'text-[#8E95A5]' : 'text-[#64748B]'}`}>
                      {art.desc}
                    </p>
                    <div className="mt-4 pt-3 border-t border-inherit/10 flex justify-between items-center font-mono text-[11px] text-[#8E95A5]">
                      <span>{art.date}</span>
                      <span className="text-[#E11D48] font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                        BACA <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>

            </div>

          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            SECTION 5: MANIFESTO PULL-QUOTE & TIP-OFF
            ═══════════════════════════════════════════════════════════════ */}
        <section className={`py-24 px-6 md:px-12 text-center transition-colors ${
          isDarkMode ? 'bg-[#07090E] text-[#F5EFEB]' : 'bg-[#F8F5EE] text-[#0A0E1A]'
        }`}>
          <div className="max-w-4xl mx-auto relative">
            <span className="editorial-quote-mark block mb-2 opacity-30 select-none">
              “
            </span>
            <h2 className="font-editorial italic text-2xl sm:text-4xl md:text-5xl leading-relaxed descender-safe mb-8">
              Terlalu sibuk melihat yang datang dari luar sampai lupa melihat apa yang tumbuh subur dari tanah sendiri.
            </h2>
            <div className="flex justify-center gap-4">
              <Link 
                href="/manifesto" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#E11D48] text-white font-mono text-xs font-bold uppercase tracking-widest hover:bg-[#BE123C] transition-all tactile-btn"
              >
                BACA MANIFESTO KAMI <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Section 6: Action Strip */}
        <section className="bg-[#E11D48] text-white py-14 px-6 md:px-12">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-tight">
                PUNYA KISAH INOVASI ATAU REKAM JEJAK WARGA?
              </h3>
              <p className="text-xs font-mono uppercase tracking-wider opacity-90 mt-1">
                Kirimkan tip-off dan usulan profil untuk kurasi redaksi Sektor Lokal.
              </p>
            </div>
            <Link 
              href="/kontak" 
              className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest px-7 py-3.5 bg-white text-[#E11D48] hover:bg-black hover:text-white transition-colors shrink-0 tactile-btn"
            >
              HUBUNGI REDAKSI <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

      </main>
      
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}
