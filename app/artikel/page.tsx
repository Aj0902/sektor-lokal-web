'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  BookOpen, 
  Search, 
  Clock, 
  Tag, 
  ArrowRight, 
  Sparkles, 
  Feather, 
  TrendingUp, 
  Layers, 
  Calendar,
  Share2,
  Check,
  Eye
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ConstellationCanvas from '../../components/ConstellationCanvas';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Breadcrumbs from '../../components/Breadcrumbs';

interface EditorialArticle {
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  featured?: boolean;
}

const EDITORIAL_ARTICLES: EditorialArticle[] = [
  {
    slug: 'analisis-kritis-literasi-keuangan',
    title: 'Benteng Nalar Kritis di Tengah Gempuran Distorsi Algoritma',
    subtitle: 'Mengapa skeptisisme metodis adalah alat pertahanan diri paling mendasar generasi muda hari ini.',
    excerpt: 'Di era di mana informasi bergerak lebih cepat dari nalar sehat, manipulasi kognitif dan ilusi kemakmuran instan merajalela. Stoikisme dan logika sains mengajarkan kita satu hal: pisahkan apa yang berada dalam kendali nalar kita dari rekayasa algoritma asing.',
    category: 'Etika & Nalar',
    readTime: '6 Menit Membaca',
    date: '4 September 2026',
    author: {
      name: 'Dewan Redaksi Sektor Lokal',
      role: 'Divisi Riset & Kajian Nalar',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80'
    },
    featured: true
  },
  {
    slug: 'kedaulatan-pangan-bukan-gimik',
    title: 'Kedaulatan Pangan Akar Rumput: Melawan Monokultur, Menjaga Benih Leluhur',
    subtitle: 'Bagaimana komunitas adat dan petani gurem menjadi benteng terakhir ketahanan ekologi nusantara.',
    excerpt: 'Kedaulatan bukan sekadar angka swasembada di atas kertas birokrasi, melainkan hak asasi petani untuk menanam benih pusaka mereka sendiri tanpa intervensi korporasi transnasional.',
    category: 'Krisis Ekologis',
    readTime: '8 Menit Membaca',
    date: '2 September 2026',
    author: {
      name: 'Kajian Agraria Sektor Lokal',
      role: 'Divisi Ekologi & Lingkungan Hidup',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80'
    }
  },
  {
    slug: 'ilusi-kemajuan-di-balik-stigma-lokal',
    title: 'Membongkar Mental Inlander: Mengapa Karya Dusun Bisa Mengungguli Produk Global',
    subtitle: 'Dekonstruksi mitos inferioritas kriya dan teknologi rancang bangun tanah air.',
    excerpt: 'Dari sepeda bambu Spedagi di Dusun Kandangan hingga paten algoritma transmisi nirkabel di Kediri—kualitas kelas dunia tidak pernah ditentukan oleh lokasi geografis, melainkan oleh keteguhan metodologi dan kedalaman rasa.',
    category: 'Kedaulatan Budaya',
    readTime: '7 Menit Membaca',
    date: '28 Agustus 2026',
    author: {
      name: 'Dr. Semantik & Redaksi',
      role: 'Kajian Kebudayaan & Antropologi',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80'
    }
  },
  {
    slug: 'ai-dan-masa-depan-bahasa-nusantara',
    title: 'Kedaulatan Linguistik di Era Kecerdasan Buatan Generatif',
    subtitle: 'Tantangan korpus bahasa daerah agar tidak terhapus dari peradaban Large Language Models.',
    excerpt: 'Jika kita membiarkan model AI global hanya dilatih dengan data berbahasa asing, kita sedang membiarkan struktur berpikir generasi penerus terkolonisasi secara perlahan tanpa sadar.',
    category: 'Teknologi & AI',
    readTime: '5 Menit Membaca',
    date: '25 Agustus 2026',
    author: {
      name: 'Laboratorium Sistem Sektor Lokal',
      role: 'Divisi Arsitektur Pengetahuan AI',
      avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=400&q=80'
    }
  },
  {
    slug: 'ekonomi-sirkular-bukan-sekadar-tren',
    title: 'Manufaktur Sirkular: Saat Residu Menjadi Modal Kedaulatan Industri',
    subtitle: 'Belajar dari para pengolah limbah dan perajin kulit ceker ayam di lorong-lorong kota.',
    excerpt: 'Ekonomi sirkular sejati bukan seminar di hotel berbintang, melainkan keberanian teknis mengubah residu organik dan anorganik menjadi komoditas bernilai tambah tinggi di tangan pengrajin lokal.',
    category: 'Ekonomi Sirkular',
    readTime: '6 Menit Membaca',
    date: '20 Agustus 2026',
    author: {
      name: 'Bang Marko & Tim Bisnis',
      role: 'Kurasi Usaha & Rantai Pasok',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80'
    }
  },
  {
    slug: 'merawat-ingatan-melawan-impunitas',
    title: 'Menolak Lupa: Merawat Ingatan Kolektif sebagai Benteng Nalar Sehat Warga',
    subtitle: 'Pelajaran dari keteguhan payung hitam Kamisan dan arsip dokumenter independen.',
    excerpt: 'Masyarakat yang melupakan sejarah pelanggaran masa lalunya rentan mengulangi kesalahan yang sama di masa depan dengan kemasan yang berbeda.',
    category: 'Etika & Nalar',
    readTime: '9 Menit Membaca',
    date: '15 Agustus 2026',
    author: {
      name: 'Dewan Redaksi Sektor Lokal',
      role: 'Arsip Hak Asasi & Rekam Jejak',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80'
    }
  }
];

const CATEGORIES = [
  'Semua',
  'Etika & Nalar',
  'Kedaulatan Budaya',
  'Ekonomi Sirkular',
  'Teknologi & AI',
  'Krisis Ekologis'
];

export default function ArtikelIndexPage() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedSlug, setCopiedSlug] = useState<string | null>(null);

  const filteredArticles = useMemo(() => {
    return EDITORIAL_ARTICLES.filter(article => {
      const matchCategory = selectedCategory === 'Semua' || article.category === selectedCategory;
      const matchSearch = 
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.author.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  const featuredArticle = useMemo(() => {
    return EDITORIAL_ARTICLES.find(a => a.featured) || EDITORIAL_ARTICLES[0];
  }, []);

  const handleCopyLink = (slug: string) => {
    if (typeof navigator !== 'undefined') {
      const url = `${window.location.origin}/artikel/${slug}`;
      navigator.clipboard.writeText(url);
      setCopiedSlug(slug);
      setTimeout(() => setCopiedSlug(null), 2000);
    }
  };

  const bgCanvas = isDarkMode ? 'particle-wave-dark text-[#F5EFEB]' : 'particle-wave-light text-[#0A0E1A]';
  const cardClass = isDarkMode ? 'spotlight-card-dark' : 'spotlight-card-light';
  const mutedText = isDarkMode ? 'text-[#8E95A5]' : 'text-[#64748B]';

  return (
    <div className={`min-h-screen ${bgCanvas} font-sans antialiased selection:bg-[#E11D48] selection:text-white relative flex flex-col justify-between`}>
      
      {/* Schema.org CollectionPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Ruang Redaksi Sektor Lokal",
            "description": "Kompilasi esai kritis, analisis kebijakan publik, refleksi budaya, dan kedaulatan sains-teknologi nusantara.",
            "publisher": {
              "@type": "Organization",
              "name": "Sektor Lokal",
              "url": "https://sektorlokal.id"
            },
            "mainEntity": {
              "@type": "ItemList",
              "itemListElement": EDITORIAL_ARTICLES.map((art, idx) => ({
                "@type": "ListItem",
                "position": idx + 1,
                "url": `https://sektorlokal.id/artikel/${art.slug}`,
                "name": art.title,
                "description": art.subtitle
              }))
            }
          })
        }}
      />

      <ConstellationCanvas isDarkMode={isDarkMode} />

      <Navbar 
        isDarkMode={isDarkMode} 
        onToggleDarkMode={() => setIsDarkMode(!isDarkMode)} 
      />

      <main className="max-w-6xl mx-auto px-6 relative z-10 space-y-12 py-10 flex-1 w-full">
        
        {/* BREADCRUMBS */}
        <Breadcrumbs 
          items={[{ label: 'Ruang Redaksi & Esai' }]} 
          isDarkMode={isDarkMode}
        />

        {/* HERO SECTION */}
        <section className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E11D48]/40 bg-[#E11D48]/10 text-[#E11D48] text-xs font-mono font-bold tracking-widest uppercase shadow-crimson-subtle">
            <Feather className="w-3.5 h-3.5" />
            <span>RUANG REDAKSI & ESAI INDEPENDEN</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-3xl">
              <h1 className="text-4xl sm:text-6xl font-display uppercase tracking-tight leading-[0.94]">
                CATATAN REFLEKTIF, KAJIAN KRITIS, & DISKURSUS
              </h1>
              <p className={`text-base sm:text-lg leading-relaxed ${mutedText}`}>
                Kompilasi tulisan independen yang membedah kedaulatan kebudayaan, ekonomi sirkular, tantangan kecerdasan buatan, dan benteng akal sehat di tengah era banjir distorsi informasi.
              </p>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono shrink-0">
              <div className="p-3 rounded-2xl border border-inherit/10 bg-inherit/40 text-center">
                <span className="block text-2xl font-display text-[#E11D48]">{EDITORIAL_ARTICLES.length}</span>
                <span className={mutedText}>ESAI TERBIT</span>
              </div>
              <div className="p-3 rounded-2xl border border-inherit/10 bg-inherit/40 text-center">
                <span className="block text-2xl font-display text-[#E11D48]">100%</span>
                <span className={mutedText}>OPEN ACCESS</span>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURED ESSAY (HERO CARD) */}
        {selectedCategory === 'Semua' && !searchQuery && featuredArticle && (
          <section className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#E11D48]">
              <Sparkles className="w-4 h-4" />
              <span>CATATAN PILIHAN REDAKSI // FOCUS OF THE WEEK</span>
            </div>

            <div className={`p-8 sm:p-10 rounded-3xl border ${cardClass} relative overflow-hidden group shadow-crimson-subtle`}>
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
                    <span className="px-3 py-1 rounded-full bg-[#E11D48] text-white font-bold uppercase shadow-crimson-subtle">
                      {featuredArticle.category}
                    </span>
                    <span className="flex items-center gap-1 text-inherit/70">
                      <Clock className="w-3.5 h-3.5 text-[#E11D48]" />
                      <span>{featuredArticle.readTime}</span>
                    </span>
                    <span className="flex items-center gap-1 text-inherit/70">
                      <Calendar className="w-3.5 h-3.5 text-[#E11D48]" />
                      <span>{featuredArticle.date}</span>
                    </span>
                  </div>

                  <Link href={`/artikel/${featuredArticle.slug}`} className="block group-hover:text-[#E11D48] transition-colors">
                    <h2 className="text-2xl sm:text-4xl font-display uppercase tracking-tight leading-tight">
                      {featuredArticle.title}
                    </h2>
                  </Link>

                  <p className="font-editorial italic text-base sm:text-lg text-inherit/90 leading-relaxed border-l-2 border-[#E11D48] pl-3">
                    {featuredArticle.subtitle}
                  </p>

                  <p className={`text-sm sm:text-base leading-relaxed line-clamp-3 ${mutedText}`}>
                    {featuredArticle.excerpt}
                  </p>

                  <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-inherit/10">
                    <div className="flex items-center gap-3">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#E11D48]/40">
                        <Image 
                          src={featuredArticle.author.avatar} 
                          alt={featuredArticle.author.name} 
                          fill 
                          sizes="40px"
                          className="object-cover grayscale"
                        />
                      </div>
                      <div>
                        <p className="font-display text-xs uppercase text-inherit">{featuredArticle.author.name}</p>
                        <p className={`text-[11px] ${mutedText}`}>{featuredArticle.author.role}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 font-mono text-xs">
                      <button
                        onClick={() => handleCopyLink(featuredArticle.slug)}
                        className={`p-2.5 rounded-xl border transition ${
                          isDarkMode ? 'border-white/10 hover:border-[#E11D48]' : 'border-black/10 hover:border-[#E11D48]'
                        }`}
                        title="Salin Tautan Esai"
                      >
                        {copiedSlug === featuredArticle.slug ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4 text-[#E11D48]" />}
                      </button>

                      <Link
                        href={`/artikel/${featuredArticle.slug}`}
                        className="px-5 py-2.5 bg-[#E11D48] hover:bg-[#BE123C] text-white font-bold uppercase rounded-xl flex items-center gap-2 shadow-crimson-glow transition"
                      >
                        <span>BACA ESAI LENGKAP</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-4 hidden lg:flex flex-col justify-center items-center p-6 border-l border-inherit/10 text-center space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-[#E11D48]/10 border border-[#E11D48]/30 flex items-center justify-center text-[#E11D48] shadow-crimson-subtle">
                    <BookOpen className="w-8 h-8" />
                  </div>
                  <blockquote className="font-serif italic text-sm text-inherit/80">
                    &ldquo;Ketiadaan nalar kritis adalah pupuk paling subur bagi bertumbuhnya eksploitasi finansial dan manipulasi algoritma modern.&rdquo;
                  </blockquote>
                  <span className="text-[11px] font-mono text-[#E11D48] uppercase tracking-wider font-bold">
                    — KANON SEKTOR LOKAL
                  </span>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* CONTROLS: SEARCH & CATEGORY FILTER */}
        <section className="space-y-6 pt-4">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-inherit/50" />
              <input 
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari esai, topik, atau penulis..."
                className={`w-full pl-10 pr-4 py-2.5 rounded-2xl text-xs font-sans border transition focus:outline-none focus:ring-2 focus:ring-[#E11D48]/50 ${
                  isDarkMode 
                    ? 'bg-[#0E131F]/90 border-white/10 text-[#F5EFEB] placeholder-zinc-500' 
                    : 'bg-white/80 border-black/10 text-[#0A0E1A] placeholder-zinc-400'
                }`}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono text-inherit/50 hover:text-[#E11D48]"
                >
                  CLEAR
                </button>
              )}
            </div>

            {/* Counter */}
            <div className="text-xs font-mono text-right flex items-center justify-end gap-2 text-inherit/70">
              <span>Menampilkan:</span>
              <strong className="text-[#E11D48] font-bold">{filteredArticles.length}</strong>
              <span>Esai</span>
            </div>
          </div>

          {/* Topic Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 overflow-x-auto pb-2">
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-mono font-bold tracking-wider uppercase transition-all whitespace-nowrap ${
                    isSelected
                      ? 'bg-[#E11D48] text-white shadow-crimson-subtle scale-105'
                      : isDarkMode
                        ? 'bg-[#0E131F] border border-white/10 text-[#8E95A5] hover:text-[#F5EFEB] hover:border-white/20'
                        : 'bg-white border border-black/10 text-[#64748B] hover:text-[#0A0E1A] hover:border-black/20'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </section>

        {/* ARTICLES GRID */}
        <section className="space-y-6">
          {filteredArticles.length === 0 ? (
            <div className={`p-12 text-center rounded-3xl border ${cardClass} space-y-3`}>
              <p className="font-display text-xl uppercase">TIDAK ADA ESAI DITEMUKAN</p>
              <p className={`text-xs ${mutedText}`}>Coba ubah kata kunci pencarian atau pilih kategori topik lainnya.</p>
              <button 
                onClick={() => { setSelectedCategory('Semua'); setSearchQuery(''); }}
                className="mt-2 px-4 py-2 bg-[#E11D48] text-white text-xs font-mono rounded-xl font-bold uppercase"
              >
                Reset Filter
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.map((article, idx) => (
                <motion.article
                  key={article.slug}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className={`p-6 rounded-3xl border flex flex-col justify-between space-y-6 group transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${cardClass}`}
                >
                  <div className="space-y-4">
                    
                    {/* Top Meta */}
                    <div className="flex items-center justify-between gap-2 text-xs font-mono">
                      <span className="px-2.5 py-0.5 rounded-full bg-[#E11D48]/10 text-[#E11D48] border border-[#E11D48]/20 font-bold uppercase text-[10px]">
                        {article.category}
                      </span>
                      <span className="flex items-center gap-1 text-[11px] text-inherit/60">
                        <Clock className="w-3 h-3 text-[#E11D48]" />
                        <span>{article.readTime}</span>
                      </span>
                    </div>

                    {/* Title */}
                    <Link href={`/artikel/${article.slug}`} className="block group-hover:text-[#E11D48] transition-colors">
                      <h3 className="font-display text-xl uppercase tracking-tight leading-snug line-clamp-2">
                        {article.title}
                      </h3>
                    </Link>

                    {/* Excerpt */}
                    <p className={`text-xs leading-relaxed line-clamp-3 ${mutedText}`}>
                      {article.excerpt}
                    </p>
                  </div>

                  {/* Bottom Author & Action */}
                  <div className="pt-4 border-t border-inherit/10 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <div className="relative w-8 h-8 rounded-full overflow-hidden border border-[#E11D48]/30 shrink-0">
                        <Image 
                          src={article.author.avatar} 
                          alt={article.author.name} 
                          fill 
                          sizes="32px"
                          className="object-cover grayscale"
                        />
                      </div>
                      <div className="overflow-hidden">
                        <p className="font-display text-[11px] uppercase truncate text-inherit">{article.author.name}</p>
                        <p className={`text-[10px] font-mono ${mutedText}`}>{article.date}</p>
                      </div>
                    </div>

                    <Link
                      href={`/artikel/${article.slug}`}
                      className="p-2 rounded-xl bg-[#E11D48]/10 text-[#E11D48] hover:bg-[#E11D48] hover:text-white transition-colors"
                      title="Baca Esai"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </section>

        {/* CALL TO SUBMIT / WRITING NETWORK */}
        <section className={`p-8 sm:p-10 rounded-3xl border text-center space-y-4 ${cardClass}`}>
          <h3 className="text-xl sm:text-2xl font-display uppercase">
            PUNYA CATATAN KRITIS ATAU KAJIAN TENTANG INOVASI LOKAL?
          </h3>
          <p className={`text-xs sm:text-sm max-w-xl mx-auto ${mutedText}`}>
            Redaksi Sektor Lokal menyambut sumbangsih pemikiran, kajian ilmiah populer, dan fakta lapangan dari seluruh penjuru nusantara.
          </p>
          <div className="pt-2">
            <Link 
              href="/kontak"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#E11D48] hover:bg-[#BE123C] text-white text-xs font-mono font-bold uppercase rounded-xl shadow-crimson-glow transition"
            >
              <span>KIRIM USULAN TULISAN KE REDAKSI</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

      </main>

      <Footer isDarkMode={isDarkMode} />

    </div>
  );
}
