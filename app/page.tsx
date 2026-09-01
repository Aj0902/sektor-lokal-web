import React from 'react';
import { 
  ShieldAlert, 
  Sparkles, 
  TrendingUp, 
  Award, 
  BookOpen, 
  ExternalLink, 
  HeartHandshake, 
  BrainCircuit, 
  Compass, 
  CheckCircle2, 
  Zap, 
  MessageSquare,
  ArrowUpRight,
  Flame
} from 'lucide-react';

export default function FigureLandingPage() {
  return (
    <div className="relative overflow-hidden">

      {/* Ambient Lighting / Glow Background (M3 Dynamic Tonal Glows) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-tr from-indigo-900/30 via-purple-900/20 to-teal-900/10 blur-[140px] pointer-events-none rounded-full animate-pulse-glow" />
      <div className="absolute top-[1200px] right-0 w-[600px] h-[600px] bg-gradient-to-bl from-teal-900/20 via-indigo-900/20 to-transparent blur-[160px] pointer-events-none rounded-full" />

      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-[#070a11]/80 border-b border-white/5 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-indigo-500 animate-ping" />
            <span className="text-xs font-black tracking-widest text-indigo-400 bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-800/60 uppercase">
              SEKTOR LOKAL • TIME 100 EDITORIAL
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-semibold text-gray-400">
            <span className="hidden md:inline-block text-gray-300">Potret Kebanggaan Warga #001</span>
            <a 
              href="https://youtube.com/@ferryirwandi" 
              target="_blank" 
              rel="noreferrer"
              className="px-4 py-2 bg-indigo-600/90 hover:bg-indigo-500 text-white rounded-xl font-bold flex items-center gap-1.5 transition shadow-lg shadow-indigo-900/40"
            >
              <span>Kunjungi Channel</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION: TIME 100 Editorial Framing */}
      <header className="relative max-w-7xl mx-auto px-6 pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Title & 3-Second Hook */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-950/60 border border-teal-800/50 text-teal-300 text-xs font-bold tracking-wide">
              <Sparkles className="w-3.5 h-3.5" />
              <span>ARENA: THE VOICES (KREATOR & PENGGERAK OPINI)</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              Ferry Irwandi
            </h1>

            <p className="text-lg md:text-xl font-medium text-gradient-purple leading-relaxed">
              Mantan ASN Kemenkeu yang Menolak Tunduk Pada Pembodohan Massal dan Menjadi Penjaga Nalar Kritis Generasi Muda Indonesia.
            </p>

            {/* Quick Metadata Pill Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="glass-panel p-3.5 rounded-xl">
                <span className="text-[10px] uppercase tracking-wider font-bold text-gray-400">Gaya Pengaruh</span>
                <p className="text-xs font-bold text-indigo-300 mt-0.5">Analitis-Tajam & Menggugah</p>
              </div>
              <div className="glass-panel p-3.5 rounded-xl">
                <span className="text-[10px] uppercase tracking-wider font-bold text-gray-400">Status Kurasi</span>
                <p className="text-xs font-bold text-purple-300 mt-0.5">🌟 60% Mainstream (Disruptor)</p>
              </div>
              <div className="glass-panel p-3.5 rounded-xl">
                <span className="text-[10px] uppercase tracking-wider font-bold text-gray-400">Platform Utama</span>
                <p className="text-xs font-bold text-teal-300 mt-0.5">YouTube / X (Twitter)</p>
              </div>
            </div>

            {/* Iconic Quote Anchor (TEDx Style) */}
            <blockquote className="relative p-6 rounded-2xl glass-panel border-l-4 border-indigo-500 space-y-2">
              <p className="text-sm md:text-base italic text-gray-200 font-medium leading-relaxed">
                &ldquo;Berpikir kritis adalah benteng terakhir kebebasan individu di tengah gempuran skema penipuan dan kebodohan finansial.&rdquo;
              </p>
              <footer className="text-xs text-indigo-400 font-bold">— Ferry Irwandi</footer>
            </blockquote>
          </div>

          {/* Right Column: Hero Visual Card & Quick Impact Stats */}
          <div className="lg:col-span-5">
            <div className="glass-panel p-8 rounded-3xl relative border border-white/10 space-y-6">
              
              {/* Profile Badge */}
              <div className="flex items-center justify-between border-b border-gray-800 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-indigo-500/30">
                    FI
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base">Ferry Irwandi</h3>
                    <p className="text-xs text-indigo-400 font-semibold">@ferryirwandi</p>
                  </div>
                </div>
                <span className="px-3 py-1 text-[10px] font-extrabold bg-amber-950/60 border border-amber-800/50 text-amber-400 rounded-full">
                  DISRUPTOR
                </span>
              </div>

              {/* Impact Key Numbers Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-900/60 p-4 rounded-2xl border border-gray-800">
                  <span className="text-[10px] font-bold text-gray-400 uppercase">Estimasi Penonton</span>
                  <p className="text-2xl font-black text-white mt-1">100M+</p>
                  <span className="text-[10px] text-teal-400 font-medium">Views Edukasi Kritis</span>
                </div>

                <div className="bg-gray-900/60 p-4 rounded-2xl border border-gray-800">
                  <span className="text-[10px] font-bold text-gray-400 uppercase">Beasiswa Tergalang</span>
                  <p className="text-2xl font-black text-indigo-400 mt-1">Rp 1B+</p>
                  <span className="text-[10px] text-indigo-300 font-medium">Bantuan Siswa Daerah</span>
                </div>
              </div>

              {/* Core Attributes */}
              <div className="space-y-2">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">3 Pilar Jati Diri</span>
                <div className="flex flex-wrap gap-2 pt-1">
                  <span className="px-3 py-1.5 bg-gray-900 text-gray-200 text-xs font-semibold rounded-xl border border-gray-800 flex items-center gap-1.5">
                    <BrainCircuit className="w-3.5 h-3.5 text-indigo-400" />
                    Literasi Kritis
                  </span>
                  <span className="px-3 py-1.5 bg-gray-900 text-gray-200 text-xs font-semibold rounded-xl border border-gray-800 flex items-center gap-1.5">
                    <ShieldAlert className="w-3.5 h-3.5 text-red-400" />
                    Anti-Penipuan Finansial
                  </span>
                  <span className="px-3 py-1.5 bg-gray-900 text-gray-200 text-xs font-semibold rounded-xl border border-gray-800 flex items-center gap-1.5">
                    <HeartHandshake className="w-3.5 h-3.5 text-teal-400" />
                    Inisiator Aksi Warga
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </header>

      {/* SECTION 2: TEDx 4-STAGE NARRATIVE ARC (FRIKSI & PERJUANGAN REALITA) */}
      <section className="max-w-7xl mx-auto px-6 py-16 border-t border-gray-900">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="px-3.5 py-1.5 rounded-full bg-indigo-950/60 border border-indigo-800/50 text-indigo-300 text-xs font-bold tracking-widest uppercase">
            ALUR NARRATIVE FRIKSI SOSIAL
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Bagaimana Satu Narasi Mampu Mengguncang Perilaku Publik
          </h2>
          <p className="text-sm md:text-base text-gray-400">
            Perjalanan transformasi dari birokrasi kementerian menuju panggung keberanian sipil.
          </p>
        </div>

        {/* 4-Stage Timeline Grid (Opini.id / Asumsi Style Carousel Feel) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Stage 1: The Hook */}
          <div className="glass-card p-6 rounded-3xl space-y-4 border-l-4 border-indigo-500">
            <div className="w-10 h-10 rounded-2xl bg-indigo-950/80 border border-indigo-800/60 flex items-center justify-center text-indigo-400 font-bold text-sm">
              01
            </div>
            <h3 className="text-lg font-bold text-white">1. Realitas Pahit (The Friction)</h3>
            <p className="text-xs text-gray-300 leading-relaxed">
              Melihat jutaan anak muda Indonesia terjerat skema ponzi, investasi bodong, dan judi online akibat minimnya literasi keuangan dasar dan logika berpikir kritis di masyarakat.
            </p>
          </div>

          {/* Stage 2: The Epiphany */}
          <div className="glass-card p-6 rounded-3xl space-y-4 border-l-4 border-purple-500">
            <div className="w-10 h-10 rounded-2xl bg-purple-950/80 border border-purple-800/60 flex items-center justify-center text-purple-400 font-bold text-sm">
              02
            </div>
            <h3 className="text-lg font-bold text-white">2. Keberanian Resign (The Choice)</h3>
            <p className="text-xs text-gray-300 leading-relaxed">
              Memilih melepaskan posisi stabil sebagai ASN di Kementerian Keuangan demi mendedikasikan hidupnya secara utuh untuk mengedukasi publik lewat media independen.
            </p>
          </div>

          {/* Stage 3: The Action */}
          <div className="glass-card p-6 rounded-3xl space-y-4 border-l-4 border-teal-500">
            <div className="w-10 h-10 rounded-2xl bg-teal-950/80 border border-teal-800/60 flex items-center justify-center text-teal-400 font-bold text-sm">
              03
            </div>
            <h3 className="text-lg font-bold text-white">3. Malaka Project (The Movement)</h3>
            <p className="text-xs text-gray-300 leading-relaxed">
              Mendirikan Malaka Project sebagai wadah kolektif edukasi gratis yang menyajikan video esai berbobot tinggi tentang filsafat, stoikisme, ekonomi, dan politik warga.
            </p>
          </div>

          {/* Stage 4: The Legacy */}
          <div className="glass-card p-6 rounded-3xl space-y-4 border-l-4 border-amber-500">
            <div className="w-10 h-10 rounded-2xl bg-amber-950/80 border border-amber-800/60 flex items-center justify-center text-amber-400 font-bold text-sm">
              04
            </div>
            <h3 className="text-lg font-bold text-white">4. Dampak Lapangan (The Legacy)</h3>
            <p className="text-xs text-gray-300 leading-relaxed">
              Menyelamatkan puluhan ribu orang dari jeratan kejahatan digital, serta menggalang beasiswa pendidikan miliaran rupiah bagi anak-anak muda daerah yang berprestasi.
            </p>
          </div>

        </div>
      </section>

      {/* SECTION 3: KARYA NYATA & VALUASI DAMPAK LOKAL (TEMPO EDITORIAL BREAKDOWN) */}
      <section className="max-w-7xl mx-auto px-6 py-16 border-t border-gray-900">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Portofolio Karya Nyata */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-indigo-400 tracking-wider uppercase">PORTOFOLIO KARYA NYATA</span>
              <h3 className="text-2xl md:text-4xl font-extrabold text-white">Jejak Rekam Terbukti di Lapangan</h3>
            </div>

            <div className="space-y-4">
              <div className="glass-panel p-5 rounded-2xl flex items-start gap-4 border border-white/5">
                <div className="p-3 rounded-xl bg-red-950/60 border border-red-800/50 text-red-400 shrink-0">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Pembongkaran Skema Ponzi & Judi Online</h4>
                  <p className="text-xs text-gray-300 mt-1 leading-relaxed">
                    Secara konsisten membuat analisis matematika & modus operandi penipuan finansial digital, menyelamatkan masyarakat dari kerugian miliaran rupiah.
                  </p>
                </div>
              </div>

              <div className="glass-panel p-5 rounded-2xl flex items-start gap-4 border border-white/5">
                <div className="p-3 rounded-xl bg-indigo-950/60 border border-indigo-800/50 text-indigo-400 shrink-0">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Penyebaran Filsafat Stoikisme & Nalar Kritis</h4>
                  <p className="text-xs text-gray-300 mt-1 leading-relaxed">
                    Mempopulerkan pemikiran stoikisme dan metode ilmiah dalam menghadapi tekanan hidup modern bagi jutaan penonton di YouTube & media sosial.
                  </p>
                </div>
              </div>

              <div className="glass-panel p-5 rounded-2xl flex items-start gap-4 border border-white/5">
                <div className="p-3 rounded-xl bg-teal-950/60 border border-teal-800/50 text-teal-400 shrink-0">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Penggalangan Beasiswa & Inisiatif Kolektif</h4>
                  <p className="text-xs text-gray-300 mt-1 leading-relaxed">
                    Menggalang dana publik secara transparan untuk membiayai kuliah anak-anak muda daerah berprestasi yang terkendala ekonomi.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Valuasi Dampak Lokal (High Contrast Impact Box) */}
          <div className="lg:col-span-5">
            <div className="glass-card p-8 rounded-3xl border border-indigo-500/30 space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase tracking-wider">
                <Award className="w-4 h-4" />
                <span>VALUASI DAMPAK LOKAL</span>
              </div>

              <h3 className="text-xl font-extrabold text-white">
                Mengubah Cara Berpikir Satu Generasi
              </h3>

              <p className="text-xs text-gray-300 leading-relaxed">
                Ferry Irwandi berhasil membuktikan bahwa konten edukasi berbobot tinggi tanpa sensasi mampu bersaing dengan industri hiburan dangkal. Dampak terbesarnya adalah terciptanya benteng perlindungan nalar publik di kalangan anak muda Indonesia dari kejahatan finansial digital.
              </p>

              <div className="pt-4 border-t border-gray-800 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-400">Sektor Dampak</span>
                  <span className="font-bold text-teal-400">Pendidikan & Literasi Finansial</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-400">Jangkauan Warga</span>
                  <span className="font-bold text-purple-400">Nasional (Lintas Daerah)</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-400">Sentimen Publik</span>
                  <span className="font-bold text-indigo-400">98% Mayoritas Positif</span>
                </div>
              </div>

              <a 
                href="https://youtube.com/@ferryirwandi" 
                target="_blank" 
                rel="noreferrer"
                className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-xs rounded-xl transition flex items-center justify-center gap-2 shadow-lg shadow-indigo-900/50"
              >
                <span>Pelajari Rekam Jejak Selengkapnya</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-900 bg-[#05070d] py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-500">
          <div>
            <p className="font-bold text-gray-300 text-sm">SEKTOR LOKAL 🇮🇩</p>
            <p className="mt-1">Mading Kebanggaan Warga — Platform Kurasi Tokoh Berdampak Indonesia Era Pop Modern.</p>
          </div>
          <p>© 2026 Sector Lokal. Curated with pride for Indonesian citizens.</p>
        </div>
      </footer>

    </div>
  );
}
