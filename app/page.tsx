'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Sun, 
  Moon, 
  Search, 
  Sparkles, 
  ArrowUpRight, 
  UserCheck, 
  ShieldCheck, 
  Compass,
  Radio,
  Youtube,
  Twitter,
  Instagram
} from 'lucide-react';
import { motion } from 'framer-motion';
import ConstellationCanvas from '../components/ConstellationCanvas';
import { directoryProfiles } from '../lib/supabase/fallbackData';
import { Profile } from '../lib/supabase/types';
import { createClient } from '../lib/supabase/client';

export default function DirectoryHomePage() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('SEMUA');
  const [profiles, setProfiles] = useState<Profile[]>(directoryProfiles);

  useEffect(() => {
    // Attempt Supabase Fetch for Profiles Directory
    const fetchProfiles = async () => {
      try {
        const supabase = createClient();
        const { data, error } = await supabase.from('profiles').select('*').order('created_at', { ascending: false });
        if (data && data.length > 0 && !error) {
          setProfiles(data);
        }
      } catch {
        // Fallback to local curated profiles
      }
    };
    fetchProfiles();
  }, []);

  const categories = ['SEMUA', 'THE VOICES', 'THE STRATEGISTS', 'THE ENTERTAINERS'];

  const filteredProfiles = profiles.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'SEMUA' || p.category.toUpperCase() === selectedCategory.toUpperCase();
    return matchesSearch && matchesCategory;
  });

  const bgCanvas = isDarkMode ? 'particle-wave-dark text-[#EDE8DC]' : 'particle-wave-light text-[#0A0E1A]';
  const cardClass = isDarkMode ? 'spotlight-card-dark' : 'spotlight-card-light';
  const mutedText = isDarkMode ? 'text-[#8A93A8]' : 'text-[#64748B]';
  const navBg = isDarkMode ? 'bg-[#0A0E1A]/90 border-white/[0.08]' : 'bg-[#F9F8F5]/90 border-black/[0.08]';

  return (
    <div className={`min-h-screen ${bgCanvas} font-sans antialiased selection:bg-[#E11D48] selection:text-white relative`}>
      
      {/* ECIDNI FLOATING RED CONSTELLATION WAVE */}
      <ConstellationCanvas isDarkMode={isDarkMode} />

      {/* HEADER NAVIGATION */}
      <header className={`sticky top-0 z-40 backdrop-blur-md border-b px-6 py-4 transition-colors ${navBg}`}>
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          
          {/* Wordmark */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <span className="font-display text-2xl md:text-3xl tracking-wide uppercase">
              SEKTOR LOKAL
            </span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#E11D48] group-hover:scale-125 transition-transform" />
          </Link>

          {/* Theme Switcher */}
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

        </div>
      </header>

      {/* MAIN DIRECTORY HERO & GRID */}
      <main className="max-w-6xl mx-auto px-6 py-12 md:py-20 relative z-10 space-y-12">
        
        {/* DIRECTORY HERO TITLE */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-xs font-mono tracking-widest text-[#E11D48] uppercase font-bold">
            DIREKTORI KEBAANGAAN WARGA INDONESIA
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display uppercase tracking-tight leading-[0.95]">
            TOKOH & KREATOR DISRUPTIF LOKAL
          </h1>
          <p className={`text-base sm:text-lg leading-relaxed ${mutedText}`}>
            Kurasi independen profil penggerak nalar kritis, musisi katarsis, dan pemimpin ideologi publik era modern.
          </p>
        </div>

        {/* SEARCH & CATEGORY FILTER BAR */}
        <div className="space-y-6 max-w-4xl mx-auto">
          
          {/* Search Box */}
          <div className="relative">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Cari tokoh, kata kunci, atau bidang (misal: Ferry, Stoikisme, Musik)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-12 pr-4 py-3.5 rounded-2xl border text-sm focus:outline-none focus:border-[#E11D48] transition-all shadow-sm ${
                isDarkMode ? 'bg-[#111726]/80 border-white/10 text-white placeholder-gray-500' : 'bg-white border-black/10 text-black placeholder-gray-400'
              }`}
            />
          </div>

          {/* Category Tabs */}
          <div className="flex items-center justify-center gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#E11D48] text-white shadow-md shadow-[#E11D48]/30'
                    : (isDarkMode ? 'bg-[#111726] border border-white/10 text-gray-400 hover:text-white' : 'bg-white border border-black/10 text-gray-600 hover:text-black')
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* CREATOR CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
          {filteredProfiles.map((p) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className={`rounded-3xl border overflow-hidden flex flex-col justify-between p-6 space-y-6 shadow-md ${cardClass}`}
            >
              {/* Top Profile Header */}
              <div className="space-y-5">
                
                {/* Photo & Category Pill */}
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-900 group">
                  <Image 
                    src={p.photo_url} 
                    alt={p.name} 
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover filter grayscale contrast-115 group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${
                    isDarkMode ? 'from-[#0A0E1A]/90 via-transparent' : 'from-black/40 via-transparent'
                  }`} />
                  
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-mono uppercase tracking-widest text-white/90 border border-white/10 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E11D48] animate-pulse" />
                    <span>{p.category}</span>
                  </div>
                </div>

                {/* Name & Title */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-display uppercase tracking-tight text-inherit">
                      {p.name}
                    </h2>
                    <ShieldCheck className="w-5 h-5 text-[#E11D48]" />
                  </div>
                  <p className="font-editorial italic text-xs font-semibold text-[#E11D48]">
                    {p.title}
                  </p>
                </div>

                {/* Short Bio Snippet */}
                <p className={`text-xs leading-relaxed line-clamp-3 ${mutedText}`}>
                  {p.bio_paragraphs[0]}
                </p>

              </div>

              {/* Action Button */}
              <div className="pt-2 border-t border-inherit/10">
                <Link
                  href={`/profil/${p.slug}`}
                  className="w-full py-3 bg-[#E11D48] hover:bg-[#BE123C] text-white font-bold text-xs rounded-xl transition-colors flex items-center justify-center gap-2 shadow-sm shadow-[#E11D48]/30"
                >
                  <span>BUKA PROFIL MANAKARYA</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>

            </motion.div>
          ))}
        </div>

        {filteredProfiles.length === 0 && (
          <div className="text-center py-16 space-y-3">
            <p className="font-display text-xl uppercase">TOKOH TIDAK DITEMUKAN</p>
            <p className={`text-xs ${mutedText}`}>Coba kata kunci pencarian lain atau pilih kategori Semua.</p>
          </div>
        )}

      </main>

      {/* FOOTER */}
      <footer className={`border-t py-12 px-6 mt-20 ${isDarkMode ? 'border-white/[0.08]' : 'border-black/[0.08]'}`}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <div className="flex items-center gap-2 font-display text-lg text-inherit">
            <span>SEKTOR LOKAL</span>
            <span className="w-2 h-2 rounded-full bg-[#E11D48]" />
          </div>
          <p className={mutedText}>
            © 2026 Sektor Lokal. Dokumentasi Kurasi Kebanggaan Warga Indonesia Era Pop Modern.
          </p>
        </div>
      </footer>

    </div>
  );
}
