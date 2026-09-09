'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function HomePage() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const laciPreviews = [
    { num: '01', name: 'Penjaga Nalar', desc: 'Jejak berpikir kritis, jurnalisme presisi, dan uji logika.', count: '10 Warga' },
    { num: '02', name: 'Penyelamat Bumi', desc: 'Penjaga hutan hujan, pengolah limbah sirkular, & mikrohidro desa.', count: '10 Warga' },
    { num: '03', name: 'Pembangun Sistem', desc: 'Internet rakyat, paten tomografi 4D, civic tech, & AI lokal.', count: '10 Warga' },
    { num: '04', name: 'Pejuang Akar Rumput', desc: 'Perlindungan tanah adat, rumah sakit apung, & gotong royong.', count: '10 Warga' },
    { num: '05', name: 'Arsitek Usaha Mandiri', desc: 'Sepeda bambu desa, benih pusaka, anyaman lontar, & kulit sirkular.', count: '10 Warga' },
    { num: '06', name: 'Perawat Jiwa & Rasa', desc: 'Musik kontemplatif, sastra kesunyian, sinema, & empati warga.', count: '10 Warga' },
    { num: '07', name: 'Penjaga Tawa', desc: 'Komedi satir sosial, penelusuran absurditas, & tawa nalar sehat.', count: '10 Warga' },
    { num: '08', name: 'Pencerah Generasi', desc: 'Ruang belajar alternatif, literasi sains desa, & beasiswa komunitas.', count: '10 Warga' },
    { num: '09', name: 'Duta Talenta', desc: 'Karya rekayasa sains, sinema internasional, & riset genomik.', count: '10 Warga' },
    { num: '10', name: 'Panggung Ekspresi', desc: 'Kanal kreator bermartabat, pengarsipan budaya, & eksplorasi.', count: '10 Warga' }
  ];

  const brandPreviews = [
    { name: 'Spedagi Bamboo', category: 'Kriya & Mobilitas', origin: 'Temanggung', founder: 'Singgih S. Kartono', highlight: 'Sepeda bambu standar uji Jerman' },
    { name: 'JAVARA Indigenous', category: 'Pangan Pusaka', origin: 'Bekasi / Jakarta', founder: 'Helianti Hilman', highlight: 'Kurasi benih pangan pusaka 30+ negara' },
    { name: 'Du\'Anyam', category: 'Kriya & Kesehatan', origin: 'Flores Timur', founder: 'Azalea Ayuningtyas', highlight: 'Anyaman lontar dukung kesehatan ibu' },
    { name: 'Brodo Footwear', category: 'Manufaktur', origin: 'Bandung', founder: 'Yukka Harsono', highlight: 'Desain modern dari sentra Cibaduyut' },
    { name: 'CTech Labs', category: 'Deep-Tech', origin: 'Tangerang', founder: 'Dr. Warsito P.', highlight: 'Pemindai tomografi 4D tercepat dunia' },
    { name: 'Kata.ai', category: 'Kecerdasan Buatan', origin: 'Jakarta', founder: 'Irzan Raditya', highlight: 'NLP dialek informal nusantara' }
  ];

  const articlePreviews = [
    { title: 'Benteng Nalar Kritis di Tengah Gempuran Distorsi Algoritma', tag: 'ETIKA & NALAR', readTime: '6 Min', desc: 'Skeptisisme metodis adalah alat pertahanan diri...', slug: 'analisis-kritis-literasi-keuangan' },
    { title: 'Kedaulatan Pangan Akar Rumput: Melawan Monokultur, Menjaga Benih', tag: 'KRISIS EKOLOGIS', readTime: '8 Min', desc: 'Komunitas adat sebagai benteng terakhir pangan...', slug: 'kedaulatan-pangan-bukan-gimik' },
    { title: 'Membongkar Mental Inlander: Mengapa Karya Dusun Bisa Unggul', tag: 'KEDAULATAN BUDAYA', readTime: '7 Min', desc: 'Kualitas kelas dunia lahir dari kedalaman rasa...', slug: 'ilusi-kemajuan-di-balik-stigma-lokal' }
  ];

  return (
    <div className={`min-h-screen font-sans antialiased selection:bg-[#E11D48] selection:text-white ${isDarkMode ? 'bg-[#07090E]' : 'bg-[#F8F5EE]'}`}>
      <Navbar isDarkMode={isDarkMode} onToggleDarkMode={() => setIsDarkMode(!isDarkMode)} />

      <main className="relative">
        
        {/* Section 1: Split Hero */}
        <section className="grid grid-cols-1 md:grid-cols-2 min-h-screen magazine-split-hero border-b border-white/10">
          <div className="relative bg-[#07090E] text-[#F5EFEB] flex flex-col justify-center px-8 py-20 md:px-16 lg:px-24 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none watermark-text font-display text-[15vw] whitespace-nowrap overflow-hidden">
              SEKTOR LOKAL
            </div>
            
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative z-10 max-w-xl">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-display uppercase tracking-tight leading-[0.9] mb-8">
                MENEMUKAN APA YANG TUMBUH DARI TANAH SENDIRI
              </h1>
              <p className="font-editorial italic text-xl text-[#8E95A5] mb-12 border-l-2 border-[#E11D48] pl-6">
                Menemukan manusia, karya, dan ide yang berakar di Indonesia — sebelum semuanya lewat begitu saja ditelan arus linimasa.
              </p>
              <div className="flex flex-wrap gap-6 font-mono text-xs uppercase tracking-widest font-bold">
                <Link href="/arsip/warga" className="flex items-center gap-2 text-white hover:text-[#E11D48] transition-colors border-b border-transparent hover:border-[#E11D48] pb-1">
                  ARSIP WARGA <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/arsip/brand" className="flex items-center gap-2 text-white hover:text-[#E11D48] transition-colors border-b border-transparent hover:border-[#E11D48] pb-1">
                  ARSIP BRAND <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
          
          <div className="relative bg-[#E11D48] text-white flex flex-col justify-center px-8 py-20 md:px-16 lg:px-24">
            <div className="absolute left-6 top-0 bottom-0 flex flex-col justify-center">
              <span className="vertical-text font-mono text-xs tracking-widest opacity-80 uppercase rotate-180" style={{ writingMode: 'vertical-rl' }}>
                01 — RADAR UTAMA
              </span>
            </div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }} className="max-w-md mx-auto text-center pl-8 md:pl-0">
              <p className="font-editorial text-2xl md:text-3xl leading-snug">
                "Manifestasi jiwa raga bangsa dari sebutan lokal."
              </p>
            </motion.div>
          </div>
        </section>

        {/* Section 2: Katalog 10 Laci */}
        <section className="bg-[#F8F5EE] text-[#0A0E1A] py-32 px-6 md:px-16 border-b border-black/10">
          <div className="max-w-6xl mx-auto">
            <div className="mb-20 text-center">
              <span className="font-mono text-xs font-bold text-[#E11D48] tracking-widest uppercase block mb-4">10 LACI KURASI</span>
              <h2 className="text-4xl md:text-5xl font-display uppercase tracking-tight">ARSIP 100 WARGA LOKAL</h2>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-12">
              {laciPreviews.map((laci) => (
                <Link key={laci.num} href={`/arsip/warga?laci=${encodeURIComponent(laci.name)}`} className="group flex flex-col md:flex-row md:items-baseline gap-4 md:gap-8 pb-10 border-b border-black/10 relative">
                  <span className="font-display text-6xl md:text-8xl text-black/20 group-hover:text-[#E11D48] transition-colors shrink-0 leading-none">
                    {laci.num}
                  </span>
                  <div className="flex-1 space-y-2">
                    <h3 className="font-display text-2xl uppercase group-hover:text-[#E11D48] transition-colors">{laci.name}</h3>
                    <p className="font-sans text-[#64748B] text-sm max-w-lg">{laci.desc}</p>
                  </div>
                  <div className="font-mono text-xs font-bold uppercase text-[#E11D48] md:text-right shrink-0">
                    {laci.count}
                  </div>
                  <div className="absolute bottom-0 left-0 h-[2px] bg-[#E11D48] w-0 group-hover:w-full transition-all duration-500" />
                </Link>
              ))}
            </div>
            
            <div className="mt-20 text-center">
              <Link href="/arsip/warga" className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest hover:text-[#E11D48] transition-colors border-b border-black hover:border-[#E11D48] pb-1">
                BUKA DIREKTORI LENGKAP <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Section 3: Brand Showcase */}
        <section className="bg-[#E11D48] text-white py-32 px-6 md:px-16">
          <div className="max-w-6xl mx-auto">
            <div className="mb-20 text-center">
              <h2 className="text-4xl md:text-5xl font-display uppercase tracking-tight">6 BRAND LOKAL MANDIRI</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {brandPreviews.map((brand, idx) => (
                <div key={idx} className="border border-white/20 p-8 flex flex-col justify-between hover:bg-white/5 transition-colors">
                  <div className="space-y-4 mb-12">
                    <div className="flex justify-between items-center text-[10px] font-mono tracking-widest uppercase opacity-70 border-b border-white/20 pb-4">
                      <span>{brand.category}</span>
                      <span>{brand.origin}</span>
                    </div>
                    <h3 className="font-display text-2xl uppercase">{brand.name}</h3>
                    <p className="font-sans text-sm opacity-90 leading-relaxed">{brand.highlight}</p>
                  </div>
                  <div className="text-xs font-mono uppercase opacity-70">
                    Oleh: {brand.founder}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-20 text-center">
              <Link href="/arsip/brand" className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest hover:opacity-70 transition-opacity border-b border-white pb-1">
                BUKA DIREKTORI BRAND <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Section 4: Ruang Redaksi */}
        <section className="bg-[#07090E] text-[#F5EFEB] py-32 px-6 md:px-16">
          <div className="max-w-6xl mx-auto">
            <div className="mb-20">
              <h2 className="text-4xl md:text-5xl font-display uppercase tracking-tight text-center">RUANG REDAKSI & ESAI</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {articlePreviews.map((art, idx) => (
                <Link key={idx} href={`/artikel/${art.slug}`} className="group cursor-pointer block">
                  <div className="text-[10px] font-mono text-[#E11D48] font-bold tracking-widest uppercase mb-4 flex justify-between border-b border-white/10 pb-2">
                    <span>{art.tag}</span>
                    <span>{art.readTime}</span>
                  </div>
                  <h3 className="font-display text-xl uppercase leading-snug mb-4 group-hover:text-[#E11D48] transition-colors">{art.title}</h3>
                  <p className="font-sans text-sm text-[#8E95A5] leading-relaxed mb-6">{art.desc}</p>
                  <div className="inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-widest text-[#E11D48]">
                    BACA SELENGKAPNYA <ArrowRight className="w-3 h-3" />
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-20 text-center">
              <Link href="/artikel" className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest hover:text-[#E11D48] transition-colors border-b border-white hover:border-[#E11D48] pb-1">
                MASUK KE RUANG REDAKSI <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Section 5: Manifesto Pull-Quote */}
        <section className={`py-32 px-6 md:px-16 text-center ${isDarkMode ? 'bg-[#0E131F] text-[#F5EFEB]' : 'bg-white text-[#0A0E1A]'}`}>
          <div className="max-w-4xl mx-auto relative">
            <span className="editorial-quote-mark font-display text-[120px] text-[#E11D48] opacity-20 absolute -top-16 left-0 right-0 z-0">
              "
            </span>
            <h2 className="font-editorial italic text-3xl md:text-5xl leading-relaxed relative z-10 mb-12">
              Terlalu sibuk melihat yang datang dari luar sampai lupa melihat apa yang tumbuh dari tanah sendiri.
            </h2>
            <Link href="/manifesto" className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest hover:text-[#E11D48] transition-colors border-b border-current hover:border-[#E11D48] pb-1 relative z-10">
              BACA MANIFESTO LENGKAP <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* Section 6: Kontak Strip */}
        <section className="bg-[#E11D48] text-white py-16 px-6 md:px-16 text-center">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <h3 className="font-display text-2xl md:text-3xl uppercase">Ada cerita? Punya usulan? Kirim tip-off.</h3>
            <Link href="/kontak" className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest px-6 py-3 border border-white hover:bg-white hover:text-[#E11D48] transition-colors">
              HUBUNGI REDAKSI <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

      </main>
      
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}
