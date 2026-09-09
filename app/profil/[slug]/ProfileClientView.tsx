'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, Sun, Moon, Youtube, Twitter, Instagram, Mail, Radio, 
  ArrowUpRight, ArrowDown, ArrowLeft, BookOpen, Globe, Share2, 
  Video, Linkedin, Facebook, HeartHandshake, Feather, Sparkles, ExternalLink, Check
} from 'lucide-react';

import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { FullProfileData, Article, SocialLinks } from '../../../lib/supabase/types';
import { createClient } from '../../../lib/supabase/client';

interface ProfileClientViewProps {
  initialData: FullProfileData;
  slug: string;
}

export default function ProfileClientView({ initialData, slug }: ProfileClientViewProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [profileData, setProfileData] = useState<FullProfileData>(initialData);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Client-side refresh if needed
    const fetchFromSupabase = async () => {
      try {
        const supabase = createClient();
        const { data: prof, error: pError } = await supabase
          .from('profiles_warga')
          .select('*')
          .eq('slug', slug)
          .single();

        if (prof && !pError) {
          const pId = prof.id;
          const [life, wrk, art, tst, ini, gal] = await Promise.all([
            supabase.from('life_events_warga').select('*').eq('profile_id', pId).order('order_index'),
            supabase.from('works_warga').select('*').eq('profile_id', pId).order('order_index'),
            supabase.from('articles_warga').select('*').eq('profile_id', pId).order('order_index'),
            supabase.from('testimonials_warga').select('*').eq('profile_id', pId).order('order_index'),
            supabase.from('initiatives_warga').select('*').eq('profile_id', pId).order('order_index'),
            supabase.from('gallery_warga').select('*').eq('profile_id', pId).order('order_index'),
          ]);

          setProfileData({
            profile: prof,
            lifeEvents: (life.data && life.data.length > 0) ? life.data : initialData.lifeEvents,
            works: (wrk.data && wrk.data.length > 0) ? wrk.data : initialData.works,
            articles: (art.data && art.data.length > 0) ? art.data : initialData.articles,
            testimonials: (tst.data && tst.data.length > 0) ? tst.data : initialData.testimonials,
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
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const { profile, lifeEvents, works, articles, testimonials, initiatives } = profileData;
  const soc = profile.social_links || {};

  const socialIconMap: { key: keyof SocialLinks; label: string; icon: React.ReactNode }[] = [
    { key: 'youtube', label: 'YouTube', icon: <Youtube className="w-5 h-5" /> },
    { key: 'twitter', label: 'Twitter', icon: <Twitter className="w-5 h-5" /> },
    { key: 'instagram', label: 'Instagram', icon: <Instagram className="w-5 h-5" /> },
    { key: 'spotify', label: 'Spotify', icon: <Radio className="w-5 h-5" /> },
    { key: 'tiktok', label: 'TikTok', icon: <Video className="w-5 h-5" /> },
    { key: 'linkedin', label: 'LinkedIn', icon: <Linkedin className="w-5 h-5" /> },
    { key: 'facebook', label: 'Facebook', icon: <Facebook className="w-5 h-5" /> },
    { key: 'email', label: 'Email', icon: <Mail className="w-5 h-5" /> },
    { key: 'website', label: 'Website', icon: <Globe className="w-5 h-5" /> },
    { key: 'substack', label: 'Substack', icon: <Feather className="w-5 h-5" /> },
    { key: 'medium', label: 'Medium', icon: <BookOpen className="w-5 h-5" /> },
  ];

  return (
    <div className={`min-h-screen selection:bg-[#E11D48] selection:text-white font-sans ${isDarkMode ? 'magazine-dark text-[#F5EFEB] bg-[#07090E]' : 'magazine-light text-[#07090E] bg-white'}`}>
      
      {/* Scroll Progress */}
      <div 
        className="fixed top-0 left-0 right-0 h-1 bg-[#E11D48] z-50 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      <Navbar showBackButton={true} />

      {/* Floating Dark Mode Toggle */}
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="fixed bottom-8 left-8 z-50 p-3 rounded-full bg-black text-white border border-white/20 shadow-xl hover:scale-110 transition-transform"
      >
        {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </button>

      {/* ACT 1: Split Hero Header */}
      <section className="h-[100vh] min-h-[600px] w-full flex flex-col md:flex-row magazine-split-hero relative overflow-hidden">
        {/* Left Half: Obsidian */}
        <div className="flex-1 bg-[#07090E] relative flex flex-col justify-center p-8 md:p-12 lg:p-24 z-10 pt-24 md:pt-12">
          <div className="hidden lg:block absolute left-4 top-1/2 -translate-y-1/2 -rotate-90 origin-left vertical-text text-[#8A93A8] text-xs tracking-[0.3em] font-mono">
            BERKAS PROFIL // {new Date().getFullYear()}
          </div>
          
          <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none overflow-hidden">
            <h1 className="watermark-text text-[12vw] md:text-[15vw] font-display whitespace-nowrap text-white">{profile.name}</h1>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-20 space-y-6 max-w-xl"
          >
            <span className="inline-block px-3 py-1 border border-[#E11D48] text-[#E11D48] text-[10px] font-mono tracking-widest uppercase">
              {profile.category}
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display text-white uppercase leading-none tracking-tight">
              {profile.name}
            </h1>
            <p className="font-editorial italic text-[#F5EFEB] text-lg md:text-2xl lg:text-3xl border-l-2 border-[#E11D48] pl-4">
              &ldquo;{profile.quote}&rdquo;
            </p>
          </motion.div>
        </div>

        {/* Right Half: Crimson */}
        <div className="flex-1 bg-[#E11D48] relative flex items-center justify-center min-h-[50vh] md:min-h-full">
          {/* Bleeding portrait */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute md:-left-32 lg:-left-40 w-48 h-64 md:w-80 md:h-[28rem] lg:w-96 lg:h-[34rem] z-30 shadow-2xl border-4 border-white/10"
          >
            <Image 
              src={profile.photo_url} 
              alt={profile.name} 
              fill 
              className="object-cover portrait-bw"
              priority
            />
          </motion.div>

          <div className="absolute bottom-8 right-8 lg:bottom-12 lg:right-12 flex flex-col md:flex-row items-end md:items-center gap-4 z-20">
            <div className="flex gap-2">
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
                    className="p-2 bg-black/20 hover:bg-black text-white rounded-full transition-colors backdrop-blur-sm"
                  >
                    {item.icon}
                  </a>
                );
              })}
            </div>
            <button 
              onClick={handleCopyLink}
              className="flex items-center gap-2 px-4 py-2 bg-black text-white font-mono text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
            >
              {copied ? <Check className="w-4 h-4" /> : <Share2 className="w-4 h-4" />}
              <span>{copied ? 'Tersalin' : 'Bagikan'}</span>
            </button>
          </div>

          {profile.verified && (
            <div className="absolute top-24 md:top-12 right-8 lg:right-12 z-20 bg-black text-white px-3 py-1 text-[10px] font-mono tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E11D48] animate-pulse" />
              VERIFIED
            </div>
          )}
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-40 animate-bounce flex flex-col items-center">
          <span className="text-[10px] font-mono text-white/70 tracking-widest mb-1 drop-shadow-md">SCROLL</span>
          <ArrowDown className="w-4 h-4 text-white drop-shadow-md" />
        </div>
      </section>

      {/* ACT 2: Editorial Biography (Ivory Block) */}
      <section className="w-full bg-[#F8F5EE] text-[#07090E] py-24 lg:py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row gap-16">
          <div className="md:w-1/12 relative hidden md:block">
            <div className="sticky top-32 -rotate-90 origin-left vertical-text text-[#E11D48] text-sm tracking-[0.2em] font-mono font-bold whitespace-nowrap">
              TENTANG // {new Date().getFullYear()}
            </div>
          </div>
          
          <div className="md:w-7/12">
            <div className="md:hidden mb-8 border-b-2 border-[#E11D48] pb-2 inline-block">
              <span className="text-[#E11D48] font-mono text-sm tracking-widest font-bold">TENTANG //</span>
            </div>
            
            <div className="columns-1 md:columns-2 gap-8 text-base md:text-lg font-sans leading-relaxed text-justify">
              {profile.bio_paragraphs.map((p, i) => (
                <p key={i} className="mb-6 break-inside-avoid">{p}</p>
              ))}
            </div>
            
            {testimonials.length > 0 && (
              <div className="mt-16 p-8 border-l-4 border-[#E11D48] bg-white shadow-sm relative">
                <div className="absolute -top-6 -left-4 text-6xl text-[#E11D48] opacity-20 font-editorial">&ldquo;</div>
                <p className="font-editorial italic text-xl md:text-2xl mb-6 text-gray-800 leading-snug">
                  &ldquo;{testimonials[0].quote}&rdquo;
                </p>
                <p className="font-mono text-sm uppercase font-bold tracking-wide">{testimonials[0].author_name}</p>
                <p className="font-mono text-[11px] text-gray-500 uppercase tracking-widest mt-1">{testimonials[0].author_role}</p>
              </div>
            )}
          </div>
          
          <div className="md:w-4/12 relative hidden md:block">
            <div className="dot-matrix absolute inset-0 opacity-10"></div>
            <div className="relative aspect-[3/4] w-full border border-black/10 shadow-2xl bg-white p-4 transform rotate-2">
              <Image 
                src={profile.photo_url} 
                alt="" 
                fill 
                className="object-cover portrait-bw p-4" 
              />
              <div className="absolute bottom-6 right-6 bg-black text-white text-[9px] font-mono px-2 py-1 tracking-widest">
                FIG. 1
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ACT 3: Perjalanan & Kutipan Besar (Dark Block) */}
      <section className="w-full bg-[#07090E] text-[#F5EFEB] py-24 lg:py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row gap-16 relative z-10">
          <div className="md:w-5/12 relative">
            <span className="editorial-quote-mark text-[#E11D48] text-8xl lg:text-[12rem] leading-none block mb-4 lg:absolute lg:-top-16 lg:-left-12 opacity-80">&ldquo;</span>
            <h2 className="text-3xl lg:text-5xl font-editorial leading-tight italic relative z-10 text-white pt-4">
              {profile.quote}
            </h2>
          </div>
          
          <div className="md:w-7/12 relative">
            <div className="absolute left-0 top-2 bottom-2 w-[1px] bg-white/20"></div>
            <div className="space-y-16 pl-8 md:pl-12">
              {lifeEvents.length > 0 ? lifeEvents.map((ev, i) => (
                <div key={i} className="relative">
                  <div className="absolute -left-10 md:-left-14 top-1 w-3 h-3 bg-[#E11D48] rounded-full shadow-[0_0_10px_rgba(225,29,72,0.8)]"></div>
                  <span className="text-[#E11D48] font-mono text-xs font-bold tracking-widest">{ev.year_range}</span>
                  <h3 className="text-2xl md:text-3xl font-display uppercase mt-2 mb-3 text-white">{ev.title}</h3>
                  <p className="font-sans text-[#8A93A8] leading-relaxed text-sm md:text-base">{ev.description}</p>
                </div>
              )) : (
                <div className="text-[#8A93A8] font-mono text-sm tracking-widest">TIDAK ADA DATA PERJALANAN</div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ACT 4: Karya & Inisiatif */}
      {/* Crimson Block for Works */}
      <section className="w-full bg-[#E11D48] text-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="border-b border-white/30 pb-6 mb-12 flex flex-col md:flex-row md:justify-between md:items-end gap-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display uppercase leading-none">Karya & Diskursus</h2>
            <span className="font-mono text-xs tracking-widest uppercase opacity-80">ACT 04 // Portofolio</span>
          </div>
          
          {works.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {works.map((w, i) => (
                <div key={i} className="bg-white/10 p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                  <span className="text-[10px] font-mono uppercase tracking-widest block mb-4 opacity-70 border-b border-white/20 pb-2">
                    {w.category}
                  </span>
                  <h3 className="text-xl md:text-2xl font-display uppercase mb-4 leading-snug">{w.title}</h3>
                  <p className="text-sm text-white/80 leading-relaxed mb-8">{w.description}</p>
                  
                  {w.link_url && (
                    <a 
                      href={w.link_url} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="inline-flex items-center gap-2 text-xs font-bold font-mono uppercase border-b border-white pb-1 group-hover:text-black group-hover:border-black transition-colors"
                    >
                      Lihat Karya <ArrowUpRight className="w-3 h-3" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-white/70 font-mono text-sm tracking-widest">TIDAK ADA DATA KARYA</div>
          )}
        </div>
      </section>

      {/* Dark Block for Initiatives & Articles */}
      <section className="w-full bg-[#0E131F] text-[#F5EFEB] py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-24 md:space-y-32">
          
          {/* Initiatives */}
          {initiatives.length > 0 && (
            <div>
              <div className="h-[1px] w-full bg-white/10 mb-12"></div>
              <h2 className="text-3xl md:text-5xl font-display uppercase mb-12 text-white">Inisiatif & Produk Warga</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {initiatives.map((ini, i) => (
                  <div key={i} className="magazine-card-dark bg-[#1A1F2C] border border-white/10 p-6 md:p-8 flex flex-col sm:flex-row gap-6 md:gap-8 group hover:border-[#E11D48]/50 transition-colors">
                    {ini.image_url && (
                      <div className="w-full sm:w-1/3 aspect-square relative bg-[#07090E] overflow-hidden">
                        <Image 
                          src={ini.image_url} 
                          alt={ini.title} 
                          fill 
                          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                        />
                      </div>
                    )}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <span className="text-[10px] font-mono text-[#E11D48] tracking-widest uppercase block mb-2">{ini.category}</span>
                        <h3 className="text-2xl font-display uppercase mb-3 text-white">{ini.title}</h3>
                        <p className="text-sm text-[#8A93A8] line-clamp-3 mb-6 leading-relaxed">{ini.description}</p>
                      </div>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-white/10">
                        <span className="font-mono text-sm font-bold text-white">{ini.price || 'Gratis'}</span>
                        <a 
                          href={ini.link_url} 
                          target="_blank"
                          rel="noreferrer"
                          className="px-4 py-2 bg-[#E11D48] text-white font-mono text-[10px] uppercase tracking-widest hover:bg-white hover:text-[#E11D48] transition-colors flex items-center gap-1"
                        >
                          {ini.action_text} <ArrowUpRight className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Articles */}
          {articles.length > 0 && (
            <div>
              <div className="h-[1px] w-full bg-white/10 mb-12"></div>
              <h2 className="text-3xl md:text-5xl font-display uppercase mb-12 text-white">Jurnal & Wawasan</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
                {articles.map((art, i) => (
                  <div key={i} className="border-t border-white/20 pt-8 group">
                    <div className="flex items-center gap-4 font-mono text-[10px] text-[#E11D48] tracking-widest uppercase mb-4">
                      <span>{art.tag}</span>
                      <span className="text-white/30">•</span>
                      <span>{art.read_time}</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-display uppercase mb-4 text-white group-hover:text-[#E11D48] transition-colors leading-snug">
                      {art.title}
                    </h3>
                    <p className="text-[#8A93A8] mb-8 line-clamp-3 leading-relaxed">
                      {art.description}
                    </p>
                    
                    <Link 
                      href={art.link_url && art.link_url !== '#' ? art.link_url : `/artikel/${art.title.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-')}`}
                      className="inline-flex items-center gap-2 font-mono text-xs uppercase font-bold text-white border-b border-[#E11D48] pb-1 hover:text-[#E11D48] transition-colors"
                    >
                      Baca Selengkapnya <ArrowUpRight className="w-3 h-3" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
