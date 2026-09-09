import React from 'react';
import Link from 'next/link';
import { Twitter, Instagram, Youtube } from 'lucide-react';

interface FooterProps {
  isDarkMode?: boolean;
}

export default function Footer({ isDarkMode = false }: FooterProps) {
  const borderClass = isDarkMode ? 'border-white/10' : 'border-black/10';
  const mutedText = isDarkMode ? 'text-[#8E95A5]' : 'text-[#64748B]';

  return (
    <footer className={`border-t transition-colors ${borderClass} ${isDarkMode ? 'bg-[#07090E] text-[#F5EFEB]' : 'bg-[#F8F5EE] text-[#0A0E1A]'}`}>
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-12">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-16 border-b border-inherit/10">
          
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group inline-flex">
              <span className="font-display uppercase text-2xl tracking-tight text-inherit">
                SEKTOR LOKAL
              </span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#E11D48]" />
            </Link>
            <p className={`text-sm leading-relaxed font-sans ${mutedText}`}>
              Platform media kurasi dan ruang penemuan yang mempertemukan beragam cerita, karya, manusia, dan sumber daya yang berakar di Indonesia.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://twitter.com/sektorlokal" target="_blank" rel="noreferrer" className="hover:text-[#E11D48] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/sektorlokal.id" target="_blank" rel="noreferrer" className="hover:text-[#E11D48] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://youtube.com/@sektorlokal" target="_blank" rel="noreferrer" className="hover:text-[#E11D48] transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-xs font-mono uppercase tracking-widest font-bold">
              PENEMUAN & ARSIP
            </h4>
            <ul className={`space-y-3 text-sm font-sans ${mutedText}`}>
              <li><Link href="/arsip/warga" className="hover:text-[#E11D48] transition-colors">Arsip Warga</Link></li>
              <li><Link href="/arsip/brand" className="hover:text-[#E11D48] transition-colors">Arsip Brand</Link></li>
              <li><Link href="/arsip" className="hover:text-[#E11D48] transition-colors">Semua Direktori</Link></li>
              <li><Link href="/artikel" className="hover:text-[#E11D48] transition-colors">Ruang Redaksi</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-xs font-mono uppercase tracking-widest font-bold">
              INTEGRITAS & ETIKA
            </h4>
            <ul className={`space-y-3 text-sm font-sans ${mutedText}`}>
              <li><Link href="/legal/kriteria-kurasi" className="hover:text-[#E11D48] transition-colors">Kriteria Kurasi</Link></li>
              <li><Link href="/legal/policy-brief" className="hover:text-[#E11D48] transition-colors">Policy Brief</Link></li>
              <li><Link href="/legal/terms" className="hover:text-[#E11D48] transition-colors">Syarat & Ketentuan</Link></li>
              <li><Link href="/legal/privacy" className="hover:text-[#E11D48] transition-colors">Kebijakan Privasi</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-xs font-mono uppercase tracking-widest font-bold">
              DIALOG & SIKAP
            </h4>
            <ul className={`space-y-3 text-sm font-sans ${mutedText}`}>
              <li><Link href="/manifesto" className="hover:text-[#E11D48] transition-colors">Manifesto Bangsa</Link></li>
              <li><Link href="/kontak" className="hover:text-[#E11D48] transition-colors">Kontak Redaksi</Link></li>
              <li><Link href="/admin" className="hover:text-[#E11D48] transition-colors">Portal Admin</Link></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono">
          <p className={mutedText}>
            © 2026 Sektor Lokal. Pustaka Penemuan Manusia & Karya Nusantara.
          </p>
        </div>

      </div>
    </footer>
  );
}
