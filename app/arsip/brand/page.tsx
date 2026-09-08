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
  Sparkles
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
      usp: 'Pionir sepeda bambu lestari dunia berbasis revitalisasi ekonomi desa Temanggung.',
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
      name: 'Brodo Footwear',
      slug: 'brodo-footwear',
      category: 'Fesyen & Manufaktur Etis',
      origin: 'Bandung, Jawa Barat',
      founder: 'Yukka Harsono',
      founderSlug: 'yukka-harsono',
      usp: 'Pionir kebangkitan manufaktur alas kaki pria lokal berbasis pengrajin Cibaduyut.',
      description: 'Menghadirkan sepatu kulit berkualitas tinggi dengan harga rasional langsung ke konsumen, memberdayakan ratusan pengrajin sepatu lokal Jawa Barat.',
      linkUrl: 'https://bro.do',
      imageUrl: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80',
      verified: true
    },
    {
      id: 'b4',
      name: 'Comika Corp',
      slug: 'comika-corp',
      category: 'Media & Ekosistem Kreatif',
      origin: 'Jakarta / New York',
      founder: 'Pandji Pragiwaksono',
      founderSlug: 'pandji-pragiwaksono',
      usp: 'Ekosistem industri stand-up comedy independen terpadu pertama di Indonesia.',
      description: 'Menaungi ruang pertunjukan komedi, manajemen tiket, platform streaming berbayar Comika ID, dan tur dunia tanpa sensor korporasi televisi.',
      linkUrl: 'https://comika.id',
      imageUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80',
      verified: true
    },
    {
      id: 'b5',
      name: 'CTech Labs Edwar Technology',
      slug: 'ctech-labs',
      category: 'Deep-Tech & Inovasi Sipil',
      origin: 'Tangerang, Banten',
      founder: 'Dr. Warsito P. Taruno',
      founderSlug: 'dr-warsito-p-taruno',
      usp: 'Pemegang paten global tomografi medan listrik 4D (ECVT) pertama di dunia.',
      description: 'Riset sains murni laboratorium mandiri tanah air yang diadopsi NASA dan lembaga energi dunia untuk pemindaian gas volumetrik berkecepatan tinggi.',
      linkUrl: 'https://c-techlabs.com',
      imageUrl: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?w=800&q=80',
      verified: true
    },
    {
      id: 'b6',
      name: 'Sun Eater Cipta Suara',
      slug: 'sun-eater',
      category: 'Media & Ekosistem Kreatif',
      origin: 'Jakarta',
      founder: 'Baskara Putra (Hindia)',
      founderSlug: 'baskara-putra',
      usp: 'Kolektif ekosistem musik independen juru bicara emosi generasi muda.',
      description: 'Perusahaan rekaman dan manajemen kreatif mandiri yang memproduksi karya-karya katarsis pemenang penghargaan AMI Awards (.Feast, Hindia, Lomba Sihir).',
      linkUrl: 'https://suneatercph.com',
      imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80',
      verified: true
    },
    {
      id: 'b7',
      name: 'Du\'Anyam',
      slug: 'du-anyam',
      category: 'Kriya & Mobilitas Lestari',
      origin: 'Flores Timur, NTT',
      founder: 'Azalea Ayuningtyas',
      founderSlug: 'azalea-ayuningtyas',
      usp: 'Wirausaha sosial anyaman daun lontar untuk peningkatan gizi ibu & anak di NTT.',
      description: 'Menjual produk kriya anyaman premium B2B hotel bintang lima dunia dan merchandise resmi ajang internasional, memutus rantai kemiskinan perempuan pedalaman.',
      linkUrl: 'https://duanyam.com',
      imageUrl: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=80',
      verified: true
    },
    {
      id: 'b8',
      name: 'Pipiltin Cocoa',
      slug: 'pipiltin-cocoa',
      category: 'Pangan Pusaka Nusantara',
      origin: 'Jakarta / Aceh / Bali / Papua',
      founder: 'Tissa Aunilla',
      founderSlug: 'tissa-aunilla',
      usp: 'Cokelat bean-to-bar premium single origin asli kebun nusantara.',
      description: 'Membeli biji kakao langsung dari petani di atas harga pasar untuk menjaga keunikan rasa tanah nusantara dan menolak ekspor bahan mentah tanpa nilai tambah.',
      linkUrl: 'https://pipiltincocoa.com',
      imageUrl: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=800&q=80',
      verified: true
    },
    {
      id: 'b9',
      name: 'Batik Kultur',
      slug: 'batik-kultur',
      category: 'Fesyen & Manufaktur Etis',
      origin: 'Semarang, Jawa Tengah',
      founder: 'Dea Valencia',
      founderSlug: 'dea-valencia',
      usp: 'Busana batik modern inklusif yang mempekerjakan lebih dari 50% rekan difabel.',
      description: 'Mengkombinasikan wastra batik tulis tradisional dengan potongan modern busana siap pakai, membuktikan etos kerja berkualitas tinggi para penjahit disabilitas.',
      linkUrl: 'https://batikkultur.com',
      imageUrl: 'https://images.unsplash.com/photo-1520006403909-838d6b92c22e?w=800&q=80',
      verified: true
    }
  ];

  const filteredBrands = brandList.filter(b => {
    const matchesSearch = b.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          b.usp.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          b.founder.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          b.origin.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCat = selectedCategory === 'SEMUA' || b.category.toLowerCase() === selectedCategory.toLowerCase();

    return matchesSearch && matchesCat;
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
            { label: 'Brand Lokal Mandiri' }
          ]} 
          isDarkMode={isDarkMode}
        />

        {/* Header Section */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-indigo-500 font-bold uppercase tracking-widest">
            <Building2 className="w-4 h-4" />
            <span>KATALOG KEDAULATAN EKONOMI & MANUFAKTUR MANDIRI</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-display uppercase tracking-tight leading-[0.95]">
            BRAND LOKAL & KARYA BERDAULAT
          </h1>
          <p className={`text-base leading-relaxed ${mutedText}`}>
            Kurasi entitas bisnis mandiri yang berakar di tanah air, menjaga etika rantai pasok lokal, memberdayakan komunitas pengrajin, dan membuktikan daya saing karya nusantara di kancah global.
          </p>
        </div>

        {/* SEARCH & FILTER CONTROLS */}
        <div className="space-y-4 pt-2">
          
          {/* Search Bar */}
          <div className="relative max-w-xl">
            <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 opacity-40 text-inherit" />
            <input 
              type="text" 
              placeholder="Cari nama brand, kota asal, pendiri, atau produk..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-11 pr-10 py-3.5 rounded-2xl border text-sm transition focus:outline-none focus:border-indigo-500 ${
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

          {/* Business Category Filter Switcher */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none font-mono text-xs">
            <span className="text-[11px] font-bold text-indigo-500 uppercase shrink-0 mr-1 flex items-center gap-1">
              <Filter className="w-3 h-3" />
              <span>SEKTOR:</span>
            </span>
            {categories.map((cat) => {
              const isSelected = selectedCategory.toLowerCase() === cat.toLowerCase();
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full border transition-all shrink-0 uppercase font-bold tracking-wider ${
                    isSelected
                      ? 'bg-indigo-600 border-indigo-600 text-white shadow-sm shadow-indigo-600/40'
                      : isDarkMode
                        ? 'border-white/10 bg-[#111726]/50 text-[#8A93A8] hover:border-indigo-500 hover:text-white'
                        : 'border-black/10 bg-white text-[#64748B] hover:border-indigo-500 hover:text-black'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Result Counter */}
          <div className="flex items-center justify-between text-xs font-mono border-t pt-3 border-inherit/10">
            <span className={mutedText}>
              Menampilkan <span className="font-bold text-indigo-500">{filteredBrands.length}</span> Brand Terkurasi
            </span>
            {selectedCategory !== 'SEMUA' && (
              <button 
                onClick={() => setSelectedCategory('SEMUA')}
                className="text-indigo-500 hover:underline font-bold"
              >
                Reset Filter
              </button>
            )}
          </div>

        </div>

        {/* BRAND BENTO GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
          {filteredBrands.map((b) => (
            <div 
              key={b.id}
              className={`p-6 sm:p-7 rounded-3xl border flex flex-col justify-between space-y-6 transition-all duration-300 hover:scale-[1.01] ${cardClass}`}
            >
              <div className="space-y-4">
                {/* Image Cover */}
                <div className="relative w-full h-44 rounded-2xl overflow-hidden bg-neutral-900 border border-inherit/10">
                  <Image 
                    src={b.imageUrl} 
                    alt={b.name} 
                    fill 
                    sizes="360px"
                    className="object-cover filter grayscale contrast-110 hover:grayscale-0 transition duration-500"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-black/70 backdrop-blur-md text-[10px] font-mono text-white font-bold border border-white/20 uppercase flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-indigo-400" />
                    <span>{b.origin}</span>
                  </div>
                </div>

                {/* Category & Title */}
                <div className="space-y-1.5">
                  <span className="text-[10px] font-mono text-indigo-500 uppercase font-bold tracking-wider block">
                    {b.category}
                  </span>
                  <h3 className="font-display uppercase text-2xl text-inherit leading-tight">
                    {b.name}
                  </h3>
                  <p className={`text-xs leading-relaxed ${mutedText}`}>
                    {b.description}
                  </p>
                </div>

                {/* Founder Linkage (Graph Relational) */}
                <div className="pt-3 border-t border-inherit/10 text-xs font-mono flex items-center justify-between">
                  <span className={mutedText}>Inisiator / Pendiri:</span>
                  {b.founderSlug ? (
                    <Link 
                      href={`/profil/${b.founderSlug}`}
                      className="font-bold text-[#E11D48] hover:underline flex items-center gap-1"
                    >
                      <span>{b.founder}</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                  ) : (
                    <span className="font-semibold text-inherit">{b.founder}</span>
                  )}
                </div>

                {/* USP Box */}
                <div className={`p-3 rounded-xl border text-xs italic ${
                  isDarkMode ? 'bg-[#111726]/40 border-white/[0.06] text-[#EDE8DC]/90' : 'bg-black/[0.02] border-black/[0.06] text-black/90'
                }`}>
                  &ldquo;{b.usp}&rdquo;
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <a 
                  href={b.linkUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-mono font-bold text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-1.5 shadow-md shadow-indigo-600/30 transition"
                >
                  <span>Kunjungi Platform Resmi</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

            </div>
          ))}
        </div>

        {filteredBrands.length === 0 && (
          <div className={`p-12 rounded-3xl border text-center space-y-3 ${cardClass}`}>
            <p className="text-lg font-display uppercase">Tidak Ada Brand yang Cocok</p>
            <p className={`text-xs font-mono ${mutedText}`}>
              Coba gunakan kata kunci pencarian lain atau reset filter sektor bisnis.
            </p>
            <button 
              onClick={() => { setSearchQuery(''); setSelectedCategory('SEMUA'); }}
              className="px-4 py-2 rounded-xl bg-indigo-600 text-white text-xs font-mono font-bold uppercase"
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
