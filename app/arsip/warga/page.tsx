'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Search, X, CheckCircle2 } from 'lucide-react';
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

  const bgClass = isDarkMode ? 'bg-[#07090E] text-[#F5EFEB]' : 'bg-[#F8F5EE] text-[#07090E]';
  const borderClass = isDarkMode ? 'border-white/10' : 'border-black/10';
  const cardBg = isDarkMode ? 'bg-[#0E131F]' : 'bg-white';
  const mutedText = isDarkMode ? 'text-white/50' : 'text-black/50';

  return (
    <div className={`min-h-screen ${bgClass} font-sans antialiased selection:bg-[#E11D48] selection:text-white flex flex-col`}>
      <Navbar isDarkMode={isDarkMode} onToggleDarkMode={() => setIsDarkMode(!isDarkMode)} />

      <main className="flex-1 w-full max-w-7xl mx-auto px-6 py-12 sm:py-20 flex flex-col gap-12">
        
        <header className="space-y-6 max-w-4xl border-b pb-8 border-current/10">
          <div className="text-xs font-mono text-[#E11D48] font-bold uppercase tracking-widest">
            Katalog 100 Warga Lokal // 10 Laci Kurasi
          </div>
          <h1 className="text-5xl sm:text-7xl font-display uppercase tracking-tight leading-[0.9]">
            Daftar <br/> Penemuan
          </h1>
          <p className={`text-base sm:text-xl font-editorial italic ${mutedText}`}>
            Membaca cerita orang-orang yang memilih bertindak di bidangnya masing-masing.
          </p>
        </header>

        {/* SEARCH & FILTERS */}
        <section className="space-y-8">
          <div className="relative max-w-2xl">
            <Search className={`w-5 h-5 absolute left-0 top-1/2 -translate-y-1/2 ${mutedText}`} />
            <input 
              type="text" 
              placeholder="Cari nama, inisiatif, atau profesi..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-8 pr-10 py-2 bg-transparent text-lg sm:text-xl font-editorial border-b ${borderClass} focus:outline-none focus:border-[#E11D48] transition-colors rounded-none`}
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="absolute right-0 top-1/2 -translate-y-1/2 opacity-50 hover:opacity-100">
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-3 border-b pb-4 border-current/10">
            {laciList.map((laci) => {
              const isSelected = selectedLaci.toLowerCase() === laci.toLowerCase();
              return (
                <button
                  key={laci}
                  onClick={() => setSelectedLaci(laci)}
                  className={`text-xs font-mono uppercase tracking-wider pb-1 border-b-2 transition-colors ${
                    isSelected ? 'border-[#E11D48] text-[#E11D48] font-bold' : 'border-transparent hover:border-current/30 text-current/60'
                  }`}
                >
                  {laci}
                </button>
              );
            })}
          </div>
        </section>

        {/* GRID */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
          {filteredProfiles.map((p, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              key={p.id || p.slug}
              className={`group flex flex-col space-y-4 ${cardBg} p-4 border ${borderClass}`}
            >
              <Link href={`/profil/${p.slug}`} className="block relative aspect-[3/4] overflow-hidden bg-black w-full">
                <Image 
                  src={p.photo_url || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80'} 
                  alt={p.name} 
                  fill 
                  className="object-cover portrait-bw transition-transform duration-700 group-hover:scale-105"
                />
              </Link>
              
              <div className="space-y-1">
                <div className="flex justify-between items-start gap-2">
                  <h3 className="font-display text-xl uppercase leading-none group-hover:text-[#E11D48] transition-colors">
                    <Link href={`/profil/${p.slug}`}>{p.name}</Link>
                  </h3>
                  {p.verified !== false && (
                    <CheckCircle2 className="w-4 h-4 text-[#E11D48] shrink-0" />
                  )}
                </div>
                <p className="font-editorial text-sm italic text-current/70">{p.title}</p>
                <div className="pt-2 text-[10px] font-mono uppercase tracking-widest text-[#E11D48]">
                  {p.category}
                </div>
              </div>
            </motion.div>
          ))}
        </section>

        {filteredProfiles.length === 0 && (
          <div className="py-20 text-center font-display text-2xl uppercase text-current/40">
            Nihil. Coba kata kunci lain.
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
        Memuat...
      </div>
    }>
      <WargaLokalArchiveContent />
    </Suspense>
  );
}
