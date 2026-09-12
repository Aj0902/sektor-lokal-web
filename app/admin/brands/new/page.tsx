'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  ArrowLeft, 
  Save, 
  Building2,
  Check,
  AlertCircle
} from 'lucide-react';
import { saveBrandData } from '../../../../lib/supabase/brandAdminActions';
import { BrandProfile } from '../../../../lib/supabase/brandData';

export default function NewBrandCreationPage() {
  const router = useRouter();

  const [brand, setBrand] = useState<BrandProfile>({
    slug: '',
    name: '',
    lensSlug: 'pangan-pusaka-agraria-lestari',
    lensName: 'Pangan Pusaka & Agraria Lestari',
    curationTier: 'Established',
    origin: '',
    logoUrl: '',
    heroBgUrl: '',
    quote: '',
    bio_paragraphs: [
      'Paragraf 1: Latar belakang dan masalah industri lokal yang didobrak...',
      'Paragraf 2: Model produksi mandiri dan kemitraan dengan petani atau perajin lokal...',
      'Paragraf 3: Pembuktian mutu, dampak sosial, dan integritas karya bagi peradaban mandiri.'
    ],
    discoveryTitle: {
      anomaly: '',
      question: '',
      paradigm: ''
    },
    coreFinding: '',
    contextNarrative: {
      marketVacuum: '',
      disruptedStatusQuo: ''
    },
    evidenceTelemetry: {
      originCoordinates: '',
      productionModel: '',
      verifiedClaims: []
    },
    flagshipProducts: [
      {
        name: 'Produk Unggulan 1',
        specs: 'Karya autentik terkurasi dengan standar mutu dan ketelitian lokal.',
        price: 'Rp 150.000',
        action_text: 'Beli di Toko Resmi',
        buyUrl: 'https://',
        imageUrl: '',
        category: 'Karya Utama'
      }
    ],
    milestones: [
      {
        year: '2020 | INISIASI',
        title: 'Riset & Formulasi Awal',
        description: 'Memulai riset dan produksi mandiri bersama perajin lokal.'
      }
    ],
    initiatives: [],
    sovereigntyMeaning: '',
    channels: {
      officialStore: [
        { platform: 'Webstore Resmi', url: 'https://', label: 'Toko Resmi' }
      ],
      publicSpaces: [
        { platform: 'Instagram', url: 'https://instagram.com/', label: '@brand' }
      ]
    },
    scores: { quality: 25, discovery: 25, trackRecord: 25, story: 25, total: 100 },
    statusRedFlag: 'CLEAR'
  });

  const [toastMsg, setToastMsg] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  const lensOptions = [
    { slug: 'pangan-pusaka-agraria-lestari', name: 'Pangan Pusaka & Agraria Lestari' },
    { slug: 'kriya-desain-material-berkelanjutan', name: 'Kriya, Desain & Material Berkelanjutan' },
    { slug: 'wastra-manufaktur-etis', name: 'Wastra & Manufaktur Etis' },
    { slug: 'media-independen-ruang-arsip-literasi-kritis', name: 'Media Independen, Ruang Arsip & Literasi Kritis' },
    { slug: 'kedaulatan-digital-civic-tech-open-source', name: 'Kedaulatan Digital, Civic-Tech & Open-Source' },
    { slug: 'kultur-kebugaran-gaya-hidup-berdaulat', name: 'Kultur, Kebugaran & Gaya Hidup Berdaulat' },
  ];

  const handleNameChange = (name: string) => {
    const slug = name.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    setBrand({ ...brand, name, slug });
  };

  const handleSave = async () => {
    if (!brand.name || !brand.slug) {
      alert('Nama brand dan slug wajib diisi!');
      return;
    }
    setSaving(true);
    const res = await saveBrandData(brand);
    setSaving(false);
    if (res.success) {
      setToastMsg(res.message);
      setTimeout(() => {
        router.push(`/admin/brands/${brand.slug}/edit`);
      }, 1500);
    } else {
      alert(res.message);
    }
  };

  const inputStyle = "w-full p-2.5 rounded-xl border text-xs font-sans text-gray-900 bg-white dark:bg-[#0A0E1A] dark:text-[#EDE8DC] border-gray-300 dark:border-white/20 focus:border-[#E11D48] focus:outline-none transition-colors";
  const labelStyle = "text-xs font-mono uppercase font-bold text-gray-700 dark:text-gray-300 block mb-1";

  return (
    <div className="space-y-8 max-w-3xl mx-auto pb-20">
      
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b pb-5 border-inherit/10">
        <div className="flex items-center gap-3">
          <Link href="/admin/brands" className="p-2 rounded-xl border border-inherit/10 hover:border-[#E11D48] transition-colors">
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <div>
            <span className="text-xs font-mono text-[#E11D48] font-bold uppercase tracking-wider">KURASI BRAND BARU</span>
            <h1 className="text-3xl font-display uppercase tracking-tight">+ TAMBAH BRAND BARU</h1>
          </div>
        </div>

        <button
          onClick={handleSave}
          disabled={saving}
          className="px-5 py-2.5 rounded-xl bg-[#E11D48] hover:bg-[#BE123C] text-white font-mono text-xs font-bold uppercase flex items-center gap-1.5 shadow-md shadow-[#E11D48]/30 transition-all disabled:opacity-50"
        >
          <Save className="w-4 h-4" />
          <span>{saving ? 'MENYIMPAN...' : 'BUAT BERKAS BRAND'}</span>
        </button>
      </div>

      {toastMsg && (
        <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 text-xs font-mono flex items-center gap-2">
          <Check className="w-4 h-4" />
          <span>{toastMsg}</span>
        </div>
      )}

      {/* BASIC FORM */}
      <div className="p-6 rounded-2xl border border-inherit/10 bg-inherit/40 space-y-5">
        <h2 className="font-display text-xl uppercase tracking-tight flex items-center gap-2">
          <Building2 className="w-5 h-5 text-[#E11D48]" />
          <span>Data Pokok Brand</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={labelStyle}>Nama Brand (Wajib)</label>
            <input
              type="text"
              value={brand.name}
              onChange={(e) => handleNameChange(e.target.value)}
              className={inputStyle}
              placeholder="misal: JAVARA INDIGENOUS INDONESIA"
            />
          </div>

          <div>
            <label className={labelStyle}>Slug URL (Otomatis)</label>
            <input
              type="text"
              value={brand.slug}
              onChange={(e) => setBrand({ ...brand, slug: e.target.value })}
              className={inputStyle}
              placeholder="javara-indigenous-indonesia"
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
            <label className={labelStyle}>Asal Daerah / Kota</label>
            <input
              type="text"
              value={brand.origin}
              onChange={(e) => setBrand({ ...brand, origin: e.target.value })}
              className={inputStyle}
              placeholder="misal: Jakarta / Banten"
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
          <label className={labelStyle}>Kutipan Redaksi (Pull-Quote)</label>
          <textarea
            rows={2}
            value={brand.quote}
            onChange={(e) => setBrand({ ...brand, quote: e.target.value })}
            className={inputStyle}
            placeholder="Kutipan prinsip kedaulatan..."
          />
        </div>

        <div>
          <label className={labelStyle}>Temuan Utama (Core Finding)</label>
          <textarea
            rows={2}
            value={brand.coreFinding}
            onChange={(e) => setBrand({ ...brand, coreFinding: e.target.value })}
            className={inputStyle}
            placeholder="Rangkuman kontribusi brand..."
          />
        </div>
      </div>

    </div>
  );
}
