'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ShieldCheck, 
  CheckCircle2, 
  Scale, 
  Sparkles, 
  Layers, 
  Lock, 
  ArrowRight, 
  AlertTriangle,
  HelpCircle,
  Award
} from 'lucide-react';
import { motion } from 'framer-motion';
import ConstellationCanvas from '../../../components/ConstellationCanvas';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Breadcrumbs from '../../../components/Breadcrumbs';

export default function KriteriaKurasiPage() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const bgCanvas = isDarkMode ? 'particle-wave-dark text-[#EDE8DC]' : 'particle-wave-light text-[#0A0E1A]';
  const cardClass = isDarkMode ? 'spotlight-card-dark' : 'spotlight-card-light';
  const mutedText = isDarkMode ? 'text-[#8A93A8]' : 'text-[#64748B]';

  const stages = [
    {
      num: '01',
      title: 'Verifikasi Autentisitas & Rekam Jejak Lapangan (25%)',
      desc: 'Kami membedah rekam jejak riil di dunia nyata, bukan sekadar riuh rendah algoritma media sosial. Kandidat wajib memiliki bukti konsistensi kerja, penelitian, karya cipta, atau advokasi lapangan yang teruji minimal 2 tahun.',
      detail: 'Menolak figur rekaan pencitraan instan, buzzer bayaran, dan klaim tanpa verifikasi empiris.'
    },
    {
      num: '02',
      title: 'Visi Jangka Panjang & Kemandirian Gagasan (25%)',
      desc: 'Menguji ketangguhan model inisiatif: apakah memiliki Value Proposition dan Value Capture yang berkelanjutan tanpa ketergantungan abadi pada donor sesaat atau subsidi politik praktis.',
      detail: 'Mencari model aksi yang memiliki daya hidup swadaya dan kepemimpinan berintegritas.'
    },
    {
      num: '03',
      title: 'Resonansi Sosial & Akar Rumput (25%)',
      desc: 'Mengukur kedalaman dampak pada masyarakat sekitar: apakah inisiatif ini memperkuat kedaulatan warga lokal, membuka lapangan kerja yang adil, atau menjaga ruang hidup dan kelestarian ekologis.',
      detail: 'Mengutamakan pemberdayaan yang mengangkat martabat sesama, bukan eksploitasi kemiskinan.'
    },
    {
      num: '04',
      title: 'Keunikan Nilai & Kebaruan Rancang Bangun (25%)',
      desc: 'Menilai Unique Selling Proposition (USP), orisinalitas metodologi, kearifan material lokal, serta keberanian mendobrak status quo dengan nalar sehat dan estetika bermutu tinggi.',
      detail: 'Karya berstandar kelas dunia yang berakar kuat dari tanah dan kultur nusantara.'
    },
    {
      num: '05',
      title: 'Keseimbangan Motivasi Octalysis (60:40)',
      desc: 'Mengaudit struktur dorongan psikologis di balik karya: wajib didominasi 60% White Hat Motivators (Epic Meaning, Empowerment, Ownership, Social Influence) dan maksimal 40% Black Hat / Sense of Urgency.',
      detail: 'Menghindari manipulasi kepanikan (fear-mongering), skema ponzi, dan ilusi FOMO beracun.'
    },
    {
      num: '06',
      title: 'Uji Penapisan Integritas & Anti-Konflik Kepentingan',
      desc: 'Penyaringan ketat latar belakang hukum dan etika: memastikan kandidat bebas dari rekam jejak pelanggaran HAM berat, perusakan lingkungan hidup, keterlibatan judi online, atau korupsi.',
      detail: 'Keputusan final bersifat independen oleh Dewan Kurator tanpa intervensi pihak sponsor.'
    }
  ];

  return (
    <div className={`min-h-screen ${bgCanvas} font-sans antialiased selection:bg-[#E11D48] selection:text-white relative flex flex-col justify-between`}>
      
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Standar Editorial & Kriteria Kurasi 6-Tahap Sektor Lokal",
            "description": "Protokol metodologi deduktif transparan untuk kurasi 100 Warga Lokal dan Brand Mandiri Nusantara.",
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

      <main className="max-w-4xl mx-auto px-6 relative z-10 space-y-16 py-12 flex-1 w-full">
        
        {/* BREADCRUMBS */}
        <Breadcrumbs 
          items={[
            { label: 'Integritas & Etika', href: '/legal/terms' },
            { label: 'Kriteria Kurasi 6-Tahap' }
          ]} 
          isDarkMode={isDarkMode}
        />

        {/* HERO */}
        <section className="space-y-6 text-center pt-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#E11D48]/30 bg-[#E11D48]/10 text-[#E11D48] text-xs font-mono font-bold tracking-widest uppercase">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>METODOLOGI KURASI DEDUKTIF</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-display uppercase tracking-tight leading-[0.95]">
            STANDAR EDITORIAL & KRITERIA KURASI 6-TAHAP
          </h1>

          <p className="font-editorial italic text-lg sm:text-xl text-[#E11D48] max-w-2xl mx-auto pt-2">
            &ldquo;Integritas adalah benteng utama kami. Tiada ruang bagi titipan berbayar di balik nama kehormatan Warga Lokal.&rdquo;
          </p>
        </section>

        {/* PHILOSOPHY SUMMARY CARD */}
        <div className={`p-8 sm:p-10 rounded-3xl border space-y-4 ${cardClass}`}>
          <div className="flex items-center gap-3">
            <Scale className="w-6 h-6 text-[#E11D48] shrink-0" />
            <h2 className="font-display text-xl uppercase tracking-tight">MENGAPA TRANSPARANSI KURASI MUTLAK DIPERLUKAN?</h2>
          </div>
          <p className="text-sm sm:text-base leading-relaxed text-justify">
            Di lanskap media digital modern, batas antara apresiasi jurnalistik dan promosi berbayar <em>(paid sponsorship / advertorial)</em> telah sengaja dikaburkan. Banyak daftar penghargaan diciptakan semata sebagai instrumen monetisasi komersial. 
            Sektor Lokal didirikan dengan sikap yang berlawanan: kurasi kami bersifat <strong>100% independen, berbasis bukti rekam jejak, dan dapat dipertanggungjawabkan secara saintifik.</strong>
          </p>
        </div>

        {/* 6 TAHAP KURASI */}
        <section className="space-y-8">
          <div className="flex items-center justify-between border-b pb-3 border-inherit/10">
            <h2 className="text-2xl font-display uppercase tracking-tight">ENAM TAHAP PENAPISAN KANDIDAT</h2>
            <span className="text-xs font-mono text-[#E11D48] font-bold">100% TRANSPARAN</span>
          </div>

          <div className="space-y-6">
            {stages.map((stg) => (
              <div 
                key={stg.num}
                className={`p-6 sm:p-8 rounded-3xl border transition-all ${cardClass}`}
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                  <span className="font-display text-4xl sm:text-5xl text-[#E11D48] leading-none shrink-0 font-bold">
                    {stg.num}
                  </span>
                  
                  <div className="space-y-3 flex-1">
                    <h3 className="font-display text-lg sm:text-xl uppercase tracking-tight">
                      {stg.title}
                    </h3>
                    
                    <p className="text-sm sm:text-base leading-relaxed text-justify">
                      {stg.desc}
                    </p>

                    <div className="p-3 rounded-2xl border border-inherit/10 bg-inherit/40 text-xs font-mono flex items-center gap-2 text-inherit/80">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{stg.detail}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* IKRAR ANTI-TITIPAN GUARANTEE */}
        <section className={`p-8 sm:p-10 rounded-3xl border border-[#E11D48]/30 bg-[#E11D48]/5 space-y-6 text-center`}>
          <div className="w-14 h-14 rounded-2xl bg-[#E11D48] text-white flex items-center justify-center mx-auto shadow-lg shadow-[#E11D48]/40">
            <Lock className="w-7 h-7" />
          </div>

          <div className="space-y-2 max-w-xl mx-auto">
            <h3 className="text-2xl font-display uppercase tracking-tight text-[#E11D48]">
              IKRAR BEBAS TITIPAN & INTERVENSI MODAL
            </h3>
            <p className={`text-xs sm:text-sm leading-relaxed ${mutedText}`}>
              Sektor Lokal menjamin bahwa tidak ada kandidat Warga Lokal maupun Brand Mandiri yang membayar satu rupiah pun untuk masuk ke dalam kurasi kami. Setiap profil diriset dan dinilai secara independen oleh Tim Riset & Dewan Kurasi.
            </p>
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link 
              href="/kontak"
              className="px-6 py-3 bg-[#E11D48] hover:bg-[#BE123C] text-white text-xs font-mono font-bold uppercase rounded-xl shadow-md shadow-[#E11D48]/30 transition"
            >
              <span>Ajukan Usulan Figur Baru</span>
            </Link>
            <Link 
              href="/manifesto"
              className="px-6 py-3 border border-inherit/20 hover:border-[#E11D48] text-inherit text-xs font-mono font-bold uppercase rounded-xl transition"
            >
              <span>Baca Manifesto Sektor Lokal</span>
            </Link>
          </div>
        </section>

      </main>

      <Footer isDarkMode={isDarkMode} />

    </div>
  );
}
