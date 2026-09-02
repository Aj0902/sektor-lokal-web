import { FullProfileData, Profile } from './types';

export const fallbackProfiles: Record<string, FullProfileData> = {
  'ferry-irwandi': {
    profile: {
      id: '1e88343e-74f0-4595-8e11-3efa40ea9edc',
      slug: 'ferry-irwandi',
      name: 'FERRY IRWANDI',
      title: 'THE VOICES • DISRUPTOR • SANG PENENUN NALAR WARGA',
      category: 'THE VOICES',
      bio_paragraphs: [
        'Di balik deretan meja birokrasi Kementerian Keuangan, seorang alumnus STAN bernama Ferry Irwandi menyaksikan bagaimana jurang literasi dan rapuhnya pertahanan nalar telah menjerumuskan jutaan warga ke dalam jerat penipuan finansial digital. Pada tahun 2021, ia mengambil pertaruhan terbesar dalam hidupnya: menanggalkan status kemapanan abdi negara demi mendirikan mimbar independen tanpa kompromi.',
        'Dari studio mandiri yang kemudian bermetamorfosis menjadi Malaka Project, Ferry melancarkan perang terbuka melawan sindikat judi online dan rekayasa skema ponzi modern. Menghadapi intimidasi dan disinformasi dengan ketenangan stoik, ia membuktikan bahwa kritik digital bisa bermuara pada aksi lapangan: memimpin penggalangan dana gotong royong publik lebih dari Rp 10,7 Miliar untuk beasiswa daerah serta subsidi UKT bagi ribuan mahasiswa prasejahtera.'
      ],
      quote: 'Ketika algoritma digital dirancang untuk mengeksploitasi keputusasaan, nalar kritis bukan lagi sekadar opsi intelektual—ia adalah benteng terakhir kedaulatan manusia.',
      photo_url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
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
      { id: 'g1', profile_id: '1e88343e-74f0-4595-8e11-3efa40ea9edc', title: 'Mimbar Bebas: Dialektika Nalar Kritis di Hadapan Ribuan Mahasiswa', image_url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80', order_index: 1 },
      { id: 'g2', profile_id: '1e88343e-74f0-4595-8e11-3efa40ea9edc', title: 'Dapur Riset & Produksi Malaka Project: Membedah Alur Keuangan Gelap', image_url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80', order_index: 2 },
      { id: 'g3', profile_id: '1e88343e-74f0-4595-8e11-3efa40ea9edc', title: 'Penyaluran Nyata: Beasiswa & Subsidi UKT Mahasiswa Berprestasi Daerah', image_url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80', order_index: 3 }
    ],
    articles: [
      { 
        id: 'a1', 
        profile_id: '1e88343e-74f0-4595-8e11-3efa40ea9edc', 
        title: 'Anatomi Perburuan Ilusi: Catatan Investigasi Ferry Irwandi Membongkar Gurita Judol & Skema Ponzi', 
        tag: 'INVESTIGASI & ADVOKASI', 
        read_time: '9 Menit Membaca', 
        description: 'Kisah di balik layar perlawanan Ferry Irwandi melawan sindikat penipuan finansial digital: matematika di balik manipulasi dopamin, ancaman teror, dan pertaruhan akal sehat publik.', 
        content_full: 'Malam itu di pertengahan 2023, kotak pesan media sosial Ferry Irwandi dibanjiri ratusan pesan keputusasaan. Dari buruh pabrik yang kehilangan seluruh tabungan pensiun hingga mahasiswa yang terjerat pinjaman ilegal demi mengejar algoritma "kemenangan instan", polanya selalu identik: mereka dimangsa oleh ilusi yang dirancang dengan presisi matematis.\n\nBagi Ferry, yang menghabiskan hampir satu dekade mempelajari aliran kas negara di Kementerian Keuangan, fenomena judi online dan robot trading palsu bukan sekadar persoalan kriminalitas biasa. Ini adalah eksploitasi terstruktur terhadap kelemahan kognitif masyarakat kita.\n\n"Secara statistik, bandar tidak pernah bisa kalah. Matematika di balik algoritma mereka didesain dengan negative expected value mutlak," ungkap Ferry di depan papan tulis studionya. Namun, menyampaikan kebenaran matematika di tengah masyarakat yang sedang terhimpit ekonomi bukanlah perkara mudah. Ia berhadapan langsung dengan mesin propaganda masif, endorsemen figur publik ternama, hingga teror dan intimidasi digital yang dialamatkan ke ruang pribadinya.\n\nFriksi terberat bukan datang dari sang bandar, melainkan dari resistensi para korban yang masih terperangkap dalam bias "sunk cost fallacy"—keyakinan semu bahwa kekalahan berikutnya akan terbalaskan jika mereka terus bertaruh. Melalui serial esai video investigatifnya di Malaka Project, Ferry tidak hanya membongkar alur transaksi perbankan gelap, melainkan membedah psikologi keserakahan dan keputusasaan.\n\nPerjuangan ini bukan tanpa risiko. Namun bagi Ferry, membiarkan kebodohan finansial merajalela tanpa perlawanan sama saja dengan mengkhianati nurani. Literasi kritis yang ia bangun adalah seruan perang untuk merebut kembali kedaulatan nalar warga dari cengkeraman ilusi digital.', 
        link_url: '/artikel/anatomi-perburuan-ilusi-investigasi-ferry-irwandi', 
        order_index: 1 
      },
      { 
        id: 'a2', 
        profile_id: '1e88343e-74f0-4595-8e11-3efa40ea9edc', 
        title: 'Benteng di Ruang Sempit: Bagaimana Ferry Irwandi Menjangkarkan Stoikisme Melawan Teror & Krisis', 
        tag: 'FILSAFAT & DIALEKTIKA', 
        read_time: '11 Menit Membaca', 
        description: 'Refleksi personal Ferry Irwandi tentang bagaimana filsafat stoikisme terapan menjadi kompas ketenangan di tengah badai resignasi, tuduhan tak berdasar, dan beban ekspektasi publik.', 
        content_full: 'Keputusan untuk melepaskan seragam pegawai negeri pada tahun 2021 bukan lahir dari dorongan impulsif. Di kamar berukuran 3x4 meter yang menjadi saksi bisu hari-hari awalnya sebagai kreator independen, Ferry Irwandi berkali-kali membuka kembali lembaran Enchiridion karya Epictetus dan Meditations karya Marcus Aurelius.\n\nDi hadapannya terbentang ketidakpastian brutal: hilangnya pendapatan tetap, cibiran lingkungan birokrasi, dan tanggung jawab menghidupi keluarga tanpa jaring pengaman institusional. Di titik nadir itulah, konsep dikotomi kendali beralih dari sekadar teori di atas kertas menjadi urat nadi kehidupannya.\n\n"Dunia luar—mulai dari opini orang lain, algoritma platform yang berubah-ubah, hingga tudingan buzzer—sama sekali berada di luar kendali kita. Satu-satunya yang berada 100% dalam kuasa kita adalah kejernihan pertimbangan nalar, integritas tindakan, dan keberanian kita untuk melangkah," tulis Ferry dalam jurnal pribadinya.\n\nFilsafat inilah yang membuatnya tetap bergeming ketika gelombang fitnah menerpanya: mulai dari tuduhan sebagai agen asing, ancaman pelaporan hukum, hingga serangan siber ke platform Malaka Project. Alih-alih merespons dengan kemarahan reaktif, Ferry memilih mengalirkan energi perlawanan ke dalam karya-karya edukasi berbobot dan inisiatif nyata: mendanai beasiswa miliaran rupiah bagi anak-anak daerah yang kurang beruntung.\n\nBagi generasi muda Indonesia yang kini terkepung oleh kecemasan karier, perbandingan sosial di media maya, dan disrupsi ekonomi, perjalanan Ferry Irwandi membuktikan satu hal mendasar: Stoikisme bukanlah tentang berdiam diri dan pasrah menerima nasib, melainkan tentang membangun benteng nalar yang tak tertembus agar kita bisa bertarung di dunia nyata dengan hati yang jernih dan jiwa yang merdeka.', 
        link_url: '/artikel/benteng-di-ruang-sempit-stoikisme-ferry-irwandi', 
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
        title: 'Buku Panduan Bernalar & Stoikisme Praktis', 
        category: 'Buku Resmi Gramedia', 
        description: 'Karya literatur komprehensif mengupas metode dikotomi kendali, pertahanan logika dari manipulasi finansial, dan navigasi hidup generasi modern.', 
        price: 'Rp 149.000', 
        image_url: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 
        action_text: 'Pesan Buku Resmi Gramedia', 
        link_url: 'https://www.gramedia.com', 
        order_index: 1 
      },
      { 
        id: 'i2', 
        profile_id: '1e88343e-74f0-4595-8e11-3efa40ea9edc', 
        title: 'Apparel Resmi Kolektif Malaka Project', 
        category: 'Merchandise Kolektif Warga', 
        description: 'Koleksi apparel resmi bertema kesadaran nalar di mana seluruh keuntungan dialokasikan untuk mendanai operasional riset independen & beasiswa.', 
        price: 'Rp 249.000', 
        image_url: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80', 
        action_text: 'Kunjungi Malaka Store Resmi', 
        link_url: 'https://malakaproject.id', 
        order_index: 2 
      },
      { 
        id: 'i3', 
        profile_id: '1e88343e-74f0-4595-8e11-3efa40ea9edc', 
        title: 'Kanal Donasi Beasiswa Warga & Bantuan UKT', 
        category: 'Inisiatif Gotong Royong Publik', 
        description: 'Kanal crowdfunding resmi di Kitabisa yang telah menyalurkan lebih dari Rp 10,7 Miliar untuk biaya kuliah penuh ribuan mahasiswa daerah berprestasi.', 
        price: 'Gotong Royong', 
        image_url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80', 
        action_text: 'Salurkan Donasi di Kitabisa', 
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
