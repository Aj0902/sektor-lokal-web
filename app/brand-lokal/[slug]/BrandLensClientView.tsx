'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, ShieldCheck, Tag, MapPin, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { BrandLens, BrandSummary } from '../../../lib/supabase/brandData';

interface Props {
  lens: BrandLens;
}

export default function BrandLensClientView({ lens }: Props) {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [selectedTier, setSelectedTier] = useState<string>('ALL');

  const bgClass = isDarkMode ? 'bg-[#07090E] text-[#F5EFEB]' : 'bg-[#F8F5EE] text-[#0A0E1A]';
  const borderClass = isDarkMode ? 'border-white/10' : 'border-black/10';
  const cardBg = isDarkMode ? 'bg-[#0E131F]' : 'bg-white';
  const mutedText = isDarkMode ? 'text-[#8E95A5]' : 'text-[#64748B]';

  const filteredBrands = selectedTier === 'ALL'
    ? lens.brands
    : lens.brands.filter(b => b.curationTier.toUpperCase() === selectedTier);

  const getTierColor = (tier: string) => {
    switch (tier.toLowerCase()) {
      case 'established':
        return 'bg-[#10B981]/10 text-[#10B981] border-[#10B981]/30';
      case 'middle':
        return 'bg-[#2563EB]/10 text-[#2563EB] border-[#2563EB]/30';
      case 'hidden gem':
        return 'bg-[#D97706]/10 text-[#D97706] border-[#D97706]/30';
      default:
        return 'bg-white/10 text-inherit border-white/20';
    }
  };

  return (
    <div className={`min-h-screen ${bgClass} font-sans antialiased selection:bg-[#E11D48] selection:text-white flex flex-col`}>
      <Navbar isDarkMode={isDarkMode} onToggleDarkMode={() => setIsDarkMode(!isDarkMode)} />

      <main className="flex-1 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-10 sm:py-16 flex flex-col gap-10 sm:gap-14">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-3">
          <Link
            href="/brand-lokal"
            className={`inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest ${mutedText} hover:text-[#E11D48] transition-colors`}
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Kembali ke Laci Brand Lokal</span>
          </Link>
        </div>

        {/* Lens Master Header */}
        <header className={`p-6 sm:p-10 border ${borderClass} ${cardBg} ${lens.color} space-y-6`}>
          <div className="flex flex-wrap justify-between items-center gap-4 border-b border-inherit/10 pb-4">
            <span className="font-mono text-xs text-[#E11D48] font-bold tracking-widest uppercase">
              LENSA {lens.id} / 06 | {lens.name}
            </span>
            <div className="flex items-center gap-2 font-mono text-xs opacity-75">
              <ShieldCheck className="w-4 h-4 text-[#10B981]" />
              <span>{lens.brands.length} BRAND TERVERIFIKASI</span>
            </div>
          </div>

          <div className="space-y-3 max-w-4xl">
            <h1 className="text-3xl sm:text-5xl font-display uppercase tracking-tight leading-tight">
              {lens.editorialTitle}
            </h1>
            <p className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-inherit/90">
              {lens.definition}
            </p>
          </div>

          {/* 2-Column Lens Narrative */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-inherit/10">
            <p className={`text-xs sm:text-sm font-sans leading-relaxed ${mutedText}`}>
              {lens.narrative[0]}
            </p>
            <p className={`text-xs sm:text-sm font-sans leading-relaxed ${mutedText}`}>
              {lens.narrative[1]}
            </p>
          </div>

          {/* Finding Question Callout Box */}
          <div className={`p-4 sm:p-5 border ${borderClass} bg-black/20 flex items-start gap-3`}>
            <Sparkles className="w-5 h-5 text-[#D97706] shrink-0 mt-0.5" />
            <div className="space-y-1">
              <span className="font-mono text-[10px] text-[#D97706] font-bold uppercase tracking-widest">
                PERTANYAAN KURASI
              </span>
              <p className="font-editorial italic text-sm sm:text-base leading-relaxed descender-safe">
                &ldquo;{lens.findingQuestion}&rdquo;
              </p>
            </div>
          </div>
        </header>

        {/* Tier Filter Navigation */}
        <section className="space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b pb-4 border-inherit/10">
            <span className="font-mono text-xs font-bold text-[#E11D48] tracking-widest uppercase">
              DAFTAR 10 BRAND TERKURASI
            </span>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'ALL', label: `Semua (${lens.brands.length})` },
                { id: 'ESTABLISHED', label: 'Established' },
                { id: 'MIDDLE', label: 'Middle' },
                { id: 'HIDDEN GEM', label: 'Hidden Gem' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedTier(tab.id)}
                  className={`px-3 py-1.5 font-mono text-xs font-semibold tracking-wider uppercase border transition-all ${
                    selectedTier === tab.id
                      ? 'border-[#E11D48] bg-[#E11D48] text-white'
                      : `${borderClass} ${cardBg} ${mutedText} hover:text-inherit hover:border-inherit/30`
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Brand Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <AnimatePresence mode="popLayout">
              {filteredBrands.map((brand, idx) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3, delay: idx * 0.04 }}
                  key={brand.slug}
                  className={`p-6 sm:p-8 border ${borderClass} ${cardBg} flex flex-col justify-between group hover:border-[#E11D48] transition-all duration-300 tactile-btn space-y-6`}
                >
                  <div className="space-y-5">
                    
                    {/* Brand Card Top Meta */}
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        {/* Logo Avatar Frame */}
                        <div className="w-12 h-12 rounded-none border border-white/20 bg-black/40 overflow-hidden relative shrink-0 flex items-center justify-center">
                          <img
                            src={brand.logoUrl}
                            alt={brand.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                          />
                        </div>
                        <div>
                          <h3 className="text-xl sm:text-2xl font-display uppercase tracking-tight group-hover:text-[#E11D48] transition-colors leading-tight">
                            {brand.name}
                          </h3>
                          <div className="flex items-center gap-1.5 font-mono text-[11px] opacity-70 mt-0.5">
                            <MapPin className="w-3 h-3 text-[#E11D48]" />
                            <span>{brand.origin}</span>
                          </div>
                        </div>
                      </div>

                      {/* Tier Badge */}
                      <span className={`px-2.5 py-1 text-[10px] font-mono font-bold tracking-wider uppercase border ${getTierColor(brand.curationTier)}`}>
                        {brand.curationTier}
                      </span>
                    </div>

                    {/* Discovery Headline */}
                    <div className="border-l-2 border-[#E11D48] pl-3 py-0.5">
                      <p className="font-editorial italic text-sm sm:text-base text-inherit leading-snug descender-safe">
                        &ldquo;{brand.discoveryHeadline}&rdquo;
                      </p>
                    </div>

                    {/* 1-Sentence Finding */}
                    <p className={`text-xs sm:text-sm font-sans leading-relaxed ${mutedText}`}>
                      {brand.coreFinding}
                    </p>

                    {/* Price Range & Score Meta */}
                    <div className={`flex flex-wrap items-center justify-between gap-2 pt-3 border-t ${borderClass} text-xs font-mono`}>
                      <div className="flex items-center gap-1.5 opacity-80">
                        <Tag className="w-3.5 h-3.5 text-[#10B981]" />
                        <span className="truncate max-w-[220px]">{brand.flagshipPriceRange}</span>
                      </div>
                      <span className="text-[#E11D48] font-bold">Skor: {brand.totalScore}/100</span>
                    </div>

                  </div>

                  {/* Action Link to Full Dossier */}
                  <div className="pt-4 border-t border-inherit/10">
                    <Link
                      href={`/brand/${brand.slug}`}
                      className="inline-flex items-center justify-between w-full font-mono text-xs font-bold uppercase tracking-widest text-[#E11D48] group-hover:translate-x-1 transition-transform"
                    >
                      <span>Buka Berkas 7-Tahap Brand</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
