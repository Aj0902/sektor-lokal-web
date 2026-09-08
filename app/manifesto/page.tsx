'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Sparkles, ArrowRight, BookOpen, Quote, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import ConstellationCanvas from '../../components/ConstellationCanvas';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Breadcrumbs from '../../components/Breadcrumbs';

export default function ManifestoPage() {
  const [isDarkMode, setIsDarkMode] = useState(false);

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

      <main className="max-w-4xl mx-auto px-6 relative z-10 space-y-16 py-12 flex-1 w-full">
        
        {/* Breadcrumbs */}
        <Breadcrumbs 
          items={[{ label: 'Manifesto Jiwa Raga Bangsa' }]} 
          isDarkMode={isDarkMode}
        />

        {/* HERO TITLE */}
        <section className="space-y-6 text-center pt-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#E11D48]/30 bg-[#E11D48]/10 text-[#E11D48] text-xs font-mono font-bold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>DEKLARASI SIKAP & KANON PERADABAN</span>
          </div>

          <h1 className="text-5xl sm:text-7xl font-display uppercase tracking-tight leading-[0.92]">
            MANIFESTASI JIWA RAGA BANGSA DARI SEBUTAN LOKAL
          </h1>

          <p className="font-editorial italic text-xl sm:text-2xl text-[#E11D48] font-semibold max-w-2xl mx-auto pt-2">
            &ldquo;Lokal bukan berarti terbelakang; lokal adalah wujud cinta tanah air paling berdaulat di era ini.&rdquo;
          </p>
        </section>

        {/* PULL QUOTE CARD */}
        <div className={`p-8 sm:p-10 rounded-3xl border ${cardClass}`}>
          <div className="flex items-start gap-4">
            <Quote className="w-8 h-8 text-[#E11D48] shrink-0 opacity-60" />
            <p className="text-base sm:text-lg leading-relaxed font-serif italic text-justify">
              Di era di mana ruang-ruang publik dan algoritma pikiran kita diserbu oleh arus informasi serba dangkal dari luar, Sektor Lokal hadir sebagai jangkar: sebuah ruang kebebasan berekspresi, penemuan karya tak terduga, dan benteng penjaga akal sehat yang berpijak teguh di atas tanah air sendiri.
            </p>
          </div>
        </div>

        {/* 3 BABAK GERAKAN MANIFESTO */}
        <article className="space-y-16 text-base sm:text-lg leading-relaxed text-justify font-sans">
          
          {/* BABAK I */}
          <section className="space-y-6">
            <div className="flex items-center gap-3 border-b pb-3 border-inherit/10">
              <span className="font-mono text-xs text-[#E11D48] font-bold">BABAK I //</span>
              <h2 className="text-2xl sm:text-3xl font-display uppercase tracking-tight">
                DEKONSTRUKSI KATA &ldquo;LOKAL&rdquo;
              </h2>
            </div>
            
            <p>
              Terlalu lama kata <em>&ldquo;lokal&rdquo;</em> direduksi menjadi stigma yang menyedihkan: dianggap kuno, tradisional yang tertinggal, kedaerahan yang sempit, atau komoditas kelas dua yang inferior di hadapan gemerlap produk global. Wacana kemajuan sering kali didefinisikan secara keliru sebagai keharusan meniru apa pun yang datang dari seberang samudera.
            </p>
            
            <p>
              <strong>Sektor Lokal menolak premis tersebut secara mutlak.</strong> Bagi kami, lokal bukan berarti anti-kemajuan. Lokal adalah kesadaran tertinggi atas asal-usul tanah tempat kita berpijak. Lokal adalah keberanian merancang sepeda bambu berstandar ekspor di dusun Temanggung, merawat benih beras pusaka di ladang adat, mengurai rumus matematika nirkabel di pelosok Kediri, hingga membangun kapal bedah apung yang menerjang ombak Maluku demi warga kepulauan terpencil.
            </p>
          </section>

          {/* BABAK II */}
          <section className="space-y-6">
            <div className="flex items-center gap-3 border-b pb-3 border-inherit/10">
              <span className="font-mono text-xs text-[#E11D48] font-bold">BABAK II //</span>
              <h2 className="text-2xl sm:text-3xl font-display uppercase tracking-tight">
                MENOLAK LUPA PADA MANUSIA-MANUSIANYA
              </h2>
            </div>
            
            <p>
              Nusantara ini diberkahi bentang alam yang megah, laut yang melimpah, dan rimba yang berfungsi sebagai paru-paru bumi—sebuah surga di dunia yang tak ternilai harganya. Namun, di tengah perbincangan megah tentang komoditas tambang, devisa pariwisata, dan angka statistik pertumbuhan, kita sering kali melupakan elemen paling berharga dari bangsa ini: <strong>manusia-manusianya</strong>.
            </p>
            
            <p>
              Apa artinya hutan lebat jika penjaga rimba perempuannya dikriminalisasi? Apa artinya jutaan ton biji kakao jika petaninya tercekik kemiskinan dan hanya menjadi penonton batangan cokelat mewah impor? Melalui Sektor Lokal, kami mengembalikan sorotan kepada mereka yang selama ini bekerja dalam hening, menolak tunduk pada oligarki, dan memperjuangkan ruang hidup warga dengan integritas tanpa kompromi.
            </p>
          </section>

          {/* BABAK III */}
          <section className="space-y-6">
            <div className="flex items-center gap-3 border-b pb-3 border-inherit/10">
              <span className="font-mono text-xs text-[#E11D48] font-bold">BABAK III //</span>
              <h2 className="text-2xl sm:text-3xl font-display uppercase tracking-tight">
                MERATAKAN STATUS SIMBOLIK: SEMUA ADALAH WARGA
              </h2>
            </div>
            
            <p>
              Kami sengaja menamai kurasi tokoh kami sebagai <strong>&ldquo;Warga Lokal&rdquo;</strong>. Dari tokoh peraih penghargaan dunia, pemikir filsafat, akademisi hukum tata negara, seniman independen, hingga petani bukit tandus yang menanam beringin selama seperempat abad—kami meratakan status simboliknya.
            </p>
            
            <p>
              Kami tidak menempatkan mereka sebagai dewa-dewa langit yang jauh dari jangkauan pembaca. Kami menempatkan mereka sebagai sesama warga negara Indonesia. Sebab, ketika publik menyadari bahwa mereka yang melakukan hal-hal luar biasa itu pada hakikatnya adalah warga biasa yang memilih bertindak, di situlah <strong>asa dan daya gerak baru akan menyala di dada setiap anak bangsa.</strong>
            </p>
          </section>

        </article>

        {/* CLOSING ENDORSEMENT & CTA */}
        <section className={`p-8 sm:p-12 rounded-3xl border space-y-6 text-center ${cardClass}`}>
          <div className="space-y-2">
            <h3 className="text-2xl sm:text-3xl font-display uppercase">
              BERGABUNG DALAM GERAKAN KEDAULATAN LOKAL
            </h3>
            <p className={`text-sm max-w-xl mx-auto ${mutedText}`}>
              Jelajahi karya dan pemikiran 100 Warga Terkurasi, dukung Brand Lokal mandiri, dan rawat akal sehat bersama kami.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2 font-mono text-xs">
            <Link 
              href="/arsip/warga"
              className="px-6 py-3.5 bg-[#E11D48] hover:bg-[#BE123C] text-white font-bold uppercase rounded-xl shadow-lg shadow-[#E11D48]/30 transition"
            >
              <span>Jelajahi 100 Warga</span>
            </Link>
            <Link 
              href="/arsip/brand"
              className="px-6 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-xl shadow-lg shadow-indigo-600/30 transition"
            >
              <span>Jelajahi Brand Lokal</span>
            </Link>
          </div>

          <div className="pt-6 border-t border-inherit/10 text-xs font-mono opacity-70">
            Ditetapkan di Jakarta & Yogyakarta • Dewan Redaksi & Kurasi Sektor Lokal
          </div>
        </section>

      </main>

      <Footer isDarkMode={isDarkMode} />

    </div>
  );
}
