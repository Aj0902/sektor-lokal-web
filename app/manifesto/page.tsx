'use client';

import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function ManifestoPage() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const bgClass = isDarkMode ? 'bg-[#07090E] text-[#F5EFEB]' : 'bg-[#F8F5EE] text-[#07090E]';
  const borderClass = isDarkMode ? 'border-white/10' : 'border-black/10';

  return (
    <div className={`min-h-screen ${bgClass} font-sans antialiased flex flex-col`}>
      <Navbar isDarkMode={isDarkMode} onToggleDarkMode={() => setIsDarkMode(!isDarkMode)} />

      <main className="flex-1 w-full max-w-5xl mx-auto px-6 py-20 relative">
        <div className="absolute top-0 right-0 text-[12vw] font-display text-current opacity-5 pointer-events-none select-none overflow-hidden h-full flex items-center">
          <div style={{ writingMode: 'vertical-rl' }}>MANIFESTO</div>
        </div>

        <article className="space-y-32 relative z-10">
          
          <header className="space-y-6 max-w-3xl">
            <h1 className="text-5xl sm:text-7xl font-display uppercase tracking-tight leading-[0.9]">
              Manifesto <br/> Jiwa Raga Bangsa
            </h1>
            <p className="font-editorial italic text-2xl text-[#E11D48] descender-safe">
              &ldquo;Lokal bukan batas. Lokal adalah akar.&rdquo;
            </p>
          </header>

          <section className="relative pl-12 sm:pl-20 max-w-3xl border-l-2 border-[#E11D48]">
            <div className="absolute top-0 left-0 -ml-[0.4rem] text-6xl text-[#E11D48] font-editorial leading-none">&ldquo;</div>
            <p className="text-xl sm:text-3xl font-editorial italic leading-relaxed descender-safe">
              Terlalu sibuk melihat yang datang dari luar sampai lupa melihat apa yang tumbuh dari tanah sendiri. Sektor Lokal hadir sebagai ruang untuk menemukan kembali manusia, karya, dan ide yang lahir, tumbuh, bergerak, dan berakar di Indonesia.
            </p>
          </section>

          <div className="space-y-24 max-w-4xl">
            {/* Gerakan 01 */}
            <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-3 text-xs font-mono font-bold text-[#E11D48] uppercase tracking-widest pt-2">
                Gerakan 01
              </div>
              <div className="md:col-span-9 space-y-6">
                <h2 className="text-4xl font-display uppercase">Bukan Sekadar Stigma</h2>
                <div className="columns-1 sm:columns-2 gap-8 text-base leading-relaxed text-current/80 font-sans space-y-6">
                  <p>
                    Kata "lokal" terlalu lama disempitkan menjadi stigma yang keliru: dianggap kuno, atau inferior di hadapan gemerlap tren luar. Seolah-olah kemajuan hanya bisa diraih dengan menjadi peniru.
                  </p>
                  <p>
                    Sektor Lokal menolak premis tersebut secara mutlak. Bagi kami, ukuran lokal bukan seberapa kuno atau tradisional bentuknya, melainkan seberapa jelas akar relasinya dengan tanah air. Mulai dari paten algoritma 4G di Kediri hingga konservasi Leuser.
                  </p>
                </div>
              </div>
            </section>

            {/* Gerakan 02 */}
            <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-3 text-xs font-mono font-bold text-[#E11D48] uppercase tracking-widest pt-2">
                Gerakan 02
              </div>
              <div className="md:col-span-9 space-y-6">
                <h2 className="text-4xl font-display uppercase">Manusia di Balik Alam</h2>
                <div className="columns-1 gap-8 text-base leading-relaxed text-current/80 font-sans space-y-6">
                  <p className="font-editorial text-xl italic border-y py-6 border-current/10">
                    "Apa artinya hutan lebat jika penjaga rimba perempuannya diabaikan? Apa artinya ribuan ton biji kakao jika petaninya hanya jadi penonton batangan cokelat impor?"
                  </p>
                  <p>
                    Kita sering kali terjebak dalam romantisisme bentang alam: membanggakan hutan hujan tropis lebat, laut yang luas. Namun di tengah perbincangan megah tentang devisa, kita kerap melupakan elemen paling berharga: manusia-manusianya.
                  </p>
                </div>
              </div>
            </section>

            {/* Gerakan 03 */}
            <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-3 text-xs font-mono font-bold text-[#E11D48] uppercase tracking-widest pt-2">
                Gerakan 03
              </div>
              <div className="md:col-span-9 space-y-6">
                <h2 className="text-4xl font-display uppercase">Semua Adalah Warga</h2>
                <div className="text-base leading-relaxed text-current/80 font-sans space-y-6 max-w-2xl">
                  <p>
                    Kami sengaja menamai kurasi manusia kami sebagai "Warga Lokal". Kata warga dipakai bukan untuk mengecilkan peran, melainkan untuk meratakan status simbolik: seorang ilmuwan paten, seniman independen, hingga petani bukit, semuanya adalah sesama warga negara yang memilih bertindak.
                  </p>
                </div>
              </div>
            </section>
          </div>

        </article>
      </main>

      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}
