'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, X, MapPin, ArrowRight } from 'lucide-react';
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
  founderSlug?: string;
  usp: string;
  description: string;
  linkUrl: string;
}

const brandList: BrandItem[] = [
  {
    id: 'b1', name: 'Spedagi Bamboo Bicycles', slug: 'spedagi-bamboo',
    category: 'Kriya & Mobilitas Lestari', origin: 'Kandangan, Temanggung',
    founder: 'Singgih Susilo Kartono', founderSlug: 'singgih-susilo-kartono',
    usp: 'Sepeda bambu petung berstandar uji jalan Jerman berbasis revitalisasi ekonomi dusun.',
    description: 'Mengolah bambu petung desa menjadi sepeda ergonomis.', linkUrl: 'https://spedagi.com'
  },
  {
    id: 'b2', name: 'JAVARA Indigenous Indonesia', slug: 'javara-indigenous',
    category: 'Pangan Pusaka Nusantara', origin: 'Bekasi / Nusantara',
    founder: 'Helianti Hilman', founderSlug: 'helianti-hilman',
    usp: 'Pelestari benih pusaka pangan dan ekspor beras organik ke 30+ negara.',
    description: 'Menghubungkan petani adat dengan pasar pangan sehat.', linkUrl: 'https://javara.co.id'
  },
  {
    id: 'b3', name: 'Du\'Anyam Lontar', slug: 'duanyam-lontar',
    category: 'Fesyen & Manufaktur Etis', origin: 'Flores Timur, NTT',
    founder: 'Azalea Ayuningtyas', founderSlug: 'azalea-ayuningtyas',
    usp: 'Kerajinan anyaman daun lontar yang membiayai nutrisi dan kesehatan ibu desa.',
    description: 'Membawa anyaman tradisional ke ajang merchandise resmi dunia.', linkUrl: 'https://duanyam.com'
  }
];

const categories = ['SEMUA', 'Kriya & Mobilitas Lestari', 'Pangan Pusaka Nusantara', 'Fesyen & Manufaktur Etis', 'Deep-Tech & Inovasi Sipil', 'Media & Ekosistem Kreatif'];

export default function BrandLokalArchivePage() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('SEMUA');

  const filteredBrands = brandList.filter(b => {
    const matchCat = selectedCategory === 'SEMUA' || b.category === selectedCategory;
    const matchSearch = b.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        b.origin.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  const bgClass = isDarkMode ? 'bg-[#07090E] text-[#F5EFEB]' : 'bg-[#F8F5EE] text-[#07090E]';
  const borderClass = isDarkMode ? 'border-white/10' : 'border-black/10';
  const mutedText = isDarkMode ? 'text-white/50' : 'text-black/50';

  return (
    <div className={`min-h-screen ${bgClass} font-sans antialiased selection:bg-[#E11D48] selection:text-white flex flex-col`}>
      <Navbar isDarkMode={isDarkMode} onToggleDarkMode={() => setIsDarkMode(!isDarkMode)} />

      <main className="flex-1 w-full max-w-7xl mx-auto px-6 py-12 sm:py-20 flex flex-col gap-12">
        <header className="space-y-6 max-w-4xl border-b pb-8 border-current/10">
          <div className="text-xs font-mono text-[#E11D48] font-bold uppercase tracking-widest">
            Direktori Brand Lokal Mandiri
          </div>
          <h1 className="text-5xl sm:text-7xl font-display uppercase tracking-tight leading-[0.9]">
            Karya & <br/> Proses
          </h1>
          <p className={`text-base sm:text-xl font-editorial italic ${mutedText}`}>
            Menelusuri bagaimana sebuah karya berakar, diproduksi, dan siapa yang menggerakkannya.
          </p>
        </header>

        <section className="space-y-8">
          <div className="flex flex-wrap gap-x-6 gap-y-3 border-b pb-4 border-current/10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs font-mono uppercase tracking-wider pb-1 border-b-2 transition-colors ${
                  selectedCategory === cat ? 'border-[#E11D48] text-[#E11D48] font-bold' : 'border-transparent hover:border-current/30 text-current/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBrands.map((brand, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              key={brand.id}
              className={`p-8 border ${borderClass} flex flex-col justify-between group hover:border-[#E11D48] transition-colors space-y-8`}
            >
              <div className="space-y-4">
                <div className="text-[10px] font-mono text-[#E11D48] uppercase tracking-widest font-bold">
                  {brand.category}
                </div>
                <h3 className="font-display text-3xl uppercase leading-none">{brand.name}</h3>
                <div className="flex items-center gap-1.5 text-xs font-mono text-current/60">
                  <MapPin className="w-3 h-3 text-[#E11D48]" />
                  <span>{brand.origin}</span>
                </div>
                <p className="font-editorial italic text-current/80 line-clamp-3">
                  "{brand.usp}"
                </p>
              </div>

              <div className="pt-6 border-t border-current/10 flex items-center justify-between">
                <div className="text-xs font-mono">
                  <span className={mutedText}>Pendiri:</span>
                  <div className="font-bold">{brand.founder}</div>
                </div>
                <a href={brand.linkUrl} target="_blank" className="p-2 border border-current/20 hover:text-[#E11D48] hover:border-[#E11D48] transition-colors rounded-full">
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </section>
      </main>
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}
