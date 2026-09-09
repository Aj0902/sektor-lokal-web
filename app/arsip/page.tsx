'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Users, Building2, ArrowRight, Eye, Compass } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function ArsipHubPage() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const bgClass = isDarkMode ? 'bg-[#07090E] text-[#F5EFEB]' : 'bg-[#F8F5EE] text-[#07090E]';
  const mutedText = isDarkMode ? 'text-white/60' : 'text-black/60';

  return (
    <div className={`min-h-screen ${bgClass} font-sans antialiased selection:bg-[#E11D48] selection:text-white flex flex-col`}>
      
      <Navbar 
        isDarkMode={isDarkMode} 
        onToggleDarkMode={() => setIsDarkMode(!isDarkMode)} 
      />

      <main className="flex-1 w-full relative z-10 flex flex-col">
        
        {/* HEADER */}
        <section className="px-6 py-24 sm:py-32 relative overflow-hidden flex flex-col items-center text-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-display text-white/[0.03] dark:text-white/[0.03] select-none pointer-events-none whitespace-nowrap z-0">
            ARSIP PENEMUAN
          </div>
          
          <div className="relative z-10 space-y-6 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#E11D48] font-bold uppercase tracking-widest">
              <Compass className="w-4 h-4" />
              <span>Pintu Discovery Sektor Lokal</span>
            </div>
            <h1 className="text-5xl sm:text-7xl font-display uppercase tracking-tight leading-[0.9]">
              Dua Pintu <br/> Untuk Menemukan
            </h1>
            <p className={`text-base sm:text-lg leading-relaxed max-w-2xl mx-auto ${mutedText}`}>
              Sektor Lokal membaca Indonesia melalui dua lensa: manusia yang menggerakkannya, dan karya yang dihasilkannya. Pilih pintu mana yang ingin Anda telusuri terlebih dahulu.
            </p>
          </div>
        </section>

        {/* 50/50 SPLIT LAYOUT */}
        <section className="grid grid-cols-1 md:grid-cols-2 flex-1 w-full border-t border-white/10 dark:border-white/10">
          
          {/* LEFT: WARGA LOKAL (Ivory) */}
          <div className="bg-[#F8F5EE] text-[#07090E] p-12 sm:p-20 flex flex-col justify-between group">
            <div className="space-y-8 max-w-md mx-auto md:mx-0">
              <div className="flex items-center gap-4">
                <Users className="w-8 h-8 text-[#E11D48]" />
                <span className="text-xs font-mono font-bold tracking-widest border border-black/20 px-3 py-1 uppercase">
                  Pintu 01
                </span>
              </div>
              <div className="space-y-4">
                <h2 className="text-4xl sm:text-5xl font-display uppercase leading-none">Warga Lokal</h2>
                <div className="text-sm font-mono font-bold text-[#E11D48]">
                  100 WARGA • 10 LACI KURASI
                </div>
                <p className="text-base text-black/70 leading-relaxed">
                  Membaca cerita orang-orang yang memilih bertindak di bidangnya masing-masing. Keputusan, konflik, dan bukti kerja yang layak diketahui.
                </p>
              </div>
            </div>
            
            <div className="mt-16 max-w-md mx-auto md:mx-0 w-full">
              <Link 
                href="/arsip/warga"
                className="w-full py-4 border-2 border-[#07090E] hover:bg-[#07090E] hover:text-[#F8F5EE] font-mono font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
              >
                <Eye className="w-4 h-4" />
                <span>Buka Katalog Warga</span>
              </Link>
            </div>
          </div>

          {/* RIGHT: BRAND LOKAL (Crimson) */}
          <div className="bg-[#E11D48] text-[#F5EFEB] p-12 sm:p-20 flex flex-col justify-between group relative overflow-hidden">
            <div className="dot-matrix absolute inset-0 opacity-10"></div>
            
            <div className="space-y-8 max-w-md mx-auto md:mx-0 relative z-10">
              <div className="flex items-center gap-4">
                <Building2 className="w-8 h-8 text-white" />
                <span className="text-xs font-mono font-bold tracking-widest border border-white/30 px-3 py-1 uppercase text-white">
                  Pintu 02
                </span>
              </div>
              <div className="space-y-4">
                <h2 className="text-4xl sm:text-5xl font-display uppercase leading-none">Brand Lokal</h2>
                <div className="text-sm font-mono font-bold text-white/90">
                  DIREKTORI JENAMA MANDIRI
                </div>
                <p className="text-base text-white/80 leading-relaxed">
                  Membaca proses di balik jenama yang berakar di Indonesia: bahan bakunya, perajinnya, dan nilai yang ditinggalkan bagi masyarakat.
                </p>
              </div>
            </div>

            <div className="mt-16 max-w-md mx-auto md:mx-0 w-full relative z-10">
              <Link 
                href="/arsip/brand"
                className="w-full py-4 bg-white text-[#E11D48] hover:bg-[#07090E] hover:text-white font-mono font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
              >
                <Building2 className="w-4 h-4" />
                <span>Lihat Direktori Brand</span>
              </Link>
            </div>
          </div>
          
        </section>

      </main>

      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}
