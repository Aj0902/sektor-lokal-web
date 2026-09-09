'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const EDITORIAL_ARTICLES = [
  {
    slug: 'analisis-kritis-literasi-keuangan',
    title: 'Benteng Nalar Kritis di Tengah Gempuran Distorsi Algoritma',
    excerpt: 'Di era di mana informasi bergerak lebih cepat dari nalar sehat, manipulasi kognitif dan ilusi kemakmuran instan merajalela.',
    category: 'Etika & Nalar',
    date: '4 September 2026',
  },
  {
    slug: 'kedaulatan-pangan-bukan-gimik',
    title: 'Kedaulatan Pangan Akar Rumput: Melawan Monokultur',
    excerpt: 'Kedaulatan bukan sekadar angka swasembada di atas kertas birokrasi, melainkan hak asasi petani untuk menanam benih pusaka.',
    category: 'Krisis Ekologis',
    date: '2 September 2026',
  },
  {
    slug: 'ilusi-kemajuan-di-balik-stigma-lokal',
    title: 'Di Balik Sepeda Bambu: Mengapa Desain Dusun Dilirik Jerman',
    excerpt: 'Dekonstruksi mitos inferioritas kriya dan teknologi rancang bangun tanah air di kancah global.',
    category: 'Kedaulatan Budaya',
    date: '28 Agustus 2026',
  }
];

export default function ArtikelIndexPage() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const bgClass = isDarkMode ? 'bg-[#07090E] text-[#F5EFEB]' : 'bg-[#F8F5EE] text-[#07090E]';
  const borderClass = isDarkMode ? 'border-white/10' : 'border-black/10';
  const mutedText = isDarkMode ? 'text-white/50' : 'text-black/50';

  return (
    <div className={`min-h-screen ${bgClass} font-sans antialiased flex flex-col`}>
      <Navbar isDarkMode={isDarkMode} onToggleDarkMode={() => setIsDarkMode(!isDarkMode)} />

      <main className="flex-1 w-full max-w-6xl mx-auto px-6 py-12 sm:py-20 space-y-16">
        
        <header className="space-y-6 max-w-3xl border-b pb-8 border-current/10">
          <div className="text-xs font-mono text-[#E11D48] font-bold uppercase tracking-widest">
            Kompilasi Esai Kritis
          </div>
          <h1 className="text-5xl sm:text-7xl font-display uppercase tracking-tight leading-[0.9]">
            Ruang <br/> Redaksi
          </h1>
          <p className={`text-base sm:text-xl font-editorial italic ${mutedText}`}>
            Esai mendalam yang membedah kedaulatan pangan, ekonomi sirkular, dan nalar kritis warga.
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {EDITORIAL_ARTICLES.map((article) => (
            <article key={article.slug} className="group flex flex-col space-y-4">
              <div className="border-b-2 border-transparent group-hover:border-[#E11D48] pb-4 transition-colors">
                <div className="flex items-center gap-3 text-xs font-mono mb-4">
                  <span className="font-bold text-[#E11D48] uppercase">{article.category}</span>
                  <span className={mutedText}>{article.date}</span>
                </div>
                <Link href={`/artikel/${article.slug}`}>
                  <h3 className="font-display text-2xl uppercase leading-snug group-hover:text-[#E11D48] transition-colors">
                    {article.title}
                  </h3>
                </Link>
              </div>
              <p className={`text-sm leading-relaxed ${mutedText} line-clamp-3`}>
                {article.excerpt}
              </p>
              <Link href={`/artikel/${article.slug}`} className="inline-flex items-center gap-1 text-xs font-mono font-bold uppercase hover:text-[#E11D48]">
                <span>Baca Esai</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </article>
          ))}
        </section>

      </main>
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}
