'use client';

import React, { useState } from 'react';
import { Mail, ArrowRight, CheckCircle2 } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function KontakPage() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [channelType, setChannelType] = useState('kolaborasi');
  const [isSuccess, setIsSuccess] = useState(false);

  const channels = [
    { id: 'kolaborasi', title: 'Kolaborasi & Riset' },
    { id: 'nominasi', title: 'Usul Warga / Brand' },
    { id: 'tipoff', title: 'Tip-Off & Data' },
    { id: 'media', title: 'Pertanyaan Redaksi' }
  ];

  const bgClass = isDarkMode ? 'bg-[#07090E] text-[#F5EFEB]' : 'bg-[#F8F5EE] text-[#07090E]';
  const borderClass = isDarkMode ? 'border-white/10' : 'border-black/10';
  const inputClass = isDarkMode ? 'bg-[#0E131F] border-white/20 text-white' : 'bg-transparent border-black/20 text-black';

  return (
    <div className={`min-h-screen ${bgClass} font-sans antialiased flex flex-col`}>
      <Navbar isDarkMode={isDarkMode} onToggleDarkMode={() => setIsDarkMode(!isDarkMode)} />

      <main className="flex-1 w-full max-w-5xl mx-auto px-6 py-12 sm:py-20 space-y-16">
        
        <header className="space-y-6 max-w-2xl border-b pb-8 border-current/10">
          <div className="text-xs font-mono text-[#E11D48] font-bold uppercase tracking-widest">
            Jaringan Dialog
          </div>
          <h1 className="text-5xl sm:text-7xl font-display uppercase tracking-tight leading-[0.9]">
            Ruang Dialog <br/> & Tip-Off
          </h1>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-4 space-y-8">
            <div className="space-y-2">
              <h3 className="font-display text-xl uppercase">Kanal Komunikasi</h3>
              <div className="flex flex-col space-y-2">
                {channels.map(ch => (
                  <button
                    key={ch.id}
                    onClick={() => { setChannelType(ch.id); setIsSuccess(false); }}
                    className={`text-left p-4 border ${channelType === ch.id ? 'border-[#E11D48] text-[#E11D48] font-bold' : `${borderClass} opacity-60 hover:opacity-100`} text-sm font-mono uppercase tracking-wider transition-colors`}
                  >
                    {ch.title}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-current/10 space-y-4 font-mono text-xs">
              <p>EMAIL REDAKSI</p>
              <a href="mailto:redaksi@sektorlokal.id" className="text-[#E11D48] hover:underline font-bold text-lg">
                redaksi@sektorlokal.id
              </a>
            </div>
          </div>

          <div className="lg:col-span-8">
            {isSuccess ? (
              <div className={`p-12 border ${borderClass} text-center space-y-6`}>
                <CheckCircle2 className="w-12 h-12 text-[#E11D48] mx-auto" />
                <h2 className="font-display text-3xl uppercase">Pesan Diterima</h2>
                <p className="font-editorial text-lg italic text-current/70">Terima kasih atas kontribusi Anda. Redaksi akan meninjau pesan secara cermat.</p>
                <button onClick={() => setIsSuccess(false)} className="text-[#E11D48] font-mono text-xs uppercase font-bold underline">Kirim pesan lain</button>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setIsSuccess(true); }} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase">Nama</label>
                    <input type="text" required className={`w-full p-4 border rounded-none focus:outline-none focus:border-[#E11D48] ${inputClass}`} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase">Kontak Balasan</label>
                    <input type="text" required className={`w-full p-4 border rounded-none focus:outline-none focus:border-[#E11D48] ${inputClass}`} />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase">Subjek</label>
                  <input type="text" required className={`w-full p-4 border rounded-none focus:outline-none focus:border-[#E11D48] ${inputClass}`} />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase">Pesan</label>
                  <textarea rows={6} required className={`w-full p-4 border rounded-none focus:outline-none focus:border-[#E11D48] ${inputClass}`}></textarea>
                </div>

                <button type="submit" className="px-8 py-4 bg-[#E11D48] text-white font-mono text-xs font-bold uppercase hover:bg-[#BE123C] transition-colors flex items-center gap-2">
                  Kirim Pesan <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </section>
      </main>

      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}
