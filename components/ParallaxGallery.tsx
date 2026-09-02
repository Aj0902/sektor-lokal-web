'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { GalleryItem } from '../lib/supabase/types';

interface ParallaxGalleryProps {
  isDarkMode: boolean;
  items?: GalleryItem[];
}

export default function ParallaxGallery({ isDarkMode, items }: ParallaxGalleryProps) {
  const defaultImagesCol1 = [
    { title: 'Diskursus Ekonomi Politik', image_url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80' },
    { title: 'Konsolidasi Warga', image_url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80' },
    { title: 'Riset Dokumenter', image_url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80' },
  ];

  const defaultImagesCol2 = [
    { title: 'Forum Terbuka Warga', image_url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80' },
    { title: 'Studio Produksi Konten', image_url: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80' },
    { title: 'Aksi Solidaritas', image_url: 'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&w=800&q=80' },
  ];

  const defaultImagesCol3 = [
    { title: 'Investigasi Lapangan', image_url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80' },
    { title: 'Bedah Pemikiran', image_url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80' },
    { title: 'Orasi Kebudayaan', image_url: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80' },
  ];

  const hasCustomItems = items && items.length > 0;

  // Use ONLY custom items if provided. Do NOT mix with sample images!
  const finalCol1 = hasCustomItems ? items.filter((_, i) => i % 3 === 0) : defaultImagesCol1;
  const finalCol2 = hasCustomItems ? items.filter((_, i) => i % 3 === 1) : defaultImagesCol2;
  const finalCol3 = hasCustomItems ? items.filter((_, i) => i % 3 === 2) : defaultImagesCol3;

  const cardBorder = isDarkMode ? 'border-white/10 bg-[#111726]/60' : 'border-black/10 bg-white/80';

  return (
    <div className="space-y-6 pt-4">
      <div className="flex items-center justify-between">
        <div>
          <span className="text-[10px] font-mono font-bold text-[#E11D48] uppercase tracking-widest block">
            DOKUMENTASI VISUAL LAPANGAN
          </span>
          <h3 className="text-xl sm:text-2xl font-display uppercase tracking-tight text-inherit">
            GALERI AKSI & DISKURSUS WARGA
          </h3>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 min-h-[300px] max-h-[500px] overflow-y-auto no-scrollbar rounded-3xl p-3 border border-inherit/10 shadow-inner">
        
        {/* Column 1 */}
        <div className="space-y-4">
          {finalCol1.map((item, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ scale: 1.02 }}
              className={`relative h-64 rounded-2xl overflow-hidden border shadow-sm group ${cardBorder}`}
            >
              <Image 
                src={item.image_url || 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80'} 
                alt={item.title || 'Dokumentasi Aksi Warga'} 
                fill 
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover filter grayscale contrast-115 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-4">
                <span className="text-xs font-mono font-bold text-white uppercase tracking-wider line-clamp-1">{item.title}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Column 2 */}
        <div className="space-y-4 pt-6">
          {finalCol2.map((item, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ scale: 1.02 }}
              className={`relative h-64 rounded-2xl overflow-hidden border shadow-sm group ${cardBorder}`}
            >
              <Image 
                src={item.image_url || 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80'} 
                alt={item.title || 'Dokumentasi Aksi Warga'} 
                fill 
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover filter grayscale contrast-115 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-4">
                <span className="text-xs font-mono font-bold text-white uppercase tracking-wider line-clamp-1">{item.title}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Column 3 */}
        <div className="space-y-4">
          {finalCol3.map((item, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ scale: 1.02 }}
              className={`relative h-64 rounded-2xl overflow-hidden border shadow-sm group ${cardBorder}`}
            >
              <Image 
                src={item.image_url || 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80'} 
                alt={item.title || 'Dokumentasi Aksi Warga'} 
                fill 
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover filter grayscale contrast-115 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-4">
                <span className="text-xs font-mono font-bold text-white uppercase tracking-wider line-clamp-1">{item.title}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
