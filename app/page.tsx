'use client';

import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Link as LinkIcon, 
  Loader2, 
  Sun, 
  Moon, 
  Youtube, 
  Twitter, 
  Instagram, 
  Mail, 
  Radio, 
  CheckCircle2, 
  ArrowUpRight,
  ArrowDown,
  ArrowUp,
  Share2,
  Sparkles,
  ShieldCheck,
  ChevronDown
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import ConstellationCanvas from '../components/ConstellationCanvas';

export default function MahakaryaEditorialPage() {
  // 1. Default to LIGHT MODE as requested
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copiedToast, setCopiedToast] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleShare = () => {
    if (typeof navigator !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopiedToast(true);
      setTimeout(() => setCopiedToast(false), 2500);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Luxury Color System (Deep Ink #0A0E17 & Warm Paper #FAF9F6)
  const bgClass = isDarkMode ? 'bg-[#0A0E17] text-[#F1F5F9]' : 'bg-[#FAF9F6] text-[#0F172A]';
  const cardClass = isDarkMode ? 'editorial-card-dark' : 'editorial-card-light';
  const subTextClass = isDarkMode ? 'text-neutral-400' : 'text-neutral-600';
  const mutedTextClass = isDarkMode ? 'text-neutral-500' : 'text-neutral-400';
  const dividerClass = isDarkMode ? 'border-white/[0.08]' : 'border-black/[0.08]';
  const quoteBgClass = isDarkMode ? 'bg-[#0E1424]/80 border-white/[0.08]' : 'bg-[#F4F2EE] border-stone-200/80';

  const karyaList = [
    {
      category: "INVESTIGASI FINANSIAL",
      title: "Serial Pembongkaran Skema Ponzi & Judi Digital",
      desc: "Menguliti secara ilmiah dan matematis modus di balik kejahatan finansial digital, robot trading ilegal, dan skema ponzi yang memiskinkan jutaan masyarakat rentan.",
      link: "https://youtube.com/@ferryirwandi"
    },
    {
      category: "LITERATUR & FILSAFAT",
      title: "Buku Prinsipal Ekonomi & Stoikisme Terapan",
      desc: "Karya literatur reflektif dan panduan praktis mengadopsi filsafat stoikisme serta penalaran sains modern untuk menghadapi krisis mentalitas dan ketidakpastian ekonomi.",
      link: "https://youtube.com/@ferryirwandi"
    },
    {
      category: "MEDIA KOLEKTIF INDEPENDEN",
      title: "Malaka Project — Platform Edukasi Warga",
      desc: "Platform edukasi independen yang memproduksi esai video berbobot tinggi mengenai filsafat, stoikisme, ekonomi mikro, dan kesadaran politik publik.",
      link: "https://malakaproject.id"
    },
    {
      category: "SOLIDARITAS PUBLIK",
      title: "Gerakan Beasiswa Kelas Warga Indonesia",
      desc: "Inisiatif penggalangan dana publik transparan dan gotong royong yang membiayai uang kuliah tunggal (UKT) puluhan mahasiswa daerah berprestasi dari keluarga prasejahtera.",
      link: "https://youtube.com/@ferryirwandi"
    }
  ];

  const artikelList = [
    {
      tag: "NALAR FINANSIAL",
      readTime: "6 min read",
      title: "Analisis Kritis Keuangan & Benteng Nalar Masyarakat",
      desc: "Ulasan mendalam mengenai pentingnya membangun nalar kritis sebagai garis pertahanan terakhir individu dari jeratan manipulasi finansial digital era algoritma.",
      link: "https://youtube.com/@ferryirwandi"
    },
    {
      tag: "FILSAFAT TERAPAN",
      readTime: "8 min read",
      title: "Stoikisme: Bukan Kepasrahan, Tapi Aksi Berkesadaran",
      desc: "Membedah esensi sejati filosofi stoikisme untuk memfokuskan energi pada hal-hal dalam kendali diri di tengah kebisingan dan krisis perkotaan modern.",
      link: "https://youtube.com/@ferryirwandi"
    }
  ];

  const kataWargaList = [
    {
      initials: "GW",
      nama: "Gita Wirjawan",
      peran: "Pendidik & Pengasuh Podcast Endgame",
      quote: "Ferry mampu mengemas analisis ekonomi dan diskursus sosial yang berat menjadi narasi yang sangat memikat, bernas, dan dicintai generasi muda."
    },
    {
      initials: "BP",
      nama: "Baskara Putra (Hindia)",
      peran: "Musisi & Penulis Lagu",
      quote: "Konsistensinya menyuarakan akal sehat di tengah riuhnya kebisingan internet memberikan ruang aman bagi anak muda yang haus akan kejernihan berpikir."
    },
    {
      initials: "RW",
      nama: "Rian (Mahasiswa Daerah)",
      peran: "Penerima Beasiswa Warga",
      quote: "Berkat edukasi Mas Ferry, keluarga kami terselamatkan dari jerat pinjol ilegal dan saya bisa melanjutkan studi sarjana dengan beasiswa warga."
    }
  ];

  const produkList = [
    {
      category: "LITERATUR",
      status: "Tersedia",
      title: "Jurnal & Buku Stoikisme Publik",
      desc: "Panduan bernalar kritis, diseksi bias kognitif, dan catatan refleksi harian bagi pemuda dalam mengambil keputusan hidup yang strategis.",
      action: "Lihat Buku"
    },
    {
      category: "MERCHANDISE",
      status: "Edisi Resmi",
      title: "Apparel Kolektif Malaka Project",
      desc: "Karya kurasi pakaian sebagai bentuk dukungan nyata terhadap kemandirian riset independen dan operasional edukasi Malaka Project.",
      action: "Dukung Malaka"
    },
    {
      category: "GERAKAN SOSIAL",
      status: "Aktif Berkelanjutan",
      title: "Dana Beasiswa Kelas Warga",
      desc: "Saluran donasi gotong royong terverifikasi untuk membiayai uang kuliah tunggal (UKT) mahasiswa daerah berprestasi di seluruh Indonesia.",
      action: "Salurkan Donasi"
    }
  ];

  return (
    <div className={`min-h-screen ${bgClass} font-sans selection:bg-rose-600 selection:text-white relative overflow-x-hidden`}>

      {/* RED CONSTELLATION WAVE PARTICLE CANVAS (ECIDNI BENCHMARK) */}
      <ConstellationCanvas isDarkMode={isDarkMode} />

      {/* TOP SCROLL PROGRESS BAR (HAIRLINE) */}
      <div 
        className="fixed top-0 left-0 h-[2px] bg-rose-600 z-50 transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* ========================================================= */}
      {/* HEADER / NAVIGATION (MINIMALIST & ELEGANT)                */}
      {/* ========================================================= */}
      <header className={`sticky top-0 z-40 backdrop-blur-md border-b transition-colors duration-300 ${
        isDarkMode ? 'bg-[#0A0E17]/85 border-white/[0.08]' : 'bg-[#FAF9F6]/85 border-black/[0.06]'
      }`}>
        <div className="max-w-5xl mx-auto px-6 sm:px-8 py-4 flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <span className="font-display text-2xl tracking-wide uppercase transition-colors group-hover:text-rose-600">
              SEKTOR LOKAL
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-rose-600" />
            <span className={`text-[11px] font-mono tracking-widest uppercase hidden sm:inline ${mutedTextClass}`}>
              Vol. 01 / 2026
            </span>
          </a>

          {/* Center Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-7 text-xs font-semibold uppercase tracking-wider">
            <a href="#tentang" className="hover:text-rose-600 transition-colors">Tentang</a>
            <a href="#perjalanan" className="hover:text-rose-600 transition-colors">Perjalanan</a>
            <a href="#karya" className="hover:text-rose-600 transition-colors">Karya</a>
            <a href="#artikel" className="hover:text-rose-600 transition-colors">Artikel</a>
            <a href="#kata-warga" className="hover:text-rose-600 transition-colors">Kata Warga</a>
            <a href="#produk" className="hover:text-rose-600 transition-colors">Dukungan</a>
          </nav>

          {/* Right Action: Share & Theme Switcher */}
          <div className="flex items-center gap-3">
            
            {/* Share Button */}
            <button
              onClick={handleShare}
              className={`px-3 py-1.5 rounded-lg border text-xs font-medium transition-all flex items-center gap-1.5 ${
                isDarkMode 
                  ? 'border-white/10 hover:border-white/20 bg-white/[0.02] text-neutral-300' 
                  : 'border-black/10 hover:border-black/20 bg-black/[0.02] text-neutral-700'
              }`}
              title="Salin Tautan Halaman"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{copiedToast ? 'Tersalin' : 'Bagikan'}</span>
            </button>

            {/* Theme Toggle Button */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 rounded-lg border transition-all flex items-center justify-center ${
                isDarkMode 
                  ? 'border-white/10 hover:border-white/20 text-neutral-300 hover:text-white bg-white/[0.02]' 
                  : 'border-black/10 hover:border-black/20 text-neutral-700 hover:text-black bg-black/[0.02]'
              }`}
              title="Ganti Mode Tampilan (Light / Dark)"
              aria-label="Toggle Theme"
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-neutral-800" />}
            </button>

            {/* Mobile Hamburger Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-lg border md:hidden transition-all ${
                isDarkMode ? 'border-white/10 text-neutral-300' : 'border-black/10 text-neutral-700'
              }`}
              aria-label="Menu Navigasi"
            >
              {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>

        </div>
      </header>

      {/* MOBILE MENU MODAL */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className={`fixed inset-x-0 top-[61px] z-30 p-6 flex flex-col space-y-4 text-lg font-display uppercase tracking-wider border-b md:hidden backdrop-blur-xl ${
              isDarkMode ? 'bg-[#0A0E17]/95 border-white/[0.08] text-white' : 'bg-[#FAF9F6]/95 border-black/[0.08] text-neutral-900'
            }`}
          >
            <a href="#tentang" onClick={() => setIsMenuOpen(false)} className="py-1 hover:text-rose-600 transition flex items-center justify-between">
              <span>01 // Tentang</span>
              <ArrowUpRight className="w-4 h-4 text-rose-600" />
            </a>
            <a href="#perjalanan" onClick={() => setIsMenuOpen(false)} className="py-1 hover:text-rose-600 transition flex items-center justify-between">
              <span>02 // Perjalanan Hidup</span>
              <ArrowUpRight className="w-4 h-4 text-rose-600" />
            </a>
            <a href="#karya" onClick={() => setIsMenuOpen(false)} className="py-1 hover:text-rose-600 transition flex items-center justify-between">
              <span>03 // Discovery Karya</span>
              <ArrowUpRight className="w-4 h-4 text-rose-600" />
            </a>
            <a href="#artikel" onClick={() => setIsMenuOpen(false)} className="py-1 hover:text-rose-600 transition flex items-center justify-between">
              <span>04 // Artikel & Wawasan</span>
              <ArrowUpRight className="w-4 h-4 text-rose-600" />
            </a>
            <a href="#kata-warga" onClick={() => setIsMenuOpen(false)} className="py-1 hover:text-rose-600 transition flex items-center justify-between">
              <span>05 // Kata Warga</span>
              <ArrowUpRight className="w-4 h-4 text-rose-600" />
            </a>
            <a href="#produk" onClick={() => setIsMenuOpen(false)} className="py-1 hover:text-rose-600 transition flex items-center justify-between">
              <span>06 // Produk Terkait</span>
              <ArrowUpRight className="w-4 h-4 text-rose-600" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ========================================================= */}
      {/* 2. CENTERED, BALANCED HERO PROFILE (1 VIEWPORT HEIGHT)    */}
      {/* ========================================================= */}
      <section className="min-h-[85vh] md:min-h-[90vh] flex flex-col justify-center items-center text-center px-6 sm:px-8 py-12 md:py-20 relative z-10">
        
        {/* Subtle Ambient Spotlight Glow Behind Hero */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full bg-rose-500/10 blur-[120px]" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto space-y-7 relative"
        >
          {/* Centered Profile Portrait with Glow Halo */}
          <div className="relative inline-block mx-auto group">
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full p-1.5 border border-rose-500/30 bg-gradient-to-b from-rose-500/20 to-transparent shadow-2xl relative overflow-hidden">
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80" 
                  alt="Ferry Irwandi — Potret Kebanggaan Warga" 
                  fill
                  sizes="(max-width: 768px) 128px, 160px"
                  priority
                  className="object-cover filter grayscale contrast-125 group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>
            </div>

            {/* Verified Badge Tag */}
            <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-black/80 backdrop-blur-md text-[10px] font-mono tracking-widest text-white border border-white/10 uppercase flex items-center gap-1 shadow-lg whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
              <span>Profil #001</span>
            </div>
          </div>

          {/* Name & Headline with Luxe Accent Bar */}
          <div className="space-y-3">
            <div className="flex items-center justify-center gap-3">
              <div className="red-accent-bar-luxe h-8 sm:h-12 shrink-0" />
              <h1 className="text-5xl sm:text-7xl md:text-8xl font-display uppercase tracking-tight text-inherit leading-[0.92]">
                FERRY IRWANDI
              </h1>
              <div className="red-accent-bar-luxe h-8 sm:h-12 shrink-0" />
            </div>

            {/* Subtitle in Playfair Display */}
            <p className="font-editorial italic text-lg sm:text-2xl text-rose-600 tracking-wide">
              The Voices • Disruptor • Literasi Kritis
            </p>
          </div>

          {/* Status & Impact Metrics Pill */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-mono">
            <div className={`px-3.5 py-1.5 rounded-full border ${dividerClass} ${isDarkMode ? 'bg-white/[0.02]' : 'bg-black/[0.02]'} flex items-center gap-1.5`}>
              <ShieldCheck className="w-3.5 h-3.5 text-rose-600" />
              <span className="font-semibold uppercase tracking-wider">Mainstream Disruptor</span>
            </div>
            <div className={`px-3.5 py-1.5 rounded-full border ${dividerClass} ${isDarkMode ? 'bg-white/[0.02]' : 'bg-black/[0.02]'} flex items-center gap-1.5`}>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span className={subTextClass}>Rp 10+ Miliar Dana Publik Terselamatkan</span>
            </div>
          </div>

          {/* Minimalist Social Profile Icons Row */}
          <div className="pt-2 flex items-center justify-center gap-3">
            {[
              { icon: Youtube, href: "https://youtube.com/@ferryirwandi", label: "YouTube" },
              { icon: Twitter, href: "https://twitter.com/ferryirwandi", label: "X" },
              { icon: Instagram, href: "https://instagram.com/ferryirwandi", label: "Instagram" },
              { icon: Radio, href: "https://open.spotify.com", label: "Podcast" },
              { icon: Mail, href: "mailto:contact@malakaproject.id", label: "Email" }
            ].map((soc, idx) => (
              <a
                key={idx}
                href={soc.href}
                target="_blank"
                rel="noreferrer"
                className={`w-11 h-11 rounded-xl border flex items-center justify-center transition-all ${
                  isDarkMode 
                    ? 'border-white/[0.08] hover:border-rose-500/50 hover:bg-rose-500/10 text-neutral-400 hover:text-white' 
                    : 'border-black/[0.08] hover:border-rose-500/50 hover:bg-rose-50 text-neutral-600 hover:text-rose-600'
                }`}
                title={soc.label}
              >
                <soc.icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          {/* Scroll Down Indicator Button */}
          <div className="pt-6">
            <a 
              href="#tentang" 
              className={`inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest ${mutedTextClass} hover:text-rose-600 transition-colors group`}
            >
              <span>Jelajahi Rekam Jejak</span>
              <ArrowDown className="w-3.5 h-3.5 animate-bounce group-hover:text-rose-600" />
            </a>
          </div>

        </motion.div>
      </section>

      {/* ========================================================= */}
      {/* FULL VERTICAL SCROLL EDITORIAL STREAM (MAX-W-4XL CENTERED) */}
      {/* ========================================================= */}
      <main className="max-w-4xl mx-auto px-6 sm:px-8 py-12 md:py-20 space-y-20 md:space-y-28 relative z-10">

        {/* --------------------------------------------------------- */}
        {/* SECTION 01: TENTANG (GABRIELLE DOLAN OPEN EDITORIAL)      */}
        {/* --------------------------------------------------------- */}
        <motion.section 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          id="tentang" 
          className="space-y-8"
        >
          <div className={`flex items-center justify-between border-b pb-4 ${dividerClass}`}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display uppercase tracking-tight text-inherit">
              Tentang Ferry Irwandi
            </h2>
            <span className={`font-mono text-xs tracking-widest ${mutedTextClass}`}>
              01 // BIOGRAFI
            </span>
          </div>

          <div className="space-y-5 text-base sm:text-lg leading-relaxed text-inherit/90 font-normal text-justify">
            <p>
              <strong className="text-rose-600 font-semibold text-xl font-display uppercase tracking-wide mr-1.5">
                Ferry Irwandi
              </strong> 
              adalah mantan aparatur sipil negara di lingkungan Kementerian Keuangan yang mengambil keputusan berani untuk melangkah keluar dari kenyamanan birokrasi demi mengabdikan nalar dan suaranya sebagai edukator publik independen, esais video, dan penggerak solidaritas warga.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-inherit/80">
              Melalui pendekatan komunikasi yang analitis, lugas, dan berbobot, ia konsisten membongkar kejahatan penipuan finansial serta menumbuhkan diskursus pemikiran kritis bagi jutaan generasi muda di tanah air.
            </p>
          </div>

          {/* Pull Quote Box with Red Luxe Bar */}
          <div className={`p-6 sm:p-8 rounded-2xl border flex items-stretch justify-between gap-6 relative ${quoteBgClass}`}>
            <div className="space-y-3">
              <blockquote className="font-editorial italic text-lg sm:text-xl leading-relaxed text-inherit">
                &ldquo;Berpikir kritis adalah benteng terakhir kebebasan individu di tengah gempuran skema penipuan dan kebodohan finansial.&rdquo;
              </blockquote>
              <p className="text-xs font-mono tracking-wider text-rose-600 uppercase">
                — Catatan Prinsipil Ferry Irwandi
              </p>
            </div>
            <div className="red-accent-bar-luxe shrink-0" />
          </div>

          {/* Minimalist Focus Tags */}
          <div className="flex flex-wrap gap-2 pt-1">
            {['Nalar Kritis', 'Stoikisme Terapan', 'Advokasi Publik', 'Riset Independen'].map((tag, i) => (
              <span key={i} className={`px-3 py-1 rounded-md text-xs font-medium border ${
                isDarkMode ? 'border-white/[0.08] bg-white/[0.02] text-neutral-300' : 'border-black/[0.08] bg-black/[0.02] text-neutral-700'
              }`}>
                #{tag}
              </span>
            ))}
          </div>
        </motion.section>

        {/* --------------------------------------------------------- */}
        {/* SECTION 02: PERJALANAN HIDUP (MINIMALIST TIMELINE)        */}
        {/* --------------------------------------------------------- */}
        <motion.section 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          id="perjalanan" 
          className="space-y-10"
        >
          <div className={`flex items-center justify-between border-b pb-4 ${dividerClass}`}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display uppercase tracking-tight text-inherit">
              Perjalanan Hidup
            </h2>
            <span className={`font-mono text-xs tracking-widest ${mutedTextClass}`}>
              02 // REKAM JEJAK
            </span>
          </div>

          {/* Minimalist Timeline Track */}
          <div className="relative pl-7 sm:pl-9 space-y-9">
            {/* Hairline Glowing Track Line */}
            <div className="absolute left-0 top-2 bottom-2 w-[2px] timeline-track-minimal" />

            {[
              {
                year: "2013 — 2020",
                phase: "Fase 01",
                title: "Abdi Negara (Kementerian Keuangan)",
                desc: "Mengabdi di Kementerian Keuangan Republik Indonesia, mengamati langsung arsitektur anggaran negara dan realitas ketimpangan ekonomi masyarakat dari dalam sistem birokrasi."
              },
              {
                year: "2021",
                phase: "Fase 02",
                title: "Titik Balik & Resignasi",
                desc: "Memilih melepaskan status mapan ASN demi memperjuangkan independensi narasi, kebebasan bersuara, dan edukasi publik tanpa sekat birokrasi formal."
              },
              {
                year: "2022 — 2023",
                phase: "Fase 03",
                title: "Inisiatif Kolektif Malaka Project",
                desc: "Mendirikan Malaka Project bersama tim kreatif independen untuk memproduksi video esai berbobot tinggi tentang filsafat, stoikisme, matematika keuangan, dan kesadaran hak warga."
              },
              {
                year: "2024 — Sekarang",
                phase: "Fase 04",
                title: "Dampak Lapangan & Beasiswa Warga",
                desc: "Menyelamatkan jutaan warga dari jebakan skema ponzi serta memobilisasi dana beasiswa pendidikan gotong royong bernilai miliaran rupiah bagi mahasiswa daerah prasejahtera."
              }
            ].map((item, idx) => (
              <div key={idx} className="relative space-y-2 group">
                {/* Minimal Node Dot */}
                <div className={`absolute -left-[32px] sm:-left-[40px] top-1.5 w-3 h-3 rounded-full border-2 border-rose-600 transition-all ${
                  isDarkMode ? 'bg-[#0A0E17] group-hover:bg-rose-600' : 'bg-[#FAF9F6] group-hover:bg-rose-600'
                }`} />
                
                <div className="flex items-center gap-2 text-xs font-mono">
                  <span className="text-rose-600 font-semibold">{item.year}</span>
                  <span className={mutedTextClass}>•</span>
                  <span className={subTextClass}>{item.phase}</span>
                </div>

                <h3 className="text-lg sm:text-xl font-display uppercase tracking-wide text-inherit group-hover:text-rose-600 transition-colors">
                  {item.title}
                </h3>
                
                <p className={`text-xs sm:text-sm leading-relaxed ${subTextClass}`}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* --------------------------------------------------------- */}
        {/* SECTION 03: DISCOVERY KARYA (SMOOTH ACCORDION)            */}
        {/* --------------------------------------------------------- */}
        <motion.section 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          id="karya" 
          className="space-y-8"
        >
          <div className={`flex items-center justify-between border-b pb-4 ${dividerClass}`}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display uppercase tracking-tight text-inherit">
              Discovery Karya
            </h2>
            <span className={`font-mono text-xs tracking-widest ${mutedTextClass}`}>
              03 // INISIATIF
            </span>
          </div>

          <div className="space-y-4">
            {karyaList.map((karya, idx) => {
              const isOpen = activeAccordion === idx;
              return (
                <div 
                  key={idx}
                  onClick={() => setActiveAccordion(isOpen ? null : idx)}
                  className={`cursor-pointer rounded-2xl p-6 sm:p-7 transition-all ${cardClass} ${
                    isOpen ? 'border-rose-500/40' : ''
                  }`}
                >
                  <div className="flex items-start sm:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono tracking-wider text-rose-600 uppercase font-semibold">
                        {karya.category}
                      </span>
                      <h3 className="text-base sm:text-xl font-display uppercase tracking-wide text-inherit">
                        {karya.title}
                      </h3>
                    </div>
                    <span className={`w-8 h-8 rounded-full border flex items-center justify-center font-mono text-sm shrink-0 transition-transform ${
                      isOpen 
                        ? 'border-rose-600 bg-rose-600 text-white rotate-180' 
                        : (isDarkMode ? 'border-white/10 text-neutral-400' : 'border-black/10 text-neutral-600')
                    }`}>
                      {isOpen ? '−' : '+'}
                    </span>
                  </div>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className={`mt-4 pt-4 border-t ${dividerClass} space-y-4`}>
                          <p className={`text-xs sm:text-sm leading-relaxed ${subTextClass}`}>
                            {karya.desc}
                          </p>
                          <div className="flex justify-end">
                            <a 
                              href={karya.link} 
                              target="_blank" 
                              rel="noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white font-medium text-xs rounded-lg transition-colors flex items-center gap-1.5 shadow-sm"
                            >
                              <span>Buka Karya</span>
                              <ArrowUpRight className="w-3.5 h-3.5" />
                            </a>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </motion.section>

        {/* --------------------------------------------------------- */}
        {/* SECTION 04: ARTIKEL & WAWASAN (EDITORIAL ESSAYS)          */}
        {/* --------------------------------------------------------- */}
        <motion.section 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          id="artikel" 
          className="space-y-8"
        >
          <div className={`flex items-center justify-between border-b pb-4 ${dividerClass}`}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display uppercase tracking-tight text-inherit">
              Artikel & Wawasan
            </h2>
            <span className={`font-mono text-xs tracking-widest ${mutedTextClass}`}>
              04 // ESAI & RISET
            </span>
          </div>

          <div className="space-y-4">
            {artikelList.map((art, idx) => (
              <div 
                key={idx} 
                className={`p-6 sm:p-8 rounded-2xl space-y-3 transition-all ${cardClass}`}
              >
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono text-[10px] text-rose-600 uppercase font-semibold">
                    {art.tag}
                  </span>
                  <span className={mutedTextClass}>{art.readTime}</span>
                </div>

                <h3 className="text-lg sm:text-xl font-display uppercase tracking-wide text-inherit">
                  {art.title}
                </h3>
                
                <p className={`text-xs sm:text-sm leading-relaxed ${subTextClass}`}>
                  {art.desc}
                </p>

                <div className="flex justify-end pt-2">
                  <a 
                    href={art.link} 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-xs font-semibold text-rose-600 hover:text-rose-500 flex items-center gap-1 transition-colors"
                  >
                    <span>Baca Analisis Lengkap</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Subtle Loading Marker */}
          <div className="flex items-center justify-center gap-2 pt-2 text-xs font-mono text-rose-600/80">
            <Loader2 className="w-3.5 h-3.5 animate-spin" />
            <span>Memuat Arsip Tambahan...</span>
          </div>
        </motion.section>

        {/* --------------------------------------------------------- */}
        {/* SECTION 05: KATA WARGA (TESTIMONIALS)                     */}
        {/* --------------------------------------------------------- */}
        <motion.section 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          id="kata-warga" 
          className="space-y-8"
        >
          <div className={`flex items-center justify-between border-b pb-4 ${dividerClass}`}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display uppercase tracking-tight text-inherit">
              Kata Warga
            </h2>
            <span className={`font-mono text-xs tracking-widest ${mutedTextClass}`}>
              05 // SUARA PUBLIK
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {kataWargaList.map((item, idx) => (
              <div 
                key={idx} 
                className={`p-6 sm:p-7 rounded-2xl space-y-4 flex flex-col justify-between ${cardClass}`}
              >
                <blockquote className="font-editorial italic text-xs sm:text-sm leading-relaxed text-inherit">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>

                <div className={`pt-3 border-t ${dividerClass} flex items-center gap-3`}>
                  <div className="w-8 h-8 rounded-full bg-rose-600/10 text-rose-600 border border-rose-600/20 font-display text-xs flex items-center justify-center shrink-0">
                    {item.initials}
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1">
                      <p className="font-display uppercase text-sm truncate text-inherit">{item.nama}</p>
                      <CheckCircle2 className="w-3 h-3 text-rose-600 shrink-0" />
                    </div>
                    <p className={`text-[10px] truncate ${mutedTextClass}`}>{item.peran}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* --------------------------------------------------------- */}
        {/* SECTION 06: PRODUK TERKAIT & DUKUNGAN                     */}
        {/* --------------------------------------------------------- */}
        <motion.section 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          id="produk" 
          className="space-y-8"
        >
          <div className={`flex items-center justify-between border-b pb-4 ${dividerClass}`}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display uppercase tracking-tight text-inherit">
              Produk & Dukungan
            </h2>
            <span className={`font-mono text-xs tracking-widest ${mutedTextClass}`}>
              06 // EKOSISTEM
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {produkList.map((prod, idx) => (
              <div 
                key={idx} 
                className={`p-6 sm:p-7 rounded-2xl space-y-4 flex flex-col justify-between ${cardClass}`}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[10px] font-mono">
                    <span className="text-rose-600 font-semibold uppercase">{prod.category}</span>
                    <span className={mutedTextClass}>{prod.status}</span>
                  </div>

                  <h3 className="font-display uppercase text-base sm:text-lg text-inherit tracking-wide">
                    {prod.title}
                  </h3>

                  <p className={`text-xs leading-relaxed ${subTextClass}`}>
                    {prod.desc}
                  </p>
                </div>

                <button 
                  onClick={() => window.open('https://malakaproject.id', '_blank')}
                  className="w-full py-2.5 bg-rose-600 hover:bg-rose-700 text-white font-medium text-xs rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <span>{prod.action}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </motion.section>

      </main>

      {/* ========================================================= */}
      {/* FOOTER (CLEAN & MINIMALIST)                               */}
      {/* ========================================================= */}
      <footer className={`border-t py-12 px-6 sm:px-8 mt-20 relative z-10 ${
        isDarkMode ? 'bg-[#080B12] border-white/[0.08] text-neutral-400' : 'bg-[#F4F2EE] border-black/[0.06] text-neutral-600'
      }`}>
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6 text-xs">
          <div className="flex items-center gap-2 font-display text-lg tracking-wide uppercase text-inherit">
            <span>SEKTOR LOKAL</span>
            <span className="w-1.5 h-1.5 rounded-full bg-rose-600 inline-block" />
          </div>

          <p className="text-center sm:text-left text-[11px] font-normal">
            © 2026 Sektor Lokal. Dokumentasi Kurasi Figur Kebanggaan Warga Indonesia.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-rose-600 hover:text-rose-500 transition-colors"
          >
            <span>Kembali Ke Atas</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </footer>

    </div>
  );
}
