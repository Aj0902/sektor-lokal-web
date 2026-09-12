'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  MapPin,
  ExternalLink,
  ShoppingBag,
  Radio,
  Share2,
  Check,
  Sparkles,
  ShieldCheck
} from 'lucide-react';
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
  const subCardBg = isDarkMode ? 'bg-black/20' : 'bg-[#F1EDE4]';
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

      <main className="flex-1 w-full max-w-4xl mx-auto px-5 sm:px-8 py-10 sm:py-16 flex flex-col gap-10 sm:gap-14">
        
        {/* Top Navigation Bar */}
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
                <span className="text-[#10B981]">Tersalin</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5" />
                <span>Bagikan</span>
              </>
            )}
          </button>
        </div>

        {/* 1. Header & Lead (Di Atas Hero) */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className={`px-2.5 py-0.5 text-[11px] font-mono font-bold tracking-wider uppercase border ${getTierColor(brand.curationTier)}`}>
              {brand.curationTier}
            </span>
            <span className="text-xs font-mono text-[#E11D48] uppercase tracking-wider font-semibold">
              {brand.lensName}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display uppercase tracking-tight leading-[1.05]">
            {brand.discoveryTitle.anomaly || brand.name}
          </h1>

          <p className="font-editorial italic text-lg sm:text-xl text-[#E11D48] leading-relaxed descender-safe">
            {brand.coreFinding}
          </p>
        </header>

        {/* 2. Hero Visual Brand (Minimalis & Elegan) */}
        <section className={`p-6 sm:p-8 border ${borderClass} ${cardBg} flex flex-col sm:flex-row items-center sm:items-start gap-6`}>
          {/* Logo Frame */}
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-none border border-white/20 bg-black/40 overflow-hidden relative shrink-0 flex items-center justify-center p-3 shadow-md">
            <img
              src={brand.logoUrl}
              alt={brand.name}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Identity Meta */}
          <div className="space-y-2 text-center sm:text-left flex-1">
            <h2 className="text-2xl sm:text-3xl font-display uppercase tracking-tight text-inherit">
              {brand.name}
            </h2>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 text-xs font-mono opacity-80">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#E11D48]" />
                {brand.origin}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 text-[#10B981]">
                <ShieldCheck className="w-3.5 h-3.5" />
                Terverifikasi Sektor Lokal
              </span>
            </div>
            <p className={`text-xs sm:text-sm font-sans leading-relaxed pt-1 ${mutedText}`}>
              {brand.evidenceTelemetry.productionModel}
            </p>
          </div>
        </section>

        {/* 3. Esai Naratif Terpadu (Satu Cerita Utuh yang Mengalir) */}
        <article className="space-y-6 text-sm sm:text-base font-sans leading-relaxed">
          <div className="border-b border-inherit/10 pb-3">
            <span className="font-mono text-xs font-bold text-[#E11D48] tracking-widest uppercase">
              CATATAN REDAKSI
            </span>
          </div>

          <div className="space-y-4 text-inherit/90 font-sans leading-loose text-justify sm:text-left">
            <p>
              {brand.contextNarrative.marketVacuum}
            </p>
            <p>
              {brand.contextNarrative.disruptedStatusQuo}
            </p>
            {brand.evidenceTelemetry.verifiedClaims && brand.evidenceTelemetry.verifiedClaims[0] && (
              <p className={`p-4 border-l-2 border-[#10B981] ${subCardBg} text-xs sm:text-sm italic font-sans`}>
                {brand.evidenceTelemetry.verifiedClaims[0].editorialInterpretation}
              </p>
            )}
          </div>
        </article>

        {/* 4. Karya Pilihan & Harga Riil */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-inherit/10 pb-3">
            <span className="font-mono text-xs font-bold text-[#E11D48] tracking-widest uppercase">
              KARYA PILIHAN
            </span>
            <span className={`font-mono text-xs ${mutedText}`}>
              ESTIMASI HARGA RIIL
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {brand.flagshipProducts.map((prod, idx) => (
              <div
                key={idx}
                className={`border ${borderClass} ${cardBg} overflow-hidden flex flex-col justify-between group hover:border-[#E11D48] transition-colors`}
              >
                {/* Product Photo */}
                {prod.imageUrl && (
                  <div className="w-full h-48 sm:h-52 bg-black/40 overflow-hidden relative">
                    <img
                      src={prod.imageUrl}
                      alt={prod.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                )}

                <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <h3 className="font-display text-base sm:text-lg uppercase tracking-tight text-inherit group-hover:text-[#E11D48] transition-colors">
                      {prod.name}
                    </h3>
                    <p className={`text-xs font-sans ${mutedText} leading-relaxed`}>
                      {prod.specs}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-inherit/10 flex items-center justify-between gap-3">
                    <div>
                      <span className="font-mono text-[10px] uppercase opacity-60 block">Kisaran Harga</span>
                      <span className="font-mono text-xs sm:text-sm font-bold text-[#10B981]">{prod.price}</span>
                    </div>

                    <a
                      href={prod.buyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 font-mono text-xs font-bold uppercase tracking-wider bg-[#E11D48] text-white hover:bg-[#BE123C] transition-colors"
                    >
                      <span>Beli Resmi</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </section>

        {/* 5. Catatan Refleksi Penutup (Story Conclusion) */}
        <section className={`p-6 sm:p-8 border ${borderClass} ${cardBg} space-y-3`}>
          <div className="flex items-center gap-2 text-xs font-mono text-[#D97706] font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>REFLEKSI AKHIR</span>
          </div>
          <p className="font-editorial italic text-base sm:text-lg leading-relaxed descender-safe text-inherit">
            &ldquo;{brand.sovereigntyMeaning}&rdquo;
          </p>
        </section>

        {/* 6. Akses Resmi (Minimalis) */}
        <section className="space-y-4">
          <div className="border-b border-inherit/10 pb-3">
            <span className="font-mono text-xs font-bold text-[#E11D48] tracking-widest uppercase">
              KANAL RESMI
            </span>
          </div>

          <div className="flex flex-wrap gap-3">
            {brand.channels.officialStore.map((ch, idx) => (
              <a
                key={idx}
                href={ch.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-4 py-2 font-mono text-xs font-semibold border ${borderClass} ${cardBg} hover:border-[#10B981] hover:text-[#10B981] transition-all`}
              >
                <ShoppingBag className="w-3.5 h-3.5 text-[#10B981]" />
                <span>{ch.platform}: {ch.label}</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
            ))}

            {brand.channels.publicSpaces.map((ch, idx) => (
              <a
                key={idx}
                href={ch.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-4 py-2 font-mono text-xs font-semibold border ${borderClass} ${cardBg} hover:border-[#2563EB] hover:text-[#2563EB] transition-all`}
              >
                <Radio className="w-3.5 h-3.5 text-[#2563EB]" />
                <span>{ch.platform}: {ch.label}</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
            ))}
          </div>
        </section>

        {/* 7. Brand Terkait di Lensa yang Sama */}
        {relatedBrands.length > 0 && (
          <section className="space-y-4 pt-6 border-t border-inherit/10">
            <div className="flex justify-between items-center">
              <span className="font-mono text-xs font-bold text-[#E11D48] tracking-widest uppercase">
                BRAND LAIN DI LENSA {brand.lensName}
              </span>
              <Link
                href={`/brand-lokal/${brand.lensSlug}`}
                className={`font-mono text-xs ${mutedText} hover:text-[#E11D48] transition-colors`}
              >
                Lihat Lensa Lengkap →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedBrands.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/brand/${rel.slug}`}
                  className={`p-4 border ${borderClass} ${cardBg} group hover:border-[#E11D48] transition-all flex flex-col justify-between space-y-3`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-none border border-white/20 bg-black/40 overflow-hidden relative shrink-0">
                        <img src={rel.logoUrl} alt={rel.name} className="w-full h-full object-contain" />
                      </div>
                      <span className="font-display text-sm uppercase tracking-tight group-hover:text-[#E11D48] transition-colors line-clamp-1">
                        {rel.name}
                      </span>
                    </div>
                    <p className={`text-xs font-sans ${mutedText} line-clamp-2`}>
                      {rel.coreFinding}
                    </p>
                  </div>
                  <div className="flex items-center justify-between text-[11px] font-mono opacity-80 pt-2 border-t border-inherit/10">
                    <span>{rel.origin}</span>
                    <span className="text-[#E11D48] group-hover:translate-x-1 transition-transform">Baca →</span>
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
