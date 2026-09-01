'use client';

import React, { useState } from 'react';
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
  Quote, 
  BookOpen, 
  ShoppingBag, 
  HeartHandshake,
  CheckCircle2,
  ArrowUpRight
} from 'lucide-react';

export default function MahakaryaEditorialPage() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Dynamic Theme Colors
  const bgClass = isDarkMode ? 'bg-[#070a10] text-gray-100' : 'bg-[#f8fafc] text-gray-900';
  const cardBgClass = isDarkMode ? 'bg-[#0b0f19] border-gray-800 text-gray-100' : 'bg-white border-gray-200 text-gray-900';
  const subTextClass = isDarkMode ? 'text-gray-400' : 'text-gray-600';
  const quoteBgClass = isDarkMode ? 'bg-[#0d1322] text-gray-100 border-gray-800' : 'bg-gray-50 text-gray-900 border-gray-200';

  const karyaList = [
    {
      title: "SERIAL PEMBONGKARAN SKEMA PONZI",
      desc: "Menguliti secara ilmiah matematika di balik skema ponzi, judi online, dan kejahatan finansial digital yang memiskinkan jutaan warga Indonesia.",
      link: "https://youtube.com/@ferryirwandi"
    },
    {
      title: "BUKU PRINSIPAL EKONOMI & STOIKISME",
      desc: "Karya literatur panduan praktis mengadopsi filsafat stoikisme dan logika sains untuk menghadapi krisis mental serta ketidakpastian ekonomi generasi muda.",
      link: "https://youtube.com/@ferryirwandi"
    },
    {
      title: "MALAKA PROJECT",
      desc: "Platform edukasi kolektif independen yang memproduksi esai video berbobot tinggi tentang filsafat, stoikisme, ekonomi mikro, dan kesadaran politik warga.",
      link: "https://malakaproject.id"
    },
    {
      title: "GERAKAN BEASISWA WARGA",
      desc: "Inisiatif penggalangan dana publik transparan yang membiayai kuliah puluhan mahasiswa daerah berprestasi dari keluarga kurang mampu secara berkelanjutan.",
      link: "https://youtube.com/@ferryirwandi"
    }
  ];

  const artikelList = [
    {
      title: "ANALISIS KRITIS KEUANGAN & LITERASI MASYARAKAT",
      desc: "Ulasan mendalam mengenai pentingnya membangun nalar kritis sebagai benteng pertahanan terakhir dari jeratan skema penipuan finansial digital.",
      link: "https://youtube.com/@ferryirwandi"
    },
    {
      title: "STOIKISME: BUKAN PASRAH, TAPI AKSI NYATA",
      desc: "Membedah esensi sejati filosofi stoikisme untuk memfokuskan energi pada hal-hal yang bisa dikendalikan di tengah krisis sosial perkotaan.",
      link: "https://youtube.com/@ferryirwandi"
    }
  ];

  const kataWargaList = [
    {
      nama: "Gita Wirjawan",
      peran: "Pendidik & Pengasuh Podcast Endgame",
      quote: "Ferry mampu mengemas analisis keuangan dan diskursus sosial yang berat menjadi narasi yang sangat relevan dan dicintai generasi muda."
    },
    {
      nama: "Baskara Putra (Hindia)",
      peran: "Musisi & Penulis Lagu",
      quote: "Konsistensinya menyuarakan kebenaran di tengah riuhnya internet memberikan rasa aman bagi anak muda yang haus akan akal sehat."
    },
    {
      nama: "Rian (Mahasiswa Daerah)",
      peran: "Penerima Beasiswa Warga",
      quote: "Berkat konten edukasi Mas Ferry, keluarga saya terselamatkan dari jeratan pinjol dan saya bisa melanjutkan kuliah dengan beasiswa warga."
    }
  ];

  const produkList = [
    {
      title: "JURNAL & BUKU STOIKISME PUBLIK",
      desc: "Buku panduan bernalar kritis dan catatan refleksi harian bagi pemuda dalam mengambil keputusan hidup.",
      action: "Lihat Buku"
    },
    {
      title: "APPAREL KOLEKTIF MALAKA PROJECT",
      desc: "Merchandise resmi sebagai bentuk dukungan langsung terhadap kemandirian media dan riset independen Malaka.",
      action: "Dukung Malaka"
    },
    {
      title: "DANA BEASISWA KELAS WARGA",
      desc: "Saluran donasi kolektif gotong royong untuk membiayai uang kuliah tunggal (UKT) anak-anak daerah berprestasi.",
      action: "Salurkan Donasi"
    }
  ];

  return (
    <div className={`min-h-screen ${bgClass} transition-colors duration-300`}>

      {/* TOP NAVIGATION BAR */}
      <nav className={`sticky top-0 z-50 backdrop-blur-xl border-b px-6 py-4 ${isDarkMode ? 'bg-[#070a10]/90 border-gray-800' : 'bg-white/90 border-gray-200'}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo SEKTOR LOKAL (Canva Style) */}
          <div className="flex items-center gap-2">
            <div className="flex flex-col leading-none font-display text-2xl tracking-tight text-inherit">
              <span>SEKTOR</span>
              <div className="flex items-center gap-1.5">
                <span>LOKAL</span>
                <span className="w-3.5 h-4 bg-rose-600 rounded-xs flex items-center justify-center text-[10px] text-white font-bold shadow-sm">
                  🏮
                </span>
              </div>
            </div>
          </div>

          {/* Right Action: Theme Switcher & Menu Toggle */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2.5 rounded-xl border transition flex items-center gap-2 text-xs font-bold ${
                isDarkMode 
                  ? 'bg-[#0b0f19] border-gray-700 text-yellow-400 hover:border-yellow-400/50' 
                  : 'bg-gray-100 border-gray-300 text-gray-800 hover:bg-gray-200'
              }`}
              title="Ganti Tema Light / Dark Mode"
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              <span className="hidden sm:inline font-sans">{isDarkMode ? 'LIGHT MODE' : 'DARK MODE'}</span>
            </button>

            {/* Hamburger Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-xl border transition ${isDarkMode ? 'border-gray-800 text-white hover:border-rose-600' : 'border-gray-300 text-gray-900 hover:border-rose-600'}`}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </nav>

      {/* MOBILE MENU DROPDOWN */}
      {isMenuOpen && (
        <div className={`fixed inset-0 top-[73px] z-40 p-8 flex flex-col space-y-6 text-2xl font-display uppercase tracking-wide border-b border-rose-600 backdrop-blur-2xl ${isDarkMode ? 'bg-[#070a10]/98 text-white' : 'bg-white/98 text-gray-900'}`}>
          <a href="#hero" onClick={() => setIsMenuOpen(false)} className="hover:text-rose-600 transition">PROFILE COVER</a>
          <a href="#tentang" onClick={() => setIsMenuOpen(false)} className="hover:text-rose-600 transition">TENTANG</a>
          <a href="#perjalanan" onClick={() => setIsMenuOpen(false)} className="hover:text-rose-600 transition">PERJALANAN HIDUP</a>
          <a href="#karya" onClick={() => setIsMenuOpen(false)} className="hover:text-rose-600 transition">DISCOVERY KARYA</a>
          <a href="#artikel" onClick={() => setIsMenuOpen(false)} className="hover:text-rose-600 transition">ARTIKEL & WAWASAN</a>
          <a href="#kata-warga" onClick={() => setIsMenuOpen(false)} className="hover:text-rose-600 transition">KATA WARGA</a>
          <a href="#produk" onClick={() => setIsMenuOpen(false)} className="hover:text-rose-600 transition">PRODUK TERKAIT</a>
        </div>
      )}

      {/* ASYMMETRIC 2-COLUMN DESKTOP GRID (max-w-7xl) */}
      <div className="max-w-7xl mx-auto px-6 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* ========================================================= */}
          {/* LEFT COLUMN: STICKY PROFILE HERO SIDEBAR (5 of 12 cols)  */}
          {/* ========================================================= */}
          <aside className="lg:col-span-5 lg:sticky lg:top-24 space-y-6">
            
            {/* Framed Photo Container (Canva Hero Style) */}
            <div className={`rounded-3xl border overflow-hidden shadow-2xl transition-all ${isDarkMode ? 'bg-[#080b11] border-gray-800' : 'bg-white border-gray-300'}`}>
              
              <div className="relative w-full aspect-[4/5] bg-gray-900 overflow-hidden flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80" 
                  alt="Ferry Irwandi" 
                  className="w-full h-full object-cover filter grayscale contrast-125 hover:scale-105 transition duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${isDarkMode ? 'from-[#080b11] via-transparent to-transparent' : 'from-white/60 via-transparent to-transparent'}`} />
              </div>

              {/* Title & Red Bar Box */}
              <div className="p-6 md:p-8 space-y-4">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <span className="text-[11px] font-bold tracking-widest text-rose-600 uppercase font-sans">
                      POTRET KEBAANGGAAN WARGA #001
                    </span>
                    <h1 className="text-4xl md:text-6xl font-display uppercase tracking-tight text-inherit leading-none mt-1">
                      FERRY IRWANDI
                    </h1>
                  </div>

                  {/* Red Accent Bar (Sesuai Sketsa Canva) */}
                  <div className="red-accent-bar h-14 md:h-20 shrink-0 rounded-xs" />
                </div>

                {/* Subtitle in Playfair Display (Sesuai Koreksi Font) */}
                <p className="font-editorial italic font-semibold text-sm md:text-base tracking-wide text-rose-600">
                  THE VOICES • DISRUPTOR • LITERASI KRITIS
                </p>

                {/* DERETAN IKON SOSMED DI BAWAH NAMA */}
                <div className="pt-3 border-t border-gray-800/40">
                  <span className={`text-[10px] font-bold uppercase tracking-wider block mb-2 ${subTextClass}`}>
                    AKSES PROFIL DIGITAL
                  </span>
                  <div className="flex items-center gap-2.5">
                    <a 
                      href="https://youtube.com/@ferryirwandi" 
                      target="_blank" 
                      rel="noreferrer"
                      className={`w-10 h-10 rounded-xl border flex items-center justify-center transition ${
                        isDarkMode 
                          ? 'bg-[#0d1322] border-gray-700 text-gray-300 hover:text-white hover:border-rose-600 hover:bg-rose-950/40' 
                          : 'bg-gray-100 border-gray-300 text-gray-700 hover:text-rose-600 hover:border-rose-600 hover:bg-rose-50'
                      }`}
                      title="YouTube Channel"
                    >
                      <Youtube className="w-4 h-4" />
                    </a>

                    <a 
                      href="https://twitter.com/ferryirwandi" 
                      target="_blank" 
                      rel="noreferrer"
                      className={`w-10 h-10 rounded-xl border flex items-center justify-center transition ${
                        isDarkMode 
                          ? 'bg-[#0d1322] border-gray-700 text-gray-300 hover:text-white hover:border-rose-600 hover:bg-rose-950/40' 
                          : 'bg-gray-100 border-gray-300 text-gray-700 hover:text-rose-600 hover:border-rose-600 hover:bg-rose-50'
                      }`}
                      title="X / Twitter"
                    >
                      <Twitter className="w-4 h-4" />
                    </a>

                    <a 
                      href="https://instagram.com/ferryirwandi" 
                      target="_blank" 
                      rel="noreferrer"
                      className={`w-10 h-10 rounded-xl border flex items-center justify-center transition ${
                        isDarkMode 
                          ? 'bg-[#0d1322] border-gray-700 text-gray-300 hover:text-white hover:border-rose-600 hover:bg-rose-950/40' 
                          : 'bg-gray-100 border-gray-300 text-gray-700 hover:text-rose-600 hover:border-rose-600 hover:bg-rose-50'
                      }`}
                      title="Instagram"
                    >
                      <Instagram className="w-4 h-4" />
                    </a>

                    <a 
                      href="https://spotify.com" 
                      target="_blank" 
                      rel="noreferrer"
                      className={`w-10 h-10 rounded-xl border flex items-center justify-center transition ${
                        isDarkMode 
                          ? 'bg-[#0d1322] border-gray-700 text-gray-300 hover:text-white hover:border-rose-600 hover:bg-rose-950/40' 
                          : 'bg-gray-100 border-gray-300 text-gray-700 hover:text-rose-600 hover:border-rose-600 hover:bg-rose-50'
                      }`}
                      title="Podcast & Audio"
                    >
                      <Radio className="w-4 h-4" />
                    </a>

                    <a 
                      href="mailto:contact@malakaproject.id" 
                      className={`w-10 h-10 rounded-xl border flex items-center justify-center transition ${
                        isDarkMode 
                          ? 'bg-[#0d1322] border-gray-700 text-gray-300 hover:text-white hover:border-rose-600 hover:bg-rose-950/40' 
                          : 'bg-gray-100 border-gray-300 text-gray-700 hover:text-rose-600 hover:border-rose-600 hover:bg-rose-50'
                      }`}
                      title="Email Korespondensi"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Quick Summary Pill */}
            <div className={`p-5 rounded-2xl border ${cardBgClass} flex items-center justify-between text-xs font-bold`}>
              <span className={subTextClass}>STATUS KURASI SECTOR LOKAL</span>
              <span className="text-rose-600 font-display uppercase tracking-wide">60% MAINSTREAM DISRUPTOR</span>
            </div>

          </aside>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: FLUID EDITORIAL CONTENT FEED (7 of 12 cols) */}
          {/* ========================================================= */}
          <main className="lg:col-span-7 space-y-16">

            {/* ------------------------------------------------------- */}
            {/* SECTION 1: TENTANG (Sesuai Sketsa 2 Canva)              */}
            {/* ------------------------------------------------------- */}
            <section id="tentang" className={`p-8 md:p-12 rounded-3xl border shadow-xl space-y-8 ${cardBgClass}`}>
              <h2 className="text-3xl md:text-5xl font-display uppercase tracking-tight text-inherit border-b pb-4 border-inherit/20">
                TENTANG FERRY IRWANDI
              </h2>

              <div className="space-y-5 text-sm md:text-base leading-relaxed text-inherit/90 font-medium text-justify">
                <p>
                  Ferry Irwandi adalah mantan ASN Kementerian Keuangan yang mengambil keputusan berani untuk keluar dari zona nyaman birokrasi demi mendedikasikan hidupnya sebagai kreator esai video, edukator finansial kritis, dan penggerak aksi warga.
                </p>
                <p>
                  Dikenal lewat cara penyampaiannya yang analitis, tajam, dan membumi, ia konsisten menggunakan panggung media digitalnya untuk membongkar kejahatan keuangan serta membakar semangat pemikiran rasional bagi anak muda Indonesia.
                </p>
              </div>

              {/* Quote Block with Red Accent Bar (Sesuai Sketsa Canva) */}
              <div className={`p-6 rounded-2xl border flex items-stretch justify-between gap-6 ${quoteBgClass}`}>
                <blockquote className="font-editorial italic font-semibold text-base md:text-xl leading-relaxed text-inherit">
                  &ldquo;Berpikir kritis adalah benteng terakhir kebebasan individu di tengah gempuran skema penipuan dan kebodohan finansial.&rdquo;
                </blockquote>

                {/* Red Accent Bar Right */}
                <div className="red-accent-bar shrink-0 rounded-xs" />
              </div>
            </section>

            {/* ------------------------------------------------------- */}
            {/* SECTION 2: PERJALANAN HIDUP (Sesuai Sketsa 3 Canva)     */}
            {/* ------------------------------------------------------- */}
            <section id="perjalanan" className={`p-8 md:p-12 rounded-3xl border shadow-xl space-y-8 ${cardBgClass}`}>
              <h2 className="text-3xl md:text-5xl font-display uppercase tracking-tight text-inherit border-b pb-4 border-inherit/20">
                PERJALANAN HIDUP
              </h2>

              {/* Timeline Layout with Left Red Vertical Track Bar */}
              <div className="relative pl-8 space-y-8">
                {/* Red Track Line */}
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-rose-600 rounded-full" />

                {/* Item 1 */}
                <div className="relative space-y-1.5">
                  <div className={`absolute -left-[39px] top-1.5 w-5 h-5 border-2 border-rose-600 rounded-xs ${isDarkMode ? 'bg-[#070a10]' : 'bg-white'}`} />
                  <h3 className="text-lg md:text-xl font-display uppercase text-inherit tracking-wide">
                    ABDI NEGARA (KEMENKEU)
                  </h3>
                  <p className={`text-xs md:text-sm leading-relaxed ${subTextClass}`}>
                    Mengabdi di Kementerian Keuangan, menyaksikan secara langsung arsitektur anggaran dan realitas ketimpangan ekonomi warga.
                  </p>
                </div>

                {/* Item 2 */}
                <div className="relative space-y-1.5">
                  <div className={`absolute -left-[39px] top-1.5 w-5 h-5 border-2 border-rose-600 rounded-xs ${isDarkMode ? 'bg-[#070a10]' : 'bg-white'}`} />
                  <h3 className="text-lg md:text-xl font-display uppercase text-inherit tracking-wide">
                    TITIK BALIK
                  </h3>
                  <p className={`text-xs md:text-sm leading-relaxed ${subTextClass}`}>
                    Memilih melepaskan posisi stabil ASN demi memperjuangkan independensi narasi dan edukasi publik tanpa sekat birokrasi.
                  </p>
                </div>

                {/* Item 3 */}
                <div className="relative space-y-1.5">
                  <div className={`absolute -left-[39px] top-1.5 w-5 h-5 border-2 border-rose-600 rounded-xs ${isDarkMode ? 'bg-[#070a10]' : 'bg-white'}`} />
                  <h3 className="text-lg md:text-xl font-display uppercase text-inherit tracking-wide">
                    INISIATIF KOLEKTIF
                  </h3>
                  <p className={`text-xs md:text-sm leading-relaxed ${subTextClass}`}>
                    Mendirikan Malaka Project bersama tim independen untuk memproduksi esai video berbobot tinggi tentang filsafat, stoikisme, dan politik warga.
                  </p>
                </div>

                {/* Item 4 */}
                <div className="relative space-y-1.5">
                  <div className={`absolute -left-[39px] top-1.5 w-5 h-5 border-2 border-rose-600 rounded-xs ${isDarkMode ? 'bg-[#070a10]' : 'bg-white'}`} />
                  <h3 className="text-lg md:text-xl font-display uppercase text-inherit tracking-wide">
                    DAMPAK LAPANGAN
                  </h3>
                  <p className={`text-xs md:text-sm leading-relaxed ${subTextClass}`}>
                    Menyelamatkan jutaan warga dari skema ponzi/judi online serta menggalang dana beasiswa pendidikan publik bernilai miliaran rupiah.
                  </p>
                </div>
              </div>
            </section>

            {/* ------------------------------------------------------- */}
            {/* SECTION 3: DISCOVERY KARYA (Sesuai Sketsa 4 Canva)      */}
            {/* ------------------------------------------------------- */}
            <section id="karya" className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-display uppercase tracking-tight text-inherit border-b pb-4 border-inherit/20">
                DISCOVERY KARYA
              </h2>

              <div className="space-y-4">
                {karyaList.map((karya, idx) => {
                  const isOpen = activeAccordion === idx;
                  return (
                    <div 
                      key={idx}
                      onClick={() => setActiveAccordion(isOpen ? null : idx)}
                      className={`cursor-pointer rounded-2xl p-6 transition-all ${
                        isOpen 
                          ? (isDarkMode ? 'red-outline-card-dark' : 'red-outline-card-light') 
                          : (isDarkMode ? 'accordion-closed-dark' : 'accordion-closed-light')
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg md:text-2xl font-display uppercase text-inherit tracking-wide">
                          {karya.title}
                        </h3>
                        <span className="text-rose-600 font-bold text-lg font-mono">
                          {isOpen ? '−' : '+'}
                        </span>
                      </div>

                      {isOpen && (
                        <div className="mt-4 pt-4 border-t border-rose-600/30 space-y-4">
                          <p className={`text-xs md:text-sm leading-relaxed font-medium ${subTextClass}`}>
                            {karya.desc}
                          </p>
                          <div className="flex justify-end">
                            <a 
                              href={karya.link} 
                              target="_blank" 
                              rel="noreferrer"
                              className="px-5 py-2 bg-rose-600 text-white font-bold text-xs rounded-full hover:bg-rose-700 transition flex items-center gap-1.5 shadow-md shadow-rose-600/20"
                            >
                              <LinkIcon className="w-3.5 h-3.5" />
                              <span>Buka Karya</span>
                            </a>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* ------------------------------------------------------- */}
            {/* SECTION 4: ARTIKEL & WAWASAN (Sesuai Sketsa 5 Canva)    */}
            {/* ------------------------------------------------------- */}
            <section id="artikel" className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-display uppercase tracking-tight text-inherit border-b pb-4 border-inherit/20">
                ARTIKEL & WAWASAN
              </h2>

              <div className="space-y-6">
                {artikelList.map((art, idx) => (
                  <div 
                    key={idx} 
                    className={`p-6 md:p-8 rounded-2xl space-y-4 ${
                      isDarkMode ? 'red-outline-card-dark' : 'red-outline-card-light'
                    }`}
                  >
                    <h3 className="text-lg md:text-2xl font-display uppercase text-inherit tracking-wide">
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
                        className="px-5 py-2 bg-rose-600 text-white font-bold text-xs rounded-full hover:bg-rose-700 transition flex items-center gap-1.5 shadow-md shadow-rose-600/20"
                      >
                        <LinkIcon className="w-3.5 h-3.5" />
                        <span>Baca Artikel</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Animated Loading Spinner */}
              <div className="flex justify-center pt-6">
                <Loader2 className="w-7 h-7 text-rose-600 animate-spin" />
              </div>
            </section>

            {/* ------------------------------------------------------- */}
            {/* SECTION 5: KATA WARGA (Testimonials)                   */}
            {/* ------------------------------------------------------- */}
            <section id="kata-warga" className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-display uppercase tracking-tight text-inherit border-b pb-4 border-inherit/20">
                KATA WARGA & TESTIMONI
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {kataWargaList.map((item, idx) => (
                  <div key={idx} className={`p-6 rounded-2xl border space-y-3 flex flex-col justify-between ${cardBgClass}`}>
                    <blockquote className="font-editorial italic text-xs leading-relaxed text-inherit">
                      &ldquo;{item.quote}&rdquo;
                    </blockquote>
                    <div className="pt-3 border-t border-inherit/10">
                      <p className="font-display uppercase text-sm text-inherit">{item.nama}</p>
                      <p className={`text-[10px] ${subTextClass}`}>{item.peran}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ------------------------------------------------------- */}
            {/* SECTION 6: PRODUK TERKAIT & DUKUNGAN (Merchandise/Buku) */}
            {/* ------------------------------------------------------- */}
            <section id="produk" className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-display uppercase tracking-tight text-inherit border-b pb-4 border-inherit/20">
                PRODUK TERKAIT & DUKUNGAN
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {produkList.map((prod, idx) => (
                  <div key={idx} className={`p-6 rounded-2xl border space-y-4 flex flex-col justify-between ${cardBgClass}`}>
                    <div className="space-y-2">
                      <h3 className="font-display uppercase text-base text-inherit tracking-wide">
                        {prod.title}
                      </h3>
                      <p className={`text-xs leading-relaxed ${subTextClass}`}>
                        {prod.desc}
                      </p>
                    </div>
                    <button className="w-full py-2.5 bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs rounded-xl transition flex items-center justify-center gap-1.5 shadow-md shadow-rose-600/20">
                      <span>{prod.action}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </section>

          </main>

        </div>
      </div>

      {/* FOOTER */}
      <footer className={`border-t py-12 px-6 mt-12 ${isDarkMode ? 'bg-[#05070c] border-gray-800' : 'bg-gray-100 border-gray-200'}`}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <div className="flex items-center gap-2 font-display text-base text-inherit">
            <span>SEKTOR LOKAL</span>
            <span className="w-2.5 h-3.5 bg-rose-600 rounded-xs inline-block" />
          </div>
          <p className={subTextClass}>© 2026 Sector Lokal. Mading Kebanggaan Warga Indonesia Era Pop Modern.</p>
        </div>
      </footer>

    </div>
  );
}
