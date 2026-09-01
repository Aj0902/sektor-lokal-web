'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
  ExternalLink,
  Calendar,
  Globe,
  ShieldCheck,
  Sparkles
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
    return (
      <div className="p-12 text-center space-y-3 font-mono text-xs text-[#E11D48]">
        <div className="w-6 h-6 border-2 border-[#E11D48] border-t-transparent rounded-full animate-spin mx-auto" />
        <p>MEMUAT DATA EDITOR TOKOH ({slug})...</p>
      </div>
    );
  }

  const { profile, lifeEvents, works, articles, testimonials, initiatives } = data;

  const handleSaveAll = async () => {
    const res = await saveProfileData(data);
    setToastMsg(res.message);
    setTimeout(() => setToastMsg(null), 3500);
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto pb-20">
      
      {/* HEADER BAR */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b pb-5 border-inherit/10">
        <div className="flex items-center gap-3">
          <Link href="/admin" className="p-2 rounded-xl border border-inherit/10 hover:border-[#E11D48] transition-colors">
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <div>
            <span className="text-xs font-mono text-[#E11D48] font-bold uppercase tracking-wider">EDITOR TERPADU TOKOH</span>
            <h1 className="text-3xl sm:text-4xl font-display uppercase tracking-tight">{profile.name}</h1>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href={`/profil/${profile.slug}`}
            target="_blank"
            className="px-4 py-2.5 rounded-xl border border-inherit/20 hover:border-emerald-500 hover:text-emerald-500 font-mono text-xs font-bold uppercase flex items-center gap-1.5 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            <span>PREVIEW LIVE</span>
          </Link>

          <button
            onClick={handleSaveAll}
            className="px-5 py-2.5 rounded-xl bg-[#E11D48] hover:bg-[#BE123C] text-white font-mono text-xs font-bold uppercase flex items-center gap-1.5 shadow-md shadow-[#E11D48]/30 transition-all"
          >
            <Save className="w-4 h-4" />
            <span>SIMPAN PERUBAHAN</span>
          </button>
        </div>
      </div>

      {toastMsg && (
        <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 text-xs font-mono flex items-center gap-2 animate-fade-in">
          <Check className="w-4 h-4" />
          <span>{toastMsg}</span>
        </div>
      )}

      {/* NAVIGATION TABS */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar border-b border-inherit/10 pb-3 text-xs font-mono font-bold uppercase">
        {[
          { id: 'profile', label: '1. Profil Utama' },
          { id: 'events', label: `2. Linimasa (${lifeEvents.length})` },
          { id: 'works', label: `3. Karya (${works.length})` },
          { id: 'articles', label: `4. Artikel SEO (${articles.length})` },
          { id: 'products', label: `5. Produk & Variasi (${initiatives.length})` },
          { id: 'testimonials', label: `6. Kata Warga (${testimonials.length})` },
        ].map((t) => (
          <button
            key={t.id}
            onClick={() => setActiveTab(t.id as any)}
            className={`px-4 py-2 rounded-xl transition-all shrink-0 ${
              activeTab === t.id
                ? 'bg-[#E11D48] text-white shadow-md shadow-[#E11D48]/20'
                : 'hover:bg-inherit/40 text-gray-400 border border-inherit/10'
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
              <label className="text-gray-400 uppercase">Nama Lengkap Tokoh:</label>
              <input 
                type="text" 
                value={profile.name} 
                onChange={(e) => setData({ ...data, profile: { ...profile, name: e.target.value } })}
                className="w-full p-3 rounded-xl border border-inherit/20 bg-inherit/50 font-sans text-sm font-bold focus:border-[#E11D48]"
              />
            </div>

            <div className="space-y-2">
              <label className="text-gray-400 uppercase">Kategori Matriks:</label>
              <select
                value={profile.category}
                onChange={(e) => setData({ ...data, profile: { ...profile, category: e.target.value } })}
                className="w-full p-3 rounded-xl border border-inherit/20 bg-inherit/50 focus:border-[#E11D48]"
              >
                <option value="THE VOICES">THE VOICES</option>
                <option value="THE STRATEGISTS">THE STRATEGISTS</option>
                <option value="THE ENTERTAINERS">THE ENTERTAINERS</option>
                <option value="THE GRASSROOTS">THE GRASSROOTS</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-gray-400 uppercase">Gelar Subtitle Editorial:</label>
            <input 
              type="text" 
              value={profile.title} 
              onChange={(e) => setData({ ...data, profile: { ...profile, title: e.target.value } })}
              className="w-full p-3 rounded-xl border border-inherit/20 bg-inherit/50 font-sans focus:border-[#E11D48]"
            />
          </div>

          {/* Photo URL & Live Preview */}
          <div className="space-y-2">
            <label className="text-gray-400 uppercase">Foto Portrait URL:</label>
            <div className="flex gap-4 items-center">
              <input 
                type="text" 
                value={profile.photo_url} 
                onChange={(e) => setData({ ...data, profile: { ...profile, photo_url: e.target.value } })}
                className="w-full p-3 rounded-xl border border-inherit/20 bg-inherit/50 focus:border-[#E11D48]"
              />
              <div className="relative w-12 h-14 rounded-lg overflow-hidden border border-[#E11D48]/40 shrink-0 bg-neutral-900">
                <Image src={profile.photo_url} alt="Preview" fill sizes="48px" className="object-cover filter grayscale" />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-gray-400 uppercase">Kutipan Emas (Pull Quote):</label>
            <textarea 
              rows={2}
              value={profile.quote} 
              onChange={(e) => setData({ ...data, profile: { ...profile, quote: e.target.value } })}
              className="w-full p-3 rounded-xl border border-inherit/20 bg-inherit/50 font-sans focus:border-[#E11D48]"
            />
          </div>

          <div className="space-y-2">
            <label className="text-gray-400 uppercase">Biografi Paragraf 1:</label>
            <textarea 
              rows={3}
              value={profile.bio_paragraphs[0] || ''} 
              onChange={(e) => {
                const nextBios = [...profile.bio_paragraphs];
                nextBios[0] = e.target.value;
                setData({ ...data, profile: { ...profile, bio_paragraphs: nextBios } });
              }}
              className="w-full p-3 rounded-xl border border-inherit/20 bg-inherit/50 font-sans focus:border-[#E11D48]"
            />
          </div>

          <div className="space-y-2">
            <label className="text-gray-400 uppercase">Biografi Paragraf 2:</label>
            <textarea 
              rows={3}
              value={profile.bio_paragraphs[1] || ''} 
              onChange={(e) => {
                const nextBios = [...profile.bio_paragraphs];
                nextBios[1] = e.target.value;
                setData({ ...data, profile: { ...profile, bio_paragraphs: nextBios } });
              }}
              className="w-full p-3 rounded-xl border border-inherit/20 bg-inherit/50 font-sans focus:border-[#E11D48]"
            />
          </div>

          {/* Social Links Form */}
          <div className="pt-4 border-t border-inherit/10 space-y-3">
            <span className="text-[#E11D48] font-bold uppercase">TAUTAN MEDIA SOSIAL:</span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="text-gray-400">YouTube URL:</label>
                <input 
                  type="text" 
                  value={profile.social_links.youtube || ''} 
                  onChange={(e) => setData({ ...data, profile: { ...profile, social_links: { ...profile.social_links, youtube: e.target.value } } })}
                  className="w-full p-2.5 rounded-xl border border-inherit/20 bg-inherit/50"
                />
              </div>
              <div>
                <label className="text-gray-400">Twitter X URL:</label>
                <input 
                  type="text" 
                  value={profile.social_links.twitter || ''} 
                  onChange={(e) => setData({ ...data, profile: { ...profile, social_links: { ...profile.social_links, twitter: e.target.value } } })}
                  className="w-full p-2.5 rounded-xl border border-inherit/20 bg-inherit/50"
                />
              </div>
              <div>
                <label className="text-gray-400">Instagram URL:</label>
                <input 
                  type="text" 
                  value={profile.social_links.instagram || ''} 
                  onChange={(e) => setData({ ...data, profile: { ...profile, social_links: { ...profile.social_links, instagram: e.target.value } } })}
                  className="w-full p-2.5 rounded-xl border border-inherit/20 bg-inherit/50"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB CONTENT 2: LINIMASA HIDUP (FULL FUNCTIONAL EDITOR) */}
      {activeTab === 'events' && (
        <div className="space-y-6 text-xs font-mono">
          <div className="flex items-center justify-between">
            <span className="text-gray-400 uppercase">DAFTAR PERISTIWA LINIMASA PERJALANAN HIDUP</span>
            <button
              onClick={() => {
                const newEv: LifeEvent = {
                  id: genId(),
                  profile_id: profile.id,
                  year_range: '2025 — 2026',
                  title: 'PERISTIWA BARU',
                  description: 'Deskripsi singkat peristiwa perjalanan hidup...',
                  order_index: lifeEvents.length + 1
                };
                setData({ ...data, lifeEvents: [...lifeEvents, newEv] });
              }}
              className="px-3 py-1.5 rounded-lg bg-[#E11D48] text-white flex items-center gap-1 font-mono uppercase font-bold"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>+ TAMBAH PERISTIWA</span>
            </button>
          </div>

          <div className="space-y-4">
            {lifeEvents.map((ev, idx) => (
              <div key={ev.id} className="p-5 rounded-2xl border border-inherit/10 space-y-3 bg-inherit/30">
                <div className="flex items-center justify-between">
                  <span className="text-[#E11D48] font-bold">PERISTIWA #{idx + 1}</span>
                  <button 
                    onClick={() => setData({ ...data, lifeEvents: lifeEvents.filter(e => e.id !== ev.id) })}
                    className="p-1 rounded text-red-500 hover:bg-red-500/10"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="text-gray-400">Rentang Tahun:</label>
                    <input 
                      type="text" 
                      value={ev.year_range}
                      onChange={(e) => {
                        const next = [...lifeEvents];
                        next[idx].year_range = e.target.value;
                        setData({ ...data, lifeEvents: next });
                      }}
                      className="w-full p-2.5 rounded-xl border border-inherit/20 bg-inherit/50 font-bold"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="text-gray-400">Judul Peristiwa:</label>
                    <input 
                      type="text" 
                      value={ev.title}
                      onChange={(e) => {
                        const next = [...lifeEvents];
                        next[idx].title = e.target.value;
                        setData({ ...data, lifeEvents: next });
                      }}
                      className="w-full p-2.5 rounded-xl border border-inherit/20 bg-inherit/50 font-sans font-bold"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-gray-400">Deskripsi Lengkap Peristiwa:</label>
                  <textarea 
                    rows={2}
                    value={ev.description}
                    onChange={(e) => {
                      const next = [...lifeEvents];
                      next[idx].description = e.target.value;
                      setData({ ...data, lifeEvents: next });
                    }}
                    className="w-full p-2.5 rounded-xl border border-inherit/20 bg-inherit/50 font-sans"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB CONTENT 3: DISCOVERY KARYA (FULL FUNCTIONAL EDITOR) */}
      {activeTab === 'works' && (
        <div className="space-y-6 text-xs font-mono">
          <div className="flex items-center justify-between">
            <span className="text-gray-400 uppercase">DAFTAR DISCOVERY KARYA TERKURASI</span>
            <button
              onClick={() => {
                const newWork: Work = {
                  id: genId(),
                  profile_id: profile.id,
                  title: 'Karya Baru',
                  category: 'Riset & Advokasi',
                  description: 'Deskripsi karya terkurasi...',
                  link_url: 'https://youtube.com',
                  order_index: works.length + 1
                };
                setData({ ...data, works: [...works, newWork] });
              }}
              className="px-3 py-1.5 rounded-lg bg-[#E11D48] text-white flex items-center gap-1 font-mono uppercase font-bold"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>+ TAMBAH KARYA</span>
            </button>
          </div>

          <div className="space-y-4">
            {works.map((w, idx) => (
              <div key={w.id} className="p-5 rounded-2xl border border-inherit/10 space-y-3 bg-inherit/30">
                <div className="flex items-center justify-between">
                  <span className="text-[#E11D48] font-bold">KARYA #{idx + 1}</span>
                  <button 
                    onClick={() => setData({ ...data, works: works.filter(item => item.id !== w.id) })}
                    className="p-1 rounded text-red-500 hover:bg-red-500/10"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-gray-400">Judul Karya:</label>
                    <input 
                      type="text" 
                      value={w.title}
                      onChange={(e) => {
                        const next = [...works];
                        next[idx].title = e.target.value;
                        setData({ ...data, works: next });
                      }}
                      className="w-full p-2.5 rounded-xl border border-inherit/20 bg-inherit/50 font-sans font-bold"
                    />
                  </div>
                  <div>
                    <label className="text-gray-400">Kategori Karya:</label>
                    <input 
                      type="text" 
                      value={w.category}
                      onChange={(e) => {
                        const next = [...works];
                        next[idx].category = e.target.value;
                        setData({ ...data, works: next });
                      }}
                      className="w-full p-2.5 rounded-xl border border-inherit/20 bg-inherit/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-gray-400">Deskripsi Ringkas Karya:</label>
                  <textarea 
                    rows={2}
                    value={w.description}
                    onChange={(e) => {
                      const next = [...works];
                      next[idx].description = e.target.value;
                      setData({ ...data, works: next });
                    }}
                    className="w-full p-2.5 rounded-xl border border-inherit/20 bg-inherit/50 font-sans"
                  />
                </div>

                <div>
                  <label className="text-gray-400">Tautan Link Rujukan Karya:</label>
                  <input 
                    type="text" 
                    value={w.link_url}
                    onChange={(e) => {
                      const next = [...works];
                      next[idx].link_url = e.target.value;
                      setData({ ...data, works: next });
                    }}
                    className="w-full p-2.5 rounded-xl border border-inherit/20 bg-inherit/50"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB CONTENT 4: ARTIKEL & SEO (OPSI A: FORM TERSTRUKTUR & MARKDOWN HASIL DISKUSI) */}
      {activeTab === 'articles' && (
        <div className="space-y-6 text-xs font-mono">
          <div className="flex items-center justify-between">
            <span className="text-gray-400 uppercase">DAFTAR ESAI ARTIKEL TERPUBLIKASI (OPTIMASI SEO)</span>
            <button
              onClick={() => {
                const newArt: Article = {
                  id: genId(),
                  profile_id: profile.id,
                  title: 'Judul Analisis Terbaru',
                  tag: 'ESAI KRITIS',
                  read_time: '5 Menit Membaca',
                  description: 'Ringkasan esai baru...',
                  link_url: '/artikel/analisis-kritis-literasi-keuangan',
                  order_index: articles.length + 1
                };
                setData({ ...data, articles: [...articles, newArt] });
              }}
              className="px-3 py-1.5 rounded-lg bg-[#E11D48] text-white flex items-center gap-1 font-mono uppercase font-bold"
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
                    onClick={() => setData({ ...data, articles: articles.filter(a => a.id !== art.id) })}
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
            <span className="text-gray-400 uppercase">PRODUK, KARYA CETAK & INISIATIF WARGA</span>
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
              className="px-3 py-1.5 rounded-lg bg-[#E11D48] text-white flex items-center gap-1 font-mono uppercase font-bold"
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
                    onClick={() => setData({ ...data, initiatives: initiatives.filter(i => i.id !== prod.id) })}
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

      {/* TAB CONTENT 6: KATA WARGA & TESTIMONI (FULL FUNCTIONAL EDITOR) */}
      {activeTab === 'testimonials' && (
        <div className="space-y-6 text-xs font-mono">
          <div className="flex items-center justify-between">
            <span className="text-gray-400 uppercase">DAFTAR KATA WARGA & TESTIMONI TOKOH</span>
            <button
              onClick={() => {
                const newTst: Testimonial = {
                  id: genId(),
                  profile_id: profile.id,
                  author_name: 'Nama Tokoh Pembuat',
                  author_role: 'Peran / Jabatan',
                  quote: 'Kutipan testimoni jujur warga...',
                  order_index: testimonials.length + 1
                };
                setData({ ...data, testimonials: [...testimonials, newTst] });
              }}
              className="px-3 py-1.5 rounded-lg bg-[#E11D48] text-white flex items-center gap-1 font-mono uppercase font-bold"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>+ TAMBAH TESTIMONI</span>
            </button>
          </div>

          <div className="space-y-4">
            {testimonials.map((item, idx) => (
              <div key={item.id} className="p-5 rounded-2xl border border-inherit/10 space-y-3 bg-inherit/30">
                <div className="flex items-center justify-between">
                  <span className="text-[#E11D48] font-bold">TESTIMONI #{idx + 1}</span>
                  <button 
                    onClick={() => setData({ ...data, testimonials: testimonials.filter(t => t.id !== item.id) })}
                    className="p-1 rounded text-red-500 hover:bg-red-500/10"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-gray-400">Nama Pembuat Testimoni:</label>
                    <input 
                      type="text" 
                      value={item.author_name}
                      onChange={(e) => {
                        const next = [...testimonials];
                        next[idx].author_name = e.target.value;
                        setData({ ...data, testimonials: next });
                      }}
                      className="w-full p-2.5 rounded-xl border border-inherit/20 bg-inherit/50 font-sans font-bold"
                    />
                  </div>
                  <div>
                    <label className="text-gray-400">Peran / Jabatan:</label>
                    <input 
                      type="text" 
                      value={item.author_role}
                      onChange={(e) => {
                        const next = [...testimonials];
                        next[idx].author_role = e.target.value;
                        setData({ ...data, testimonials: next });
                      }}
                      className="w-full p-2.5 rounded-xl border border-inherit/20 bg-inherit/50 font-sans"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-gray-400">Kutipan Testimoni Warga:</label>
                  <textarea 
                    rows={2}
                    value={item.quote}
                    onChange={(e) => {
                      const next = [...testimonials];
                      next[idx].quote = e.target.value;
                      setData({ ...data, testimonials: next });
                    }}
                    className="w-full p-2.5 rounded-xl border border-inherit/20 bg-inherit/50 font-sans"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}

function genId() {
  return Math.random().toString(36).substring(2, 9);
}
