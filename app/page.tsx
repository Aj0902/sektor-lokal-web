'use client';

import React, { useState } from 'react';
import { Menu, Link as LinkIcon, Loader2, Sparkles, X } from 'lucide-react';
import Image from 'next/image';

export default function CanvaBlueprintLandingPage() {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const karyaList = [
    {
      title: "SERIAL PEMBONGKARAN SKEMA PONZI",
      desc: "Menguliti matematika di balik skema ponzi, judi online, dan kejahatan keuangan digital yang merugikan jutaan warga.",
      link: "https://youtube.com/@ferryirwandi"
    },
    {
      title: "BUKU PRINSIPAL EKONOMI & STOIKISME",
      desc: "Panduan praktis bernalar kritis dan menerapkan filsafat stoikisme dalam mengelola emosi serta keputusan finansial pemuda.",
      link: "https://youtube.com/@ferryirwandi"
    },
    {
      title: "MALAKA PROJECT",
      desc: "Platform edukasi kolektif independen yang memproduksi esai video berbobot tinggi tentang filsafat, ekonomi mikro, dan politik warga.",
      link: "https://malakaproject.id"
    },
    {
      title: "GERAKAN BEASISWA WARGA",
      desc: "Inisiatif penggalangan dana publik transparan yang membiayai kuliah puluhan mahasiswa daerah berprestasi dari keluarga kurang mampu.",
      link: "https://youtube.com/@ferryirwandi"
    }
  ];

  const artikelList = [
    {
      title: "ANALISIS KRITIS KEUANGAN & LITERASI MASYARAKAT",
      desc: "Ulasan mendalam mengenai pentingnya membangun nalar kritis sebagai benteng perlindungan utama dari kejahatan finansial digital.",
      link: "https://youtube.com/@ferryirwandi"
    },
    {
      title: "STOIKISME: BUKAN PASRAH, TAPI AKSI NYATA",
      desc: "Memahami stoikisme sejati dalam memfokuskan energi pada apa yang bisa kita kendalikan di tengah ketidakpastian sosial.",
      link: "https://youtube.com/@ferryirwandi"
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#0b0e14] texture-bg text-gray-100 selection:bg-rose-600 selection:text-white pb-24">

      {/* STICKY HEADER (Sesuai Sketsa Canva) */}
      <header className="sticky top-0 z-50 bg-[#0b0e14]/90 backdrop-blur-md border-b border-gray-800 px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          
          {/* Logo SEKTOR LOKAL (Canva Style) */}
          <div className="flex items-center gap-1.5">
            <div className="flex flex-col leading-none font-display text-2xl tracking-tighter text-white">
              <span>SEKTOR</span>
              <div className="flex items-center gap-1">
                <span>LOKAL</span>
                <span className="w-3 h-4 bg-rose-600 rounded-xs flex items-center justify-center text-[9px] text-white font-bold">
                  🏮
                </span>
              </div>
            </div>
          </div>

          {/* Hamburger Menu Icon */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-white hover:text-rose-500 transition"
          >
            {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-9 h-9" />}
          </button>
        </div>
      </header>

      {/* MOBILE MENU OVERLAY */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-[73px] z-40 bg-[#0b0e14]/98 p-8 flex flex-col space-y-6 text-xl font-display uppercase tracking-wide border-b border-rose-600">
          <a href="#hero" onClick={() => setIsMenuOpen(false)} className="hover:text-rose-500">COVER HERO</a>
          <a href="#tentang" onClick={() => setIsMenuOpen(false)} className="hover:text-rose-500">TENTANG</a>
          <a href="#perjalanan" onClick={() => setIsMenuOpen(false)} className="hover:text-rose-500">PERJALANAN HIDUP</a>
          <a href="#karya" onClick={() => setIsMenuOpen(false)} className="hover:text-rose-500">DISCOVERY KARYA</a>
          <a href="#artikel" onClick={() => setIsMenuOpen(false)} className="hover:text-rose-500">ARTIKEL & WAWASAN</a>
        </div>
      )}

      <main className="max-w-4xl mx-auto px-6 space-y-20 pt-8">

        {/* SECTION 1: HERO COVER (Sesuai Sketsa 1 Canva) */}
        <section id="hero" className="relative space-y-6 pt-4">
          
          {/* Dark Frame Container for Photo */}
          <div className="relative bg-[#06080d] border border-gray-800 rounded-2xl overflow-hidden shadow-2xl">
            <div className="relative w-full h-[450px] md:h-[550px] bg-gradient-to-b from-gray-900 via-gray-900/80 to-[#06080d] flex items-center justify-center overflow-hidden">
              {/* Photo Display */}
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80" 
                alt="Ferry Irwandi" 
                className="w-full h-full object-cover opacity-85 hover:scale-105 transition duration-700 filter grayscale contrast-125"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06080d] via-transparent to-transparent" />
            </div>

            {/* Bottom Title Bar with Red Bar Accent */}
            <div className="p-6 md:p-8 bg-[#06080d] border-t border-gray-800 flex items-end justify-between gap-4">
              <div>
                <h1 className="text-4xl md:text-7xl font-display uppercase tracking-tight text-white leading-none">
                  FERRY IRWANDI
                </h1>
                <p className="text-xs md:text-sm font-serif-editorial italic text-gray-300 tracking-wider mt-2">
                  THE VOICES • DISRUPTOR • LITERASI KRITIS
                </p>
              </div>

              {/* Red Accent Bar (Sesuai Sketsa Canva) */}
              <div className="red-accent-bar h-16 md:h-24 shrink-0 rounded-xs" />
            </div>
          </div>

        </section>

        {/* SECTION 2: TENTANG (Sesuai Sketsa 2 Canva) */}
        <section id="tentang" className="bg-white text-gray-950 p-8 md:p-12 rounded-3xl space-y-8 shadow-2xl">
          <h2 className="text-3xl md:text-5xl font-display uppercase tracking-tight text-gray-950 border-b-2 border-gray-200 pb-4">
            TENTANG FERRY IRWANDI
          </h2>

          <div className="space-y-6 text-sm md:text-base leading-relaxed text-gray-800 font-medium text-justify">
            <p>
              Ferry Irwandi adalah mantan ASN Kementerian Keuangan yang mengambil keputusan berani untuk keluar dari zona nyaman birokrasi demi mendedikasikan hidupnya sebagai kreator esai video, edukator finansial kritis, dan penggerak aksi warga.
            </p>
            <p>
              Dikenal lewat cara penyampaiannya yang analitis, tajam, dan membumi, ia konsisten menggunakan panggung media digitalnya untuk membongkar kejahatan keuangan serta membakar semangat pemikiran rasional bagi anak muda Indonesia.
            </p>
          </div>

          {/* Quote Block with Red Accent Bar (Sesuai Sketsa Canva) */}
          <div className="flex items-stretch justify-between gap-6 pt-4">
            <blockquote className="text-sm md:text-lg font-serif-editorial italic text-gray-900 leading-relaxed font-semibold">
              &ldquo;Berpikir kritis adalah benteng terakhir kebebasan individu di tengah gempuran skema penipuan dan kebodohan finansial.&rdquo;
            </blockquote>

            {/* Red Bar Accent Right */}
            <div className="red-accent-bar shrink-0 rounded-xs" />
          </div>
        </section>

        {/* SECTION 3: PERJALANAN HIDUP (Sesuai Sketsa 3 Canva) */}
        <section id="perjalanan" className="space-y-8 bg-[#06080d] p-8 md:p-12 rounded-3xl border border-gray-800">
          <h2 className="text-3xl md:text-5xl font-display uppercase tracking-tight text-white border-b border-gray-800 pb-4">
            PERJALANAN HIDUP
          </h2>

          {/* Timeline Layout with Left Red Vertical Track Bar */}
          <div className="relative pl-8 space-y-8">
            {/* Red Timeline Track Bar */}
            <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-rose-600 rounded-full" />

            {/* Item 1 */}
            <div className="relative space-y-1">
              <div className="absolute -left-[39px] top-1.5 w-5 h-5 bg-black border-2 border-rose-600 rounded-xs" />
              <h3 className="text-lg md:text-xl font-display uppercase text-white">ABDI NEGARA (KEMENKEU)</h3>
              <p className="text-xs md:text-sm text-gray-300 leading-relaxed">
                Mengabdi di Kementerian Keuangan, menyaksikan secara langsung arsitektur anggaran dan realitas ketimpangan ekonomi warga.
              </p>
            </div>

            {/* Item 2 */}
            <div className="relative space-y-1">
              <div className="absolute -left-[39px] top-1.5 w-5 h-5 bg-black border-2 border-rose-600 rounded-xs" />
              <h3 className="text-lg md:text-xl font-display uppercase text-white">TITIK BALIK</h3>
              <p className="text-xs md:text-sm text-gray-300 leading-relaxed">
                Memilih melepaskan posisi stabil ASN demi memperjuangkan independensi narasi dan edukasi publik tanpa sekat birokrasi.
              </p>
            </div>

            {/* Item 3 */}
            <div className="relative space-y-1">
              <div className="absolute -left-[39px] top-1.5 w-5 h-5 bg-black border-2 border-rose-600 rounded-xs" />
              <h3 className="text-lg md:text-xl font-display uppercase text-white">INISIATIF KOLEKTIF</h3>
              <p className="text-xs md:text-sm text-gray-300 leading-relaxed">
                Mendirikan Malaka Project bersama tim independen untuk memproduksi esai video berbobot tinggi tentang filsafat, stoikisme, dan politik warga.
              </p>
            </div>

            {/* Item 4 */}
            <div className="relative space-y-1">
              <div className="absolute -left-[39px] top-1.5 w-5 h-5 bg-black border-2 border-rose-600 rounded-xs" />
              <h3 className="text-lg md:text-xl font-display uppercase text-white">DAMPAK LAPANGAN</h3>
              <p className="text-xs md:text-sm text-gray-300 leading-relaxed">
                Menyelamatkan jutaan warga dari skema ponzi/judi online serta menggalang dana beasiswa pendidikan publik bernilai miliaran rupiah.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 4: DISCOVERY KARYA (Sesuai Sketsa 4 Canva Accordion List) */}
        <section id="karya" className="space-y-8">
          <h2 className="text-3xl md:text-5xl font-display uppercase tracking-tight text-white border-b border-gray-800 pb-4">
            DISCOVERY KARYA
          </h2>

          <div className="space-y-4">
            {karyaList.map((karya, idx) => {
              const isOpen = activeAccordion === idx;
              return (
                <div 
                  key={idx}
                  onClick={() => setActiveAccordion(isOpen ? null : idx)}
                  className={`cursor-pointer rounded-2xl p-6 transition-all ${
                    isOpen ? 'red-outline-card' : 'accordion-closed'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg md:text-2xl font-display uppercase text-white tracking-wide">
                      {karya.title}
                    </h3>
                  </div>

                  {isOpen && (
                    <div className="mt-4 pt-4 border-t border-rose-900/50 space-y-4">
                      <p className="text-xs md:text-sm text-gray-300 leading-relaxed font-medium">
                        {karya.desc}
                      </p>
                      <div className="flex justify-end">
                        <a 
                          href={karya.link} 
                          target="_blank" 
                          rel="noreferrer"
                          className="px-4 py-1.5 bg-white text-black font-bold text-xs rounded-full border border-gray-300 hover:bg-rose-600 hover:text-white transition flex items-center gap-1.5"
                        >
                          <LinkIcon className="w-3.5 h-3.5" />
                          <span>Link</span>
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* SECTION 5: ARTIKEL & WAWASAN (Sesuai Sketsa 5 Canva Stacked Cards) */}
        <section id="artikel" className="space-y-8">
          <h2 className="text-3xl md:text-5xl font-display uppercase tracking-tight text-white border-b border-gray-800 pb-4">
            ARTIKEL & WAWASAN
          </h2>

          <div className="space-y-6">
            {artikelList.map((art, idx) => (
              <div key={idx} className="red-outline-card p-6 md:p-8 rounded-2xl space-y-4">
                <h3 className="text-lg md:text-2xl font-display uppercase text-white tracking-wide">
                  {art.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-300 leading-relaxed font-medium">
                  {art.desc}
                </p>
                <div className="flex justify-end pt-2">
                  <a 
                    href={art.link} 
                    target="_blank" 
                    rel="noreferrer"
                    className="px-4 py-1.5 bg-white text-black font-bold text-xs rounded-full border border-gray-300 hover:bg-rose-600 hover:text-white transition flex items-center gap-1.5"
                  >
                    <LinkIcon className="w-3.5 h-3.5" />
                    <span>Link</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Loading Spinner Element (Sesuai Sketsa Canva) */}
          <div className="flex justify-center pt-8">
            <Loader2 className="w-8 h-8 text-rose-600 animate-spin" />
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="max-w-4xl mx-auto px-6 pt-16 mt-16 border-t border-gray-800 text-xs text-gray-500 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2 font-display text-sm text-white">
          <span>SEKTOR LOKAL</span>
          <span className="w-2.5 h-3 bg-rose-600 rounded-xs inline-block" />
        </div>
        <p>© 2026 Sector Lokal. Autentik, Terverifikasi, Bebas Halusinasi.</p>
      </footer>

    </div>
  );
}
