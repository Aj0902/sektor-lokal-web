'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2, Share2, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { DiscoveryLens, discoveryLenses } from '../../../lib/supabase/discoveryData';
import { directoryProfiles } from '../../../lib/supabase/fallbackData';
import { Profile } from '../../../lib/supabase/types';
import { createClient } from '../../../lib/supabase/client';

interface DiscoveryLensClientViewProps {
  lens: DiscoveryLens;
}

export default function DiscoveryLensClientView({ lens }: DiscoveryLensClientViewProps) {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [copied, setCopied] = useState(false);
  const [profiles, setProfiles] = useState<Profile[]>(directoryProfiles);

  useEffect(() => {
    const fetchCategoryProfiles = async () => {
      try {
        const supabase = createClient();
        const { data, error } = await supabase
          .from('profiles_warga_demo1')
          .select('*')
          .eq('category', lens.name)
          .order('name', { ascending: true });

        if (data && data.length > 0 && !error) {
          setProfiles(data);
        }
      } catch {
        // use directoryProfiles fallback
      }
    };
    fetchCategoryProfiles();
  }, [lens.name]);

  // Filter profiles matching this lens category
  const lensProfiles = profiles.filter(
    p => (p.category || '').toLowerCase() === lens.name.toLowerCase() ||
         (p.category || '').toLowerCase().includes(lens.name.toLowerCase())
  );

  // Find next lens for discovery loop
  const currentIndex = discoveryLenses.findIndex(l => l.slug === lens.slug);
  const nextLens = discoveryLenses[(currentIndex + 1) % discoveryLenses.length];

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const bgClass = isDarkMode ? 'bg-[#07090E] text-[#F5EFEB]' : 'bg-[#F8F5EE] text-[#0A0E1A]';
  const borderClass = isDarkMode ? 'border-white/10' : 'border-black/10';
  const cardBg = isDarkMode ? 'bg-[#0E131F]' : 'bg-white';
  const mutedText = isDarkMode ? 'text-[#8E95A5]' : 'text-[#64748B]';

  return (
    <div className={`min-h-screen ${bgClass} font-sans antialiased selection:bg-[#E11D48] selection:text-white flex flex-col`}>
      <Navbar 
        isDarkMode={isDarkMode} 
        onToggleDarkMode={() => setIsDarkMode(!isDarkMode)}
        showBackButton={true}
        backHref="/warga-lokal"
        backLabel="KEMBALI KE SEMUA LENSA"
      />

      <main className="flex-1 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-12 sm:py-20 flex flex-col gap-16 sm:gap-20">
        
        {/* ========================================================================= */}
        {/* SEKSI 1: EDITORIAL LENS ESSAY HERO */}
        {/* ========================================================================= */}
        <section className="space-y-10 max-w-4xl border-b pb-12 border-inherit/10">
          
          {/* Top Breadcrumb & Lens Meta */}
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
            <div className="flex items-center gap-2">
              <Link href="/warga-lokal" className="text-[#E11D48] hover:underline font-bold uppercase tracking-widest">
                WARGA LOKAL
              </Link>
              <span className="opacity-30">/</span>
              <span className="opacity-60 uppercase">LENSA {lens.id}</span>
            </div>
            <button
              onClick={handleCopyLink}
              className={`inline-flex items-center gap-1.5 px-3 py-1 border ${borderClass} text-xs font-mono uppercase tracking-wider hover:border-[#E11D48] transition-colors tactile-btn`}
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Tersalin</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Bagikan Lensa</span>
                </>
              )}
            </button>
          </div>

          {/* Lens Title Block */}
          <div className="space-y-4">
            <span className="font-mono text-xs sm:text-sm font-bold text-[#E11D48] tracking-widest uppercase block">
              {lens.id} | {lens.name}
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-display uppercase tracking-tight leading-[0.95]">
              {lens.editorialTitle}
            </h1>
            <p className="font-mono text-sm sm:text-base font-bold uppercase tracking-wider text-inherit/80 pt-1">
              {lens.definition}
            </p>
          </div>

          {/* Finding Question Box */}
          <div className="p-6 sm:p-8 border-l-4 border-l-[#E11D48] bg-inherit/5 border border-inherit/10 space-y-2">
            <span className="font-mono text-xs text-[#E11D48] font-bold uppercase tracking-widest block">
              Pertanyaan Temuan Kunci:
            </span>
            <p className="font-editorial italic text-xl sm:text-2xl md:text-3xl text-inherit descender-safe leading-snug">
              &ldquo;{lens.findingQuestion}&rdquo;
            </p>
          </div>

          {/* Deep Narrative Essay Paragraphs */}
          <div className="columns-1 md:columns-2 gap-8 lg:gap-12 text-base sm:text-lg font-sans leading-relaxed text-justify sm:text-left space-y-6 text-inherit/90">
            {lens.narrative.map((paragraph, idx) => (
              <p key={idx} className="break-inside-avoid leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
          </div>

        </section>

        {/* ========================================================================= */}
        {/* SEKSI 2: FIGUR TERKURASI DENGAN THUMBNAIL FOTO REAL (FORMAT ARSIP) */}
        {/* ========================================================================= */}
        <section className="space-y-8">
          
          {/* Narrative Bridge Header */}
          <div className="space-y-2 border-b pb-6 border-inherit/10">
            <span className="font-mono text-xs font-bold text-[#E11D48] tracking-widest uppercase block">
              JEJAK REKAM & BUKTI LAPANGAN
            </span>
            <h2 className="text-2xl sm:text-4xl font-display uppercase tracking-tight">
              Figur Terkurasi di Dalam Laci Ini
            </h2>
            <p className={`text-xs sm:text-sm font-sans max-w-2xl ${mutedText}`}>
              Orang-orang yang melalui rekam jejak, keberanian, dan karyanya menjawab pertanyaan temuan di atas secara nyata di lapangan.
            </p>
          </div>

          {/* Archival Figure Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {lensProfiles.map((p, idx) => (
              <motion.div 
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: Math.min(idx * 0.03, 0.5) }}
                key={p.id || p.slug}
                className={`group flex flex-col justify-between ${cardBg} p-5 border ${borderClass} hover:border-[#E11D48] transition-all duration-200 tactile-btn`}
              >
                <div>
                  {/* Photo Frame */}
                  <Link href={`/profil/${p.slug}`} className="block relative aspect-[4/5] overflow-hidden bg-black w-full mb-4 border border-inherit/10">
                    <Image 
                      src={p.photo_url || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80'} 
                      alt={p.name} 
                      fill 
                      className="object-cover portrait-bw transition-transform duration-500 group-hover:scale-105"
                    />
                  </Link>
                  
                  {/* Profile Meta */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-start gap-2">
                      <h3 className="font-display text-xl uppercase leading-snug group-hover:text-[#E11D48] transition-colors">
                        <Link href={`/profil/${p.slug}`}>{p.name}</Link>
                      </h3>
                      {p.verified !== false && (
                        <CheckCircle2 className="w-4 h-4 text-[#E11D48] shrink-0 mt-0.5" />
                      )}
                    </div>
                    <p className="font-editorial text-xs italic text-current/80 line-clamp-2">{p.title}</p>
                  </div>
                </div>

                {/* Bottom Category Tag */}
                <div className="mt-4 pt-3 border-t border-inherit/10 flex justify-between items-center text-[10px] font-mono uppercase tracking-wider text-[#E11D48] font-bold">
                  <span>{p.category}</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>

              </motion.div>
            ))}
          </div>

        </section>

        {/* ========================================================================= */}
        {/* SEKSI 3: DISCOVERY LOOP (NEXT LENS) */}
        {/* ========================================================================= */}
        <section className={`p-8 sm:p-12 border ${borderClass} ${cardBg} flex flex-col md:flex-row items-center justify-between gap-6`}>
          <div className="space-y-2 text-center md:text-left">
            <span className="font-mono text-xs font-bold text-[#E11D48] tracking-widest uppercase block">
              LANJUTKAN PENJELAJAHAN (DISCOVERY LOOP)
            </span>
            <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-tight">
              Lensa Selanjutnya: {nextLens.name}
            </h3>
            <p className="font-editorial italic text-base text-inherit/80 descender-safe">
              &ldquo;{nextLens.editorialTitle}&rdquo;
            </p>
          </div>

          <Link
            href={`/warga-lokal/${nextLens.slug}`}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#E11D48] text-white font-mono text-xs font-bold uppercase tracking-widest hover:bg-[#BE123C] transition-all shrink-0 tactile-btn"
          >
            <span>BUKA LENSA {nextLens.id}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </section>

      </main>

      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}
