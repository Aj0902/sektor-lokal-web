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
        email: 'contact@malakaproject.id'
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
    articles: [
      { id: 'a1', profile_id: 'ferry-001', title: 'Analisis Kritis Literasi Keuangan & Pertahanan Nalar', tag: 'ESAI KRITIS', read_time: '5 Menit Membaca', description: 'Mengapa kemampuan bernalar kritis dan pengujian logika adalah instrumen perlindungan diri paling mendasar di era disinformasi digital.', link_url: 'https://youtube.com/@ferryirwandi', order_index: 1 },
      { id: 'a2', profile_id: 'ferry-001', title: 'Stoikisme: Bukan Pasrah, Melainkan Aksi Nyata', tag: 'FILSAFAT TERAPAN', read_time: '7 Menit Membaca', description: 'Membedah esensi sejati filosofi stoikisme: fokuskan energi penuh pada apa yang bisa diubah, bukan meratapi apa yang di luar kendali.', link_url: 'https://youtube.com/@ferryirwandi', order_index: 2 }
    ],
    testimonials: [
      { id: 't1', profile_id: 'ferry-001', author_name: 'Gita Wirjawan', author_role: 'Pendidik & Founder Endgame Podcast', quote: 'Ferry mampu mengemas materi keuangan dan diskursus sosial yang berat menjadi narasi yang sangat relevan dan dicintai generasi muda.', order_index: 1 },
      { id: 't2', profile_id: 'ferry-001', author_name: 'Baskara Putra (Hindia)', author_role: 'Musisi & Penulis Lagu', quote: 'Konsistensinya menyuarakan kebenaran di tengah riuhnya internet memberikan rasa aman bagi anak muda yang haus akan akal sehat.', order_index: 2 },
      { id: 't3', profile_id: 'ferry-001', author_name: 'Rian', author_role: 'Penerima Beasiswa Warga', quote: 'Berkat edukasi Mas Ferry, keluarga saya terbebas dari jeratan pinjol dan saya bisa melanjutkan studi sarjana dengan beasiswa warga.', order_index: 3 }
    ],
    initiatives: [
      { id: 'i1', profile_id: 'ferry-001', title: 'Jurnal Stoikisme Publik', category: 'Buku & Publikasi', description: 'Catatan pemikiran dan panduan bernalar praktis untuk navigasi kehidupan sehari-hari.', action_text: 'Pelajari Buku', link_url: 'https://youtube.com/@ferryirwandi', order_index: 1 },
      { id: 'i2', profile_id: 'ferry-001', title: 'Apparel Resmi Malaka', category: 'Merchandise Kolektif', description: 'Koleksi apparel sebagai bentuk dukungan langsung pada independensi riset Malaka Project.', action_text: 'Kunjungi Toko', link_url: 'https://malakaproject.id', order_index: 2 },
      { id: 'i3', profile_id: 'ferry-001', title: 'Dana Beasiswa Warga', category: 'Inisiatif Sosial', description: 'Kanal gotong royong publik untuk membiayai pendidikan anak-anak daerah berprestasi.', action_text: 'Salurkan Donasi', link_url: 'https://youtube.com/@ferryirwandi', order_index: 3 }
    ]
  },
  'gita-wirjawan': {
    profile: {
      id: 'gita-002',
      slug: 'gita-wirjawan',
      name: 'GITA WIRJAWAN',
      title: 'The Strategist • Pendidik • Endgame Host',
      category: 'THE STRATEGISTS',
      bio_paragraphs: [
        'Gita Irawan Wirjawan adalah seorang entrepreneur, pendidik, dan mantan Menteri Perdagangan Indonesia yang berfokus pada pendidikan berkualitas tinggi dan kepemimpinan visioner.',
        'Lewat kanal Endgame Podcast, beliau memfasilitasi percakapan berbobot mengenai masa depan sains, teknologi, dan kebudayaan Indonesia.'
      ],
      quote: 'Pendidikan bukan hanya soal transfer ilmu, melainkan membangun imajinasi dan keberanian berpikir bangsa.',
      photo_url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80',
      verified: true,
      status_text: 'VERIFIKASI TERKURASI',
      social_links: {
        youtube: 'https://youtube.com/@endgame',
        twitter: 'https://twitter.com/gwirjawan',
        instagram: 'https://instagram.com/gwirjawan'
      },
      theme_default: 'light'
    },
    lifeEvents: [
      { id: 'g1', profile_id: 'gita-002', year_range: '2008 — 2011', title: 'PIMPINAN BKPM & MENTERI', description: 'Memimpin Badan Koordinasi Penanaman Modal dan reformasi sistem perdagangan nasional.', order_index: 1 },
      { id: 'g2', profile_id: 'gita-002', year_range: '2020 — SEKARANG', title: 'ENDGAME PODCAST', description: 'Membangun kanal diskursus intelektual nomor satu bagi anak muda dan akademisi Indonesia.', order_index: 2 }
    ],
    works: [
      { id: 'gw1', profile_id: 'gita-002', title: 'Endgame Podcast Series', category: 'Diskursus Intelektual', description: 'Wawancara mendalam bersama tokoh dunia, akademisi, dan kreator inovatif.', link_url: 'https://youtube.com/@endgame', order_index: 1 }
    ],
    articles: [
      { id: 'ga1', profile_id: 'gita-002', title: 'Transformasi Pendidikan di Era Kecerdasan Buatan', tag: 'PENDIDIKAN', read_time: '6 Menit Membaca', description: 'Bagaimana kurikulum masa depan harus beradaptasi dengan disrupsi AI.', link_url: 'https://youtube.com/@endgame', order_index: 1 }
    ],
    testimonials: [
      { id: 'gt1', profile_id: 'gita-002', author_name: 'Ferry Irwandi', author_role: 'Disruptor & Creator', quote: 'Pak Gita adalah mentor yang senantiasa menantang anak muda untuk berpikir jauh melampaui zamannya.', order_index: 1 }
    ],
    initiatives: [
      { id: 'gi1', profile_id: 'gita-002', title: 'Beasiswa Ancora Foundation', category: 'Pendidikan', description: 'Dukungan Beasiswa ke Perguruan Tinggi Terbaik Dunia.', action_text: 'Lihat Beasiswa', link_url: 'https://ancorafoundation.org', order_index: 1 }
    ]
  },
  'baskara-putra': {
    profile: {
      id: 'baskara-003',
      slug: 'baskara-putra',
      name: 'BASKARA PUTRA (HINDIA)',
      title: 'The Entertainers • Musisi • Penulis Lagu',
      category: 'THE ENTERTAINERS',
      bio_paragraphs: [
        'Baskara Putra (Hindia) adalah musisi, vokalis Feast, dan produser musik yang menyuarakan kecemasan, realitas kesehatan mental, dan dinamika sosial perkotaan generasi Z dan Millennial.',
        'Lagu-lagunya menjadi lagu kebangsaan emosional bagi jutaan anak muda di Indonesia.'
      ],
      quote: 'Kelelahan kita nyata, tapi kita tidak sendirian dalam merawat harapan di kota yang bising ini.',
      photo_url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
      verified: true,
      status_text: 'VERIFIKASI TERKURASI',
      social_links: {
        youtube: 'https://youtube.com',
        twitter: 'https://twitter.com/wordspit',
        instagram: 'https://instagram.com/wordspit'
      },
      theme_default: 'dark'
    },
    lifeEvents: [
      { id: 'b1', profile_id: 'baskara-003', year_range: '2014 — SEKARANG', title: 'VOKALIS .FEAST & HINDIA', description: 'Melahirkan album fenomenal Menari Dengan Bayangan dan Lagipula Hidup Akan Berakhir.', order_index: 1 }
    ],
    works: [
      { id: 'bw1', profile_id: 'baskara-003', title: 'Menari Dengan Bayangan', category: 'Album Musik', description: 'Catatan kesehatan mental dan perjalanan kedewasaan muda.', link_url: 'https://spotify.com', order_index: 1 }
    ],
    articles: [
      { id: 'ba1', profile_id: 'baskara-003', title: 'Katakarsis Musik & Suara Generasi', tag: 'KEBUDAYAAN', read_time: '4 Menit Membaca', description: 'Mengapa musik menjadi media pelepasan kecemasan kolektif.', link_url: 'https://spotify.com', order_index: 1 }
    ],
    testimonials: [
      { id: 'bt1', profile_id: 'baskara-003', author_name: 'Ferry Irwandi', author_role: 'Disruptor & Creator', quote: 'Lirik-lirik Hindia memberi tempat berteduh jujur di tengah kebisingan perkotaan.', order_index: 1 }
    ],
    initiatives: [
      { id: 'bi1', profile_id: 'baskara-003', title: 'Sun Eats Hours Collective', category: 'Musik & Seni', description: 'Kolektif independen pendukung karya musik lokal.', action_text: 'Dengar Musik', link_url: 'https://spotify.com', order_index: 1 }
    ]
  }
};

export const directoryProfiles: Profile[] = Object.values(fallbackProfiles).map(item => item.profile);
