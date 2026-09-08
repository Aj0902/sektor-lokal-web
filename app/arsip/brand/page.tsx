'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Building2, 
  Search, 
  ArrowUpRight, 
  Filter, 
  X, 
  ShieldCheck, 
  MapPin, 
  UserCheck,
  ExternalLink,
  Sparkles,
  Compass,
  CheckCircle2,
  Layers
} from 'lucide-react';
import ConstellationCanvas from '../../../components/ConstellationCanvas';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Breadcrumbs from '../../../components/Breadcrumbs';

interface BrandItem {
  id: string;
  name: string;
  slug: string;
  category: string;
  origin: string;
  founder: string;
  founderSlug?: string;
  usp: string;
  description: string;
  linkUrl: string;
  imageUrl: string;
  verified: boolean;
}

export default function BrandLokalArchivePage() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('SEMUA');

  const categories = [
    'SEMUA',
    'Kriya & Mobilitas Lestari',
    'Pangan Pusaka Nusantara',
    'Fesyen & Manufaktur Etis',
    'Deep-Tech & Inovasi Sipil',
    'Media & Ekosistem Kreatif'
  ];

  const brandList: BrandItem[] = [
    {
      id: 'b1',
      name: 'Spedagi Bamboo Bicycles',
      slug: 'spedagi-bamboo',
      category: 'Kriya & Mobilitas Lestari',
      origin: 'Kandangan, Temanggung',
      founder: 'Singgih Susilo Kartono',
      founderSlug: 'singgih-susilo-kartono',
      usp: 'Sepeda bambu petung berstandar uji jalan Jerman berbasis revitalisasi ekonomi dusun.',
      description: 'Mengolah bambu petung desa menjadi sepeda ergonomis berstandar uji kelayakan Jepang dan penghargaan desain internasional (Good Design Award).',
      linkUrl: 'https://spedagi.com',
      imageUrl: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=800&q=80',
      verified: true
    },
    {
      id: 'b2',
      name: 'JAVARA Indigenous Indonesia',
      slug: 'javara-indigenous',
      category: 'Pangan Pusaka Nusantara',
      origin: 'Bekasi / Nusantara',
      founder: 'Helianti Hilman',
      founderSlug: 'helianti-hilman',
      usp: 'Pelestari benih pusaka pangan dan ekspor beras organik ke 30+ negara.',
      description: 'Menghubungkan puluhan ribu petani adat dengan pasar pangan sehat modern dunia melalui 900+ produk pangan alami bersertifikasi internasional.',
      linkUrl: 'https://javara.co.id',
      imageUrl: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800&q=80',
      verified: true
    },
    {
      id: 'b3',
      name: 'Du\'Anyam Lontar',
      slug: 'duanyam-lontar',
      category: 'Fesyen & Manufaktur Etis',
      origin: 'Flores Timur, NTT',
      founder: 'Azalea Ayuningtyas',
      founderSlug: 'azalea-ayuningtyas',
      usp: 'Kerajinan anyaman daun lontar yang langsung membiayai nutrisi dan kesehatan ibu desa.',
      description: 'Membawa anyaman tradisional nenek moyang Flores ke ajang merchandise resmi dunia sembari memutus rantai malnutrisi ibu dan balita pedalaman.',
      linkUrl: 'https://duanyam.com',
      imageUrl: 'https://images.unsplash.com/photo-1590736704728-f4730bb30770?w=800&q=80',
      verified: true
    },
    {
      id: 'b4',
      name: 'Brodo Footwear',
      slug: 'brodo-footwear',
      category: 'Fesyen & Manufaktur Etis',
      origin: 'Bandung, Jawa Barat',
      founder: 'Yukka Harsono',
      founderSlug: 'yukka-harsono',
      usp: 'Kebangkitan manufaktur alas kaki pria berbasis sentra pengrajin Cibaduyut.',
      description: 'Menghadirkan sepatu kulit berkualitas tinggi dengan harga rasional langsung ke konsumen, memberdayakan ratusan pengrajin sepatu lokal Jawa Barat.',
      linkUrl: 'https://bro.do',
      imageUrl: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80',
      verified: true
    },
    {
      id: 'b5',
      name: 'Pipiltin Cocoa',
      slug: 'pipiltin-cocoa',
      category: 'Pangan Pusaka Nusantara',
      origin: 'Jakarta / Aceh / Bali / Flores',
      founder: 'Tissa Aunilla',
      founderSlug: 'tissa-aunilla',
      usp: 'Pengolahan cokelat bean-to-bar single-origin langsung bermitra dengan petani nusantara.',
      description: 'Mengedukasi kekayaan profil rasa kakao lokal dari Aceh hingga Papua dengan harga beli di atas rata-rata pasar demi kesejahteraan petani.',
      linkUrl: 'https://pipiltincocoa.com',
      imageUrl: 'https://images.unsplash.com/photo-1511381939415-e44015466834?w=800&q=80',
      verified: true
    },
    {
      id: 'b6',
      name: 'Batik Kultur',
      slug: 'batik-kultur',
      category: 'Fesyen & Manufaktur Etis',
      origin: 'Semarang, Jawa Tengah',
      founder: 'Dea Valencia',
      founderSlug: 'dea-valencia',
      usp: 'Busana batik modern dengan 50%+ tenaga kerja perajin penyandang disabilitas.',
      description: 'Melestarikan wastra batik tradisional lewat busana siap pakai berstandar butik internasional dengan model bisnis mandiri tanpa ketergantungan donasi.',
      linkUrl: 'https://batikkultur.com',
      imageUrl: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=800&q=80',
      verified: true
    },
    {
      id: 'b7',
      name: 'Hirka Footwear',
      slug: 'hirka-footwear',
      category: 'Fesyen & Manufaktur Etis',
      origin: 'Bandung, Jawa Barat',
      founder: 'Nurman Farieka Ramdhany',
      founderSlug: 'nurman-farieka-ramdhany',
      usp: 'Inovasi pengolahan limbah kulit ceker ayam menjadi material sepatu eksotis.',
      description: 'Mengubah limbah sisa makanan restoran menjadi kulit bertekstur mirip reptil yang ramah lingkungan dan bernilai tambah ekspor tinggi.',
      linkUrl: 'https://hirkaofficial.com',
      imageUrl: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&q=80',
      verified: true
    },
    {
      id: 'b8',
      name: 'CTech Labs Edwar',
      slug: 'ctech-labs',
      category: 'Deep-Tech & Inovasi Sipil',
      origin: 'Tangerang, Banten',
      founder: 'Dr. Warsito P. Taruno',
      founderSlug: 'warsito-p-taruno',
      usp: 'Paten tomografi volumetrik 4D tercepat dunia untuk eksplorasi energi dan terapi kanker.',
      description: 'Laboratorium riset sains mandiri yang memegang paten fundamental medan listrik kapasitif berkecepatan tinggi yang diadopsi NASA.',
      linkUrl: 'https://c-techlabs.com',
      imageUrl: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?w=800&q=80',
      verified: true
    },
    {
      id: 'b9',
      name: 'Kata.ai',
      slug: 'kata-ai',
      category: 'Deep-Tech & Inovasi Sipil',
      origin: 'Jakarta',
      founder: 'Irzan Raditya',
      founderSlug: 'irzan-raditya',
      usp: 'Platform AI percakapan cerdas pertama yang dirancang memahami dialek percakapan Indonesia.',
      description: 'Mengolah jutaan percakapan bisnis pelanggan menggunakan Natural Language Understanding yang peka terhadap konteks lokal.',
      linkUrl: 'https://kata.ai',
      imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80',
      verified: true
    },
    {
      id: 'b10',
      name: 'Watchdoc Documentary',
      slug: 'watchdoc-documentary',
      category: 'Media & Ekosistem Kreatif',
      origin: 'Jakarta',
      founder: 'Dandhy Dwi Laksono',
      founderSlug: 'dandhy-dwi-laksono',
      usp: 'Produksi jurnalisme audio-visual investigasi independen berlisensi terbuka.',
      description: 'Memproduksi dokumenter forensik lapangan berbasis koperasi pekerja media dan pemutaran layar tancap swadaya warga (peraih Ramon Magsaysay).',
      linkUrl: 'https://watchdoc.co.id',
      imageUrl: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&q=80',
      verified: true
    }
  ];

  const filteredBrands = brandList.filter(b => {
    const matchCat = selectedCategory === 'SEMUA' || b.category === selectedCategory;
    const matchSearch = b.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        b.origin.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        b.founder.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        b.usp.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        b.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  const bgCanvas = isDarkMode ? 'particle-wave-dark text-[#F5EFEB]' : 'particle-wave-light text-[#0A0E1A]';
  const cardClass = isDarkMode ? 'spotlight-card-dark' : 'spotlight-card-light';
  const mutedText = isDarkMode ? 'text-[#8E95A5]' : 'text-[#64748B]';

  return (
    <div className={`min-h-screen ${bgCanvas} font-sans antialiased selection:bg-[#E11D48] selection:text-white relative flex flex-col justify-between`}>
      
      <ConstellationCanvas isDarkMode={isDarkMode} />

      <Navbar 
        isDarkMode={isDarkMode} 
        onToggleDarkMode={() => setIsDarkMode(!isDarkMode)} 
      />

      <main className="max-w-6xl mx-auto px-6 relative z-10 space-y-10 py-10 flex-1 w-full">
        
        {/* Breadcrumbs */}
        <Breadcrumbs 
          items={[
            { label: 'Pusat Penemuan', href: '/arsip' },
            { label: 'Brand Lokal & Ekosistem Usaha' }
          ]} 
          isDarkMode={isDarkMode}
        />

        {/* Header Title */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#E11D48] font-bold uppercase tracking-widest">
            <Layers className="w-4 h-4" />
            <span>KARYA, PROSES, & EKOSISTEM USAHA</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-display uppercase tracking-tight leading-[0.94]">
            KARYA & JENAMA YANG BERAKAR DI SINI
          </h1>
          <p className={`text-base sm:text-lg leading-relaxed ${mutedText}`}>
            Brand Lokal bukan etalase jualan semata. Kami menelusuri bagaimana sebuah produk dibuat: siapa petaninya, bagaimana bahannya dipanen secara lestari, dan mengapa karya ini memiliki alasan kuat untuk ada di sekitar kita.
          </p>
        </div>

        {/* SEARCH & FILTER CONTROLS */}
        <div className="space-y-4 pt-2">
          
          <div className="relative max-w-xl">
            <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 opacity-40 text-inherit" />
            <input 
              type="text" 
              placeholder="Cari nama brand, bahan baku, asal kota, atau nama pendiri..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-11 pr-10 py-3.5 rounded-2xl border text-sm transition focus:outline-none focus:border-[#E11D48] ${
                isDarkMode 
                  ? 'bg-[#0E131F]/90 border-white/10 text-[#F5EFEB] placeholder-white/30' 
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

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none font-mono text-xs">
            <span className="text-[11px] font-bold text-[#E11D48] uppercase shrink-0 mr-1 flex items-center gap-1">
              <Filter className="w-3 h-3" />
              <span>SEKTOR:</span>
            </span>
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full border transition-all shrink-0 uppercase font-bold tracking-wider ${
                    isSelected
                      ? 'bg-[#E11D48] border-[#E11D48] text-white shadow-crimson-subtle'
                      : isDarkMode
                        ? 'border-white/10 bg-[#0E131F]/60 text-[#8E95A5] hover:border-[#E11D48] hover:text-white'
                        : 'border-black/10 bg-white text-[#64748B] hover:border-[#E11D48] hover:text-black'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          <div className="flex items-center justify-between text-xs font-mono border-t pt-3 border-inherit/10">
            <span className={mutedText}>
              Menampilkan <span className="font-bold text-[#E11D48]">{filteredBrands.length}</span> Jenama Mandiri Terkurasi
            </span>
            {selectedCategory !== 'SEMUA' && (
              <button 
                onClick={() => setSelectedCategory('SEMUA')}
                className="text-[#E11D48] hover:underline font-bold"
              >
                Reset Filter Sektor
              </button>
            )}
          </div>

        </div>

        {/* BRANDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          {filteredBrands.map((brand) => (
            <div 
              key={brand.id}
              className={`p-6 sm:p-8 rounded-3xl border flex flex-col justify-between space-y-6 group transition-all duration-300 hover:scale-[1.01] ${cardClass}`}
            >
              <div className="space-y-4">
                
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-[#E11D48] uppercase tracking-widest font-bold">
                      {brand.category}
                    </span>
                    <h3 className="font-display uppercase text-2xl text-inherit group-hover:text-[#E11D48] transition">
                      {brand.name}
                    </h3>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-mono shrink-0">
                    <span className="px-2.5 py-0.5 rounded-full border border-inherit/15 text-inherit/70 text-[10px] flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#E11D48]" />
                      <span>{brand.origin}</span>
                    </span>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl border border-inherit/10 bg-inherit/40 text-xs leading-relaxed space-y-1">
                  <span className="font-mono text-[10px] text-[#E11D48] font-bold block uppercase">
                    PROSES & KEUNIKAN NILAI:
                  </span>
                  <p className="text-inherit/90">{brand.usp}</p>
                </div>

                <p className={`text-xs leading-relaxed ${mutedText}`}>
                  {brand.description}
                </p>

                {brand.founder && (
                  <div className="pt-3 border-t border-inherit/10 flex items-center justify-between text-xs font-mono">
                    <span className={mutedText}>Didirikan oleh:</span>
                    {brand.founderSlug ? (
                      <Link 
                        href={`/profil/${brand.founderSlug}`}
                        className="font-bold text-[#E11D48] hover:underline flex items-center gap-1"
                      >
                        <UserCheck className="w-3.5 h-3.5" />
                        <span>{brand.founder}</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>
                    ) : (
                      <span className="font-bold text-inherit">{brand.founder}</span>
                    )}
                  </div>
                )}

              </div>

              {/* Action Link */}
              <div className="pt-2">
                <a 
                  href={brand.linkUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className={`w-full py-3 rounded-xl border border-inherit/20 hover:border-[#E11D48] hover:text-[#E11D48] text-xs font-mono font-bold uppercase transition flex items-center justify-center gap-1.5 ${
                    isDarkMode ? 'bg-[#0E131F]/80 text-[#F5EFEB]' : 'bg-white text-[#0A0E1A]'
                  }`}
                >
                  <span>Kunjungi Situs Resmi</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#E11D48]" />
                </a>
              </div>

            </div>
          ))}
        </div>

        {filteredBrands.length === 0 && (
          <div className={`p-12 rounded-3xl border text-center space-y-3 ${cardClass}`}>
            <p className="text-lg font-display uppercase">Tidak Ada Brand yang Cocok</p>
            <p className={`text-xs font-mono ${mutedText}`}>
              Coba kata kunci lain atau reset filter kategori.
            </p>
            <button 
              onClick={() => { setSearchQuery(''); setSelectedCategory('SEMUA'); }}
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
