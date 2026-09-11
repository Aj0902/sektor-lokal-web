'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, X, MapPin, ArrowUpRight, ArrowRight, ShieldCheck, Tag } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

interface BrandItem {
  id: string;
  name: string;
  slug: string;
  category: string;
  origin: string;
  founder: string;
  founderSlug: string;
  usp: string;
  priceRange: string;
  description: string;
  linkUrl: string;
}

const brandList: BrandItem[] = [
  {
    id: 'b1',
    name: 'Spedagi Bamboo Bicycles',
    slug: 'spedagi-bamboo',
    category: 'Kriya & Mobilitas Lestari',
    origin: 'Kandangan, Temanggung, Jawa Tengah',
    founder: 'Singgih Susilo Kartono',
    founderSlug: 'singgih-susilo-kartono',
    usp: 'Sepeda bambu petung berstandar uji jalan Jerman berbasis revitalisasi ekonomi desa mandiri.',
    priceRange: 'Rp 6.500.000 - Rp 18.000.000',
    description: 'Mengolah bambu petung lokal desa menjadi sepeda berpresisi tinggi yang diekspor ke Jepang, Australia, dan Eropa.',
    linkUrl: 'https://spedagi.com'
  },
  {
    id: 'b2',
    name: 'JAVARA Indigenous Indonesia',
    slug: 'javara-indigenous',
    category: 'Pangan Pusaka Nusantara',
    origin: 'Bekasi & Rantai Tani Nusantara',
    founder: 'Helianti Hilman',
    founderSlug: 'helianti-hilman',
    usp: 'Pelestari ribuan benih pusaka pangan nusantara dan mitra puluhan ribu petani alami.',
    priceRange: 'Rp 25.000 - Rp 250.000',
    description: 'Menghubungkan keanekaragaman hayati pangan lokal dengan pasar organik modern di lebih dari 30 negara.',
    linkUrl: 'https://javara.co.id'
  },
  {
    id: 'b3',
    name: 'Du\'Anyam Social Enterprise',
    slug: 'duanyam-lontar',
    category: 'Kriya & Manufaktur Etis',
    origin: 'Flores Timur, Nusa Tenggara Timur',
    founder: 'Azalea Ayuningtyas',
    founderSlug: 'azalea-ayuningtyas',
    usp: 'Anyaman daun lontar warisan leluhur yang mendanai gizi dan kesehatan ibu desa 3T.',
    priceRange: 'Rp 45.000 - Rp 850.000',
    description: 'Memberdayakan ratusan mama penganyam Flores Timur dengan produk kriya interior dan suvenir berstandar global.',
    linkUrl: 'https://duanyam.com'
  },
  {
    id: 'b4',
    name: 'Pipiltin Cocoa',
    slug: 'pipiltin-cocoa',
    category: 'Pangan Pusaka Nusantara',
    origin: 'Pidie, Bali, Flores, Papua',
    founder: 'Tissa Aunilla',
    founderSlug: 'tissa-aunilla',
    usp: 'Cokelat single-origin murni bean-to-bar dengan transparansi asal-usul tanah kebun petani.',
    priceRange: 'Rp 35.000 - Rp 195.000',
    description: 'Memproses biji kakao terbaik Indonesia di dalam negeri untuk membuktikan mutu cokelat lokal setara kualitas Eropa.',
    linkUrl: 'https://pipiltincocoa.com'
  },
  {
    id: 'b5',
    name: 'Brodo Footwear',
    slug: 'brodo-footwear',
    category: 'Fesyen & Manufaktur Etis',
    origin: 'Cibaduyut, Bandung, Jawa Barat',
    founder: 'Yukka Harsono',
    founderSlug: 'yukka-harsono',
    usp: 'Pelopor kebangkitan alas kaki kulit lokal pria dengan standar kendali mutu industri modern.',
    priceRange: 'Rp 275.000 - Rp 899.000',
    description: 'Menghidupkan ekosistem pengrajin sepatu Cibaduyut melalui desain kontemporer dan akses langsung ke konsumen.',
    linkUrl: 'https://bro.do'
  },
  {
    id: 'b6',
    name: 'Batik Kultur Semarang',
    slug: 'batik-kultur',
    category: 'Fesyen & Manufaktur Etis',
    origin: 'Semarang, Jawa Tengah',
    founder: 'Dea Valencia',
    founderSlug: 'dea-valencia',
    usp: 'Busana batik modern siap pakai dengan lebih dari 50% tenaga kerja penjahit difabel.',
    priceRange: 'Rp 350.000 - Rp 1.500.000',
    description: 'Melestarikan kain batik tulis tradisional dalam siluet modern dengan memprioritaskan lapangan kerja inklusif.',
    linkUrl: 'https://batikkultur.com'
  },
  {
    id: 'b7',
    name: 'Hirka Chicken Leather',
    slug: 'hirka-leather',
    category: 'Kriya & Manufaktur Etis',
    origin: 'Bandung, Jawa Barat',
    founder: 'Nurman Farieka Ramdhany',
    founderSlug: 'nurman-farieka-ramdhany',
    usp: 'Inovasi penyamakan kulit ceker ayam limbah kuliner menjadi sepatu bermotif eksotis mirip buaya.',
    priceRange: 'Rp 450.000 - Rp 2.200.000',
    description: 'Sirkularitas limbah makanan pasar menjadi material kulit bernilai ekspor tinggi yang ramah lingkungan.',
    linkUrl: 'https://hirkaofficial.com'
  },
  {
    id: 'b8',
    name: 'Evoware Seaweed Packaging',
    slug: 'evoware-seaweed',
    category: 'Kriya & Mobilitas Lestari',
    origin: 'Jakarta & Pesisir Rumput Laut',
    founder: 'David Christian',
    founderSlug: 'david-christian',
    usp: 'Material kemasan terurai alami dan dapat dimakan berbahan dasar rumput laut lokal.',
    priceRange: 'B2B & Kemitraan Sirkular',
    description: 'Solusi kemasan ramah lingkungan untuk menggantikan saset plastik sekaligus menyejahterakan petani pesisir.',
    linkUrl: 'https://rethink-plastic.com'
  },
  {
    id: 'b9',
    name: 'Comika Corp',
    slug: 'comika-corp',
    category: 'Media & Ekosistem Kreatif',
    origin: 'Jakarta Selatan',
    founder: 'Pandji Pragiwaksono',
    founderSlug: 'pandji-pragiwaksono',
    usp: 'Ekosistem stand-up comedy independen terintegrasi yang menjaga kebebasan bertutur tanpa sensor korporasi.',
    priceRange: 'Mulai Rp 25.000 / pertunjukan',
    description: 'Platform streaming karya komedi spesial mandiri, manajemen talenta, dan ruang panggung terbuka bagi komika nusantara.',
    linkUrl: 'https://comika.id'
  }
];

const categories = [
  'SEMUA',
  'Kriya & Mobilitas Lestari',
  'Pangan Pusaka Nusantara',
  'Fesyen & Manufaktur Etis',
  'Media & Ekosistem Kreatif'
];

export default function BrandLokalArchivePage() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('SEMUA');

  const filteredBrands = brandList.filter(b => {
    const matchCat = selectedCategory === 'SEMUA' || b.category === selectedCategory;
    const matchSearch = b.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        b.origin.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        b.founder.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        b.usp.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  const bgClass = isDarkMode ? 'bg-[#07090E] text-[#F5EFEB]' : 'bg-[#F8F5EE] text-[#07090E]';
  const borderClass = isDarkMode ? 'border-white/10' : 'border-black/10';
  const mutedText = isDarkMode ? 'text-[#8E95A5]' : 'text-black/60';

  return (
    <div className={`min-h-screen ${bgClass} font-sans antialiased selection:bg-[#E11D48] selection:text-white flex flex-col`}>
      <Navbar isDarkMode={isDarkMode} onToggleDarkMode={() => setIsDarkMode(!isDarkMode)} />

      <main className="flex-1 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-12 sm:py-20 flex flex-col gap-10">
        
        {/* HEADER SECTION */}
        <header className="space-y-4 max-w-4xl border-b pb-8 border-current/10">
          <div className="flex items-center gap-2 text-xs font-mono text-[#E11D48] font-bold uppercase tracking-widest">
            <span className="w-2 h-0.5 bg-[#E11D48]" />
            <span>DIREKTORI BRAND MANDIRI NUSANTARA</span>
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display uppercase tracking-tight leading-[0.95]">
            Karya, Kriya <br className="hidden sm:inline" /> & Produksi Mandiri
          </h1>
          <p className={`text-base sm:text-xl font-editorial italic ${mutedText} descender-safe`}>
            Menelusuri bagaimana sebuah produk berakar dari kearifan lokal, diolah secara etis, dan siapa sosok di balik rantai nilainya.
          </p>
        </header>

        {/* SEARCH & FILTER CONTROLS */}
        <section className="space-y-6">
          
          {/* Search Input Bar */}
          <div className="relative max-w-xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#E11D48]" />
            <input 
              type="text"
              placeholder="Cari nama brand, kota asal, pendiri, atau keunggulan..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-11 pr-10 py-3.5 text-xs sm:text-sm font-mono border ${isDarkMode ? 'bg-[#0E131F] border-white/20 text-white placeholder:text-white/40' : 'bg-white border-black/20 text-black placeholder:text-black/40'} rounded-none focus:outline-none focus:border-[#E11D48] transition-colors`}
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-current/50 hover:text-current"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Filter Pills & Telemetry Counter */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b pb-4 border-current/10">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider border transition-all duration-200 tactile-btn ${
                    selectedCategory === cat 
                      ? 'bg-[#E11D48] text-white border-[#E11D48] font-bold shadow-sm' 
                      : 'bg-transparent border-current/20 hover:border-[#E11D48] text-current/70'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <span className="text-xs font-mono text-[#E11D48] font-bold tracking-wider uppercase shrink-0">
              Menampilkan {filteredBrands.length} Brand Mandiri
            </span>
          </div>
        </section>

        {/* BRANDS GRID */}
        {filteredBrands.length > 0 ? (
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredBrands.map((brand, idx) => (
              <motion.div 
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.04 }}
                key={brand.id}
                className={`p-6 sm:p-8 border ${borderClass} bg-current/[0.02] flex flex-col justify-between group hover:border-[#E11D48] transition-all duration-300 space-y-6 tactile-btn`}
              >
                {/* Brand Header */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2 border-b border-current/10 pb-2">
                    <span className="text-[10px] font-mono text-[#E11D48] uppercase tracking-widest font-bold">
                      {brand.category}
                    </span>
                    <span className="text-[10px] font-mono text-current/40 uppercase tracking-widest">
                      TERKURASI
                    </span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl uppercase leading-snug group-hover:text-[#E11D48] transition-colors">
                    {brand.name}
                  </h3>

                  <div className="flex items-center gap-1.5 text-xs font-mono text-current/60">
                    <MapPin className="w-3.5 h-3.5 text-[#E11D48] shrink-0" />
                    <span className="truncate">{brand.origin}</span>
                  </div>

                  <p className="font-editorial italic text-current/80 line-clamp-3 text-sm sm:text-base leading-relaxed descender-safe">
                    &ldquo;{brand.usp}&rdquo;
                  </p>
                </div>

                {/* Price Estimate & Actions */}
                <div className="pt-4 border-t border-current/10 space-y-4">
                  
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-[10px] text-current/50 uppercase tracking-wider flex items-center gap-1">
                      <Tag className="w-3 h-3 text-[#E11D48]" /> Estimasi Nilai:
                    </span>
                    <span className="font-bold text-current">
                      {brand.priceRange}
                    </span>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-current/10">
                    <div className="text-xs font-mono">
                      <span className={`${mutedText} text-[10px] block uppercase`}>Pendiri / Penggerak:</span>
                      <Link 
                        href={`/profil/${brand.founderSlug}`}
                        className="font-bold hover:text-[#E11D48] transition-colors flex items-center gap-1"
                      >
                        <span>{brand.founder}</span>
                        <ArrowUpRight className="w-3 h-3 text-[#E11D48]" />
                      </Link>
                    </div>

                    <a 
                      href={brand.linkUrl} 
                      target="_blank" 
                      rel="noreferrer"
                      className="p-2.5 border border-current/20 hover:bg-[#E11D48] hover:text-white hover:border-[#E11D48] transition-colors rounded-full tactile-btn"
                      title="Kunjungi Situs Resmi"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>

                </div>
              </motion.div>
            ))}
          </section>
        ) : (
          <div className="py-20 text-center border border-current/10 space-y-3 font-mono text-xs text-current/50">
            <p className="text-base text-current">TIDAK ADA BRAND YANG SESUAI DENGAN PENCARIAN</p>
            <p>Silakan sesuaikan kata kunci pencarian atau kategori filter.</p>
          </div>
        )}
      </main>

      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}
