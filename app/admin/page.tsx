'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Users, 
  Plus, 
  Edit3, 
  ExternalLink, 
  Trash2, 
  ShieldCheck, 
  Search,
  BookOpen,
  Award,
  Check,
  AlertCircle
} from 'lucide-react';
import { directoryProfiles } from '../../lib/supabase/fallbackData';
import { Profile } from '../../lib/supabase/types';
import { getAllProfiles, deleteProfileBySlug } from '../../lib/supabase/adminActions';

export default function AdminDashboardPage() {
  const [profiles, setProfiles] = useState<Profile[]>(directoryProfiles);
  const [searchQuery, setSearchQuery] = useState('');
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  const loadProfiles = async () => {
    const data = await getAllProfiles();
    setProfiles(data);
  };

  useEffect(() => {
    loadProfiles();
  }, []);

  const handleDelete = async (slug: string, name: string) => {
    if (confirm(`Apakah Anda yakin ingin menghapus profil tokoh "${name}" dari direktori?`)) {
      const res = await deleteProfileBySlug(slug);
      setToastMsg(res.message);
      loadProfiles();
      setTimeout(() => setToastMsg(null), 3000);
    }
  };

  const filteredProfiles = profiles.filter(p => 
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    p.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      
      {/* DASHBOARD HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b pb-6 border-inherit/10">
        <div>
          <span className="text-xs font-mono text-[#E11D48] font-bold uppercase tracking-wider">
            PANEL KONTROL KONTEN
          </span>
          <h1 className="text-3xl sm:text-4xl font-display uppercase tracking-tight">
            DASHBOARD ADMIN TOKOH
          </h1>
        </div>

        <Link
          href="/admin/profiles/new"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#E11D48] hover:bg-[#BE123C] text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-[#E11D48]/30 transition-all self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>+ TAMBAH TOKOH BARU</span>
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
            <span>TOTAL TOKOH</span>
            <Users className="w-4 h-4 text-[#E11D48]" />
          </div>
          <p className="text-3xl font-display text-inherit">{profiles.length}</p>
          <p className="text-[11px] text-emerald-500 font-mono">100% Terverifikasi</p>
        </div>

        <div className="p-6 rounded-2xl border border-inherit/10 bg-inherit/40 space-y-2">
          <div className="flex items-center justify-between text-xs font-mono text-gray-400">
            <span>MODUL KARYA</span>
            <Award className="w-4 h-4 text-[#E11D48]" />
          </div>
          <p className="text-3xl font-display text-inherit">{profiles.length * 4}</p>
          <p className="text-[11px] text-[#E11D48] font-mono">Aktif Terhubung</p>
        </div>

        <div className="p-6 rounded-2xl border border-inherit/10 bg-inherit/40 space-y-2">
          <div className="flex items-center justify-between text-xs font-mono text-gray-400">
            <span>ARTIKEL & WAWASAN</span>
            <BookOpen className="w-4 h-4 text-[#E11D48]" />
          </div>
          <p className="text-3xl font-display text-inherit">{profiles.length * 3}</p>
          <p className="text-[11px] text-emerald-500 font-mono">SEO Optimized</p>
        </div>
      </div>

      {/* SEARCH & PROFILES TABLE */}
      <div className="space-y-4">
        
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-xl font-display uppercase tracking-tight">DAFTAR TOKOH TERKURASI</h2>
          <div className="relative w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Cari tokoh..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 rounded-xl border border-inherit/10 bg-inherit/50 text-xs focus:outline-none focus:border-[#E11D48]"
            />
          </div>
        </div>

        {/* Profiles Table */}
        <div className="border border-inherit/10 rounded-2xl overflow-hidden shadow-sm">
          <table className="w-full text-left border-collapse text-xs">
            <thead className="border-b border-inherit/10 bg-inherit/60 font-mono uppercase text-[#E11D48]">
              <tr>
                <th className="p-4">Tokoh / Kreator</th>
                <th className="p-4">Kategori</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-right">Aksi Kelola</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-inherit/10">
              {filteredProfiles.map((p) => (
                <tr key={p.slug} className="hover:bg-inherit/40 transition-colors">
                  <td className="p-4 flex items-center gap-3">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#E11D48]/30 shrink-0">
                      <Image src={p.photo_url} alt={p.name} fill sizes="40px" className="object-cover filter grayscale" />
                    </div>
                    <div>
                      <p className="font-display text-sm uppercase text-inherit">{p.name}</p>
                      <p className="text-[11px] text-gray-400 font-editorial italic">{p.title}</p>
                    </div>
                  </td>

                  <td className="p-4 font-mono font-bold text-[#E11D48]">
                    {p.category}
                  </td>

                  <td className="p-4 font-mono">
                    <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/30 text-[10px]">
                      {p.status_text}
                    </span>
                  </td>

                  <td className="p-4 text-right space-x-2">
                    <Link
                      href={`/admin/profiles/${p.slug}/edit`}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-inherit/20 hover:border-[#E11D48] hover:text-[#E11D48] font-mono text-[11px] transition-colors"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                      <span>Edit</span>
                    </Link>

                    <Link
                      href={`/profil/${p.slug}`}
                      target="_blank"
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-inherit/20 hover:border-emerald-500 hover:text-emerald-500 font-mono text-[11px] transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Preview</span>
                    </Link>

                    <button
                      onClick={() => handleDelete(p.slug, p.name)}
                      className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-red-500/20 text-red-500 hover:bg-red-500/10 font-mono text-[11px] transition-colors"
                      title="Hapus Tokoh"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>

    </div>
  );
}
