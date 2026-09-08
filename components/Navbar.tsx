'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Sun, Moon, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  isDarkMode?: boolean;
  onToggleDarkMode?: () => void;
  showBackButton?: boolean;
  backHref?: string;
  backLabel?: string;
}

export default function Navbar({
  isDarkMode: externalDarkMode,
  onToggleDarkMode: externalToggleDarkMode,
  showBackButton = false,
  backHref = '/',
  backLabel = 'KEMBALI KE RADAR'
}: NavbarProps) {
  const pathname = usePathname();
  const [internalDarkMode, setInternalDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const isDark = externalDarkMode !== undefined ? externalDarkMode : internalDarkMode;
  const toggleDark = externalToggleDarkMode || (() => setInternalDarkMode(!internalDarkMode));

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        setScrollProgress((totalScroll / windowHeight) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/arsip', label: 'Arsip' },
    { href: '/manifesto', label: 'Manifesto' },
    { href: '/artikel', label: 'Artikel' },
    { href: '/kontak', label: 'Kontak' },
  ];

  const navBg = isDark 
    ? 'bg-[#0A0E1A]/90 border-white/[0.08] text-[#EDE8DC]' 
    : 'bg-[#F9F8F5]/90 border-black/[0.08] text-[#0A0E1A]';

  return (
    <>
      {/* Top Hairline Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 right-0 h-[2px] bg-[#E11D48] z-50 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      <header className={`sticky top-0 z-40 backdrop-blur-md border-b px-6 py-4 transition-colors ${navBg}`}>
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          
          {/* Logo / Back Button */}
          <div className="flex items-center gap-4">
            {showBackButton ? (
              <Link 
                href={backHref} 
                className="flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-[#E11D48] hover:underline"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>{backLabel}</span>
              </Link>
            ) : (
              <Link href="/" className="flex items-center gap-2 group">
                <span className="font-display uppercase text-xl sm:text-2xl tracking-tight text-inherit">
                  SEKTOR LOKAL
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#E11D48] group-hover:scale-125 transition-transform" />
              </Link>
            )}
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 text-xs font-mono font-bold tracking-wider uppercase p-1 rounded-full border border-inherit/10 bg-inherit/50 backdrop-blur-sm">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-1.5 rounded-full transition-all ${
                    isActive
                      ? 'bg-[#E11D48] text-white shadow-sm shadow-[#E11D48]/40 font-bold'
                      : 'hover:text-[#E11D48] opacity-80 hover:opacity-100'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Controls: DarkMode & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleDark}
              className={`p-2 rounded-xl border text-xs font-semibold flex items-center gap-2 transition-all shadow-sm ${
                isDark 
                  ? 'bg-[#111726] border-white/10 text-[#EDE8DC] hover:border-[#E11D48]' 
                  : 'bg-white border-black/10 text-[#0A0E1A] hover:border-[#E11D48]'
              }`}
              title="Ganti Mode Tampilan"
            >
              {isDark ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-indigo-600" />}
              <span className="hidden sm:inline text-[11px] font-mono tracking-wider font-bold">
                {isDark ? 'LIGHT' : 'DARK'}
              </span>
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 rounded-xl border transition ${
                isDark ? 'border-white/10 text-[#EDE8DC] hover:border-[#E11D48]' : 'border-black/10 text-[#0A0E1A] hover:border-[#E11D48]'
              }`}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`fixed inset-0 top-[65px] z-30 p-8 flex flex-col space-y-6 text-xl font-display uppercase tracking-wider backdrop-blur-2xl border-b md:hidden ${
              isDark ? 'bg-[#0A0E1A]/98 border-white/10 text-[#EDE8DC]' : 'bg-[#F9F8F5]/98 border-black/10 text-[#0A0E1A]'
            }`}
          >
            {navLinks.map((link, idx) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center justify-between py-2 border-b border-inherit/10 ${
                    isActive ? 'text-[#E11D48]' : 'hover:text-[#E11D48]'
                  }`}
                >
                  <span>0{idx + 1} // {link.label}</span>
                  {isActive && <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#E11D48] text-white">ACTIVE</span>}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
