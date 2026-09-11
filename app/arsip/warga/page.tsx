'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Search, X, CheckCircle2, Radio, ArrowRight, Filter } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { directoryProfiles } from '../../../lib/supabase/fallbackData';
import { Profile } from '../../../lib/supabase/types';
import { createClient } from '../../../lib/supabase/client';

function WargaLokalArchiveContent() {
  const searchParams = useSearchParams();
  const initialLaci = searchParams?.get('laci') || 'SEMUA';

  const [isDarkMode, setIsDarkMode] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLaci, setSelectedLaci] = useState<string>(initialLaci);
  const [profiles, setProfiles] = useState<Profile[]>(directoryProfiles);

  const laciList = [
    'SEMUA', 'Penjaga Nalar', 'Penyelamat Bumi', 'Pembangun Sistem',
    'Pejuang Akar Rumput', 'Arsitek Usaha Mandiri', 'Perawat Jiwa & Rasa',
    'Penjaga Tawa', 'Pencerah Generasi', 'Duta Talenta', 'Panggung Ekspresi'
  ];

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const supabase = createClient();
        const { data, error } = await supabase
          .from('profiles_warga')
          .select('*')
          .order('name', { ascending: true });
        
        if (data && data.length > 0 && !error) {
          setProfiles(data);
        }
      } catch {
        // use fallback
      }
    };
    fetchProfiles();
  }, []);

  const filteredProfiles = profiles.filter(p => {
    const matchesSearch = (p.name || '').toLowerCase().includes(searchQuery.toLowerCase()) || 
                          (p.title || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
                          (p.quote || '').toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesLaci = selectedLaci === 'SEMUA' || 
                        (p.category || '').toLowerCase() === selectedLaci.toLowerCase() ||
                        (p.title || '').toLowerCase().includes(selectedLaci.toLowerCase());
    
    return matchesSearch && matchesLaci;
  });

  const bgClass = isDarkMode ? 'bg-[#07090E] text-[#F5EFEB]' : 'bg-[#F8F5EE] text-[#0A0E1A]';
  const borderClass = isDarkMode ? 'border-white/10' : 'border-black/10';
  const cardBg = isDarkMode ? 'bg-[#0E131F]' : 'bg-white';
  const mutedText = isDarkMode ? 'text-[#8E95A5]' : 'text-[#64748B]';

  return (
    <div className={`min-h-screen ${bgClass} font-sans antialiased selection:bg-[#E11D48] selection:text-white flex flex-col`}>
      <Navbar isDarkMode={isDarkMode} onToggleDarkMode={() => setIsDarkMode(!isDarkMode)} />

      <main className="flex-1 w-full max-w-7xl mx-auto px-6 py-12 sm:py-16 flex flex-col gap-10">
        
        {/* Page Header */}
        <header className="space-y-6 max-w-4xl border-b pb-8 border-inherit/10">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#E11D48] font-bold uppercase tracking-widest">
            <Radio className="w-3.5 h-3.5 animate-pulse" />
            <span>KATALOG 100 WARGA LOKAL // 10 LACI KURASI</span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display uppercase tracking-tight leading-[0.92]">
            DIREKTORI <br/> PENEMUAN WARGA
          </h1>
          <p className={`text-base sm:text-xl font-editorial italic descender-safe ${mutedText}`}>
            Membaca rekam jejak orang-orang yang memilih berbuat dan berdaulat di bidangnya masing-masing.
          </p>
        </header>

        {/* Search & Telemetry Filter Bar */}
        <section className="space-y-6">
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
            
            {/* Search Input */}
            <div className="relative flex-1 max-w-xl">
              <Search className={`w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 ${mutedText}`} />
              <input 
                type="text" 
                placeholder="Cari nama tokoh, profesi, atau gagasan..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full pl-10 pr-10 py-3 bg-transparent text-base sm:text-lg font-sans border ${borderClass} focus:outline-none focus:border-[#E11D48] transition-colors rounded`}
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')} 
                  className="absolute right-3 top-1/2 -translate-y-1/2 opacity-50 hover:opacity-100 p-1"
                  aria-label="Hapus Pencarian"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Results Count Badge */}
            <div className="font-mono text-xs font-bold uppercase tracking-wider text-[#E11D48] flex items-center gap-2 shrink-0">
              <span>HASIL: {filteredProfiles.length} / 100 WARGA</span>
            </div>

          </div>

          {/* Laci Category Filter Pills */}
          <div className="flex flex-wrap gap-2 pt-2 border-b pb-6 border-inherit/10">
            {laciList.map((laci) => {
              const isSelected = selectedLaci.toLowerCase() === laci.toLowerCase();
              return (
                <button
                  key={laci}
                  onClick={() => setSelectedLaci(laci)}
                  className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider border rounded transition-all tactile-btn ${
                    isSelected 
                      ? 'bg-[#E11D48] text-white border-[#E11D48] font-bold' 
                      : 'border-inherit/15 hover:border-[#E11D48] opacity-75 hover:opacity-100'
                  }`}
                >
                  {laci}
                </button>
              );
            })}
          </div>
        </section>

        {/* Archival Profile Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProfiles.map((p, idx) => (
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
                  <div className="absolute top-2 left-2 px-2 py-0.5 bg-black/80 text-white font-mono text-[9px] uppercase tracking-widest">
                    FIG. {String(idx + 1).padStart(2, '0')}
                  </div>
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
        </section>

        {/* Empty State */}
        {filteredProfiles.length === 0 && (
          <div className="py-20 text-center space-y-4">
            <p className="font-display text-2xl uppercase text-[#8E95A5]">
              Tidak ditemukan profil untuk "{searchQuery}"
            </p>
            <button 
              onClick={() => { setSearchQuery(''); setSelectedLaci('SEMUA'); }}
              className="px-5 py-2.5 bg-[#E11D48] text-white font-mono text-xs uppercase font-bold tracking-widest hover:bg-[#BE123C] transition-colors tactile-btn"
            >
              RESET PENCARIAN & KATEGORI
            </button>
          </div>
        )}

      </main>
      
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}

export default function WargaLokalArchivePage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#07090E] text-[#E11D48] flex items-center justify-center font-mono text-xs uppercase">
        MEMUAT DIREKTORI...
      </div>
    }>
      <WargaLokalArchiveContent />
    </Suspense>
  );
}
