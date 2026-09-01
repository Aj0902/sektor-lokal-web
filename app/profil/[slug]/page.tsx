'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { 
  Menu, 
  X, 
  Sun, 
  Moon, 
  Youtube, 
  Twitter, 
  Instagram, 
  Mail, 
  Radio, 
  ArrowUpRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ArrowDown,
  ArrowLeft,
  Share2,
  BookOpen,
  CheckCircle2,
  Sparkles,
  Tag,
  Clock,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ConstellationCanvas from '../../../components/ConstellationCanvas';
import ParallaxGallery from '../../../components/ParallaxGallery';
import { fallbackProfiles } from '../../../lib/supabase/fallbackData';
import { FullProfileData, Article, Initiative } from '../../../lib/supabase/types';
import { createClient } from '../../../lib/supabase/client';

export default function DynamicProfilePage() {
  const params = useParams();
  const slug = (params?.slug as string) || 'ferry-irwandi';

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copiedToast, setCopiedToast] = useState(false);

  // Article Modal State
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  // Product Carousel State
  const [productIndex, setProductIndex] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState<Record<string, string>>({});

  // Testimonial Carousel State
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const [profileData, setProfileData] = useState<FullProfileData>(
    fallbackProfiles[slug] || fallbackProfiles['ferry-irwandi']
  );

  useEffect(() => {
    // Attempt Supabase Fetch
    const fetchFromSupabase = async () => {
      try {
        const supabase = createClient();
        const { data: prof, error: pError } = await supabase
          .from('profiles')
          .select('*')
          .eq('slug', slug)
          .single();

        if (prof && !pError) {
          const pId = prof.id;
          const [life, wrk, art, tst, ini] = await Promise.all([
            supabase.from('life_events').select('*').eq('profile_id', pId).order('order_index'),
            supabase.from('works').select('*').eq('profile_id', pId).order('order_index'),
            supabase.from('articles').select('*').eq('profile_id', pId).order('order_index'),
            supabase.from('testimonials').select('*').eq('profile_id', pId).order('order_index'),
            supabase.from('initiatives').select('*').eq('profile_id', pId).order('order_index'),
          ]);

          setProfileData({
            profile: prof,
            lifeEvents: life.data || [],
            works: wrk.data || [],
            articles: art.data || [],
            testimonials: tst.data || [],
            initiatives: ini.data || []
          });
        }
      } catch {
        // Use local fallback
      }
    };

    fetchFromSupabase();
  }, [slug]);

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

  const handleShare = () => {
    if (typeof navigator !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopiedToast(true);
      setTimeout(() => setCopiedToast(false), 2500);
    }
  };

  const { profile, lifeEvents, works, articles, testimonials, initiatives } = profileData;

  const bgCanvas = isDarkMode ? 'bg-[#0A0E17] text-[#F1F5F9]' : 'bg-[#FAF9F6] text-[#0F172A]';
  const cardClass = isDarkMode ? 'editorial-card-dark' : 'editorial-card-light';
  const mutedText = isDarkMode ? 'text-neutral-400' : 'text-neutral-600';
  const dividerClass = isDarkMode ? 'border-white/[0.08]' : 'border-black/[0.08]';
  const navBg = isDarkMode ? 'bg-[#0A0E17]/85 border-white/[0.08]' : 'bg-[#FAF9F6]/85 border-black/[0.06]';
  const quoteBgClass = isDarkMode ? 'bg-[#0E1424]/80 border-white/[0.08]' : 'bg-[#F4F2EE] border-stone-200/80';

  // Product Carousel Handlers
  const nextProduct = () => {
    if (initiatives.length > 0) {
      setProductIndex((prev) => (prev + 1) % initiatives.length);
    }
  };

  const prevProduct = () => {
    if (initiatives.length > 0) {
      setProductIndex((prev) => (prev - 1 + initiatives.length) % initiatives.length);
    }
  };

  // Testimonial Carousel Handlers
  const nextTestimonial = () => {
    if (testimonials.length > 0) {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }
  };

  const prevTestimonial = () => {
    if (testimonials.length > 0) {
      setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }
  };

  return (
    <div className={`min-h-screen ${bgCanvas} font-sans antialiased selection:bg-[#E11D48] selection:text-white relative overflow-x-hidden`}>
      
      {/* ECIDNI FLOATING RED CONSTELLATION WAVE */}
      <ConstellationCanvas isDarkMode={isDarkMode} />

      {/* Top Hairline Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 right-0 h-[2px] bg-[#E11D48] z-50 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* HEADER NAVIGATION */}
      <header className={`sticky top-0 z-40 backdrop-blur-md border-b px-6 py-4 transition-colors ${navBg}`}>
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          
          {/* Back to Directory Link */}
          <Link href="/" className="flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-[#E11D48] hover:underline">
            <ArrowLeft className="w-4 h-4" />
            <span>DIREKTORI PROFIL</span>
          </Link>

          {/* Quick Anchor Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 text-xs font-semibold tracking-wide uppercase">
            <a href="#tentang" className="hover:text-[#E11D48] transition-colors">Tentang</a>
            <a href="#perjalanan" className="hover:text-[#E11D48] transition-colors">Perjalanan</a>
            <a href="#karya" className="hover:text-[#E11D48] transition-colors">Karya</a>
            <a href="#artikel" className="hover:text-[#E11D48] transition-colors">Artikel</a>
            <a href="#produk" className="hover:text-[#E11D48] transition-colors">Inisiatif</a>
            <a href="#kata-warga" className="hover:text-[#E11D48] transition-colors">Kata Warga</a>
          </nav>

          {/* Actions: Share, Theme Switcher & Menu */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleShare}
              className={`px-3 py-1.5 rounded-lg border text-xs font-medium transition-all flex items-center gap-1.5 ${
                isDarkMode 
                  ? 'border-white/10 hover:border-white/20 bg-white/[0.02] text-neutral-300' 
                  : 'border-black/10 hover:border-black/20 bg-black/[0.02] text-neutral-700'
              }`}
              title="Salin Tautan Halaman"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{copiedToast ? 'Tersalin' : 'Bagikan'}</span>
            </button>

            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 rounded-xl border text-xs font-semibold flex items-center gap-2 transition-all shadow-sm ${
                isDarkMode 
                  ? 'bg-[#111726] border-white/10 text-[#EDE8DC] hover:border-[#E11D48]' 
                  : 'bg-white border-black/10 text-[#0A0E1A] hover:border-[#E11D48]'
              }`}
              title="Ganti Mode Tampilan"
            >
              {isDarkMode ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-indigo-600" />}
              <span className="hidden sm:inline text-[11px] font-mono tracking-wider font-bold">
                {isDarkMode ? 'LIGHT' : 'DARK'}
              </span>
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 rounded-xl border transition ${
                isDarkMode ? 'border-white/10 text-[#EDE8DC] hover:border-[#E11D48]' : 'border-black/10 text-[#0A0E1A] hover:border-[#E11D48]'
              }`}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </header>

      {/* MOBILE DROPDOWN MENU */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`fixed inset-0 top-[65px] z-30 p-8 flex flex-col space-y-6 text-xl font-display uppercase tracking-wider backdrop-blur-2xl border-b md:hidden ${
              isDarkMode ? 'bg-[#0A0E17]/98 border-white/10' : 'bg-[#FAF9F6]/98 border-black/10'
            }`}
          >
            <a href="#tentang" onClick={() => setIsMenuOpen(false)} className="hover:text-[#E11D48] transition-colors flex items-center justify-between">
              <span>01 // Tentang</span>
              <ArrowUpRight className="w-4 h-4 text-[#E11D48]" />
            </a>
            <a href="#perjalanan" onClick={() => setIsMenuOpen(false)} className="hover:text-[#E11D48] transition-colors flex items-center justify-between">
              <span>02 // Perjalanan Hidup</span>
              <ArrowUpRight className="w-4 h-4 text-[#E11D48]" />
            </a>
            <a href="#karya" onClick={() => setIsMenuOpen(false)} className="hover:text-[#E11D48] transition-colors flex items-center justify-between">
              <span>03 // Discovery Karya</span>
              <ArrowUpRight className="w-4 h-4 text-[#E11D48]" />
            </a>
            <a href="#artikel" onClick={() => setIsMenuOpen(false)} className="hover:text-[#E11D48] transition-colors flex items-center justify-between">
              <span>04 // Artikel & Wawasan</span>
              <ArrowUpRight className="w-4 h-4 text-[#E11D48]" />
            </a>
            <a href="#produk" onClick={() => setIsMenuOpen(false)} className="hover:text-[#E11D48] transition-colors flex items-center justify-between">
              <span>05 // Produk & Inisiatif</span>
              <ArrowUpRight className="w-4 h-4 text-[#E11D48]" />
            </a>
            <a href="#kata-warga" onClick={() => setIsMenuOpen(false)} className="hover:text-[#E11D48] transition-colors flex items-center justify-between">
              <span>06 // Kata Warga</span>
              <ArrowUpRight className="w-4 h-4 text-[#E11D48]" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="max-w-4xl mx-auto px-6 relative z-10 space-y-20 md:space-y-28 pt-8 pb-24">

        {/* HERO SECTION (CENTERED, BALANCED & PROPORTIONAL) */}
        <section id="hero" className="min-h-[85vh] flex flex-col justify-center items-center text-center space-y-8 pt-4 md:pt-8">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center space-y-6 max-w-2xl mx-auto"
          >
            {/* Portrait Frame */}
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full p-1.5 border border-[#E11D48]/30 bg-gradient-to-b from-[#E11D48]/20 to-transparent shadow-2xl relative overflow-hidden group">
              <Image 
                src={profile.photo_url} 
                alt={profile.name} 
                fill
                sizes="(max-width: 768px) 144px, 176px"
                priority
                className="object-cover rounded-full filter grayscale contrast-120 group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-black/80 backdrop-blur-md text-[9px] font-mono uppercase tracking-widest text-white border border-white/10 flex items-center gap-1 shadow-md whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E11D48] animate-pulse" />
                <span>{profile.category}</span>
              </div>
            </div>

            {/* Typography Stack */}
            <div className="space-y-3">
              <div className="flex items-center justify-center gap-3">
                <div className="red-accent-bar-luxe h-8 sm:h-12 shrink-0" />
                <h1 className="text-5xl sm:text-7xl md:text-8xl font-display uppercase tracking-tight leading-[0.92] text-inherit">
                  {profile.name}
                </h1>
                <div className="red-accent-bar-luxe h-8 sm:h-12 shrink-0" />
              </div>
              
              <p className="font-editorial italic font-semibold text-lg sm:text-2xl text-[#E11D48] tracking-wide pt-1">
                {profile.title}
              </p>
              
              <p className={`text-sm sm:text-base max-w-lg mx-auto leading-relaxed pt-1 ${mutedText}`}>
                {profile.bio_paragraphs[0]}
              </p>
            </div>

            {/* Social Links Bar */}
            <div className="flex items-center justify-center gap-2.5 pt-1">
              {profile.social_links.youtube && (
                <a href={profile.social_links.youtube} target="_blank" rel="noreferrer" className={`w-10 h-10 rounded-xl border flex items-center justify-center transition-all ${isDarkMode ? 'border-white/10 hover:border-[#E11D48] text-neutral-400 hover:text-white' : 'border-black/10 hover:border-[#E11D48] text-neutral-600 hover:text-[#E11D48]'}`}>
                  <Youtube className="w-4 h-4" />
                </a>
              )}
              {profile.social_links.twitter && (
                <a href={profile.social_links.twitter} target="_blank" rel="noreferrer" className={`w-10 h-10 rounded-xl border flex items-center justify-center transition-all ${isDarkMode ? 'border-white/10 hover:border-[#E11D48] text-neutral-400 hover:text-white' : 'border-black/10 hover:border-[#E11D48] text-neutral-600 hover:text-[#E11D48]'}`}>
                  <Twitter className="w-4 h-4" />
                </a>
              )}
              {profile.social_links.instagram && (
                <a href={profile.social_links.instagram} target="_blank" rel="noreferrer" className={`w-10 h-10 rounded-xl border flex items-center justify-center transition-all ${isDarkMode ? 'border-white/10 hover:border-[#E11D48] text-neutral-400 hover:text-white' : 'border-black/10 hover:border-[#E11D48] text-neutral-600 hover:text-[#E11D48]'}`}>
                  <Instagram className="w-4 h-4" />
                </a>
              )}
              {profile.social_links.spotify && (
                <a href={profile.social_links.spotify} target="_blank" rel="noreferrer" className={`w-10 h-10 rounded-xl border flex items-center justify-center transition-all ${isDarkMode ? 'border-white/10 hover:border-[#E11D48] text-neutral-400 hover:text-white' : 'border-black/10 hover:border-[#E11D48] text-neutral-600 hover:text-[#E11D48]'}`}>
                  <Radio className="w-4 h-4" />
                </a>
              )}
              {profile.social_links.email && (
                <a href={profile.social_links.email} className={`w-10 h-10 rounded-xl border flex items-center justify-center transition-all ${isDarkMode ? 'border-white/10 hover:border-[#E11D48] text-neutral-400 hover:text-white' : 'border-black/10 hover:border-[#E11D48] text-neutral-600 hover:text-[#E11D48]'}`}>
                  <Mail className="w-4 h-4" />
                </a>
              )}
            </div>

            {/* Scroll Cue */}
            <div className="pt-4 flex flex-col items-center gap-1.5 opacity-60 animate-bounce">
              <span className="text-[10px] font-mono uppercase tracking-widest">JELAJAHI REKAM JEJAK</span>
              <ArrowDown className="w-3.5 h-3.5 text-[#E11D48]" />
            </div>

          </motion.div>

        </section>

        {/* --------------------------------------------------------- */}
        {/* 01 // TENTANG                                             */}
        {/* --------------------------------------------------------- */}
        <motion.section 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          id="tentang" 
          className="space-y-8 scroll-mt-24"
        >
          <div className={`flex items-center justify-between border-b pb-4 ${dividerClass}`}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display uppercase tracking-tight text-inherit">
              Tentang {profile.name}
            </h2>
            <span className="font-mono text-xs tracking-widest text-[#E11D48]">
              01 // BIOGRAFI
            </span>
          </div>

          <div className="space-y-5 text-base sm:text-lg leading-relaxed text-inherit/90 font-normal text-justify">
            {profile.bio_paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {/* Pull Quote Box with Red Luxe Bar */}
          <div className={`p-6 sm:p-8 rounded-2xl border flex items-stretch justify-between gap-6 relative ${quoteBgClass}`}>
            <div className="space-y-3">
              <blockquote className="font-editorial italic text-lg sm:text-xl leading-relaxed text-inherit">
                &ldquo;{profile.quote}&rdquo;
              </blockquote>
              <p className="text-xs font-mono tracking-wider text-[#E11D48] uppercase">
                — Catatan Prinsipil {profile.name}
              </p>
            </div>
            <div className="red-accent-bar-luxe shrink-0" />
          </div>
        </motion.section>

        {/* --------------------------------------------------------- */}
        {/* 02 // PERJALANAN HIDUP                                    */}
        {/* --------------------------------------------------------- */}
        {lifeEvents.length > 0 && (
          <motion.section 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            id="perjalanan" 
            className="space-y-10 scroll-mt-24"
          >
            <div className={`flex items-center justify-between border-b pb-4 ${dividerClass}`}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display uppercase tracking-tight text-inherit">
                Perjalanan Hidup
              </h2>
              <span className="font-mono text-xs tracking-widest text-[#E11D48]">
                02 // REKAM JEJAK
              </span>
            </div>

            <div className="relative pl-7 sm:pl-9 space-y-9">
              <div className="absolute left-0 top-2 bottom-2 w-[2px] timeline-track-minimal" />
              {lifeEvents.map((ev, idx) => (
                <div key={idx} className="relative space-y-2 group">
                  <div className={`absolute -left-[32px] sm:-left-[40px] top-1.5 w-3 h-3 rounded-full border-2 border-[#E11D48] transition-all ${
                    isDarkMode ? 'bg-[#0A0E17] group-hover:bg-[#E11D48]' : 'bg-[#FAF9F6] group-hover:bg-[#E11D48]'
                  }`} />
                  
                  <div className="flex items-center gap-2 text-xs font-mono">
                    <span className="text-[#E11D48] font-semibold">{ev.year_range}</span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-display uppercase tracking-wide text-inherit group-hover:text-[#E11D48] transition-colors">
                    {ev.title}
                  </h3>
                  
                  <p className={`text-xs sm:text-sm leading-relaxed ${mutedText}`}>
                    {ev.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {/* --------------------------------------------------------- */}
        {/* 03 // DISCOVERY KARYA                                     */}
        {/* --------------------------------------------------------- */}
        {works.length > 0 && (
          <motion.section 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            id="karya" 
            className="space-y-8 scroll-mt-24"
          >
            <div className={`flex items-center justify-between border-b pb-4 ${dividerClass}`}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display uppercase tracking-tight text-inherit">
                Discovery Karya
              </h2>
              <span className="font-mono text-xs tracking-widest text-[#E11D48]">
                03 // INISIATIF
              </span>
            </div>

            <div className="space-y-4">
              {works.map((w, idx) => {
                const isOpen = activeAccordion === idx;
                return (
                  <div 
                    key={idx}
                    onClick={() => setActiveAccordion(isOpen ? null : idx)}
                    className={`cursor-pointer rounded-2xl p-6 sm:p-7 transition-all ${cardClass} ${
                      isOpen ? 'border-[#E11D48]/40' : ''
                    }`}
                  >
                    <div className="flex items-start sm:items-center justify-between gap-4">
                      <div className="space-y-1">
                        <span className="text-[10px] font-mono text-[#E11D48] font-semibold uppercase tracking-wider block">
                          {w.category}
                        </span>
                        <h3 className="text-base sm:text-xl font-display uppercase tracking-wide text-inherit">
                          {w.title}
                        </h3>
                      </div>
                      <span className={`w-8 h-8 rounded-full border flex items-center justify-center font-mono text-sm shrink-0 transition-transform ${
                        isOpen 
                          ? 'border-[#E11D48] bg-[#E11D48] text-white rotate-180' 
                          : (isDarkMode ? 'border-white/10 text-neutral-400' : 'border-black/10 text-neutral-600')
                      }`}>
                        {isOpen ? '−' : '+'}
                      </span>
                    </div>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div 
                          initial={{ opacity: 0, height: 0 }} 
                          animate={{ opacity: 1, height: 'auto' }} 
                          exit={{ opacity: 0, height: 0 }} 
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }} 
                          className="overflow-hidden"
                        >
                          <div className={`mt-4 pt-4 border-t ${dividerClass} space-y-4`}>
                            <p className={`text-xs sm:text-sm leading-relaxed ${mutedText}`}>{w.description}</p>
                            <div className="flex justify-end">
                              <a 
                                href={w.link_url} 
                                target="_blank" 
                                rel="noreferrer" 
                                onClick={(e) => e.stopPropagation()}
                                className="px-4 py-2 bg-[#E11D48] hover:bg-[#BE123C] text-white font-medium text-xs rounded-lg transition-colors flex items-center gap-1.5 shadow-sm"
                              >
                                <span>Buka Rujukan Karya</span>
                                <ArrowUpRight className="w-3.5 h-3.5" />
                              </a>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* 1. SEKSI GALERI PARALLAX ACETERNITY DI BAWAH KARYA */}
            <div className="pt-8">
              <ParallaxGallery isDarkMode={isDarkMode} />
            </div>

          </motion.section>
        )}

        {/* --------------------------------------------------------- */}
        {/* 04 // ARTIKEL & WAWASAN (DENGAN MODAL READER IMERSIF)     */}
        {/* --------------------------------------------------------- */}
        {articles.length > 0 && (
          <motion.section 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            id="artikel" 
            className="space-y-8 scroll-mt-24"
          >
            <div className={`flex items-center justify-between border-b pb-4 ${dividerClass}`}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display uppercase tracking-tight text-inherit">
                Artikel & Wawasan
              </h2>
              <span className="font-mono text-xs tracking-widest text-[#E11D48]">
                04 // ESAI & RISET
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {articles.map((art, idx) => (
                <div 
                  key={idx} 
                  className={`p-6 sm:p-8 rounded-3xl border space-y-4 flex flex-col justify-between ${cardClass} group hover:-translate-y-1 transition-transform`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono text-[#E11D48]">
                      <span className="px-2 py-0.5 rounded bg-[#E11D48]/10 font-semibold">{art.tag}</span>
                      <span className="flex items-center gap-1 opacity-80">
                        <Clock className="w-3 h-3" />
                        {art.read_time}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-display uppercase text-inherit leading-snug group-hover:text-[#E11D48] transition-colors">
                      {art.title}
                    </h3>

                    <p className={`text-xs sm:text-sm leading-relaxed ${mutedText}`}>
                      {art.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-inherit/10 flex items-center justify-between">
                    <button 
                      onClick={() => setSelectedArticle(art)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E11D48] hover:underline"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Baca Analisis Lengkap</span>
                    </button>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#E11D48] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {/* --------------------------------------------------------- */}
        {/* 05 // PRODUK & INISIATIF WARGA (SLIDER + VARIASI HARGA)   */}
        {/* --------------------------------------------------------- */}
        {initiatives.length > 0 && (
          <motion.section 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            id="produk" 
            className="space-y-8 scroll-mt-24"
          >
            <div className={`flex items-center justify-between border-b pb-4 ${dividerClass}`}>
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-display uppercase tracking-tight text-inherit">
                  Produk & Inisiatif Warga
                </h2>
                <p className={`text-xs sm:text-sm pt-1 ${mutedText}`}>
                  Dukungan langsung terhadap kemandirian riset independen dan gerakan beasiswa.
                </p>
              </div>
              <span className="font-mono text-xs tracking-widest text-[#E11D48] hidden sm:inline">
                05 // EKOSISTEM
              </span>
            </div>

            {/* Slider Navigation Header */}
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-semibold uppercase text-[#E11D48]">
                Item {productIndex + 1} dari {initiatives.length}
              </span>
              <div className="flex items-center gap-2">
                <button 
                  onClick={prevProduct}
                  className={`w-9 h-9 rounded-xl border flex items-center justify-center transition-all ${
                    isDarkMode ? 'border-white/10 hover:border-[#E11D48] hover:bg-[#E11D48]/10' : 'border-black/10 hover:border-[#E11D48] hover:bg-[#E11D48]/10'
                  }`}
                  aria-label="Previous Product"
                >
                  <ChevronLeft className="w-4 h-4 text-inherit" />
                </button>
                <button 
                  onClick={nextProduct}
                  className={`w-9 h-9 rounded-xl border flex items-center justify-center transition-all ${
                    isDarkMode ? 'border-white/10 hover:border-[#E11D48] hover:bg-[#E11D48]/10' : 'border-black/10 hover:border-[#E11D48] hover:bg-[#E11D48]/10'
                  }`}
                  aria-label="Next Product"
                >
                  <ChevronRight className="w-4 h-4 text-inherit" />
                </button>
              </div>
            </div>

            {/* Interactive Single Slide Showcase Card */}
            <AnimatePresence mode="wait">
              {(() => {
                const currentProd = initiatives[productIndex];
                if (!currentProd) return null;
                const variants = currentProd.price_variants || [];
                const activeVar = selectedVariant[currentProd.id] || (variants[0] || currentProd.price || 'Standar');

                return (
                  <motion.div 
                    key={productIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className={`p-8 sm:p-10 rounded-3xl border space-y-6 ${cardClass} relative overflow-hidden`}
                  >
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-xs font-mono font-bold text-[#E11D48] uppercase tracking-wider">
                          {currentProd.category}
                        </span>
                        <span className="px-3 py-1 rounded-full bg-[#E11D48]/10 text-[#E11D48] text-xs font-mono font-bold">
                          {currentProd.price || 'Tersedia'}
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-display uppercase tracking-tight text-inherit">
                        {currentProd.title}
                      </h3>

                      <p className={`text-sm sm:text-base leading-relaxed ${mutedText}`}>
                        {currentProd.description}
                      </p>
                    </div>

                    {/* Variasi Harga / Pilihan Tiering */}
                    {variants.length > 0 && (
                      <div className="space-y-2 pt-2 border-t border-inherit/10">
                        <span className={`text-[11px] font-mono uppercase font-bold tracking-wider block ${mutedText}`}>
                          PILIHAN VARIASI & TIERING DUKUNGAN:
                        </span>
                        <div className="flex flex-wrap gap-2.5">
                          {variants.map((v, i) => (
                            <button
                              key={i}
                              onClick={() => setSelectedVariant({ ...selectedVariant, [currentProd.id]: v })}
                              className={`px-3.5 py-2 rounded-xl text-xs font-medium border transition-all ${
                                activeVar === v
                                  ? 'border-[#E11D48] bg-[#E11D48] text-white shadow-sm shadow-[#E11D48]/30 font-semibold'
                                  : (isDarkMode ? 'border-white/10 hover:border-white/30 bg-white/[0.02]' : 'border-black/10 hover:border-black/30 bg-black/[0.02]')
                              }`}
                            >
                              {v}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* CTA Action */}
                    <div className="pt-3 flex items-center justify-between">
                      <div className="text-xs font-mono text-[#E11D48]">
                        <span>Pilihan aktif: <strong>{activeVar}</strong></span>
                      </div>

                      <a 
                        href={currentProd.link_url} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="px-6 py-3 bg-[#E11D48] hover:bg-[#BE123C] text-white font-bold text-xs rounded-xl transition-all flex items-center gap-2 shadow-md shadow-[#E11D48]/30 hover:scale-105"
                      >
                        <span>{currentProd.action_text}</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>
                  </motion.div>
                );
              })()}
            </AnimatePresence>

            {/* Grid Thumbnail Cards for quick browsing */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              {initiatives.map((prod, idx) => (
                <div 
                  key={idx}
                  onClick={() => setProductIndex(idx)}
                  className={`p-5 rounded-2xl border cursor-pointer transition-all ${
                    productIndex === idx 
                      ? 'border-[#E11D48] shadow-md shadow-[#E11D48]/20 bg-[#E11D48]/5' 
                      : (isDarkMode ? 'border-white/5 hover:border-white/20 bg-white/[0.01]' : 'border-black/5 hover:border-black/20 bg-black/[0.01]')
                  }`}
                >
                  <div className="flex items-center justify-between text-[10px] font-mono text-[#E11D48] mb-1">
                    <span>{prod.category}</span>
                    <span className="font-bold">{prod.price}</span>
                  </div>
                  <h4 className="font-display uppercase text-sm truncate text-inherit">{prod.title}</h4>
                </div>
              ))}
            </div>

          </motion.section>
        )}

        {/* --------------------------------------------------------- */}
        {/* 06 // KATA WARGA & TESTIMONI (SLIDER CAROUSEL)            */}
        {/* --------------------------------------------------------- */}
        {testimonials.length > 0 && (
          <motion.section 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            id="kata-warga" 
            className="space-y-8 scroll-mt-24"
          >
            <div className={`flex items-center justify-between border-b pb-4 ${dividerClass}`}>
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-display uppercase tracking-tight text-inherit">
                  Kata Warga & Testimoni
                </h2>
                <p className={`text-xs sm:text-sm pt-1 ${mutedText}`}>
                  Pengakuan otentik dari tokoh, musisi, dan warga penerima manfaat.
                </p>
              </div>
              <span className="font-mono text-xs tracking-widest text-[#E11D48] hidden sm:inline">
                06 // SUARA PUBLIK
              </span>
            </div>

            {/* Testimonials Slider Header */}
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-semibold uppercase text-[#E11D48]">
                Testimoni {testimonialIndex + 1} dari {testimonials.length}
              </span>
              <div className="flex items-center gap-2">
                <button 
                  onClick={prevTestimonial}
                  className={`w-9 h-9 rounded-xl border flex items-center justify-center transition-all ${
                    isDarkMode ? 'border-white/10 hover:border-[#E11D48] hover:bg-[#E11D48]/10' : 'border-black/10 hover:border-[#E11D48] hover:bg-[#E11D48]/10'
                  }`}
                  aria-label="Previous Testimonial"
                >
                  <ChevronLeft className="w-4 h-4 text-inherit" />
                </button>
                <button 
                  onClick={nextTestimonial}
                  className={`w-9 h-9 rounded-xl border flex items-center justify-center transition-all ${
                    isDarkMode ? 'border-white/10 hover:border-[#E11D48] hover:bg-[#E11D48]/10' : 'border-black/10 hover:border-[#E11D48] hover:bg-[#E11D48]/10'
                  }`}
                  aria-label="Next Testimonial"
                >
                  <ChevronRight className="w-4 h-4 text-inherit" />
                </button>
              </div>
            </div>

            {/* Active Testimonial Spotlight Slide */}
            <AnimatePresence mode="wait">
              {(() => {
                const currentTest = testimonials[testimonialIndex];
                if (!currentTest) return null;

                return (
                  <motion.div 
                    key={testimonialIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className={`p-8 sm:p-12 rounded-3xl border space-y-6 ${cardClass} relative overflow-hidden`}
                  >
                    <blockquote className="font-editorial italic text-lg sm:text-2xl leading-relaxed text-inherit">
                      &ldquo;{currentTest.quote}&rdquo;
                    </blockquote>

                    <div className={`pt-4 border-t ${dividerClass} flex items-center gap-3`}>
                      <div className="w-11 h-11 rounded-full bg-[#E11D48]/10 text-[#E11D48] border border-[#E11D48]/20 font-display text-sm flex items-center justify-center shrink-0">
                        {currentTest.author_name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <p className="font-display uppercase text-lg text-inherit">{currentTest.author_name}</p>
                          <CheckCircle2 className="w-4 h-4 text-[#E11D48] shrink-0" />
                        </div>
                        <p className={`text-xs ${mutedText}`}>{currentTest.author_role}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })()}
            </AnimatePresence>

            {/* Testimonials Thumbnail Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              {testimonials.map((item, idx) => (
                <div 
                  key={idx}
                  onClick={() => setTestimonialIndex(idx)}
                  className={`p-5 rounded-2xl border cursor-pointer transition-all ${
                    testimonialIndex === idx 
                      ? 'border-[#E11D48] shadow-md shadow-[#E11D48]/20 bg-[#E11D48]/5' 
                      : (isDarkMode ? 'border-white/5 hover:border-white/20 bg-white/[0.01]' : 'border-black/5 hover:border-black/20 bg-black/[0.01]')
                  }`}
                >
                  <blockquote className="font-editorial italic text-xs leading-relaxed text-inherit line-clamp-2">
                    &ldquo;{item.quote}&rdquo;
                  </blockquote>
                  <div className="pt-2 border-t border-inherit/10 mt-2 flex items-center justify-between">
                    <p className="font-display uppercase text-xs text-inherit">{item.author_name}</p>
                    <span className="text-[10px] font-mono text-[#E11D48]">0{idx + 1}</span>
                  </div>
                </div>
              ))}
            </div>

          </motion.section>
        )}

      </main>

      {/* 2. ARTIKEL READER MODAL / DRAWER (IMERSIF & KEREN) */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 backdrop-blur-xl bg-black/60">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className={`max-w-2xl w-full max-h-[85vh] overflow-y-auto rounded-3xl border p-6 sm:p-10 shadow-2xl space-y-6 relative ${
                isDarkMode ? 'bg-[#0E1424] border-white/10 text-white' : 'bg-[#FAF9F6] border-black/10 text-neutral-900'
              }`}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedArticle(null)}
                className={`absolute top-6 right-6 p-2 rounded-full border transition-all ${
                  isDarkMode ? 'border-white/10 hover:border-[#E11D48] text-white' : 'border-black/10 hover:border-[#E11D48] text-neutral-800'
                }`}
                aria-label="Tutup Artikel"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Article Meta */}
              <div className="flex items-center gap-3 text-xs font-mono text-[#E11D48]">
                <span className="px-2.5 py-1 rounded bg-[#E11D48]/10 font-bold uppercase">{selectedArticle.tag}</span>
                <span>•</span>
                <span>{selectedArticle.read_time}</span>
              </div>

              {/* Article Title */}
              <h2 className="text-3xl sm:text-4xl font-display uppercase tracking-tight leading-tight pr-10">
                {selectedArticle.title}
              </h2>

              {/* Article Content / Excerpt */}
              <div className="space-y-4 text-sm sm:text-base leading-relaxed text-inherit/90 font-normal text-justify">
                <p className="first-letter:text-4xl first-letter:font-display first-letter:text-[#E11D48] first-letter:mr-2 first-letter:float-left">
                  {selectedArticle.description}
                </p>
                <p>
                  Melalui kajian analitis berbasis data dan observasi sosial mendalam, naskah ini menguraikan bagaimana literasi finansial bukan sekadar persoalan angka, melainkan benteng pertahanan intelektual bagi masa depan generasi muda Indonesia.
                </p>
                <div className={`p-5 rounded-2xl border my-4 ${quoteBgClass}`}>
                  <p className="font-editorial italic text-base leading-relaxed">
                    &ldquo;Ketika logika diuji dan nalar kritis ditegakkan, manipulasi finansial kehilangan kekuatannya untuk memiskinkan akal sehat kita.&rdquo;
                  </p>
                </div>
              </div>

              {/* Actions Footer */}
              <div className={`pt-6 border-t ${dividerClass} flex flex-col sm:flex-row items-center justify-between gap-4`}>
                <span className={`text-xs font-mono ${mutedText}`}>Kurasi Eksklusif Sektor Lokal</span>
                
                <a
                  href={selectedArticle.link_url}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto px-6 py-3 bg-[#E11D48] hover:bg-[#BE123C] text-white font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-2 shadow-md shadow-[#E11D48]/30"
                >
                  <span>Buka Arsip Rujukan Lengkap</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* FOOTER */}
      <footer className={`border-t py-12 px-6 ${isDarkMode ? 'border-white/[0.08]' : 'border-black/[0.08]'}`}>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <div className="flex items-center gap-2 font-display text-lg text-inherit">
            <span>SEKTOR LOKAL</span>
            <span className="w-2 h-2 rounded-full bg-[#E11D48]" />
          </div>
          <p className={mutedText}>
            © 2026 Sektor Lokal. Direktori Kebanggaan Warga Indonesia Era Pop Modern.
          </p>
        </div>
      </footer>

    </div>
  );
}
