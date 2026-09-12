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
  ExternalLink,
  ShoppingBag,
  Building2,
  Calendar,
  Layers,
  MapPin,
  Sparkles,
  Link as LinkIcon,
  ShieldCheck,
  Tag
} from 'lucide-react';
import { getBrandFullData, saveBrandData } from '../../../../../lib/supabase/brandAdminActions';
import { BrandProfile, BrandProduct, BrandMilestone, BrandChannel } from '../../../../../lib/supabase/brandData';

export default function EditBrandEditorPage() {
  const params = useParams();
  const router = useRouter();
  const slug = (params?.slug as string) || 'javara-indigenous-indonesia';

  const [activeTab, setActiveTab] = useState<'identity' | 'narrative' | 'milestones' | 'products' | 'channels'>('identity');
  const [brand, setBrand] = useState<BrandProfile | null>(null);
  const [toastMsg, setToastMsg] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const load = async () => {
      const res = await getBrandFullData(slug);
      if (!res.channels) res.channels = { officialStore: [], publicSpaces: [] };
      if (!res.bio_paragraphs) res.bio_paragraphs = [];
      if (!res.milestones) res.milestones = [];
      if (!res.flagshipProducts) res.flagshipProducts = [];
      setBrand(res);
    };
    load();
  }, [slug]);

  if (!brand) {
    return (
      <div className="p-12 text-center space-y-3 font-mono text-xs text-[#E11D48]">
        <div className="w-6 h-6 border-2 border-[#E11D48] border-t-transparent rounded-full animate-spin mx-auto" />
        <p>MEMUAT DATA EDITOR BRAND ({slug})...</p>
      </div>
    );
  }

  const handleSaveAll = async () => {
    setSaving(true);
    const res = await saveBrandData(brand);
    setSaving(false);
    setToastMsg(res.message);
    setTimeout(() => setToastMsg(null), 3500);
  };

  const inputStyle = "w-full p-2.5 rounded-xl border text-xs font-sans text-gray-900 bg-white dark:bg-[#0A0E1A] dark:text-[#EDE8DC] border-gray-300 dark:border-white/20 focus:border-[#E11D48] focus:outline-none transition-colors";
  const labelStyle = "text-xs font-mono uppercase font-bold text-gray-700 dark:text-gray-300 block mb-1";

  // Lenses list
  const lensOptions = [
    { slug: 'pangan-pusaka-agraria-lestari', name: 'Pangan Pusaka & Agraria Lestari' },
    { slug: 'kriya-desain-material-berkelanjutan', name: 'Kriya, Desain & Material Berkelanjutan' },
    { slug: 'wastra-manufaktur-etis', name: 'Wastra & Manufaktur Etis' },
    { slug: 'media-independen-ruang-arsip-literasi-kritis', name: 'Media Independen, Ruang Arsip & Literasi Kritis' },
    { slug: 'kedaulatan-digital-civic-tech-open-source', name: 'Kedaulatan Digital, Civic-Tech & Open-Source' },
    { slug: 'kultur-kebugaran-gaya-hidup-berdaulat', name: 'Kultur, Kebugaran & Gaya Hidup Berdaulat' },
  ];

  return (
    <div className="space-y-8 max-w-4xl mx-auto pb-20">
      
      {/* HEADER BAR */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b pb-5 border-inherit/10">
        <div className="flex items-center gap-3">
          <Link href="/admin/brands" className="p-2 rounded-xl border border-inherit/10 hover:border-[#E11D48] transition-colors">
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <div>
            <span className="text-xs font-mono text-[#E11D48] font-bold uppercase tracking-wider">EDITOR BERKAS BRAND LOKAL</span>
            <h1 className="text-3xl sm:text-4xl font-display uppercase tracking-tight">{brand.name}</h1>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href={`/brand/${brand.slug}`}
            target="_blank"
            className="px-4 py-2.5 rounded-xl border border-inherit/20 hover:border-emerald-500 hover:text-emerald-500 font-mono text-xs font-bold uppercase flex items-center gap-1.5 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            <span>PREVIEW LIVE</span>
          </Link>

          <button
            onClick={handleSaveAll}
            disabled={saving}
            className="px-5 py-2.5 rounded-xl bg-[#E11D48] hover:bg-[#BE123C] text-white font-mono text-xs font-bold uppercase flex items-center gap-1.5 shadow-md shadow-[#E11D48]/30 transition-all disabled:opacity-50"
          >
            <Save className="w-4 h-4" />
            <span>{saving ? 'MENYIMPAN...' : 'SIMPAN PERUBAHAN'}</span>
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
          { id: 'identity', label: '1. Identitas & Lensa' },
          { id: 'narrative', label: `2. Narasi & Gagasan (${brand.bio_paragraphs?.length || 0})` },
          { id: 'milestones', label: `3. Linimasa Jejak (${brand.milestones?.length || 0})` },
          { id: 'products', label: `4. Karya & Produk (${brand.flagshipProducts?.length || 0})` },
          { id: 'channels', label: '5. Toko & Kanal Resmi' },
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

      {/* ========================================================================= */}
      {/* TAB 1: IDENTITAS & LENSA */}
      {/* ========================================================================= */}
      {activeTab === 'identity' && (
        <div className="p-6 rounded-2xl border border-inherit/10 bg-inherit/40 space-y-5">
          <h2 className="font-display text-xl uppercase tracking-tight flex items-center gap-2">
            <Building2 className="w-5 h-5 text-[#E11D48]" />
            <span>Identitas Resmi & Kurasi Brand</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className={labelStyle}>Nama Brand (Resmi)</label>
              <input
                type="text"
                value={brand.name}
                onChange={(e) => setBrand({ ...brand, name: e.target.value })}
                className={inputStyle}
              />
            </div>

            <div>
              <label className={labelStyle}>Slug URL</label>
              <input
                type="text"
                value={brand.slug}
                onChange={(e) => setBrand({ ...brand, slug: e.target.value })}
                className={inputStyle}
              />
            </div>

            <div>
              <label className={labelStyle}>Lensa Kurasi</label>
              <select
                value={brand.lensSlug}
                onChange={(e) => {
                  const found = lensOptions.find(l => l.slug === e.target.value);
                  setBrand({
                    ...brand,
                    lensSlug: e.target.value,
                    lensName: found ? found.name : brand.lensName
                  });
                }}
                className={inputStyle}
              >
                {lensOptions.map((opt) => (
                  <option key={opt.slug} value={opt.slug}>{opt.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label className={labelStyle}>Tingkat Kurasi</label>
              <select
                value={brand.curationTier}
                onChange={(e) => setBrand({ ...brand, curationTier: e.target.value as any })}
                className={inputStyle}
              >
                <option value="Established">Established</option>
                <option value="Middle">Middle</option>
                <option value="Hidden Gem">Hidden Gem</option>
              </select>
            </div>

            <div>
              <label className={labelStyle}>Asal Daerah / Basis Produksi</label>
              <input
                type="text"
                value={brand.origin}
                onChange={(e) => setBrand({ ...brand, origin: e.target.value })}
                className={inputStyle}
                placeholder="misal: Karangasem, Bali"
              />
            </div>

            <div>
              <label className={labelStyle}>URL Logo Resmi Brand</label>
              <input
                type="text"
                value={brand.logoUrl}
                onChange={(e) => setBrand({ ...brand, logoUrl: e.target.value })}
                className={inputStyle}
                placeholder="https://..."
              />
            </div>
          </div>

          <div>
            <label className={labelStyle}>Kutipan Redaksi (Pull-Quote Hero & Filosofi)</label>
            <textarea
              rows={3}
              value={brand.quote}
              onChange={(e) => setBrand({ ...brand, quote: e.target.value })}
              className={inputStyle}
              placeholder="Kutipan prinsip kedaulatan atau telaah redaksi..."
            />
          </div>

          <div>
            <label className={labelStyle}>Temuan Utama Kurasi (Core Finding)</label>
            <textarea
              rows={2}
              value={brand.coreFinding}
              onChange={(e) => setBrand({ ...brand, coreFinding: e.target.value })}
              className={inputStyle}
              placeholder="Rangkuman dampak nyata bagi ekosistem lokal..."
            />
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 2: NARASI & GAGASAN (ESAI) */}
      {/* ========================================================================= */}
      {activeTab === 'narrative' && (
        <div className="p-6 rounded-2xl border border-inherit/10 bg-inherit/40 space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="font-display text-xl uppercase tracking-tight flex items-center gap-2">
                <Layers className="w-5 h-5 text-[#E11D48]" />
                <span>Esai Editorial (Narasi & Gagasan)</span>
              </h2>
              <p className="text-xs font-mono text-gray-400 mt-1">
                Disajikan dalam format 2-kolom cetak majalah (Ivory Paper).
              </p>
            </div>

            <button
              type="button"
              onClick={() => setBrand({
                ...brand,
                bio_paragraphs: [...(brand.bio_paragraphs || []), '']
              })}
              className="px-3 py-1.5 rounded-xl border border-inherit/20 hover:border-[#E11D48] text-xs font-mono flex items-center gap-1.5"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>+ Tambah Paragraf</span>
            </button>
          </div>

          <div className="space-y-4">
            {(brand.bio_paragraphs || []).map((p, idx) => (
              <div key={idx} className="p-4 rounded-xl border border-inherit/10 space-y-2 bg-inherit/20">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-[#E11D48] font-bold">Paragraf {idx + 1}</span>
                  <button
                    type="button"
                    onClick={() => {
                      const updated = [...brand.bio_paragraphs];
                      updated.splice(idx, 1);
                      setBrand({ ...brand, bio_paragraphs: updated });
                    }}
                    className="text-red-400 hover:text-red-500"
                    title="Hapus Paragraf"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
                <textarea
                  rows={4}
                  value={p}
                  onChange={(e) => {
                    const updated = [...brand.bio_paragraphs];
                    updated[idx] = e.target.value;
                    setBrand({ ...brand, bio_paragraphs: updated });
                  }}
                  className={inputStyle}
                  placeholder={`Tuliskan isi narasi paragraf ${idx + 1}...`}
                />
              </div>
            ))}

            {(brand.bio_paragraphs || []).length === 0 && (
              <p className="text-xs font-mono text-gray-400 text-center py-6">
                Belum ada paragraf narasi. Klik "+ Tambah Paragraf" di atas.
              </p>
            )}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 3: LINIMASA JEJAK (MILESTONES) */}
      {/* ========================================================================= */}
      {activeTab === 'milestones' && (
        <div className="p-6 rounded-2xl border border-inherit/10 bg-inherit/40 space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="font-display text-xl uppercase tracking-tight flex items-center gap-2">
                <Calendar className="w-5 h-5 text-[#E11D48]" />
                <span>Linimasa Perjalanan & Fase Kemandirian</span>
              </h2>
              <p className="text-xs font-mono text-gray-400 mt-1">
                Menampilkan tonggak sejarah penting brand dengan titik simpul berpendar.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setBrand({
                ...brand,
                milestones: [
                  ...(brand.milestones || []),
                  { year: '2024 | PENGEMBANGAN', title: 'Judul Fase Baru', description: '' }
                ]
              })}
              className="px-3 py-1.5 rounded-xl border border-inherit/20 hover:border-[#E11D48] text-xs font-mono flex items-center gap-1.5"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>+ Tambah Linimasa</span>
            </button>
          </div>

          <div className="space-y-4">
            {(brand.milestones || []).map((m, idx) => (
              <div key={idx} className="p-4 rounded-xl border border-inherit/10 space-y-3 bg-inherit/20">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-mono text-[#E11D48] font-bold">Fase {idx + 1}</span>
                  <button
                    type="button"
                    onClick={() => {
                      const updated = [...brand.milestones];
                      updated.splice(idx, 1);
                      setBrand({ ...brand, milestones: updated });
                    }}
                    className="text-red-400 hover:text-red-500"
                    title="Hapus Fase"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className={labelStyle}>Rentang Tahun / Era</label>
                    <input
                      type="text"
                      value={m.year}
                      onChange={(e) => {
                        const updated = [...brand.milestones];
                        updated[idx].year = e.target.value;
                        setBrand({ ...brand, milestones: updated });
                      }}
                      className={inputStyle}
                      placeholder="misal: 2015 | INISIASI"
                    />
                  </div>

                  <div>
                    <label className={labelStyle}>Judul Pencapaian / Fase</label>
                    <input
                      type="text"
                      value={m.title}
                      onChange={(e) => {
                        const updated = [...brand.milestones];
                        updated[idx].title = e.target.value;
                        setBrand({ ...brand, milestones: updated });
                      }}
                      className={inputStyle}
                      placeholder="misal: Riset & Formulasi Mandiri"
                    />
                  </div>
                </div>

                <div>
                  <label className={labelStyle}>Deskripsi Detail Peristiwa</label>
                  <textarea
                    rows={2}
                    value={m.description}
                    onChange={(e) => {
                      const updated = [...brand.milestones];
                      updated[idx].description = e.target.value;
                      setBrand({ ...brand, milestones: updated });
                    }}
                    className={inputStyle}
                    placeholder="Ceritakan peristiwa atau terobosan di era ini..."
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 4: KARYA & PRODUK UNGGULAN */}
      {/* ========================================================================= */}
      {activeTab === 'products' && (
        <div className="p-6 rounded-2xl border border-inherit/10 bg-inherit/40 space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="font-display text-xl uppercase tracking-tight flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-[#E11D48]" />
                <span>Karya Pilihan & Produk Unggulan</span>
              </h2>
              <p className="text-xs font-mono text-gray-400 mt-1">
                Disajikan dalam etalase Crimson Red dengan harga riil dan CTA dinamis (Beli, Dukung, Daftar, Akses).
              </p>
            </div>

            <button
              type="button"
              onClick={() => setBrand({
                ...brand,
                flagshipProducts: [
                  ...(brand.flagshipProducts || []),
                  {
                    name: 'Produk Baru',
                    specs: 'Spesifikasi material dan standar mutu...',
                    price: 'Rp 150.000',
                    action_text: 'Beli di Toko Resmi',
                    buyUrl: 'https://',
                    imageUrl: brand.logoUrl,
                    category: 'Koleksi Pilihan'
                  }
                ]
              })}
              className="px-3 py-1.5 rounded-xl border border-inherit/20 hover:border-[#E11D48] text-xs font-mono flex items-center gap-1.5"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>+ Tambah Produk</span>
            </button>
          </div>

          <div className="space-y-6">
            {(brand.flagshipProducts || []).map((p, idx) => (
              <div key={idx} className="p-5 rounded-xl border border-inherit/10 space-y-4 bg-inherit/20">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-mono text-[#E11D48] font-bold">Produk / Karya {idx + 1}</span>
                  <button
                    type="button"
                    onClick={() => {
                      const updated = [...brand.flagshipProducts];
                      updated.splice(idx, 1);
                      setBrand({ ...brand, flagshipProducts: updated });
                    }}
                    className="text-red-400 hover:text-red-500"
                    title="Hapus Produk"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelStyle}>Nama Produk / Karya</label>
                    <input
                      type="text"
                      value={p.name}
                      onChange={(e) => {
                        const updated = [...brand.flagshipProducts];
                        updated[idx].name = e.target.value;
                        setBrand({ ...brand, flagshipProducts: updated });
                      }}
                      className={inputStyle}
                      placeholder="misal: Cokelat Single Origin 60%"
                    />
                  </div>

                  <div>
                    <label className={labelStyle}>Kategori / Label Produk</label>
                    <input
                      type="text"
                      value={p.category || ''}
                      onChange={(e) => {
                        const updated = [...brand.flagshipProducts];
                        updated[idx].category = e.target.value;
                        setBrand({ ...brand, flagshipProducts: updated });
                      }}
                      className={inputStyle}
                      placeholder="misal: Karya Utama / Edisi Khusus"
                    />
                  </div>

                  <div>
                    <label className={labelStyle}>Kisaran Harga Riil</label>
                    <input
                      type="text"
                      value={p.price}
                      onChange={(e) => {
                        const updated = [...brand.flagshipProducts];
                        updated[idx].price = e.target.value;
                        setBrand({ ...brand, flagshipProducts: updated });
                      }}
                      className={inputStyle}
                      placeholder="misal: Rp 85.000 atau Akses Terbuka"
                    />
                  </div>

                  <div>
                    <label className={labelStyle}>Teks Tombol Aksi (CTA Dinamis)</label>
                    <input
                      type="text"
                      value={p.action_text || 'Beli di Toko Resmi'}
                      onChange={(e) => {
                        const updated = [...brand.flagshipProducts];
                        updated[idx].action_text = e.target.value;
                        setBrand({ ...brand, flagshipProducts: updated });
                      }}
                      className={inputStyle}
                      placeholder="misal: Beli di Toko Resmi / Dukung Karya / Daftar Layanan"
                    />
                  </div>

                  <div>
                    <label className={labelStyle}>URL Tautan Pembelian / Akses Resmi</label>
                    <input
                      type="text"
                      value={p.buyUrl}
                      onChange={(e) => {
                        const updated = [...brand.flagshipProducts];
                        updated[idx].buyUrl = e.target.value;
                        setBrand({ ...brand, flagshipProducts: updated });
                      }}
                      className={inputStyle}
                      placeholder="https://tokopedia.com/... atau https://..."
                    />
                  </div>

                  <div>
                    <label className={labelStyle}>URL Foto Produk</label>
                    <input
                      type="text"
                      value={p.imageUrl || ''}
                      onChange={(e) => {
                        const updated = [...brand.flagshipProducts];
                        updated[idx].imageUrl = e.target.value;
                        setBrand({ ...brand, flagshipProducts: updated });
                      }}
                      className={inputStyle}
                      placeholder="https://..."
                    />
                  </div>
                </div>

                <div>
                  <label className={labelStyle}>Spesifikasi Material / Cerita Karya</label>
                  <textarea
                    rows={2}
                    value={p.specs}
                    onChange={(e) => {
                      const updated = [...brand.flagshipProducts];
                      updated[idx].specs = e.target.value;
                      setBrand({ ...brand, flagshipProducts: updated });
                    }}
                    className={inputStyle}
                    placeholder="Bahan baku lokal, teknik pengerjaan, ketahanan..."
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 5: TOKO & KANAL RESMI */}
      {/* ========================================================================= */}
      {activeTab === 'channels' && (
        <div className="p-6 rounded-2xl border border-inherit/10 bg-inherit/40 space-y-6">
          <h2 className="font-display text-xl uppercase tracking-tight flex items-center gap-2">
            <LinkIcon className="w-5 h-5 text-[#E11D48]" />
            <span>Kanal Resmi (Toko Online & Media Sosial)</span>
          </h2>

          {/* Official Stores */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-xs font-mono uppercase font-bold text-gray-700 dark:text-gray-300">
                Baris 1: Toko Online Resmi (Webstore, Tokopedia, Shopee)
              </span>
              <button
                type="button"
                onClick={() => setBrand({
                  ...brand,
                  channels: {
                    ...brand.channels,
                    officialStore: [
                      ...(brand.channels?.officialStore || []),
                      { platform: 'Webstore Resmi', url: 'https://', label: 'Toko Resmi' }
                    ]
                  }
                })}
                className="px-3 py-1 rounded-xl border border-inherit/20 text-xs font-mono"
              >
                + Tambah Toko
              </button>
            </div>

            {(brand.channels?.officialStore || []).map((store, i) => (
              <div key={i} className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center p-3 rounded-xl border border-inherit/10 bg-inherit/20">
                <div className="sm:col-span-4">
                  <input
                    type="text"
                    value={store.platform}
                    onChange={(e) => {
                      const updated = [...(brand.channels?.officialStore || [])];
                      updated[i].platform = e.target.value;
                      setBrand({ ...brand, channels: { ...brand.channels, officialStore: updated } });
                    }}
                    className={inputStyle}
                    placeholder="misal: Tokopedia Official"
                  />
                </div>
                <div className="sm:col-span-7">
                  <input
                    type="text"
                    value={store.url}
                    onChange={(e) => {
                      const updated = [...(brand.channels?.officialStore || [])];
                      updated[i].url = e.target.value;
                      setBrand({ ...brand, channels: { ...brand.channels, officialStore: updated } });
                    }}
                    className={inputStyle}
                    placeholder="https://tokopedia.com/..."
                  />
                </div>
                <div className="sm:col-span-1 text-center">
                  <button
                    type="button"
                    onClick={() => {
                      const updated = [...(brand.channels?.officialStore || [])];
                      updated.splice(i, 1);
                      setBrand({ ...brand, channels: { ...brand.channels, officialStore: updated } });
                    }}
                    className="text-red-400 hover:text-red-500"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Social Channels */}
          <div className="space-y-4 pt-4 border-t border-inherit/10">
            <div className="flex justify-between items-center">
              <span className="text-xs font-mono uppercase font-bold text-gray-700 dark:text-gray-300">
                Baris 2: Media Sosial & Kontak (Instagram, X, Email)
              </span>
              <button
                type="button"
                onClick={() => setBrand({
                  ...brand,
                  channels: {
                    ...brand.channels,
                    publicSpaces: [
                      ...(brand.channels?.publicSpaces || []),
                      { platform: 'Instagram', url: 'https://instagram.com/', label: '@username' }
                    ]
                  }
                })}
                className="px-3 py-1 rounded-xl border border-inherit/20 text-xs font-mono"
              >
                + Tambah Media Sosial
              </button>
            </div>

            {(brand.channels?.publicSpaces || []).map((pub, i) => (
              <div key={i} className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center p-3 rounded-xl border border-inherit/10 bg-inherit/20">
                <div className="sm:col-span-4">
                  <input
                    type="text"
                    value={pub.platform}
                    onChange={(e) => {
                      const updated = [...(brand.channels?.publicSpaces || [])];
                      updated[i].platform = e.target.value;
                      setBrand({ ...brand, channels: { ...brand.channels, publicSpaces: updated } });
                    }}
                    className={inputStyle}
                    placeholder="misal: Instagram / Email"
                  />
                </div>
                <div className="sm:col-span-7">
                  <input
                    type="text"
                    value={pub.url}
                    onChange={(e) => {
                      const updated = [...(brand.channels?.publicSpaces || [])];
                      updated[i].url = e.target.value;
                      setBrand({ ...brand, channels: { ...brand.channels, publicSpaces: updated } });
                    }}
                    className={inputStyle}
                    placeholder="https://instagram.com/... atau mailto:..."
                  />
                </div>
                <div className="sm:col-span-1 text-center">
                  <button
                    type="button"
                    onClick={() => {
                      const updated = [...(brand.channels?.publicSpaces || [])];
                      updated.splice(i, 1);
                      setBrand({ ...brand, channels: { ...brand.channels, publicSpaces: updated } });
                    }}
                    className="text-red-400 hover:text-red-500"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      )}

    </div>
  );
}
