'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  MessageSquare, 
  Send, 
  ShieldCheck, 
  UserPlus, 
  Radio, 
  Lock, 
  Mail, 
  CheckCircle2, 
  Sparkles,
  ArrowRight,
  AlertCircle
} from 'lucide-react';
import { motion } from 'framer-motion';
import ConstellationCanvas from '../../components/ConstellationCanvas';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Breadcrumbs from '../../components/Breadcrumbs';

export default function KontakPage() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [channelType, setChannelType] = useState<'kolaborasi' | 'nominasi' | 'tipoff' | 'media'>('kolaborasi');
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    subject: '',
    message: '',
    isAnonymous: false,
    agreeTerms: true
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const bgCanvas = isDarkMode ? 'particle-wave-dark text-[#EDE8DC]' : 'particle-wave-light text-[#0A0E1A]';
  const cardClass = isDarkMode ? 'spotlight-card-dark' : 'spotlight-card-light';
  const mutedText = isDarkMode ? 'text-[#8A93A8]' : 'text-[#64748B]';

  return (
    <div className={`min-h-screen ${bgCanvas} font-sans antialiased selection:bg-[#E11D48] selection:text-white relative flex flex-col justify-between`}>
      
      {/* Schema.org ContactPage Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Ruang Dialog, Kolaborasi & Tip-Off Sektor Lokal",
            "description": "Kanal resmi komunikasi, pengajuan nominasi warga/brand lokal, kolaborasi riset, dan tip-off data berintegritas.",
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

      <main className="max-w-5xl mx-auto px-6 relative z-10 space-y-12 py-10 flex-1 w-full">
        
        {/* BREADCRUMBS */}
        <Breadcrumbs 
          items={[{ label: 'Ruang Dialog & Kontak' }]} 
          isDarkMode={isDarkMode}
        />

        {/* HERO SECTION */}
        <section className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#E11D48]/30 bg-[#E11D48]/10 text-[#E11D48] text-xs font-mono font-bold tracking-widest uppercase">
            <Radio className="w-3.5 h-3.5" />
            <span>JARINGAN KOMUNIKASI & DIALOG WARGA</span>
          </div>

          <div className="space-y-3 max-w-3xl">
            <h1 className="text-4xl sm:text-6xl font-display uppercase tracking-tight leading-[0.95]">
              RUANG DIALOG, KOLABORASI, & TIP-OFF
            </h1>
            <p className={`text-base sm:text-lg leading-relaxed ${mutedText}`}>
              Sektor Lokal berdiri di atas semangat keterbukaan gotong royong warga. Ajukan kolaborasi strategis, nominasikan figur/brand otentik dari pelosok, atau kirimkan laporan riset independen.
            </p>
          </div>
        </section>

        {/* 4 INTERACTION CHANNELS PILLS */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              id: 'kolaborasi',
              title: 'Kolaborasi & Riset',
              desc: 'Kemitraan strategis institusi, aktivasi komunitas, & riset terbuka.',
              icon: Sparkles
            },
            {
              id: 'nominasi',
              title: 'Usul Figur / Brand',
              desc: 'Ajukan tokoh inspiratif atau brand mandiri untuk dikurasi redaksi.',
              icon: UserPlus
            },
            {
              id: 'tipoff',
              title: 'Tip-Off & Data',
              desc: 'Kanal aman terenkripsi untuk laporan fakta lapangan & investigasi.',
              icon: Lock
            },
            {
              id: 'media',
              title: 'Redaksi & Media',
              desc: 'Pertanyaan pers, wawancara, & lisensi publikasi esai.',
              icon: MessageSquare
            }
          ].map((ch) => {
            const isSelected = channelType === ch.id;
            const Icon = ch.icon;
            return (
              <button
                key={ch.id}
                onClick={() => { setChannelType(ch.id as any); setIsSuccess(false); }}
                className={`p-5 rounded-3xl border text-left flex flex-col justify-between space-y-3 transition-all ${
                  isSelected
                    ? 'border-[#E11D48] bg-[#E11D48]/10 shadow-lg shadow-[#E11D48]/20 scale-[1.02]'
                    : isDarkMode
                      ? 'border-white/10 bg-[#111726]/60 hover:border-white/20'
                      : 'border-black/10 bg-white/60 hover:border-black/20'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className={`p-2.5 rounded-2xl ${isSelected ? 'bg-[#E11D48] text-white' : 'bg-inherit/60 text-[#E11D48] border border-inherit/10'}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  {isSelected && <span className="text-[10px] font-mono font-bold text-[#E11D48] uppercase">PILIHAN</span>}
                </div>
                <div>
                  <h3 className="font-display text-sm uppercase tracking-wide">{ch.title}</h3>
                  <p className={`text-[11px] leading-relaxed mt-1 ${mutedText}`}>{ch.desc}</p>
                </div>
              </button>
            );
          })}
        </section>

        {/* MAIN FORM & DIRECT DETAILS GRID */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* FORM CONTAINER */}
          <div className={`lg:col-span-8 p-8 sm:p-10 rounded-3xl border ${cardClass}`}>
            {isSuccess ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-display uppercase tracking-tight">PESAN BERHASIL TERKIRIM</h3>
                <p className={`text-sm max-w-md mx-auto ${mutedText}`}>
                  Terima kasih atas kontribusi dan suaramu. Tim Redaksi & Dewan Kurator Sektor Lokal akan meninjau pesan ini secara cermat.
                </p>
                <button
                  onClick={() => {
                    setIsSuccess(false);
                    setFormData({
                      name: '',
                      contact: '',
                      subject: '',
                      message: '',
                      isAnonymous: false,
                      agreeTerms: true
                    });
                  }}
                  className="mt-4 px-6 py-2.5 bg-[#E11D48] text-white font-mono text-xs font-bold rounded-xl uppercase hover:bg-[#BE123C] transition"
                >
                  KIRIM PESAN BARU
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="flex items-center justify-between border-b pb-3 border-inherit/10">
                  <span className="font-mono text-xs text-[#E11D48] font-bold uppercase">
                    FORMULIR // {channelType.toUpperCase()}
                  </span>
                  {channelType === 'tipoff' && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-500 font-bold">
                      <Lock className="w-3 h-3" />
                      <span>ENCRYPTED & CONFIDENTIAL</span>
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono uppercase tracking-wider text-inherit/80">
                      {channelType === 'tipoff' ? 'Nama / Inisial (Opsional)' : 'Nama Lengkap / Organisasi'}
                    </label>
                    <input 
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={channelType === 'tipoff' ? 'Contoh: Warga Kendeng (atau kosongkan)' : 'Nama Anda'}
                      className={`w-full px-4 py-2.5 rounded-2xl text-xs font-sans border transition focus:outline-none focus:ring-2 focus:ring-[#E11D48]/50 ${
                        isDarkMode 
                          ? 'bg-[#111726] border-white/10 text-[#EDE8DC] placeholder-zinc-500' 
                          : 'bg-white border-black/10 text-[#0A0E1A] placeholder-zinc-400'
                      }`}
                      required={channelType !== 'tipoff'}
                    />
                  </div>

                  {/* Contact */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono uppercase tracking-wider text-inherit/80">
                      Kontak Balasan (Email / Signal / Telegram / X)
                    </label>
                    <input 
                      type="text"
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                      placeholder="email@domain.id atau @username"
                      className={`w-full px-4 py-2.5 rounded-2xl text-xs font-sans border transition focus:outline-none focus:ring-2 focus:ring-[#E11D48]/50 ${
                        isDarkMode 
                          ? 'bg-[#111726] border-white/10 text-[#EDE8DC] placeholder-zinc-500' 
                          : 'bg-white border-black/10 text-[#0A0E1A] placeholder-zinc-400'
                      }`}
                      required
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-mono uppercase tracking-wider text-inherit/80">
                    Subjek / Judul Inisiatif
                  </label>
                  <input 
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder={
                      channelType === 'kolaborasi' 
                        ? 'Contoh: Rencana Kolaborasi Lokakarya Kedaulatan Data di Bandung'
                        : channelType === 'nominasi'
                          ? 'Contoh: Rekomendasi Tokoh Penggerak Mata Air Gunungkidul'
                          : channelType === 'tipoff'
                            ? 'Contoh: Temuan Audit Limbah Pabrik Tekstil di Sungai Citarum'
                            : 'Pertanyaan Liputan / Wawancara Redaksi'
                    }
                    className={`w-full px-4 py-2.5 rounded-2xl text-xs font-sans border transition focus:outline-none focus:ring-2 focus:ring-[#E11D48]/50 ${
                      isDarkMode 
                        ? 'bg-[#111726] border-white/10 text-[#EDE8DC] placeholder-zinc-500' 
                        : 'bg-white border-black/10 text-[#0A0E1A] placeholder-zinc-400'
                    }`}
                    required
                  />
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-mono uppercase tracking-wider text-inherit/80">
                    Rincian Pesan, Fakta Rekam Jejak, atau Deskripsi Ide
                  </label>
                  <textarea 
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tuliskan penjelasan lengkap, tautan referensi, rekam jejak, atau data pendukung lainnya..."
                    className={`w-full p-4 rounded-2xl text-xs font-sans border transition focus:outline-none focus:ring-2 focus:ring-[#E11D48]/50 resize-y ${
                      isDarkMode 
                        ? 'bg-[#111726] border-white/10 text-[#EDE8DC] placeholder-zinc-500' 
                        : 'bg-white border-black/10 text-[#0A0E1A] placeholder-zinc-400'
                    }`}
                    required
                  />
                </div>

                {/* Checkbox agreement */}
                <div className="flex items-start gap-3 text-xs pt-2">
                  <input 
                    type="checkbox"
                    id="agreeTerms"
                    checked={formData.agreeTerms}
                    onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
                    className="mt-0.5 rounded text-[#E11D48] focus:ring-[#E11D48]"
                    required
                  />
                  <label htmlFor="agreeTerms" className={mutedText}>
                    Saya menyatakan data dan informasi yang saya sampaikan berlandaskan itikad baik sesuai dengan{' '}
                    <Link href="/legal/kriteria-kurasi" className="text-[#E11D48] hover:underline font-semibold">
                      Standar Etika Kurasi Sektor Lokal
                    </Link>.
                  </label>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-[#E11D48] hover:bg-[#BE123C] text-white font-mono text-xs font-bold uppercase rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-[#E11D48]/30 transition disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>MENGIRIMKAN PESAN...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>KIRIM PESAN KE REDAKSI</span>
                    </>
                  )}
                </button>

              </form>
            )}
          </div>

          {/* SIDEBAR: DIRECT CONTACT & SECURITY */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Direct Channels */}
            <div className={`p-6 sm:p-8 rounded-3xl border space-y-4 ${cardClass}`}>
              <h3 className="font-display text-base uppercase tracking-tight">KANAL LANGSUNG REDAKSI</h3>
              
              <div className="space-y-3 text-xs">
                <div className="p-3 rounded-2xl border border-inherit/10 bg-inherit/40 space-y-1">
                  <div className="flex items-center gap-2 text-[#E11D48] font-mono font-bold">
                    <Mail className="w-3.5 h-3.5" />
                    <span>REDAKSI & ESAI</span>
                  </div>
                  <p className="font-mono text-inherit">redaksi@sektorlokal.id</p>
                </div>

                <div className="p-3 rounded-2xl border border-inherit/10 bg-inherit/40 space-y-1">
                  <div className="flex items-center gap-2 text-indigo-500 font-mono font-bold">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>KOLABORASI STRATEGIS</span>
                  </div>
                  <p className="font-mono text-inherit">kolaborasi@sektorlokal.id</p>
                </div>

                <div className="p-3 rounded-2xl border border-inherit/10 bg-inherit/40 space-y-1">
                  <div className="flex items-center gap-2 text-emerald-500 font-mono font-bold">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>TIP-OFF / WHISTLEBLOWER</span>
                  </div>
                  <p className="font-mono text-inherit">investigasi@sektorlokal.id</p>
                </div>
              </div>
            </div>

            {/* Anti-Titipan Guarantee */}
            <div className={`p-6 rounded-3xl border space-y-3 border-amber-500/20 bg-amber-500/5`}>
              <div className="flex items-center gap-2 text-amber-500 font-mono text-xs font-bold uppercase">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>IKRAR INTEGRITAS REDAKSI</span>
              </div>
              <p className={`text-xs leading-relaxed ${mutedText}`}>
                Sektor Lokal tidak menerima titipan berbayar <em>(paid placement)</em> untuk masuk ke dalam kurasi 100 Warga Lokal. Setiap kandidat wajib melewati 6-Tahap Uji Deduktif Redaksi.
              </p>
              <Link 
                href="/legal/kriteria-kurasi" 
                className="inline-flex items-center gap-1 text-xs font-mono font-bold text-[#E11D48] hover:underline"
              >
                <span>Pelajari Kriteria Kurasi</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>

        </section>

      </main>

      <Footer isDarkMode={isDarkMode} />

    </div>
  );
}
