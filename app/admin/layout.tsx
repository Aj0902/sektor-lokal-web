'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Users, 
  FolderPlus, 
  Settings, 
  LogOut, 
  ExternalLink, 
  Sun, 
  Moon, 
  Sparkles,
  ShieldCheck
} from 'lucide-react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const bgCanvas = isDarkMode ? 'bg-[#0A0E1A] text-[#EDE8DC]' : 'bg-[#F9F8F5] text-[#0A0E1A]';
  const sidebarBg = isDarkMode ? 'bg-[#111726]/90 border-white/[0.08]' : 'bg-white border-black/[0.08]';

  return (
    <div className={`min-h-screen ${bgCanvas} font-sans flex flex-col md:flex-row antialiased selection:bg-[#E11D48] selection:text-white`}>
      
      {/* SIDEBAR NAVIGATION */}
      <aside className={`w-full md:w-64 border-r p-6 flex flex-col justify-between shrink-0 ${sidebarBg}`}>
        <div className="space-y-8">
          
          {/* Admin Wordmark */}
          <Link href="/admin" className="flex items-center gap-2 group">
            <span className="font-display text-2xl uppercase tracking-wide">
              SEKTOR ADMIN
            </span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#E11D48]" />
          </Link>

          {/* Navigation Links */}
          <nav className="space-y-1.5 font-mono text-xs uppercase font-semibold">
            <Link 
              href="/admin" 
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-[#E11D48] text-white shadow-md shadow-[#E11D48]/30 transition-all"
            >
              <Users className="w-4 h-4" />
              <span>DAFTAR TOKOH</span>
            </Link>

            <Link 
              href="/admin/profiles/new" 
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-[#E11D48]/10 hover:text-[#E11D48] transition-all"
            >
              <FolderPlus className="w-4 h-4" />
              <span>+ TAMBAH TOKOH</span>
            </Link>

            <a 
              href="/" 
              target="_blank"
              className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-inherit/60 transition-all opacity-80 hover:opacity-100"
            >
              <span className="flex items-center gap-3">
                <ExternalLink className="w-4 h-4 text-[#E11D48]" />
                <span>LIHAT PUBLIK</span>
              </span>
            </a>
          </nav>

        </div>

        {/* Sidebar Footer & Theme Toggle */}
        <div className="pt-6 border-t border-inherit/10 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-mono">
            <ShieldCheck className="w-4 h-4 text-[#E11D48]" />
            <span>DEV ADMIN</span>
          </div>

          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 rounded-lg border border-inherit/10 hover:border-[#E11D48]"
            title="Ganti Mode Tampilan"
          >
            {isDarkMode ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-indigo-600" />}
          </button>
        </div>

      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 p-6 sm:p-10 overflow-y-auto">
        {children}
      </main>

    </div>
  );
}
