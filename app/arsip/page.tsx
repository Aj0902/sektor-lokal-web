'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Users, Building2, ArrowRight, Sparkles, Layers, ShieldCheck, ArrowUpRight, Compass, Eye } from 'lucide-react';
import { motion } from 'framer-motion';
import ConstellationCanvas from '../../components/ConstellationCanvas';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Breadcrumbs from '../../components/Breadcrumbs';

export default function ArsipHubPage() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const bgCanvas = isDarkMode ? 'particle-wave-dark text-[#F5EFEB]' : 'particle-wave-light text-[#0A0E1A]';
  const cardClass = isDarkMode ? 'spotlight-card-dark' : 'spotlight-card-light';
  const mutedText = isDarkMode ? 'text-[#8E95A5]' : 'text-[#64748B]';

  return (
    <div className={`min-h-screen ${bgCanvas} font-sans antialiased selection:bg-[#E11D48] selection:text-white relative flex flex-col justify-between`}>
      
      <ConstellationCanvas isDarkMode={isDarkMode} />

      <Navbar 
        isDarkMode={isDarkMode} 
        onToggleDarkMode={() => setIsDarkMode(!isDarkMode)} 
      />

      <main className="max-w-6xl mx-auto px-6 relative z-10 space-y-12 py-12 flex-1 w-full">
        
        {/* Semantic Breadcrumbs */}
        <Breadcrumbs 
          items={[{ label: 'Pusat Penemuan & Arsip' }]} 
          isDarkMode={isDarkMode}
        />

        {/* Header Title */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#E11D48] font-bold uppercase tracking-widest">
            <Compass className="w-4 h-4" />
            <span>PINTU DISCOVERY SEKTOR LOKAL</span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display uppercase tracking-tight leading-[0.94]">
            DUA PINTU UNTUK MENEMUKAN
          </h1>
          <p className={`text-base sm:text-lg leading-relaxed ${mutedText}`}>
            Sektor Lokal membaca Indonesia melalui dua lensa: manusia yang menggerakkannya, dan karya yang dihasilkannya. Pilih pintu mana yang ingin kamu telusuri terlebih dahulu.
          </p>
        </div>

        {/* DUAL GATEWAY CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          
          {/* Gateway 1: WARGA LOKAL */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`p-8 sm:p-12 rounded-3xl border flex flex-col justify-between space-y-8 relative group overflow-hidden ${cardClass}`}
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-[#E11D48]/10 text-[#E11D48] border border-[#E11D48]/30 flex items-center justify-center shadow-crimson-subtle">
                  <Users className="w-7 h-7" />
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#E11D48] text-white font-bold shadow-crimson-subtle">
                  SERIES 001–100 // 10 LACI
                </span>
              </div>

              <div className="space-y-3">
                <span className="text-xs font-mono text-[#E11D48] uppercase tracking-widest font-bold">
                  PINTU 01 // MANUSIA & TINDAKAN
                </span>
                <h2 className="text-3xl sm:text-4xl font-display uppercase text-inherit group-hover:text-[#E11D48] transition">
                  WARGA LOKAL
                </h2>
                <p className={`text-sm sm:text-base leading-relaxed ${mutedText}`}>
                  Membaca cerita orang-orang yang memilih bertindak di bidangnya masing-masing. Bukan sekadar daftar riwayat hidup, melainkan keputusan, konflik, dan bukti kerja yang layak diketahui.
                </p>
              </div>

              <ul className="space-y-2.5 text-xs font-mono border-t pt-4 border-inherit/10 text-inherit/80">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E11D48] shadow-crimson-subtle" />
                  <span>Hook berbasis temuan & keunikan karya</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E11D48] shadow-crimson-subtle" />
                  <span>Jejak keputusan & konflik nyata di lapangan</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E11D48] shadow-crimson-subtle" />
                  <span>Kutipan perenungan & verifikasi rekam jejak</span>
                </li>
              </ul>
            </div>

            <Link 
              href="/arsip/warga"
              className="w-full py-4 bg-[#E11D48] hover:bg-[#BE123C] text-white font-mono font-bold text-xs uppercase tracking-wider rounded-2xl flex items-center justify-center gap-2 shadow-crimson-glow transition"
            >
              <Eye className="w-4 h-4" />
              <span>Mulai Menelusuri Cerita Warga</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Gateway 2: BRAND LOKAL */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`p-8 sm:p-12 rounded-3xl border flex flex-col justify-between space-y-8 relative group overflow-hidden ${cardClass}`}
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-[#E11D48]/10 text-[#E11D48] border border-[#E11D48]/30 flex items-center justify-center shadow-crimson-subtle">
                  <Building2 className="w-7 h-7" />
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full border border-inherit/20 text-inherit font-bold">
                  KARYA & PROSES
                </span>
              </div>

              <div className="space-y-3">
                <span className="text-xs font-mono text-[#E11D48] uppercase tracking-widest font-bold">
                  PINTU 02 // PRODUK & EKOSISTEM
                </span>
                <h2 className="text-3xl sm:text-4xl font-display uppercase text-inherit group-hover:text-[#E11D48] transition">
                  BRAND LOKAL
                </h2>
                <p className={`text-sm sm:text-base leading-relaxed ${mutedText}`}>
                  Membaca proses di balik jenama yang berakar di Indonesia: bahan bakunya, perajinnya, rantai pasoknya, dan nilai yang ditinggalkan bagi masyarakat sekitar.
                </p>
              </div>

              <ul className="space-y-2.5 text-xs font-mono border-t pt-4 border-inherit/10 text-inherit/80">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E11D48] shadow-crimson-subtle" />
                  <span>Cerita bahan baku & keunikan manufaktur</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E11D48] shadow-crimson-subtle" />
                  <span>Terkoneksi langsung ke profil pendiri warga</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E11D48] shadow-crimson-subtle" />
                  <span>Akses informasi produk & kanal resmi</span>
                </li>
              </ul>
            </div>

            <Link 
              href="/arsip/brand"
              className={`w-full py-4 border border-inherit/20 hover:border-[#E11D48] hover:text-[#E11D48] font-mono font-bold text-xs uppercase tracking-wider rounded-2xl flex items-center justify-center gap-2 transition ${
                isDarkMode ? 'bg-[#0E131F]/90 text-[#F5EFEB]' : 'bg-white text-[#0A0E1A]'
              }`}
            >
              <Building2 className="w-4 h-4 text-[#E11D48]" />
              <span>Melihat Karya & Proses Brand</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

        </div>

      </main>

      <Footer isDarkMode={isDarkMode} />

    </div>
  );
}
