'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Sparkles, 
  ArrowRight, 
  BookOpen, 
  Quote, 
  ShieldCheck, 
  Compass, 
  Eye, 
  Building2,
  TreePine,
  Cpu,
  HeartHandshake,
  ArrowUpRight
} from 'lucide-react';
import { motion } from 'framer-motion';
import ConstellationCanvas from '../../components/ConstellationCanvas';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Breadcrumbs from '../../components/Breadcrumbs';

export default function ManifestoPage() {
  const [isDarkMode, setIsDarkMode] = useState(false);

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

      <main className="max-w-4xl mx-auto px-6 relative z-10 space-y-20 py-12 flex-1 w-full">
        
        {/* Breadcrumbs */}
        <Breadcrumbs 
          items={[{ label: 'Manifesto Jiwa Raga Bangsa' }]} 
          isDarkMode={isDarkMode}
        />

        {/* HERO TITLE & COMPASS */}
        <section className="space-y-8 text-center pt-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#E11D48]/40 bg-[#E11D48]/10 text-[#E11D48] text-xs font-mono font-bold tracking-widest uppercase shadow-crimson-subtle">
            <Compass className="w-3.5 h-3.5" />
            <span>DEKLARASI SIKAP & KOMPAS EDITORIAL</span>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-display uppercase tracking-tight leading-[0.92]">
              MANIFESTASI JIWA RAGA BANGSA DARI SEBUTAN LOKAL
            </h1>

            <p className="font-editorial italic text-2xl sm:text-3xl text-[#E11D48] font-semibold max-w-2xl mx-auto pt-2">
              &ldquo;Lokal bukan batas. Lokal adalah akar.&rdquo;
            </p>
          </div>
        </section>

        {/* CENTRAL PULL-QUOTE BOX (BENANG MERAH) */}
        <div className={`p-8 sm:p-12 rounded-3xl border border-[#E11D48]/30 shadow-crimson-subtle ${cardClass} relative overflow-hidden`}>
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#E11D48]/5 rounded-full blur-3xl pointer-events-none" />
          <div className="flex items-start gap-5 relative z-10">
            <Quote className="w-10 h-10 text-[#E11D48] shrink-0 opacity-90 mt-1" />
            <div className="space-y-3">
              <span className="text-xs font-mono text-[#E11D48] font-bold uppercase tracking-widest block">
                BENANG MERAH KAMI
              </span>
              <p className="text-lg sm:text-xl leading-relaxed font-serif italic text-justify text-inherit">
                &ldquo;Terlalu sibuk melihat yang datang dari luar sampai lupa melihat apa yang tumbuh dari tanah sendiri. Sektor Lokal hadir sebagai ruang untuk menemukan kembali manusia, karya, dan ide yang lahir, tumbuh, bergerak, dan berakar di Indonesia.&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* 3 BABAK GERAKAN MANIFESTO */}
        <article className="space-y-20 text-base sm:text-lg leading-relaxed text-justify font-sans">
          
          {/* GERAKAN I */}
          <section className="space-y-6">
            <div className="flex items-center gap-3 border-b pb-4 border-inherit/10">
              <span className="font-mono text-xs text-[#E11D48] font-bold px-2 py-0.5 rounded bg-[#E11D48]/10 border border-[#E11D48]/20">
                GERAKAN 01
              </span>
              <h2 className="text-2xl sm:text-4xl font-display uppercase tracking-tight text-inherit">
                LOKAL BUKAN BATAS, LOKAL ADALAH AKAR
              </h2>
            </div>
            
            <p>
              Kata <em>&ldquo;lokal&rdquo;</em> terlalu lama disempitkan menjadi stigma yang keliru: dianggap kuno, tradisional yang tertinggal, atau inferior di hadapan gemerlap tren luar. Seolah-olah kemajuan hanya bisa diraih dengan menjadi peniru apa pun yang datang dari seberang samudera.
            </p>
            
            <p>
              <strong>Sektor Lokal menolak premis tersebut secara mutlak.</strong> Bagi kami, ukuran lokal bukan seberapa kuno atau tradisional bentuknya, melainkan seberapa jelas akar relasinya dengan tanah air.
            </p>

            {/* Concrete Examples Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className={`p-5 rounded-2xl border border-inherit/10 bg-inherit/40 space-y-2 text-xs font-mono ${cardClass}`}>
                <div className="flex items-center gap-2 text-[#E11D48] font-bold">
                  <Cpu className="w-4 h-4" />
                  <span>TEKNOLOGI BISA LOKAL</span>
                </div>
                <p className={mutedText}>
                  Dari algoritma transmisi nirkabel 4G di Kediri hingga paten tomografi 4D medan listrik di Tangerang.
                </p>
              </div>

              <div className={`p-5 rounded-2xl border border-inherit/10 bg-inherit/40 space-y-2 text-xs font-mono ${cardClass}`}>
                <div className="flex items-center gap-2 text-[#E11D48] font-bold">
                  <Building2 className="w-4 h-4" />
                  <span>KARYA BISA GLOBAL</span>
                </div>
                <p className={mutedText}>
                  Dari sepeda bambu Spedagi di Dusun Kandangan Temanggung yang lolos uji jalan ketat di Jerman dan Jepang.
                </p>
              </div>

              <div className={`p-5 rounded-2xl border border-inherit/10 bg-inherit/40 space-y-2 text-xs font-mono ${cardClass}`}>
                <div className="flex items-center gap-2 text-[#E11D48] font-bold">
                  <TreePine className="w-4 h-4" />
                  <span>EKOLOGI BERDAULAT</span>
                </div>
                <p className={mutedText}>
                  Dari pelestarian 900+ varietas benih pusaka petani adat hingga energi mikrohidro mandiri desa.
                </p>
              </div>
            </div>
          </section>

          {/* GERAKAN II */}
          <section className="space-y-6">
            <div className="flex items-center gap-3 border-b pb-4 border-inherit/10">
              <span className="font-mono text-xs text-[#E11D48] font-bold px-2 py-0.5 rounded bg-[#E11D48]/10 border border-[#E11D48]/20">
                GERAKAN 02
              </span>
              <h2 className="text-2xl sm:text-4xl font-display uppercase tracking-tight text-inherit">
                MANUSIA DI BALIK BENTANG ALAM
              </h2>
            </div>
            
            <p>
              Kita sering kali terjebak dalam romantisisme bentang alam: membanggakan hutan hujan tropis lebat, laut yang luas, dan angka ekspor komoditas tambang. Namun di tengah perbincangan megah tentang devisa dan pertumbuhan statistik, kita kerap melupakan elemen paling berharga: <strong>manusia-manusianya</strong>.
            </p>
            
            <div className={`p-6 rounded-2xl border-l-4 border-[#E11D48] bg-inherit/50 space-y-2 text-sm sm:text-base font-serif italic ${cardClass}`}>
              <p>
                &ldquo;Apa artinya hutan lebat jika penjaga rimba perempuannya diabaikan? Apa artinya ribuan ton biji kakao jika petaninya hanya jadi penonton batangan cokelat impor di rak supermarket kota?&rdquo;
              </p>
            </div>

            <p>
              Melalui Sektor Lokal, kami mengembalikan fokus cerita kepada mereka yang bekerja nyata: menjaga ruang hidup, merawat kearifan lokal, dan memperjuangkan masa depan bersama tanpa pamrih pencitraan.
            </p>
          </section>

          {/* GERAKAN III */}
          <section className="space-y-6">
            <div className="flex items-center gap-3 border-b pb-4 border-inherit/10">
              <span className="font-mono text-xs text-[#E11D48] font-bold px-2 py-0.5 rounded bg-[#E11D48]/10 border border-[#E11D48]/20">
                GERAKAN 03
              </span>
              <h2 className="text-2xl sm:text-4xl font-display uppercase tracking-tight text-inherit">
                MERATAKAN STATUS SIMBOLIK: SEMUA ADALAH WARGA
              </h2>
            </div>
            
            <p>
              Kami sengaja menamai kurasi manusia kami sebagai <strong>&ldquo;Warga Lokal&rdquo;</strong>. Kata warga dipakai bukan untuk mengecilkan peran siapa pun, melainkan untuk meratakan status simbolik: seorang idola publik, ilmuwan paten, akademisi hukum tata negara, seniman independen, hingga petani lereng bukit tandus yang menanam beringin selama 25 tahun—semuanya adalah sesama warga negara Indonesia.
            </p>
            
            <p>
              Tujuan editorial kami bukan membuat pembaca merasa kerdil di hadapan tokoh-tokoh besar. Sebaliknya, kami ingin memperlihatkan bahwa orang-orang yang melakukan hal luar biasa itu pada mulanya adalah warga biasa yang <strong>memilih bertindak</strong>.
            </p>

            <div className={`p-6 sm:p-8 rounded-2xl border border-inherit/10 space-y-3 bg-[#E11D48]/5 border-[#E11D48]/20`}>
              <div className="flex items-center gap-2 text-xs font-mono text-[#E11D48] font-bold uppercase">
                <HeartHandshake className="w-4 h-4" />
                <span>FUNGSI ASA (EMPOWERMENT)</span>
              </div>
              <p className="text-sm sm:text-base text-inherit leading-relaxed">
                Di situlah letak <strong>asa</strong>: menyadarkan kita bahwa siapapun kita hari ini, kita tidak perlu menunggu panggung megah untuk memulai sesuatu yang bermakna bagi tanah air sendiri.
              </p>
            </div>
          </section>

        </article>

        {/* CLOSING ENDORSEMENT & CTA */}
        <section className={`p-8 sm:p-12 rounded-3xl border border-[#E11D48]/30 space-y-6 text-center shadow-crimson-subtle ${cardClass}`}>
          <div className="space-y-2">
            <h3 className="text-2xl sm:text-3xl font-display uppercase">
              MULAI MENJELAJAHI RUANG DISCOVERY KAMI
            </h3>
            <p className={`text-sm max-w-xl mx-auto ${mutedText}`}>
              Temukan cerita 100 Warga, pelajari proses di balik Brand Lokal mandiri, dan rawat akal sehat bersama kami.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2 font-mono text-xs">
            <Link 
              href="/arsip/warga"
              className="px-6 py-3.5 bg-[#E11D48] hover:bg-[#BE123C] text-white font-bold uppercase rounded-xl shadow-crimson-glow transition flex items-center gap-2"
            >
              <Eye className="w-4 h-4" />
              <span>Telusuri Cerita Warga</span>
            </Link>
            <Link 
              href="/arsip/brand"
              className={`px-6 py-3.5 border border-inherit/20 hover:border-[#E11D48] hover:text-[#E11D48] font-bold uppercase rounded-xl transition flex items-center gap-2 ${
                isDarkMode ? 'bg-[#0E131F] text-[#F5EFEB]' : 'bg-white text-[#0A0E1A]'
              }`}
            >
              <Building2 className="w-4 h-4 text-[#E11D48]" />
              <span>Telusuri Brand Lokal</span>
            </Link>
          </div>

          <div className="pt-6 border-t border-inherit/10 text-xs font-mono opacity-70">
            SEKTOR LOKAL • Ruang Penemuan & Kurasi Indonesia
          </div>
        </section>

      </main>

      <Footer isDarkMode={isDarkMode} />

    </div>
  );
}
