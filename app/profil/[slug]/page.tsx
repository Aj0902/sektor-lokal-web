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
  ArrowDown,
  ArrowLeft,
  BookOpen,
  Globe,
  Share2,
  Video,
  Linkedin,
  Facebook,
  HeartHandshake,
  Feather,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ConstellationCanvas from '../../../components/ConstellationCanvas';
import ParallaxGallery from '../../../components/ParallaxGallery';
import { fallbackProfiles } from '../../../lib/supabase/fallbackData';
import { FullProfileData, Article, SocialLinks } from '../../../lib/supabase/types';
import { createClient } from '../../../lib/supabase/client';

export default function DynamicProfilePage() {
  const params = useParams();
  const slug = (params?.slug as string) || 'ferry-irwandi';

  const defaultData = fallbackProfiles[slug] || fallbackProfiles['ferry-irwandi'];

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const [profileData, setProfileData] = useState<FullProfileData>(defaultData);

  useEffect(() => {
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
          const [life, wrk, art, tst, ini, gal] = await Promise.all([
            supabase.from('life_events').select('*').eq('profile_id', pId).order('order_index'),
            supabase.from('works').select('*').eq('profile_id', pId).order('order_index'),
            supabase.from('articles').select('*').eq('profile_id', pId).order('order_index'),
            supabase.from('testimonials').select('*').eq('profile_id', pId).order('order_index'),
            supabase.from('initiatives').select('*').eq('profile_id', pId).order('order_index'),
            supabase.from('gallery').select('*').eq('profile_id', pId).order('order_index'),
          ]);

          setProfileData({
            profile: prof,
            lifeEvents: (life.data && life.data.length > 0) ? life.data : defaultData.lifeEvents,
            works: (wrk.data && wrk.data.length > 0) ? wrk.data : defaultData.works,
            articles: (art.data && art.data.length > 0) ? art.data : defaultData.articles,
            testimonials: (tst.data && tst.data.length > 0) ? tst.data : defaultData.testimonials,
            initiatives: (ini.data && ini.data.length > 0) ? ini.data : defaultData.initiatives,
            gallery: (gal.data && gal.data.length > 0) ? gal.data : defaultData.gallery
          });
        }
      } catch {
        // Local fallback
      }
    };

    fetchFromSupabase();
  }, [slug, defaultData]);

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

  const { profile, lifeEvents, works, articles, testimonials, initiatives, gallery = [] } = profileData;

  const bgCanvas = isDarkMode ? 'particle-wave-dark text-[#EDE8DC]' : 'particle-wave-light text-[#0A0E1A]';
  const cardClass = isDarkMode ? 'spotlight-card-dark' : 'spotlight-card-light';
  const mutedText = isDarkMode ? 'text-[#8A93A8]' : 'text-[#64748B]';
  const navBg = isDarkMode ? 'bg-[#0A0E1A]/90 border-white/[0.08]' : 'bg-[#F9F8F5]/90 border-black/[0.08]';

  const soc = profile.social_links || {};

  const socialIconMap: { key: keyof SocialLinks; label: string; icon: React.ReactNode }[] = [
    { key: 'youtube', label: 'YouTube', icon: <Youtube className="w-4 h-4 text-red-500" /> },
    { key: 'twitter', label: 'Twitter / X', icon: <Twitter className="w-4 h-4 text-sky-400" /> },
    { key: 'instagram', label: 'Instagram', icon: <Instagram className="w-4 h-4 text-pink-500" /> },
    { key: 'spotify', label: 'Spotify', icon: <Radio className="w-4 h-4 text-emerald-500" /> },
    { key: 'tiktok', label: 'TikTok', icon: <Video className="w-4 h-4 text-[#E11D48]" /> },
    { key: 'linkedin', label: 'LinkedIn', icon: <Linkedin className="w-4 h-4 text-blue-500" /> },
    { key: 'facebook', label: 'Facebook', icon: <Facebook className="w-4 h-4 text-blue-600" /> },
    { key: 'email', label: 'Email', icon: <Mail className="w-4 h-4 text-amber-500" /> },
    { key: 'website', label: 'Website', icon: <Globe className="w-4 h-4 text-indigo-400" /> },
    { key: 'substack', label: 'Substack', icon: <Feather className="w-4 h-4 text-orange-500" /> },
    { key: 'medium', label: 'Medium', icon: <BookOpen className="w-4 h-4 text-[#EDE8DC]" /> },
    { key: 'trakteer', label: 'Trakteer', icon: <HeartHandshake className="w-4 h-4 text-rose-500" /> },
    { key: 'patreon', label: 'Patreon', icon: <HeartHandshake className="w-4 h-4 text-coral-500" /> },
  ];

  const marqueeInitiatives = initiatives.length > 0 
    ? [...initiatives, ...initiatives, ...initiatives, ...initiatives] 
    : [];

  const marqueeTestimonials = testimonials.length > 0 
    ? [...testimonials, ...testimonials, ...testimonials, ...testimonials] 
    : [];

  return (
    <div className={`min-h-screen ${bgCanvas} font-sans antialiased selection:bg-[#E11D48] selection:text-white relative`}>
      
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
          
          <Link href="/" className="flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-[#E11D48] hover:underline">
            <ArrowLeft className="w-4 h-4" />
            <span>KEMBALI KE DIREKTORI</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-xs font-medium tracking-wide uppercase font-mono">
            <a href="#tentang" className="hover:text-[#E11D48] transition-colors">Tentang</a>
            <a href="#perjalanan" className="hover:text-[#E11D48] transition-colors">Perjalanan</a>
            <a href="#karya" className="hover:text-[#E11D48] transition-colors">Karya</a>
            <a href="#galeri" className="hover:text-[#E11D48] transition-colors">Galeri</a>
            <a href="#artikel" className="hover:text-[#E11D48] transition-colors">Artikel</a>
            <a href="#produk" className="hover:text-[#E11D48] transition-colors">Inisiatif</a>
            <a href="#kata-warga" className="hover:text-[#E11D48] transition-colors">Kata Warga</a>
          </nav>

          <div className="flex items-center gap-3">
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
              isDarkMode ? 'bg-[#0A0E1A]/98 border-white/10' : 'bg-[#F9F8F5]/98 border-black/10'
            }`}
          >
            <a href="#tentang" onClick={() => setIsMenuOpen(false)} className="hover:text-[#E11D48] transition-colors">01 // Tentang</a>
            <a href="#perjalanan" onClick={() => setIsMenuOpen(false)} className="hover:text-[#E11D48] transition-colors">02 // Perjalanan Hidup</a>
            <a href="#karya" onClick={() => setIsMenuOpen(false)} className="hover:text-[#E11D48] transition-colors">03 // Discovery Karya</a>
            <a href="#galeri" onClick={() => setIsMenuOpen(false)} className="hover:text-[#E11D48] transition-colors">04 // Galeri Visual</a>
            <a href="#artikel" onClick={() => setIsMenuOpen(false)} className="hover:text-[#E11D48] transition-colors">05 // Artikel & Wawasan</a>
            <a href="#produk" onClick={() => setIsMenuOpen(false)} className="hover:text-[#E11D48] transition-colors">06 // Produk & Inisiatif</a>
            <a href="#kata-warga" onClick={() => setIsMenuOpen(false)} className="hover:text-[#E11D48] transition-colors">07 // Kata Warga</a>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="max-w-5xl mx-auto px-6 relative z-10 space-y-24 md:space-y-36 pt-8 pb-24">

        {/* HERO SECTION */}
        <section id="hero" className="min-h-[85vh] flex flex-col justify-center items-center text-center space-y-8 pt-4 md:pt-8">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center space-y-6 max-w-2xl mx-auto"
          >
            {/* Portrait Frame */}
            <div className="relative w-40 h-48 sm:w-48 sm:h-56 rounded-2xl overflow-hidden bg-neutral-900 shadow-2xl border border-inherit/10 group">
              <Image 
                src={profile.photo_url} 
                alt={profile.name} 
                fill
                sizes="(max-width: 768px) 192px, 224px"
                priority
                className="object-cover filter grayscale contrast-120 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${
                isDarkMode ? 'from-[#0A0E1A]/80 via-transparent' : 'from-black/30 via-transparent'
              }`} />
              
              <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-[9px] font-mono uppercase tracking-widest text-white/90 border border-white/10 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E11D48] animate-pulse" />
                <span>{profile.category}</span>
              </div>
            </div>

            {/* Typography Stack */}
            <div className="space-y-3">
              <span className="text-xs font-mono tracking-widest text-[#E11D48] uppercase font-bold">
                PROFIL TERVERIFIKASI
              </span>
              <h1 className="text-5xl sm:text-7xl md:text-8xl font-display uppercase tracking-tight leading-[0.9]">
                {profile.name}
              </h1>
              <p className="font-editorial italic font-semibold text-lg sm:text-2xl text-[#E11D48] tracking-wide pt-1">
                {profile.title}
              </p>
              <p className={`text-sm sm:text-base max-w-lg mx-auto leading-relaxed pt-1 ${mutedText}`}>
                {profile.bio_paragraphs[0]}
              </p>
            </div>

            {/* DYNAMIC SOCIAL LINKS BAR */}
            <div className="flex items-center justify-center gap-2 flex-wrap pt-2">
              {socialIconMap.map((item) => {
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
                    className={`w-10 h-10 rounded-xl border flex items-center justify-center transition-all ${
                      isDarkMode 
                        ? 'border-white/10 hover:border-[#E11D48] bg-[#111726]/60 text-[#8A93A8] hover:text-white' 
                        : 'border-black/10 hover:border-[#E11D48] bg-white text-gray-600 hover:text-black'
                    }`}
                  >
                    {item.icon}
                  </a>
                );
              })}
            </div>

            {/* Scroll Cue */}
            <div className="pt-8 flex flex-col items-center gap-2 opacity-60 animate-bounce">
              <span className="text-[10px] font-mono uppercase tracking-widest">GULIR KE BAWAH</span>
              <ArrowDown className="w-3.5 h-3.5 text-[#E11D48]" />
            </div>

          </motion.div>

        </section>

        {/* 01 // TENTANG */}
        <section id="tentang" className="space-y-8 scroll-mt-24">
          <div className="flex items-center gap-3 border-b pb-4 border-inherit/10">
            <span className="font-mono text-xs text-[#E11D48] font-bold">01 //</span>
            <h2 className="text-3xl sm:text-4xl font-display uppercase tracking-tight">TENTANG {profile.name}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-7 space-y-5 text-base sm:text-lg leading-relaxed font-normal text-justify">
              {profile.bio_paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className={`md:col-span-5 p-6 sm:p-8 rounded-3xl border flex items-stretch justify-between gap-6 shadow-sm ${cardClass}`}>
              <blockquote className="font-editorial italic text-base sm:text-lg leading-relaxed text-inherit">
                &ldquo;{profile.quote}&rdquo;
              </blockquote>
              <div className="refined-accent-bar shrink-0" />
            </div>
          </div>
        </section>

        {/* 02 // PERJALANAN HIDUP */}
        {lifeEvents.length > 0 && (
          <section id="perjalanan" className="space-y-8 scroll-mt-24">
            <div className="flex items-center gap-3 border-b pb-4 border-inherit/10">
              <span className="font-mono text-xs text-[#E11D48] font-bold">02 //</span>
              <h2 className="text-3xl sm:text-4xl font-display uppercase tracking-tight">PERJALANAN HIDUP</h2>
            </div>
            <div className="relative pl-8 sm:pl-10 space-y-10">
              <div className="absolute left-0 top-2 bottom-2 refined-timeline-track" />
              {lifeEvents.map((ev, idx) => (
                <div key={idx} className="relative space-y-1.5">
                  <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#E11D48] shadow-md shadow-[#E11D48]/50" />
                  <span className="text-xs font-mono font-bold text-[#E11D48] uppercase tracking-wider">{ev.year_range}</span>
                  <h3 className="text-lg sm:text-xl font-display uppercase text-inherit">{ev.title}</h3>
                  <p className={`text-sm sm:text-base leading-relaxed ${mutedText}`}>{ev.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 03 // DISCOVERY KARYA */}
        {works.length > 0 && (
          <section id="karya" className="space-y-8 scroll-mt-24">
            <div className="flex items-center gap-3 border-b pb-4 border-inherit/10">
              <span className="font-mono text-xs text-[#E11D48] font-bold">03 //</span>
              <h2 className="text-3xl sm:text-4xl font-display uppercase tracking-tight">DISCOVERY KARYA</h2>
            </div>
            <div className="space-y-4">
              {works.map((w, idx) => {
                const isOpen = activeAccordion === idx;
                return (
                  <div 
                    key={idx}
                    onClick={() => setActiveAccordion(isOpen ? null : idx)}
                    className={`cursor-pointer rounded-2xl p-6 border transition-all ${
                      isOpen ? cardClass : (isDarkMode ? 'bg-[#0E1424]/60 border-white/[0.06]' : 'bg-[#F9F8F5] border-black/[0.06]')
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <span className="text-[10px] font-mono text-[#E11D48] font-semibold uppercase tracking-wider block">{w.category}</span>
                        <h3 className="text-lg sm:text-xl font-display uppercase text-inherit mt-0.5">{w.title}</h3>
                      </div>
                      <ChevronDown className={`w-5 h-5 text-[#E11D48] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                    </div>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden">
                          <div className="mt-4 pt-4 border-t border-inherit/10 space-y-3">
                            <p className={`text-sm sm:text-base leading-relaxed ${mutedText}`}>{w.description}</p>
                            <div className="flex justify-end">
                              <a href={w.link_url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E11D48] hover:underline font-mono">
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
          </section>
        )}

        {/* 04 // GALERI VISUAL PARALLAX */}
        <section id="galeri" className="space-y-8 scroll-mt-24">
          <div className="flex items-center gap-3 border-b pb-4 border-inherit/10">
            <span className="font-mono text-xs text-[#E11D48] font-bold">04 //</span>
            <h2 className="text-3xl sm:text-4xl font-display uppercase tracking-tight">GALERI VISUAL PARALLAX</h2>
          </div>
          <ParallaxGallery isDarkMode={isDarkMode} items={gallery} />
        </section>

        {/* 05 // ARTIKEL & WAWASAN */}
        {articles.length > 0 && (
          <section id="artikel" className="space-y-8 scroll-mt-24">
            <div className="flex items-center gap-3 border-b pb-4 border-inherit/10">
              <span className="font-mono text-xs text-[#E11D48] font-bold">05 //</span>
              <h2 className="text-3xl sm:text-4xl font-display uppercase tracking-tight">ARTIKEL & WAWASAN</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {articles.map((art, idx) => {
                const hasCustomUrl = art.link_url && art.link_url !== '#' && art.link_url.trim() !== '';
                const isExternal = hasCustomUrl && (art.link_url.startsWith('http://') || art.link_url.startsWith('https://'));
                const articleSlug = art.title ? art.title.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-') : art.id;
                const targetArticleUrl = isExternal 
                  ? art.link_url 
                  : `/artikel/${articleSlug || art.id}`;

                return (
                  <div key={idx} className={`p-6 sm:p-8 rounded-3xl border space-y-4 flex flex-col justify-between ${cardClass}`}>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs font-mono text-[#E11D48]">
                        <span>{art.tag}</span>
                        <span>{art.read_time}</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-display uppercase text-inherit leading-snug">{art.title}</h3>
                      <p className={`text-sm leading-relaxed ${mutedText}`}>{art.description}</p>
                    </div>
                    <div className="pt-3 flex justify-between items-center border-t border-inherit/10 font-mono">
                      <button 
                        onClick={() => setSelectedArticle(art)}
                        className="text-xs text-[#E11D48] hover:underline flex items-center gap-1 font-bold"
                      >
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>Mode Reader</span>
                      </button>

                      {isExternal ? (
                        <a 
                          href={targetArticleUrl} 
                          target="_blank" 
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-bold text-[#E11D48] hover:underline"
                        >
                          <span>Buka Link Artikel</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      ) : (
                        <Link 
                          href={targetArticleUrl} 
                          className="inline-flex items-center gap-1 text-xs font-bold text-[#E11D48] hover:underline"
                        >
                          <span>Baca Artikel Full (SEO)</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* 06 // PRODUK & INISIATIF WARGA (SLIDER MARQUEE 1-BARIS) */}
        {initiatives.length > 0 && (
          <section id="produk" className="space-y-8 scroll-mt-24 overflow-hidden">
            <div className="flex items-center justify-between border-b pb-4 border-inherit/10">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-[#E11D48] font-bold">06 //</span>
                <h2 className="text-3xl sm:text-4xl font-display uppercase tracking-tight">PRODUK & INISIATIF WARGA</h2>
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#E11D48] font-bold animate-pulse">
                • MARQUEE SLIDER
              </span>
            </div>

            {/* MARQUEE CONTAINER */}
            <div className="relative w-full overflow-hidden py-4">
              <div className="flex gap-6 w-max animate-marquee hover:[animation-play-state:paused]">
                {marqueeInitiatives.map((prod, idx) => (
                  <div 
                    key={idx} 
                    className={`w-[290px] sm:w-[340px] p-6 rounded-3xl border flex flex-col justify-between space-y-4 shrink-0 shadow-lg ${cardClass}`}
                  >
                    <div className="space-y-3">
                      {/* Product Thumbnail */}
                      {prod.image_url && (
                        <div className="relative w-full h-40 rounded-2xl overflow-hidden bg-neutral-900 border border-inherit/10">
                          <Image src={prod.image_url} alt={prod.title} fill sizes="340px" className="object-cover filter grayscale contrast-110" />
                        </div>
                      )}

                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-mono text-[#E11D48] uppercase font-bold">{prod.category}</span>
                          {prod.price && (
                            <span className="px-2.5 py-0.5 rounded-full bg-[#E11D48]/10 text-[#E11D48] text-xs font-mono font-bold border border-[#E11D48]/30">
                              {prod.price}
                            </span>
                          )}
                        </div>

                        <h3 className="font-display uppercase text-lg sm:text-xl text-inherit">{prod.title}</h3>
                        <p className={`text-xs leading-relaxed line-clamp-2 ${mutedText}`}>{prod.description}</p>
                      </div>
                    </div>

                    <a 
                      href={prod.link_url} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="w-full py-2.5 bg-[#E11D48] hover:bg-[#BE123C] text-white font-bold text-xs rounded-xl transition-colors flex items-center justify-center gap-1.5 shadow-md shadow-[#E11D48]/30 font-mono uppercase"
                    >
                      <span>{prod.action_text}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 07 // KATA WARGA & TESTIMONI (SLIDER MARQUEE 1-BARIS) */}
        {testimonials.length > 0 && (
          <section id="kata-warga" className="space-y-8 scroll-mt-24 overflow-hidden">
            <div className="flex items-center justify-between border-b pb-4 border-inherit/10">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-[#E11D48] font-bold">07 //</span>
                <h2 className="text-3xl sm:text-4xl font-display uppercase tracking-tight">KATA WARGA & TESTIMONI</h2>
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#E11D48] font-bold animate-pulse">
                • MARQUEE SLIDER
              </span>
            </div>

            {/* MARQUEE CONTAINER */}
            <div className="relative w-full overflow-hidden py-4">
              <div className="flex gap-6 w-max animate-marquee-reverse hover:[animation-play-state:paused]">
                {marqueeTestimonials.map((item, idx) => (
                  <div 
                    key={idx} 
                    className={`w-[290px] sm:w-[340px] p-6 sm:p-7 rounded-3xl border flex flex-col justify-between space-y-4 shrink-0 shadow-lg ${cardClass}`}
                  >
                    <blockquote className="font-editorial italic text-sm leading-relaxed text-inherit">
                      &ldquo;{item.quote}&rdquo;
                    </blockquote>
                    <div className="pt-3 border-t border-inherit/10 font-mono">
                      <p className="font-display uppercase text-base text-inherit font-sans">{item.author_name}</p>
                      <p className={`text-xs ${mutedText}`}>{item.author_role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

      </main>

      {/* FOCUS READING MODAL FOR ARTICLES */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedArticle(null)}
            className="fixed inset-0 z-50 p-6 flex items-center justify-center bg-black/70 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className={`max-w-2xl w-full p-8 rounded-3xl border shadow-2xl space-y-6 relative max-h-[85vh] overflow-y-auto ${
                isDarkMode ? 'bg-[#0A0E1A] border-white/20 text-[#EDE8DC]' : 'bg-[#F9F8F5] border-black/20 text-[#0A0E1A]'
              }`}
            >
              <button 
                onClick={() => setSelectedArticle(null)} 
                className="absolute top-6 right-6 p-2 rounded-full border border-inherit/20 hover:border-[#E11D48]"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-2">
                <span className="text-xs font-mono text-[#E11D48] uppercase font-bold">{selectedArticle.tag} • {selectedArticle.read_time}</span>
                <h2 className="text-2xl sm:text-3xl font-display uppercase leading-tight">{selectedArticle.title}</h2>
              </div>

              <div className="space-y-4 text-base leading-relaxed text-inherit/90 text-justify border-t pt-4 border-inherit/10 font-serif italic">
                <p>{selectedArticle.description}</p>
                {selectedArticle.content_full && (
                  <div className="pt-2 font-sans not-italic text-sm leading-relaxed whitespace-pre-line">
                    {selectedArticle.content_full}
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-inherit/10 flex justify-end">
                <Link 
                  href={`/artikel/${selectedArticle.title.toLowerCase().trim().replace(/\s+/g, '-')}`} 
                  className="px-5 py-2.5 bg-[#E11D48] text-white font-bold text-xs rounded-xl flex items-center gap-1.5 font-mono"
                >
                  <span>Buka Halaman Artikel (SEO)</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FOOTER */}
      <footer className={`border-t py-12 px-6 ${isDarkMode ? 'border-white/[0.08]' : 'border-black/[0.08]'}`}>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono">
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
