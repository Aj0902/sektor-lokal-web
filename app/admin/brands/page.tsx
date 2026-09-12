'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  ShoppingBag, 
  Plus, 
  Edit3, 
  ExternalLink, 
  Trash2, 
  ShieldCheck, 
  Search,
  Check,
  Building2,
  Sparkles,
  MapPin,
  Tag
} from 'lucide-react';
import { BrandProfile } from '../../../lib/supabase/brandData';
import { getAllBrandProfiles, deleteBrandBySlug } from '../../../lib/supabase/brandAdminActions';

export default function AdminBrandsListPage() {
  const [brands, setBrands] = useState<BrandProfile[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLens, setSelectedLens] = useState('ALL');
  const [toastMsg, setToastMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const loadBrands = async () => {
    setLoading(true);
    const data = await getAllBrandProfiles();
    setBrands(data);
    setLoading(false);
  };

  useEffect(() => {
    loadBrands();
  }, []);

  const handleDelete = async (slug: string, name: string) => {
    if (confirm(`Apakah Anda yakin ingin menghapus berkas brand "${name}" dari database?`)) {
      const res = await deleteBrandBySlug(slug);
      setToastMsg(res.message);
      loadBrands();
      setTimeout(() => setToastMsg(null), 3000);
    }
  };

  const lenses = Array.from(new Set(brands.map(b => b.lensName).filter(Boolean)));

  const filteredBrands = brands.filter(b => {
    const matchSearch = b.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      b.origin.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.lensName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchLens = selectedLens === 'ALL' || b.lensName === selectedLens;
    return matchSearch && matchLens;
  });

  return (
    <div className="space-y-8 max-w-5xl mx-auto pb-16">
      
      {/* DASHBOARD HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b pb-6 border-inherit/10">
        <div>
          <span className="text-xs font-mono text-[#E11D48] font-bold uppercase tracking-wider">
            PANEL KONTROL ARSIP
          </span>
          <h1 className="text-3xl sm:text-4xl font-display uppercase tracking-tight">
            DASHBOARD ADMIN BRAND LOKAL
          </h1>
        </div>

        <Link
          href="/admin/brands/new"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#E11D48] hover:bg-[#BE123C] text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-[#E11D48]/30 transition-all self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>+ TAMBAH BRAND BARU</span>
        </Link>
      </div>

      {toastMsg && (
        <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 text-xs font-mono flex items-center gap-2">
          <Check className="w-4 h-4" />
          <span>{toastMsg}</span>
        </div>
      )}

      {/* METRICS OVERVIEW CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div className="p-6 rounded-2xl border border-inherit/10 bg-inherit/40 space-y-2">
          <div className="flex items-center justify-between text-xs font-mono text-gray-400">
            <span>TOTAL BRAND TERKURASI</span>
            <Building2 className="w-4 h-4 text-[#E11D48]" />
          </div>
          <p className="text-3xl font-display text-inherit">{brands.length}</p>
          <p className="text-[11px] text-emerald-500 font-mono">100% Terhubung Supabase</p>
        </div>

        <div className="p-6 rounded-2xl border border-inherit/10 bg-inherit/40 space-y-2">
          <div className="flex items-center justify-between text-xs font-mono text-gray-400">
            <span>LENSA KURASI</span>
            <Sparkles className="w-4 h-4 text-[#E11D48]" />
          </div>
          <p className="text-3xl font-display text-inherit">6</p>
          <p className="text-[11px] text-[#E11D48] font-mono">Kategori Utama</p>
        </div>

        <div className="p-6 rounded-2xl border border-inherit/10 bg-inherit/40 space-y-2">
          <div className="flex items-center justify-between text-xs font-mono text-gray-400">
            <span>STATUS DATA</span>
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
          </div>
          <p className="text-3xl font-display text-emerald-500">DINAMIS</p>
          <p className="text-[11px] text-gray-400 font-mono">Database Live Supabase</p>
        </div>
      </div>

      {/* SEARCH & LENS FILTER */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-stretch sm:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Cari brand, asal kota, atau kata kunci..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-inherit/20 bg-inherit/40 text-xs font-mono focus:border-[#E11D48] focus:outline-none transition-colors"
          />
        </div>

        <select
          value={selectedLens}
          onChange={(e) => setSelectedLens(e.target.value)}
          className="px-4 py-2.5 rounded-xl border border-inherit/20 bg-inherit/40 text-xs font-mono focus:border-[#E11D48] focus:outline-none transition-colors"
        >
          <option value="ALL">Semua Lensa ({brands.length})</option>
          {lenses.map((l, i) => (
            <option key={i} value={l}>{l}</option>
          ))}
        </select>
      </div>

      {/* BRAND LIST TABLE */}
      {loading ? (
        <div className="p-12 text-center text-xs font-mono text-[#E11D48] animate-pulse">
          MEMUAT DATA BRAND DARI SUPABASE...
        </div>
      ) : (
        <div className="border border-inherit/10 rounded-2xl overflow-hidden divide-y divide-inherit/10">
          {filteredBrands.map((brand) => (
            <div 
              key={brand.slug}
              className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-inherit/40 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-black/40 border border-inherit/10 overflow-hidden flex items-center justify-center p-2 shrink-0">
                  <img 
                    src={brand.logoUrl} 
                    alt={brand.name} 
                    className="max-h-full max-w-full object-contain filter drop-shadow" 
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-display text-lg uppercase tracking-tight text-inherit">
                      {brand.name}
                    </h3>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-[#E11D48]/10 text-[#E11D48] font-bold">
                      {brand.curationTier}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-gray-400 mt-1">
                    <span>{brand.lensName}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#E11D48]" />
                      {brand.origin}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 self-end sm:self-auto">
                <Link
                  href={`/brand/${brand.slug}`}
                  target="_blank"
                  className="p-2.5 rounded-xl border border-inherit/20 hover:border-emerald-500 hover:text-emerald-500 text-xs font-mono transition-colors"
                  title="Lihat Halaman Publik"
                >
                  <ExternalLink className="w-4 h-4" />
                </Link>

                <Link
                  href={`/admin/brands/${brand.slug}/edit`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-inherit/60 hover:bg-[#E11D48] hover:text-white border border-inherit/20 hover:border-[#E11D48] text-xs font-mono uppercase font-bold transition-all"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                  <span>EDIT BERKAS</span>
                </Link>

                <button
                  onClick={() => handleDelete(brand.slug, brand.name)}
                  className="p-2.5 rounded-xl border border-inherit/20 hover:border-red-500 hover:text-red-500 text-xs font-mono transition-colors"
                  title="Hapus Brand"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}

          {filteredBrands.length === 0 && (
            <div className="p-12 text-center text-xs font-mono text-gray-400">
              Tidak ada brand yang sesuai dengan pencarian.
            </div>
          )}
        </div>
      )}

    </div>
  );
}
