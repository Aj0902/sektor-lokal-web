'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Compass, Radio, Sparkles, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { discoveryLenses } from '../../lib/supabase/discoveryData';

export default function WargaLokalHubPage() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const bgClass = isDarkMode ? 'bg-[#07090E] text-[#F5EFEB]' : 'bg-[#F8F5EE] text-[#0A0E1A]';
  const borderClass = isDarkMode ? 'border-white/10' : 'border-black/10';
  const cardBg = isDarkMode ? 'bg-[#0E131F]' : 'bg-white';
  const mutedText = isDarkMode ? 'text-[#8E95A5]' : 'text-[#64748B]';

  return (
    <div className={`min-h-screen ${bgClass} font-sans antialiased selection:bg-[#E11D48] selection:text-white flex flex-col`}>
      <Navbar isDarkMode={isDarkMode} onToggleDarkMode={() => setIsDarkMode(!isDarkMode)} />

      <main className="flex-1 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-12 sm:py-20 flex flex-col gap-12 sm:gap-16">
        
        {/* Editorial Header & Manifesto */}
        <header className="space-y-8 max-w-4xl border-b pb-10 border-inherit/10">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#E11D48] font-bold uppercase tracking-widest">
            <Radio className="w-3.5 h-3.5 animate-pulse" />
            <span>KURASI INDEPENDEN WARGA NUSANTARA</span>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-display uppercase tracking-tight leading-[0.92]">
              WARGA LOKAL
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl font-editorial italic text-[#E11D48] descender-safe">
              Melihat Indonesia dari Mereka yang Memilih Berbuat.
            </p>
          </div>

          {/* Master Manifesto Quote Box */}
          <div className={`p-6 sm:p-8 border ${borderClass} ${cardBg} relative space-y-4`}>
            <p className="font-editorial italic text-base sm:text-lg leading-relaxed descender-safe text-inherit">
              &ldquo;Warga Lokal bukan daftar orang paling terkenal, paling sukses, atau paling berpengaruh di Indonesia. Ini adalah kurasi atas orang-orang yang, lewat pekerjaan, gagasan, karya, atau keberpihakannya, membuat kita melihat sesuatu tentang Indonesia dengan cara yang berbeda.&rdquo;
            </p>
            <p className={`text-xs sm:text-sm font-sans leading-relaxed border-t ${borderClass} pt-4 ${mutedText}`}>
              Setiap kategori adalah <strong className="text-inherit font-semibold">lensa penemuan</strong>, bukan kotak yang mengurung seseorang. Satu figur bisa bersinggungan dengan beberapa persoalan, tetapi kami menempatkannya pada kategori yang paling sesuai dengan <strong className="text-inherit font-semibold">temuan utama dari jejak kerjanya</strong>.
            </p>
          </div>
        </header>

        {/* Bento Grid 10 Discovery Lenses */}
        <section className="space-y-6">
          <div className="flex justify-between items-center border-b pb-4 border-inherit/10">
            <span className="font-mono text-xs font-bold text-[#E11D48] tracking-widest uppercase">
              RAGAM LENSA PENEMUAN
            </span>
            <span className={`font-mono text-xs ${mutedText} uppercase`}>
              PILIH LENSA UNTUK MENELUSURI
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {discoveryLenses.map((lens, idx) => (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                key={lens.slug}
                className={`p-6 sm:p-8 border ${borderClass} ${cardBg} ${lens.color} flex flex-col justify-between group hover:border-[#E11D48] transition-all duration-300 tactile-btn`}
              >
                <div className="space-y-5">
                  
                  {/* Card Header Meta */}
                  <div className="flex justify-between items-center border-b border-inherit/10 pb-3">
                    <span className="font-mono text-xs text-[#E11D48] font-bold tracking-widest uppercase">
                      {lens.id} | {lens.name}
                    </span>
                    <span className="text-[11px] font-mono uppercase tracking-widest opacity-60">
                      LENSA PENEMUAN
                    </span>
                  </div>

                  {/* Editorial Title */}
                  <h2 className="text-2xl sm:text-3xl font-display uppercase tracking-tight leading-snug group-hover:text-[#E11D48] transition-colors">
                    {lens.editorialTitle}
                  </h2>

                  {/* Role Definition */}
                  <p className="font-mono text-xs font-bold uppercase tracking-wider text-inherit/90">
                    {lens.definition}
                  </p>

                  {/* Narrative Teaser */}
                  <p className={`text-xs sm:text-sm font-sans leading-relaxed line-clamp-2 ${mutedText}`}>
                    {lens.narrative[0]}
                  </p>

                  {/* Finding Question Box */}
                  <div className="p-3.5 border border-dashed border-[#E11D48]/30 bg-[#E11D48]/5">
                    <span className="font-mono text-[10px] text-[#E11D48] uppercase tracking-widest block font-bold mb-1">
                      Pertanyaan Temuan:
                    </span>
                    <p className="font-editorial italic text-xs sm:text-sm text-inherit descender-safe">
                      &ldquo;{lens.findingQuestion}&rdquo;
                    </p>
                  </div>

                  {/* Figure Avatars & Names Teaser */}
                  <div className="pt-2">
                    <span className={`text-[10px] font-mono uppercase tracking-wider block mb-2 ${mutedText}`}>
                      Figur Terkurasi di Laci Ini:
                    </span>
                    <div className="flex flex-wrap items-center gap-2">
                      {lens.figures.map((fig) => (
                        <span 
                          key={fig.slug}
                          className={`text-xs font-mono px-2.5 py-1 border ${borderClass} bg-inherit/5 text-inherit`}
                        >
                          {fig.name}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Bottom CTA Action */}
                <div className="mt-8 pt-4 border-t border-inherit/10 flex justify-between items-center">
                  <Link
                    href={`/warga-lokal/${lens.slug}`}
                    className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-[#E11D48] group-hover:underline"
                  >
                    <span>TELUSURI LENSA & FIGUR</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <span className={`text-[11px] font-mono uppercase ${mutedText}`}>
                    {lens.figures.length} Tokoh Terverifikasi
                  </span>
                </div>

              </motion.div>
            ))}
          </div>
        </section>

      </main>

      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}
