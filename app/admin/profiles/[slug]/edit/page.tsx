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
  Sparkles,
  Image as ImageIcon,
  Link as LinkIcon,
  Share2,
  FileText,
  Feather
} from 'lucide-react';
import { getProfileBySlug, saveProfileData } from '../../../../../lib/supabase/adminActions';
import { FullProfileData, LifeEvent, Work, Article, Testimonial, Initiative, GalleryItem, SocialLinks } from '../../../../../lib/supabase/types';

export default function EditProfileEditorPage() {
  const params = useParams();
  const router = useRouter();
  const slug = (params?.slug as string) || 'ferry-irwandi';

  const [activeTab, setActiveTab] = useState<'profile' | 'events' | 'works' | 'articles' | 'gallery' | 'products' | 'testimonials'>('profile');
  const [data, setData] = useState<FullProfileData | null>(null);
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      const res = await getProfileBySlug(slug);
      if (!res.gallery) res.gallery = [];
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

  const { profile, lifeEvents, works, articles, testimonials, initiatives, gallery = [] } = data;

  const handleSaveAll = async () => {
    const res = await saveProfileData(data);
    setToastMsg(res.message);
    setTimeout(() => setToastMsg(null), 3500);
  };

  const inputStyle = "w-full p-2.5 rounded-xl border text-xs font-sans text-gray-900 bg-white dark:bg-[#0A0E1A] dark:text-[#EDE8DC] border-gray-300 dark:border-white/20 focus:border-[#E11D48] focus:outline-none transition-colors";
  const labelStyle = "text-xs font-mono uppercase font-bold text-gray-700 dark:text-gray-300 block mb-1";

  const socialChannels: { key: keyof SocialLinks; label: string; placeholder: string }[] = [
    { key: 'youtube', label: 'YouTube URL', placeholder: 'https://youtube.com/@channel' },
    { key: 'twitter', label: 'Twitter / X URL', placeholder: 'https://twitter.com/username' },
    { key: 'instagram', label: 'Instagram URL', placeholder: 'https://instagram.com/username' },
    { key: 'spotify', label: 'Spotify URL', placeholder: 'https://open.spotify.com/artist/id' },
    { key: 'tiktok', label: 'TikTok URL', placeholder: 'https://tiktok.com/@username' },
    { key: 'linkedin', label: 'LinkedIn URL', placeholder: 'https://linkedin.com/in/username' },
    { key: 'threads', label: 'Threads URL', placeholder: 'https://threads.net/@username' },
    { key: 'facebook', label: 'Facebook URL', placeholder: 'https://facebook.com/username' },
    { key: 'website', label: 'Website Personal', placeholder: 'https://domainku.id' },
    { key: 'email', label: 'Email Kontak / Surat', placeholder: 'contact@domain.id' },
    { key: 'substack', label: 'Substack Newsletter', placeholder: 'https://username.substack.com' },
    { key: 'medium', label: 'Medium Blog', placeholder: 'https://medium.com/@username' },
    { key: 'trakteer', label: 'Trakteer / Apresiasi', placeholder: 'https://trakteer.id/username' },
    { key: 'patreon', label: 'Patreon Community', placeholder: 'https://patreon.com/username' },
  ];

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
        <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 text-xs font-mono flex items-center gap-2">
          <Check className="w-4 h-4" />
          <span>{toastMsg}</span>
        </div>
      )}

      {/* NAVIGATION TABS */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar border-b border-inherit/10 pb-3 text-xs font-mono font-bold uppercase">
        {[
          { id: 'profile', label: '1. Profil & Sosmed A-Z' },
          { id: 'events', label: `2. Linimasa (${lifeEvents.length})` },
          { id: 'works', label: `3. Karya (${works.length})` },
          { id: 'articles', label: `4. Editor Blog Esai (${articles.length})` },
          { id: 'gallery', label: `5. Galeri Foto (${gallery.length})` },
          { id: 'products', label: `6. Produk (${initiatives.length})` },
          { id: 'testimonials', label: `7. Kata Warga (${testimonials.length})` },
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

      {/* TAB CONTENT 1: PROFIL UTAMA & SOSMED A-Z */}
      {activeTab === 'profile' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className={labelStyle}>Nama Lengkap Tokoh:</label>
              <input 
                type="text" 
                value={profile.name} 
                onChange={(e) => setData({ ...data, profile: { ...profile, name: e.target.value } })}
                className={inputStyle}
              />
            </div>

            <div>
              <label className={labelStyle}>Kategori Matriks:</label>
              <select
                value={profile.category}
                onChange={(e) => setData({ ...data, profile: { ...profile, category: e.target.value } })}
                className={inputStyle}
              >
                <option value="THE VOICES">THE VOICES</option>
                <option value="THE STRATEGISTS">THE STRATEGISTS</option>
                <option value="THE ENTERTAINERS">THE ENTERTAINERS</option>
                <option value="THE GRASSROOTS">THE GRASSROOTS</option>
              </select>
            </div>
          </div>

          <div>
            <label className={labelStyle}>Gelar Subtitle Editorial:</label>
            <input 
              type="text" 
              value={profile.title} 
              onChange={(e) => setData({ ...data, profile: { ...profile, title: e.target.value } })}
              className={inputStyle}
            />
          </div>

          <div>
            <label className={labelStyle}>Foto Portrait URL:</label>
            <div className="flex gap-4 items-center">
              <input 
                type="text" 
                value={profile.photo_url} 
                onChange={(e) => setData({ ...data, profile: { ...profile, photo_url: e.target.value } })}
                className={inputStyle}
              />
              <div className="relative w-12 h-14 rounded-lg overflow-hidden border border-[#E11D48]/40 shrink-0 bg-neutral-900">
                <Image src={profile.photo_url} alt="Preview" fill sizes="48px" className="object-cover filter grayscale" />
              </div>
            </div>
          </div>

          <div>
            <label className={labelStyle}>Kutipan Emas (Pull Quote):</label>
            <textarea 
              rows={2}
              value={profile.quote} 
              onChange={(e) => setData({ ...data, profile: { ...profile, quote: e.target.value } })}
              className={inputStyle}
            />
          </div>

          <div>
            <label className={labelStyle}>Biografi Paragraf 1:</label>
            <textarea 
              rows={3}
              value={profile.bio_paragraphs[0] || ''} 
              onChange={(e) => {
                const nextBios = [...profile.bio_paragraphs];
                nextBios[0] = e.target.value;
                setData({ ...data, profile: { ...profile, bio_paragraphs: nextBios } });
              }}
              className={inputStyle}
            />
          </div>

          <div>
            <label className={labelStyle}>Biografi Paragraf 2:</label>
            <textarea 
              rows={3}
              value={profile.bio_paragraphs[1] || ''} 
              onChange={(e) => {
                const nextBios = [...profile.bio_paragraphs];
                nextBios[1] = e.target.value;
                setData({ ...data, profile: { ...profile, bio_paragraphs: nextBios } });
              }}
              className={inputStyle}
            />
          </div>

          {/* SOSMED LENGKAP A S/D Z */}
          <div className="pt-6 border-t border-inherit/10 space-y-4">
            <div className="space-y-1">
              <span className="text-[#E11D48] font-bold font-mono text-xs uppercase block">TAUTAN MEDIA SOSIAL (A S/D Z):</span>
              <p className="text-[11px] text-gray-400 font-mono">
                *Catatan: Hanya sosial media yang diisi URL-nya yang akan tampil di halaman publik. Jika dikosongkan, ikon tidak akan muncul.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {socialChannels.map((item) => (
                <div key={item.key}>
                  <label className={labelStyle}>{item.label}:</label>
                  <input 
                    type="text" 
                    placeholder={item.placeholder}
                    value={profile.social_links[item.key] || ''} 
                    onChange={(e) => {
                      const nextSoc = { ...profile.social_links, [item.key]: e.target.value };
                      setData({ ...data, profile: { ...profile, social_links: nextSoc } });
                    }}
                    className={inputStyle}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB CONTENT 2: LINIMASA HIDUP */}
      {activeTab === 'events' && (
        <div className="space-y-6 font-mono text-xs">
          <div className="flex items-center justify-between">
            <span className="text-gray-400 uppercase">DAFTAR PERISTIWA LINIMASA</span>
            <button
              onClick={() => {
                const newEv: LifeEvent = {
                  id: crypto.randomUUID(),
                  profile_id: profile.id,
                  year_range: '2025 — 2026',
                  title: 'PERISTIWA BARU',
                  description: 'Deskripsi singkat peristiwa...',
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
                    <label className={labelStyle}>Rentang Tahun:</label>
                    <input 
                      type="text" 
                      value={ev.year_range}
                      onChange={(e) => {
                        const next = [...lifeEvents];
                        next[idx].year_range = e.target.value;
                        setData({ ...data, lifeEvents: next });
                      }}
                      className={inputStyle}
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className={labelStyle}>Judul Peristiwa:</label>
                    <input 
                      type="text" 
                      value={ev.title}
                      onChange={(e) => {
                        const next = [...lifeEvents];
                        next[idx].title = e.target.value;
                        setData({ ...data, lifeEvents: next });
                      }}
                      className={inputStyle}
                    />
                  </div>
                </div>

                <div>
                  <label className={labelStyle}>Deskripsi Lengkap Peristiwa:</label>
                  <textarea 
                    rows={2}
                    value={ev.description}
                    onChange={(e) => {
                      const next = [...lifeEvents];
                      next[idx].description = e.target.value;
                      setData({ ...data, lifeEvents: next });
                    }}
                    className={inputStyle}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB CONTENT 3: DISCOVERY KARYA */}
      {activeTab === 'works' && (
        <div className="space-y-6 font-mono text-xs">
          <div className="flex items-center justify-between">
            <span className="text-gray-400 uppercase">DAFTAR DISCOVERY KARYA</span>
            <button
              onClick={() => {
                const newWork: Work = {
                  id: crypto.randomUUID(),
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
                    <label className={labelStyle}>Judul Karya:</label>
                    <input 
                      type="text" 
                      value={w.title}
                      onChange={(e) => {
                        const next = [...works];
                        next[idx].title = e.target.value;
                        setData({ ...data, works: next });
                      }}
                      className={inputStyle}
                    />
                  </div>
                  <div>
                    <label className={labelStyle}>Kategori Karya:</label>
                    <input 
                      type="text" 
                      value={w.category}
                      onChange={(e) => {
                        const next = [...works];
                        next[idx].category = e.target.value;
                        setData({ ...data, works: next });
                      }}
                      className={inputStyle}
                    />
                  </div>
                </div>

                <div>
                  <label className={labelStyle}>Deskripsi Ringkas Karya:</label>
                  <textarea 
                    rows={2}
                    value={w.description}
                    onChange={(e) => {
                      const next = [...works];
                      next[idx].description = e.target.value;
                      setData({ ...data, works: next });
                    }}
                    className={inputStyle}
                  />
                </div>

                <div>
                  <label className={labelStyle}>Tautan Link Rujukan Karya:</label>
                  <input 
                    type="text" 
                    value={w.link_url}
                    onChange={(e) => {
                      const next = [...works];
                      next[idx].link_url = e.target.value;
                      setData({ ...data, works: next });
                    }}
                    className={inputStyle}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB CONTENT 4: FORM ARTIKEL KHUSUS PENULIS (BLOG/MEDIUM STYLE EDITOR) */}
      {activeTab === 'articles' && (
        <div className="space-y-6 font-mono text-xs">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[#E11D48] font-bold uppercase block">DISTRACTION-FREE BLOG WRITER EDITOR</span>
              <p className="text-gray-400 font-sans text-xs">Ruang nyaman untuk menulis naskah esai & artikel berbobot tinggi.</p>
            </div>

            <button
              onClick={() => {
                const newArt: Article = {
                  id: crypto.randomUUID(),
                  profile_id: profile.id,
                  title: 'Judul Analisis Esai Baru',
                  tag: 'ESAI KRITIS',
                  read_time: '5 Menit Membaca',
                  description: 'Ringkasan esai baru...',
                  content_full: '',
                  link_url: '',
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

          <div className="space-y-8">
            {articles.map((art, idx) => (
              <div key={art.id} className="p-6 rounded-3xl border border-inherit/20 space-y-5 bg-inherit/40 shadow-sm">
                
                {/* Header Item */}
                <div className="flex items-center justify-between border-b pb-3 border-inherit/10">
                  <div className="flex items-center gap-2">
                    <Feather className="w-4 h-4 text-[#E11D48]" />
                    <span className="text-[#E11D48] font-bold">ARTIKEL BLOG #{idx + 1}</span>
                  </div>
                  <button 
                    onClick={() => setData({ ...data, articles: articles.filter(a => a.id !== art.id) })}
                    className="p-1.5 rounded text-red-500 hover:bg-red-500/10 flex items-center gap-1"
                  >
                    <Trash2 className="w-4 h-4" />
                    <span>Hapus Artikel</span>
                  </button>
                </div>

                {/* Writer Title */}
                <div>
                  <label className={labelStyle}>Judul Artikel (Display Title):</label>
                  <input 
                    type="text" 
                    placeholder="Judul Esai Yang Menggugah Nalar..."
                    value={art.title}
                    onChange={(e) => {
                      const next = [...articles];
                      next[idx].title = e.target.value;
                      setData({ ...data, articles: next });
                    }}
                    className="w-full p-3 rounded-xl border font-display text-xl text-gray-900 bg-white dark:bg-[#0A0E1A] dark:text-[#EDE8DC] border-gray-300 dark:border-white/20 focus:border-[#E11D48] focus:outline-none"
                  />
                </div>

                {/* Metadata Row */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className={labelStyle}>Kategori / Tag Badge:</label>
                    <input 
                      type="text" 
                      placeholder="ESAI KRITIS / FILSAFAT / INVESTIGASI"
                      value={art.tag}
                      onChange={(e) => {
                        const next = [...articles];
                        next[idx].tag = e.target.value;
                        setData({ ...data, articles: next });
                      }}
                      className={inputStyle}
                    />
                  </div>
                  <div>
                    <label className={labelStyle}>Estimasi Waktu Baca:</label>
                    <input 
                      type="text" 
                      placeholder="5 Menit Membaca"
                      value={art.read_time}
                      onChange={(e) => {
                        const next = [...articles];
                        next[idx].read_time = e.target.value;
                        setData({ ...data, articles: next });
                      }}
                      className={inputStyle}
                    />
                  </div>
                  <div>
                    <label className={labelStyle}>Tautan SEO / Slug URL:</label>
                    <input 
                      type="text" 
                      placeholder="/artikel/judul-esai"
                      value={art.link_url}
                      onChange={(e) => {
                        const next = [...articles];
                        next[idx].link_url = e.target.value;
                        setData({ ...data, articles: next });
                      }}
                      className={inputStyle}
                    />
                  </div>
                </div>

                {/* Abstract Summary */}
                <div>
                  <label className={labelStyle}>Ringkasan Abstrak (Tampil di Kartu Depan):</label>
                  <textarea 
                    rows={2}
                    placeholder="Ringkasan 2 kalimat abstrak esai..."
                    value={art.description}
                    onChange={(e) => {
                      const next = [...articles];
                      next[idx].description = e.target.value;
                      setData({ ...data, articles: next });
                    }}
                    className={inputStyle}
                  />
                </div>

                {/* Full Comfortable Blog Writer Textarea */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className={labelStyle}>Naskah Lengkap Artikel (Full Blog Body Content):</label>
                    <span className="text-[10px] text-gray-400 font-mono">Dukungan Paragraf & Markdown</span>
                  </div>
                  <textarea 
                    rows={8}
                    placeholder="Tuliskan seluruh naskah esai secara leluasa dan nyaman di sini..."
                    value={art.content_full || ''}
                    onChange={(e) => {
                      const next = [...articles];
                      next[idx].content_full = e.target.value;
                      setData({ ...data, articles: next });
                    }}
                    className="w-full p-4 rounded-2xl border font-serif text-sm leading-relaxed text-gray-900 bg-white dark:bg-[#0A0E1A] dark:text-[#EDE8DC] border-gray-300 dark:border-white/20 focus:border-[#E11D48] focus:outline-none"
                  />
                </div>

              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB CONTENT 5: GALERI FOTO VISUAL (FORM BARU!) */}
      {activeTab === 'gallery' && (
        <div className="space-y-6 font-mono text-xs">
          <div className="flex items-center justify-between">
            <span className="text-gray-400 uppercase">FORM KELOLA DOKUMENTASI GALERI VISUAL</span>
            <button
              onClick={() => {
                const newGal: GalleryItem = {
                  id: crypto.randomUUID(),
                  profile_id: profile.id,
                  title: 'Dokumentasi Aksi Warga',
                  image_url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
                  order_index: gallery.length + 1
                };
                setData({ ...data, gallery: [...gallery, newGal] });
              }}
              className="px-3 py-1.5 rounded-lg bg-[#E11D48] text-white flex items-center gap-1 font-mono uppercase font-bold"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>+ TAMBAH FOTO GALERI</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {gallery.map((g, idx) => (
              <div key={g.id} className="p-4 rounded-2xl border border-inherit/10 space-y-3 bg-inherit/30 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[#E11D48] font-bold">FOTO #{idx + 1}</span>
                    <button 
                      onClick={() => setData({ ...data, gallery: gallery.filter(item => item.id !== g.id) })}
                      className="p-1 rounded text-red-500 hover:bg-red-500/10"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Image Preview */}
                  <div className="relative w-full h-36 rounded-xl overflow-hidden border border-inherit/20 bg-neutral-900">
                    <Image src={g.image_url} alt={g.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                  </div>

                  <div>
                    <label className={labelStyle}>Judul / Caption Foto:</label>
                    <input 
                      type="text" 
                      value={g.title}
                      onChange={(e) => {
                        const next = [...gallery];
                        next[idx].title = e.target.value;
                        setData({ ...data, gallery: next });
                      }}
                      className={inputStyle}
                    />
                  </div>

                  <div>
                    <label className={labelStyle}>Link URL Foto (Image URL):</label>
                    <input 
                      type="text" 
                      value={g.image_url}
                      onChange={(e) => {
                        const next = [...gallery];
                        next[idx].image_url = e.target.value;
                        setData({ ...data, gallery: next });
                      }}
                      className={inputStyle}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB CONTENT 6: PRODUK & INISIATIF (WITH LINK & THUMBNAIL) */}
      {activeTab === 'products' && (
        <div className="space-y-6 font-mono text-xs">
          <div className="flex items-center justify-between">
            <span className="text-gray-400 uppercase">PRODUK & INISIATIF WARGA (LENGKAP THUMBNAIL & LINK)</span>
            <button
              onClick={() => {
                const newProd: Initiative = {
                  id: crypto.randomUUID(),
                  profile_id: profile.id,
                  title: 'Inisiatif / Produk Baru',
                  category: 'Merchandise',
                  description: 'Deskripsi produk...',
                  price: 'Rp 199.000',
                  image_url: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80',
                  action_text: 'Beli / Dukung',
                  link_url: 'https://malakaproject.id',
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
                    <label className={labelStyle}>Nama Produk / Inisiatif:</label>
                    <input 
                      type="text" 
                      value={prod.title}
                      onChange={(e) => {
                        const next = [...initiatives];
                        next[idx].title = e.target.value;
                        setData({ ...data, initiatives: next });
                      }}
                      className={inputStyle}
                    />
                  </div>
                  <div>
                    <label className={labelStyle}>Harga Display (misal: Rp 149.000):</label>
                    <input 
                      type="text" 
                      value={prod.price || ''}
                      placeholder="Rp 149.000"
                      onChange={(e) => {
                        const next = [...initiatives];
                        next[idx].price = e.target.value;
                        setData({ ...data, initiatives: next });
                      }}
                      className={inputStyle}
                    />
                  </div>
                </div>

                {/* Thumbnail Image URL & Preview */}
                <div>
                  <label className={labelStyle}>Foto Thumbnail Produk (Image URL):</label>
                  <div className="flex gap-4 items-center">
                    <input 
                      type="text" 
                      placeholder="https://images.unsplash.com/..."
                      value={prod.image_url || ''}
                      onChange={(e) => {
                        const next = [...initiatives];
                        next[idx].image_url = e.target.value;
                        setData({ ...data, initiatives: next });
                      }}
                      className={inputStyle}
                    />
                    {prod.image_url && (
                      <div className="relative w-14 h-14 rounded-lg overflow-hidden border border-[#E11D48]/40 shrink-0 bg-neutral-900">
                        <Image src={prod.image_url} alt="Product Thumbnail" fill sizes="56px" className="object-cover" />
                      </div>
                    )}
                  </div>
                </div>

                {/* Action Link & Text */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className={labelStyle}>Teks Tombol Aksi (CTA):</label>
                    <input 
                      type="text" 
                      placeholder="Beli Resmi / Salurkan Donasi"
                      value={prod.action_text}
                      onChange={(e) => {
                        const next = [...initiatives];
                        next[idx].action_text = e.target.value;
                        setData({ ...data, initiatives: next });
                      }}
                      className={inputStyle}
                    />
                  </div>
                  <div>
                    <label className={labelStyle}>Tautan Link URL Toko / Aksi:</label>
                    <input 
                      type="text" 
                      placeholder="https://malakaproject.id"
                      value={prod.link_url}
                      onChange={(e) => {
                        const next = [...initiatives];
                        next[idx].link_url = e.target.value;
                        setData({ ...data, initiatives: next });
                      }}
                      className={inputStyle}
                    />
                  </div>
                </div>

                <div>
                  <label className={labelStyle}>Deskripsi Produk:</label>
                  <textarea 
                    rows={2}
                    value={prod.description}
                    onChange={(e) => {
                      const next = [...initiatives];
                      next[idx].description = e.target.value;
                      setData({ ...data, initiatives: next });
                    }}
                    className={inputStyle}
                  />
                </div>

              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB CONTENT 7: KATA WARGA & TESTIMONI */}
      {activeTab === 'testimonials' && (
        <div className="space-y-6 font-mono text-xs">
          <div className="flex items-center justify-between">
            <span className="text-gray-400 uppercase">DAFTAR KATA WARGA & TESTIMONI</span>
            <button
              onClick={() => {
                const newTst: Testimonial = {
                  id: crypto.randomUUID(),
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
                    <label className={labelStyle}>Nama Pembuat Testimoni:</label>
                    <input 
                      type="text" 
                      value={item.author_name}
                      onChange={(e) => {
                        const next = [...testimonials];
                        next[idx].author_name = e.target.value;
                        setData({ ...data, testimonials: next });
                      }}
                      className={inputStyle}
                    />
                  </div>
                  <div>
                    <label className={labelStyle}>Peran / Jabatan:</label>
                    <input 
                      type="text" 
                      value={item.author_role}
                      onChange={(e) => {
                        const next = [...testimonials];
                        next[idx].author_role = e.target.value;
                        setData({ ...data, testimonials: next });
                      }}
                      className={inputStyle}
                    />
                  </div>
                </div>

                <div>
                  <label className={labelStyle}>Kutipan Testimoni Warga:</label>
                  <textarea 
                    rows={2}
                    value={item.quote}
                    onChange={(e) => {
                      const next = [...testimonials];
                      next[idx].quote = e.target.value;
                      setData({ ...data, testimonials: next });
                    }}
                    className={inputStyle}
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
