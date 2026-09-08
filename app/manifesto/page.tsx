'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Sparkles, ArrowRight, BookOpen, Quote, ShieldCheck, Compass, Eye, Building2 } from 'lucide-react';
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

      <main className="max-w-4xl mx-auto px-6 relative z-10 space-y-16 py-12 flex-1 w-full">
        
        {/* Breadcrumbs */}
        <Breadcrumbs 
          items={[{ label: 'Manifesto Jiwa Raga Bangsa' }]} 
          isDarkMode={isDarkMode}
        />

        {/* HERO TITLE */}
        <section className="space-y-6 text-center pt-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E11D48]/40 bg-[#E11D48]/10 text-[#E11D48] text-xs font-mono font-bold tracking-widest uppercase shadow-crimson-subtle">
            <Compass className="w-3.5 h-3.5" />
            <span>DEKLARASI SIKAP & KOMPAS EDITORIAL</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display uppercase tracking-tight leading-[0.94]">
            MANIFESTASI JIWA RAGA BANGSA DARI SEBUTAN LOKAL
          </h1>

          <p className="font-editorial italic text-xl sm:text-2xl text-[#E11D48] font-semibold max-w-2xl mx-auto pt-2">
            &ldquo;Lokal bukan batas. Lokal adalah akar.&rdquo;
          </p>
        </section>

        {/* PULL QUOTE CARD */}
        <div className={`p-8 sm:p-10 rounded-3xl border shadow-crimson-subtle ${cardClass}`}>
          <div className="flex items-start gap-4">
            <Quote className="w-8 h-8 text-[#E11D48] shrink-0 opacity-80" />
            <div className="space-y-2">
              <span className="text-xs font-mono text-[#E11D48] font-bold uppercase tracking-widest">
                BENANG MERAH
              </span>
              <p className="text-base sm:text-lg leading-relaxed font-serif italic text-justify text-inherit/90">
                Terlalu sibuk melihat yang datang dari luar sampai lupa melihat apa yang tumbuh dari tanah sendiri. Sektor Lokal hadir sebagai ruang untuk menemukan kembali manusia, karya, dan ide yang lahir, tumbuh, bergerak, dan berakar di Indonesia.
              </p>
            </div>
          </div>
        </div>

        {/* 3 BABAK GERAKAN MANIFESTO */}
        <article className="space-y-16 text-base sm:text-lg leading-relaxed text-justify font-sans">
          
          {/* BABAK I */}
          <section className="space-y-6">
            <div className="flex items-center gap-3 border-b pb-3 border-inherit/10">
              <span className="font-mono text-xs text-[#E11D48] font-bold">GERAKAN I //</span>
              <h2 className="text-2xl sm:text-3xl font-display uppercase tracking-tight">
                LOKAL BUKAN BATAS, LOKAL ADALAH AKAR
              </h2>
            </div>
            
            <p>
              Kata <em>&ldquo;lokal&rdquo;</em> kerap disalahartikan sebagai lawan dari modernitas—dianggap kecil, kuno, tradisional yang tertinggal, atau inferior di hadapan gemerlap produk impor. Seolah-olah kemajuan hanya bisa diraih dengan menjiplak mentah-mentah apa pun yang datang dari seberang samudera.
            </p>
            
            <p>
              <strong>Sektor Lokal menolak pandangan tersebut.</strong> Bagi kami, ukuran lokal bukan seberapa kuno atau tradisional bentuknya, melainkan seberapa jelas akar relasinya dengan Indonesia. Sebuah teknologi mutakhir dapat lokal. Sebuah riset kecerdasan buatan dapat lokal. Seorang seniman, petani, ilmuwan tomografi di Tangerang, penenun lontar di Flores, hingga perancang sepeda bambu di pelosok Temanggung—semuanya adalah wujud nyata bahwa kualitas kelas dunia bisa tumbuh subur dari tanah air kita sendiri.
            </p>
          </section>

          {/* BABAK II */}
          <section className="space-y-6">
            <div className="flex items-center gap-3 border-b pb-3 border-inherit/10">
              <span className="font-mono text-xs text-[#E11D48] font-bold">GERAKAN II //</span>
              <h2 className="text-2xl sm:text-3xl font-display uppercase tracking-tight">
                MANUSIA DI BALIK BENTANG ALAM
              </h2>
            </div>
            
            <p>
              Kita terbiasa membanggakan bentang alam nusantara: rimba lebat, laut luas, dan komoditas tambang melimpah. Namun di balik riuh angka statistik ekonomi dan devisa pariwisata, kita kerap melupakan elemen yang paling penting: <strong>manusia-manusianya</strong>.
            </p>
            
            <p>
              Apa artinya hutan hujan lebat jika perempuan penjaga rimba di garis depannya diabaikan? Apa artinya ribuan ton biji kakao jika petaninya tercekik kemiskinan dan hanya menjadi penonton cokelat impor di rak supermarket kota? Melalui Sektor Lokal, kami mengembalikan perhatian kepada mereka yang bekerja dengan integritas, menjaga ruang hidup, dan merawat masa depan bersama dalam hening.
            </p>
          </section>

          {/* BABAK III */}
          <section className="space-y-6">
            <div className="flex items-center gap-3 border-b pb-3 border-inherit/10">
              <span className="font-mono text-xs text-[#E11D48] font-bold">GERAKAN III //</span>
              <h2 className="text-2xl sm:text-3xl font-display uppercase tracking-tight">
                MERATAKAN STATUS SIMBOLIK: SEMUA ADALAH WARGA
              </h2>
            </div>
            
            <p>
              Kami sengaja menamai segmen manusia kami sebagai <strong>&ldquo;Warga Lokal&rdquo;</strong>. Kata warga dipakai bukan untuk merendahkan, melainkan untuk meratakan status simbolik. Seorang idola publik, ilmuwan paten, pegiat adat, seniman independen, hingga petani bukit tandus yang menanam pohon selama puluhan tahun—pada hakikatnya mereka semua adalah sesama warga negara Indonesia.
            </p>
            
            <p>
              Tujuan kami bukan membuat pembaca merasa kecil di hadapan figur yang luar biasa. Sebaliknya, kami ingin memperlihatkan bahwa tindakan bermakna dapat lahir dari warga biasa yang memilih bertindak. Di situlah fungsi <strong>&ldquo;asa&rdquo;</strong>: menyalakan keberanian bahwa setiap dari kita pun memiliki ruang untuk memberi arti bagi tanah tempat kita berpijak.
            </p>
          </section>

        </article>

        {/* CLOSING ENDORSEMENT & CTA */}
        <section className={`p-8 sm:p-12 rounded-3xl border space-y-6 text-center ${cardClass}`}>
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
            SEKTOR LOKAL • Media Kurasi & Ruang Penemuan Indonesia
          </div>
        </section>

      </main>

      <Footer isDarkMode={isDarkMode} />

    </div>
  );
}
