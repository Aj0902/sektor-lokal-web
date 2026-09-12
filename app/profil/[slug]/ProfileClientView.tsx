'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Youtube, Twitter, Instagram, Mail, Radio, 
  ArrowUpRight, BookOpen, Globe, Share2, 
  Video, Linkedin, Facebook, Feather, Check, Tag, ShieldCheck,
  Compass, MapPin, Award, Layers
} from 'lucide-react';

import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { FullProfileData, Article, SocialLinks } from '../../../lib/supabase/types';
import { createClient } from '../../../lib/supabase/client';
import { discoveryLenses } from '../../../lib/supabase/discoveryData';

interface ProfileClientViewProps {
  initialData: FullProfileData;
  slug: string;
}

export default function ProfileClientView({ initialData, slug }: ProfileClientViewProps) {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [profileData, setProfileData] = useState<FullProfileData>(initialData);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Client-side refresh if needed
    const fetchFromSupabase = async () => {
      try {
        const supabase = createClient();
        const { data: prof, error: pError } = await supabase
          .from('profiles_warga_demo1')
          .select('*')
          .eq('slug', slug)
          .single();

        if (prof && !pError) {
          const pId = prof.id;
          const [life, wrk, art, ini, gal] = await Promise.all([
            supabase.from('life_events_warga_demo1').select('*').eq('profile_id', pId).order('order_index'),
            supabase.from('works_warga_demo1').select('*').eq('profile_id', pId).order('order_index'),
            supabase.from('articles_warga_demo1').select('*').eq('profile_id', pId).order('order_index'),
            supabase.from('initiatives_warga_demo1').select('*').eq('profile_id', pId).order('order_index'),
            supabase.from('gallery_warga_demo1').select('*').eq('profile_id', pId).order('order_index'),
          ]);

          setProfileData({
            profile: prof,
            lifeEvents: (life.data && life.data.length > 0) ? life.data : initialData.lifeEvents,
            works: (wrk.data && wrk.data.length > 0) ? wrk.data : initialData.works,
            articles: (art.data && art.data.length > 0) ? art.data : initialData.articles,
            testimonials: [], // Explicitly empty as requested
            initiatives: (ini.data && ini.data.length > 0) ? ini.data : initialData.initiatives,
            gallery: (gal.data && gal.data.length > 0) ? gal.data : initialData.gallery
          });
        }
      } catch {
        // keep initialData
      }
    };

    fetchFromSupabase();
  }, [slug, initialData]);

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

  const { profile, lifeEvents = [], works = [], articles = [], initiatives = [] } = profileData;
  const soc = profile.social_links || {};

  const socialIconMap: { key: keyof SocialLinks; label: string; icon: React.ReactNode }[] = [
    { key: 'youtube', label: 'YouTube', icon: <Youtube className="w-4 h-4" /> },
    { key: 'twitter', label: 'X / Twitter', icon: <Twitter className="w-4 h-4" /> },
    { key: 'instagram', label: 'Instagram', icon: <Instagram className="w-4 h-4" /> },
    { key: 'spotify', label: 'Spotify', icon: <Radio className="w-4 h-4" /> },
    { key: 'tiktok', label: 'TikTok', icon: <Video className="w-4 h-4" /> },
    { key: 'linkedin', label: 'LinkedIn', icon: <Linkedin className="w-4 h-4" /> },
    { key: 'facebook', label: 'Facebook', icon: <Facebook className="w-4 h-4" /> },
    { key: 'email', label: 'Surel Redaksi', icon: <Mail className="w-4 h-4" /> },
    { key: 'website', label: 'Situs Resmi', icon: <Globe className="w-4 h-4" /> },
    { key: 'substack', label: 'Substack', icon: <Feather className="w-4 h-4" /> },
    { key: 'medium', label: 'Medium', icon: <BookOpen className="w-4 h-4" /> },
  ];

  const activeSocials = socialIconMap.filter(item => Boolean(soc[item.key]));

  // Find matching discovery lens (laci)
  const matchedLens = discoveryLenses.find(
    (lens) =>
      lens.figures.some((f) => f.slug === profile.slug || f.name.toLowerCase() === profile.name?.toLowerCase()) ||
      lens.name.toLowerCase() === profile.category?.toLowerCase() ||
      lens.slug === profile.category?.toLowerCase().replace(/\s+/g, '-')
  );

  const laciUrl = matchedLens ? `/warga-lokal/${matchedLens.slug}` : '/warga-lokal';
  const laciName = matchedLens ? matchedLens.name : (profile.category || 'Warga Lokal');

  return (
    <div className={`min-h-screen selection:bg-[#E11D48] selection:text-white font-sans ${isDarkMode ? 'magazine-dark text-[#F5EFEB] bg-[#07090E]' : 'magazine-light text-[#07090E] bg-white'}`}>
      
      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 right-0 h-1 bg-[#E11D48] z-50 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      <Navbar isDarkMode={isDarkMode} onToggleDarkMode={() => setIsDarkMode(!isDarkMode)} />

      {/* ========================================================================= */}
      {/* ACT 1: EDITORIAL DOSSIER HERO (ANTI-SLOP, RESPONSIVE, NO OVERLAP) */}
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
                href={laciUrl} 
                className="text-white/60 hover:text-[#E11D48] transition-colors flex items-center gap-1.5 uppercase tracking-wider group"
              >
                <span className="group-hover:-translate-x-0.5 transition-transform">&larr;</span>
                <span>Laci: {laciName}</span>
              </Link>
            </div>
            <div className="flex items-center gap-4 text-white/50 tracking-widest text-[11px]">
              <span className="uppercase tracking-widest text-white/40 font-mono">TELAAH EDITORIAL</span>
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
              {/* Role Subtitle */}
              <p className="font-mono text-xs sm:text-sm text-[#8E95A5] uppercase tracking-wider mb-3 flex items-center gap-2">
                <span className="w-2 h-0.5 bg-[#E11D48]" />
                <span>{profile.title}</span>
              </p>

              {/* Main Headline / Name */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display text-white uppercase leading-[1.08] tracking-tight mb-6 break-words">
                {profile.name}
              </h1>

              {/* Pull-Quote with descender safety */}
              {profile.quote && (
                <div className="border-l-2 border-[#E11D48] pl-4 sm:pl-5 py-1 mb-8 bg-white/[0.02]">
                  <span className="text-[10px] font-mono text-[#E11D48] uppercase tracking-widest block mb-1">
                    Kutipan Redaksi
                  </span>
                  <p className="font-editorial italic text-base sm:text-lg md:text-xl text-[#F8F5EE]/90 leading-snug descender-safe">
                    &ldquo;{profile.quote}&rdquo;
                  </p>
                </div>
              )}

              {/* Social Channels & Share Dossier Action */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                {/* Social Handle Chips */}
                {activeSocials.length > 0 && (
                  <div className="flex flex-wrap items-center gap-2">
                    {activeSocials.map((item) => {
                      const url = soc[item.key];
                      if (!url) return null;
                      const isMail = item.key === 'email';
                      return (
                        <a 
                          key={item.key} 
                          href={isMail ? `mailto:${url}` : url} 
                          target="_blank" 
                          rel="noreferrer" 
                          title={item.label} 
                          className="p-2.5 bg-white/5 hover:bg-[#E11D48] text-white/80 hover:text-white border border-white/10 hover:border-[#E11D48] rounded-full transition-all duration-200 tactile-btn"
                        >
                          {item.icon}
                        </a>
                      );
                    })}
                  </div>
                )}

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

            {/* Right Column: Swiss Archival Portrait Frame */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="lg:col-span-5 flex justify-center lg:justify-end mt-4 lg:mt-0"
            >
              <div className="relative w-full max-w-xs sm:max-w-sm aspect-[4/5] border border-white/20 bg-[#0E131F] p-2.5 shadow-2xl group">
                
                {/* Corner Telemetry Marks (+) */}
                <span className="absolute -top-1.5 -left-1.5 text-xs font-mono text-[#E11D48]">+</span>
                <span className="absolute -top-1.5 -right-1.5 text-xs font-mono text-[#E11D48]">+</span>
                <span className="absolute -bottom-1.5 -left-1.5 text-xs font-mono text-[#E11D48]">+</span>
                <span className="absolute -bottom-1.5 -right-1.5 text-xs font-mono text-[#E11D48]">+</span>

                {/* Portrait Container */}
                <div className="relative w-full h-full overflow-hidden bg-black">
                  <Image 
                    src={profile.photo_url} 
                    alt={profile.name} 
                    fill 
                    className="object-cover portrait-bw group-hover:scale-102 transition-transform duration-700"
                    priority
                  />
                  {/* Subtle Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                </div>
                
                {/* Portrait Label */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[10px] font-mono text-white/90 tracking-widest uppercase bg-black/80 backdrop-blur-md px-3 py-1.5 border border-white/10">
                  <span>POTRET FIGUR</span>
                  <span className="text-[#E11D48] font-bold">KURASI REDAKSI</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION: EDITORIAL BIOGRAPHY (IVORY PAPER) */}
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
                Dokumentasi terkurasi mengenai visi, perjuangan, dan kontribusi nyata bagi ekosistem lokal.
              </p>

              {/* Dossier Meta Sidebar Tile */}
              <div className="hidden lg:block pt-6 border-t border-black/10 space-y-3 font-mono text-xs">
                <div>
                  <span className="text-[#07090E]/50 block uppercase text-[10px]">Kategori Kurasi</span>
                  <span className="font-bold text-[#E11D48]">{profile.category}</span>
                </div>
                <div>
                  <span className="text-[#07090E]/50 block uppercase text-[10px]">Status Berkas</span>
                  <span className="font-bold text-[#07090E]">Telaah Redaksi</span>
                </div>
              </div>
            </div>
            
            {/* Right Column: Editorial Columns */}
            <div className="lg:col-span-9">
              <div className="columns-1 md:columns-2 gap-8 lg:gap-12 text-base sm:text-lg font-sans leading-relaxed text-left text-[#07090E]/90 space-y-6">
                {profile.bio_paragraphs.map((paragraph, idx) => (
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
      {/* SECTION: PERJALANAN & LINIMASA JEJAK (DARK OBSIDIAN) */}
      {/* ========================================================================= */}
      <section className="w-full bg-[#07090E] text-[#F5EFEB] py-20 sm:py-28 relative overflow-hidden border-b border-white/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Column: Big Philosophy Quote */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 border-b border-[#E11D48] pb-1">
                <span className="text-xs font-mono text-[#E11D48] font-bold tracking-widest uppercase">
                  FILOSOFI & ARAH PERJUANGAN
                </span>
              </div>
              
              <div className="relative pt-4">
                <span className="text-[#E11D48] text-6xl sm:text-7xl font-editorial leading-none block select-none opacity-60 mb-2">&ldquo;</span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-editorial italic text-white leading-snug descender-safe">
                  {profile.quote}
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
                {lifeEvents.length > 0 ? lifeEvents.map((ev, i) => (
                  <div key={i} className="relative group">
                    {/* Glowing Bullet */}
                    <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#07090E] border-2 border-[#E11D48] group-hover:bg-[#E11D48] transition-colors shadow-[0_0_12px_rgba(225,29,72,0.8)]" />
                    
                    <span className="inline-block px-2.5 py-0.5 bg-white/5 border border-white/10 text-[#E11D48] font-mono text-xs font-bold tracking-widest uppercase mb-2">
                      {ev.year_range}
                    </span>
                    
                    <h3 className="text-xl sm:text-2xl font-display uppercase text-white mb-2 leading-snug">
                      {ev.title}
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
      {/* SECTION: KARYA & DISKURSUS */}
      {/* ========================================================================= */}
      <section className="w-full bg-[#E11D48] text-white py-20 sm:py-28 border-b border-black/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          
          <div className="border-b border-white/30 pb-6 mb-12 flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4">
            <div>
              <span className="font-mono text-xs tracking-widest uppercase block text-white/80 font-bold mb-1">
                PORTOFOLIO & KONTRIBUSI
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display uppercase leading-none">
                Karya & Kontribusi
              </h2>
            </div>
            <span className="font-mono text-xs tracking-widest uppercase text-white/70">
              KARYA TERPILIH
            </span>
          </div>
          
          {works.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {works.map((w, i) => (
                <div 
                  key={i} 
                  className="bg-black/15 hover:bg-black/25 p-6 sm:p-8 border border-white/20 transition-all duration-300 flex flex-col justify-between group tactile-btn"
                >
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest block mb-4 text-white/80 border-b border-white/20 pb-2 font-semibold">
                      {w.category}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-display uppercase mb-3 leading-snug">
                      {w.title}
                    </h3>
                    <p className="text-sm text-white/80 leading-relaxed mb-6">
                      {w.description}
                    </p>
                  </div>
                  
                  {w.link_url && (
                    <div className="pt-4 border-t border-white/15">
                      <a 
                        href={w.link_url} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="inline-flex items-center gap-1.5 text-xs font-bold font-mono uppercase border-b border-white pb-0.5 hover:text-black hover:border-black transition-colors"
                      >
                        <span>Akses Dokumen</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-white/70 font-mono text-sm tracking-widest">
              TIDAK ADA DATA KARYA
            </div>
          )}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION: INISIATIF & PRODUK WARGA */}
      {/* ========================================================================= */}
      {initiatives.length > 0 && (
        <section id="produk" className="w-full bg-[#0E131F] text-[#F5EFEB] py-20 sm:py-28 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            
            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-white/10">
              <div>
                <span className="text-xs font-mono text-[#E11D48] tracking-widest uppercase block mb-2 font-bold">
                  KATALOG PRODUK & INISIATIF
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-display uppercase text-white">
                  Inisiatif & Produk Warga
                </h2>
              </div>
              <p className="text-xs sm:text-sm font-mono text-[#8E95A5] max-w-md">
                Karya mandiri, platform terapan, dan produk bernilai tambah yang dapat diakses, dibeli, atau didukung secara langsung.
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
                    {ini.image_url && (
                      <div className="w-full sm:w-2/5 aspect-[4/3] sm:aspect-square relative bg-[#07090E] overflow-hidden border border-white/10 flex-shrink-0">
                        <Image 
                          src={ini.image_url} 
                          alt={ini.title} 
                          fill 
                          className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" 
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
                    
                    {/* Price Estimate Tag */}
                    <div className="flex flex-col">
                      <span className="text-[10px] font-mono text-[#8E95A5] uppercase tracking-wider flex items-center gap-1">
                        <Tag className="w-3 h-3 text-[#E11D48]" /> Estimasi Harga / Akses:
                      </span>
                      <span className="font-mono text-sm sm:text-base font-bold text-white mt-0.5">
                        {ini.price || '100% Akses Terbuka'}
                      </span>
                    </div>
                    
                    {/* Action Button */}
                    <a 
                      href={ini.link_url || '#'} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="px-4 py-2.5 bg-[#E11D48] hover:bg-white hover:text-black text-white font-mono text-xs uppercase font-bold tracking-wider transition-all duration-200 flex items-center justify-center gap-1.5 shadow-md flex-shrink-0 tactile-btn"
                    >
                      <span>{ini.action_text || 'Dukung Inisiatif'}</span>
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
      {/* SECTION: JURNAL & ARTIKEL TERKAIT */}
      {/* ========================================================================= */}
      {articles.length > 0 && (
        <section className="w-full bg-[#07090E] text-[#F5EFEB] py-20 sm:py-28 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 pb-6 border-b border-white/10">
              <div>
                <span className="text-xs font-mono text-[#E11D48] tracking-widest uppercase block mb-1 font-bold">
                  RUANG REDAKSI
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-display uppercase text-white">
                  Jurnal & Wawasan
                </h2>
              </div>
              <Link 
                href="/artikel" 
                className="text-xs font-mono text-white/60 hover:text-white uppercase tracking-wider flex items-center gap-1"
              >
                <span>Semua Esai Redaksi &rarr;</span>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {articles.map((art, i) => (
                <div key={i} className="border-t border-white/15 pt-6 group">
                  <div className="flex items-center gap-3 font-mono text-[10px] text-[#E11D48] tracking-widest uppercase mb-3">
                    <span className="font-bold">{art.tag}</span>
                    <span className="text-white/30">•</span>
                    <span className="text-white/50">{art.read_time}</span>
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-display uppercase mb-3 text-white group-hover:text-[#E11D48] transition-colors leading-snug">
                    {art.title}
                  </h3>
                  
                  <p className="text-sm text-[#8E95A5] mb-6 line-clamp-3 leading-relaxed">
                    {art.description}
                  </p>
                  
                  <Link 
                    href={art.link_url && art.link_url !== '#' ? art.link_url : `/artikel/${art.title.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-')}`}
                    className="inline-flex items-center gap-1.5 font-mono text-xs uppercase font-bold text-white border-b border-[#E11D48] pb-0.5 hover:text-[#E11D48] transition-colors"
                  >
                    <span>Baca Esai Lengkap</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
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
