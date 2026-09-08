'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Sparkles, 
  ArrowUpRight, 
  ShieldCheck, 
  Compass,
  ArrowRight,
  BookOpen,
  Layers,
  Users,
  Building2,
  Feather,
  Mail,
  ExternalLink
} from 'lucide-react';
import { motion } from 'framer-motion';
import ConstellationCanvas from '../components/ConstellationCanvas';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function HomePage() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const bgCanvas = isDarkMode ? 'particle-wave-dark text-[#EDE8DC]' : 'particle-wave-light text-[#0A0E1A]';
  const cardClass = isDarkMode ? 'spotlight-card-dark' : 'spotlight-card-light';
  const mutedText = isDarkMode ? 'text-[#8A93A8]' : 'text-[#64748B]';

  const laciPreviews = [
    { num: '01', name: 'Penjaga Nalar', desc: 'Epistemologi, jurnalisme investigasi & nalar kritis.', icon: '🧠', count: '10 Warga' },
    { num: '02', name: 'Penyelamat Bumi', desc: 'Konservasi alas Leuser, perlawanan tambang & kedaulatan ekologis.', icon: '🌿', count: '10 Warga' },
    { num: '03', name: 'Pembangun Sistem', desc: 'Internet rakyat, deep-tech, tomografi 4D & civic tech.', icon: '⚡', count: '10 Warga' },
    { num: '04', name: 'Pejuang Akar Rumput', desc: 'Hak adat ulayat, RS apung kemanusiaan & kedaulatan pangan desa.', icon: '✊', count: '10 Warga' },
    { num: '05', name: 'Arsitek Usaha Mandiri', desc: 'Kriya bambu Spedagi, pangan pusaka Javara & kriya inklusif.', icon: '🪵', count: '10 Warga' },
    { num: '06', name: 'Perawat Jiwa & Rasa', desc: 'Katarsis musik Hindia/ERK, sastra Nobel & kesehatan batin.', icon: '🎭', count: '10 Warga' },
    { num: '07', name: 'Penjaga Tawa', desc: 'Satir politik Stand-up Indo, dekonstruksi feodalisme & tawa nalar.', icon: '🎙️', count: '10 Warga' },
    { num: '08', name: 'Pencerah Generasi', desc: 'Malaka Project, literasi sains visual & beasiswa daerah.', icon: '💡', count: '10 Warga' },
    { num: '09', name: 'Duta Talenta', desc: 'Vaksin AstraZeneca, piano jazz dunia & riset genomik global.', icon: '🌐', count: '10 Warga' },
    { num: '10', name: 'Panggung Ekspresi', desc: 'Kultur kreator YouTube bermartabat & eksplorasi rimba nusantara.', icon: '🎬', count: '10 Warga' }
  ];

  const brandPreviews = [
    { name: 'Spedagi Bamboo', category: 'Kriya & Mobilitas Lestari', origin: 'Temanggung, Jateng', founder: 'Singgih Susilo Kartono', icon: '🚲' },
    { name: 'JAVARA Indigenous', category: 'Pangan Pusaka Nusantara', origin: 'Bekasi / Jakarta', founder: 'Helianti Hilman', icon: '🌾' },
    { name: 'Brodo Footwear', category: 'Manufaktur Alas Kaki', origin: 'Bandung, Jabar', founder: 'Yukka Harsono', icon: '👞' },
    { name: 'Comika Corp', category: 'Ekosistem Industri Komedi', origin: 'Jakarta / Global', founder: 'Pandji Pragiwaksono', icon: '🎙️' },
    { name: 'CTech Labs Edwar', category: 'Deep-Tech & Tomografi 4D', origin: 'Tangerang, Banten', founder: 'Dr. Warsito P. Taruno', icon: '🔬' },
    { name: 'Sun Eater', category: 'Label Musik & Kreatif Mandiri', origin: 'Jakarta', founder: 'Baskara Putra', icon: '🎵' }
  ];

  const articlePreviews = [
    {
      title: 'Menemukan Kembali Martabat Tanah Air di Tengah Bisingnya Era Distorsi',
      tag: 'MANIFESTO BUDAYA',
      readTime: '6 Menit Baca',
      desc: 'Mengapa menjadi "Lokal" di era digital bukan berarti tertinggal atau konservatif, melainkan tindakan politik dan kultural paling radikal untuk menjaga kedaulatan akal sehat.',
      slug: 'menemukan-kembali-martabat-tanah-air-di-tengah-distorsi'
    },
    {
      title: 'Mengapa Menjadi "Warga" adalah Status Simbolik Tertinggi',
      tag: 'FILOSOFI SOSIAL',
      readTime: '5 Menit Baca',
      desc: 'Mendekonstruksi pemujaan elitisme: dari idola panggung hingga petani pelosok, pada akhirnya kita semua adalah warga yang memijak tanah yang sama dan punya hak untuk berdaya.',
      slug: 'mengapa-menjadi-warga-adalah-status-simbolik-tertinggi'
    },
    {
      title: 'Anatomi Ekonomi Mandiri: Bagaimana Brand Lokal Membangun Rantai Pasok Berdaulat',
      tag: 'EKONOMI SIRKULAR',
      readTime: '7 Menit Baca',
      desc: 'Studi mendalam bagaimana kriya bambu desa, pangan benih pusaka, dan manufaktur mandiri mampu menembus standar ekspor dunia tanpa menjual harga diri ke konglomerasi serakah.',
      slug: 'anatomi-ekonomi-mandiri-brand-lokal-rantai-pasok'
    }
  ];

  return (
    <div className={`min-h-screen ${bgCanvas} font-sans antialiased selection:bg-[#E11D48] selection:text-white relative`}>
      
      {/* Background Constellation Particle */}
      <ConstellationCanvas isDarkMode={isDarkMode} />

      {/* Universal Top Navbar */}
      <Navbar 
        isDarkMode={isDarkMode} 
        onToggleDarkMode={() => setIsDarkMode(!isDarkMode)} 
      />

      <main className="max-w-6xl mx-auto px-6 relative z-10 space-y-28 md:space-y-40 pt-12 pb-32">

        {/* 1. HOOK SECTION (HERO INTI) */}
        <section className="min-h-[75vh] flex flex-col justify-center items-center text-center space-y-8 pt-6">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6 max-w-3xl mx-auto"
          >
            {/* Live Indicator Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#E11D48]/30 bg-[#E11D48]/10 text-[#E11D48] text-xs font-mono font-bold tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-[#E11D48] animate-ping" />
              <span>RADAR 100% INDEPENDEN • ZERO HALLUCINATION</span>
            </div>

            {/* Monumental Headline */}
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-display uppercase tracking-tight leading-[0.92]">
              MANIFESTASI JIWA RAGA BANGSA DARI SEBUTAN LOKAL
            </h1>

            {/* Sub-headline */}
            <p className={`text-base sm:text-xl font-normal max-w-2xl mx-auto leading-relaxed ${mutedText}`}>
              Di tengah era distorsi algoritma dan komersialisasi serba dangkal, Sektor Lokal berdiri sebagai zona kurasi independen yang menyatukan karya, cerita, pemikiran, dan manusia Indonesia.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4 font-mono text-xs">
              <Link 
                href="/arsip/warga"
                className="px-6 py-3.5 rounded-2xl bg-[#E11D48] hover:bg-[#BE123C] text-white font-bold tracking-wider uppercase flex items-center gap-2 shadow-lg shadow-[#E11D48]/30 transition-all hover:scale-105"
              >
                <Users className="w-4 h-4" />
                <span>Jelajahi 100 Warga Lokal</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                href="/manifesto"
                className={`px-6 py-3.5 rounded-2xl border font-bold tracking-wider uppercase flex items-center gap-2 transition-all ${
                  isDarkMode 
                    ? 'border-white/10 hover:border-[#E11D48] bg-[#111726]/60 text-[#EDE8DC]' 
                    : 'border-black/10 hover:border-[#E11D48] bg-white text-[#0A0E1A]'
                }`}
              >
                <Sparkles className="w-4 h-4 text-[#E11D48]" />
                <span>Baca Manifesto</span>
              </Link>
            </div>

          </motion.div>

        </section>

        {/* 2. HERO CTA: MANIFESTO EDITORIAL */}
        <section id="manifesto-cta" className="space-y-6">
          <div className="flex items-center justify-between border-b pb-4 border-inherit/10">
            <div className="flex items-center gap-2.5">
              <span className="text-xs font-mono text-[#E11D48] font-bold">01 //</span>
              <h2 className="text-2xl sm:text-3xl font-display uppercase tracking-tight">SIKAP & MANIFESTO</h2>
            </div>
            <Link href="/manifesto" className="text-xs font-mono font-bold text-[#E11D48] hover:underline flex items-center gap-1">
              <span>Buka Manifesto Lengkap</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className={`p-8 sm:p-12 rounded-3xl border relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 ${cardClass}`}>
            <div className="space-y-4 max-w-2xl">
              <span className="text-xs font-mono uppercase tracking-widest text-[#E11D48] font-bold">
                DEKLARASI SIKAP SEKTOR LOKAL
              </span>
              <h3 className="text-3xl sm:text-4xl font-display uppercase leading-tight">
                &ldquo;Lokal bukan berarti terbelakang; lokal adalah wujud cinta tanah air paling berdaulat di era ini.&rdquo;
              </h3>
              <p className={`text-sm sm:text-base leading-relaxed ${mutedText}`}>
                Kami menolak tunduk pada ilusi algoritma luar yang mendangkalkan nalar. Sektor Lokal mendokumentasikan mereka yang berdiri tegak, merawat bumi, membela kaum papa, dan membangun peradaban dari tanah air sendiri.
              </p>
            </div>
            <Link 
              href="/manifesto"
              className="px-8 py-4 bg-[#E11D48] hover:bg-[#BE123C] text-white font-mono font-bold text-xs uppercase tracking-wider rounded-2xl shrink-0 flex items-center gap-2 shadow-lg shadow-[#E11D48]/30 transition"
            >
              <span>Pelajari Sikap Kami</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* 3. HERO CTA: ARSIP 100 WARGA LOKAL */}
        <section id="warga-cta" className="space-y-8">
          <div className="flex items-center justify-between border-b pb-4 border-inherit/10">
            <div className="flex items-center gap-2.5">
              <span className="text-xs font-mono text-[#E11D48] font-bold">02 //</span>
              <h2 className="text-2xl sm:text-3xl font-display uppercase tracking-tight">ARSIP WARGA LOKAL</h2>
            </div>
            <Link href="/arsip/warga" className="text-xs font-mono font-bold text-[#E11D48] hover:underline flex items-center gap-1">
              <span>Buka Seluruh 100 Profil</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* 10 Laci Grid Preview */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {laciPreviews.map((laci) => (
              <Link 
                key={laci.num}
                href={`/arsip/warga?laci=${encodeURIComponent(laci.name)}`}
                className={`p-5 rounded-2xl border transition-all duration-300 hover:scale-[1.02] flex flex-col justify-between space-y-3 group ${cardClass}`}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xl">{laci.icon}</span>
                    <span className="text-[10px] font-mono text-[#E11D48] font-bold">LACI {laci.num}</span>
                  </div>
                  <h4 className="font-display uppercase text-lg text-inherit group-hover:text-[#E11D48] transition">
                    {laci.name}
                  </h4>
                  <p className={`text-xs leading-relaxed line-clamp-2 ${mutedText}`}>
                    {laci.desc}
                  </p>
                </div>
                <div className="pt-2 border-t border-inherit/10 flex items-center justify-between text-[10px] font-mono">
                  <span className="text-[#E11D48] font-bold">{laci.count}</span>
                  <span className="opacity-60 group-hover:translate-x-0.5 transition-transform">→</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center pt-2">
            <Link 
              href="/arsip/warga"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-inherit/20 hover:border-[#E11D48] text-xs font-mono font-bold uppercase transition"
            >
              <Users className="w-4 h-4 text-[#E11D48]" />
              <span>Masuk ke Direktori Lengkap 100 Warga</span>
            </Link>
          </div>
        </section>

        {/* 4. HERO CTA: ARSIP BRAND LOKAL */}
        <section id="brand-cta" className="space-y-8">
          <div className="flex items-center justify-between border-b pb-4 border-inherit/10">
            <div className="flex items-center gap-2.5">
              <span className="text-xs font-mono text-[#E11D48] font-bold">03 //</span>
              <h2 className="text-2xl sm:text-3xl font-display uppercase tracking-tight">ARSIP BRAND LOKAL</h2>
            </div>
            <Link href="/arsip/brand" className="text-xs font-mono font-bold text-[#E11D48] hover:underline flex items-center gap-1">
              <span>Buka Seluruh Brand</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {brandPreviews.map((brand, idx) => (
              <div 
                key={idx}
                className={`p-6 rounded-3xl border flex flex-col justify-between space-y-4 ${cardClass}`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl">{brand.icon}</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#E11D48]/10 text-[#E11D48] font-bold border border-[#E11D48]/20">
                      {brand.origin}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#E11D48] uppercase font-bold">{brand.category}</span>
                    <h4 className="font-display uppercase text-xl text-inherit">{brand.name}</h4>
                  </div>
                  <p className={`text-xs ${mutedText}`}>
                    Diinisiasi oleh: <span className="font-semibold text-inherit">{brand.founder}</span>
                  </p>
                </div>
                <Link 
                  href="/arsip/brand"
                  className="w-full py-2.5 rounded-xl border border-inherit/20 hover:border-[#E11D48] hover:text-[#E11D48] text-xs font-mono font-bold uppercase transition flex items-center justify-center gap-1.5"
                >
                  <span>Lihat Profil Brand</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center pt-2">
            <Link 
              href="/arsip/brand"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-inherit/20 hover:border-[#E11D48] text-xs font-mono font-bold uppercase transition"
            >
              <Building2 className="w-4 h-4 text-[#E11D48]" />
              <span>Jelajahi Ekosistem Brand Mandiri</span>
            </Link>
          </div>
        </section>

        {/* 5. HERO CTA: RUANG REDAKSI & ARTIKEL */}
        <section id="artikel-cta" className="space-y-8">
          <div className="flex items-center justify-between border-b pb-4 border-inherit/10">
            <div className="flex items-center gap-2.5">
              <span className="text-xs font-mono text-[#E11D48] font-bold">04 //</span>
              <h2 className="text-2xl sm:text-3xl font-display uppercase tracking-tight">RUANG REDAKSI & ARTIKEL</h2>
            </div>
            <Link href="/artikel" className="text-xs font-mono font-bold text-[#E11D48] hover:underline flex items-center gap-1">
              <span>Buka Semua Tulisan</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {articlePreviews.map((art, idx) => (
              <div 
                key={idx}
                className={`p-6 sm:p-8 rounded-3xl border flex flex-col justify-between space-y-4 ${cardClass}`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-[#E11D48]">
                    <span className="font-bold">{art.tag}</span>
                    <span>{art.readTime}</span>
                  </div>
                  <h4 className="font-display uppercase text-xl sm:text-2xl text-inherit leading-snug">
                    {art.title}
                  </h4>
                  <p className={`text-xs sm:text-sm leading-relaxed ${mutedText}`}>
                    {art.desc}
                  </p>
                </div>
                <Link 
                  href={`/artikel/${art.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-mono font-bold text-[#E11D48] hover:underline pt-2 border-t border-inherit/10"
                >
                  <span>Baca Esai Lengkap</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* 6. QUICK KONTAK / RUANG DIALOG */}
        <section id="kontak-cta" className="space-y-6">
          <div className={`p-8 sm:p-12 rounded-3xl border flex flex-col md:flex-row items-center justify-between gap-8 ${cardClass}`}>
            <div className="space-y-3 max-w-xl">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#E11D48] font-bold uppercase">
                <Mail className="w-4 h-4" />
                <span>KOLABORASI & TIP-OFF WARGA</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display uppercase">
                Tahu Warga atau Brand Berprestasi di Sekitarmu?
              </h3>
              <p className={`text-sm leading-relaxed ${mutedText}`}>
                Kirimkan informasi, dokumen rekam jejak, atau usulan kolaborasi. Tim kurasi Sektor Lokal siap meninjau dan memverifikasinya melalui radar kami.
              </p>
            </div>
            <Link 
              href="/kontak"
              className="px-8 py-4 bg-[#E11D48] hover:bg-[#BE123C] text-white font-mono font-bold text-xs uppercase tracking-wider rounded-2xl shrink-0 flex items-center gap-2 shadow-lg shadow-[#E11D48]/30 transition"
            >
              <span>Hubungi Redaksi</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

      </main>

      {/* Universal Footer */}
      <Footer isDarkMode={isDarkMode} />

    </div>
  );
}
