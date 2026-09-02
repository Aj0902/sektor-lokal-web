'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Save, Check } from 'lucide-react';
import { saveProfileData } from '../../../../lib/supabase/adminActions';

export default function NewProfilePage() {
  const router = useRouter();
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  const [slug, setSlug] = useState('');
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('THE VOICES');
  const [quote, setQuote] = useState('');
  const [photoUrl, setPhotoUrl] = useState('https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80');
  const [bio1, setBio1] = useState('');
  const [bio2, setBio2] = useState('');

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!slug || !name) return;

    const newProfile = {
      id: crypto.randomUUID(),
      slug: slug.toLowerCase().trim().replace(/\s+/g, '-'),
      name: name.toUpperCase().trim(),
      title: title.trim(),
      category,
      bio_paragraphs: [bio1, bio2].filter(Boolean),
      quote: quote.trim(),
      photo_url: photoUrl.trim(),
      verified: true,
      status_text: 'VERIFIKASI TERKURASI',
      social_links: { youtube: '', twitter: '', instagram: '' }
    };

    const res = await saveProfileData({
      profile: newProfile,
      lifeEvents: [],
      works: [],
      articles: [],
      gallery: [],
      testimonials: [],
      initiatives: []
    });

    setToastMsg(res.message);
    setTimeout(() => {
      router.push(`/admin/profiles/${newProfile.slug}/edit`);
    }, 1200);
  };

  const inputStyle = "w-full p-3 rounded-xl border text-sm font-sans text-gray-900 bg-white dark:bg-[#0A0E1A] dark:text-[#EDE8DC] border-gray-300 dark:border-white/20 focus:border-[#E11D48] focus:outline-none transition-colors";

  return (
    <div className="space-y-8 max-w-3xl mx-auto">
      
      {/* HEADER */}
      <div className="flex items-center justify-between border-b pb-4 border-inherit/10">
        <div className="flex items-center gap-3">
          <Link href="/admin" className="p-2 rounded-xl border border-inherit/10 hover:border-[#E11D48] transition-colors">
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <div>
            <span className="text-xs font-mono text-[#E11D48] font-bold uppercase tracking-wider">ADMIN FORM</span>
            <h1 className="text-3xl font-display uppercase tracking-tight">+ TAMBAH TOKOH BARU</h1>
          </div>
        </div>
      </div>

      {toastMsg && (
        <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 text-xs font-mono flex items-center gap-2">
          <Check className="w-4 h-4" />
          <span>{toastMsg}</span>
        </div>
      )}

      {/* FORM WITH HIGH CONTRAST TEXT VISIBILITY */}
      <form onSubmit={handleSave} className="space-y-6 text-xs font-mono">
        <div className="space-y-2">
          <label className="block text-gray-700 dark:text-gray-300 font-bold uppercase">Nama Lengkap Tokoh:</label>
          <input 
            type="text" 
            placeholder="misal: TAN MALAKA"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setSlug(e.target.value.toLowerCase().trim().replace(/\s+/g, '-'));
            }}
            required
            className={inputStyle}
          />
        </div>

        <div className="space-y-2">
          <label className="block text-gray-700 dark:text-gray-300 font-bold uppercase">URL Slug (ID Unik URL):</label>
          <input 
            type="text" 
            placeholder="tan-malaka"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            required
            className={inputStyle}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="block text-gray-700 dark:text-gray-300 font-bold uppercase">Kategori Tokoh:</label>
            <select 
              value={category} 
              onChange={(e) => setCategory(e.target.value)}
              className={inputStyle}
            >
              <option value="THE VOICES">THE VOICES</option>
              <option value="THE STRATEGISTS">THE STRATEGISTS</option>
              <option value="THE ENTERTAINERS">THE ENTERTAINERS</option>
              <option value="THE GRASSROOTS">THE GRASSROOTS</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-gray-700 dark:text-gray-300 font-bold uppercase">Gelar Subtitle Editorial:</label>
            <input 
              type="text" 
              placeholder="The Strategist • Pejuang Nalar"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={inputStyle}
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-gray-700 dark:text-gray-300 font-bold uppercase">Foto Portrait URL:</label>
          <input 
            type="text" 
            value={photoUrl}
            onChange={(e) => setPhotoUrl(e.target.value)}
            className={inputStyle}
          />
        </div>

        <div className="space-y-2">
          <label className="block text-gray-700 dark:text-gray-300 font-bold uppercase">Kutipan Emas (Pull Quote):</label>
          <textarea 
            rows={2}
            placeholder="Kutipan prinsipil..."
            value={quote}
            onChange={(e) => setQuote(e.target.value)}
            className={inputStyle}
          />
        </div>

        <div className="space-y-2">
          <label className="block text-gray-700 dark:text-gray-300 font-bold uppercase">Biografi Paragraf 1:</label>
          <textarea 
            rows={3}
            placeholder="Ringkasan biografi..."
            value={bio1}
            onChange={(e) => setBio1(e.target.value)}
            className={inputStyle}
          />
        </div>

        <button 
          type="submit"
          className="w-full py-3.5 bg-[#E11D48] hover:bg-[#BE123C] text-white font-bold rounded-xl flex items-center justify-center gap-2 uppercase tracking-wider text-xs shadow-md shadow-[#E11D48]/30 transition-colors"
        >
          <Save className="w-4 h-4" />
          <span>SIMPAN TOKOH & LANJUT EDITOR DETAIL</span>
        </button>
      </form>

    </div>
  );
}
