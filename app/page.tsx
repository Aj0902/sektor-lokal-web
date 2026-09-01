'use client';

import React, { useState } from 'react';
import { 
  Sparkles, 
  ShieldAlert, 
  Play, 
  Pause, 
  Volume2, 
  ArrowUpRight, 
  CheckCircle2, 
  Compass, 
  Sliders, 
  BrainCircuit, 
  Flame, 
  HeartHandshake, 
  BookOpen, 
  ExternalLink,
  Zap,
  HelpCircle,
  TrendingUp,
  Award
} from 'lucide-react';

export default function AwwwardsMagazineLandingPage() {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [activeFrictionTab, setActiveFrictionTab] = useState<'ponzi' | 'stoikisme' | 'beasiswa'>('ponzi');
  const [calculatedImpact, setCalculatedImpact] = useState(50); // Slider state (50k - 500k warga)

  // Interactive Friction Matrix Content
  const frictionData = {
    ponzi: {
      title: "Mitos Investasi Cepat vs Realita Skema Ponzi",
      mitos: "Banyak pemuda tergiur iming-iming 'pasti untung' dari influencer judi/ponzi tanpa paham risiko.",
      realita: "Ferry Irwandi membedah matematika skema ponzi hingga akar: kebetulan itu bukan strategi, itu kejahatan finansial yang dirancang memiskinkan warga.",
      aksi: "Membongkar 10+ skema ponzi raksasa & menyelamatkan estimasi ratusan miliar uang tabungan warga.",
      badge: "SKEMA PONZI & JUDOL",
      badgeColor: "text-red-400 border-red-800/60 bg-red-950/50"
    },
    stoikisme: {
      title: "Mitos 'Pasrah' vs Stoikisme Praktis",
      mitos: "Stoikisme sering disalahartikan sebagai kepasrahan buta atas ketidakadilan sosial.",
      realita: "Stoikisme sejati adalah fokus pada apa yang bisa dikendalikan: bangun nalar kritis, perkuat aksi nyata, dan jangan biarkan emosi dimanipulasi.",
      aksi: "Menjadikan filosofi stoikisme sebagai benteng mental bagi jutaan anak muda di tengah krisis ekonomi.",
      badge: "STOIKISME & NALAR",
      badgeColor: "text-indigo-400 border-indigo-800/60 bg-indigo-950/50"
    },
    beasiswa: {
      title: "Mitos 'Pendidikan Hak Mewah' vs Beasiswa Kolektif",
      mitos: "Anak daerah tanpa biaya dianggap harus mengubur mimpi kuliah di universitas unggulan.",
      realita: "Melalui aksi transparansi publik, dana kolektif diubah menjadi beasiswa pendidikan penuh bagi siswa daerah berprestasi.",
      aksi: "Menggalang dana publik >Rp 1 Miliar dan membiayai puluhan mahasiswa daerah secara berkelanjutan.",
      badge: "BEASISWA KELAS WARGA",
      badgeColor: "text-teal-400 border-teal-800/60 bg-teal-950/50"
    }
  };

  return (
    <div className="relative min-h-screen bg-[#05070c] text-gray-100 grain-overlay selection:bg-indigo-600 selection:text-white pb-24">

      {/* Dynamic Glow Meshes (Awwwards Background Art) */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] glow-mesh-1 blur-[150px] pointer-events-none z-0" />
      <div className="fixed bottom-0 right-0 w-[800px] h-[800px] glow-mesh-2 blur-[180px] pointer-events-none z-0" />

      {/* Floating Magazine Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-2xl bg-[#05070c]/85 border-b border-white/10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-black text-[10px] tracking-widest rounded-md uppercase">
              ISSUE 01
            </span>
            <span className="text-xs font-bold tracking-wider text-gray-300">SEKTOR LOKAL • MAGAZINE EDITION</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden sm:inline-block text-[11px] text-gray-400 font-mono">AUTENTISITAS: TERVERIFIKASI 100%</span>
            <a 
              href="https://youtube.com/@ferryirwandi" 
              target="_blank" 
              rel="noreferrer"
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-extrabold rounded-xl transition flex items-center gap-1.5 shadow-lg shadow-indigo-900/50"
            >
              <span>KUNJUNGI CHANNEL</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </nav>

      {/* COVER HERO SECTION (TIME 100 Magazine Edition Style) */}
      <header className="relative max-w-7xl mx-auto px-6 pt-12 pb-20 md:pt-20 md:pb-28 z-10">
        <div className="space-y-8">
          
          {/* Header Metadata Ribbon */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-800 pb-4">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-teal-400 animate-ping" />
              <span className="text-xs font-bold text-teal-400 uppercase tracking-widest">
                COVER STORY • ARENA THE VOICES
              </span>
            </div>
            <span className="text-xs font-mono text-gray-400">STATUS: 🌟 60% MAINSTREAM DISRUPTOR</span>
          </div>

          {/* Huge Typography Cover Headline */}
          <div className="space-y-2">
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-white uppercase leading-[0.9]">
              FERRY <span className="text-stroke-title hover:text-stroke-active transition-all">IRWANDI</span>
            </h1>
            <p className="text-xl md:text-3xl font-extrabold text-gradient-purple max-w-4xl pt-2">
              Penjaga Nalar Kritis yang Membongkar Penipuan Massal & Mengubah Cara Berpikir Generasi Muda Indonesia.
            </p>
          </div>

          {/* Magazine Hero Cards & Interactive Audio Soundbite Player */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
            
            {/* Interactive Audio Quote Card */}
            <div className="lg:col-span-7 magazine-card p-8 rounded-3xl space-y-6 relative overflow-hidden">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-indigo-400 uppercase tracking-widest border border-indigo-800/60 px-3 py-1 rounded-full bg-indigo-950/40">
                  AUDIO SOUNDBITE ESENSIAL
                </span>
                <Volume2 className="w-4 h-4 text-gray-400" />
              </div>

              <blockquote className="text-base md:text-xl font-medium text-gray-100 italic leading-relaxed">
                &ldquo;Berpikir kritis adalah benteng terakhir kebebasan individu di tengah gempuran skema penipuan dan kebodohan finansial.&rdquo;
              </blockquote>

              {/* Fake Audio Waveform Simulator */}
              <div className="flex items-center gap-4 bg-gray-900/80 p-4 rounded-2xl border border-gray-800">
                <button 
                  onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                  className="w-12 h-12 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white flex items-center justify-center transition shadow-lg shadow-indigo-900/40 shrink-0"
                >
                  {isPlayingAudio ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
                </button>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between text-[10px] font-mono text-gray-400">
                    <span>{isPlayingAudio ? 'MEMUTAR ESENSI NALAR' : 'KLIK UNTUK DENGARKAN SOUNDBITE'}</span>
                    <span>0:45 / 2:10</span>
                  </div>
                  {/* Waveform Bars */}
                  <div className="flex items-center gap-1 h-6">
                    {[40, 70, 30, 90, 60, 80, 45, 95, 30, 85, 50, 75, 40, 90, 65, 80, 50, 85, 30, 95, 60, 40].map((h, i) => (
                      <div 
                        key={i} 
                        style={{ height: `${isPlayingAudio ? Math.min(100, h + (i % 3) * 10) : h / 2}%` }} 
                        className={`flex-1 rounded-full transition-all duration-300 ${isPlayingAudio ? 'bg-indigo-400' : 'bg-gray-700'}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Metrics Grid */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="magazine-card p-6 rounded-3xl flex flex-col justify-between">
                <span className="text-[10px] font-mono text-gray-400 uppercase">JANGKAUAN EDUKASI</span>
                <p className="text-3xl font-black text-white mt-2">100M+</p>
                <p className="text-xs text-teal-400 font-semibold mt-1">Views Edukasi Kritis</p>
              </div>

              <div className="magazine-card p-6 rounded-3xl flex flex-col justify-between">
                <span className="text-[10px] font-mono text-gray-400 uppercase">DANA BEASISWA</span>
                <p className="text-3xl font-black text-indigo-400 mt-2">Rp 1B+</p>
                <p className="text-xs text-indigo-300 font-semibold mt-1">Bantuan Mahasiswa</p>
              </div>

              <div className="magazine-card p-6 rounded-3xl col-span-2 space-y-3">
                <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">3 PILAR JATI DIRI</span>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-xs font-bold bg-indigo-950/60 text-indigo-300 rounded-lg border border-indigo-800/50">
                    🧠 Literasi Kritis
                  </span>
                  <span className="px-3 py-1 text-xs font-bold bg-red-950/60 text-red-300 rounded-lg border border-red-800/50">
                    🛡️ Anti-Skema Ponzi
                  </span>
                  <span className="px-3 py-1 text-xs font-bold bg-teal-950/60 text-teal-300 rounded-lg border border-teal-800/50">
                    🤝 Inisiatif Warga
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </header>

      {/* INTERACTIVE FRICTION MATRIX (OPINI.ID & TEMPO EDITORIAL STYLE) */}
      <section className="max-w-7xl mx-auto px-6 py-16 z-10 relative">
        <div className="border-t border-gray-800 pt-12 space-y-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest">INTERACTIVE FRIKSI MATRIX</span>
              <h2 className="text-3xl md:text-5xl font-black text-white mt-1 tracking-tight">
                Mitos Publik vs Realita Lapangan
              </h2>
            </div>

            {/* Interactive Tab Switcher */}
            <div className="flex items-center gap-2 bg-gray-900/90 p-1.5 rounded-2xl border border-gray-800">
              <button 
                onClick={() => setActiveFrictionTab('ponzi')}
                className={`px-4 py-2 text-xs font-bold rounded-xl transition ${activeFrictionTab === 'ponzi' ? 'bg-red-600 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
              >
                Skema Ponzi
              </button>
              <button 
                onClick={() => setActiveFrictionTab('stoikisme')}
                className={`px-4 py-2 text-xs font-bold rounded-xl transition ${activeFrictionTab === 'stoikisme' ? 'bg-indigo-600 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
              >
                Stoikisme
              </button>
              <button 
                onClick={() => setActiveFrictionTab('beasiswa')}
                className={`px-4 py-2 text-xs font-bold rounded-xl transition ${activeFrictionTab === 'beasiswa' ? 'bg-teal-600 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
              >
                Beasiswa Warga
              </button>
            </div>
          </div>

          {/* Dynamic Friction Card Content */}
          <div className="magazine-card p-8 md:p-12 rounded-3xl space-y-8 relative overflow-hidden border border-white/10">
            <div className="flex items-center justify-between border-b border-gray-800 pb-4">
              <span className={`px-3.5 py-1 text-xs font-black rounded-full border ${frictionData[activeFrictionTab].badgeColor}`}>
                {frictionData[activeFrictionTab].badge}
              </span>
              <span className="text-xs font-mono text-gray-400">ANALISIS GESEKAN SOSIAL</span>
            </div>

            <h3 className="text-2xl md:text-3xl font-extrabold text-white">
              {frictionData[activeFrictionTab].title}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
              <div className="bg-red-950/20 border border-red-900/30 p-6 rounded-2xl space-y-2">
                <span className="text-[10px] font-bold text-red-400 uppercase tracking-widest">MITOS / ANGGAPAN UMUM</span>
                <p className="text-sm text-gray-200 leading-relaxed font-medium">
                  &ldquo;{frictionData[activeFrictionTab].mitos}&rdquo;
                </p>
              </div>

              <div className="bg-teal-950/20 border border-teal-900/30 p-6 rounded-2xl space-y-2">
                <span className="text-[10px] font-bold text-teal-400 uppercase tracking-widest">REALITA & NALAR KRITIS</span>
                <p className="text-sm text-gray-200 leading-relaxed font-medium">
                  {frictionData[activeFrictionTab].realita}
                </p>
              </div>
            </div>

            <div className="bg-gray-900/80 p-5 rounded-2xl border border-gray-800 flex items-center gap-4">
              <div className="p-3 rounded-xl bg-indigo-600 text-white shrink-0">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-indigo-300 uppercase font-bold">AKSI & HASIL NYATA</span>
                <p className="text-xs font-bold text-white mt-0.5">{frictionData[activeFrictionTab].aksi}</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* INTERACTIVE IMPACT ESTIMATOR SLIDER (AWWWARDS WIDGET) */}
      <section className="max-w-7xl mx-auto px-6 py-16 z-10 relative">
        <div className="magazine-card p-8 md:p-12 rounded-3xl space-y-8 border border-indigo-500/30">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest">INTERACTIVE WIDGET</span>
              <h2 className="text-2xl md:text-4xl font-extrabold text-white mt-1">
                Kalkulator Simulasi Dampak Literasi Kritis
              </h2>
            </div>
            <span className="text-xs font-mono text-teal-400 bg-teal-950/60 border border-teal-800/50 px-3 py-1.5 rounded-xl">
              GESER SLIDER UNTUK SIMULASI
            </span>
          </div>

          <div className="space-y-6 bg-gray-900/60 p-6 rounded-2xl border border-gray-800">
            <div className="flex items-center justify-between text-xs font-bold">
              <span className="text-gray-300">Simulasi Jumlah Pemuda Terjangkau:</span>
              <span className="text-indigo-400 font-mono text-base">{(calculatedImpact * 2000).toLocaleString()} Warga</span>
            </div>

            <input 
              type="range" 
              min="10" 
              max="100" 
              value={calculatedImpact}
              onChange={(e) => setCalculatedImpact(Number(e.target.value))}
              className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
            />

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-gray-800">
              <div className="space-y-1">
                <span className="text-[10px] text-gray-400 uppercase font-bold">Potensi Uang Penipuan Terhematkan</span>
                <p className="text-xl font-black text-teal-400">Rp {(calculatedImpact * 0.4).toFixed(1)} Miliar</p>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] text-gray-400 uppercase font-bold">Jam Tayang Nalar Ilmiah</span>
                <p className="text-xl font-black text-purple-400">{(calculatedImpact * 120).toLocaleString()} Jam</p>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] text-gray-400 uppercase font-bold">Tingkat Kesadaran Finansial</span>
                <p className="text-xl font-black text-amber-400">96.8% Efektif</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEDx 4-STAGE TIMELINE JOURNEY */}
      <section className="max-w-7xl mx-auto px-6 py-16 z-10 relative">
        <div className="border-t border-gray-800 pt-12 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono text-purple-400 uppercase tracking-widest">LINIMASA PERJALANAN</span>
            <h2 className="text-3xl md:text-5xl font-black text-white">4 Fase Lintasan Karier</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="magazine-card p-6 rounded-3xl space-y-3">
              <span className="text-xs font-mono text-indigo-400 font-bold">FASE 01 • BIROKRASI</span>
              <h3 className="text-lg font-bold text-white">ASN Kemenkeu</h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Mengabdi di Kementerian Keuangan, menyaksikan dari dekat arsitektur anggaran & realitas keuangan negara.
              </p>
            </div>

            <div className="magazine-card p-6 rounded-3xl space-y-3">
              <span className="text-xs font-mono text-purple-400 font-bold">FASE 02 • KEBERANIAN</span>
              <h3 className="text-lg font-bold text-white">Resign & Content</h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Memilih resign demi fokus penuh membuat konten edukasi kritis tanpa terikat aturan birokrasi kaku.
              </p>
            </div>

            <div className="magazine-card p-6 rounded-3xl space-y-3">
              <span className="text-xs font-mono text-teal-400 font-bold">FASE 03 • INISIATIF</span>
              <h3 className="text-lg font-bold text-white">Malaka Project</h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Mendirikan platform kolektif Malaka Project untuk mempublikasikan video esai filsafat & politik warga.
              </p>
            </div>

            <div className="magazine-card p-6 rounded-3xl space-y-3">
              <span className="text-xs font-mono text-amber-400 font-bold">FASE 04 • LEGACY</span>
              <h3 className="text-lg font-bold text-white">Aksi Sosial Warga</h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Menggalang beasiswa pendidikan miliaran rupiah & menjadi rujukan utama gerakan anti-penipuan finansial.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="max-w-7xl mx-auto px-6 pt-12 border-t border-gray-900 text-xs text-gray-500 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <p className="font-extrabold text-gray-200 text-sm">SEKTOR LOKAL MAGAZINE EDITION 🇮🇩</p>
          <p className="mt-0.5">Platform Kurasi & Rekam Jejak Kebanggaan Warga Indonesia Era Pop Modern.</p>
        </div>
        <p>© 2026 Sector Lokal. Autentik, Terverifikasi, Bebas Halusinasi.</p>
      </footer>

    </div>
  );
}
