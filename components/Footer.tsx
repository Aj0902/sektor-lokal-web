import React from 'react';
import Link from 'next/link';
import { Twitter, Instagram, Youtube, ArrowUpRight, ShieldCheck, FileText, Sparkles, Compass } from 'lucide-react';

interface FooterProps {
  isDarkMode?: boolean;
}

export default function Footer({ isDarkMode = false }: FooterProps) {
  const borderClass = isDarkMode ? 'border-white/[0.08]' : 'border-black/[0.08]';
  const mutedText = isDarkMode ? 'text-[#8E95A5]' : 'text-[#64748B]';

  return (
    <footer className={`border-t transition-colors ${borderClass} ${isDarkMode ? 'bg-[#07090E] text-[#F5EFEB]' : 'bg-[#F8F5EE] text-[#0A0E1A]'}`}>
      <div className="max-w-6xl mx-auto px-6 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-inherit/10">
          
          {/* Col 1: Brand & Soul */}
          <div className="md:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-2 group inline-flex">
              <span className="font-display uppercase text-2xl tracking-tight text-inherit">
                SEKTOR LOKAL
              </span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#E11D48] shadow-crimson-subtle group-hover:scale-125 transition-transform" />
            </Link>
            <p className={`text-sm leading-relaxed ${mutedText}`}>
              Platform media kurasi dan ruang penemuan yang mempertemukan beragam cerita, karya, manusia, dan sumber daya yang berakar di Indonesia.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a 
                href="https://twitter.com/sektorlokal" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="Twitter Sektor Lokal"
                className="w-8 h-8 rounded-lg border border-inherit/20 hover:border-[#E11D48] flex items-center justify-center hover:text-[#E11D48] transition"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a 
                href="https://instagram.com/sektorlokal.id" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="Instagram Sektor Lokal"
                className="w-8 h-8 rounded-lg border border-inherit/20 hover:border-[#E11D48] flex items-center justify-center hover:text-[#E11D48] transition"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://youtube.com/@sektorlokal" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="YouTube Sektor Lokal"
                className="w-8 h-8 rounded-lg border border-inherit/20 hover:border-[#E11D48] flex items-center justify-center hover:text-[#E11D48] transition"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Arsip & Direktori */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#E11D48] font-bold">
              PENEMUAN & ARSIP
            </h4>
            <ul className="space-y-2 text-sm font-medium">
              <li>
                <Link href="/arsip/warga" className="hover:text-[#E11D48] transition flex items-center gap-1">
                  <span>100 Cerita Warga</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-[#E11D48]/10 text-[#E11D48] border border-[#E11D48]/20">10 LACI</span>
                </Link>
              </li>
              <li>
                <Link href="/arsip/brand" className="hover:text-[#E11D48] transition">
                  Brand Lokal & Proses
                </Link>
              </li>
              <li>
                <Link href="/arsip" className="hover:text-[#E11D48] transition">
                  Hub Dua Pintu Penemuan
                </Link>
              </li>
              <li>
                <Link href="/artikel" className="hover:text-[#E11D48] transition">
                  Ruang Redaksi & Esai
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Integritas & Kebijakan */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#E11D48] font-bold">
              INTEGRITAS & ETIKA
            </h4>
            <ul className="space-y-2 text-sm font-medium">
              <li>
                <Link href="/legal/kriteria-kurasi" className="hover:text-[#E11D48] transition flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#E11D48]" />
                  <span>Kriteria Kurasi 6-Tahap</span>
                </Link>
              </li>
              <li>
                <Link href="/legal/policy-brief" className="hover:text-[#E11D48] transition flex items-center gap-1">
                  <FileText className="w-3.5 h-3.5 text-[#E11D48]" />
                  <span>Policy Brief Kedaulatan</span>
                </Link>
              </li>
              <li>
                <Link href="/legal/terms" className="hover:text-[#E11D48] transition">
                  Syarat & Ketentuan
                </Link>
              </li>
              <li>
                <Link href="/legal/privacy" className="hover:text-[#E11D48] transition">
                  Kebijakan Privasi Data
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Sikap & Ruang Dialog */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#E11D48] font-bold">
              DIALOG & SIKAP
            </h4>
            <ul className="space-y-2 text-sm font-medium">
              <li>
                <Link href="/manifesto" className="hover:text-[#E11D48] transition flex items-center gap-1 text-[#E11D48] font-bold">
                  <Compass className="w-3.5 h-3.5" />
                  <span>Manifesto Bangsa</span>
                </Link>
              </li>
              <li>
                <Link href="/kontak" className="hover:text-[#E11D48] transition">
                  Kontak & Tip-Off
                </Link>
              </li>
              <li>
                <Link href="/admin" className="hover:text-[#E11D48] transition text-xs opacity-60">
                  Panel Kurator
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono">
          <p className={mutedText}>
            © 2026 Sektor Lokal. Pustaka Penemuan Manusia & Karya Nusantara.
          </p>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1 text-[#E11D48] font-bold">
              <span className="w-2 h-2 rounded-full bg-[#E11D48] shadow-crimson-subtle animate-pulse" />
              <span>RADAR 100% LIVE & GROUNDED</span>
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
