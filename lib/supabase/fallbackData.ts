import { FullProfileData, Profile } from './types';

export const fallbackProfiles: Record<string, FullProfileData> = {
  'ferry-irwandi': {
    profile: {
      id: '1e88343e-74f0-4595-8e11-3efa40ea9edc',
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
      { id: '1', profile_id: '1e88343e-74f0-4595-8e11-3efa40ea9edc', year_range: '2013 — 2020', title: 'ABDI NEGARA (KEMENKEU)', description: 'Mengabdi di Kementerian Keuangan, menyaksikan langsung arsitektur anggaran negara dan realitas ketimpangan ekonomi warga.', order_index: 1 },
      { id: '2', profile_id: '1e88343e-74f0-4595-8e11-3efa40ea9edc', year_range: '2021', title: 'TITIK BALIK RESIGNASI', description: 'Memilih melepaskan posisi stabil ASN demi memperjuangkan independensi narasi dan edukasi publik tanpa sekat birokrasi.', order_index: 2 },
      { id: '3', profile_id: '1e88343e-74f0-4595-8e11-3efa40ea9edc', year_range: '2022 — 2023', title: 'INISIATIF MALAKA PROJECT', description: 'Mendirikan Malaka Project bersama tim independen untuk memproduksi esai video berbobot tinggi tentang filsafat, stoikisme, dan politik warga.', order_index: 3 },
      { id: '4', profile_id: '1e88343e-74f0-4595-8e11-3efa40ea9edc', year_range: '2024 — SEKARANG', title: 'DAMPAK LAPANGAN & BEASISWA', description: 'Menyelamatkan jutaan warga dari skema penipuan finansial serta menggalang dana beasiswa pendidikan bernilai miliaran rupiah.', order_index: 4 }
    ],
    works: [
      { id: 'w1', profile_id: '1e88343e-74f0-4595-8e11-3efa40ea9edc', title: 'Serial Pembongkaran Skema Ponzi & Judol', category: 'Riset Finansial & Advokasi Publik', description: 'Pembedahan ilmiah mengenai matematika di balik skema ponzi, judi online, dan rekayasa penipuan finansial digital yang merugikan jutaan warga.', link_url: 'https://youtube.com/@ferryirwandi', order_index: 1 },
      { id: 'w2', profile_id: '1e88343e-74f0-4595-8e11-3efa40ea9edc', title: 'Buku Prinsipal Ekonomi & Stoikisme', category: 'Karya Tulis & Panduan Bernalar', description: 'Panduan bernalar kritis dan penerapan filsafat stoikisme praktis dalam menghadapi krisis mental serta keputusan finansial generasi muda.', link_url: 'https://youtube.com/@ferryirwandi', order_index: 2 },
      { id: 'w3', profile_id: '1e88343e-74f0-4595-8e11-3efa40ea9edc', title: 'Malaka Project', category: 'Media Edukasi & Diskursus Kolektif', description: 'Platform video esai independen yang mengupas filsafat praktis, ekonomi mikro, dan kesadaran politik warga secara gratis dan terbuka.', link_url: 'https://malakaproject.id', order_index: 3 }
    ],
    gallery: [
      { id: 'g1', profile_id: '1e88343e-74f0-4595-8e11-3efa40ea9edc', title: 'Dokumentasi Orasi Warga', image_url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80', order_index: 1 },
      { id: 'g2', profile_id: '1e88343e-74f0-4595-8e11-3efa40ea9edc', title: 'Diskursus Filsafat Publik', image_url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80', order_index: 2 }
    ],
    articles: [
      { id: 'a1', profile_id: '1e88343e-74f0-4595-8e11-3efa40ea9edc', title: 'Analisis Kritis Literasi Keuangan & Pertahanan Nalar', tag: 'ESAI KRITIS', read_time: '5 Menit Membaca', description: 'Mengapa kemampuan bernalar kritis dan pengujian logika adalah instrumen perlindungan diri paling mendasar di era disinformasi digital.', content_full: 'Di era di mana informasi bergerak lebih cepat dari nalar sehat, kejahatan finansial telah berevolusi menjadi bentuk yang sangat canggih.\n\nMatematika di balik skema ponzi dan judi online selalu sama: bandar dan pengelola selalu memegang keunggulan statistik mutlak.', link_url: '/artikel/analisis-kritis-literasi-keuangan', order_index: 1 }
    ],
    testimonials: [
      { id: 't1', profile_id: '1e88343e-74f0-4595-8e11-3efa40ea9edc', author_name: 'Gita Wirjawan', author_role: 'Pendidik & Founder Endgame Podcast', quote: 'Ferry mampu mengemas materi keuangan dan diskursus sosial yang berat menjadi narasi yang sangat relevan dan dicintai generasi muda.', order_index: 1 }
    ],
    initiatives: [
      { id: 'i1', profile_id: '1e88343e-74f0-4595-8e11-3efa40ea9edc', title: 'Jurnal Stoikisme Publik', category: 'Buku & Publikasi', description: 'Catatan pemikiran dan panduan bernalar praktis untuk navigasi kehidupan sehari-hari.', price: 'Rp 149.000', image_url: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', action_text: 'Beli Buku Resmi', link_url: 'https://youtube.com/@ferryirwandi', order_index: 1 }
    ]
  },
  'gita-wirjawan': {
    profile: {
      id: '1151aa5c-2c9d-47d5-a88a-be2a452d7d5a',
      slug: 'gita-wirjawan',
      name: 'GITA WIRJAWAN',
      title: 'The Strategist • Pendidik • Endgame Podcast',
      category: 'THE STRATEGISTS',
      bio_paragraphs: [
        'Gita Wirjawan adalah seorang mantan Menteri Perdagangan RI, pengusaha, pendidik, dan pembuat konten diskursus publik melalui Endgame Podcast.',
        'Melalui wawancara mendalam dengan berbagai tokoh sains, geopolitik, ekonomi, dan seni, Gita konsisten membangun fondasi literasi strategis bangsa.'
      ],
      quote: 'Pendidikan dan rasa ingin tahu yang tak terbatas adalah kunci utama daya saing bangsa di panggung dunia.',
      photo_url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
      verified: true,
      status_text: 'VERIFIKASI TERKURASI',
      social_links: {
        youtube: 'https://youtube.com/@EndgameGitaWirjawan',
        twitter: 'https://twitter.com/gwirjawan',
        instagram: 'https://instagram.com/gwirjawan',
        spotify: 'https://open.spotify.com/show/endgame',
        website: 'https://visicita.id'
      },
      theme_default: 'light'
    },
    lifeEvents: [],
    works: [],
    gallery: [],
    articles: [],
    testimonials: [],
    initiatives: []
  },
  'baskara-putra': {
    profile: {
      id: '3e5aade5-c883-4f34-82f0-1c89f33ae920',
      slug: 'baskara-putra',
      name: 'BASKARA PUTRA',
      title: 'The Entertainers • Musisi (Hindia) • Penulis Lagu',
      category: 'THE ENTERTAINERS',
      bio_paragraphs: [
        'Baskara Putra (dikenal juga dengan nama panggung Hindia) adalah musisi, penyanyi, dan penulis lagu Indonesia yang menyuarakan kecemasan generasi muda lewat narasi lagu yang jujur dan katarsis.',
        'Karya-karyanya menjadi soundtrack perjuangan kesehatan mental, realitas sosial, dan refleksi hidup generasi milenial & Gen Z.'
      ],
      quote: 'Musik adalah cara terbaik merayakan kerapuhan diri dan saling menguatkan di tengah kekacauan dunia.',
      photo_url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
      verified: true,
      status_text: 'VERIFIKASI TERKURASI',
      social_links: {
        youtube: 'https://youtube.com/@Hindia',
        instagram: 'https://instagram.com/wordspit',
        spotify: 'https://open.spotify.com/artist/hindia',
        twitter: 'https://twitter.com/wordspit'
      },
      theme_default: 'dark'
    },
    lifeEvents: [],
    works: [],
    gallery: [],
    articles: [],
    testimonials: [],
    initiatives: []
  }
};

export const directoryProfiles: Profile[] = Object.values(fallbackProfiles).map(item => item.profile);
