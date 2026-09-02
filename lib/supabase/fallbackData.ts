import { FullProfileData, Profile } from './types';

export const fallbackProfiles: Record<string, FullProfileData> = {
  'ferry-irwandi': {
    profile: {
      id: 'ferry-001',
      slug: 'ferry-irwandi',
      name: 'FERRY IRWANDI',
      title: 'The Voices • Disruptor • Literasi Kritis',
      category: 'THE VOICES',
      bio_paragraphs: [
        'Ferry Irwandi adalah mantan ASN Kementerian Keuangan yang mengambil keputusan berani untuk keluar dari zona nyaman birokrasi demi mendedikasikan hidupnya sebagai kreator esai video, edukator finansial kritis, dan penggerak aksi warga.',
        'Dikenal lewat gaya penyampaiannya yang analitis, tajam, dan membumi, ia konsisten menggunakan media digitalnya untuk membongkar kejahatan keuangan serta membakar semangat pemikiran rasional bagi generasi muda Indonesia.'
      ],
      quote: 'Berpikir kritis adalah benteng terakhir kebebasan individu di tengah gempuran skema penipuan dan kebodohan finansial.',
      photo_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
      verified: true,
      status_text: 'VERIFIKASI TERKURASI',
      social_links: {
        youtube: 'https://youtube.com/@ferryirwandi',
        twitter: 'https://twitter.com/ferryirwandi',
        instagram: 'https://instagram.com/ferryirwandi',
        spotify: 'https://spotify.com',
        email: 'contact@malakaproject.id',
        tiktok: 'https://tiktok.com/@ferryirwandi',
        linkedin: 'https://linkedin.com/in/ferryirwandi',
        threads: 'https://threads.net/@ferryirwandi',
        medium: 'https://medium.com/@ferryirwandi'
      },
      theme_default: 'light'
    },
    lifeEvents: [
      { id: '1', profile_id: 'ferry-001', year_range: '2013 — 2020', title: 'ABDI NEGARA (KEMENKEU)', description: 'Mengabdi di Kementerian Keuangan, menyaksikan langsung arsitektur anggaran negara dan realitas ketimpangan ekonomi warga.', order_index: 1 },
      { id: '2', profile_id: 'ferry-001', year_range: '2021', title: 'TITIK BALIK RESIGNASI', description: 'Memilih melepaskan posisi stabil ASN demi memperjuangkan independensi narasi dan edukasi publik tanpa sekat birokrasi.', order_index: 2 },
      { id: '3', profile_id: 'ferry-001', year_range: '2022 — 2023', title: 'INISIATIF MALAKA PROJECT', description: 'Mendirikan Malaka Project bersama tim independen untuk memproduksi esai video berbobot tinggi tentang filsafat, stoikisme, dan politik warga.', order_index: 3 },
      { id: '4', profile_id: 'ferry-001', year_range: '2024 — SEKARANG', title: 'DAMPAK LAPANGAN & BEASISWA', description: 'Menyelamatkan jutaan warga dari skema penipuan finansial serta menggalang dana beasiswa pendidikan bernilai miliaran rupiah.', order_index: 4 }
    ],
    works: [
      { id: 'w1', profile_id: 'ferry-001', title: 'Serial Pembongkaran Skema Ponzi & Judol', category: 'Riset Finansial & Advokasi Publik', description: 'Pembedahan ilmiah mengenai matematika di balik skema ponzi, judi online, dan rekayasa penipuan finansial digital yang merugikan jutaan warga.', link_url: 'https://youtube.com/@ferryirwandi', order_index: 1 },
      { id: 'w2', profile_id: 'ferry-001', title: 'Buku Prinsipal Ekonomi & Stoikisme', category: 'Karya Tulis & Panduan Bernalar', description: 'Panduan bernalar kritis dan penerapan filsafat stoikisme praktis dalam menghadapi krisis mental serta keputusan finansial generasi muda.', link_url: 'https://youtube.com/@ferryirwandi', order_index: 2 },
      { id: 'w3', profile_id: 'ferry-001', title: 'Malaka Project', category: 'Media Edukasi & Diskursus Kolektif', description: 'Platform video esai independen yang mengupas filsafat praktis, ekonomi mikro, dan kesadaran politik warga secara gratis dan terbuka.', link_url: 'https://malakaproject.id', order_index: 3 },
      { id: 'w4', profile_id: 'ferry-001', title: 'Gerakan Beasiswa Warga', category: 'Filantropi & Pendidikan Daerah', description: 'Inisiatif penggalangan dana gotong royong publik yang membiayai kuliah penuh mahasiswa daerah berprestasi dari keluarga prasejahtera.', link_url: 'https://youtube.com/@ferryirwandi', order_index: 4 }
    ],
    gallery: [
      { id: 'g1', profile_id: 'ferry-001', title: 'Dokumentasi Orasi Warga', image_url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80', order_index: 1 },
      { id: 'g2', profile_id: 'ferry-001', title: 'Diskursus Filsafat Publik', image_url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80', order_index: 2 },
      { id: 'g3', profile_id: 'ferry-001', title: 'Aksi Beasiswa Daerah', image_url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80', order_index: 3 }
    ],
    articles: [
      { id: 'a1', profile_id: 'ferry-001', title: 'Analisis Kritis Literasi Keuangan & Pertahanan Nalar', tag: 'ESAI KRITIS', read_time: '5 Menit Membaca', description: 'Mengapa kemampuan bernalar kritis dan pengujian logika adalah instrumen perlindungan diri paling mendasar di era disinformasi digital.', link_url: 'https://youtube.com/@ferryirwandi', order_index: 1 },
      { id: 'a2', profile_id: 'ferry-001', title: 'Stoikisme: Bukan Pasrah, Melainkan Aksi Nyata', tag: 'FILSAFAT TERAPAN', read_time: '7 Menit Membaca', description: 'Membedah esensi sejati filosofi stoikisme: fokuskan energi penuh pada apa yang bisa diubah, bukan meratapi apa yang di luar kendali.', link_url: 'https://youtube.com/@ferryirwandi', order_index: 2 }
    ],
    testimonials: [
      { id: 't1', profile_id: 'ferry-001', author_name: 'Gita Wirjawan', author_role: 'Pendidik & Founder Endgame Podcast', quote: 'Ferry mampu mengemas materi keuangan dan diskursus sosial yang berat menjadi narasi yang sangat relevan dan dicintai generasi muda.', order_index: 1 },
      { id: 't2', profile_id: 'ferry-001', author_name: 'Baskara Putra (Hindia)', author_role: 'Musisi & Penulis Lagu', quote: 'Konsistensinya menyuarakan kebenaran di tengah riuhnya internet memberikan rasa aman bagi anak muda yang haus akan akal sehat.', order_index: 2 }
    ],
    initiatives: [
      { 
        id: 'i1', 
        profile_id: 'ferry-001', 
        title: 'Jurnal Stoikisme Publik', 
        category: 'Buku & Publikasi', 
        description: 'Catatan pemikiran dan panduan bernalar praktis untuk navigasi kehidupan sehari-hari.', 
        price: 'Rp 149.000',
        image_url: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80',
        action_text: 'Beli Buku Resmi', 
        link_url: 'https://youtube.com/@ferryirwandi', 
        order_index: 1 
      },
      { 
        id: 'i2', 
        profile_id: 'ferry-001', 
        title: 'Apparel Resmi Malaka', 
        category: 'Merchandise Kolektif', 
        description: 'Koleksi apparel sebagai bentuk dukungan langsung pada independensi riset Malaka Project.', 
        price: 'Rp 299.000',
        image_url: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80',
        action_text: 'Kunjungi Toko', 
        link_url: 'https://malakaproject.id', 
        order_index: 2 
      },
      { 
        id: 'i3', 
        profile_id: 'ferry-001', 
        title: 'Dana Beasiswa Warga', 
        category: 'Inisiatif Sosial', 
        description: 'Kanal gotong royong publik untuk membiayai pendidikan anak-anak daerah berprestasi.', 
        price: 'Gotong Royong',
        image_url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
        action_text: 'Salurkan Donasi', 
        link_url: 'https://youtube.com/@ferryirwandi', 
        order_index: 3 
      }
    ]
  }
};

export const directoryProfiles: Profile[] = Object.values(fallbackProfiles).map(item => item.profile);
