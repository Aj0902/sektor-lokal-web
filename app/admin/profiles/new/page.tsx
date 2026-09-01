'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Save, Plus, Check } from 'lucide-react';
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
      id: genId(),
      slug: slug.toLowerCase().replace(/\s+/g, '-'),
      name: name.toUpperCase(),
      title,
      category,
      bio_paragraphs: [bio1, bio2].filter(Boolean),
      quote,
      photo_url: photoUrl,
      verified: true,
      status_text: 'VERIFIKASI TERKURASI',
      social_links: { youtube: '', twitter: '', instagram: '' }
    };

    const res = await saveProfileData({
      profile: newProfile,
      lifeEvents: [],
      works: [],
      articles: [],
      testimonials: [],
      initiatives: []
    });

    setToastMsg(res.message);
    setTimeout(() => {
      router.push(`/admin/profiles/${newProfile.slug}/edit`);
    }, 1500);
  };

  function genId() {
    return Math.random().toString(36).substring(2, 9);
  }

  return (
    <div className="space-y-8 max-w-3xl mx-auto">
      
      {/* HEADER */}
      <div className="flex items-center justify-between border-b pb-4 border-inherit/10">
        <div className="flex items-center gap-3">
          <Link href="/admin" className="p-2 rounded-xl border border-inherit/10 hover:border-[#E11D48]">
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <div>
            <span className="text-xs font-mono text-[#E11D48] font-bold uppercase">ADMIN FORM</span>
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

      {/* FORM */}
      <form onSubmit={handleSave} className="space-y-6 text-xs font-mono">
        <div className="space-y-2">
          <label className="block text-gray-400 uppercase">Nama Lengkap Tokoh:</label>
          <input 
            type="text" 
            placeholder="misal: TAN MALAKA"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setSlug(e.target.value.toLowerCase().replace(/\s+/g, '-'));
            }}
            required
            className="w-full p-3 rounded-xl border border-inherit/20 bg-inherit/50 focus:border-[#E11D48] text-sm font-sans"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-gray-400 uppercase">URL Slug (ID Unik URL):</label>
          <input 
            type="text" 
            placeholder="tan-malaka"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            required
            className="w-full p-3 rounded-xl border border-inherit/20 bg-inherit/50 focus:border-[#E11D48]"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="block text-gray-400 uppercase">Kategori Tokoh:</label>
            <select 
              value={category} 
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-3 rounded-xl border border-inherit/20 bg-inherit/50 focus:border-[#E11D48]"
            >
              <option value="THE VOICES">THE VOICES</option>
              <option value="THE STRATEGISTS">THE STRATEGISTS</option>
              <option value="THE ENTERTAINERS">THE ENTERTAINERS</option>
              <option value="THE GRASSROOTS">THE GRASSROOTS</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-gray-400 uppercase">Gelar Subtitle Editorial:</label>
            <input 
              type="text" 
              placeholder="The Strategist • Pejuang Nalar"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-3 rounded-xl border border-inherit/20 bg-inherit/50 focus:border-[#E11D48] font-sans"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-gray-400 uppercase">Foto Portrait URL:</label>
          <input 
            type="text" 
            value={photoUrl}
            onChange={(e) => setPhotoUrl(e.target.value)}
            className="w-full p-3 rounded-xl border border-inherit/20 bg-inherit/50 focus:border-[#E11D48]"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-gray-400 uppercase">Kutipan Emas (Pull Quote):</label>
          <textarea 
            rows={2}
            placeholder="Kutipan prinsipil..."
            value={quote}
            onChange={(e) => setQuote(e.target.value)}
            className="w-full p-3 rounded-xl border border-inherit/20 bg-inherit/50 focus:border-[#E11D48] font-sans"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-gray-400 uppercase">Biografi Paragraf 1:</label>
          <textarea 
            rows={3}
            placeholder="Ringkasan biografi..."
            value={bio1}
            onChange={(e) => setBio1(e.target.value)}
            className="w-full p-3 rounded-xl border border-inherit/20 bg-inherit/50 focus:border-[#E11D48] font-sans"
          />
        </div>

        <button 
          type="submit"
          className="w-full py-3.5 bg-[#E11D48] hover:bg-[#BE123C] text-white font-bold rounded-xl flex items-center justify-center gap-2 uppercase tracking-wider text-xs shadow-md shadow-[#E11D48]/30"
        >
          <Save className="w-4 h-4" />
          <span>SIMPAN TOKOH & LANJUT EDITOR DETAIL</span>
        </button>
      </form>

    </div>
  );
}
