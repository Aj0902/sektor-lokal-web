import React from 'react';
import Link from 'next/link';
import { Twitter, Instagram, Youtube, Radio } from 'lucide-react';

interface FooterProps {
  isDarkMode?: boolean;
}

export default function Footer({ isDarkMode = false }: FooterProps) {
  const borderClass = isDarkMode ? 'border-white/10' : 'border-black/10';
  const mutedText = isDarkMode ? 'text-[#8E95A5]' : 'text-[#64748B]';

  return (
    <footer className={`border-t transition-colors ${borderClass} ${isDarkMode ? 'bg-[#07090E] text-[#F5EFEB]' : 'bg-[#F8F5EE] text-[#0A0E1A]'}`}>
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-12">
        
        {/* Main Grid: 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-inherit/10">
          
          {/* Brand Info (5 Cols) */}
          <div className="md:col-span-5 space-y-6">
            <Link href="/" className="flex items-center gap-2.5 group inline-flex tactile-btn">
              <span className="font-display uppercase text-2xl tracking-tight text-inherit">
                SEKTOR LOKAL
              </span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#E11D48]" />
            </Link>
            <p className={`text-sm leading-relaxed font-sans max-w-md ${mutedText}`}>
              Pusat pengarsipan dan ruang penemuan mandiri yang mendokumentasikan pemikiran kritis, karya orisinil, inisiatif akar rumput, dan manusia-manusia berdaulat di seluruh Nusantara.
            </p>
            <div className="flex items-center gap-4 text-inherit">
              <a href="https://twitter.com/sektorlokal" target="_blank" rel="noreferrer" className="p-2 border border-inherit/10 rounded hover:border-[#E11D48] hover:text-[#E11D48] transition-colors tactile-btn" aria-label="Twitter Sektor Lokal">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://instagram.com/sektorlokal.id" target="_blank" rel="noreferrer" className="p-2 border border-inherit/10 rounded hover:border-[#E11D48] hover:text-[#E11D48] transition-colors tactile-btn" aria-label="Instagram Sektor Lokal">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://youtube.com/@sektorlokal" target="_blank" rel="noreferrer" className="p-2 border border-inherit/10 rounded hover:border-[#E11D48] hover:text-[#E11D48] transition-colors tactile-btn" aria-label="YouTube Sektor Lokal">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Directory Links (2 Cols) */}
          <div className="md:col-span-2 space-y-5">
            <h4 className="text-xs font-mono uppercase tracking-widest font-bold text-[#E11D48]">
              DIREKTORI
            </h4>
            <ul className={`space-y-3 text-sm font-sans ${mutedText}`}>
              <li><Link href="/arsip/warga" className="hover:text-[#E11D48] transition-colors">Arsip Warga</Link></li>
              <li><Link href="/arsip/brand" className="hover:text-[#E11D48] transition-colors">Brand Mandiri</Link></li>
              <li><Link href="/arsip" className="hover:text-[#E11D48] transition-colors">Semua Kategori</Link></li>
              <li><Link href="/artikel" className="hover:text-[#E11D48] transition-colors">Ruang Redaksi</Link></li>
            </ul>
          </div>

          {/* Integrity Links (2 Cols) */}
          <div className="md:col-span-2 space-y-5">
            <h4 className="text-xs font-mono uppercase tracking-widest font-bold text-[#E11D48]">
              INTEGRITAS
            </h4>
            <ul className={`space-y-3 text-sm font-sans ${mutedText}`}>
              <li><Link href="/legal/kriteria-kurasi" className="hover:text-[#E11D48] transition-colors">Kriteria Kurasi</Link></li>
              <li><Link href="/legal/policy-brief" className="hover:text-[#E11D48] transition-colors">Policy Brief</Link></li>
              <li><Link href="/legal/terms" className="hover:text-[#E11D48] transition-colors">Syarat & Ketentuan</Link></li>
              <li><Link href="/legal/privacy" className="hover:text-[#E11D48] transition-colors">Kebijakan Privasi</Link></li>
            </ul>
          </div>

          {/* Dialog & Admin Links (3 Cols) */}
          <div className="md:col-span-3 space-y-5">
            <h4 className="text-xs font-mono uppercase tracking-widest font-bold text-[#E11D48]">
              DIALOG & SIKAP
            </h4>
            <ul className={`space-y-3 text-sm font-sans ${mutedText}`}>
              <li><Link href="/manifesto" className="hover:text-[#E11D48] transition-colors">Manifesto Bangsa</Link></li>
              <li><Link href="/kontak" className="hover:text-[#E11D48] transition-colors">Kirim Tip-off & Dialog</Link></li>
              <li><Link href="/admin" className="hover:text-[#E11D48] transition-colors">Pusat Kurasi Redaksi</Link></li>
            </ul>
          </div>

        </div>

        {/* Status Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono">
          <div className="flex items-center gap-2 text-[#E11D48]">
            <Radio className="w-3.5 h-3.5 animate-pulse" />
            <span className="font-bold tracking-wider uppercase">KURASI INDEPENDEN WARGA NUSANTARA</span>
          </div>
          <p className={mutedText}>
            © 2026 Sektor Lokal. Hak cipta dilindungi undang-undang nalar sehat.
          </p>
        </div>

      </div>
    </footer>
  );
}
