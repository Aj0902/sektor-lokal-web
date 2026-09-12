'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowUpRight,
  Globe,
  Instagram,
  ShoppingBag,
  Mail,
  Share2,
  Check,
  Tag,
  ShieldCheck,
  Layers,
  Sparkles,
  MapPin,
  Compass,
  Award
} from 'lucide-react';

import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { BrandProfile, brandProfiles, BrandProduct, BrandMilestone, BrandInitiative } from '../../../lib/supabase/brandData';

interface BrandClientViewProps {
  brand: BrandProfile;
}

export default function BrandClientView({ brand }: BrandClientViewProps) {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        setScrollProgress((totalScroll / windowHeight) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Other brands in the same lens
  const relatedBrands = Object.values(brandProfiles)
    .filter(b => b.lensSlug === brand.lensSlug && b.slug !== brand.slug)
    .slice(0, 3);

  // Extract channels
  const officialStores = brand.channels?.officialStore || [];
  const publicSpaces = brand.channels?.publicSpaces || [];

  // Prepare bio paragraphs (ensure minimum 2-3 rich paragraphs)
  const bioParagraphs: string[] = (brand.bio_paragraphs && brand.bio_paragraphs.length > 0)
    ? brand.bio_paragraphs
    : [
        brand.contextNarrative?.marketVacuum || brand.coreFinding,
        brand.contextNarrative?.disruptedStatusQuo || brand.sovereigntyMeaning,
        brand.evidenceTelemetry?.productionModel || 'Menerapkan rantai pasok mandiri yang bermitra erat dengan perajin dan komunitas lokal.'
      ];

  // Prepare milestones
  const milestones = (brand.milestones && brand.milestones.length > 0)
    ? brand.milestones
    : [
        {
          year: '2015 | INISIASI',
          title: 'Riset & Pembentukan Standar Mandiri',
          description: `Memulai eksplorasi material dan rekayasa produksi di ${brand.origin} guna mendobrak ketergantungan pada rantai pasok luar.`
        },
        {
          year: '2019 | EKSPANSI',
          title: 'Penguatan Rantai Pasok Lokal',
          description: 'Membangun kemitraan erat bersama perajin dan komunitas lokal, menerapkan uji kendali mutu berstandar ketat.'
        },
        {
          year: '2024 | KEDAULATAN',
          title: 'Rujukan Kemandirian Karya',
          description: 'Menjadi teladan integritas karya lokal yang mampu bersaing di panggung nasional dengan transparansi nilai yang utuh.'
        }
      ];

  // Prepare products
  const products: BrandProduct[] = (brand.flagshipProducts && brand.flagshipProducts.length > 0)
    ? brand.flagshipProducts
    : [];

  // Prepare initiatives
  const initiatives: BrandInitiative[] = (brand.initiatives && brand.initiatives.length > 0)
    ? brand.initiatives
    : [
        {
          title: 'Kemitraan Hulu & Etika Rantai Pasok',
          category: 'Ekosistem Berkelanjutan',
          description: brand.evidenceTelemetry?.productionModel || `Bermitra langsung dengan produsen dan perajin di ${brand.origin} tanpa perantara berlebih.`,
          price: 'Bagi Hasil Adil',
          action_text: 'Pelajari Ekosistem',
          link_url: officialStores[0]?.url || '#'
        },
        {
          title: 'Integritas Mutu & Ketertelusuran Bahan',
          category: 'Standar Produksi',
          description: brand.evidenceTelemetry?.verifiedClaims?.[0]?.editorialInterpretation || 'Setiap tahapan produksi melewati proses kurasi ketat untuk memastikan keaslian material dan dampak positif bagi lingkungan sekitar.',
          price: 'Teruji & Terverifikasi',
          action_text: 'Kunjungi Toko Resmi',
          link_url: officialStores[0]?.url || '#'
        }
      ];

  return (
    <div className={`min-h-screen selection:bg-[#E11D48] selection:text-white font-sans ${isDarkMode ? 'magazine-dark text-[#F5EFEB] bg-[#07090E]' : 'magazine-light text-[#07090E] bg-white'}`}>
      
      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 right-0 h-1 bg-[#E11D48] z-50 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      <Navbar isDarkMode={isDarkMode} onToggleDarkMode={() => setIsDarkMode(!isDarkMode)} />

      {/* ========================================================================= */}
      {/* ACT 1: EDITORIAL DOSSIER HERO (DARK OBSIDIAN & RADIAL RED GLOW) */}
      {/* ========================================================================= */}
      <section className="relative w-full bg-[#07090E] text-white border-b border-white/10 pt-24 pb-16 sm:pt-28 sm:pb-20 md:pt-32 md:pb-24 overflow-hidden">
        {/* Subtle Background Ambience */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#E11D48]/10 via-transparent to-transparent pointer-events-none" />
        <div className="dot-matrix absolute inset-0 opacity-[0.03] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
          
          {/* Top Archival Dossier Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 sm:pb-8 mb-8 sm:mb-12 border-b border-white/10 text-xs font-mono">
            <div className="flex items-center gap-3">
              <Link 
                href={`/brand-lokal/${brand.lensSlug}`} 
                className="text-white/60 hover:text-[#E11D48] transition-colors flex items-center gap-1.5 uppercase tracking-wider group"
              >
                <span className="group-hover:-translate-x-0.5 transition-transform">&larr;</span>
                <span>Laci: {brand.lensName}</span>
              </Link>
            </div>
            <div className="flex items-center gap-4 text-white/50 tracking-widest text-[11px]">
              <span className="uppercase tracking-widest text-white/40 font-mono">TELAAH EDITORIAL BRAND</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            {/* Left Column: Dossier Information */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 flex flex-col justify-center"
            >
              {/* Category & Origin Pill */}
              <p className="font-mono text-xs sm:text-sm text-[#8E95A5] uppercase tracking-wider mb-3 flex items-center gap-2">
                <span className="w-2 h-0.5 bg-[#E11D48]" />
                <span>{brand.lensName} | {brand.origin}</span>
              </p>

              {/* Main Headline / Brand Name */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display text-white uppercase leading-[1.08] tracking-tight mb-6 break-words">
                {brand.name}
              </h1>

              {/* Pull-Quote with descender safety */}
              <div className="border-l-2 border-[#E11D48] pl-4 sm:pl-5 py-1 mb-8 bg-white/[0.02]">
                <span className="text-[10px] font-mono text-[#E11D48] uppercase tracking-widest block mb-1">
                  Kutipan Redaksi
                </span>
                <p className="font-editorial italic text-base sm:text-lg md:text-xl text-[#F8F5EE]/90 leading-snug descender-safe">
                  &ldquo;{brand.quote || brand.coreFinding}&rdquo;
                </p>
              </div>

              {/* Social Channels & Share Dossier Action */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                {/* Official Store & Social Chips */}
                {officialStores.length > 0 && officialStores.map((store, i) => (
                  <a
                    key={i}
                    href={store.url}
                    target="_blank"
                    rel="noreferrer"
                    title={store.label}
                    className="inline-flex items-center gap-2 px-3.5 py-2 bg-white/5 hover:bg-[#E11D48] text-white/80 hover:text-white border border-white/10 hover:border-[#E11D48] text-xs font-mono uppercase tracking-wider transition-all duration-200 tactile-btn"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>{store.platform}</span>
                  </a>
                ))}

                {publicSpaces.length > 0 && publicSpaces.map((pub, i) => {
                  const isMail = pub.url.startsWith('mailto:');
                  return (
                    <a
                      key={i}
                      href={pub.url}
                      target="_blank"
                      rel="noreferrer"
                      title={pub.label}
                      className="p-2.5 bg-white/5 hover:bg-[#E11D48] text-white/80 hover:text-white border border-white/10 hover:border-[#E11D48] rounded-full transition-all duration-200 tactile-btn"
                    >
                      {isMail ? <Mail className="w-4 h-4" /> : <Instagram className="w-4 h-4" />}
                    </a>
                  );
                })}

                {/* Share Dossier Button */}
                <button 
                  onClick={handleCopyLink}
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/10 hover:bg-white hover:text-black text-white font-mono text-xs uppercase tracking-wider font-semibold border border-white/20 transition-all duration-200 tactile-btn"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Tautan Berkas Tersalin</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="w-3.5 h-3.5" />
                      <span>Bagikan Berkas</span>
                    </>
                  )}
                </button>
              </div>
            </motion.div>

            {/* Right Column: Swiss Archival Logo Frame */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="lg:col-span-5 flex justify-center lg:justify-end mt-4 lg:mt-0"
            >
              <div className="relative w-full max-w-xs sm:max-w-sm aspect-[4/5] border border-white/20 bg-[#0E131F] p-4 shadow-2xl group flex flex-col items-center justify-center">
                
                {/* Corner Telemetry Marks (+) */}
                <span className="absolute -top-1.5 -left-1.5 text-xs font-mono text-[#E11D48]">+</span>
                <span className="absolute -top-1.5 -right-1.5 text-xs font-mono text-[#E11D48]">+</span>
                <span className="absolute -bottom-1.5 -left-1.5 text-xs font-mono text-[#E11D48]">+</span>
                <span className="absolute -bottom-1.5 -right-1.5 text-xs font-mono text-[#E11D48]">+</span>

                {/* Logo Presentation Container */}
                <div className="relative w-full h-full bg-black/60 border border-white/10 flex flex-col items-center justify-center p-6 group-hover:border-[#E11D48]/40 transition-colors">
                  <div className="relative w-36 h-36 sm:w-44 sm:h-44 flex items-center justify-center">
                    <img 
                      src={brand.logoUrl} 
                      alt={brand.name} 
                      className="max-h-full max-w-full object-contain filter drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)] group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <span className="text-xs font-mono text-white/80 uppercase tracking-widest block font-bold">
                      {brand.name}
                    </span>
                    <span className="text-[10px] font-mono text-[#E11D48] tracking-widest uppercase mt-0.5 block">
                      {brand.origin}
                    </span>
                  </div>
                </div>
                
                {/* Portrait Label */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[10px] font-mono text-white/90 tracking-widest uppercase bg-black/90 backdrop-blur-md px-3 py-1.5 border border-white/10">
                  <span>IDENTITAS RESMI</span>
                  <span className="text-[#E11D48] font-bold">KURASI REDAKSI</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* ACT 2: EDITORIAL BIOGRAPHY / NARASI & GAGASAN (IVORY PAPER) */}
      {/* ========================================================================= */}
      <section className="w-full bg-[#F8F5EE] text-[#07090E] py-20 sm:py-28 relative border-b border-black/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Rail / Section Header */}
            <div className="lg:col-span-3 space-y-4">
              <div className="inline-flex items-center gap-2 border-b-2 border-[#E11D48] pb-1">
                <span className="text-xs font-mono text-[#E11D48] font-bold tracking-widest uppercase">
                  REKAM JEJAK
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-display uppercase tracking-tight text-[#07090E] leading-none">
                Narasi & <br className="hidden sm:inline" /> Gagasan
              </h2>
              <p className="font-mono text-xs text-[#07090E]/60 leading-relaxed pt-2">
                Dokumentasi terkurasi mengenai visi, rantai pasok lokal, dan daya dobrak bagi ekosistem mandiri.
              </p>

              {/* Dossier Meta Sidebar Tile */}
              <div className="hidden lg:block pt-6 border-t border-black/10 space-y-3 font-mono text-xs">
                <div>
                  <span className="text-[#07090E]/50 block uppercase text-[10px]">Kategori Kurasi</span>
                  <span className="font-bold text-[#E11D48]">{brand.lensName}</span>
                </div>
                <div>
                  <span className="text-[#07090E]/50 block uppercase text-[10px]">Asal Daerah</span>
                  <span className="font-bold text-[#07090E]">{brand.origin}</span>
                </div>
                <div>
                  <span className="text-[#07090E]/50 block uppercase text-[10px]">Tingkat Kurasi</span>
                  <span className="font-bold text-[#07090E]">{brand.curationTier}</span>
                </div>
                <div>
                  <span className="text-[#07090E]/50 block uppercase text-[10px]">Status Berkas</span>
                  <span className="font-bold text-[#07090E]">Telaah Redaksi Sektor Lokal</span>
                </div>
              </div>
            </div>
            
            {/* Right Column: Editorial Columns */}
            <div className="lg:col-span-9">
              <div className="columns-1 md:columns-2 gap-8 lg:gap-12 text-base sm:text-lg font-sans leading-relaxed text-left text-[#07090E]/90 space-y-6">
                {bioParagraphs.map((paragraph, idx) => (
                  <p key={idx} className="break-inside-avoid text-justify sm:text-left leading-relaxed mb-6">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* ACT 3: FILOSOFI & LINIMASA JEJAK (DARK OBSIDIAN) */}
      {/* ========================================================================= */}
      <section className="w-full bg-[#07090E] text-[#F5EFEB] py-20 sm:py-28 relative overflow-hidden border-b border-white/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Column: Big Philosophy Quote */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 border-b border-[#E11D48] pb-1">
                <span className="text-xs font-mono text-[#E11D48] font-bold tracking-widest uppercase">
                  FILOSOFI & ARAH KEDAULATAN
                </span>
              </div>
              
              <div className="relative pt-4">
                <span className="text-[#E11D48] text-6xl sm:text-7xl font-editorial leading-none block select-none opacity-60 mb-2">&ldquo;</span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-editorial italic text-white leading-snug descender-safe">
                  {brand.quote || brand.sovereigntyMeaning}
                </h2>
              </div>

              <div className="pt-6 border-t border-white/10 font-mono text-xs text-white/50 space-y-1">
                <p>CATATAN REDAKSI & TELAAH WACANA</p>
                <p className="text-[#E11D48]">SEKTOR LOKAL | KURASI INDEPENDEN</p>
              </div>
            </div>
            
            {/* Right Column: Timeline Events */}
            <div className="lg:col-span-7">
              <div className="relative pl-6 sm:pl-8 border-l border-white/15 space-y-12">
                {milestones.length > 0 ? milestones.map((ev, i) => (
                  <div key={i} className="relative group">
                    {/* Glowing Bullet */}
                    <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#07090E] border-2 border-[#E11D48] group-hover:bg-[#E11D48] transition-colors shadow-[0_0_12px_rgba(225,29,72,0.8)]" />
                    
                    <span className="inline-block px-2.5 py-0.5 bg-white/5 border border-white/10 text-[#E11D48] font-mono text-xs font-bold tracking-widest uppercase mb-2">
                      {ev.year}
                    </span>
                    
                    <h3 className="text-xl sm:text-2xl font-display uppercase text-white mb-2 leading-snug">
                      {ev.title || `Fase Kemandirian ${i + 1}`}
                    </h3>
                    
                    <p className="font-sans text-sm sm:text-base text-[#8E95A5] leading-relaxed">
                      {ev.description}
                    </p>
                  </div>
                )) : (
                  <div className="text-[#8E95A5] font-mono text-sm tracking-widest">
                    TIDAK ADA DATA LINIMASA PERJALANAN
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* ACT 4: PRODUK UNGGULAN & KARYA PILIHAN (CRIMSON RED) */}
      {/* ========================================================================= */}
      <section className="w-full bg-[#E11D48] text-white py-20 sm:py-28 border-b border-black/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          
          <div className="border-b border-white/30 pb-6 mb-12 flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4">
            <div>
              <span className="font-mono text-xs tracking-widest uppercase block text-white/80 font-bold mb-1">
                PORTOFOLIO & KONTRIBUSI
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display uppercase leading-none">
                Produk & Karya Pilihan
              </h2>
            </div>
            <span className="font-mono text-xs tracking-widest uppercase text-white/70">
              KARYA TERPILIH DENGAN HARGA RIIL
            </span>
          </div>
          
          {products.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {products.map((p, i) => (
                <div 
                  key={i} 
                  className="bg-black/15 hover:bg-black/25 p-6 sm:p-8 border border-white/20 transition-all duration-300 flex flex-col justify-between group tactile-btn"
                >
                  <div>
                    {p.imageUrl && (
                      <div className="w-full aspect-[4/3] bg-black/40 mb-4 overflow-hidden border border-white/10 relative">
                        <img 
                          src={p.imageUrl} 
                          alt={p.name} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                          loading="lazy"
                        />
                      </div>
                    )}
                    
                    <span className="text-[10px] font-mono uppercase tracking-widest block mb-3 text-white/80 border-b border-white/20 pb-2 font-semibold">
                      {p.category || 'Karya Unggulan'}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-display uppercase mb-3 leading-snug">
                      {p.name}
                    </h3>
                    <p className="text-sm text-white/80 leading-relaxed mb-6">
                      {p.specs}
                    </p>
                  </div>
                  
                  <div className="pt-4 border-t border-white/15 flex items-center justify-between gap-4">
                    <div>
                      <span className="text-[10px] font-mono uppercase text-white/60 block">Kisaran Harga</span>
                      <span className="text-sm font-bold font-mono text-white">{p.price}</span>
                    </div>

                    <a 
                      href={p.buyUrl || '#'} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="inline-flex items-center gap-1.5 text-xs font-bold font-mono uppercase border-b border-white pb-0.5 hover:text-black hover:border-black transition-colors"
                    >
                      <span>Beli di Toko Resmi</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-white/70 font-mono text-sm tracking-widest">
              TIDAK ADA DATA KARYA PILIHAN
            </div>
          )}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* ACT 5: INISIATIF & RANTAI NILAI LOKAL (DARK NAVY) */}
      {/* ========================================================================= */}
      {initiatives.length > 0 && (
        <section className="w-full bg-[#0E131F] text-[#F5EFEB] py-20 sm:py-28 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            
            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-white/10">
              <div>
                <span className="text-xs font-mono text-[#E11D48] tracking-widest uppercase block mb-2 font-bold">
                  KATALOG INISIATIF & RANTAI PASOK
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-display uppercase text-white">
                  Inisiatif & Rantai Nilai Lokal
                </h2>
              </div>
              <p className="text-xs sm:text-sm font-mono text-[#8E95A5] max-w-md">
                Kemitraan hulu, pemberdayaan perajin atau petani, dan sistem produksi berkelanjutan yang berakar di tanah air.
              </p>
            </div>
            
            {/* Initiatives Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {initiatives.map((ini, i) => (
                <div 
                  key={i} 
                  className="bg-[#141926] border border-white/15 p-6 sm:p-8 flex flex-col justify-between group hover:border-[#E11D48] transition-all duration-300 tactile-btn"
                >
                  <div className="flex flex-col sm:flex-row gap-6 mb-6">
                    {/* Initiative Thumbnail */}
                    {ini.imageUrl && (
                      <div className="w-full sm:w-2/5 aspect-[4/3] sm:aspect-square relative bg-[#07090E] overflow-hidden border border-white/10 flex-shrink-0">
                        <img 
                          src={ini.imageUrl} 
                          alt={ini.title} 
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" 
                          loading="lazy"
                        />
                      </div>
                    )}
                    
                    {/* Initiative Content */}
                    <div className="flex-1 flex flex-col justify-start">
                      <span className="text-[10px] font-mono text-[#E11D48] tracking-widest uppercase block mb-1.5 font-bold">
                        {ini.category}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-display uppercase mb-2 text-white group-hover:text-[#E11D48] transition-colors leading-snug">
                        {ini.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#8E95A5] line-clamp-3 leading-relaxed">
                        {ini.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Pricing & CTA Action Footer */}
                  <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    
                    {/* Price / Impact Tag */}
                    <div className="flex flex-col">
                      <span className="text-[10px] font-mono text-[#8E95A5] uppercase tracking-wider flex items-center gap-1">
                        <Tag className="w-3 h-3 text-[#E11D48]" /> Standar & Dampak:
                      </span>
                      <span className="font-mono text-sm sm:text-base font-bold text-white mt-0.5">
                        {ini.price || 'Terverifikasi Mandiri'}
                      </span>
                    </div>
                    
                    {/* Action Button */}
                    <a 
                      href={ini.link_url || '#'} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="px-4 py-2.5 bg-[#E11D48] hover:bg-white hover:text-black text-white font-mono text-xs uppercase font-bold tracking-wider transition-all duration-200 flex items-center justify-center gap-1.5 shadow-md flex-shrink-0 tactile-btn"
                    >
                      <span>{ini.action_text || 'Pelajari Rantai Pasok'}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* ACT 6: BRAND TERKAIT / LACI KURASI SEJENIS */}
      {/* ========================================================================= */}
      {relatedBrands.length > 0 && (
        <section className="w-full bg-[#07090E] text-[#F5EFEB] py-20 sm:py-28 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 pb-6 border-b border-white/10">
              <div>
                <span className="text-xs font-mono text-[#E11D48] tracking-widest uppercase block mb-1 font-bold">
                  EKSPLORASI SEJENIS
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-display uppercase text-white">
                  Brand Terkait di Laci Ini
                </h2>
              </div>
              <Link 
                href={`/brand-lokal/${brand.lensSlug}`} 
                className="text-xs font-mono text-white/60 hover:text-white uppercase tracking-wider flex items-center gap-1"
              >
                <span>Lihat Semua di Laci {brand.lensName} &rarr;</span>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {relatedBrands.map((rel, i) => (
                <Link 
                  key={i} 
                  href={`/brand/${rel.slug}`}
                  className="bg-[#0E131F] border border-white/10 p-6 flex flex-col justify-between group hover:border-[#E11D48] transition-all duration-300 tactile-btn"
                >
                  <div className="space-y-4">
                    <div className="w-16 h-16 bg-black/60 border border-white/10 flex items-center justify-center p-2.5">
                      <img 
                        src={rel.logoUrl} 
                        alt={rel.name} 
                        className="max-h-full max-w-full object-contain filter drop-shadow"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-[#E11D48] uppercase tracking-widest block mb-1">
                        {rel.origin}
                      </span>
                      <h3 className="text-lg font-display uppercase text-white group-hover:text-[#E11D48] transition-colors">
                        {rel.name}
                      </h3>
                      <p className="text-xs text-[#8E95A5] line-clamp-2 mt-2 leading-relaxed font-sans">
                        {rel.coreFinding}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 mt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/70 group-hover:text-white">
                    <span>Buka Berkas</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#E11D48]" />
                  </div>
                </Link>
              ))}
            </div>

          </div>
        </section>
      )}

      {/* Footer */}
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}
