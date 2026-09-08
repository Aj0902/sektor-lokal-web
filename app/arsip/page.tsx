'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Users, Building2, ArrowRight, Sparkles, Layers, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import ConstellationCanvas from '../../components/ConstellationCanvas';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Breadcrumbs from '../../components/Breadcrumbs';

export default function ArsipHubPage() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const bgCanvas = isDarkMode ? 'particle-wave-dark text-[#EDE8DC]' : 'particle-wave-light text-[#0A0E1A]';
  const cardClass = isDarkMode ? 'spotlight-card-dark' : 'spotlight-card-light';
  const mutedText = isDarkMode ? 'text-[#8A93A8]' : 'text-[#64748B]';

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
          items={[{ label: 'Hub Arsip Sektor Lokal' }]} 
          isDarkMode={isDarkMode}
        />

        {/* Header Title */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#E11D48] font-bold uppercase tracking-widest">
            <Layers className="w-4 h-4" />
            <span>PUSAT DISCOVERY & DOKUMENTASI LOKAL</span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display uppercase tracking-tight leading-[0.95]">
            ARSIP PERADABAN & EKONOMI MANDIRI
          </h1>
          <p className={`text-base sm:text-lg leading-relaxed ${mutedText}`}>
            Pilih gerbang arsip yang ingin Anda jelajahi. Kami memisahkan kurasi manusia (*Warga Lokal*) dan kurasi entitas karya (*Brand Lokal*) agar masing-masing memiliki kedalaman dan penghormatan yang utuh.
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
                <div className="w-14 h-14 rounded-2xl bg-[#E11D48]/10 text-[#E11D48] border border-[#E11D48]/30 flex items-center justify-center">
                  <Users className="w-7 h-7" />
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#E11D48] text-white font-bold">
                  100 WARGA • 10 LACI
                </span>
              </div>

              <div className="space-y-3">
                <span className="text-xs font-mono text-[#E11D48] uppercase tracking-widest font-bold">
                  SEGMEN 01 // AGENSI MANUSIA
                </span>
                <h2 className="text-3xl sm:text-4xl font-display uppercase text-inherit group-hover:text-[#E11D48] transition">
                  WARGA LOKAL
                </h2>
                <p className={`text-sm sm:text-base leading-relaxed ${mutedText}`}>
                  Dokumentasi 100 tokoh penjaga akal sehat, konservasionis bumi, perintis teknologi rakyat, pejuang adat, sastrawan, hingga edukator nalar kritis lintas 10 Laci Peradaban.
                </p>
              </div>

              <ul className="space-y-2 text-xs font-mono border-t pt-4 border-inherit/10">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E11D48]" />
                  <span>4 Paragraf Naratif Standar Tempo</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E11D48]" />
                  <span>Linimasa Perjalanan Hidup Faktual</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E11D48]" />
                  <span>Quotes Emas & Verifikasi Multi-Platform</span>
                </li>
              </ul>
            </div>

            <Link 
              href="/arsip/warga"
              className="w-full py-4 bg-[#E11D48] hover:bg-[#BE123C] text-white font-mono font-bold text-xs uppercase tracking-wider rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-[#E11D48]/30 transition"
            >
              <span>Masuk ke Arsip Warga Lokal</span>
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
                <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 text-indigo-500 border border-indigo-500/30 flex items-center justify-center">
                  <Building2 className="w-7 h-7" />
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-indigo-600 text-white font-bold">
                  KARYA & MANUFAKTUR
                </span>
              </div>

              <div className="space-y-3">
                <span className="text-xs font-mono text-indigo-500 uppercase tracking-widest font-bold">
                  SEGMEN 02 // KEDAULATAN EKONOMI
                </span>
                <h2 className="text-3xl sm:text-4xl font-display uppercase text-inherit group-hover:text-indigo-500 transition">
                  BRAND LOKAL
                </h2>
                <p className={`text-sm sm:text-base leading-relaxed ${mutedText}`}>
                  Eksplorasi entitas bisnis mandiri, kriya kayu, pangan benih pusaka nusantara, fesyen sirkular, dan deep-tech buatan tangan anak bangsa yang berdaya saing global.
                </p>
              </div>

              <ul className="space-y-2 text-xs font-mono border-t pt-4 border-inherit/10">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                  <span>Rantai Pasok Etis & Berkelanjutan</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                  <span>Terkoneksi dengan Figur Pendiri Warga</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                  <span>Akses Langsung ke Kanal Resmi</span>
                </li>
              </ul>
            </div>

            <Link 
              href="/arsip/brand"
              className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-mono font-bold text-xs uppercase tracking-wider rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/30 transition"
            >
              <span>Masuk ke Arsip Brand Lokal</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

        </div>

      </main>

      <Footer isDarkMode={isDarkMode} />

    </div>
  );
}
