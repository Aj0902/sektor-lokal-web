'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { 
  ArrowLeft, 
  Share2, 
  Clock, 
  Check, 
  BookOpen
} from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { createClient } from '../../../lib/supabase/client';
import { Article } from '../../../lib/supabase/types';

export default function ArticleDetailPage() {
  const params = useParams();
  const rawSlug = (params?.slug as string) || 'analisis-kritis-literasi-keuangan';

  const [isDarkMode, setIsDarkMode] = useState(true);
  const [copiedToast, setCopiedToast] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const [articleData, setArticleData] = useState<{
    title: string;
    tag: string;
    readTime: string;
    authorName: string;
    authorTitle: string;
    authorPhoto: string;
    authorSlug?: string;
    publishedDate: string;
    summary: string;
    paragraphs: string[];
    quote: string;
  } | null>(null);

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

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const supabase = createClient();
        
        // Fetch all articles from Supabase to find best slug match
        const { data: articles, error } = await supabase.from('articles_warga').select('*');
        
        if (articles && articles.length > 0 && !error) {
          const cleanRawSlug = decodeURIComponent(rawSlug).toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');

          const matched = articles.find((a: Article) => {
            const articleSlug = a.title ? a.title.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-') : '';
            return (
              a.id === rawSlug ||
              articleSlug === cleanRawSlug ||
              (a.link_url && a.link_url.toLowerCase().includes(cleanRawSlug)) ||
              (articleSlug.length > 3 && cleanRawSlug.includes(articleSlug)) ||
              (cleanRawSlug.length > 3 && articleSlug.includes(cleanRawSlug))
            );
          }) || articles[0];

          if (matched) {
            let authorName = "FERRY IRWANDI";
            let authorTitle = "Penjaga Nalar • Kreator Malaka Project";
            let authorPhoto = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80";
            let authorSlug = "ferry-irwandi";

            if (matched.profile_id) {
              const { data: prof } = await supabase.from('profiles_warga').select('*').eq('id', matched.profile_id).single();
              if (prof) {
                authorName = prof.name || authorName;
                authorTitle = prof.title || authorTitle;
                authorPhoto = prof.photo_url || authorPhoto;
                authorSlug = prof.slug || authorSlug;
              }
            }

            const rawContent = matched.content_full || matched.description || '';
            const splitParagraphs = rawContent.split(/\n\s*\n/).map((p: string) => p.trim()).filter((p: string) => p.length > 0);

            setArticleData({
              title: matched.title,
              tag: matched.tag || 'ESAI KRITIS',
              readTime: matched.read_time || '5 Menit Membaca',
              authorName,
              authorTitle,
              authorPhoto,
              authorSlug,
              publishedDate: 'Dipublikasikan via Ruang Redaksi Sektor Lokal',
              summary: matched.description || '',
              paragraphs: splitParagraphs.length > 0 ? splitParagraphs : [matched.description],
              quote: matched.description ? `"${matched.description}"` : 'Ketiadaan nalar kritis adalah pupuk paling subur bagi bertumbuhnya eksploitasi.'
            });
            return;
          }
        }
      } catch (err) {
        console.error('Error fetching article from Supabase:', err);
      }

      // Fallback Sample Article
      setArticleData({
        title: "Analisis Kritis Keuangan & Benteng Nalar Masyarakat",
        tag: "ESAI KRITIS",
        readTime: "5 Menit Membaca",
        authorName: "FERRY IRWANDI",
        authorTitle: "Penjaga Nalar • Kreator Malaka Project",
        authorPhoto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
        authorSlug: "ferry-irwandi",
        publishedDate: "2 September 2026",
        summary: "Mengapa kemampuan bernalar kritis dan pengujian logika adalah instrumen pertahanan diri paling mendasar di tengah gempuran skema penipuan digital dan algoritma judi online.",
        paragraphs: [
          "Di era di mana informasi bergerak lebih cepat dari nalar sehat, kejahatan finansial telah berevolusi menjadi bentuk yang sangat canggih. Ia tidak lagi datang membawa topeng penjahat konvensional, melainkan menyamar sebagai 'kesempatan emas', 'investasi masa depan', atau 'jalan pintas kaya mendadak'.",
          "Matematika di balik skema ponzi dan judi online selalu sama: bandar dan pengelola selalu memegang keunggulan statistik mutlak. Namun mengapa jutaan masyarakat rentan terus terperosok ke dalam lubang yang sama? Jawabannya terletak pada kerapuhan nalar kritis dan manipulasi kognitif psikologis.",
          "Stoikisme dan logika sains mengajarkan kita satu hal fundamental: pisahkan antara apa yang berada dalam kendali nalar kita dan apa yang sekadar ilusi hasil rakitan algoritma asing. Membangun literasi keuangan bukan sekadar menghafal instrumen saham atau obligasi, melainkan melatih otot skeptisisme rasional sebelum menyerahkan aset hidup kita.",
          "Benteng terakhir kebebasan seorang individu bukanlah jumlah saldo di dalam rekeningnya, melainkan kedaulatan pikirannya untuk tidak bisa dibeli atau ditipu oleh janji-janji manis tanpa dasar matematika."
        ],
        quote: "Ketiadaan nalar kritis adalah pupuk paling subur bagi bertumbuhnya eksploitasi dan perbudakan finansial modern."
      });
    };

    fetchArticle();
  }, [rawSlug]);

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopiedToast(true);
      setTimeout(() => setCopiedToast(false), 2500);
    }
  };

  if (!articleData) {
    return (
      <div className="min-h-screen bg-[#07090E] text-[#F5EFEB] flex items-center justify-center font-mono text-xs text-[#E11D48]">
        <div className="w-5 h-5 border-2 border-[#E11D48] border-t-transparent rounded-full animate-spin mr-3" />
        <span>MEMUAT BERKAS ESAI...</span>
      </div>
    );
  }

  const bgClass = isDarkMode ? 'bg-[#07090E] text-[#F5EFEB]' : 'bg-[#F8F5EE] text-[#07090E]';
  const mutedText = isDarkMode ? 'text-[#8E95A5]' : 'text-black/60';

  return (
    <div className={`min-h-screen ${bgClass} font-sans antialiased selection:bg-[#E11D48] selection:text-white flex flex-col`}>
      
      {/* Top Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 right-0 h-1 bg-[#E11D48] z-50 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      <Navbar isDarkMode={isDarkMode} onToggleDarkMode={() => setIsDarkMode(!isDarkMode)} />

      {/* ARTICLE READER CONTAINER */}
      <main className="flex-1 w-full max-w-4xl mx-auto px-6 py-12 sm:py-20 space-y-12">
        
        {/* Back Link & Dossier Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-current/10 pb-4 text-xs font-mono">
          <Link 
            href="/artikel" 
            className="inline-flex items-center gap-2 text-current/70 hover:text-[#E11D48] uppercase tracking-wider transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Koleksi Esai Redaksi</span>
          </Link>

          <button 
            onClick={handleCopyLink}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-current/20 hover:border-[#E11D48] text-xs font-mono uppercase tracking-wider transition-colors tactile-btn"
          >
            {copiedToast ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5 text-[#E11D48]" />}
            <span>{copiedToast ? 'Tautan Tersalin' : 'Bagikan'}</span>
          </button>
        </div>

        {/* ARTICLE HEADER */}
        <motion.header 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          {/* Tag & Read Time */}
          <div className="flex items-center gap-3 text-xs font-mono font-bold text-[#E11D48] uppercase tracking-widest">
            <span className="px-2.5 py-0.5 bg-[#E11D48]/10 border border-[#E11D48]/30">
              {articleData.tag}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{articleData.readTime}</span>
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-display uppercase tracking-tight leading-[1.05] break-words">
            {articleData.title}
          </h1>

          {/* Lead Summary */}
          {articleData.summary && (
            <p className="text-lg sm:text-xl font-editorial italic text-current/90 leading-relaxed border-l-2 border-[#E11D48] pl-4 descender-safe">
              &ldquo;{articleData.summary}&rdquo;
            </p>
          )}

          {/* Related Profile Context */}
          <div className="pt-6 border-t border-current/10">
            <span className="text-[10px] font-mono text-[#E11D48] font-bold uppercase tracking-widest block mb-3">
              PROFIL TERKAIT
            </span>
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-none border border-current/20 overflow-hidden shrink-0">
                  <Image 
                    src={articleData.authorPhoto} 
                    alt={articleData.authorName} 
                    fill 
                    className="object-cover portrait-bw"
                  />
                </div>
                <div>
                  <p className="font-display text-base uppercase text-current">{articleData.authorName}</p>
                  <p className={`text-xs font-mono ${mutedText}`}>{articleData.authorTitle}</p>
                </div>
              </div>

              {articleData.authorSlug && (
                <Link 
                  href={`/profil/${articleData.authorSlug}`}
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 border border-[#E11D48] text-[#E11D48] text-xs font-mono uppercase font-bold tracking-wider hover:bg-[#E11D48] hover:text-white transition-colors tactile-btn"
                >
                  <span>Lihat Profil Figur &rarr;</span>
                </Link>
              )}
            </div>
          </div>
        </motion.header>

        {/* ARTICLE BODY */}
        <motion.article 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="space-y-6 text-base sm:text-lg leading-relaxed text-current/90 font-sans"
        >
          {articleData.paragraphs.map((p, idx) => (
            <p key={idx} className={idx === 0 ? "first-letter:text-5xl first-letter:font-display first-letter:float-left first-letter:mr-3 first-letter:text-[#E11D48] leading-relaxed" : "leading-relaxed"}>
              {p}
            </p>
          ))}

          {/* Callout Quote */}
          {articleData.quote && (
            <div className="my-10 p-6 sm:p-8 border-l-4 border-[#E11D48] bg-current/[0.03] space-y-2">
              <blockquote className="font-editorial italic text-xl sm:text-2xl leading-snug text-current descender-safe">
                &ldquo;{articleData.quote}&rdquo;
              </blockquote>
              <span className="text-xs font-mono text-[#E11D48] font-bold block uppercase tracking-widest pt-2">
                KUTIPAN REDAKSI
              </span>
            </div>
          )}
        </motion.article>

        {/* BOTTOM ACTION BAR */}
        <div className="pt-8 border-t border-current/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link 
            href={articleData.authorSlug ? `/profil/${articleData.authorSlug}` : '/warga-lokal'} 
            className="text-xs font-mono font-bold text-[#E11D48] hover:underline flex items-center gap-1 uppercase tracking-wider"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>KEMBALI KE BERKAS PROFIL</span>
          </Link>

          <button 
            onClick={handleCopyLink} 
            className="px-5 py-2.5 bg-[#E11D48] hover:bg-white hover:text-black text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors tactile-btn"
          >
            <Share2 className="w-4 h-4" />
            <span>BAGIKAN ARTIKEL INI</span>
          </button>
        </div>

      </main>

      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}
