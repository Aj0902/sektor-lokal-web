'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { 
  ArrowLeft, 
  Save, 
  Plus, 
  Trash2, 
  Check, 
  BookOpen, 
  Tag, 
  Layers, 
  Clock, 
  DollarSign, 
  Quote, 
  Award,
  ExternalLink
} from 'lucide-react';
import { getProfileBySlug, saveProfileData } from '../../../../../lib/supabase/adminActions';
import { FullProfileData, LifeEvent, Work, Article, Testimonial, Initiative } from '../../../../../lib/supabase/types';

export default function EditProfileEditorPage() {
  const params = useParams();
  const router = useRouter();
  const slug = (params?.slug as string) || 'ferry-irwandi';

  const [activeTab, setActiveTab] = useState<'profile' | 'events' | 'works' | 'articles' | 'products' | 'testimonials'>('profile');
  const [data, setData] = useState<FullProfileData | null>(null);
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      const res = await getProfileBySlug(slug);
      setData(res);
    };
    load();
  }, [slug]);

  if (!data) {
    return <div className="p-10 font-mono text-xs text-[#E11D48]">MEMUAT DATA EDIT...</div>;
  }

  const { profile, lifeEvents, works, articles, testimonials, initiatives } = data;

  const handleSaveAll = async () => {
    const res = await saveProfileData(data);
    setToastMsg(res.message);
    setTimeout(() => setToastMsg(null), 3000);
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto pb-16">
      
      {/* HEADER BAR */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b pb-4 border-inherit/10">
        <div className="flex items-center gap-3">
          <Link href="/admin" className="p-2 rounded-xl border border-inherit/10 hover:border-[#E11D48]">
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <div>
            <span className="text-xs font-mono text-[#E11D48] font-bold uppercase">EDITOR TERPADU TOKOH</span>
            <h1 className="text-3xl font-display uppercase tracking-tight">{profile.name}</h1>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href={`/profil/${profile.slug}`}
            target="_blank"
            className="px-4 py-2.5 rounded-xl border border-inherit/20 hover:border-emerald-500 hover:text-emerald-500 font-mono text-xs font-bold uppercase flex items-center gap-1.5"
          >
            <ExternalLink className="w-4 h-4" />
            <span>PREVIEW</span>
          </Link>

          <button
            onClick={handleSaveAll}
            className="px-5 py-2.5 rounded-xl bg-[#E11D48] hover:bg-[#BE123C] text-white font-mono text-xs font-bold uppercase flex items-center gap-1.5 shadow-md shadow-[#E11D48]/30"
          >
            <Save className="w-4 h-4" />
            <span>SIMPAN PERUBAHAN</span>
          </button>
        </div>
      </div>

      {toastMsg && (
        <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 text-xs font-mono flex items-center gap-2">
          <Check className="w-4 h-4" />
          <span>{toastMsg}</span>
        </div>
      )}

      {/* NAVIGATION TABS */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar border-b border-inherit/10 pb-2 text-xs font-mono font-bold uppercase">
        {[
          { id: 'profile', label: '1. Profil Utama' },
          { id: 'events', label: '2. Linimasa Hidup' },
          { id: 'works', label: '3. Discovery Karya' },
          { id: 'articles', label: '4. Artikel & SEO' },
          { id: 'products', label: '5. Produk & Variasi' },
          { id: 'testimonials', label: '6. Kata Warga' },
        ].map((t) => (
          <button
            key={t.id}
            onClick={() => setActiveTab(t.id as any)}
            className={`px-4 py-2 rounded-xl transition-all shrink-0 ${
              activeTab === t.id
                ? 'bg-[#E11D48] text-white shadow-sm'
                : 'hover:bg-inherit/40 text-gray-400'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* TAB CONTENT 1: PROFIL UTAMA */}
      {activeTab === 'profile' && (
        <div className="space-y-6 text-xs font-mono">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-gray-400">NAMA LENGKAP:</label>
              <input 
                type="text" 
                value={profile.name} 
                onChange={(e) => setData({ ...data, profile: { ...profile, name: e.target.value } })}
                className="w-full p-3 rounded-xl border border-inherit/20 bg-inherit/50 font-sans text-sm font-bold"
              />
            </div>
            <div className="space-y-2">
              <label className="text-gray-400">GELAR / SUBTITLE EDITORIAL:</label>
              <input 
                type="text" 
                value={profile.title} 
                onChange={(e) => setData({ ...data, profile: { ...profile, title: e.target.value } })}
                className="w-full p-3 rounded-xl border border-inherit/20 bg-inherit/50 font-sans"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-gray-400">FOTO PORTRAIT URL:</label>
            <input 
              type="text" 
              value={profile.photo_url} 
              onChange={(e) => setData({ ...data, profile: { ...profile, photo_url: e.target.value } })}
              className="w-full p-3 rounded-xl border border-inherit/20 bg-inherit/50"
            />
          </div>

          <div className="space-y-2">
            <label className="text-gray-400">KUTIPAN EMAS (PULL QUOTE):</label>
            <textarea 
              rows={2}
              value={profile.quote} 
              onChange={(e) => setData({ ...data, profile: { ...profile, quote: e.target.value } })}
              className="w-full p-3 rounded-xl border border-inherit/20 bg-inherit/50 font-sans"
            />
          </div>

          <div className="space-y-2">
            <label className="text-gray-400">BIOGRAFI PARAGRAF 1:</label>
            <textarea 
              rows={3}
              value={profile.bio_paragraphs[0] || ''} 
              onChange={(e) => {
                const nextBios = [...profile.bio_paragraphs];
                nextBios[0] = e.target.value;
                setData({ ...data, profile: { ...profile, bio_paragraphs: nextBios } });
              }}
              className="w-full p-3 rounded-xl border border-inherit/20 bg-inherit/50 font-sans"
            />
          </div>
        </div>
      )}

      {/* TAB CONTENT 4: ARTIKEL & WAWASAN (OPSI A: FORM TERSTRUKTUR & MARKDOWN HASIL DISKUSI) */}
      {activeTab === 'articles' && (
        <div className="space-y-6 text-xs font-mono">
          <div className="flex items-center justify-between">
            <span className="text-gray-400">DAFTAR ESAI ARTIKEL TERPUBLIKASI</span>
            <button
              onClick={() => {
                const newArt: Article = {
                  id: genId(),
                  profile_id: profile.id,
                  title: 'Judul Analisis Baru',
                  tag: 'ESAI KRITIS',
                  read_time: '5 Menit Membaca',
                  description: 'Ringkasan esai baru...',
                  link_url: '/artikel/analisis-kritis-literasi-keuangan',
                  order_index: articles.length + 1
                };
                setData({ ...data, articles: [...articles, newArt] });
              }}
              className="px-3 py-1.5 rounded-lg bg-[#E11D48] text-white flex items-center gap-1 font-mono"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>+ TAMBAH ARTIKEL</span>
            </button>
          </div>

          <div className="space-y-6">
            {articles.map((art, idx) => (
              <div key={art.id} className="p-5 rounded-2xl border border-inherit/10 space-y-4 bg-inherit/30">
                <div className="flex items-center justify-between">
                  <span className="text-[#E11D48] font-bold">ARTIKEL #{idx + 1}</span>
                  <button 
                    onClick={() => {
                      setData({ ...data, articles: articles.filter(a => a.id !== art.id) });
                    }}
                    className="p-1 rounded text-red-500 hover:bg-red-500/10"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-gray-400">Judul Artikel:</label>
                    <input 
                      type="text" 
                      value={art.title}
                      onChange={(e) => {
                        const next = [...articles];
                        next[idx].title = e.target.value;
                        setData({ ...data, articles: next });
                      }}
                      className="w-full p-2.5 rounded-xl border border-inherit/20 bg-inherit/50 font-sans font-bold"
                    />
                  </div>
                  <div>
                    <label className="text-gray-400">Tag & Waktu Baca:</label>
                    <div className="flex gap-2">
                      <input 
                        type="text" 
                        value={art.tag}
                        onChange={(e) => {
                          const next = [...articles];
                          next[idx].tag = e.target.value;
                          setData({ ...data, articles: next });
                        }}
                        className="w-1/2 p-2.5 rounded-xl border border-inherit/20 bg-inherit/50"
                      />
                      <input 
                        type="text" 
                        value={art.read_time}
                        onChange={(e) => {
                          const next = [...articles];
                          next[idx].read_time = e.target.value;
                          setData({ ...data, articles: next });
                        }}
                        className="w-1/2 p-2.5 rounded-xl border border-inherit/20 bg-inherit/50"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-gray-400">Ringkasan Abstrak:</label>
                  <textarea 
                    rows={2}
                    value={art.description}
                    onChange={(e) => {
                      const next = [...articles];
                      next[idx].description = e.target.value;
                      setData({ ...data, articles: next });
                    }}
                    className="w-full p-2.5 rounded-xl border border-inherit/20 bg-inherit/50 font-sans"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB CONTENT 5: PRODUK & VARIASI HARGA */}
      {activeTab === 'products' && (
        <div className="space-y-6 text-xs font-mono">
          <div className="flex items-center justify-between">
            <span className="text-gray-400">PRODUK, KARYA CETAK & INISIATIF WARGA</span>
            <button
              onClick={() => {
                const newProd: Initiative = {
                  id: genId(),
                  profile_id: profile.id,
                  title: 'Inisiatif Baru',
                  category: 'Merchandise',
                  description: 'Deskripsi produk...',
                  price: 'Rp 199.000',
                  price_variants: ['Edisi Standar (Rp 199.000)', 'Edisi Khusus (Rp 299.000)'],
                  action_text: 'Beli / Dukung',
                  link_url: '#',
                  order_index: initiatives.length + 1
                };
                setData({ ...data, initiatives: [...initiatives, newProd] });
              }}
              className="px-3 py-1.5 rounded-lg bg-[#E11D48] text-white flex items-center gap-1 font-mono"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>+ TAMBAH PRODUK</span>
            </button>
          </div>

          <div className="space-y-6">
            {initiatives.map((prod, idx) => (
              <div key={prod.id} className="p-5 rounded-2xl border border-inherit/10 space-y-4 bg-inherit/30">
                <div className="flex items-center justify-between">
                  <span className="text-[#E11D48] font-bold">PRODUK #{idx + 1}</span>
                  <button 
                    onClick={() => {
                      setData({ ...data, initiatives: initiatives.filter(i => i.id !== prod.id) });
                    }}
                    className="p-1 rounded text-red-500 hover:bg-red-500/10"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-gray-400">Nama Produk / Inisiatif:</label>
                    <input 
                      type="text" 
                      value={prod.title}
                      onChange={(e) => {
                        const next = [...initiatives];
                        next[idx].title = e.target.value;
                        setData({ ...data, initiatives: next });
                      }}
                      className="w-full p-2.5 rounded-xl border border-inherit/20 bg-inherit/50 font-sans font-bold"
                    />
                  </div>
                  <div>
                    <label className="text-gray-400">Harga Utama (Display Badge):</label>
                    <input 
                      type="text" 
                      value={prod.price || ''}
                      placeholder="Rp 149.000"
                      onChange={(e) => {
                        const next = [...initiatives];
                        next[idx].price = e.target.value;
                        setData({ ...data, initiatives: next });
                      }}
                      className="w-full p-2.5 rounded-xl border border-inherit/20 bg-inherit/50 text-[#E11D48] font-bold"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-gray-400">Variasi Harga & Tiering (Pisahkan Komma):</label>
                  <input 
                    type="text" 
                    value={(prod.price_variants || []).join(', ')}
                    placeholder="Softcover (Rp 149.000), Hardcover Signature (Rp 249.000)"
                    onChange={(e) => {
                      const next = [...initiatives];
                      next[idx].price_variants = e.target.value.split(',').map(s => s.trim()).filter(Boolean);
                      setData({ ...data, initiatives: next });
                    }}
                    className="w-full p-2.5 rounded-xl border border-inherit/20 bg-inherit/50 font-sans"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB CONTENT 2, 3, 6 GENERAL PLACEHOLDER */}
      {(activeTab === 'events' || activeTab === 'works' || activeTab === 'testimonials') && (
        <div className="p-8 rounded-2xl border border-inherit/10 text-center space-y-3 font-mono text-xs">
          <p className="text-gray-400">Seksi {activeTab.toUpperCase()} Siap Diisi dan Dikelola Direct ke Supabase.</p>
          <button 
            onClick={handleSaveAll}
            className="px-4 py-2 bg-[#E11D48] text-white font-bold rounded-xl"
          >
            SIMPAN PERUBAHAN DATA
          </button>
        </div>
      )}

    </div>
  );
}

function genId() {
  return Math.random().toString(36).substring(2, 9);
}
