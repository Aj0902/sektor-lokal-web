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
  ExternalLink,
  Eye,
  Flame
} from 'lucide-react';
import { motion } from 'framer-motion';
import ConstellationCanvas from '../components/ConstellationCanvas';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function HomePage() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const bgCanvas = isDarkMode ? 'particle-wave-dark text-[#F5EFEB]' : 'particle-wave-light text-[#0A0E1A]';
  const cardClass = isDarkMode ? 'spotlight-card-dark' : 'spotlight-card-light';
  const mutedText = isDarkMode ? 'text-[#8E95A5]' : 'text-[#64748B]';

  const laciPreviews = [
    { num: '01', name: 'Penjaga Nalar', desc: 'Jejak berpikir kritis, jurnalisme presisi, dan uji logika.', icon: '🧠', count: '10 Warga' },
    { num: '02', name: 'Penyelamat Bumi', desc: 'Penjaga hutan hujan, pengolah limbah sirkular, & mikrohidro desa.', icon: '🌿', count: '10 Warga' },
    { num: '03', name: 'Pembangun Sistem', desc: 'Internet rakyat, paten tomografi 4D, civic tech, & AI lokal.', icon: '⚡', count: '10 Warga' },
    { num: '04', name: 'Pejuang Akar Rumput', desc: 'Perlindungan tanah adat, rumah sakit apung, & gotong royong.', icon: '✊', count: '10 Warga' },
    { num: '05', name: 'Arsitek Usaha Mandiri', desc: 'Sepeda bambu desa, benih pusaka, anyaman lontar, & kulit sirkular.', icon: '🪵', count: '10 Warga' },
    { num: '06', name: 'Perawat Jiwa & Rasa', desc: 'Musik kontemplatif, sastra kesunyian, sinema, & empati warga.', icon: '🎭', count: '10 Warga' },
    { num: '07', name: 'Penjaga Tawa', desc: 'Komedi satir sosial, penelusuran absurditas, & tawa nalar sehat.', icon: '🎙️', count: '10 Warga' },
    { num: '08', name: 'Pencerah Generasi', desc: 'Ruang belajar alternatif, literasi sains desa, & beasiswa komunitas.', icon: '💡', count: '10 Warga' },
    { num: '09', name: 'Duta Talenta', desc: 'Karya rekayasa sains, sinema internasional, & riset genomik.', icon: '🌐', count: '10 Warga' },
    { num: '10', name: 'Panggung Ekspresi', desc: 'Kanal kreator bermartabat, pengarsipan budaya, & eksplorasi.', icon: '🎬', count: '10 Warga' }
  ];

  const brandPreviews = [
    { name: 'Spedagi Bamboo', category: 'Kriya & Mobilitas Lestari', origin: 'Temanggung, Jateng', founder: 'Singgih Susilo Kartono', icon: '🚲', highlight: 'Sepeda bambu petung berstandar uji keselamatan jalan Jerman' },
    { name: 'JAVARA Indigenous', category: 'Pangan Pusaka Nusantara', origin: 'Bekasi / Jakarta', founder: 'Helianti Hilman', icon: '🌾', highlight: 'Kurasi benih pangan pusaka petani adat menembus 30+ negara' },
    { name: 'Du\'Anyam Lontar', category: 'Kriya & Kesehatan Ibu', origin: 'Flores Timur, NTT', founder: 'Azalea Ayuningtyas', icon: '🧺', highlight: 'Anyaman daun lontar yang membiayai gizi dan kesehatan ibu desa' },
    { name: 'Brodo Footwear', category: 'Manufaktur Alas Kaki', origin: 'Bandung, Jabar', founder: 'Yukka Harsono', icon: '👞', highlight: 'Menghidupkan sentra pengrajin Cibaduyut lewat desain modern' },
    { name: 'CTech Labs Edwar', category: 'Deep-Tech & Tomografi 4D', origin: 'Tangerang, Banten', founder: 'Dr. Warsito P. Taruno', icon: '🔬', highlight: 'Paten pemindai medan listrik tercepat dunia karya laboratorium mandiri' },
    { name: 'Kata.ai', category: 'Kecerdasan Buatan Bahasa', origin: 'Jakarta', founder: 'Irzan Raditya', icon: '🤖', highlight: 'Mesin pemrosesan bahasa alami pertama untuk dialek informal nusantara' }
  ];

  const articlePreviews = [
    {
      title: 'Benteng Nalar Kritis di Tengah Gempuran Distorsi Algoritma',
      tag: 'ETIKA & NALAR',
      readTime: '6 Menit Baca',
      desc: 'Mengapa skeptisisme metodis adalah alat pertahanan diri paling mendasar generasi muda hari ini sebelum menyerahkan keputusan hidup pada algoritma asing.',
      slug: 'analisis-kritis-literasi-keuangan'
    },
    {
      title: 'Kedaulatan Pangan Akar Rumput: Melawan Monokultur, Menjaga Benih Leluhur',
      tag: 'KRISIS EKOLOGIS',
      readTime: '8 Menit Baca',
      desc: 'Bagaimana komunitas adat dan petani gurem menjadi benteng terakhir ketahanan pangan saat rantai pasok pupuk dan benih kimiawi global terganggu.',
      slug: 'kedaulatan-pangan-bukan-gimik'
    },
    {
      title: 'Membongkar Mental Inlander: Mengapa Karya Dusun Bisa Mengungguli Produk Global',
      tag: 'KEDAULATAN BUDAYA',
      readTime: '7 Menit Baca',
      desc: 'Dari sepeda bambu Spedagi di Dusun Kandangan hingga paten transmisi nirkabel di Kediri—kualitas kelas dunia lahir dari kedalaman rasa dan ketepatan metode.',
      slug: 'ilusi-kemajuan-di-balik-stigma-lokal'
    }
  ];

  return (
    <div className={`min-h-screen ${bgCanvas} font-sans antialiased selection:bg-[#E11D48] selection:text-white relative`}>
      
      {/* Background Constellation Particle Layer */}
      <ConstellationCanvas isDarkMode={isDarkMode} />

      {/* Universal Top Navbar */}
      <Navbar 
        isDarkMode={isDarkMode} 
        onToggleDarkMode={() => setIsDarkMode(!isDarkMode)} 
      />

      <main className="max-w-6xl mx-auto px-6 relative z-10 space-y-28 md:space-y-36 pt-12 pb-32">

        {/* 1. HOOK SECTION (HERO INTI) */}
        <section className="min-h-[70vh] flex flex-col justify-center items-center text-center space-y-8 pt-4">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6 max-w-3xl mx-auto"
          >
            {/* Live Indicator Pill with Deep Crimson Glow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E11D48]/40 bg-[#E11D48]/10 text-[#E11D48] text-xs font-mono font-bold tracking-widest uppercase shadow-crimson-subtle">
              <span className="w-2 h-2 rounded-full bg-[#E11D48] animate-pulse shadow-crimson-glow" />
              <span>RUANG PENEMUAN & KURASI INDONESIA</span>
            </div>

            {/* Monumental Headline */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-display uppercase tracking-tight leading-[0.94]">
              MENEMUKAN APA YANG TUMBUH DARI TANAH SENDIRI
            </h1>

            {/* Tagline Emosional & Sub-headline */}
            <div className="space-y-3 max-w-2xl mx-auto">
              <p className="font-editorial italic text-lg sm:text-xl text-[#E11D48] font-semibold">
                &ldquo;Manifestasi jiwa raga bangsa dari sebutan lokal.&rdquo;
              </p>
              <p className={`text-base sm:text-lg leading-relaxed ${mutedText}`}>
                Menemukan manusia, karya, dan ide yang berakar di Indonesia — sebelum semuanya lewat begitu saja ditelan arus linimasa.
              </p>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4 font-mono text-xs">
              <Link 
                href="/arsip/warga"
                className="px-6 py-3.5 rounded-2xl bg-[#E11D48] hover:bg-[#BE123C] text-white font-bold tracking-wider uppercase flex items-center gap-2 shadow-crimson-glow hover:shadow-crimson-glow-lg transition-all hover:scale-105"
              >
                <Eye className="w-4 h-4" />
                <span>Mulai Temukan Cerita Warga</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              
              <Link 
                href="/arsip/brand"
                className={`px-6 py-3.5 rounded-2xl border font-bold tracking-wider uppercase flex items-center gap-2 transition-all ${
                  isDarkMode 
                    ? 'border-white/10 hover:border-[#E11D48] bg-[#0E131F]/80 text-[#F5EFEB]' 
                    : 'border-black/10 hover:border-[#E11D48] bg-white text-[#0A0E1A]'
                }`}
              >
                <Building2 className="w-4 h-4 text-[#E11D48]" />
                <span>Lihat Karya & Brand Lokal</span>
              </Link>
            </div>

          </motion.div>

        </section>

        {/* 2. HERO CTA: SIKAP & MANIFESTO */}
        <section id="manifesto-cta" className="space-y-6">
          <div className="flex items-center justify-between border-b pb-4 border-inherit/10">
            <div className="flex items-center gap-2.5">
              <span className="text-xs font-mono text-[#E11D48] font-bold">01 //</span>
              <h2 className="text-2xl sm:text-3xl font-display uppercase tracking-tight">SIKAP & KOMPAS</h2>
            </div>
            <Link href="/manifesto" className="text-xs font-mono font-bold text-[#E11D48] hover:underline flex items-center gap-1">
              <span>Buka Manifesto Lengkap</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className={`p-8 sm:p-12 rounded-3xl border relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 ${cardClass}`}>
            <div className="space-y-4 max-w-2xl">
              <span className="text-xs font-mono uppercase tracking-widest text-[#E11D48] font-bold">
                BENANG MERAH KAMI
              </span>
              <h3 className="text-2xl sm:text-3xl font-display uppercase leading-snug">
                &ldquo;Terlalu sibuk melihat yang datang dari luar sampai lupa melihat apa yang tumbuh dari tanah sendiri.&rdquo;
              </h3>
              <p className={`text-sm sm:text-base leading-relaxed ${mutedText}`}>
                Lokal bukan berarti terbelakang. Lokal adalah kesadaran atas tempat kita berpijak. Kami menghadirkan alasan bagi publik untuk kembali memperhatikan karya dan manusia yang bekerja di sekitarnya.
              </p>
            </div>
            <Link 
              href="/manifesto"
              className="px-8 py-4 bg-[#E11D48] hover:bg-[#BE123C] text-white font-mono font-bold text-xs uppercase tracking-wider rounded-2xl shrink-0 flex items-center gap-2 shadow-crimson-glow transition"
            >
              <span>Pelajari Sikap Kami</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* 3. HERO CTA: 100 CERITA WARGA LOKAL */}
        <section id="warga-cta" className="space-y-8">
          <div className="flex items-center justify-between border-b pb-4 border-inherit/10">
            <div className="flex items-center gap-2.5">
              <span className="text-xs font-mono text-[#E11D48] font-bold">02 //</span>
              <h2 className="text-2xl sm:text-3xl font-display uppercase tracking-tight">WARGA LOKAL // SERIES 001–100</h2>
            </div>
            <Link href="/arsip/warga" className="text-xs font-mono font-bold text-[#E11D48] hover:underline flex items-center gap-1">
              <span>Buka Seluruh Cerita</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Hook Callout Box */}
          <div className={`p-6 rounded-2xl border ${cardClass} flex flex-col sm:flex-row items-center justify-between gap-4`}>
            <p className="font-editorial italic text-base sm:text-lg text-inherit">
              &ldquo;Kamu mungkin belum pernah dengar namanya. Tapi kamu mungkin pernah merasakan dampak kerjanya.&rdquo;
            </p>
            <span className="text-xs font-mono text-[#E11D48] shrink-0 font-bold">10 LACI TEMATIK</span>
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
                  <span className="opacity-60 group-hover:translate-x-0.5 transition-transform text-[#E11D48]">→</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center pt-2">
            <Link 
              href="/arsip/warga"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-inherit/20 hover:border-[#E11D48] text-xs font-mono font-bold uppercase transition hover:text-[#E11D48]"
            >
              <Users className="w-4 h-4 text-[#E11D48]" />
              <span>Telusuri 100 Cerita Warga di Radar</span>
            </Link>
          </div>
        </section>

        {/* 4. HERO CTA: BRAND LOKAL MANDIRI */}
        <section id="brand-cta" className="space-y-8">
          <div className="flex items-center justify-between border-b pb-4 border-inherit/10">
            <div className="flex items-center gap-2.5">
              <span className="text-xs font-mono text-[#E11D48] font-bold">03 //</span>
              <h2 className="text-2xl sm:text-3xl font-display uppercase tracking-tight">KARYA, PROSES, & BRAND LOKAL</h2>
            </div>
            <Link href="/arsip/brand" className="text-xs font-mono font-bold text-[#E11D48] hover:underline flex items-center gap-1">
              <span>Buka Direktori Brand</span>
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
                  <p className={`text-xs leading-relaxed ${mutedText}`}>
                    {brand.highlight}
                  </p>
                  <p className={`text-[11px] font-mono ${mutedText} border-t pt-2 border-inherit/10`}>
                    Didirikan oleh: <span className="font-semibold text-inherit">{brand.founder}</span>
                  </p>
                </div>
                <Link 
                  href="/arsip/brand"
                  className="w-full py-2.5 rounded-xl border border-inherit/20 hover:border-[#E11D48] hover:text-[#E11D48] text-xs font-mono font-bold uppercase transition flex items-center justify-center gap-1.5"
                >
                  <span>Membaca Proses Brand</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center pt-2">
            <Link 
              href="/arsip/brand"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-inherit/20 hover:border-[#E11D48] text-xs font-mono font-bold uppercase transition hover:text-[#E11D48]"
            >
              <Building2 className="w-4 h-4 text-[#E11D48]" />
              <span>Jelajahi Karya & Rantai Pasok Brand Lokal</span>
            </Link>
          </div>
        </section>

        {/* 5. HERO CTA: RUANG REDAKSI & ESAI */}
        <section id="artikel-cta" className="space-y-8">
          <div className="flex items-center justify-between border-b pb-4 border-inherit/10">
            <div className="flex items-center gap-2.5">
              <span className="text-xs font-mono text-[#E11D48] font-bold">04 //</span>
              <h2 className="text-2xl sm:text-3xl font-display uppercase tracking-tight">RUANG REDAKSI & ESAI</h2>
            </div>
            <Link href="/artikel" className="text-xs font-mono font-bold text-[#E11D48] hover:underline flex items-center gap-1">
              <span>Buka Kumpulan Esai</span>
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
                  <span>Baca Catatan Lengkap</span>
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
                <span>RUANG DIALOG & USULAN WARGA</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display uppercase">
                Tahu Seseorang atau Karya Lokal yang Layak Masuk Radar?
              </h3>
              <p className={`text-sm leading-relaxed ${mutedText}`}>
                Kirimkan cerita, data pendukung, atau usulan kolaborasi riset. Tim kurasi Sektor Lokal siap meninjau dan memverifikasinya.
              </p>
            </div>
            <Link 
              href="/kontak"
              className="px-8 py-4 bg-[#E11D48] hover:bg-[#BE123C] text-white font-mono font-bold text-xs uppercase tracking-wider rounded-2xl shrink-0 flex items-center gap-2 shadow-crimson-glow transition"
            >
              <span>Kirim Usulan ke Redaksi</span>
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
