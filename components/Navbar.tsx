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
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Beranda' },
    { href: '/arsip/warga', label: 'Arsip Warga' },
    { href: '/arsip/brand', label: 'Brand Mandiri' },
    { href: '/artikel', label: 'Ruang Redaksi' },
    { href: '/manifesto', label: 'Manifesto' },
    { href: '/kontak', label: 'Kontak' },
  ];

  const navBg = isDark 
    ? 'bg-[#07090E]/92 border-white/10 text-[#F5EFEB]' 
    : 'bg-[#F8F5EE]/92 border-black/10 text-[#0A0E1A]';

  return (
    <>
      {/* Top Reading/Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 right-0 h-[2px] bg-[#E11D48] z-50 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      <header className={`sticky top-0 z-40 backdrop-blur-md border-b h-16 transition-colors ${navBg}`}>
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          
          {/* Brand Mark / Back Button */}
          <div className="flex items-center gap-3">
            {showBackButton ? (
              <Link 
                href={backHref} 
                className="flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-[#E11D48] hover:underline tactile-btn"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>{backLabel}</span>
              </Link>
            ) : (
              <Link href="/" className="flex items-center gap-2.5 group tactile-btn">
                <span className="font-display uppercase text-2xl tracking-tight text-inherit">
                  SEKTOR LOKAL
                </span>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E11D48] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E11D48]" />
                </span>
              </Link>
            )}
          </div>

          {/* Desktop Navigation — Single Line Standard */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-mono font-bold tracking-widest uppercase">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative py-1 transition-colors ${
                    isActive ? 'text-[#E11D48]' : 'text-inherit opacity-80 hover:opacity-100 hover:text-[#E11D48]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span 
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#E11D48]"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Controls: Mode Toggle + Mobile Menu Trigger */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleDark}
              className={`p-2 rounded border transition-colors tactile-btn ${
                isDark 
                  ? 'border-white/10 hover:border-[#E11D48] text-[#F5EFEB]' 
                  : 'border-black/10 hover:border-[#E11D48] text-[#0A0E1A]'
              }`}
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setIsMenuOpen(true)}
              className={`lg:hidden p-2 rounded border transition-colors tactile-btn ${
                isDark 
                  ? 'border-white/10 hover:border-[#E11D48] text-[#F5EFEB]' 
                  : 'border-black/10 hover:border-[#E11D48] text-[#0A0E1A]'
              }`}
              aria-label="Buka Menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className={`fixed inset-0 z-50 flex flex-col justify-center items-center px-6 ${
              isDark ? 'bg-[#07090E] text-[#F5EFEB]' : 'bg-[#F8F5EE] text-[#0A0E1A]'
            }`}
          >
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-6 right-6 p-2 rounded border border-inherit/20 hover:text-[#E11D48] transition-colors tactile-btn"
              aria-label="Tutup Menu"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="flex flex-col items-center gap-6 font-display text-3xl sm:text-4xl uppercase tracking-wider text-center">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`transition-colors tactile-btn ${isActive ? 'text-[#E11D48]' : 'hover:text-[#E11D48]'}`}
                  >
                    <span>{link.label}</span>
                  </Link>
                );
              })}
            </div>
            <div className="mt-12 text-xs font-mono uppercase tracking-widest text-[#8E95A5]">
              SEKTOR LOKAL // RADAR WARGA NUSANTARA
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
