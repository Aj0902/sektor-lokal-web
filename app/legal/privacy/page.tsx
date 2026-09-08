'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ShieldCheck, 
  Lock, 
  EyeOff, 
  Database, 
  CheckCircle2, 
  ArrowRight,
  Server
} from 'lucide-react';
import ConstellationCanvas from '../../../components/ConstellationCanvas';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Breadcrumbs from '../../../components/Breadcrumbs';

export default function PrivacyPage() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const bgCanvas = isDarkMode ? 'particle-wave-dark text-[#EDE8DC]' : 'particle-wave-light text-[#0A0E1A]';
  const cardClass = isDarkMode ? 'spotlight-card-dark' : 'spotlight-card-light';
  const mutedText = isDarkMode ? 'text-[#8A93A8]' : 'text-[#64748B]';

  return (
    <div className={`min-h-screen ${bgCanvas} font-sans antialiased selection:bg-[#E11D48] selection:text-white relative flex flex-col justify-between`}>
      
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Kebijakan Privasi & Perlindungan Data Sektor Lokal",
            "description": "Komitmen privasi tanpa monetisasi data, perlindungan kerahasiaan whistleblower, dan ketiadaan pelacak perilaku di Sektor Lokal.",
            "publisher": {
              "@type": "Organization",
              "name": "Sektor Lokal",
              "url": "https://sektorlokal.id"
            }
          })
        }}
      />

      <ConstellationCanvas isDarkMode={isDarkMode} />

      <Navbar 
        isDarkMode={isDarkMode} 
        onToggleDarkMode={() => setIsDarkMode(!isDarkMode)} 
      />

      <main className="max-w-4xl mx-auto px-6 relative z-10 space-y-12 py-12 flex-1 w-full">
        
        {/* BREADCRUMBS */}
        <Breadcrumbs 
          items={[
            { label: 'Integritas & Etika', href: '/legal/terms' },
            { label: 'Kebijakan Privasi' }
          ]} 
          isDarkMode={isDarkMode}
        />

        {/* HERO */}
        <section className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#E11D48]/30 bg-[#E11D48]/10 text-[#E11D48] text-xs font-mono font-bold tracking-widest uppercase">
            <Lock className="w-3.5 h-3.5" />
            <span>PROTEKSI DATA & PRIVASI PENGUNJUNG</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-display uppercase tracking-tight leading-tight">
            KEBIJAKAN PRIVASI DATA
          </h1>

          <p className={`text-xs font-mono ${mutedText}`}>
            BERLAKU SEJAK: 1 SEPTEMBER 2026 • PRIVACY-BY-DESIGN COMPLIANT
          </p>
        </section>

        {/* 3 CORE PILLARS CARD */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className={`p-5 rounded-3xl border space-y-2 ${cardClass}`}>
            <EyeOff className="w-5 h-5 text-[#E11D48]" />
            <h3 className="font-display text-sm uppercase">TANPA PELACAK IKLAN</h3>
            <p className={`text-xs leading-relaxed ${mutedText}`}>
              Bebas dari Google Ads Tracking, Meta Pixel, atau cookies pelacak profil pihak ketiga.
            </p>
          </div>

          <div className={`p-5 rounded-3xl border space-y-2 ${cardClass}`}>
            <ShieldCheck className="w-5 h-5 text-indigo-500" />
            <h3 className="font-display text-sm uppercase">ZERO MONETISASI DATA</h3>
            <p className={`text-xs leading-relaxed ${mutedText}`}>
              Data pribadi Anda tidak akan pernah dijual atau dibagikan kepada broker data mana pun.
            </p>
          </div>

          <div className={`p-5 rounded-3xl border space-y-2 ${cardClass}`}>
            <Lock className="w-5 h-5 text-emerald-500" />
            <h3 className="font-display text-sm uppercase">PROTEKSI WHISTLEBLOWER</h3>
            <p className={`text-xs leading-relaxed ${mutedText}`}>
              Laporan investigasi dan tip-off dilindungi secara rahasia dengan enkripsi tingkat tinggi.
            </p>
          </div>
        </div>

        {/* PRIVACY ARTICLES */}
        <article className="space-y-10 text-sm sm:text-base leading-relaxed text-justify">
          
          <section className="space-y-3">
            <h2 className="text-xl font-display uppercase tracking-tight text-inherit">
              1. PRINSIP PENGUMPULAN DATA MINIMAL
            </h2>
            <p>
              Sektor Lokal memegang prinsip <em>Data Minimization</em>. Kami hanya memproses data yang mutlak diperlukan untuk mengoperasikan situs web. Ketika Anda menjelajahi direktori kami, server kami hanya mencatat log teknis standar (seperti alamat IP tersamarkan dan jenis peramban) yang dipergunakan semata untuk mendeteksi anomali jaringan dan mencegah serangan siber.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-display uppercase tracking-tight text-inherit">
              2. FORMULIR KONTAK & PENGIRIMAN DATA TIP-OFF
            </h2>
            <p>
              Informasi yang Anda cantumkan pada <Link href="/kontak" className="text-[#E11D48] underline font-semibold">Ruang Dialog & Tip-Off</Link> (nama, surel, pesan) hanya digunakan oleh Dewan Redaksi Sektor Lokal untuk keperluan tindak lanjut komunikasi atau verifikasi investigasi. Kami tidak mencantumkan kontak pribadi Anda ke milis pemasaran massal tanpa persetujuan eksplisit.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-display uppercase tracking-tight text-inherit">
              3. INFRASTRUKTUR & KEAMANAN SISTEM
            </h2>
            <p>
              Sistem basis data kami dioperasikan dengan standar keamanan tingkat industri, enkripsi koneksi SSL/TLS, serta pembatasan akses ketat <em>(Row Level Security)</em> untuk mencegah kebocoran informasi yang tidak berwenang.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-display uppercase tracking-tight text-inherit">
              4. HAK PENGGUNA UNTUK PENGHAPUSAN DATA
            </h2>
            <p>
              Anda memiliki hak penuh untuk meminta penarikan atau penghapusan data korespondensi yang pernah Anda kirimkan kepada kami. Permintaan penghapusan dapat diajukan kapan saja melalui surel <code>redaksi@sektorlokal.id</code> dan akan diproses dalam 3x24 jam kerja.
            </p>
          </section>

        </article>

        {/* CTA TO MANIFESTO */}
        <section className={`p-6 sm:p-8 rounded-3xl border flex flex-col sm:flex-row items-center justify-between gap-4 ${cardClass}`}>
          <div>
            <h3 className="font-display text-base uppercase">PELAJARI SIKAP KAMI DI MANIFESTO BANGSA</h3>
            <p className={`text-xs ${mutedText}`}>Deklarasi prinsip dan kedaulatan warga Sektor Lokal.</p>
          </div>
          <Link 
            href="/manifesto"
            className="px-5 py-2.5 bg-[#E11D48] text-white text-xs font-mono font-bold uppercase rounded-xl hover:bg-[#BE123C] transition flex items-center gap-2 shrink-0"
          >
            <span>BACA MANIFESTO</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </section>

      </main>

      <Footer isDarkMode={isDarkMode} />

    </div>
  );
}
