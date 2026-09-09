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
    ? 'bg-[#07090E]/90 border-white/10 text-[#F5EFEB]' 
    : 'bg-[#F8F5EE]/90 border-black/10 text-[#0A0E1A]';

  return (
    <>
      <div 
        className="fixed top-0 left-0 right-0 h-[2px] bg-[#E11D48] z-50 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      <header className={`sticky top-0 z-40 backdrop-blur-md border-b transition-colors ${navBg}`}>
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          
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
                <span className="font-display uppercase text-2xl tracking-tight text-inherit">
                  SEKTOR LOKAL
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#E11D48]" />
              </Link>
            )}
          </div>

          <nav className="hidden md:flex items-center gap-8 text-xs font-mono font-bold tracking-widest uppercase">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative py-1 group transition-colors ${
                    isActive ? 'text-[#E11D48]' : 'hover:text-[#E11D48]'
                  }`}
                >
                  {link.label}
                  <span 
                    className={`absolute bottom-0 left-0 h-[2px] bg-[#E11D48] transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleDark}
              className={`p-2 transition-colors hover:text-[#E11D48] ${isDark ? 'text-[#F5EFEB]' : 'text-[#0A0E1A]'}`}
              aria-label="Toggle Dark Mode"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setIsMenuOpen(true)}
              className={`md:hidden p-2 transition-colors hover:text-[#E11D48] ${isDark ? 'text-[#F5EFEB]' : 'text-[#0A0E1A]'}`}
              aria-label="Open Menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`fixed inset-0 z-50 flex flex-col justify-center items-center ${
              isDark ? 'bg-[#07090E] text-[#F5EFEB]' : 'bg-[#F8F5EE] text-[#0A0E1A]'
            }`}
          >
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-6 right-6 p-2 hover:text-[#E11D48] transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="flex flex-col items-center gap-8 font-display text-4xl uppercase tracking-widest">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`relative group ${isActive ? 'text-[#E11D48]' : 'hover:text-[#E11D48] transition-colors'}`}
                  >
                    <span>{link.label}</span>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
