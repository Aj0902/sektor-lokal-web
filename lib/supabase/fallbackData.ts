import { FullProfileData, Profile } from './types';

export const fallbackProfiles: Record<string, FullProfileData> = {
  'ferry-irwandi': {
    profile: {
      id: '1e88343e-74f0-4595-8e11-3efa40ea9edc',
      slug: 'ferry-irwandi',
      name: 'FERRY IRWANDI',
      title: 'THE VOICES • DISRUPTOR • LITERASI KRITIS',
      category: 'THE VOICES',
      bio_paragraphs: [
        'Ferry Irwandi adalah mantan ASN Kementerian Keuangan yang mengambil keputusan berani untuk menanggalkan stabilitas birokrasi demi memperjuangkan independensi narasi publik, pendidikan nalar kritis, dan pembongkaran kejahatan finansial digital di Indonesia.',
        'Melalui platform Malaka Project dan kanal pribadinya, ia menggerakkan aksi nyata warga: menggalang dana beasiswa lebih dari Rp 10,7 Miliar untuk ribuan pelajar daerah, meluncurkan program subsidi UKT perguruan tinggi, serta mempopulerkan filsafat stoikisme terapan sebagai instrumen kedaulatan berpikir generasi muda.'
      ],
      quote: 'Di tengah bisingnya algoritma pembodohan dan skema penipuan massal, nalar kritis bukan lagi sekadar opsi moral—ia adalah instrumen pertahanan hidup paling mendasar.',
      photo_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
      verified: true,
      status_text: 'VERIFIKASI TERKURASI',
      social_links: {
        youtube: 'https://youtube.com/@ferryirwandi',
        twitter: 'https://twitter.com/ferryirwandi',
        instagram: 'https://instagram.com/ferryirwandi',
        spotify: 'https://open.spotify.com/show/malakaproject',
        email: 'contact@malakaproject.id',
        tiktok: 'https://tiktok.com/@ferryirwandi',
        linkedin: 'https://linkedin.com/in/ferryirwandi',
        threads: 'https://threads.net/@ferryirwandi',
        website: 'https://malakaproject.id'
      },
      theme_default: 'light'
    },
    lifeEvents: [
      { id: '1', profile_id: '1e88343e-74f0-4595-8e11-3efa40ea9edc', year_range: '2013 — 2020', title: 'ABDI NEGARA (KEMENKEU)', description: 'Mengabdi di Kementerian Keuangan, menyaksikan langsung arsitektur anggaran negara dan realitas ketimpangan ekonomi warga.', order_index: 1 },
      { id: '2', profile_id: '1e88343e-74f0-4595-8e11-3efa40ea9edc', year_range: '2021', title: 'TITIK BALIK RESIGNASI', description: 'Memilih melepaskan posisi stabil ASN demi memperjuangkan independensi narasi dan edukasi publik tanpa sekat birokrasi.', order_index: 2 },
      { id: '3', profile_id: '1e88343e-74f0-4595-8e11-3efa40ea9edc', year_range: '2022 — 2023', title: 'KELAHIRAN MALAKA PROJECT', description: 'Mendirikan Malaka Project sebagai ruang diskursus independen yang memproduksi esai video berbobot tentang filsafat praktis dan politik warga.', order_index: 3 },
      { id: '4', profile_id: '1e88343e-74f0-4595-8e11-3efa40ea9edc', year_range: '2024 — 2026', title: 'BEASISWA 10 MILIAR & BANTUAN UKT', description: 'Menggalang dana publik gotong royong lebih dari Rp 10,7 Miliar untuk beasiswa daerah, subsidi UKT mahasiswa, dan inisiatif rintisan perguruan tinggi mandiri.', order_index: 4 }
    ],
    works: [
      { id: 'w1', profile_id: '1e88343e-74f0-4595-8e11-3efa40ea9edc', title: 'Investigasi & Pembongkaran Skema Ponzi / Judol', category: 'Riset Finansial & Advokasi Publik', description: 'Pembedahan ilmiah mengenai matematika di balik skema ponzi, judi online, dan rekayasa penipuan finansial digital yang merugikan jutaan warga.', link_url: 'https://youtube.com/@ferryirwandi', order_index: 1 },
      { id: 'w2', profile_id: '1e88343e-74f0-4595-8e11-3efa40ea9edc', title: 'Malaka Project', category: 'Media Riset & Diskursus Independen', description: 'Platform video esai berbobot dengan lebih dari 1 juta pelanggan yang mengupas filsafat, ekonomi makro, dan kesadaran politik warga secara gratis.', link_url: 'https://malakaproject.id', order_index: 2 },
      { id: 'w3', profile_id: '1e88343e-74f0-4595-8e11-3efa40ea9edc', title: 'Buku Prinsipal Ekonomi & Stoikisme Praktis', category: 'Karya Tulis & Panduan Bernalar', description: 'Buku panduan berpikir rasional dan penerapan filsafat stoikisme dalam menghadapi ketidakpastian ekonomi generasi muda.', link_url: 'https://www.gramedia.com', order_index: 3 },
      { id: 'w4', profile_id: '1e88343e-74f0-4595-8e11-3efa40ea9edc', title: 'Gerakan Beasiswa & Bantuan UKT Mahasiswa', category: 'Filantropi & Pendidikan Daerah', description: 'Inisiatif gotong royong publik yang mendanai kuliah penuh dan pembayaran UKT bagi ribuan mahasiswa daerah berprestasi.', link_url: 'https://kitabisa.com', order_index: 4 }
    ],
    gallery: [
      { id: 'g1', profile_id: '1e88343e-74f0-4595-8e11-3efa40ea9edc', title: 'Orasi & Diskursus Nalar Publik', image_url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80', order_index: 1 },
      { id: 'g2', profile_id: '1e88343e-74f0-4595-8e11-3efa40ea9edc', title: 'Sesi Riset Independen Malaka Project', image_url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80', order_index: 2 },
      { id: 'g3', profile_id: '1e88343e-74f0-4595-8e11-3efa40ea9edc', title: 'Penyaluran Beasiswa Pelajar Daerah', image_url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80', order_index: 3 }
    ],
    articles: [
      { 
        id: 'a1', 
        profile_id: '1e88343e-74f0-4595-8e11-3efa40ea9edc', 
        title: 'Analisis Kritis Literasi Keuangan & Pertahanan Nalar', 
        tag: 'ESAI KRITIS', 
        read_time: '6 Menit Membaca', 
        description: 'Mengapa kemampuan bernalar kritis dan pengujian logika adalah instrumen perlindungan diri paling mendasar di era disinformasi digital.', 
        content_full: 'Di era di mana informasi bergerak lebih cepat daripada kejernihan nalar, kejahatan finansial telah berevolusi menjadi bentuk yang amat canggih dan manipulatif.\n\nSkema ponzi modern, robot trading palsu, hingga judi online berkedok permainan digital tidak hanya memangsa uang masyarakat, tetapi juga mengeksploitasi bias psikologis dan keputusasaan ekonomi.\n\nMatematika di balik skema penipuan ini selalu sama: pengelola dan bandar memegang keunggulan statistik mutlak yang mustahil dikalahkan dalam jangka panjang. Ketika seseorang meyakini bahwa keuntungan instan dapat diraih tanpa proses nilai tambah yang riil, saat itulah benteng nalar telah runtuh.\n\nOleh karena itu, literasi keuangan sejati bukan sekadar tahu cara menabung atau membeli saham. Literasi keuangan adalah tentang skeptisisme yang sehat: keberanian untuk bertanya, menguji klaim secara metodis, dan tidak membiarkan emosi keserakahan mengendalikan keputusan hidup kita.', 
        link_url: '/artikel/analisis-kritis-literasi-keuangan', 
        order_index: 1 
      },
      { 
        id: 'a2', 
        profile_id: '1e88343e-74f0-4595-8e11-3efa40ea9edc', 
        title: 'Stoikisme Terapan: Kedaulatan Berpikir di Tengah Krisis', 
        tag: 'FILSAFAT TERAPAN', 
        read_time: '8 Menit Membaca', 
        description: 'Membedah esensi filosofi stoikisme bukan sebagai kepasrahan, melainkan fokus radikal pada aksi nyata yang berada di dalam kendali diri.', 
        content_full: 'Banyak orang salah memahami stoikisme sebagai ajaran untuk bersikap dingin, pasrah, atau apatis terhadap penderitaan dunia.\n\nPada hakikatnya, stoikisme adalah filsafat tindakan. Epictetus dan Marcus Aurelius mengajarkan kita dikotomi kendali: pisahkan dengan tegas apa yang berada di bawah kuasa kita (pertimbangan, tindakan, integritas) dan apa yang di luar kendali kita (opini orang lain, krisis ekonomi global, hasil akhir).\n\nKetika kita memusatkan seluruh energi nalar pada apa yang bisa kita kendalikan, kita membebaskan diri dari kecemasan yang melumpuhkan. Di tengah ketidakpastian hidup modern, stoikisme adalah jangkar ketenangan yang memungkinkan kita tetap berkarya secara berani dan bermartabat.', 
        link_url: '/artikel/stoikisme-terapan-kedaulatan-berpikir', 
        order_index: 2 
      }
    ],
    testimonials: [
      { id: 't1', profile_id: '1e88343e-74f0-4595-8e11-3efa40ea9edc', author_name: 'Gita Wirjawan', author_role: 'Pendidik & Founder Endgame Podcast', quote: 'Ferry mampu mengemas materi keuangan dan diskursus sosial yang berat menjadi narasi yang sangat relevan dan dicintai generasi muda.', order_index: 1 },
      { id: 't2', profile_id: '1e88343e-74f0-4595-8e11-3efa40ea9edc', author_name: 'Baskara Putra (Hindia)', author_role: 'Musisi & Penulis Lagu', quote: 'Konsistensinya menyuarakan kebenaran di tengah riuhnya internet memberikan rasa aman bagi anak muda yang haus akan akal sehat.', order_index: 2 }
    ],
    initiatives: [
      { 
        id: 'i1', 
        profile_id: '1e88343e-74f0-4595-8e11-3efa40ea9edc', 
        title: 'Buku Prinsipal Nalar & Stoikisme', 
        category: 'Buku & Panduan Bernalar', 
        description: 'Karya tulis komprehensif membedah cara bernalar mandiri dan membangun ketahanan mental di era disrupsi digital.', 
        price: 'Rp 149.000', 
        image_url: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 
        action_text: 'Beli Buku Resmi', 
        link_url: 'https://www.gramedia.com', 
        order_index: 1 
      },
      { 
        id: 'i2', 
        profile_id: '1e88343e-74f0-4595-8e11-3efa40ea9edc', 
        title: 'Apparel Resmi Kolektif Malaka', 
        category: 'Merchandise Resmi', 
        description: 'Koleksi kaos dan merchandise resmi di mana sebagian keuntungannya dialokasikan langsung untuk mendanai riset independen & beasiswa.', 
        price: 'Rp 249.000', 
        image_url: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80', 
        action_text: 'Kunjungi Toko Resmi', 
        link_url: 'https://malakaproject.id', 
        order_index: 2 
      },
      { 
        id: 'i3', 
        profile_id: '1e88343e-74f0-4595-8e11-3efa40ea9edc', 
        title: 'Donasi Beasiswa Warga & Bantuan UKT', 
        category: 'Inisiatif Gotong Royong', 
        description: 'Kanal donasi publik resmi melalui Kitabisa untuk membiayai kuliah penuh dan tunggakan UKT mahasiswa daerah berprestasi.', 
        price: 'Gotong Royong', 
        image_url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80', 
        action_text: 'Salurkan Donasi Resmi', 
        link_url: 'https://kitabisa.com', 
        order_index: 3 
      }
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
