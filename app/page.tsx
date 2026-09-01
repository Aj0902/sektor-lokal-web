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
  ArrowUp,
  Sparkles,
  Zap,
  Flame,
  ShieldCheck,
  BookOpen,
  Award,
  Share2,
  ExternalLink,
  ChevronDown
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function MahakaryaEditorialPage() {
  const [isDarkMode, setIsDarkMode] = useState(true);
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

  // Dynamic Theme Styling Classes
  const bgClass = isDarkMode ? 'bg-[#070a10] text-gray-100' : 'bg-[#f8fafc] text-gray-900';
  const cardBgClass = isDarkMode ? 'bg-[#0b0f19] border-gray-800 text-gray-100' : 'bg-white border-gray-200 text-gray-900';
  const subTextClass = isDarkMode ? 'text-gray-400' : 'text-gray-600';
  const quoteBgClass = isDarkMode ? 'bg-[#0d1322] text-gray-100 border-gray-800' : 'bg-rose-50/50 text-gray-900 border-rose-100';

  const karyaList = [
    {
      badge: "INVESTIGASI & ADVOKASI",
      title: "SERIAL PEMBONGKARAN SKEMA PONZI & JUDI ONLINE",
      desc: "Menguliti secara komprehensif dan matematis modus di balik skema ponzi, robot trading ilegal, dan kejahatan judi digital yang menggerus miliaran dana masyarakat rentan.",
      link: "https://youtube.com/@ferryirwandi"
    },
    {
      badge: "LITERATUR FILSAFAT",
      title: "BUKU PRINSIPAL EKONOMI & STOIKISME TERAPAN",
      desc: "Karya literatur panduan praktis mengadopsi filsafat stoikisme dan penalaran sains modern untuk menghadapi krisis mentalitas serta ketidakpastian ekonomi generasi muda.",
      link: "https://youtube.com/@ferryirwandi"
    },
    {
      badge: "MEDIA KOLEKTIF INDEPENDEN",
      title: "MALAKA PROJECT — PLATFORM EDUKASI WARGA",
      desc: "Platform edukasi kolektif independen yang memproduksi esai video berbobot tinggi tentang filsafat, stoikisme, ekonomi mikro, dan kesadaran politik warga.",
      link: "https://malakaproject.id"
    },
    {
      badge: "FILANTROPI & SOLIDARITAS",
      title: "GERAKAN BEASISWA KELAS WARGA INDONESIA",
      desc: "Inisiatif penggalangan dana publik transparan dan gotong royong yang membiayai uang kuliah tunggal (UKT) puluhan mahasiswa daerah berprestasi dari keluarga prasejahtera.",
      link: "https://youtube.com/@ferryirwandi"
    }
  ];

  const artikelList = [
    {
      tag: "NALAR FINANSIAL",
      readTime: "6 MENIT BACA",
      title: "ANALISIS KRITIS KEUANGAN & LITERASI MASYARAKAT",
      desc: "Ulasan mendalam mengenai pentingnya membangun benteng nalar kritis sebagai pertahanan terakhir individu dari jeratan skema penipuan finansial digital era algoritma.",
      link: "https://youtube.com/@ferryirwandi"
    },
    {
      tag: "FILSAFAT TERAPAN",
      readTime: "8 MENIT BACA",
      title: "STOIKISME: BUKAN PASRAH, TAPI AKSI NYATA BERKESADARAN",
      desc: "Membedah esensi sejati filosofi stoikisme untuk memfokuskan energi kognitif pada hal-hal dalam kendali internal di tengah turbulensi sosial-ekonomi perkotaan.",
      link: "https://youtube.com/@ferryirwandi"
    }
  ];

  const kataWargaList = [
    {
      initials: "GW",
      nama: "Gita Wirjawan",
      peran: "Pendidik & Pengasuh Podcast Endgame",
      quote: "Ferry mampu mengemas analisis keuangan dan diskursus sosial yang berat menjadi narasi yang sangat memikat, relevan, dan dicintai generasi muda Indonesia."
    },
    {
      initials: "BP",
      nama: "Baskara Putra (Hindia)",
      peran: "Musisi & Penulis Lagu",
      quote: "Konsistensinya menyuarakan kebenaran di tengah riuhnya kebisingan internet memberikan rasa aman bagi anak muda yang haus akan akal sehat dan integritas."
    },
    {
      initials: "RW",
      nama: "Rian (Mahasiswa Daerah)",
      peran: "Penerima Beasiswa Warga",
      quote: "Berkat konten edukasi Mas Ferry, keluarga saya terhindar dari jeratan pinjol ilegal dan saya bisa menyelesaikan kuliah dengan sokongan beasiswa warga."
    }
  ];

  const produkList = [
    {
      category: "LITERATUR RESMI",
      status: "TERSEDIA",
      title: "JURNAL & BUKU STOIKISME PUBLIK",
      desc: "Buku panduan bernalar kritis, diseksi bias kognitif, dan catatan refleksi harian bagi pemuda dalam mengambil keputusan strategis kehidupan.",
      action: "Lihat Buku & Detail"
    },
    {
      category: "APPAREL & MERCHANDISE",
      status: "OFFICIAL RELEASE",
      title: "APPAREL KOLEKTIF MALAKA PROJECT",
      desc: "Merchandise kurasi resmi sebagai wujud nyata dukungan langsung terhadap keberlangsungan riset independen dan operasional Malaka.",
      action: "Dukung Malaka Project"
    },
    {
      category: "SOLIDARITAS PUBLIK",
      status: "CAMPAIGN AKTIF",
      title: "DANA BEASISWA KELAS WARGA",
      desc: "Saluran donasi kolektif gotong royong terverifikasi untuk membiayai uang kuliah tunggal (UKT) mahasiswa berprestasi di pelosok nusantara.",
      action: "Salurkan Donasi Beasiswa"
    }
  ];

  return (
    <div className={`min-h-screen ${bgClass} transition-colors duration-300 font-sans selection:bg-rose-600 selection:text-white`}>

      {/* TOP READING PROGRESS BAR */}
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-rose-600 via-rose-500 to-amber-400 z-50 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* ========================================================= */}
      {/* HEADER / NAVIGATION BAR (STICKY)                          */}
      {/* ========================================================= */}
      <nav className={`sticky top-0 z-40 backdrop-blur-xl border-b px-4 sm:px-6 py-3.5 transition-colors ${
        isDarkMode ? 'bg-[#070a10]/90 border-gray-800/80 shadow-lg shadow-black/20' : 'bg-white/90 border-gray-200/90 shadow-sm'
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo SEKTOR LOKAL (Canva Style) */}
          <div className="flex items-center gap-3">
            <a href="#" className="flex items-center gap-2 group">
              <div className="flex flex-col leading-none font-display text-2xl sm:text-3xl tracking-tight text-inherit group-hover:text-rose-600 transition">
                <span>SEKTOR</span>
                <div className="flex items-center gap-1.5">
                  <span>LOKAL</span>
                  <span className="w-4 h-4 bg-rose-600 rounded-xs flex items-center justify-center text-[10px] text-white font-bold shadow-md shadow-rose-600/50">
                    🏮
                  </span>
                </div>
              </div>
            </a>

            {/* Editorial Edition Badge */}
            <div className={`hidden md:flex items-center gap-2 px-3 py-1 rounded-full border text-[11px] font-bold tracking-wider uppercase ${
              isDarkMode ? 'border-gray-800 bg-gray-900/60 text-gray-300' : 'border-gray-200 bg-gray-100 text-gray-700'
            }`}>
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
              <span>EDISI EKSKLUSIF 2026 // #001</span>
            </div>
          </div>

          {/* Desktop Anchor Quick Links */}
          <div className="hidden lg:flex items-center gap-6 text-xs font-bold uppercase tracking-wider">
            <a href="#tentang" className="hover:text-rose-600 transition">Tentang</a>
            <a href="#perjalanan" className="hover:text-rose-600 transition">Perjalanan</a>
            <a href="#karya" className="hover:text-rose-600 transition">Karya</a>
            <a href="#artikel" className="hover:text-rose-600 transition">Artikel</a>
            <a href="#kata-warga" className="hover:text-rose-600 transition">Kata Warga</a>
            <a href="#produk" className="hover:text-rose-600 transition">Dukungan</a>
          </div>

          {/* Right Action: Share, Theme Switcher & Menu Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Quick Share Button */}
            <button
              onClick={handleShare}
              className={`p-2 sm:px-3 sm:py-2 rounded-xl border transition flex items-center gap-1.5 text-xs font-bold ${
                isDarkMode 
                  ? 'bg-[#0b0f19] border-gray-800 text-gray-300 hover:text-white hover:border-rose-600' 
                  : 'bg-gray-100 border-gray-300 text-gray-700 hover:text-rose-600 hover:border-rose-600'
              }`}
              title="Bagikan Tautan Profil"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{copiedToast ? 'TERSALIN!' : 'BAGIKAN'}</span>
            </button>

            {/* Theme Toggle Button */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 sm:px-3 sm:py-2 rounded-xl border transition flex items-center gap-2 text-xs font-bold shadow-sm ${
                isDarkMode 
                  ? 'bg-[#0b0f19] border-gray-700 text-yellow-400 hover:border-yellow-400/50 hover:bg-yellow-950/20' 
                  : 'bg-gray-100 border-gray-300 text-gray-800 hover:bg-gray-200'
              }`}
              title="Ganti Mode Terang / Gelap"
            >
              {isDarkMode ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline font-sans">{isDarkMode ? 'LIGHT MODE' : 'DARK MODE'}</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-xl border transition lg:hidden ${
                isDarkMode ? 'border-gray-800 text-white hover:border-rose-600' : 'border-gray-300 text-gray-900 hover:border-rose-600'
              }`}
              aria-label="Navigasi Menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </nav>

      {/* MOBILE MENU DROPDOWN */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
            className={`fixed inset-x-0 top-[65px] z-30 p-6 flex flex-col space-y-4 text-xl font-display uppercase tracking-wide border-b border-rose-600/50 backdrop-blur-2xl shadow-2xl lg:hidden ${
              isDarkMode ? 'bg-[#070a10]/95 text-white' : 'bg-white/95 text-gray-900'
            }`}
          >
            <a href="#hero" onClick={() => setIsMenuOpen(false)} className="hover:text-rose-600 transition flex items-center justify-between border-b border-inherit/10 pb-2">
              <span>00 // PROFILE COVER</span>
              <ArrowUpRight className="w-4 h-4 text-rose-600" />
            </a>
            <a href="#tentang" onClick={() => setIsMenuOpen(false)} className="hover:text-rose-600 transition flex items-center justify-between border-b border-inherit/10 pb-2">
              <span>01 // TENTANG</span>
              <ArrowUpRight className="w-4 h-4 text-rose-600" />
            </a>
            <a href="#perjalanan" onClick={() => setIsMenuOpen(false)} className="hover:text-rose-600 transition flex items-center justify-between border-b border-inherit/10 pb-2">
              <span>02 // PERJALANAN HIDUP</span>
              <ArrowUpRight className="w-4 h-4 text-rose-600" />
            </a>
            <a href="#karya" onClick={() => setIsMenuOpen(false)} className="hover:text-rose-600 transition flex items-center justify-between border-b border-inherit/10 pb-2">
              <span>03 // DISCOVERY KARYA</span>
              <ArrowUpRight className="w-4 h-4 text-rose-600" />
            </a>
            <a href="#artikel" onClick={() => setIsMenuOpen(false)} className="hover:text-rose-600 transition flex items-center justify-between border-b border-inherit/10 pb-2">
              <span>04 // ARTIKEL & WAWASAN</span>
              <ArrowUpRight className="w-4 h-4 text-rose-600" />
            </a>
            <a href="#kata-warga" onClick={() => setIsMenuOpen(false)} className="hover:text-rose-600 transition flex items-center justify-between border-b border-inherit/10 pb-2">
              <span>05 // KATA WARGA</span>
              <ArrowUpRight className="w-4 h-4 text-rose-600" />
            </a>
            <a href="#produk" onClick={() => setIsMenuOpen(false)} className="hover:text-rose-600 transition flex items-center justify-between pb-2">
              <span>06 // PRODUK TERKAIT</span>
              <ArrowUpRight className="w-4 h-4 text-rose-600" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ========================================================= */}
      {/* ASYMMETRIC 2-COLUMN DESKTOP GRID (max-w-7xl)              */}
      {/* ========================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 md:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* ========================================================= */}
          {/* LEFT COLUMN: STICKY PROFILE HERO SIDEBAR (5 of 12 cols)  */}
          {/* ========================================================= */}
          <aside id="hero" className="lg:col-span-5 lg:sticky lg:top-24 space-y-6">
            
            {/* Framed Photo Container (Canva Hero Style) */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`rounded-3xl border overflow-hidden shadow-2xl transition-all relative ${
                isDarkMode ? 'bg-[#080b11] border-gray-800' : 'bg-white border-gray-300'
              }`}
            >
              {/* Corner Brutalist Markers */}
              <div className="absolute top-3 left-3 z-20 text-[10px] font-mono text-rose-500 font-bold tracking-widest pointer-events-none">+</div>
              <div className="absolute top-3 right-3 z-20 text-[10px] font-mono text-rose-500 font-bold tracking-widest pointer-events-none">+</div>

              {/* Portrait Image Canvas */}
              <div className="relative w-full aspect-[4/5] bg-gray-950 overflow-hidden flex items-center justify-center group">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80" 
                  alt="Ferry Irwandi — Potret Kebanggaan Warga" 
                  className="w-full h-full object-cover filter grayscale contrast-125 group-hover:scale-105 group-hover:filter group-hover:contrast-110 transition duration-700 ease-out"
                />
                
                {/* Visual Gradient Shading */}
                <div className={`absolute inset-0 bg-gradient-to-t ${
                  isDarkMode 
                    ? 'from-[#080b11] via-[#080b11]/30 to-transparent' 
                    : 'from-white via-white/20 to-transparent'
                }`} />

                {/* Overlaid Pill Status */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-bold text-white tracking-widest uppercase">
                  <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                  <span>DOKUMEN PUBLIK #001</span>
                </div>
              </div>

              {/* Title & Animated Red Bar Box */}
              <div className="p-6 sm:p-8 space-y-5">
                <div className="flex items-end justify-between gap-4">
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold tracking-widest text-rose-600 uppercase font-sans flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 inline" />
                      POTRET KEBAANGGAAN WARGA
                    </span>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-display uppercase tracking-tight text-inherit leading-[0.95] mt-1">
                      FERRY IRWANDI
                    </h1>
                  </div>

                  {/* Animated Red Accent Bar (Sesuai Sketsa Canva) */}
                  <div 
                    className="red-accent-bar-animated h-16 md:h-20 shrink-0" 
                    title="Aksen Garis Hidup Sektor Lokal"
                  />
                </div>

                {/* Subtitle in Playfair Display (Sesuai Koreksi Font) */}
                <p className="font-editorial italic font-bold text-base sm:text-lg tracking-wide text-rose-600">
                  THE VOICES • DISRUPTOR • LITERASI KRITIS
                </p>

                {/* DERETAN IKON SOSMED DI BAWAH NAMA */}
                <div className="pt-4 border-t border-inherit/10">
                  <div className="flex items-center justify-between mb-2.5">
                    <span className={`text-[10px] font-bold uppercase tracking-wider ${subTextClass}`}>
                      AKSES PROFIL DIGITAL RESMI
                    </span>
                    <span className="text-[10px] font-mono text-rose-600 font-bold">● TERVERIFIKASI</span>
                  </div>

                  <div className="grid grid-cols-5 gap-2">
                    <a 
                      href="https://youtube.com/@ferryirwandi" 
                      target="_blank" 
                      rel="noreferrer"
                      className={`h-11 rounded-xl border flex items-center justify-center transition group ${
                        isDarkMode 
                          ? 'bg-[#0d1322] border-gray-800 text-gray-300 hover:text-white hover:border-rose-600 hover:bg-rose-950/40 shadow-sm' 
                          : 'bg-gray-100 border-gray-300 text-gray-700 hover:text-rose-600 hover:border-rose-600 hover:bg-rose-50 shadow-sm'
                      }`}
                      title="YouTube Channel (@ferryirwandi)"
                    >
                      <Youtube className="w-4 h-4 group-hover:scale-110 transition" />
                    </a>

                    <a 
                      href="https://twitter.com/ferryirwandi" 
                      target="_blank" 
                      rel="noreferrer"
                      className={`h-11 rounded-xl border flex items-center justify-center transition group ${
                        isDarkMode 
                          ? 'bg-[#0d1322] border-gray-800 text-gray-300 hover:text-white hover:border-rose-600 hover:bg-rose-950/40 shadow-sm' 
                          : 'bg-gray-100 border-gray-300 text-gray-700 hover:text-rose-600 hover:border-rose-600 hover:bg-rose-50 shadow-sm'
                      }`}
                      title="X / Twitter (@ferryirwandi)"
                    >
                      <Twitter className="w-4 h-4 group-hover:scale-110 transition" />
                    </a>

                    <a 
                      href="https://instagram.com/ferryirwandi" 
                      target="_blank" 
                      rel="noreferrer"
                      className={`h-11 rounded-xl border flex items-center justify-center transition group ${
                        isDarkMode 
                          ? 'bg-[#0d1322] border-gray-800 text-gray-300 hover:text-white hover:border-rose-600 hover:bg-rose-950/40 shadow-sm' 
                          : 'bg-gray-100 border-gray-300 text-gray-700 hover:text-rose-600 hover:border-rose-600 hover:bg-rose-50 shadow-sm'
                      }`}
                      title="Instagram (@ferryirwandi)"
                    >
                      <Instagram className="w-4 h-4 group-hover:scale-110 transition" />
                    </a>

                    <a 
                      href="https://open.spotify.com" 
                      target="_blank" 
                      rel="noreferrer"
                      className={`h-11 rounded-xl border flex items-center justify-center transition group ${
                        isDarkMode 
                          ? 'bg-[#0d1322] border-gray-800 text-gray-300 hover:text-white hover:border-rose-600 hover:bg-rose-950/40 shadow-sm' 
                          : 'bg-gray-100 border-gray-300 text-gray-700 hover:text-rose-600 hover:border-rose-600 hover:bg-rose-50 shadow-sm'
                      }`}
                      title="Podcast & Audio Spotify"
                    >
                      <Radio className="w-4 h-4 group-hover:scale-110 transition" />
                    </a>

                    <a 
                      href="mailto:contact@malakaproject.id" 
                      className={`h-11 rounded-xl border flex items-center justify-center transition group ${
                        isDarkMode 
                          ? 'bg-[#0d1322] border-gray-800 text-gray-300 hover:text-white hover:border-rose-600 hover:bg-rose-950/40 shadow-sm' 
                          : 'bg-gray-100 border-gray-300 text-gray-700 hover:text-rose-600 hover:border-rose-600 hover:bg-rose-50 shadow-sm'
                      }`}
                      title="Email Korespondensi"
                    >
                      <Mail className="w-4 h-4 group-hover:scale-110 transition" />
                    </a>
                  </div>
                </div>

              </div>
            </motion.div>

            {/* Quick Summary Pill & Impact Metrics */}
            <div className={`p-5 rounded-2xl border space-y-3 shadow-lg ${cardBgClass}`}>
              <div className="flex items-center justify-between text-xs font-bold">
                <span className={subTextClass}>STATUS KURASI SEKTOR LOKAL</span>
                <span className="text-rose-600 font-display uppercase tracking-wide flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  MAINSTREAM DISRUPTOR
                </span>
              </div>
              <div className="pt-2 border-t border-inherit/10 flex items-center justify-between text-[11px] font-medium">
                <span className={subTextClass}>VALUASI DAMPAK SOSIAL</span>
                <span className="font-mono text-emerald-500 font-bold">Rp 10+ Miliar Dana Publik Diselamatkan</span>
              </div>
            </div>

          </aside>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: FLUID EDITORIAL CONTENT FEED (7 of 12 cols) */}
          {/* ========================================================= */}
          <main className="lg:col-span-7 space-y-12 sm:space-y-16">

            {/* ------------------------------------------------------- */}
            {/* SECTION 1: TENTANG (Sesuai Sketsa 2 Canva)              */}
            {/* ------------------------------------------------------- */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              id="tentang" 
              className={`p-6 sm:p-10 md:p-12 rounded-3xl border shadow-xl space-y-8 ${cardBgClass}`}
            >
              <div className="flex items-center justify-between border-b pb-4 border-inherit/20">
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-display uppercase tracking-tight text-inherit">
                  TENTANG FERRY IRWANDI
                </h2>
                <span className="font-mono text-xs font-bold text-rose-600 tracking-widest hidden sm:inline">
                  01 // BIOGRAFI
                </span>
              </div>

              <div className="space-y-5 text-sm md:text-base leading-relaxed text-inherit/90 font-medium text-justify">
                <p>
                  <strong className="text-rose-600 font-bold">Ferry Irwandi</strong> adalah mantan aparatur sipil negara (ASN) di lingkungan Kementerian Keuangan yang mengambil langkah berani untuk keluar dari zona nyaman birokrasi demi mendedikasikan hidupnya sebagai kreator esai video, edukator finansial kritis, dan katalisator gerakan aksi warga.
                </p>
                <p>
                  Dikenal luas melalui pendekatan komunikasi yang analitis, bernas, dan membumi, ia konsisten memanfaatkan panggung media digitalnya untuk membongkar kejahatan penipuan keuangan sistemik serta membakar semangat pemikiran rasional bagi jutaan anak muda Indonesia.
                </p>
              </div>

              {/* Quote Block with Animated Red Bar (Sesuai Sketsa Canva) */}
              <div className={`p-6 md:p-8 rounded-2xl border flex items-stretch justify-between gap-6 shadow-md relative overflow-hidden ${quoteBgClass}`}>
                <div className="space-y-3">
                  <div className="text-rose-600 font-editorial text-4xl leading-none">&ldquo;</div>
                  <blockquote className="font-editorial italic font-bold text-base md:text-xl leading-relaxed text-inherit">
                    Berpikir kritis adalah benteng terakhir kebebasan individu di tengah gempuran skema penipuan dan kebodohan finansial.
                  </blockquote>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-rose-600 font-sans">
                    — Catatan Prinsipil Ferry Irwandi
                  </p>
                </div>

                {/* Animated Red Accent Bar Right */}
                <div className="red-accent-bar-animated shrink-0 rounded-xs" />
              </div>

              {/* Value Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {['NALAR KRITIS', 'STOIKISME TERAPAN', 'ADVOKASI PUBLIK', 'INDEPENDENSI RISET'].map((tag, i) => (
                  <span key={i} className={`px-3 py-1 rounded-md text-[11px] font-bold font-mono uppercase border ${
                    isDarkMode ? 'bg-gray-900 border-gray-800 text-gray-300' : 'bg-gray-100 border-gray-200 text-gray-700'
                  }`}>
                    #{tag}
                  </span>
                ))}
              </div>
            </motion.section>

            {/* ------------------------------------------------------- */}
            {/* SECTION 2: PERJALANAN HIDUP (Timeline Hidup Berpendar)  */}
            {/* ------------------------------------------------------- */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              id="perjalanan" 
              className={`p-6 sm:p-10 md:p-12 rounded-3xl border shadow-xl space-y-8 ${cardBgClass}`}
            >
              <div className="flex items-center justify-between border-b pb-4 border-inherit/20">
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-display uppercase tracking-tight text-inherit">
                  PERJALANAN HIDUP
                </h2>
                <span className="font-mono text-xs font-bold text-rose-600 tracking-widest hidden sm:inline">
                  02 // REKAM JEJAK
                </span>
              </div>

              {/* Timeline Layout with Animated Red Vertical Track Bar */}
              <div className="relative pl-7 sm:pl-9 space-y-9">
                {/* Red Animated Glowing Track Line */}
                <div className="absolute left-0 top-2 bottom-2 w-2.5 timeline-track-glow rounded-full" />

                {/* Item 1 */}
                <div className="relative space-y-1.5 group">
                  <div className={`absolute -left-[35px] sm:-left-[43px] top-1.5 w-5 h-5 border-2 border-rose-600 rounded-xs shadow-md shadow-rose-600/30 group-hover:bg-rose-600 transition ${
                    isDarkMode ? 'bg-[#070a10]' : 'bg-white'
                  }`} />
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-rose-600/10 text-rose-600 border border-rose-600/20">2013 — 2020</span>
                    <span className={`text-[10px] font-bold uppercase tracking-wider ${subTextClass}`}>FASE 01</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-display uppercase text-inherit tracking-wide group-hover:text-rose-600 transition">
                    ABDI NEGARA (KEMENTERIAN KEUANGAN)
                  </h3>
                  <p className={`text-xs md:text-sm leading-relaxed ${subTextClass}`}>
                    Mengabdi di Kementerian Keuangan Republik Indonesia, menyaksikan secara langsung seluk-beluk arsitektur anggaran negara dan realitas ketimpangan ekonomi masyarakat dari dalam sistem.
                  </p>
                </div>

                {/* Item 2 */}
                <div className="relative space-y-1.5 group">
                  <div className={`absolute -left-[35px] sm:-left-[43px] top-1.5 w-5 h-5 border-2 border-rose-600 rounded-xs shadow-md shadow-rose-600/30 group-hover:bg-rose-600 transition ${
                    isDarkMode ? 'bg-[#070a10]' : 'bg-white'
                  }`} />
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-rose-600/10 text-rose-600 border border-rose-600/20">2021</span>
                    <span className={`text-[10px] font-bold uppercase tracking-wider ${subTextClass}`}>FASE 02</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-display uppercase text-inherit tracking-wide group-hover:text-rose-600 transition">
                    TITIK BALIK & RESIGNASI
                  </h3>
                  <p className={`text-xs md:text-sm leading-relaxed ${subTextClass}`}>
                    Memilih melepaskan posisi stabil sebagai aparatur sipil negara demi memperjuangkan independensi narasi, kebebasan bersuara, dan edukasi publik tanpa sekat birokrasi formal.
                  </p>
                </div>

                {/* Item 3 */}
                <div className="relative space-y-1.5 group">
                  <div className={`absolute -left-[35px] sm:-left-[43px] top-1.5 w-5 h-5 border-2 border-rose-600 rounded-xs shadow-md shadow-rose-600/30 group-hover:bg-rose-600 transition ${
                    isDarkMode ? 'bg-[#070a10]' : 'bg-white'
                  }`} />
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-rose-600/10 text-rose-600 border border-rose-600/20">2022 — 2023</span>
                    <span className={`text-[10px] font-bold uppercase tracking-wider ${subTextClass}`}>FASE 03</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-display uppercase text-inherit tracking-wide group-hover:text-rose-600 transition">
                    INISIATIF KOLEKTIF MALAKA PROJECT
                  </h3>
                  <p className={`text-xs md:text-sm leading-relaxed ${subTextClass}`}>
                    Mendirikan Malaka Project bersama tim kreatif independen untuk memproduksi video esai berbobot tinggi tentang filsafat, stoikisme, matematika keuangan, dan kesadaran hak-hak warga.
                  </p>
                </div>

                {/* Item 4 */}
                <div className="relative space-y-1.5 group">
                  <div className={`absolute -left-[35px] sm:-left-[43px] top-1.5 w-5 h-5 border-2 border-rose-600 rounded-xs shadow-md shadow-rose-600/30 group-hover:bg-rose-600 transition ${
                    isDarkMode ? 'bg-[#070a10]' : 'bg-white'
                  }`} />
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-rose-600/10 text-rose-600 border border-rose-600/20">2024 — SEKARANG</span>
                    <span className={`text-[10px] font-bold uppercase tracking-wider ${subTextClass}`}>FASE 04</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-display uppercase text-inherit tracking-wide group-hover:text-rose-600 transition">
                    DAMPAK LAPANGAN & BEASISWA WARGA
                  </h3>
                  <p className={`text-xs md:text-sm leading-relaxed ${subTextClass}`}>
                    Menyelamatkan jutaan warga dari jerat skema ponzi dan judi daring serta memobilisasi dana beasiswa pendidikan publik bernilai miliaran rupiah bagi anak-anak daerah berprestasi.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* ------------------------------------------------------- */}
            {/* SECTION 3: DISCOVERY KARYA (Accordion Animasi)          */}
            {/* ------------------------------------------------------- */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              id="karya" 
              className="space-y-6"
            >
              <div className="flex items-center justify-between border-b pb-4 border-inherit/20">
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-display uppercase tracking-tight text-inherit">
                  DISCOVERY KARYA
                </h2>
                <span className="font-mono text-xs font-bold text-rose-600 tracking-widest hidden sm:inline">
                  03 // EKSPLORASI
                </span>
              </div>

              <div className="space-y-4">
                {karyaList.map((karya, idx) => {
                  const isOpen = activeAccordion === idx;
                  return (
                    <div 
                      key={idx}
                      onClick={() => setActiveAccordion(isOpen ? null : idx)}
                      className={`cursor-pointer rounded-2xl p-6 sm:p-7 transition-all ${
                        isOpen 
                          ? (isDarkMode ? 'red-outline-card-dark' : 'red-outline-card-light') 
                          : (isDarkMode ? 'accordion-closed-dark' : 'accordion-closed-light')
                      }`}
                    >
                      <div className="flex items-start sm:items-center justify-between gap-4">
                        <div className="space-y-1">
                          <span className="text-[10px] font-mono font-bold text-rose-500 tracking-wider">
                            {karya.badge}
                          </span>
                          <h3 className="text-lg sm:text-xl md:text-2xl font-display uppercase text-inherit tracking-wide leading-snug">
                            {karya.title}
                          </h3>
                        </div>
                        <span className={`w-8 h-8 rounded-full border flex items-center justify-center font-mono font-bold text-lg shrink-0 transition ${
                          isOpen 
                            ? 'bg-rose-600 text-white border-rose-600 rotate-180' 
                            : 'border-rose-600/40 text-rose-600'
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
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="overflow-hidden"
                          >
                            <div className="mt-4 pt-4 border-t border-rose-600/30 space-y-4">
                              <p className={`text-xs md:text-sm leading-relaxed font-medium ${subTextClass}`}>
                                {karya.desc}
                              </p>
                              <div className="flex justify-end pt-1">
                                <a 
                                  href={karya.link} 
                                  target="_blank" 
                                  rel="noreferrer"
                                  onClick={(e) => e.stopPropagation()}
                                  className="px-5 py-2.5 bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs rounded-xl transition flex items-center gap-2 shadow-md shadow-rose-600/30 hover:shadow-rose-600/50"
                                >
                                  <LinkIcon className="w-3.5 h-3.5" />
                                  <span>Buka Karya Lengkap</span>
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

            {/* ------------------------------------------------------- */}
            {/* SECTION 4: ARTIKEL & WAWASAN (Sesuai Sketsa 5 Canva)    */}
            {/* ------------------------------------------------------- */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              id="artikel" 
              className="space-y-6"
            >
              <div className="flex items-center justify-between border-b pb-4 border-inherit/20">
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-display uppercase tracking-tight text-inherit">
                  ARTIKEL & WAWASAN
                </h2>
                <span className="font-mono text-xs font-bold text-rose-600 tracking-widest hidden sm:inline">
                  04 // ESAI & RISET
                </span>
              </div>

              <div className="space-y-6">
                {artikelList.map((art, idx) => (
                  <div 
                    key={idx} 
                    className={`p-6 sm:p-8 rounded-2xl space-y-4 transition-all ${
                      isDarkMode ? 'red-outline-card-dark' : 'red-outline-card-light'
                    }`}
                  >
                    <div className="flex items-center justify-between text-[11px] font-bold">
                      <span className="px-2.5 py-0.5 rounded bg-rose-600/10 text-rose-600 border border-rose-600/20 font-mono">
                        {art.tag}
                      </span>
                      <span className={subTextClass}>{art.readTime}</span>
                    </div>

                    <h3 className="text-lg sm:text-xl md:text-2xl font-display uppercase text-inherit tracking-wide leading-snug">
                      {art.title}
                    </h3>
                    
                    <p className={`text-xs md:text-sm leading-relaxed font-medium ${subTextClass}`}>
                      {art.desc}
                    </p>

                    <div className="flex justify-end pt-2">
                      <a 
                        href={art.link} 
                        target="_blank" 
                        rel="noreferrer"
                        className="px-5 py-2.5 bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs rounded-xl transition flex items-center gap-2 shadow-md shadow-rose-600/30 hover:shadow-rose-600/50"
                      >
                        <LinkIcon className="w-3.5 h-3.5" />
                        <span>Baca Analisis Lengkap</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Animated Loading Spinner */}
              <div className="flex flex-col items-center justify-center pt-6 space-y-2">
                <Loader2 className="w-7 h-7 text-rose-600 animate-spin" />
                <span className={`text-[11px] font-mono tracking-widest uppercase ${subTextClass}`}>
                  MEMUAT DOKUMENTASI ARSIP BERIKUTNYA...
                </span>
              </div>
            </motion.section>

            {/* ------------------------------------------------------- */}
            {/* SECTION 5: KATA WARGA (Testimonials)                   */}
            {/* ------------------------------------------------------- */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              id="kata-warga" 
              className="space-y-6"
            >
              <div className="flex items-center justify-between border-b pb-4 border-inherit/20">
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-display uppercase tracking-tight text-inherit">
                  KATA WARGA & TESTIMONI
                </h2>
                <span className="font-mono text-xs font-bold text-rose-600 tracking-widest hidden sm:inline">
                  05 // SUARA PUBLIK
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {kataWargaList.map((item, idx) => (
                  <div 
                    key={idx} 
                    className={`p-6 sm:p-7 rounded-2xl border space-y-4 flex flex-col justify-between shadow-lg hover:-translate-y-1 transition duration-300 ${cardBgClass}`}
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="w-9 h-9 rounded-full bg-rose-600 text-white font-display text-base flex items-center justify-center shadow-md shadow-rose-600/30">
                          {item.initials}
                        </div>
                        <span className="text-rose-600 font-editorial text-2xl font-bold">“</span>
                      </div>

                      <blockquote className="font-editorial italic font-semibold text-xs sm:text-sm leading-relaxed text-inherit">
                        &ldquo;{item.quote}&rdquo;
                      </blockquote>
                    </div>

                    <div className="pt-3 border-t border-inherit/10">
                      <div className="flex items-center gap-1.5">
                        <p className="font-display uppercase text-base text-inherit">{item.nama}</p>
                        <CheckCircle2 className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                      </div>
                      <p className={`text-[10px] ${subTextClass}`}>{item.peran}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* ------------------------------------------------------- */}
            {/* SECTION 6: PRODUK TERKAIT & DUKUNGAN (Merchandise/Buku) */}
            {/* ------------------------------------------------------- */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              id="produk" 
              className="space-y-6"
            >
              <div className="flex items-center justify-between border-b pb-4 border-inherit/20">
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-display uppercase tracking-tight text-inherit">
                  PRODUK TERKAIT & DUKUNGAN
                </h2>
                <span className="font-mono text-xs font-bold text-rose-600 tracking-widest hidden sm:inline">
                  06 // EKOSISTEM
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {produkList.map((prod, idx) => (
                  <div 
                    key={idx} 
                    className={`p-6 sm:p-7 rounded-2xl border space-y-5 flex flex-col justify-between shadow-lg hover:-translate-y-1 transition duration-300 ${cardBgClass}`}
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-[10px] font-mono font-bold">
                        <span className="text-rose-600">{prod.category}</span>
                        <span className={`px-2 py-0.5 rounded ${
                          isDarkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-600'
                        }`}>
                          {prod.status}
                        </span>
                      </div>

                      <h3 className="font-display uppercase text-lg sm:text-xl text-inherit tracking-wide leading-snug">
                        {prod.title}
                      </h3>

                      <p className={`text-xs leading-relaxed ${subTextClass}`}>
                        {prod.desc}
                      </p>
                    </div>

                    <button 
                      onClick={() => window.open('https://malakaproject.id', '_blank')}
                      className="w-full py-3 bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs rounded-xl transition flex items-center justify-center gap-2 shadow-md shadow-rose-600/30 hover:shadow-rose-600/50 group"
                    >
                      <span>{prod.action}</span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
                    </button>
                  </div>
                ))}
              </div>
            </motion.section>

          </main>

        </div>
      </div>

      {/* ========================================================= */}
      {/* FOOTER SECTION                                            */}
      {/* ========================================================= */}
      <footer className={`border-t py-12 px-6 mt-16 ${
        isDarkMode ? 'bg-[#05070c] border-gray-800 text-gray-400' : 'bg-gray-100 border-gray-200 text-gray-600'
      }`}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-xs">
          <div className="flex items-center gap-2.5 font-display text-xl text-inherit">
            <span>SEKTOR LOKAL</span>
            <span className="w-3.5 h-4 bg-rose-600 rounded-xs inline-block" />
          </div>

          <p className="text-center md:text-left">
            © 2026 Sektor Lokal. Dokumentasi Kurasi Figur Kebanggaan Warga Indonesia Era Pop Modern.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-rose-600 hover:text-rose-500 transition"
          >
            <span>KEMBALI KE ATAS</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </footer>

    </div>
  );
}
