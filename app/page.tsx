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
  ArrowRight,
  ArrowLeft,
  ArrowUp,
  Share2,
  BookOpen,
  Sparkles,
  Layers,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import Image from 'next/image';
import ConstellationCanvas from '../components/ConstellationCanvas';

export default function MahakaryaEditorialPage() {
  // 1. Default to LIGHT MODE as requested
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copiedToast, setCopiedToast] = useState(false);

  // Horizontal Desktop Chapter Navigation state (0 = All/Continuous Stream, 1 = Tentang, 2 = Perjalanan, 3 = Karya, 4 = Artikel, 5 = Kata Warga, 6 = Produk)
  const [activeChapter, setActiveChapter] = useState<number>(0);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('right');

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

  const handleChapterChange = (newChapter: number) => {
    if (newChapter === activeChapter) return;
    setSlideDirection(newChapter > activeChapter ? 'right' : 'left');
    setActiveChapter(newChapter);
  };

  // Luxury Color System (Deep Ink #0A0E17 & Warm Paper #FAF9F6)
  const bgClass = isDarkMode ? 'bg-[#0A0E17] text-[#F1F5F9]' : 'bg-[#FAF9F6] text-[#0F172A]';
  const panelClass = isDarkMode ? 'editorial-panel-dark' : 'editorial-panel-light';
  const subTextClass = isDarkMode ? 'text-neutral-400' : 'text-neutral-600';
  const mutedTextClass = isDarkMode ? 'text-neutral-500' : 'text-neutral-400';
  const dividerClass = isDarkMode ? 'border-white/[0.08]' : 'border-black/[0.08]';
  const quoteBgClass = isDarkMode ? 'bg-[#0E1424]/80 border-white/[0.08]' : 'bg-[#F4F2EE] border-stone-200/80';

  const chapters = [
    { id: 0, label: "Semua Bab" },
    { id: 1, label: "01 Tentang" },
    { id: 2, label: "02 Perjalanan" },
    { id: 3, label: "03 Karya" },
    { id: 4, label: "04 Artikel" },
    { id: 5, label: "05 Kata Warga" },
    { id: 6, label: "06 Produk" },
  ];

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

  // Slide animation variants for horizontal chapter stream
  const slideVariants: Variants = {
    enter: (direction: 'left' | 'right') => ({
      x: direction === 'right' ? 40 : -40,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.35 }
      }
    },
    exit: (direction: 'left' | 'right') => ({
      x: direction === 'right' ? -40 : 40,
      opacity: 0,
      transition: { duration: 0.25 }
    })
  };

  return (
    <div className={`min-h-screen ${bgClass} font-sans selection:bg-rose-600 selection:text-white relative overflow-hidden`}>

      {/* 2. RED CONSTELLATION WAVE PARTICLE CANVAS (ECIDNI BENCHMARK) */}
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
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-4 flex items-center justify-between">
          
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
          <nav className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider">
            <button 
              onClick={() => handleChapterChange(0)} 
              className={`transition-colors ${activeChapter === 0 ? 'text-rose-600 font-bold' : 'hover:text-rose-600'}`}
            >
              Stream Penuh
            </button>
            <button 
              onClick={() => handleChapterChange(1)} 
              className={`transition-colors ${activeChapter === 1 ? 'text-rose-600 font-bold' : 'hover:text-rose-600'}`}
            >
              Tentang
            </button>
            <button 
              onClick={() => handleChapterChange(2)} 
              className={`transition-colors ${activeChapter === 2 ? 'text-rose-600 font-bold' : 'hover:text-rose-600'}`}
            >
              Perjalanan
            </button>
            <button 
              onClick={() => handleChapterChange(3)} 
              className={`transition-colors ${activeChapter === 3 ? 'text-rose-600 font-bold' : 'hover:text-rose-600'}`}
            >
              Karya
            </button>
            <button 
              onClick={() => handleChapterChange(4)} 
              className={`transition-colors ${activeChapter === 4 ? 'text-rose-600 font-bold' : 'hover:text-rose-600'}`}
            >
              Artikel
            </button>
            <button 
              onClick={() => handleChapterChange(5)} 
              className={`transition-colors ${activeChapter === 5 ? 'text-rose-600 font-bold' : 'hover:text-rose-600'}`}
            >
              Kata Warga
            </button>
            <button 
              onClick={() => handleChapterChange(6)} 
              className={`transition-colors ${activeChapter === 6 ? 'text-rose-600 font-bold' : 'hover:text-rose-600'}`}
            >
              Dukungan
            </button>
          </nav>

          {/* Right Action: Share, Theme Switcher & Menu */}
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
            {chapters.map((chap) => (
              <button
                key={chap.id}
                onClick={() => {
                  handleChapterChange(chap.id);
                  setIsMenuOpen(false);
                }}
                className={`py-1.5 transition flex items-center justify-between text-left ${
                  activeChapter === chap.id ? 'text-rose-600' : 'hover:text-rose-600'
                }`}
              >
                <span>{chap.label}</span>
                <ArrowUpRight className="w-4 h-4 text-rose-600" />
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ========================================================= */}
      {/* 2-COLUMN ASYMMETRIC EDITORIAL GRID (MAX-W-7XL)            */}
      {/* ========================================================= */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-10 md:py-14 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* ========================================================= */}
          {/* LEFT COLUMN: STICKY PROFILE HERO SIDEBAR (5 of 12 cols)  */}
          {/* ========================================================= */}
          <aside id="hero" className="lg:col-span-5 lg:sticky lg:top-24 space-y-6">
            
            {/* Elegant Portrait Frame */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className={`rounded-2xl overflow-hidden p-6 sm:p-8 space-y-6 ${panelClass}`}
            >
              {/* Photo Box */}
              <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-neutral-900 group">
                <Image 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80" 
                  alt="Ferry Irwandi — Potret Kebanggaan Warga" 
                  fill
                  sizes="(max-width: 768px) 100vw, 35vw"
                  priority
                  className="object-cover filter grayscale contrast-125 transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${
                  isDarkMode 
                    ? 'from-[#0A0E17]/90 via-transparent to-transparent' 
                    : 'from-white/60 via-transparent to-transparent'
                }`} />

                {/* Subtle verified pill badge */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-mono uppercase tracking-widest text-white/90 border border-white/10 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
                  <span>Profil #001</span>
                </div>
              </div>

              {/* Title & Red Accent Bar */}
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-[11px] font-mono font-semibold tracking-wider text-rose-600 uppercase block mb-1">
                      Potret Kebanggaan Warga
                    </span>
                    <h1 className="text-4xl sm:text-5xl font-display uppercase tracking-tight leading-[0.95] text-inherit">
                      FERRY IRWANDI
                    </h1>
                  </div>

                  {/* Refined Luxe Red Accent Bar */}
                  <div className="red-accent-bar-luxe h-14 sm:h-16 shrink-0 mt-1" />
                </div>

                {/* Subtitle in Playfair Display */}
                <p className="font-editorial italic text-base sm:text-lg text-rose-600 tracking-wide">
                  The Voices • Disruptor • Literasi Kritis
                </p>
              </div>

              {/* Minimalist Social Profile Icons */}
              <div className={`pt-5 border-t ${dividerClass}`}>
                <div className="flex items-center justify-between mb-3 text-[10px] font-mono tracking-wider uppercase">
                  <span className={subTextClass}>Kanal Digital Resmi</span>
                  <span className="text-rose-600 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    Terverifikasi
                  </span>
                </div>

                <div className="grid grid-cols-5 gap-2">
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
                      className={`h-10 rounded-lg border flex items-center justify-center transition-all ${
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
              </div>
            </motion.div>

            {/* Quick Metrics Badge */}
            <div className={`p-5 rounded-xl border flex items-center justify-between text-xs ${panelClass}`}>
              <span className={subTextClass}>Status Kurasi Warga</span>
              <span className="text-rose-600 font-mono font-semibold tracking-wider uppercase">
                Mainstream Disruptor
              </span>
            </div>

          </aside>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: FLUID EDITORIAL CONTENT FEED (7 of 12 cols) */}
          {/* ========================================================= */}
          <main className="lg:col-span-7 space-y-8">

            {/* 4. HORIZONTAL CHAPTER STREAM SWITCHER (DESKTOP) */}
            <div className={`p-1.5 rounded-xl border flex items-center gap-1.5 overflow-x-auto no-scrollbar ${panelClass}`}>
              {chapters.map((chap) => {
                const isActive = activeChapter === chap.id;
                return (
                  <button
                    key={chap.id}
                    onClick={() => handleChapterChange(chap.id)}
                    className={`px-3.5 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all duration-200 ${
                      isActive 
                        ? 'bg-rose-600 text-white shadow-sm' 
                        : (isDarkMode ? 'text-neutral-400 hover:text-white hover:bg-white/[0.04]' : 'text-neutral-600 hover:text-black hover:bg-black/[0.04]')
                    }`}
                  >
                    {chap.label}
                  </button>
                );
              })}
            </div>

            {/* EDITORIAL CHAPTER VIEWS */}
            <AnimatePresence mode="wait" custom={slideDirection}>
              <motion.div
                key={activeChapter}
                custom={slideDirection}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="space-y-12 sm:space-y-16"
              >

                {/* =================================================== */}
                {/* CHAPTER 1: TENTANG (GABRIELLE DOLAN OPEN EDITORIAL) */}
                {/* =================================================== */}
                {(activeChapter === 0 || activeChapter === 1) && (
                  <section id="tentang" className="space-y-6 pt-2">
                    <div className={`flex items-center justify-between border-b pb-4 ${dividerClass}`}>
                      <h2 className="text-3xl sm:text-4xl md:text-5xl font-display uppercase tracking-tight text-inherit">
                        Tentang Ferry Irwandi
                      </h2>
                      <span className={`font-mono text-xs tracking-widest ${mutedTextClass}`}>
                        01 // BIOGRAFI
                      </span>
                    </div>

                    <div className="space-y-4 text-base sm:text-lg leading-relaxed text-inherit/90 font-normal text-justify">
                      <p>
                        <strong className="text-rose-600 font-semibold text-xl font-display uppercase tracking-wide mr-1.5">
                          Ferry Irwandi
                        </strong> 
                        adalah mantan aparatur sipil negara di Kementerian Keuangan yang mengambil keputusan berani untuk melangkah keluar dari kenyamanan birokrasi demi mengabdikan nalar dan suaranya sebagai edukator publik independen, esais video, dan penggerak solidaritas warga.
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
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Chapter Pagination (When single chapter is active) */}
                    {activeChapter === 1 && (
                      <div className={`pt-6 border-t ${dividerClass} flex justify-end`}>
                        <button
                          onClick={() => handleChapterChange(2)}
                          className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-600 hover:text-rose-500 transition-colors"
                        >
                          <span>Lanjut ke 02 Perjalanan Hidup</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                  </section>
                )}

                {/* =================================================== */}
                {/* CHAPTER 2: PERJALANAN HIDUP (MINIMALIST TIMELINE)   */}
                {/* =================================================== */}
                {(activeChapter === 0 || activeChapter === 2) && (
                  <section id="perjalanan" className="space-y-8 pt-2">
                    <div className={`flex items-center justify-between border-b pb-4 ${dividerClass}`}>
                      <h2 className="text-3xl sm:text-4xl md:text-5xl font-display uppercase tracking-tight text-inherit">
                        Perjalanan Hidup
                      </h2>
                      <span className={`font-mono text-xs tracking-widest ${mutedTextClass}`}>
                        02 // REKAM JEJAK
                      </span>
                    </div>

                    {/* Minimalist Timeline Track */}
                    <div className="relative pl-7 sm:pl-8 space-y-8">
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
                        <div key={idx} className="relative space-y-1.5 group">
                          {/* Minimal Node Dot */}
                          <div className={`absolute -left-[32px] sm:-left-[36px] top-1.5 w-3 h-3 rounded-full border-2 border-rose-600 transition-all ${
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

                    {/* Chapter Pagination (When single chapter is active) */}
                    {activeChapter === 2 && (
                      <div className={`pt-6 border-t ${dividerClass} flex items-center justify-between`}>
                        <button
                          onClick={() => handleChapterChange(1)}
                          className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-500 hover:text-rose-600 transition-colors"
                        >
                          <ArrowLeft className="w-4 h-4" />
                          <span>01 Tentang</span>
                        </button>
                        <button
                          onClick={() => handleChapterChange(3)}
                          className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-600 hover:text-rose-500 transition-colors"
                        >
                          <span>03 Discovery Karya</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                  </section>
                )}

                {/* =================================================== */}
                {/* CHAPTER 3: DISCOVERY KARYA (SMOOTH ACCORDION)       */}
                {/* =================================================== */}
                {(activeChapter === 0 || activeChapter === 3) && (
                  <section id="karya" className="space-y-6 pt-2">
                    <div className={`flex items-center justify-between border-b pb-4 ${dividerClass}`}>
                      <h2 className="text-3xl sm:text-4xl md:text-5xl font-display uppercase tracking-tight text-inherit">
                        Discovery Karya
                      </h2>
                      <span className={`font-mono text-xs tracking-widest ${mutedTextClass}`}>
                        03 // INISIATIF
                      </span>
                    </div>

                    <div className="space-y-3.5">
                      {karyaList.map((karya, idx) => {
                        const isOpen = activeAccordion === idx;
                        return (
                          <div 
                            key={idx}
                            onClick={() => setActiveAccordion(isOpen ? null : idx)}
                            className={`cursor-pointer rounded-2xl p-6 sm:p-7 transition-all ${panelClass} ${
                              isOpen ? 'border-rose-500/40' : ''
                            }`}
                          >
                            <div className="flex items-start sm:items-center justify-between gap-4">
                              <div className="space-y-1">
                                <span className="text-[10px] font-mono tracking-wider text-rose-600 uppercase font-semibold">
                                  {karya.category}
                                </span>
                                <h3 className="text-base sm:text-lg font-display uppercase tracking-wide text-inherit">
                                  {karya.title}
                                </h3>
                              </div>
                              <span className={`w-7 h-7 rounded-full border flex items-center justify-center font-mono text-sm shrink-0 transition-transform ${
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

                    {/* Chapter Pagination (When single chapter is active) */}
                    {activeChapter === 3 && (
                      <div className={`pt-6 border-t ${dividerClass} flex items-center justify-between`}>
                        <button
                          onClick={() => handleChapterChange(2)}
                          className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-500 hover:text-rose-600 transition-colors"
                        >
                          <ArrowLeft className="w-4 h-4" />
                          <span>02 Perjalanan</span>
                        </button>
                        <button
                          onClick={() => handleChapterChange(4)}
                          className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-600 hover:text-rose-500 transition-colors"
                        >
                          <span>04 Artikel & Wawasan</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                  </section>
                )}

                {/* =================================================== */}
                {/* CHAPTER 4: ARTIKEL & WAWASAN (EDITORIAL ESSAYS)     */}
                {/* =================================================== */}
                {(activeChapter === 0 || activeChapter === 4) && (
                  <section id="artikel" className="space-y-6 pt-2">
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
                          className={`p-6 sm:p-8 rounded-2xl space-y-3 transition-all ${panelClass}`}
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
                    <div className="flex items-center justify-center gap-2 pt-3 text-xs font-mono text-rose-600/80">
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>Memuat Arsip Tambahan...</span>
                    </div>

                    {/* Chapter Pagination (When single chapter is active) */}
                    {activeChapter === 4 && (
                      <div className={`pt-6 border-t ${dividerClass} flex items-center justify-between`}>
                        <button
                          onClick={() => handleChapterChange(3)}
                          className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-500 hover:text-rose-600 transition-colors"
                        >
                          <ArrowLeft className="w-4 h-4" />
                          <span>03 Karya</span>
                        </button>
                        <button
                          onClick={() => handleChapterChange(5)}
                          className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-600 hover:text-rose-500 transition-colors"
                        >
                          <span>05 Kata Warga</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                  </section>
                )}

                {/* =================================================== */}
                {/* CHAPTER 5: KATA WARGA (TESTIMONIALS)                */}
                {/* =================================================== */}
                {(activeChapter === 0 || activeChapter === 5) && (
                  <section id="kata-warga" className="space-y-6 pt-2">
                    <div className={`flex items-center justify-between border-b pb-4 ${dividerClass}`}>
                      <h2 className="text-3xl sm:text-4xl md:text-5xl font-display uppercase tracking-tight text-inherit">
                        Kata Warga
                      </h2>
                      <span className={`font-mono text-xs tracking-widest ${mutedTextClass}`}>
                        05 // SUARA PUBLIK
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {kataWargaList.map((item, idx) => (
                        <div 
                          key={idx} 
                          className={`p-6 sm:p-7 rounded-2xl space-y-4 flex flex-col justify-between ${panelClass}`}
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

                    {/* Chapter Pagination (When single chapter is active) */}
                    {activeChapter === 5 && (
                      <div className={`pt-6 border-t ${dividerClass} flex items-center justify-between`}>
                        <button
                          onClick={() => handleChapterChange(4)}
                          className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-500 hover:text-rose-600 transition-colors"
                        >
                          <ArrowLeft className="w-4 h-4" />
                          <span>04 Artikel</span>
                        </button>
                        <button
                          onClick={() => handleChapterChange(6)}
                          className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-600 hover:text-rose-500 transition-colors"
                        >
                          <span>06 Produk & Dukungan</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                  </section>
                )}

                {/* =================================================== */}
                {/* CHAPTER 6: PRODUK TERKAIT & DUKUNGAN (EKOSISTEM)     */}
                {/* =================================================== */}
                {(activeChapter === 0 || activeChapter === 6) && (
                  <section id="produk" className="space-y-6 pt-2">
                    <div className={`flex items-center justify-between border-b pb-4 ${dividerClass}`}>
                      <h2 className="text-3xl sm:text-4xl md:text-5xl font-display uppercase tracking-tight text-inherit">
                        Produk & Dukungan
                      </h2>
                      <span className={`font-mono text-xs tracking-widest ${mutedTextClass}`}>
                        06 // EKOSISTEM
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {produkList.map((prod, idx) => (
                        <div 
                          key={idx} 
                          className={`p-6 sm:p-7 rounded-2xl space-y-4 flex flex-col justify-between ${panelClass}`}
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

                    {/* Chapter Pagination (When single chapter is active) */}
                    {activeChapter === 6 && (
                      <div className={`pt-6 border-t ${dividerClass} flex items-center justify-between`}>
                        <button
                          onClick={() => handleChapterChange(5)}
                          className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-500 hover:text-rose-600 transition-colors"
                        >
                          <ArrowLeft className="w-4 h-4" />
                          <span>05 Kata Warga</span>
                        </button>
                        <button
                          onClick={() => handleChapterChange(0)}
                          className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-600 hover:text-rose-500 transition-colors"
                        >
                          <span>Kembali ke Stream Penuh</span>
                          <Layers className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                  </section>
                )}

              </motion.div>
            </AnimatePresence>

          </main>

        </div>
      </div>

      {/* ========================================================= */}
      {/* FOOTER (CLEAN & MINIMALIST)                               */}
      {/* ========================================================= */}
      <footer className={`border-t py-12 px-6 sm:px-8 mt-20 relative z-10 ${
        isDarkMode ? 'bg-[#080B12] border-white/[0.08] text-neutral-400' : 'bg-[#F4F2EE] border-black/[0.06] text-neutral-600'
      }`}>
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6 text-xs">
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
