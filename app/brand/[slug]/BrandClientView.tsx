'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  Building2,
  MapPin,
  ExternalLink,
  Award,
  Layers,
  FileCheck,
  CheckCircle2,
  Sparkles,
  ShoppingBag,
  Clock,
  Compass,
  Radio,
  Share2,
  Check
} from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { BrandProfile, brandProfiles } from '../../../lib/supabase/brandData';

interface Props {
  brand: BrandProfile;
}

export default function BrandClientView({ brand }: Props) {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [copied, setCopied] = useState(false);

  const bgClass = isDarkMode ? 'bg-[#07090E] text-[#F5EFEB]' : 'bg-[#F8F5EE] text-[#0A0E1A]';
  const borderClass = isDarkMode ? 'border-white/10' : 'border-black/10';
  const cardBg = isDarkMode ? 'bg-[#0E131F]' : 'bg-white';
  const subCardBg = isDarkMode ? 'bg-black/30' : 'bg-[#F1EDE4]';
  const mutedText = isDarkMode ? 'text-[#8E95A5]' : 'text-[#64748B]';

  // Get other brands in the same lens
  const relatedBrands = Object.values(brandProfiles)
    .filter(b => b.lensSlug === brand.lensSlug && b.slug !== brand.slug)
    .slice(0, 3);

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

  const handleShare = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className={`min-h-screen ${bgClass} font-sans antialiased selection:bg-[#E11D48] selection:text-white flex flex-col`}>
      <Navbar isDarkMode={isDarkMode} onToggleDarkMode={() => setIsDarkMode(!isDarkMode)} />

      <main className="flex-1 w-full max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 py-10 sm:py-16 flex flex-col gap-12 sm:gap-16">
        
        {/* Navigation Breadcrumb (No status bar) */}
        <div className="flex items-center justify-between gap-4 border-b border-inherit/10 pb-4">
          <Link
            href={`/brand-lokal/${brand.lensSlug}`}
            className={`inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest ${mutedText} hover:text-[#E11D48] transition-colors`}
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>← Laci: {brand.lensName}</span>
          </Link>

          <button
            onClick={handleShare}
            className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono border ${borderClass} ${cardBg} hover:border-[#E11D48] transition-colors`}
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-[#10B981]" />
                <span className="text-[#10B981]">Tersalin!</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5" />
                <span>Bagikan Berkas</span>
              </>
            )}
          </button>
        </div>

        {/* Master Brand Hero Section */}
        <header className={`p-6 sm:p-10 border ${borderClass} ${cardBg} relative overflow-hidden space-y-8`}>
          
          {/* Top Badges & Meta */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-inherit/10 pb-5">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className={`px-3 py-1 text-xs font-mono font-bold tracking-wider uppercase border ${getTierColor(brand.curationTier)}`}>
                {brand.curationTier}
              </span>
              <span className={`px-3 py-1 text-xs font-mono uppercase tracking-wider border ${borderClass} flex items-center gap-1.5`}>
                <MapPin className="w-3.5 h-3.5 text-[#E11D48]" />
                <span>{brand.origin}</span>
              </span>
            </div>

            <div className="flex items-center gap-2 font-mono text-xs">
              <ShieldCheck className="w-4 h-4 text-[#10B981]" />
              <span className="text-[#10B981] font-bold">Skor Verifikasi: {brand.scores.total}/100</span>
            </div>
          </div>

          {/* Brand Logo & Name Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            
            {/* Logo Avatar Frame (Brand Logo Only) */}
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-none border border-white/20 bg-black/40 overflow-hidden relative shrink-0 flex items-center justify-center p-2 shadow-lg">
              <img
                src={brand.logoUrl}
                alt={brand.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-2">
              <span className="font-mono text-xs text-[#E11D48] font-bold uppercase tracking-widest">
                BERKAS DISCOVERY BRAND LOKAL
              </span>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-display uppercase tracking-tight leading-[0.95]">
                {brand.name}
              </h1>
              <p className="font-mono text-xs sm:text-sm uppercase tracking-wider opacity-75">
                Kategori Lensa: <strong className="text-inherit font-semibold">{brand.lensName}</strong>
              </p>
            </div>

          </div>

          {/* Discovery Title: Anomali -> Pertanyaan -> Paradigma */}
          <div className={`p-5 sm:p-6 border ${borderClass} ${subCardBg} space-y-3`}>
            <span className="font-mono text-[10px] text-[#D97706] font-bold uppercase tracking-widest block">
              DIALEKTIKA PENEMUAN UTAMA
            </span>
            <div className="space-y-2">
              <p className="font-editorial italic text-base sm:text-lg text-inherit leading-relaxed descender-safe">
                &ldquo;{brand.discoveryTitle.anomaly}&rdquo;
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-mono border-t border-inherit/10">
                <div>
                  <span className="text-[#E11D48] font-bold">Pertanyaan: </span>
                  <span className={mutedText}>{brand.discoveryTitle.question}</span>
                </div>
                <div>
                  <span className="text-[#10B981] font-bold">Paradigma: </span>
                  <span className={mutedText}>{brand.discoveryTitle.paradigm}</span>
                </div>
              </div>
            </div>
          </div>

        </header>

        {/* 7-STAGE EVIDENCE-FIRST DOSSIER */}

        {/* STAGE 01: TEMUAN */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 border-b border-inherit/10 pb-3">
            <span className="font-mono text-xs font-bold text-[#E11D48] tracking-widest">
              01. TEMUAN
            </span>
            <span className="font-mono text-xs uppercase tracking-widest opacity-60">
              THE CORE ANOMALY
            </span>
          </div>

          <div className={`p-6 sm:p-8 border-l-4 border-l-[#E11D48] border ${borderClass} ${cardBg} space-y-3`}>
            <div className="flex items-center gap-2 font-mono text-xs text-[#E11D48] font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>TEMUAN UTAMA REDAKSI</span>
            </div>
            <p className="text-base sm:text-lg font-sans leading-relaxed font-medium">
              {brand.coreFinding}
            </p>
          </div>
        </section>

        {/* STAGE 02: KONTEKS */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 border-b border-inherit/10 pb-3">
            <span className="font-mono text-xs font-bold text-[#E11D48] tracking-widest">
              02. KONTEKS
            </span>
            <span className="font-mono text-xs uppercase tracking-widest opacity-60">
              THE LANDSCAPE &amp; MARKET VACUUM
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className={`p-6 sm:p-8 border ${borderClass} ${cardBg} space-y-3`}>
              <span className="font-mono text-xs text-[#E11D48] font-bold uppercase tracking-wider block">
                KONDISI PASAR &amp; MASALAH STRUKTURAL
              </span>
              <p className={`text-sm font-sans leading-relaxed ${mutedText}`}>
                {brand.contextNarrative.marketVacuum}
              </p>
            </div>

            <div className={`p-6 sm:p-8 border ${borderClass} ${cardBg} space-y-3`}>
              <span className="font-mono text-xs text-[#10B981] font-bold uppercase tracking-wider block">
                TEROBOSAN OPERASIONAL &amp; STANDAR BARU
              </span>
              <p className={`text-sm font-sans leading-relaxed ${mutedText}`}>
                {brand.contextNarrative.disruptedStatusQuo}
              </p>
            </div>
          </div>
        </section>

        {/* STAGE 03: BUKTI */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 border-b border-inherit/10 pb-3">
            <span className="font-mono text-xs font-bold text-[#E11D48] tracking-widest">
              03. BUKTI
            </span>
            <span className="font-mono text-xs uppercase tracking-widest opacity-60">
              EMPIRICAL VERIFICATION &amp; TELEMETRY
            </span>
          </div>

          {/* Telemetry Grid */}
          <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 p-5 sm:p-6 border ${borderClass} ${cardBg}`}>
            <div className="space-y-1">
              <span className="font-mono text-[10px] text-[#E11D48] font-bold uppercase tracking-widest">
                KOORDINAT HULU &amp; ASAL BAHAN
              </span>
              <p className="font-sans text-sm font-semibold">{brand.evidenceTelemetry.originCoordinates}</p>
            </div>
            <div className="space-y-1">
              <span className="font-mono text-[10px] text-[#10B981] font-bold uppercase tracking-widest">
                MODEL PRODUKSI &amp; MANUFAKTUR
              </span>
              <p className="font-sans text-sm font-semibold">{brand.evidenceTelemetry.productionModel}</p>
            </div>
          </div>

          {/* Verified Claims Breakdown */}
          <div className="space-y-4 pt-2">
            <span className="font-mono text-xs font-bold uppercase tracking-wider opacity-80 block">
              RANTAI VERIFIKASI KLAIM (CLAIM → EVIDENCE → VERIFICATION → INTERPRETATION)
            </span>

            <div className="grid grid-cols-1 gap-4">
              {brand.evidenceTelemetry.verifiedClaims.map((claim, idx) => (
                <div key={idx} className={`p-6 border ${borderClass} ${cardBg} space-y-4`}>
                  
                  {/* Claim Box */}
                  <div className="border-b border-inherit/10 pb-3">
                    <span className="font-mono text-[10px] text-[#E11D48] font-bold uppercase tracking-widest">
                      KLAIM UTAMA ({idx + 1})
                    </span>
                    <p className="font-sans text-sm font-bold text-inherit mt-1">
                      &ldquo;{claim.claim}&rdquo;
                    </p>
                  </div>

                  {/* 3 Steps Chain */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-sans">
                    <div className={`p-3 border ${borderClass} ${subCardBg} space-y-1`}>
                      <span className="font-mono text-[10px] text-[#2563EB] font-bold uppercase tracking-widest">
                        BUKTI PRIMER
                      </span>
                      <p className={mutedText}>{claim.evidencePrimary}</p>
                    </div>

                    <div className={`p-3 border ${borderClass} ${subCardBg} space-y-1`}>
                      <span className="font-mono text-[10px] text-[#10B981] font-bold uppercase tracking-widest">
                        SUMBER VERIFIKASI
                      </span>
                      <p className={mutedText}>{claim.verificationSource}</p>
                    </div>

                    <div className={`p-3 border ${borderClass} ${subCardBg} space-y-1`}>
                      <span className="font-mono text-[10px] text-[#D97706] font-bold uppercase tracking-widest">
                        TAFSIR REDAKSI
                      </span>
                      <p className={mutedText}>{claim.editorialInterpretation}</p>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>
        </section>

        {/* STAGE 04: KARYA */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 border-b border-inherit/10 pb-3">
            <span className="font-mono text-xs font-bold text-[#E11D48] tracking-widest">
              04. KARYA
            </span>
            <span className="font-mono text-xs uppercase tracking-widest opacity-60">
              FLAGSHIP ARTIFACTS &amp; PRICING
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {brand.flagshipProducts.map((prod, idx) => (
              <div
                key={idx}
                className={`border ${borderClass} ${cardBg} overflow-hidden flex flex-col justify-between group hover:border-[#E11D48] transition-colors`}
              >
                {/* Product Image */}
                {prod.imageUrl && (
                  <div className="w-full h-48 sm:h-56 bg-black/40 overflow-hidden relative">
                    <img
                      src={prod.imageUrl}
                      alt={prod.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                )}

                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex justify-between items-start gap-2">
                      <h4 className="font-display text-lg sm:text-xl uppercase tracking-tight text-inherit group-hover:text-[#E11D48] transition-colors">
                        {prod.name}
                      </h4>
                    </div>
                    <p className={`text-xs font-sans ${mutedText} leading-relaxed`}>
                      {prod.specs}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-inherit/10 flex items-center justify-between gap-4">
                    <div>
                      <span className="font-mono text-[10px] uppercase opacity-60 block">Kisaran Harga Riil</span>
                      <span className="font-mono text-sm font-bold text-[#10B981]">{prod.price}</span>
                    </div>

                    <a
                      href={prod.buyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 font-mono text-xs font-bold uppercase tracking-wider bg-[#E11D48] text-white hover:bg-[#BE123C] transition-colors"
                    >
                      <span>Beli Resmi</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </section>

        {/* STAGE 05: JEJAK */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 border-b border-inherit/10 pb-3">
            <span className="font-mono text-xs font-bold text-[#E11D48] tracking-widest">
              05. JEJAK
            </span>
            <span className="font-mono text-xs uppercase tracking-widest opacity-60">
              VERIFIED MILESTONES
            </span>
          </div>

          <div className={`p-6 sm:p-8 border ${borderClass} ${cardBg}`}>
            <div className="relative border-l-2 border-[#E11D48]/40 pl-6 sm:pl-8 space-y-8 my-2">
              {brand.milestones.map((ms, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline Node */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-3.5 h-3.5 rounded-full bg-[#E11D48] border-2 border-inherit" />

                  <div className="space-y-1">
                    <span className="font-mono text-xs text-[#E11D48] font-bold uppercase tracking-wider">
                      {ms.year}
                    </span>
                    <p className="font-sans text-sm text-inherit leading-relaxed">
                      {ms.event}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* STAGE 06: MAKNA */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 border-b border-inherit/10 pb-3">
            <span className="font-mono text-xs font-bold text-[#E11D48] tracking-widest">
              06. MAKNA
            </span>
            <span className="font-mono text-xs uppercase tracking-widest opacity-60">
              SOVEREIGNTY &amp; CULTURAL THESIS
            </span>
          </div>

          <div className={`p-6 sm:p-8 border ${borderClass} ${cardBg} space-y-3`}>
            <span className="font-mono text-xs text-[#D97706] font-bold uppercase tracking-wider block">
              TESIS KEDAULATAN &amp; KELUARGA BESAR KARYA
            </span>
            <p className="font-editorial italic text-base sm:text-lg leading-relaxed descender-safe text-inherit">
              &ldquo;{brand.sovereigntyMeaning}&rdquo;
            </p>
          </div>
        </section>

        {/* STAGE 07: TERHUBUNG */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 border-b border-inherit/10 pb-3">
            <span className="font-mono text-xs font-bold text-[#E11D48] tracking-widest">
              07. TERHUBUNG
            </span>
            <span className="font-mono text-xs uppercase tracking-widest opacity-60">
              TWO-TIER DIRECTORY
            </span>
          </div>

          <div className="space-y-6">
            
            {/* Row 1: Akses Penjualan Resmi */}
            <div className={`p-6 border ${borderClass} ${cardBg} space-y-4`}>
              <span className="font-mono text-xs text-[#10B981] font-bold uppercase tracking-wider block">
                BARIS 1: AKSES PENJUALAN RESMI (COMMERCE CHANNELS)
              </span>
              <div className="flex flex-wrap gap-3">
                {brand.channels.officialStore.map((ch, idx) => (
                  <a
                    key={idx}
                    href={ch.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-4 py-2.5 font-mono text-xs font-semibold border ${borderClass} ${subCardBg} hover:border-[#10B981] hover:text-[#10B981] transition-all`}
                  >
                    <ShoppingBag className="w-3.5 h-3.5 text-[#10B981]" />
                    <span>{ch.platform}: {ch.label}</span>
                    <ExternalLink className="w-3 h-3 opacity-60" />
                  </a>
                ))}
              </div>
            </div>

            {/* Row 2: Ruang Publik & Informasi */}
            <div className={`p-6 border ${borderClass} ${cardBg} space-y-4`}>
              <span className="font-mono text-xs text-[#2563EB] font-bold uppercase tracking-wider block">
                BARIS 2: RUANG PUBLIK &amp; KOMUNIKASI (PUBLIC CHANNELS)
              </span>
              <div className="flex flex-wrap gap-3">
                {brand.channels.publicSpaces.map((ch, idx) => (
                  <a
                    key={idx}
                    href={ch.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-4 py-2.5 font-mono text-xs font-semibold border ${borderClass} ${subCardBg} hover:border-[#2563EB] hover:text-[#2563EB] transition-all`}
                  >
                    <Radio className="w-3.5 h-3.5 text-[#2563EB]" />
                    <span>{ch.platform}: {ch.label}</span>
                    <ExternalLink className="w-3 h-3 opacity-60" />
                  </a>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* Related Brands in the Same Lens */}
        {relatedBrands.length > 0 && (
          <section className="space-y-6 pt-6 border-t border-inherit/10">
            <div className="flex justify-between items-center">
              <span className="font-mono text-xs font-bold text-[#E11D48] tracking-widest uppercase">
                BRAND LAIN DI LENSA {brand.lensName}
              </span>
              <Link
                href={`/brand-lokal/${brand.lensSlug}`}
                className={`font-mono text-xs ${mutedText} hover:text-[#E11D48] transition-colors`}
              >
                Lihat Semua 10 Brand →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedBrands.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/brand/${rel.slug}`}
                  className={`p-5 border ${borderClass} ${cardBg} group hover:border-[#E11D48] transition-all flex flex-col justify-between space-y-4`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-none border border-white/20 bg-black/40 overflow-hidden relative shrink-0">
                        <img src={rel.logoUrl} alt={rel.name} className="w-full h-full object-cover" />
                      </div>
                      <span className="font-display text-sm uppercase tracking-tight group-hover:text-[#E11D48] transition-colors">
                        {rel.name}
                      </span>
                    </div>
                    <p className={`text-xs font-sans ${mutedText} line-clamp-2`}>
                      {rel.coreFinding}
                    </p>
                  </div>
                  <div className="flex items-center justify-between text-[11px] font-mono opacity-80 pt-2 border-t border-inherit/10">
                    <span>{rel.origin}</span>
                    <span className="text-[#E11D48] group-hover:translate-x-1 transition-transform">Lihat →</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

      </main>

      <Footer />
    </div>
  );
}
