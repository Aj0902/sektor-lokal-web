'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { 
  Sun, 
  Moon, 
  ArrowLeft, 
  Share2, 
  Clock, 
  Tag, 
  Check, 
  BookOpen, 
  ArrowUpRight,
  UserCheck
} from 'lucide-react';
import { motion } from 'framer-motion';
import ConstellationCanvas from '../../../components/ConstellationCanvas';

export default function ArticleDetailPage() {
  const params = useParams();
  const slug = (params?.slug as string) || 'analisis-kritis-literasi-keuangan';

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [copiedToast, setCopiedToast] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        setScrollProgress((totalScroll / windowHeight) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyLink = () => {
    if (typeof navigator !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopiedToast(true);
      setTimeout(() => setCopiedToast(false), 2500);
    }
  };

  // Curated Sample Article Data (SEO Ready)
  const article = {
    title: "Analisis Kritis Keuangan & Benteng Nalar Masyarakat",
    tag: "ESAI KRITIS",
    readTime: "5 Menit Membaca",
    authorName: "FERRY IRWANDI",
    authorTitle: "The Voices • Disruptor • Literasi Kritis",
    authorPhoto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    publishedDate: "2 September 2026",
    summary: "Mengapa kemampuan bernalar kritis dan pengujian logika adalah instrumen pertahanan diri paling mendasar di tengah gempuran skema penipuan digital dan algoritma judi online.",
    paragraphs: [
      "Di era di mana informasi bergerak lebih cepat dari nalar sehat, kejahatan finansial telah berevolusi menjadi bentuk yang sangat canggih. Ia tidak lagi datang membawa topeng penjahat konvensional, melainkan menyamar sebagai 'kesempatan emas', 'investasi masa depan', atau 'jalan pintas kaya mendadak'.",
      "Matematika di balik skema ponzi dan judi online selalu sama: bandar dan pengelola selalu memegang keunggulan statistik mutlak. Namun mengapa jutaan masyarakat rentan terus terperosok ke dalam lubang yang sama? Jawabannya terletak pada kerapuhan nalar kritis dan manipulasi kognitif psikologis.",
      "Stoikisme dan logika sains mengajarkan kita satu hal fundamental: pisahkan antara apa yang berada dalam kendali nalar kita dan apa yang sekadar ilusi hasil rakitan algoritma asing. Membangun literasi keuangan bukan sekadar menghafal instrumen saham atau obligasi, melainkan melatih otot skeptisisme rasional sebelum menyerahkan aset hidup kita.",
      "Benteng terakhir kebebasan seorang individu bukanlah jumlah saldo di dalam rekeningnya, melainkan kedaulatan pikirannya untuk tidak bisa dibeli atau ditipu oleh janji-janji manis tanpa dasar matematika."
    ],
    quote: "Ketiadaan nalar kritis adalah pupuk paling subur bagi bertumbuhnya eksploitasi dan perbudakan finansial modern."
  };

  const bgCanvas = isDarkMode ? 'particle-wave-dark text-[#EDE8DC]' : 'particle-wave-light text-[#0A0E1A]';
  const cardClass = isDarkMode ? 'spotlight-card-dark' : 'spotlight-card-light';
  const mutedText = isDarkMode ? 'text-[#8A93A8]' : 'text-[#64748B]';
  const navBg = isDarkMode ? 'bg-[#0A0E1A]/90 border-white/[0.08]' : 'bg-[#F9F8F5]/90 border-black/[0.08]';

  return (
    <div className={`min-h-screen ${bgCanvas} font-sans antialiased selection:bg-[#E11D48] selection:text-white relative`}>
      
      {/* JSON-LD Schema Markup for Search Engine Optimization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            "headline": article.title,
            "description": article.summary,
            "author": {
              "@type": "Person",
              "name": article.authorName
            },
            "publisher": {
              "@type": "Organization",
              "name": "Sektor Lokal Web"
            },
            "datePublished": "2026-09-02"
          })
        }}
      />

      {/* ECIDNI FLOATING RED CONSTELLATION WAVE */}
      <ConstellationCanvas isDarkMode={isDarkMode} />

      {/* Top Hairline Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 right-0 h-[2px] bg-[#E11D48] z-50 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* HEADER NAVIGATION */}
      <header className={`sticky top-0 z-40 backdrop-blur-md border-b px-6 py-4 transition-colors ${navBg}`}>
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          
          <Link href="/profil/ferry-irwandi#artikel" className="flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-[#E11D48] hover:underline">
            <ArrowLeft className="w-4 h-4" />
            <span>KEMBALI KE PROFIL</span>
          </Link>

          <div className="flex items-center gap-3">
            {/* Share Button */}
            <button
              onClick={handleCopyLink}
              className={`px-3 py-1.5 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-all shadow-sm ${
                isDarkMode 
                  ? 'bg-[#111726] border-white/10 text-[#EDE8DC] hover:border-[#E11D48]' 
                  : 'bg-white border-black/10 text-[#0A0E1A] hover:border-[#E11D48]'
              }`}
            >
              {copiedToast ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Share2 className="w-3.5 h-3.5 text-[#E11D48]" />}
              <span>{copiedToast ? 'TAUTAN TERSALIN' : 'BAGIKAN'}</span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 rounded-xl border text-xs font-semibold flex items-center gap-2 transition-all shadow-sm ${
                isDarkMode 
                  ? 'bg-[#111726] border-white/10 text-[#EDE8DC] hover:border-[#E11D48]' 
                  : 'bg-white border-black/10 text-[#0A0E1A] hover:border-[#E11D48]'
              }`}
            >
              {isDarkMode ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-indigo-600" />}
            </button>
          </div>

        </div>
      </header>

      {/* ARTICLE CONTENT CONTAINER */}
      <main className="max-w-3xl mx-auto px-6 py-12 md:py-20 relative z-10 space-y-10">
        
        {/* ARTICLE HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          {/* Metadata Badges */}
          <div className="flex items-center gap-3 text-xs font-mono font-bold text-[#E11D48]">
            <span className="px-3 py-1 rounded-full bg-[#E11D48]/10 border border-[#E11D48]/30 uppercase">
              {article.tag}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{article.readTime}</span>
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display uppercase tracking-tight leading-[1.05]">
            {article.title}
          </h1>

          {/* Lead Summary */}
          <p className="text-lg sm:text-xl font-editorial italic text-inherit/90 leading-relaxed border-l-2 border-[#E11D48] pl-4">
            {article.summary}
          </p>

          {/* Author Byline */}
          <div className="pt-4 border-t border-inherit/10 flex items-center gap-4">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#E11D48]/40 shrink-0">
              <Image 
                src={article.authorPhoto} 
                alt={article.authorName} 
                fill 
                sizes="48px"
                className="object-cover filter grayscale contrast-125"
              />
            </div>
            <div>
              <p className="font-display text-base uppercase text-inherit">{article.authorName}</p>
              <p className={`text-xs ${mutedText}`}>{article.authorTitle} • {article.publishedDate}</p>
            </div>
          </div>
        </motion.div>

        {/* ARTICLE BODY PARAGRAPHS */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6 text-base sm:text-lg leading-relaxed text-inherit/90 text-justify font-serif"
        >
          {article.paragraphs.map((p, idx) => (
            <p key={idx} className={idx === 0 ? "first-letter:text-5xl first-letter:font-display first-letter:font-bold first-letter:mr-3 first-letter:float-left first-letter:text-[#E11D48]" : ""}>
              {p}
            </p>
          ))}

          {/* Callout Quote */}
          <div className={`my-8 p-6 sm:p-8 rounded-3xl border shadow-sm ${cardClass}`}>
            <blockquote className="font-editorial italic text-lg sm:text-xl leading-relaxed text-[#E11D48]">
              &ldquo;{article.quote}&rdquo;
            </blockquote>
          </div>
        </motion.div>

        {/* FOOTER CTA */}
        <div className="pt-8 border-t border-inherit/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link href="/profil/ferry-irwandi" className="text-xs font-mono font-bold text-[#E11D48] hover:underline flex items-center gap-1">
            <ArrowLeft className="w-4 h-4" />
            <span>KEMBALI KE PROFIL FERRY IRWANDI</span>
          </Link>
          <button onClick={handleCopyLink} className="px-5 py-2.5 bg-[#E11D48] text-white font-bold text-xs rounded-xl flex items-center gap-1.5 shadow-md shadow-[#E11D48]/30">
            <Share2 className="w-4 h-4" />
            <span>BAGIKAN ARTIKEL INI</span>
          </button>
        </div>

      </main>

      {/* FOOTER */}
      <footer className={`border-t py-12 px-6 mt-16 ${isDarkMode ? 'border-white/[0.08]' : 'border-black/[0.08]'}`}>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <div className="flex items-center gap-2 font-display text-lg text-inherit">
            <span>SEKTOR LOKAL</span>
            <span className="w-2 h-2 rounded-full bg-[#E11D48]" />
          </div>
          <p className={mutedText}>
            © 2026 Sektor Lokal. Penerbitan Esai & Literasi Kritis Warga Indonesia.
          </p>
        </div>
      </footer>

    </div>
  );
}
