'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { 
  Search, 
  Sparkles, 
  ArrowUpRight, 
  Users, 
  ShieldCheck, 
  Filter,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ConstellationCanvas from '../../../components/ConstellationCanvas';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Breadcrumbs from '../../../components/Breadcrumbs';
import { directoryProfiles } from '../../../lib/supabase/fallbackData';
import { Profile } from '../../../lib/supabase/types';
import { createClient } from '../../../lib/supabase/client';

function WargaLokalArchiveContent() {
  const searchParams = useSearchParams();
  const initialLaci = searchParams?.get('laci') || 'SEMUA';

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLaci, setSelectedLaci] = useState<string>(initialLaci);
  const [profiles, setProfiles] = useState<Profile[]>(directoryProfiles);

  const laciList = [
    'SEMUA',
    'Penjaga Nalar',
    'Penyelamat Bumi',
    'Pembangun Sistem',
    'Pejuang Akar Rumput',
    'Arsitek Usaha Mandiri',
    'Perawat Jiwa & Rasa',
    'Penjaga Tawa',
    'Pencerah Generasi',
    'Duta Talenta',
    'Panggung Ekspresi'
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

  const bgCanvas = isDarkMode ? 'particle-wave-dark text-[#EDE8DC]' : 'particle-wave-light text-[#0A0E1A]';
  const cardClass = isDarkMode ? 'spotlight-card-dark' : 'spotlight-card-light';
  const mutedText = isDarkMode ? 'text-[#8A93A8]' : 'text-[#64748B]';

  return (
    <div className={`min-h-screen ${bgCanvas} font-sans antialiased selection:bg-[#E11D48] selection:text-white relative flex flex-col justify-between`}>
      
      <ConstellationCanvas isDarkMode={isDarkMode} />

      <Navbar 
        isDarkMode={isDarkMode} 
        onToggleDarkMode={() => setIsDarkMode(!isDarkMode)} 
      />

      <main className="max-w-6xl mx-auto px-6 relative z-10 space-y-8 py-10 flex-1 w-full">
        
        {/* Breadcrumbs */}
        <Breadcrumbs 
          items={[
            { label: 'Arsip', href: '/arsip' },
            { label: 'Warga Lokal (100 Tokoh)' }
          ]} 
          isDarkMode={isDarkMode}
        />

        {/* Header Section */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#E11D48] font-bold uppercase tracking-widest">
            <Users className="w-4 h-4" />
            <span>KATALOG INDEPENDEN 100 WARGA NUSANTARA</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-display uppercase tracking-tight leading-[0.95]">
            100 WARGA PENJAGA AKAL SEHAT & PERADABAN
          </h1>
          <p className={`text-base leading-relaxed ${mutedText}`}>
            Mendokumentasikan rekam jejak, dialektika pemikiran, dan aksi nyata 100 warga lintas 10 Laci Peradaban. Dari pejuang adat di rimba pedalaman hingga ilmuwan rekayasa vaksin dunia.
          </p>
        </div>

        {/* SEARCH & FILTER CONTROLS */}
        <div className="space-y-4 pt-2">
          
          {/* Search Bar */}
          <div className="relative max-w-xl">
            <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 opacity-40 text-inherit" />
            <input 
              type="text" 
              placeholder="Cari nama tokoh, peran, atau kata kunci gagasan..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-11 pr-10 py-3.5 rounded-2xl border text-sm transition focus:outline-none focus:border-[#E11D48] ${
                isDarkMode 
                  ? 'bg-[#111726]/80 border-white/10 text-[#EDE8DC] placeholder-white/30' 
                  : 'bg-white border-black/10 text-[#0A0E1A] placeholder-black/30'
              }`}
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-inherit/20 text-inherit opacity-60"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* 10 Laci Filter Switcher (Horizontal Scrollable Pills) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none font-mono text-xs">
            <span className="text-[11px] font-bold text-[#E11D48] uppercase shrink-0 mr-1 flex items-center gap-1">
              <Filter className="w-3 h-3" />
              <span>LACI:</span>
            </span>
            {laciList.map((laci) => {
              const isSelected = selectedLaci.toLowerCase() === laci.toLowerCase();
              return (
                <button
                  key={laci}
                  onClick={() => setSelectedLaci(laci)}
                  className={`px-3.5 py-1.5 rounded-full border transition-all shrink-0 uppercase font-bold tracking-wider ${
                    isSelected
                      ? 'bg-[#E11D48] border-[#E11D48] text-white shadow-sm shadow-[#E11D48]/40'
                      : isDarkMode
                        ? 'border-white/10 bg-[#111726]/50 text-[#8A93A8] hover:border-[#E11D48] hover:text-white'
                        : 'border-black/10 bg-white text-[#64748B] hover:border-[#E11D48] hover:text-black'
                  }`}
                >
                  {laci}
                </button>
              );
            })}
          </div>

          {/* Result Counter */}
          <div className="flex items-center justify-between text-xs font-mono border-t pt-3 border-inherit/10">
            <span className={mutedText}>
              Menampilkan <span className="font-bold text-[#E11D48]">{filteredProfiles.length}</span> dari {profiles.length} Warga Terkurasi
            </span>
            {selectedLaci !== 'SEMUA' && (
              <button 
                onClick={() => setSelectedLaci('SEMUA')}
                className="text-[#E11D48] hover:underline font-bold"
              >
                Reset Filter
              </button>
            )}
          </div>

        </div>

        {/* 100 WARGA BENTO GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
          {filteredProfiles.map((p) => (
            <div 
              key={p.id || p.slug}
              className={`p-6 sm:p-7 rounded-3xl border flex flex-col justify-between space-y-6 transition-all duration-300 hover:scale-[1.01] ${cardClass}`}
            >
              <div className="space-y-4">
                {/* Photo and Badge */}
                <div className="flex items-start justify-between gap-4">
                  <div className="relative w-20 h-24 sm:w-24 sm:h-28 rounded-2xl overflow-hidden bg-neutral-900 shrink-0 border border-inherit/10">
                    <Image 
                      src={p.photo_url || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80'} 
                      alt={p.name} 
                      fill 
                      sizes="96px"
                      className="object-cover filter grayscale contrast-110"
                    />
                  </div>

                  <div className="space-y-1.5 text-right">
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#E11D48]/10 text-[#E11D48] text-[10px] font-mono font-bold border border-[#E11D48]/20 uppercase">
                      {p.category || 'Warga Lokal'}
                    </span>
                    <div className="flex items-center justify-end gap-1 text-[10px] font-mono text-emerald-500 font-bold">
                      <ShieldCheck className="w-3 h-3" />
                      <span>TERVERIFIKASI</span>
                    </div>
                  </div>
                </div>

                {/* Name & Title */}
                <div className="space-y-1">
                  <h3 className="font-display uppercase text-2xl text-inherit leading-tight">
                    {p.name}
                  </h3>
                  <p className="font-editorial italic text-sm text-[#E11D48] font-semibold line-clamp-1">
                    {p.title}
                  </p>
                </div>

                {/* Quote / Bio */}
                <blockquote className={`text-xs leading-relaxed line-clamp-3 italic ${mutedText} border-l-2 border-[#E11D48]/40 pl-3`}>
                  &ldquo;{p.quote || p.bio_paragraphs?.[0] || 'Kemandirian peradaban lokal harus berakar pada nalar sehat dan aksi nyata di tanah air.'}&rdquo;
                </blockquote>
              </div>

              {/* Action Button */}
              <div className="pt-2 border-t border-inherit/10">
                <Link 
                  href={`/profil/${p.slug}`}
                  className="w-full py-3 bg-[#E11D48] hover:bg-[#BE123C] text-white font-mono font-bold text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-1.5 shadow-md shadow-[#E11D48]/30 transition"
                >
                  <span>Buka Berkas Profil</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>

            </div>
          ))}
        </div>

        {filteredProfiles.length === 0 && (
          <div className={`p-12 rounded-3xl border text-center space-y-3 ${cardClass}`}>
            <p className="text-lg font-display uppercase">Tidak Ada Warga yang Cocok</p>
            <p className={`text-xs font-mono ${mutedText}`}>
              Coba gunakan kata kunci pencarian lain atau reset filter laci kategori.
            </p>
            <button 
              onClick={() => { setSearchQuery(''); setSelectedLaci('SEMUA'); }}
              className="px-4 py-2 rounded-xl bg-[#E11D48] text-white text-xs font-mono font-bold uppercase"
            >
              Reset Pencarian
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
      <div className="min-h-screen bg-[#0A0E1A] text-[#EDE8DC] flex items-center justify-center font-mono text-xs text-[#E11D48]">
        <div className="w-6 h-6 border-2 border-[#E11D48] border-t-transparent rounded-full animate-spin mr-3" />
        <span>MEMUAT KATALOG WARGA LOKAL...</span>
      </div>
    }>
      <WargaLokalArchiveContent />
    </Suspense>
  );
}
