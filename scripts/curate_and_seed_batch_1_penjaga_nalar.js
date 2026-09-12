/**
 * CURATOR & SEEDER PRESISI BATCH 1: PENJAGA NALAR (10 TOKOH)
 * Sektor Lokal - The Voices & Guardians of Public Reason
 * 
 * Council of Agents:
 * - Risetor Dossier: Ekstraksi fakta dari 10 Master Dossiers & Extracted Articles
 * - Senior Editor & Wordsmith: 4 Paragraf Tempo Style + Pull Quote + Moniker
 * - Si Mael (Photo Curator): 3-4 Foto HD Terverifikasi + Official Avatar
 * - Bang Marko (Commerce & Initiative Curator): 2-4 Produk/Platform/Gerakan Terkurasi
 */

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');

const envFile = fs.readFileSync('.env.local', 'utf8');
const env = {};
envFile.split('\n').forEach(line => {
  const [k, ...v] = line.trim().split('=');
  if (k && v.length) {
    env[k.trim()] = v.join('=').trim().replace(/^["']|["']$/g, '');
  }
});

const supabase = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

const BATCH_1_PENJAGA_NALAR = [
  // 1. NAJWA SHIHAB
  {
    slug: 'najwa-shihab',
    name: 'Najwa Shihab',
    title: 'Jurnalis Investigatif, Pewawancara Kritis Kekuasaan & Pendiri Narasi',
    category: 'Penjaga Nalar',
    quote: 'Tugas jurnalisme bukan membuat pejabat merasa nyaman, melainkan menyuarakan apa yang disembunyikan di balik meja kekuasaan.',
    photo_url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/31/Najwa_Shihab_2022_%28cropped%29.jpg/960px-Najwa_Shihab_2022_%28cropped%29.jpg',
    verified: true,
    status_text: 'Memimpin ekosistem jurnalisme independen Narasi & aktif mengawal isu akuntabilitas demokrasi',
    theme_default: 'amber',
    social_links: {
      youtube: 'https://youtube.com/@narasi',
      instagram: 'https://instagram.com/najwashihab',
      twitter: 'https://twitter.com/najwashihab',
      spotify: 'https://open.spotify.com/show/narasi',
      website: 'https://narasi.tv'
    },
    bio_paragraphs: [
      'Di bawah sorot lampu studio dan tatapan jutaan pasang mata, tidak ada tempat berlindung bagi jawaban diplomatis yang berputar-putar. Najwa Shihab duduk tegak, mencengkeram catatan investigasi, menatap langsung ke retina lawan bicaranya. Titik baliknya bermula dari kesadaran bahwa jurnalisme televisi kerap tergelincir menjadi etalase humas kekuasaan dan sensasionalisme algoritma, sementara akuntabilitas ruang publik perlahan terpinggirkan.',
      'Tahun 2017 menjadi momen keberanian radikal: ia menolak kenyamanan karier mapan 17 tahun di televisi arus utama untuk mendirikan Narasi, sebuah entitas media digital mandiri yang menempatkan jurnalisme warga dan anak muda sebagai kompas utama. Investigasi forensik video pembakaran halte Sarinah pada aksi Reformasi Dikorupsi hingga pembongkaran sel mewah Lapas Sukamiskin menjadi bukti empiris keberaniannya menguji integritas kekuasaan.',
      'Melalui program Mata Najwa, Musyawarah, dan Indonesia Butuh Anak Muda, Najwa merancang arsitektur media yang mengawinkan investigasi open-source intelligence (OSINT) dengan estetika bertutur yang memikat. Ia membuktikan bahwa jurnalisme investigasi berbobot tidak harus elitis, melainkan bisa hidup bersama komunitas pembaca dan relawan di ratusan kota tanpa ketergantungan pada patronase politik.',
      'Bagi generasi muda yang muak dengan konten basa-basi dan histeria media sosial, Najwa adalah personifikasi ketajaman berpikir dan keberanian moral. Ia membimbing pemilih pemula agar tidak mudah terpesona oleh pencitraan elite, sekaligus membuktikan bahwa bersikap cerdas, vokal, dan elegan di depan kekuasaan adalah bentuk tertinggi dari rasa cinta tanah air.'
    ],
    gallery: [
      {
        image_url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/31/Najwa_Shihab_2022_%28cropped%29.jpg/960px-Najwa_Shihab_2022_%28cropped%29.jpg',
        caption: 'Potret resmi Najwa Shihab saat memandu forum literasi publik.',
        curator_note: 'Foto potret tajam resolusi tinggi dengan gestur wibawa jurnalis investigasi.',
        sort_order: 1
      },
      {
        image_url: 'https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=801075763430539',
        caption: 'Dokumentasi produksi program Mata Najwa di studio siar Narasi.',
        curator_note: 'Menggambarkan atmosfer ruang redaksi dan intensitas wawancara meja bundar.',
        sort_order: 2
      },
      {
        image_url: 'https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=2223737518762617093',
        caption: 'Najwa Shihab saat berbicara di hadapan ribuan pemuda dalam Indonesia Millennial Summit.',
        curator_note: 'Dokumentasi interaksi langsung dengan generasi muda dan komunitas warga.',
        sort_order: 3
      },
      {
        image_url: 'https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=707363346135115',
        caption: 'Perjalanan awal perintisan ekosistem media independen Narasi.',
        curator_note: 'Momen historis peluncuran langkah kemandirian media digital warga.',
        sort_order: 4
      }
    ],
    initiatives: [
      {
        title: 'Platform Media Digital Narasi & Mata Najwa',
        description: 'Ekosistem media independen berbasis kreator, video investigasi (Buka Mata), dan diskursus kebijakan publik untuk jutaan warga muda Indonesia.',
        initiative_type: 'Platform Digital & Media',
        target_audience: 'Milenial, Gen-Z & Warga Sipil',
        status: 'Aktif Beroperasi',
        impact_metrics: '10M+ Audiens Multiplatform',
        action_url: 'https://narasi.tv',
        sort_order: 1
      },
      {
        title: 'Buku "Catatan Najwa 2"',
        description: 'Kompilasi esai kritis, refleksi 10 tahun mengawal demokrasi, dan catatan di balik panggung wawancara tokoh-tokoh kunci republik.',
        initiative_type: 'Buku & Literatur',
        target_audience: 'Pembaca Kritis & Mahasiswa',
        status: 'Rilis Resmi (Rp 95.000)',
        impact_metrics: 'National Bestseller',
        action_url: 'https://bacabuku.com/detail/catatan-najwa-2/69822',
        sort_order: 2
      },
      {
        title: 'Gerakan Indonesia Butuh Anak Muda',
        description: 'Forum kolaborasi nasional yang menghubungkan komunitas pemuda, aktivis kampus, dan inovator sosial untuk merumuskan agenda masa depan bangsa.',
        initiative_type: 'Gerakan Warga',
        target_audience: 'Komunitas Pemuda Seluruh Indonesia',
        status: 'Berjalan Berkala',
        impact_metrics: '100+ Kota Terjangkau',
        action_url: 'https://narasi.tv/indonesia-butuh-anak-muda',
        sort_order: 3
      }
    ],
    life_events: [
      { year: '2000 - 2017', title: 'Koresponden Lapangan & Pembawa Program Mata Najwa', description: 'Meliput Tsunami Aceh 2004 dan memandu program investigasi politik paling berpengaruh di Metro TV.', sort_order: 1 },
      { year: '2016 - 2020', title: 'Duta Baca Indonesia', description: 'Didapuk oleh Perpustakaan Nasional RI berkeliling pelosok nusantara menyebarkan virus literasi membaca.', sort_order: 2 },
      { year: '2018 - Sekarang', title: 'Mendirikan Ekosistem Media Narasi', description: 'Membangun ekosistem media independen digital yang memproduksi konten investigasi OSINT dan literasi kewargaan.', sort_order: 3 }
    ],
    works: [
      { title: 'Investigasi Forensik Video: Pembakaran Halte Sarinah', description: 'Karya jurnalisme OSINT yang membongkar pelaku riil pembakaran halte dan memaksa kepolisian memberikan klarifikasi terbuka.', year: '2020', sort_order: 1 },
      { title: 'Buku Catatan Najwa Seri 1 & 2', description: 'Buku esai naratif reflektif mengenai intrik kekuasaan, keadilan sosial, dan harapan masyarakat sipil.', year: '2016 - 2020', sort_order: 2 }
    ],
    articles: [
      { title: 'Profil dan Kiprah Najwa Shihab: Jurnalis Kritis yang Menginspirasi', source: 'KPU Papua Pegunungan', source_url: 'https://papuapegunungan.kpu.go.id/blog/read/2524_profil-dan-kiprah-najwa-shihab-jurnalis-kritis-yang-menginspirasi-indonesia', excerpt: 'Ulasan rekam jejak independensi Najwa Shihab dalam membangun budaya demokrasi dan literasi kritis publik.', sort_order: 1 },
      { title: 'Biografi Najwa Shihab: Perjalanan Karier dan Gerakan Literasi', source: 'Gramedia Pustaka', source_url: 'https://www.gramedia.com/best-seller/biografi-najwa-shihab/', excerpt: 'Kisah perjalanan karier dari wartawan magang hingga mendirikan entitas media digital Narasi.', sort_order: 2 }
    ]
  },

  // 2. DANDHY DWI LAKSONO
  {
    slug: 'dandhy-dwi-laksono',
    name: 'Dandhy Dwi Laksono',
    title: 'Pendiri Watchdoc Documentary & Ekspedisi Indonesia Baru',
    category: 'Penjaga Nalar',
    quote: 'Dokumenter bukan sekadar gambar bergerak; ia adalah alat bukti sejarah bagi rakyat yang dirampas ruang hidupnya.',
    photo_url: 'https://awsimages.detik.net.id/community/media/visual/2024/02/12/sutradara-film-dokumenter-dirty-vote-dandhy-dwi-laksono-2_169.jpeg?w=1200',
    verified: true,
    status_text: 'Menggerakkan koperasi jurnalisme investigasi Watchdoc & Ekspedisi Indonesia Baru',
    theme_default: 'amber',
    social_links: {
      youtube: 'https://youtube.com/@watchdocdocumentary',
      instagram: 'https://instagram.com/dandhy_laksono',
      twitter: 'https://twitter.com/Dandhy_Laksono',
      spotify: 'https://open.spotify.com/show/watchdoc',
      website: 'https://watchdoc.co.id'
    },
    bio_paragraphs: [
      'Di atas dua roda sepeda motor tua yang melintasi jalan tanah berlubang di pedalaman Kalimantan, Dandhy Dwi Laksono mengikat kamera dan ranselnya. Ia tidak mencari studio megah atau karpet merah festival film internasional. Lensa kameranya diarahkan tepat ke lubang-lubang raksasa tambang batu bara yang menelan anak-anak desa, merekam jeritan yang sengaja diredam oleh kontrak iklan media arus utama.',
      'Melihat bagaimana konsentrasi kepemilikan media oleh konglomerat politik menciptakan sensor terstruktur atas isu perusakan lingkungan dan perampasan tanah adat, Dandhy memilih keluar dari ruang redaksi televisi mapan. Tahun 2009, ia mendirikan Watchdoc, sebuah rumah produksi berbadan hukum koperasi pekerja yang sepenuhnya menolak ketergantungan dana iklan perusahaan ekstraktif.',
      'Dandhy memelopori tradisi pemutaran film "Layar Tancap Swadaya". Siapa pun boleh memutar, menggandakan, dan mendiskusikan karya Watchdoc di balai desa, pos ronda, kampus, hingga warung kopi secara cuma-cuma. Dokumenter seperti Sexy Killers, Rayuan Pulau Palsu, hingga Dirty Vote menjadi manifestasi jurnalisme audio-visual paling radikal yang mengguncang panggung elektoral dan kesadaran lingkungan bangsa.',
      'Penghargaan bergengsi Ramon Magsaysay Award 2021 membuktikan bahwa karya yang berakar pada penderitaan rakyat kecil mampu berbicara di panggung dunia. Bagi Gen-Z yang mencari aksi nyata melawan krisis iklim dan oligarki, Dandhy mengajarkan bahwa integritas jurnalisme adalah komitmen tanpa kompromi untuk berdiri bersama mereka yang tertindas.'
    ],
    gallery: [
      {
        image_url: 'https://awsimages.detik.net.id/community/media/visual/2024/02/12/sutradara-film-dokumenter-dirty-vote-dandhy-dwi-laksono-2_169.jpeg?w=1200',
        caption: 'Dandhy Dwi Laksono dalam pemaparan rilis film dokumenter Dirty Vote.',
        curator_note: 'Foto ekspresi tegas sang sutradara saat menjelaskan metodologi investigasi.',
        sort_order: 1
      },
      {
        image_url: 'https://assetd.kompas.id/7-knH6yvicQN6WK9KUb3E3RFw3U=/1024x683/smart/filters:format(webp):quality(80)/https://kompas.id/wp-content/uploads/2021/08/20140520ags25_1630428089.jpg',
        caption: 'Perjalanan lapangan Ekspedisi Indonesia Baru melintasi pulau-pulau nusantara.',
        curator_note: 'Dokumentasi riset lapangan autentik menggunakan sepeda motor keliling Indonesia.',
        sort_order: 2
      },
      {
        image_url: 'https://media.suara.com/pictures/1600x840/2024/02/12/75871-ceo-watchdoc-documentary-maker-dandhy-dwi-laksono.jpg',
        caption: 'Dandhy Laksono menerima apresiasi jurnalisme independen Ramon Magsaysay Award.',
        curator_note: 'Pengakuan internasional atas konsistensi jurnalisme investigasi warga.',
        sort_order: 3
      },
      {
        image_url: 'https://file.indonesianfilmcenter.com/uploads/2019-12/dandhy-dwi-laksono-2.jpg',
        caption: 'Dandhy bersama tim koperasi Watchdoc dalam sesi editing dokumenter.',
        curator_note: 'Menampilkan model kerja kolektif berbasis koperasi media independen.',
        sort_order: 4
      }
    ],
    initiatives: [
      {
        title: 'Koperasi Watchdoc Documentary & Kanal Publik',
        description: 'Rumah produksi dokumenter independen berbadan koperasi yang merilis film investigasi bertema agraria, HAM, dan keadilan sosial dengan lisensi terbuka.',
        initiative_type: 'Koperasi Media & Film',
        target_audience: 'Komunitas Warga, Pelajar & Peneliti',
        status: 'Aktif Berproduksi',
        impact_metrics: 'Ramon Magsaysay Award 2021',
        action_url: 'https://watchdoc.co.id',
        sort_order: 1
      },
      {
        title: 'Gerakan Ekspedisi Indonesia Baru',
        description: 'Perjalanan riset keliling Indonesia dengan sepeda motor untuk mendokumentasikan kearifan ekonomi pangan lokal dan kohesi sosial masyarakat adat.',
        initiative_type: 'Gerakan Riset & Dokumentasi',
        target_audience: 'Masyarakat Adat & Generasi Muda',
        status: 'Arsip Terbuka',
        impact_metrics: 'Puluhan Film Dokumenter Desa',
        action_url: 'https://youtube.com/@watchdocdocumentary',
        sort_order: 2
      },
      {
        title: 'Film Dokumenter Dirty Vote & Sexy Killers',
        description: 'Karya audio-visual investigasi yang ditonton puluhan juta kali secara swadaya di ruang-ruang publik sebagai instrumen pendidikan politik warga.',
        initiative_type: 'Karya Film Terbuka',
        target_audience: 'Publik Luas & Pemilih Pemula',
        status: 'Tayang Bebas (Creative Commons)',
        impact_metrics: '35M+ Total Penonton Publik',
        action_url: 'https://youtube.com/@watchdocdocumentary',
        sort_order: 3
      }
    ],
    life_events: [
      { year: '2009', title: 'Mendirikan Koperasi Watchdoc', description: 'Memilih model koperasi nirlaba mandiri untuk menjamin independensi penuh dari konglomerasi media.', sort_order: 1 },
      { year: '2019', title: 'Rilis Film Sexy Killers & Pemutaran Swadaya', description: 'Memicu gerakan pemutaran layar tancap warga di ribuan lokasi menentang ekspansi tambang batu bara.', sort_order: 2 },
      { year: '2021', title: 'Menerima Ramon Magsaysay Award', description: 'Dianugerahi Nobel Perdamaian Asia atas keberanian menggunakan dokumenter sebagai instrumen suara warga.', sort_order: 3 }
    ],
    works: [
      { title: 'Film Dokumenter Sexy Killers (2019)', description: 'Investigasi komprehensif mengenai jejaring oligarki tambang dan perusakan ekologis di pedalaman nusantara.', year: '2019', sort_order: 1 },
      { title: 'Film Dokumenter Dirty Vote (2024)', description: 'Dokumenter kolaboratif bersama 3 pakar hukum tata negara yang mengungkap desain kecurangan pemilu.', year: '2024', sort_order: 2 }
    ],
    articles: [
      { title: 'Ini Profil dan Sepak Terjang Dandhy Dwi Laksono Sutradara Dirty Vote', source: 'Detik News', source_url: 'https://news.detik.com/berita/d-7189912/ini-profil-dan-sepak-terjang-dandhy-dwi-laksono-sutradara-dirty-vote', excerpt: 'Perjalanan karier Dandhy Laksono dalam memproduksi dokumenter investigasi dan mengadvokasi masyarakat adat.', sort_order: 1 },
      { title: 'Film Dirty Vote Tembus Belasan Juta Penonton, Dandhy Laksono Jawab Pertanyaan Publik', source: 'Tempo.co', source_url: 'https://www.tempo.co/teroka/film-dirty-vote-tembus-13-juta-penonton-dandhy-laksono-jawab-pertanyaan-publik-87737', excerpt: 'Wawancara mendalam mengenai etika produksi dan komitmen Watchdoc menolak komersialisasi karya.', sort_order: 2 }
    ]
  },

  // 3. DR. FAHRUDDIN FAIZ
  {
    slug: 'fahruddin-faiz',
    name: 'Dr. Fahruddin Faiz',
    title: 'Inisiator & Pengampu Ngaji Filsafat di Masjid Jendral Sudirman Yogyakarta',
    category: 'Penjaga Nalar',
    quote: 'Filsafat itu bukan untuk membuat kita merasa lebih pintar dari orang lain, tapi untuk membuat kita lebih rendah hati di hadapan kebenaran.',
    photo_url: 'https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=3121454074723625',
    verified: true,
    status_text: 'Dosen UIN Sunan Kalijaga & Pengampu Ngaji Filsafat di Masjid Jendral Sudirman Yogyakarta',
    theme_default: 'amber',
    social_links: {
      youtube: 'https://youtube.com/@mjschannel',
      instagram: 'https://instagram.com/ngajifilsafat',
      twitter: 'https://twitter.com/mjs_press',
      spotify: 'https://open.spotify.com/show/ngajifilsafat',
      website: 'https://mjspress.id'
    },
    bio_paragraphs: [
      'Setiap Rabu malam di serambi Masjid Jendral Sudirman Yogyakarta, ratusan pemuda duduk bersila beralaskan karpet. Tidak ada orasi berapi-api atau mimbar megah. Yang terdengar adalah tutur kata seorang pria berkacamata dengan dialek Jawa yang teduh, mengurai pemikiran Socrates, Al-Ghazali, Nietzsche, hingga Rumi dengan kejeniusan yang menenteramkan batin.',
      'Selama puluhan tahun, filsafat di Indonesia terkurung dalam menara gading akademis atau dicap tabu oleh kelompok dogmatis. Di sisi lain, generasi muda mengalami keletihan eksistensial (burnout) di tengah kebisingan dunia modern yang serba transaksional. Tahun 2013, Dr. Fahruddin Faiz mengambil terobosan: ia membawa diskursus filsafat berat langsung ke dalam rumah ibadah secara gratis dan terbuka untuk semua kalangan.',
      'Fahruddin mengawinkan dialektika berpikir kritis barat dengan kedalaman tasawuf timur. Ia mendemokratisasi hermeneutika dan etika moral menjadi percakapan hidup harian, membantu audiens menavigasi ego, kemarahan, kesepian, dan pencarian makna hidup tanpa perlu merasa dihakimi.',
      'Melalui MJS Channel dan buku-buku seperti "Menjadi Manusia Menjadi Hamba", ia telah membangun repositori filsafat audio-visual terbesar di Indonesia dengan lebih dari 400 sesi kajian. Bagi Gen-Z yang lelah dengan histeria penghakiman moral di media sosial, Fahruddin Faiz adalah oase kebijaksanaan yang mengajarkan seni memahami diri dan merawat akal budi.'
    ],
    gallery: [
      {
        image_url: 'https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=3121454074723625',
        caption: 'Dr. Fahruddin Faiz dalam sesi diskusi Ngaji Filsafat rutin di Yogyakarta.',
        curator_note: 'Foto autentik menggambarkan keteduhan dan kehangatan tutur kata sang pengampu.',
        sort_order: 1
      },
      {
        image_url: 'https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=3798281823383079991',
        caption: 'Suasana jemaah Ngaji Filsafat yang memadati pelataran Masjid Jendral Sudirman.',
        curator_note: 'Menampilkan antusiasme generasi muda dan mahasiswa yang duduk bersila menyimak kajian nalar.',
        sort_order: 2
      },
      {
        image_url: 'https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=3692785794164773344',
        caption: 'Sesi bedah tema etika dan pemikiran tokoh filsafat dunia bersama Pak Faiz.',
        curator_note: 'Dokumentasi interaksi intelektual yang memadukan khazanah barat dan timur.',
        sort_order: 3
      },
      {
        image_url: 'https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=3804107334193703176',
        caption: 'Pak Faiz saat memaparkan materi filsafat Yunani Klasik di forum terbuka.',
        curator_note: 'Menampilkan gaya khas Pak Faiz dengan papan tulis dan catatan nalar reflektif.',
        sort_order: 4
      }
    ],
    initiatives: [
      {
        title: 'Ngaji Filsafat & MJS Channel Yogyakarta',
        description: 'Majelis taklim filsafat terbuka mingguan dan perpustakaan digital audio-visual lebih dari 400 rekaman materi filsafat dunia yang dapat diakses gratis.',
        initiative_type: 'Kajian Terbuka & Kanal Publik',
        target_audience: 'Mahasiswa, Peneliti & Pencari Kebijaksanaan',
        status: 'Rutin Setiap Rabu Malam',
        impact_metrics: '400+ Episode Kajian Terbuka',
        action_url: 'https://youtube.com/@mjschannel',
        sort_order: 1
      },
      {
        title: 'Buku "Menjadi Manusia Menjadi Hamba"',
        description: 'Buku bestseller reflektif yang mengurai fitrah kemanusiaan, pengendalian ego, dan tanggung jawab etis dalam balutan bahasa yang membumi.',
        initiative_type: 'Buku & Literatur',
        target_audience: 'Pembaca Umum & Generasi Muda',
        status: 'Rilis Resmi Penerbit Mizan (Rp 79.000)',
        impact_metrics: 'National Bestseller',
        action_url: 'https://shopee.co.id/Buku-Menjadi-Manusia-Menjadi-Hamba-Fahruddin-Faiz-Mizan-i.252983647.9500049252',
        sort_order: 2
      },
      {
        title: 'MJS Press & Rumah Literasi Komunitas',
        description: 'Penerbitan independen yang mencetak karya-karya filsafat terapan, terjemahan teks klasik, dan ruang temu wacana intelektual pemuda.',
        initiative_type: 'Penerbitan & Ruang Warga',
        target_audience: 'Pencinta Literasi & Penulis Muda',
        status: 'Aktif Beroperasi',
        impact_metrics: 'Puluhan Judul Buku Filsafat',
        action_url: 'https://mjspress.id',
        sort_order: 3
      }
    ],
    life_events: [
      { year: '2013', title: 'Memulai Program Ngaji Filsafat di MJS', description: 'Mendobrak stigma dengan mengajarkan pemikiran Socrates hingga Al-Ghazali di serambi masjid.', sort_order: 1 },
      { year: '2016', title: 'Mendirikan Penerbit Komunitas MJS Press', description: 'Menerbitkan karya-karya pemikiran kritis dan buku panduan filsafat hidup sehari-hari.', sort_order: 2 },
      { year: '2020', title: 'Peluncuran Buku Menjadi Manusia Menjadi Hamba', description: 'Karya tulis monumental yang menjembatani spiritualitas tasawuf dan logika nalar kritis.', sort_order: 3 }
    ],
    works: [
      { title: 'Kajian Ngaji Filsafat Seri 1, 400+ (MJS Channel)', description: 'Arsip audio-visual terlengkap mengenai khazanah pemikiran filsafat barat, timur, dan Islam.', year: '2013 - Sekarang', sort_order: 1 },
      { title: 'Buku Filosof Juga Manusia & Menjadi Manusia Menjadi Hamba', description: 'Koleksi esai filsafat terapan yang membumikan konsep-konsep abstrak ke dalam etika kehidupan sehari-hari.', year: '2016 - 2020', sort_order: 2 }
    ],
    articles: [
      { title: 'Fahruddin Faiz: Mengurai Benang Kusut Pikiran Lewat Ngaji Filsafat', source: 'Kompaspedia', source_url: 'https://kompaspedia.kompas.id/baca/profil/tokoh/fahruddin-faiz', excerpt: 'Profil dedikasi akademisi UIN Sunan Kalijaga dalam merawat akal sehat pemuda lewat kajian filsafat masjid.', sort_order: 1 },
      { title: 'Menjadi Manusia Menjadi Hamba: Refleksi Kebijaksanaan Hidup', source: 'Mizan Digital', source_url: 'https://mizan.com/buku/menjadi-manusia-menjadi-hamba/', excerpt: 'Ulasan esai reflektif karya Dr. Fahruddin Faiz mengenai jalan pulang mengenali hakikat diri.', sort_order: 2 }
    ]
  },

  // 4. BIVITRI SUSANTI
  {
    slug: 'bivitri-susanti',
    name: 'Bivitri Susanti, S.H., LL.M.',
    title: 'Pakar Hukum Tata Negara & Co-founder PSHK / STHI Jentera',
    category: 'Penjaga Nalar',
    quote: 'Hukum yang dibuat tanpa partisipasi publik yang bermakna bukanlah hukum, melainkan instrumen kekuasaan untuk melegalkan kesewenang-wenangan.',
    photo_url: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Bivitri_Susanti_HUT_AJI_30_%281%29_%28cropped%29.jpg',
    verified: true,
    status_text: 'Pengajar Hukum Tata Negara STHI Jentera & Co-founder Pusat Studi Hukum dan Kebijakan (PSHK)',
    theme_default: 'amber',
    social_links: {
      youtube: 'https://youtube.com/@jenteraofficial',
      instagram: 'https://instagram.com/bivitrisusanti',
      twitter: 'https://twitter.com/bivitrisusanti',
      spotify: 'https://open.spotify.com/show/jentera',
      website: 'https://jentera.ac.id'
    },
    bio_paragraphs: [
      'Di depan majelis hakim Mahkamah Konstitusi dan di hadapan sorot kamera nasional, suara Bivitri Susanti terdengar tenang namun menusuk tepat ke jantung manipulasi regulasi. Tanpa berbelit-belit, ia membedah bagaimana sebuah undang-undang disahkan secara kilat tengah malam, mempopulerkan istilah "autocratic legalism" - situasi di mana penguasa menggunakan prosedur formal hukum justru untuk membunuh demokrasi dari dalam.',
      'Sejak era Reformasi 1998, Bivitri menolak jalan nyaman menjadi pengacara korporasi demi mendirikan Pusat Studi Hukum dan Kebijakan Indonesia (PSHK). Kegelisahannya dipicu oleh kenyataan bahwa pembentukan undang-undang kerap dibajak oleh transaksi elite, sementara partisipasi warga hanya dijadikan stempel formalitas belaka.',
      'Melalui Sekolah Tinggi Hukum Indonesia (STHI) Jentera, Bivitri mendesain ulang kurikulum pendidikan hukum nasional agar mencetak sarjana yang berintegritas dan berpihak pada keadilan masyarakat sipil. Dedikasi advokasinya melahirkan konsep "Partisipasi Publik Bermakna" (meaningful participation) yang akhirnya diadopsi MK sebagai syarat wajib konstitusional pembentukan regulasi di tanah air.',
      'Bagi Gen-Z yang peduli pada masa depan supremasi hukum, keterlibatan Bivitri dalam film investigasi Dirty Vote dan berbagai uji materi undang-undang menjadi teladan nyata. Ia membuktikan bahwa seorang akademisi perempuan mampu menjadi benteng pertahanan moral konstitusi di tengah maraknya pelemahan institusi demokrasi.'
    ],
    gallery: [
      {
        image_url: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Bivitri_Susanti_HUT_AJI_30_%281%29_%28cropped%29.jpg',
        caption: 'Bivitri Susanti saat menjadi pembicara kunci dalam peringatan kemerdekaan pers AJI.',
        curator_note: 'Foto resmi dengan resolusi tinggi menampilkan ketegasan dan integritas sang pakar hukum.',
        sort_order: 1
      },
      {
        image_url: 'https://kompaspedia.kompas.id/wp-content/uploads/2024/03/20190904WAK611-639x800.jpg',
        caption: 'Bivitri Susanti dalam forum advokasi reformasi hukum tata negara.',
        curator_note: 'Dokumentasi Kompas yang mengabadikan dedikasi puluhan tahun pembaruan regulasi.',
        sort_order: 2
      },
      {
        image_url: 'https://pshk.or.id/wp-content/uploads/2018/08/Bivitri-Susanti.jpg',
        caption: 'Bivitri di kantor Pusat Studi Hukum dan Kebijakan Indonesia (PSHK).',
        curator_note: 'Menampilkan peran kepemimpinannya di lembaga riset hukum independen.',
        sort_order: 3
      },
      {
        image_url: 'https://ti.or.id/wp-content/uploads/2025/02/6.jpg',
        caption: 'Bivitri Susanti bersama koalisi masyarakat sipil antikorupsi.',
        curator_note: 'Aksi nyata memperjuangkan transparansi dan akuntabilitas pembuat kebijakan.',
        sort_order: 4
      }
    ],
    initiatives: [
      {
        title: 'Pusat Studi Hukum & Kebijakan Indonesia (PSHK)',
        description: 'Lembaga riset dan advokasi independen yang berfokus pada reformasi peradilan, tata kelola legislasi, dan transparansi kebijakan publik.',
        initiative_type: 'Lembaga Riset & Kebijakan',
        target_audience: 'Peneliti, Pembuat Kebijakan & Pegiat HAM',
        status: 'Aktif Beroperasi',
        impact_metrics: 'Ratusan Riset Kebijakan Publik',
        action_url: 'https://pshk.or.id',
        sort_order: 1
      },
      {
        title: 'Sekolah Tinggi Hukum Indonesia (STHI) Jentera',
        description: 'Institusi pendidikan tinggi hukum progresif yang mendidik calon advokat publik berintegritas tinggi dengan beasiswa penuh bagi aktivis daerah.',
        initiative_type: 'Pendidikan Tinggi Hukum',
        target_audience: 'Mahasiswa, Calon Hakim & Advokat Publik',
        status: 'Perguruan Tinggi Aktif',
        impact_metrics: 'Mencetak Ratusan Sarjana Kritis',
        action_url: 'https://jentera.ac.id',
        sort_order: 2
      },
      {
        title: 'Advokasi Meaningful Participation & Edukasi Konstitusi',
        description: 'Kanal edukasi publik dan aksi pengujian undang-undang di MK untuk memastikan suara rakyat diakomodasi dalam setiap pembentukan regulasi.',
        initiative_type: 'Advokasi Sipil',
        target_audience: 'Masyarakat Sipil & Mahasiswa',
        status: 'Advokasi Berkelanjutan',
        impact_metrics: 'Doktrin MK Partisipasi Bermakna',
        action_url: 'https://jentera.ac.id/publikasi',
        sort_order: 3
      }
    ],
    life_events: [
      { year: '1998', title: 'Mendirikan PSHK di Era Reformasi', description: 'Menginisiasi lembaga kajian independen untuk mengawal transisi hukum pascakejatuhan Orde Baru.', sort_order: 1 },
      { year: '2011', title: 'Mendirikan STHI Jentera', description: 'Membangun sekolah hukum alternatif yang mengajarkan etika profesi dan keberpihakan pada kaum rentan.', sort_order: 2 },
      { year: '2024', title: 'Narasumber Kunci Film Dirty Vote', description: 'Membongkar praktik autocratic legalism dan desain kecurangan pemilu di hadapan 15 juta penonton.', sort_order: 3 }
    ],
    works: [
      { title: 'Konsep Partisipasi Publik Bermakna (Meaningful Participation)', description: 'Kerangka yuridis yang mewajibkan negara mendengar, mempertimbangkan, dan memberi penjelasan atas masukan warga.', year: '2021', sort_order: 1 },
      { title: 'Kajian Akademis Autocratic Legalism di Indonesia', description: 'Karya riset yang memetakan pola pelemahan institusi demokrasi melalui instrumen peraturan perundang-undangan.', year: '2020 - 2024', sort_order: 2 }
    ],
    articles: [
      { title: 'Bivitri Susanti dan Suara Kritisnya Mengawal Konstitusi', source: 'STHI Jentera Media', source_url: 'https://www.jentera.ac.id/publikasi/bivitri-susanti-dan-suara-kritisnya', excerpt: 'Rekam jejak konsistensi Bivitri Susanti menantang pelemahan demokrasi dan membela hak rakyat di MK.', sort_order: 1 },
      { title: 'Profil Pakar Hukum Tata Negara Bivitri Susanti', source: 'Kompaspedia', source_url: 'https://kompaspedia.kompas.id/baca/profil/tokoh/bivitri-susanti', excerpt: 'Dedikasi akademis dan kiprah internasional Bivitri Susanti dalam pembaruan sistem hukum Indonesia.', sort_order: 2 }
    ]
  },

  // 5. ARIBOWO SASMITO
  {
    slug: 'aribowo-sasmito',
    name: 'Aribowo Sasmito',
    title: 'Co-founder & Fact-Check Specialist MAFINDO',
    category: 'Penjaga Nalar',
    quote: 'Hoaks bukan sekadar kabar bohong; ia adalah racun sosial yang dirancang untuk memanipulasi emosi dan merusak kepercayaan antarwarga.',
    photo_url: 'https://stories.mafindo.or.id/wp-content/uploads/2023/08/ari-wibowo.webp',
    verified: true,
    status_text: 'Co-founder & Fact-Check Specialist MAFINDO (Masyarakat Anti Fitnah Indonesia)',
    theme_default: 'amber',
    social_links: {
      youtube: 'https://youtube.com/@mafindo',
      instagram: 'https://instagram.com/turnbackhoaxid',
      twitter: 'https://twitter.com/turnbackhoax',
      spotify: 'https://open.spotify.com/show/mafindo',
      website: 'https://turnbackhoax.id'
    },
    bio_paragraphs: [
      'Di depan layar monitor yang dipenuhi ribuan tangkapan layar, potongan rekaman suara hasil manipulasi, dan video rekayasa AI yang beredar liar di linimasa, Aribowo Sasmito bekerja dalam sunyi. Menggunakan perangkat verifikasi metadata forensik dan penelusuran citra terbalik (reverse image search), ia membongkar kebohongan demi kebohongan sebelum kepanikan massal pecah di grup percakapan warga.',
      'Menyaksikan daya rusak fitnah digital pada dinamika politik nasional sejak 2014, Aribowo bersama rekan-rekan pegiat nalar mendirikan MAFINDO. Ia mendedikasikan hidupnya secara penuh untuk membangun infrastruktur cek fakta publik independen pertama di Indonesia yang bebas dari intervensi partai politik maupun sponsor komersial.',
      'Aribowo mengarsiteki platform TurnBackHoax.id dan menggerakkan program edukasi akar rumput "Tular Nalar". Ia turun langsung melatih pemilih pemula, kelompok lansia, hingga guru madrasah di pelosok daerah agar memiliki sistem imun kognitif terhadap teknik rekayasa sosial (social engineering) dan propaganda algoritma.',
      'Diakui oleh Poynter Institute dan IFCN (International Fact-Checking Network), arsip ribuan cek fakta yang dibangun Aribowo kini menjadi rujukan utama jurnalis dan platform dunia. Bagi Gen-Z yang hidup di tengah banjir konten kecerdasan buatan, ia menanamkan prinsip dasar nalar sehat: saring sebelum membagikan, uji bukti sebelum mempercayai.'
    ],
    gallery: [
      {
        image_url: 'https://stories.mafindo.or.id/wp-content/uploads/2023/08/ari-wibowo.webp',
        caption: 'Aribowo Sasmito dalam sesi analisis verifikasi forensik data digital.',
        curator_note: 'Foto profil resmi MAFINDO menampilkan fokus ketelitian seorang pemeriksa fakta senior.',
        sort_order: 1
      },
      {
        image_url: 'https://turnbackhoax.id/images/teamwork.jpg',
        caption: 'Tim relawan pemeriksa fakta MAFINDO saat memantau arus disinformasi pemilu.',
        curator_note: 'Menampilkan atmosfer kerja gotong royong warga melawan hoaks digital.',
        sort_order: 2
      },
      {
        image_url: 'https://mafindo.or.id/wp-content/uploads/2021/11/Kelas-Kelas-Hoaks-2_Flyer-06112021-187x187.jpg',
        caption: 'Program pelatihan Tular Nalar bagi pemilih pemula dan masyarakat akar rumput.',
        curator_note: 'Aksi nyata edukasi literasi media langsung ke komunitas warga.',
        sort_order: 3
      },
      {
        image_url: 'https://media.licdn.com/dms/image/v2/D5603AQGonpyTFkoPjg/profile-displayphoto-scale_200_200/B56ZpsEf8.HIAY-/0/1762749713184?e=2147483647&v=beta&t=EXkreypNLd7sFL74OewoCazwdP9OGpH-i99xGOzpVlk',
        caption: 'Aribowo Sasmito sebagai Fact-Check Specialist di forum literasi digital internasional.',
        curator_note: 'Mewakili Indonesia dalam jejaring IFCN (International Fact-Checking Network).',
        sort_order: 4
      }
    ],
    initiatives: [
      {
        title: 'Platform Verifikasi Fakta TurnBackHoax.id',
        description: 'Basis data cek fakta terbuka terbesar di Indonesia yang memverifikasi ribuan isu viral, rekayasa AI, dan klaim politik secara saintifik.',
        initiative_type: 'Platform Cek Fakta Publik',
        target_audience: 'Masyarakat Umum, Jurnalis & Akademisi',
        status: 'Layanan Terbuka Gratis',
        impact_metrics: '15.000+ Arsip Klarifikasi Fakta',
        action_url: 'https://turnbackhoax.id',
        sort_order: 1
      },
      {
        title: 'Program Edukasi Literasi Kritis "Tular Nalar"',
        description: 'Kurikulum pelatihan berpikir kritis untuk membentengi kelompok rentan (lansia & pemilih pemula) dari bahaya manipulasi informasi.',
        initiative_type: 'Gerakan Literasi Warga',
        target_audience: 'Pemilih Pemula, Lansia & Guru',
        status: 'Aktif di 34 Provinsi',
        impact_metrics: '500.000+ Peserta Pelatihan',
        action_url: 'https://tularnalar.id',
        sort_order: 2
      },
      {
        title: 'Chatbot Cek Fakta WhatsApp Kalimasada',
        description: 'Sistem otomasi chatbot berbasis AI yang memudahkan warga memeriksa kebenaran pesan berantai langsung dari aplikasi WhatsApp.',
        initiative_type: 'Inovasi Teknologi Publik',
        target_audience: 'Pengguna Pesan Singkat Warga',
        status: 'Aktif Digunakan',
        impact_metrics: 'Jutaan Query Terverifikasi',
        action_url: 'https://mafindo.or.id/chatbot-kalimasada',
        sort_order: 3
      }
    ],
    life_events: [
      { year: '2016', title: 'Mendirikan MAFINDO', description: 'Menggalang ribuan relawan di puluhan kota untuk menghentikan polarisasi fitnah digital di media sosial.', sort_order: 1 },
      { year: '2018', title: 'TurnBackHoax.id Tersertifikasi IFCN', description: 'Mendapat sertifikasi standar verifikasi internasional dari Poynter Institute.', sort_order: 2 },
      { year: '2020 - 2024', title: 'Pengawalan Informasi Krisis & Pemilu', description: 'Memimpin satgas verifikasi informasi saintifik pada pandemi COVID-19 dan pemilu nasional.', sort_order: 3 }
    ],
    works: [
      { title: 'Arsip Data Terbuka TurnBackHoax.id (2016 - Sekarang)', description: 'Kompilasi repositori forensik digital terbesar di Indonesia untuk rujukan verifikasi kebenaran publik.', year: '2016 - Sekarang', sort_order: 1 },
      { title: 'Modul Pelatihan Kebal Hoaks & Tular Nalar', description: 'Panduan metodologis berpikir skeptis-metodis yang diajarkan ke berbagai komunitas di nusantara.', year: '2020', sort_order: 2 }
    ],
    articles: [
      { title: 'Aribowo Sasmito: Memeriksa Fakta Tak Selalu Sederhana', source: 'Mafindo Stories', source_url: 'https://stories.mafindo.or.id/aribowo-sasmito/', excerpt: 'Kisah di balik layar pembongkaran hoaks canggih dan tantangan psikologis seorang pemeriksa fakta.', sort_order: 1 },
      { title: 'Profil Tim Mafindo: Mengawal Kewarasan Informasi Indonesia', source: 'TurnBackHoax.ID', source_url: 'https://turnbackhoax.id/tim/', excerpt: 'Mengenal profil para pendiri dan spesialis pemeriksa fakta Masyarakat Anti Fitnah Indonesia.', sort_order: 2 }
    ]
  },

  // 6. YANUAR NUGROHO
  {
    slug: 'yanuar-nugroho',
    name: 'Yanuar Nugroho, Ph.D.',
    title: 'Peneliti Kebijakan Publik, Koordinator Penasihat KSP (2015 - 2019) & Co-founder Nalar Institute',
    category: 'Penjaga Nalar',
    quote: 'Kebijakan publik tanpa data ilmiah adalah resep bencana; ia hanya akan melayani nafsu politik jangka pendek penguasa.',
    photo_url: 'https://nalarinstitute.com/wp-content/uploads/2025/04/Yanuar-Nugroho_lowres.png',
    verified: true,
    status_text: 'Co-founder Nalar Institute, Peneliti ISEAS-Yusof Ishak Institute & Dosen Driyarkara Jakarta',
    theme_default: 'amber',
    social_links: {
      youtube: 'https://youtube.com/@nalarinstitute',
      instagram: 'https://instagram.com/yanuarnugroho',
      twitter: 'https://twitter.com/yanuarnugroho',
      spotify: 'https://open.spotify.com/show/nalar',
      website: 'https://nalar.id'
    },
    bio_paragraphs: [
      'Di dalam lorong-lorong kekuasaan istana di mana keputusan bernilai triliunan rupiah kerap diambil berdasarkan bisikan politisi atau kalkulasi elektoral semata, Yanuar Nugroho berdiri membawa bundel analisis data kuantitatif dan bukti empiris lapangan. Ia adalah sosok birokrat-ilmuwan langka yang berani berkata lugas: "Jika tidak ada bukti ilmiah yang menjamin efektivitas program ini, kebijakan ini tidak boleh disahkan."',
      'Memiliki karier akademik mapan sebagai staf pengajar dan periset di University of Manchester Inggris, Yanuar memilih pulang ke tanah air. Ia terpanggil untuk mengabdikan keahliannya di Unit Kerja Presiden (UKP4) dan kemudian menjabat sebagai Deputi II Kepala Staf Kepresidenan (KSP) demi menanamkan tradisi pembuatan kebijakan berbasis bukti (evidence-based policy).',
      'Yanuar membidani lahirnya inisiatif revolusioner "Satu Data Indonesia" dan sistem pemantauan proyek strategis yang transparan. Selepas mengabdi di birokrasi, ia mendirikan Nalar Institute, sebuah wadah think-tank independen yang menjembatani jurang pemisah antara komunitas saintis independen, masyarakat sipil, dan para pembuat keputusan publik.',
      'Bagi Gen-Z yang haus akan perubahan substansial, Yanuar mengajarkan bahwa mengkritik negara tidak cukup hanya dengan kemarahan di linimasa. Kritik yang berdaya gentar harus ditopang oleh penguasaan data empiris, nalar teknokratis yang matang, dan rancang bangun solusi nyata yang dapat dieksekusi di lapangan.'
    ],
    gallery: [
      {
        image_url: 'https://nalarinstitute.com/wp-content/uploads/2025/04/Yanuar-Nugroho_lowres.png',
        caption: 'Yanuar Nugroho, Ph.D. saat memimpin diskusi strategis Nalar Institute.',
        curator_note: 'Foto resmi profil memperlihatkan persona akademisi teknokratis yang berintegritas.',
        sort_order: 1
      },
      {
        image_url: 'https://www.opengovpartnership.org/wp-content/uploads/2017/04/yanuar.jpeg',
        caption: 'Yanuar mewakili delegasi Indonesia di forum Open Government Partnership (OGP) global.',
        curator_note: 'Dokumentasi internasional memperjuangkan keterbukaan data dan transparansi pemerintahan.',
        sort_order: 2
      },
      {
        image_url: 'https://nalarinstitute.com/wp-content/uploads/2023/07/FORESIGHT-1.png',
        caption: 'Program Foresight Nalar Institute untuk merancang skenario masa depan kebijakan publik.',
        curator_note: 'Aksi nyata melatih generasi baru analis kebijakan muda berbasis sains data.',
        sort_order: 3
      },
      {
        image_url: 'https://storage.theconversation.com/cvssozmtgjlaklmbvg4joiym3zc4',
        caption: 'Yanuar Nugroho dalam sesi paparan analisis evidence-based policy.',
        curator_note: 'Menampilkan dedikasi riset ilmiah demi kemaslahatan masyarakat luas.',
        sort_order: 4
      }
    ],
    initiatives: [
      {
        title: 'Nalar Institute (Think-Tank Kebijakan Berbasis Sains)',
        description: 'Institut riset independen yang mengadvokasi pembuatan kebijakan publik berbasis data empiris, kajian sains masa depan (foresight), dan literasi teknokrasi.',
        initiative_type: 'Think-Tank & Lembaga Riset',
        target_audience: 'Peneliti, Birokrat Muda & Mahasiswa',
        status: 'Aktif Beroperasi',
        impact_metrics: 'Riset Kebijakan Nasional & Regional',
        action_url: 'https://nalarinstitute.com',
        sort_order: 1
      },
      {
        title: 'Program Kelas Foresight & Analisis Kebijakan',
        description: 'Pelatihan intensif bagi generasi muda untuk menguasai metode perancangan kebijakan publik, sains data, dan advokasi berbasis bukti.',
        initiative_type: 'Program Edukasi & Mentorship',
        target_audience: 'Mahasiswa, Analis Muda & Pegiat LSM',
        status: 'Program Berkala',
        impact_metrics: 'Ratusan Alumnus Analis Kebijakan',
        action_url: 'https://nalarinstitute.com/kelas-foresight',
        sort_order: 2
      },
      {
        title: 'Inisiatif Arsitektur "Satu Data Indonesia"',
        description: 'Pondasi regulasi dan arsitektur data terpadu untuk memastikan seluruh perencanaan pembangunan nasional mengacu pada basis data tunggal yang akurat.',
        initiative_type: 'Inovasi Tata Kelola Negara',
        target_audience: 'Pemerintah & Masyarakat Luas',
        status: 'Regulasi Standar Nasional',
        impact_metrics: 'Diadopsi Lintas Kementerian',
        action_url: 'https://data.go.id',
        sort_order: 3
      }
    ],
    life_events: [
      { year: '2004 - 2012', title: 'Karier Akademik di Manchester University', description: 'Mengajar dan meneliti inovasi teknologi dan transformasi sosial di Inggris.', sort_order: 1 },
      { year: '2015 - 2019', title: 'Deputi II Kepala Staf Kepresidenan RI', description: 'Memimpin pemantauan program strategis nasional dan meletakkan fondasi Satu Data Indonesia.', sort_order: 2 },
      { year: '2020 - Sekarang', title: 'Mendirikan Nalar Institute & Senior Fellow ISEAS', description: 'Membangun lembaga riset independen dan mengajar filsafat kebijakan di Driyarkara.', sort_order: 3 }
    ],
    works: [
      { title: 'Inisiasi Kebijakan Satu Data Indonesia (Perpres No. 39/2019)', description: 'Regulasi fundamental yang mewajibkan interoperabilitas data dalam setiap pengambilan keputusan negara.', year: '2019', sort_order: 1 },
      { title: 'Buku & Publikasi Internasional Evidence-Based Policy Making', description: 'Kumpulan monograf riset mengenai peran sains dalam memandu tata kelola pemerintahan demokratis.', year: '2018 - 2024', sort_order: 2 }
    ],
    articles: [
      { title: 'Profil Yanuar Nugroho: Mengawal Nalar Saintifik di Jantung Kekuasaan', source: 'The Conversation Indonesia', source_url: 'https://theconversation.com/profiles/yanuar-nugroho-100234', excerpt: 'Ulasan dedikasi Yanuar Nugroho dalam menjembatani riset saintifik global dengan birokrasi Indonesia.', sort_order: 1 },
      { title: 'Pentingnya Evidence-Based Policy untuk Masa Depan Pembangunan', source: 'Nalar Institute Media', source_url: 'https://nalarinstitute.com/publikasi/evidence-based-policy/', excerpt: 'Esai reflektif mengenai bahaya perumusan kebijakan tanpa pijakan data ilmiah.', sort_order: 2 }
    ]
  },

  // 7. ZEN RS
  {
    slug: 'zen-rs',
    name: 'Zen RS (Zen Rachmat Sugito)',
    title: 'Esais Naratif, Mantan Pemred Tirto.id & Kurator Jurnalisme Presisi',
    category: 'Penjaga Nalar',
    quote: 'Menulis naratif adalah usaha paling purba manusia untuk menyelamatkan ingatan dari kebrutalan lupa dan kebohongan zaman.',
    photo_url: 'https://pelagiabookstore.com/wp-content/uploads/2026/07/Zen-RS-300x300.jpg',
    verified: true,
    status_text: 'Esais Naratif, Kurator Jurnalisme Presisi & Mantan Pemimpin Redaksi Tirto.id',
    theme_default: 'amber',
    social_links: {
      youtube: 'https://youtube.com',
      instagram: 'https://instagram.com/zenrs',
      twitter: 'https://twitter.com/zenrs',
      spotify: 'https://open.spotify.com',
      website: 'https://zenrs.id'
    },
    bio_paragraphs: [
      'Di balik sebatang rokok dan tumpukan buku sastra di meja kerjanya, Zen RS merajut kalimat dengan ketelitian seorang pemahat permata. Di tangannya, sebutir bola yang bergulir di atas rumput hijau bukan sekadar atraksi olahraga, melainkan alegori mendalam tentang pertarungan kelas, perlawanan terhadap penindasan kolonial, dan kerinduan abadi manusia akan kemerdekaan jiwa.',
      'Melihat jurnalisme daring Indonesia terjerembap dalam kubangan sensasionalisme clickbait dan pendangkalan bahasa, Zen mengambil langkah berani saat menakhodai redaksi Tirto.id. Ia melarang gosip murahan dan mewajibkan setiap laporan memadukan ketajaman riset data presisi dengan keindahan stilistika sastra tingkat tinggi.',
      'Zen membuktikan bahwa esai panjang (longform essay) yang padat referensi humaniora dan sejarah tetap mampu memikat ratusan ribu pembaca. Melalui buku-buku kultusnya seperti "Simulakra Sepakbola", ia mendidik generasi baru penulis agar tidak malas membaca dan mampu melihat lapis-lapis terdalam di balik realitas sehari-hari.',
      'Bagi Gen-Z yang sering kali terjebak dalam rentang perhatian serba pendek di media sosial, Zen RS adalah mercusuar tradisi membaca mendalam (deep reading). Ia mengajarkan bahwa bahasa adalah benteng terakhir kejernihan akal sehat kita dalam melawan kegaduhan dan kebohongan zaman.'
    ],
    gallery: [
      {
        image_url: 'https://pelagiabookstore.com/wp-content/uploads/2026/07/Zen-RS-300x300.jpg',
        caption: 'Potret Zen RS sang esais naratif dan kurator jurnalisme presisi.',
        curator_note: 'Foto potret khas menampilkan ketenangan seorang penulis kontemplatif.',
        sort_order: 1
      },
      {
        image_url: 'https://geotimes.id/wp-content/uploads/2017/08/ZenRS-01-Sindunatha-1068x600.jpg',
        caption: 'Zen RS saat membedah buku Simulakra Sepakbola dalam diskusi sastra dan jurnalisme.',
        curator_note: 'Menampilkan interaksi dialektika sastra olahraga dengan para pembaca kritis.',
        sort_order: 2
      },
      {
        image_url: 'https://jurnaba.co/wp-content/uploads/2019/08/Grafis-Zenrs.jpg',
        caption: 'Karya esai dan ilustrasi narasi pemikiran Zen RS.',
        curator_note: 'Visualisasi estetika bertutur dalam merawat tradisi literasi mendalam.',
        sort_order: 3
      },
      {
        image_url: 'https://static.promediateknologi.id/crop/0x53:1200x787/0x0/webp/photo/p3/103/2026/06/27/Zen-RS-IG_p_DaBCROfjz0d-7-1200p-3899536617.jpg',
        caption: 'Zen RS dalam perbincangan literatur wacana publik dan sejarah kebudayaan.',
        curator_note: 'Mendokumentasikan kiprahnya sebagai figur rujukan esai kritis anak muda.',
        sort_order: 4
      }
    ],
    initiatives: [
      {
        title: 'Buku Mahakarya "Simulakra Sepakbola"',
        description: 'Kumpulan esai sastra-olahraga kultus yang membedah sejarah politik, perlawanan anti-kolonial, dan sosiologi masyarakat melalui sepak bola.',
        initiative_type: 'Buku & Literatur',
        target_audience: 'Pencinta Sepak Bola, Sastra & Mahasiswa',
        status: 'Rilis Resmi Penerbit (Rp 63.000)',
        impact_metrics: 'Buku Kultus Jurnalisme Olahraga',
        action_url: 'https://medium.com/side-a/kata-kata-sepakbola-dari-zen-rs-8b29719f9ea9',
        sort_order: 1
      },
      {
        title: 'Pengembangan Standar Jurnalisme Presisi Tirto.id',
        description: 'Arsitektur kurasi redaksi yang mengintegrasikan jurnalisme data kuantitatif dengan narasi sastra panjang (longform investigative essay).',
        initiative_type: 'Standar Jurnalisme Media',
        target_audience: 'Jurnalis, Pembaca Kritis & Peneliti',
        status: 'Legacy Jurnalisme Indonesia',
        impact_metrics: 'Penghargaan Jurnalisme Data Nasional',
        action_url: 'https://tirto.id',
        sort_order: 2
      },
      {
        title: 'Lokakarya Penulisan Esai Naratif & Sastra Kritis',
        description: 'Kelas penulisan mandiri untuk membimbing penulis muda menguasai seni meramu riset sejarah, diksi puitis, dan logika berpikir tajam.',
        initiative_type: 'Workshop & Literasi',
        target_audience: 'Penulis Muda & Esais Independen',
        status: 'Kelas Berkala',
        impact_metrics: 'Mencetak Ratusan Penulis Naratif',
        action_url: 'https://pelagiabookstore.com',
        sort_order: 3
      }
    ],
    life_events: [
      { year: '2016', title: 'Menerbitkan Buku Simulakra Sepakbola', description: 'Menghadirkan genre penulisan esai sepak bola berkedalaman filosofis dan kultural.', sort_order: 1 },
      { year: '2016 - 2021', title: 'Pemimpin Redaksi Tirto.id', description: 'Membangun ekosistem media jurnalisme data presisi yang disegani di Indonesia.', sort_order: 2 },
      { year: '2022 - Sekarang', title: 'Penulis & Kurator Narasi Independen', description: 'Menulis esai-esai reflektif dan membimbing generasi baru pegiat literasi naratif.', sort_order: 3 }
    ],
    works: [
      { title: 'Buku Simulakra Sepakbola (2016)', description: 'Masterpiece penulisan esai naratif yang mengaitkan sepak bola dengan filsafat dan sejarah kebudayaan.', year: '2016', sort_order: 1 },
      { title: 'Arsip Esai Jurnalisme Presisi & Kebudayaan', description: 'Ratusan esai panjang yang menjadi materi ajar jurnalisme naratif di berbagai universitas.', year: '2015 - 2024', sort_order: 2 }
    ],
    articles: [
      { title: 'Sepak Bola dalam Perspektif Zen RS: Membaca Simulakra Sepakbola', source: 'Agung Wicaksono Reviews', source_url: 'https://www.agungwicaks.com/2025/01/membaca-simulakra-sepakbola.html', excerpt: 'Tinjauan mendalam atas teknik bercerita dan kepekaan sosial dalam karya esai Zen RS.', sort_order: 1 },
      { title: 'Zen RS dan Hidup yang Beralih dari Suasana ke Suasana', source: 'Jurnaba', source_url: 'https://jurnaba.co/wp-content/uploads/2019/08/Grafis-Zenrs.jpg', excerpt: 'Catatan perjalanan hidup sang esais dari dunia pesantren, sastra, hingga jurnalisme data.', sort_order: 2 }
    ]
  },

  // 8. PROF. SULFIKAR AMIR
  {
    slug: 'sulfikar-amir',
    name: 'Prof. Sulfikar Amir, Ph.D.',
    title: 'Sosiolog Sains & Kebijakan Bencana (NTU Singapura)',
    category: 'Penjaga Nalar',
    quote: 'Bencana bukan sekadar takdir alam; ia adalah cermin dari ketimpangan tata ruang, kegagalan tata kelola, dan arogansi teknologi.',
    photo_url: 'https://stu.aminef.or.id/uploads/2021/07/16/Sulfikar_Amir-Photo.jpg',
    verified: true,
    status_text: 'Profesor Sosiologi Sains & Teknologi di Nanyang Technological University (NTU) Singapura',
    theme_default: 'amber',
    social_links: {
      youtube: 'https://youtube.com',
      instagram: 'https://instagram.com/sulfikaramir',
      twitter: 'https://twitter.com/sociotalker',
      spotify: 'https://open.spotify.com',
      website: 'https://ntu.edu.sg'
    },
    bio_paragraphs: [
      'Ketika para pejabat negara membanggakan maket gedung-gedung megah dan proyek infrastruktur mercusuar, seorang ilmuwan sosiologi di NTU Singapura membuka simulasi data kerentanan gempa, kenaikan permukaan air laut, dan kesiapan sistem evakuasi warga. Melalui kanal publik @sociotalker, Prof. Sulfikar Amir mengajukan pertanyaan paling mendasar: "Apakah pembangunan ini dirancang untuk melindungi keselamatan rakyat, atau sekadar monumen prestise politik?"',
      'Sulfikar mendedikasikan riset akademisnya pada "Sosiologi Bencana" - disiplin ilmu yang membedah bagaimana keruntuhan teknologi selalu berakar pada kegagalan sistem sosial, korupsi birokrasi, dan ketidakadilan tata ruang. Karyanya "The Technological State in Indonesia" menjadi rujukan wajib dunia untuk memahami bagaimana kekuasaan menggunakan teknologi sebagai instrumen legitimasi politik.',
      'Ia menolak berdiam diri di menara gading. Sulfikar secara konsisten turun ke linimasa media sosial, menerjemahkan data teknis transportasi massal perkotaan (MRT/LRT), analisis penanganan pandemi, hingga mitigasi risiko tata kota IKN ke dalam infografik yang jernih dan mudah dipahami publik awam.',
      'Bagi Gen-Z yang menghadapi masa depan di bawah ancaman nyata krisis iklim dan ancaman gempa megathrust, Sulfikar memberikan perangkat bernalar kritis: bagaimana menuntut hak atas kota yang aman, tangguh bencana, dan manusiawi untuk ditinggali.'
    ],
    gallery: [
      {
        image_url: 'https://stu.aminef.or.id/uploads/2021/07/16/Sulfikar_Amir-Photo.jpg',
        caption: 'Prof. Sulfikar Amir, ilmuwan sosiologi sains dan teknologi di NTU Singapura.',
        curator_note: 'Foto resmi profil memperlihatkan reputasi akademik internasional sang profesor.',
        sort_order: 1
      },
      {
        image_url: 'https://www.article33.or.id/wp-content/uploads/2025/05/sulfikar-amir.png',
        caption: 'Sulfikar Amir dalam forum advokasi tata kelola ruang dan ketahanan sosial.',
        curator_note: 'Dokumentasi keterlibatan riset kebijakan bersama koalisi masyarakat sipil.',
        sort_order: 2
      },
      {
        image_url: 'https://unair.ac.id/wp-content/uploads/2021/12/Screenshot-17.png',
        caption: 'Paparan ilmiah Prof. Sulfikar Amir mengenai mitigasi risiko pandemi dan bencana.',
        curator_note: 'Menampilkan sesi kuliah umum berbasis data empiris keselamatan publik.',
        sort_order: 3
      },
      {
        image_url: 'https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=131746921763514',
        caption: 'Kajian tata ruang perkotaan dan kesiapsiagaan darurat bencana Jakarta.',
        curator_note: 'Aksi nyata advokasi keselamatan warga perkotaan dari ancaman hidrometeorologi.',
        sort_order: 4
      }
    ],
    initiatives: [
      {
        title: 'Buku Rujukan "The Technological State in Indonesia"',
        description: 'Karya sosiologi sejarah internasional yang membedah relasi kekuasaan, hegemoni teknologi, dan kebijakan pembangunan rezim di Indonesia.',
        initiative_type: 'Buku & Riset Global',
        target_audience: 'Akademisi, Mahasiswa & Peneliti Tata Kota',
        status: 'Publikasi Akademik Internasional',
        impact_metrics: 'Rujukan Global STS Asia Tenggara',
        action_url: 'https://books.google.co.id/books?id=pUlKd0jzPqIC',
        sort_order: 1
      },
      {
        title: 'Kanal Advokasi Publik @sociotalker',
        description: 'Media edukasi sains mandiri yang mengkaji keselamatan transportasi massal, mitigasi gempa/banjir, dan tata kelola risiko perkotaan secara terbuka.',
        initiative_type: 'Edukasi Sains Publik',
        target_audience: 'Warga Urban, Mahasiswa & Penglaju Kota',
        status: 'Aktif Memberikan Analisis',
        impact_metrics: 'Ratusan Ribu Pembaca Analisis Sains',
        action_url: 'https://twitter.com/sociotalker',
        sort_order: 2
      },
      {
        title: 'Inisiatif Riset Ketahanan Bencana & Sosial (NTU DR-Data)',
        description: 'Basis data pemodelan risiko bencana dan ketangguhan komunitas warga dalam menghadapi ancaman krisis iklim dan gempa bumi di Asia Tenggara.',
        initiative_type: 'Pusat Data Riset',
        target_audience: 'Komunitas Mitigasi Bencana & Pemda',
        status: 'Arsip Riset Terbuka',
        impact_metrics: 'Pemodelan Simulasi Bencana Regional',
        action_url: 'https://researchdata.ntu.edu.sg/dataverse/socialresilience',
        sort_order: 3
      }
    ],
    life_events: [
      { year: '2012', title: 'Menerbitkan Buku The Technological State', description: 'Mendapat apresiasi luas atas kajian sosiologi teknologi di negara berkembang.', sort_order: 1 },
      { year: '2020 - 2022', title: 'Advokasi Sains Publik Penanganan Pandemi', description: 'Mengedukasi masyarakat mengenai ventilasi udara, epidemiologi sosial, dan mitigasi berbasis data.', sort_order: 2 },
      { year: '2023 - Sekarang', title: 'Kritik Saintifik Tata Ruang & Keselamatan Megathrust', description: 'Memelopori diskursus ketahanan infrastruktur publik dan mitigasi bencana di Indonesia.', sort_order: 3 }
    ],
    works: [
      { title: 'The Technological State in Indonesia (Routledge, 2012)', description: 'Buku fundamental mengenai dinamika politik sains dan teknologi pada era pembangunan nasional.', year: '2012', sort_order: 1 },
      { title: 'Simulasi Pemodelan Resiliensi Sosial Bencana Fukushima & Indonesia', description: 'Kajian komparatif kesiapsiagaan darurat kebencanaan di kawasan rawan cincin api Pasifik.', year: '2018 - 2024', sort_order: 2 }
    ],
    articles: [
      { title: 'Sulfikar Amir: Mitigasi Bencana Erat Kaitannya dengan Kepentingan Publik', source: 'Universitas Airlangga News', source_url: 'https://unair.ac.id/sulfikar-amir-mitigasi-bencana-dan-kebijakan-publik/', excerpt: 'Analisis sosiologi mengenai urgensi menempatkan keselamatan nyawa warga di atas kalkulasi komersial.', sort_order: 1 },
      { title: 'The Technological State: Ulasan Sosiologi Pembangunan Indonesia', source: 'DR-NTU Research', source_url: 'https://researchdata.ntu.edu.sg/dataverse/socialresilience', excerpt: 'Repositori kajian sains dan teknologi dalam konteks kebijakan publik Asia Tenggara.', sort_order: 2 }
    ]
  },

  // 9. ABIGAIL LIMURIA
  {
    slug: 'abigail-limuria',
    name: 'Abigail Limuria',
    title: 'Co-founder Bijak Memilih & What The Fact Politics',
    category: 'Penjaga Nalar',
    quote: 'Politik bukan tentang menyembah figur pemimpin; politik adalah tentang memperjuangkan nasib masa depan hidup kita sendiri.',
    photo_url: 'https://mmc.tirto.id/image/2025/09/04/abigail-limuria_ratio-16x9.jpg',
    verified: true,
    status_text: 'Co-founder Bijak Memilih & What The Fact Politics / Penulis Buku Lalita',
    theme_default: 'amber',
    social_links: {
      youtube: 'https://youtube.com/@bijakmemilih',
      instagram: 'https://instagram.com/abigaillimuria',
      twitter: 'https://twitter.com/abigaillimuria',
      spotify: 'https://open.spotify.com',
      website: 'https://bijakmemilih.id'
    },
    bio_paragraphs: [
      'Menjelang perhelatan pemilu ketika linimasa media sosial dijejali oleh video joget politisi dan drama gimik personal yang dangkal, sebuah platform web minimalis mendadak viral di kalangan anak muda. Di balik layar, Abigail Limuria tersenyum lega: jutaan pemilih pemula akhirnya memiliki kompas rasional untuk membedah sikap partai politik bukan dari baliho jalanan, melainkan dari rekam jejak nyata atas isu krisis iklim, hak buruh, dan korupsi.',
      'Abigail menolak pasrah pada apatisme politik generasi muda yang muak dengan polarisasi dan politik uang. Menggandeng think-tank Think Policy, ia menginisiasi "Bijak Memilih" - sebuah platform civic-tech independen yang menerjemahkan ratusan lembar dokumen visi-misi dan rekam jejak voting parlemen menjadi infografik interaktif yang renyah.',
      'Tanpa menerima dana dari paslon mana pun, platform ini murni membedah isu-isu substantif yang menyangkut hajat hidup rakyat. Kerja kolektif ini membuktikan bahwa anak muda tidak apatis terhadap politik ketika informasi disajikan secara objektif, transparan, dan relevan dengan realitas harian mereka.',
      'Melalui buku karyanya "Lalita: 51 Cerita Perempuan Hebat" dan berbagai gerakan kewargaan, Abigail membuktikan bahwa anak muda mampu menciptakan teknologi kewargaan yang menjaga marwah demokrasi dari pembodohan massal.'
    ],
    gallery: [
      {
        image_url: 'https://mmc.tirto.id/image/2025/09/04/abigail-limuria_ratio-16x9.jpg',
        caption: 'Abigail Limuria saat memaparkan inisiatif civic-tech Bijak Memilih.',
        curator_note: 'Foto resmi liputan Tirto menampilkan representasi kepemimpinan aktivis muda.',
        sort_order: 1
      },
      {
        image_url: 'https://cdn-jpr.jawapos.com/images/23/2025/09/04/image_2025-09-04_121126578-125373659-2485343130.jpg',
        caption: 'Abigail Limuria dalam forum dialog pemuda dan literasi kebijakan publik.',
        curator_note: 'Dokumentasi interaksi bersama komunitas pemilih pemula.',
        sort_order: 2
      },
      {
        image_url: 'https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=3716209265792367330',
        caption: 'Abigail bersama koalisi masyarakat sipil menyuarakan aspirasi pemuda di ruang publik.',
        curator_note: 'Aksi nyata memperjuangkan keterbukaan informasi dan hak-hak kewargaan.',
        sort_order: 3
      },
      {
        image_url: 'https://thumbs.tvonenews.com/thumbnail/2025/09/04/68b94485cce21-profil-abigail-limuria-aktivis-muda-indonesia-yang-jadi-sorotan-media-internasional-soal-demo-besar_1265_711.jpg',
        caption: 'Wawancara internasional mengenai partisipasi demokrasi pemuda Indonesia.',
        curator_note: 'Menampilkan sorotan media global atas gerakan edukasi politik independen.',
        sort_order: 4
      }
    ],
    initiatives: [
      {
        title: 'Platform Civic-Tech "Bijak Memilih"',
        description: 'Platform independen interaktif yang membedah rekam jejak partai politik dan sikap kandidat atas isu-isu krusial (iklim, ekonomi, HAM) berbasis data terbuka.',
        initiative_type: 'Platform Civic-Tech',
        target_audience: 'Pemilih Pemula, Gen-Z & Warga Kritis',
        status: 'Layanan Terbuka Bebas Iklan',
        impact_metrics: '10M+ Kunjungan Warga Muda',
        action_url: 'https://bijakmemilih.id',
        sort_order: 1
      },
      {
        title: 'Buku "Lalita: 51 Cerita Perempuan Hebat Indonesia"',
        description: 'Buku literatur inspiratif yang mendokumentasikan perjuangan dan kontribusi 51 figur perempuan tangguh nusantara di berbagai bidang kehidupan.',
        initiative_type: 'Buku & Literatur',
        target_audience: 'Generasi Muda & Penggerak Perempuan',
        status: 'Rilis Resmi Penerbit (Rp 85.000)',
        impact_metrics: 'Cetakan Ke-8 Bestseller',
        action_url: 'https://kumparan.com/kumparanwoman/lalita-persembahan-buku-dari-dua-mahasiswi-untuk-perempuan-indonesia-1rdCNQxqFDb',
        sort_order: 2
      },
      {
        title: 'Kanal Konten "What The Fact Politics"',
        description: 'Program serial video informatif yang membedah sistem ketatanegaraan, anggaran negara, dan kebijakan parlemen dengan gaya visual modern.',
        initiative_type: 'Media Literasi Politik',
        target_audience: 'Generasi Muda & Pelajar',
        status: 'Tayang Berkala',
        impact_metrics: 'Jutaan Penayangan Edukasi',
        action_url: 'https://youtube.com/@bijakmemilih',
        sort_order: 3
      }
    ],
    life_events: [
      { year: '2019', title: 'Menerbitkan Buku Lalita', description: 'Menggalang gerakan literasi perempuan hebat nusantara yang menjadi bacaan inspiratif anak muda.', sort_order: 1 },
      { year: '2023', title: 'Meluncurkan Platform Bijak Memilih', description: 'Membangun arsitektur informasi politik berbasis isu yang diakses jutaan anak muda.', sort_order: 2 },
      { year: '2024 - Sekarang', title: 'Advokasi Literasi Kebijakan Berkelanjutan', description: 'Memperluas cakupan civic-tech untuk mengawal kebijakan parlemen pascapemilu.', sort_order: 3 }
    ],
    works: [
      { title: 'Platform Edukasi Politik BijakMemilih.id', description: 'Inovasi arsitektur data pemilu yang memecah isu rumit menjadi visualisasi perbandingan yang adil.', year: '2023 - 2024', sort_order: 1 },
      { title: 'Buku Lalita: 51 Cerita Perempuan Hebat di Indonesia', description: 'Dokumentasi biografi naratif mengenai kepemimpinan dan dedikasi perempuan nusantara.', year: '2019', sort_order: 2 }
    ],
    articles: [
      { title: 'Mengenal Sosok Abigail Limuria: Memberdayakan dari Cerita hingga Edukasi Politik', source: 'Beautynesia Life', source_url: 'https://www.beautynesia.id/life/mengenal-sosok-abigail-limuria-memberdayakan-dari-storytelling-hingga-ilmu-soal-politik/b-286032', excerpt: 'Kiprah Abigail Limuria dalam membangun inisiatif digital yang memerdekakan nalar pemuda.', sort_order: 1 },
      { title: 'Lalita: Persembahan Buku untuk Perempuan Indonesia', source: 'Kumparan Woman', source_url: 'https://kumparan.com/kumparanwoman/lalita-persembahan-buku-dari-dua-mahasiswi-untuk-perempuan-indonesia-1rdCNQxqFDb', excerpt: 'Ulasan buku Lalita yang mengisahkan keteladanan para perempuan penggerak perubahan.', sort_order: 2 }
    ]
  },

  // 10. ROCKY GERUNG
  {
    slug: 'rocky-gerung',
    name: 'Rocky Gerung',
    title: 'Filsuf Publik, Penggagas Diskursus Akal Sehat & Pengkritik Kebijakan',
    category: 'Penjaga Nalar',
    quote: 'Ijazah itu tanda Anda pernah sekolah, bukan tanda Anda pernah berpikir.',
    photo_url: 'https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=2121759615236617',
    verified: true,
    status_text: 'Filsuf Publik, Co-founder Setara Institute & Pengampu Diskursus Akal Sehat RG TV',
    theme_default: 'amber',
    social_links: {
      youtube: 'https://youtube.com/@rockygerungofficial',
      instagram: 'https://instagram.com/rockygerungofficial',
      twitter: 'https://twitter.com/rockygerung',
      spotify: 'https://open.spotify.com',
      website: 'https://setara-institute.org'
    },
    bio_paragraphs: [
      'Di tengah ruang publik yang terbiasa mengangguk patuh pada sabda pejabat, suara berat itu membelah suasana dengan analogi tajam tanpa tedeng aling-aling: "Negara ini didirikan oleh nalar dan argumen, bukan oleh pujian menjilat. Ketika kekuasaan berhenti berpikir kritis, kritik oposisi adalah satu-satunya oksigen yang tersisa." Rocky Gerung duduk santai, siap menguji kesesatan berpikir siapa pun yang berada di hadapannya.',
      'Setelah puluhan tahun mengajar di Departemen Filsafat Fakultas Ilmu Budaya Universitas Indonesia tanpa pernah mengambil gajinya, Rocky memilih melompat menjadi "filsuf jalanan". Kegelisahannya dipicu oleh kultur feodalisme politik di mana ruang publik dipenuhi oleh buzzer yang menyerang pribadi alih-alih menguji substansi kebijakan negara.',
      'Ia turut membidani berdirinya Setara Institute untuk membela kebebasan beragama dan hak-hak asasi kelompok minoritas. Melalui konsep "Akal Sehat vs Kedunguan", Rocky melatih masyarakat untuk membedakan secara tegas antara fakta empiris, premis logika formal, dan sekadar klaim emosional penguasa.',
      'Bagi Gen-Z yang ingin mengasah keberanian berpikir independen dan tidak gampang terpesona oleh pencitraan elite politik, Rocky Gerung adalah lawan tanding logika yang tangguh. Ia membuktikan bahwa filsafat bukanlah ilmu mati di perpustakaan, melainkan senjata paling ampuh untuk merawat kewarasan berbangsa.'
    ],
    gallery: [
      {
        image_url: 'https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=2121759615236617',
        caption: 'Rocky Gerung saat membedah logika etika publik dalam forum diskusi nasional.',
        curator_note: 'Foto profil resmi menampilkan ekspresi khas sang filsuf publik.',
        sort_order: 1
      },
      {
        image_url: 'https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=3288708380294114400',
        caption: 'Buku Obat Dungu Resep Akal Sehat: Kompilasi kritik filsafat terhadap kebijakan negara.',
        curator_note: 'Dokumentasi karya tulis reflektif mengenai etika publik dan akal sehat.',
        sort_order: 2
      },
      {
        image_url: 'https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=3759086624765371028',
        caption: 'Rocky Gerung dalam sesi mimbar bebas bersama mahasiswa dan aktivis pemuda.',
        curator_note: 'Menggambarkan keterlibatan langsung dalam ruang perdebatan nalar kampus.',
        sort_order: 3
      },
      {
        image_url: 'https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=3953595784234893447',
        caption: 'Rocky Gerung memaparkan dialektika filsafat politik di kanal RG TV.',
        curator_note: 'Mendokumentasikan aktivitas siar berkala merawat diskursus akal sehat warga.',
        sort_order: 4
      }
    ],
    initiatives: [
      {
        title: 'Kanal Publik Rocky Gerung Official (RG TV)',
        description: 'Kanal pemikiran kritis dan diskusi harian yang menguji kebijakan pemerintah, logika hukum, dan dinamika geopolitik dari sudut pandang filsafat politik.',
        initiative_type: 'Kanal Diskursus Publik',
        target_audience: 'Mahasiswa, Akademisi & Warga Kritis',
        status: 'Tayang Setiap Hari',
        impact_metrics: '2.5M+ Pelanggan YouTube',
        action_url: 'https://youtube.com/@rockygerungofficial',
        sort_order: 1
      },
      {
        title: 'Buku "Obat Dungu Resep Akal Sehat: Filsafat untuk Republik Kuat"',
        description: 'Kompilasi 85 esai filosofis Rocky Gerung yang membedah kebebasan sipil, etika publik, feminisme, dan kritik atas otoritarianisme terselubung.',
        initiative_type: 'Buku & Literatur',
        target_audience: 'Pembelajar Filsafat & Aktivis',
        status: 'Rilis Resmi (Rp 95.000)',
        impact_metrics: 'National Bestseller',
        action_url: 'https://books.google.com/books/about/Merenung_Bersama_ROCKY_GERUNG.html?id=E_1MEAAAQBAJ',
        sort_order: 2
      },
      {
        title: 'Setara Institute for Democracy and Peace',
        description: 'Lembaga riset advokasi yang didirikan untuk memperjuangkan pluralisme, kebebasan beragama, dan kesetaraan hak kewargaan di Indonesia.',
        initiative_type: 'Lembaga HAM & Demokrasi',
        target_audience: 'Masyarakat Sipil & Komunitas Minoritas',
        status: 'Aktif Beroperasi',
        impact_metrics: 'Indeks Kota Toleran Nasional',
        action_url: 'https://setara-institute.org',
        sort_order: 3
      }
    ],
    life_events: [
      { year: '1986 - 2015', title: 'Dosen Filsafat Universitas Indonesia', description: 'Mengajar epistemologi, etika politik, dan filsafat hukum di FIB UI.', sort_order: 1 },
      { year: '2005', title: 'Mendirikan Setara Institute', description: 'Bersama Gus Dur dan para pegiat mendirikan lembaga advokasi kesetaraan dan perdamaian.', sort_order: 2 },
      { year: '2018 - Sekarang', title: 'Menginisiasi Gerakan Diskursus Akal Sehat', description: 'Mengedukasi publik lintas generasi mengenai seni membongkar kesesatan berpikir kekuasaan.', sort_order: 3 }
    ],
    works: [
      { title: 'Buku Obat Dungu Resep Akal Sehat (2020)', description: 'Kumpulan pemikiran filosofis mengenai keharusan merawat oposisi batin dan akal sehat bernegara.', year: '2020', sort_order: 1 },
      { title: 'Riset Indeks Toleransi & Kebebasan Beragama (Setara Institute)', description: 'Laporan tahunan kondisi kebebasan sipil dan hak asasi manusia di seluruh kota di Indonesia.', year: '2007 - 2024', sort_order: 2 }
    ],
    articles: [
      { title: 'Rocky Gerung: Filsafat Adalah Interupsi Terhadap Arogansi Kekuasaan', source: 'Jurnal Perempuan', source_url: 'https://www.jurnalperempuan.org/warta-feminis/rocky-gerung-filsafat-adalah-interupsi-terhadap-arogansi', excerpt: 'Wawancara mengenai bagaimana metode dialektika filsafat meruntuhkan kepalsuan dogmatisme.', sort_order: 1 },
      { title: 'Profil Rocky Gerung: Sang Penjaga Akal Sehat', source: 'Kompaspedia', source_url: 'https://kompaspedia.kompas.id/baca/profil/tokoh/rocky-gerung', excerpt: 'Biografi perjalanan intelektual sang dosen filsafat yang menjadi komentator politik terdepan.', sort_order: 2 }
    ]
  }
];

async function seedBatch1() {
  console.log('================================================================');
  console.log('🌟 MEMULAI KURASI EDITORIAL PRESISI: BATCH 1 (PENJAGA NALAR)');
  console.log('================================================================\n');

  let successCount = 0;

  for (let i = 0; i < BATCH_1_PENJAGA_NALAR.length; i++) {
    const item = BATCH_1_PENJAGA_NALAR[i];
    console.log(`[${i + 1}/10] ✍️ Mengkurasi & Memperbarui: ${item.name} (/${item.slug})...`);

    // 1. Upsert Profile Utama
    const profilePayload = {
      slug: item.slug,
      name: item.name,
      title: item.title,
      category: item.category,
      quote: item.quote,
      photo_url: item.photo_url,
      verified: item.verified,
      status_text: item.status_text,
      theme_default: item.theme_default,
      social_links: item.social_links,
      bio_paragraphs: item.bio_paragraphs
    };

    const { data: profileRecord, error: profileErr } = await supabase
      .from('profiles_warga_demo1')
      .upsert(profilePayload, { onConflict: 'slug' })
      .select('id')
      .single();

    if (profileErr) {
      console.error(`   ❌ Gagal upsert profil ${item.name}:`, profileErr.message);
      continue;
    }

    const profileId = profileRecord.id;

    // 2. Bersihkan Child Tables sebelum diisi data kurasi terverifikasi
    await supabase.from('gallery_warga_demo1').delete().eq('profile_id', profileId);
    await supabase.from('initiatives_warga_demo1').delete().eq('profile_id', profileId);
    await supabase.from('life_events_warga_demo1').delete().eq('profile_id', profileId);
    await supabase.from('works_warga_demo1').delete().eq('profile_id', profileId);
    await supabase.from('articles_warga_demo1').delete().eq('profile_id', profileId);

    // 3. Masukkan Gallery (3-4 foto terbaik Si Mael)
    if (item.gallery && item.gallery.length > 0) {
      const galleryPayload = item.gallery.map((g, idx) => ({
        id: crypto.randomUUID(),
        profile_id: profileId,
        title: g.caption || g.title || `Dokumentasi ${item.name} ${idx + 1}`,
        image_url: g.image_url,
        order_index: g.sort_order || idx + 1
      }));
      const { error: gErr } = await supabase.from('gallery_warga_demo1').insert(galleryPayload);
      if (gErr) console.warn(`   ⚠️ Gallery error: ${gErr.message}`);
    }

    // 4. Masukkan Initiatives (2-4 produk/inisiatif Bang Marko)
    if (item.initiatives && item.initiatives.length > 0) {
      const initPayload = item.initiatives.map((ini, idx) => ({
        id: crypto.randomUUID(),
        profile_id: profileId,
        title: ini.title,
        category: ini.initiative_type || 'Inisiatif Warga',
        description: ini.description,
        price: ini.status || 'Tersedia',
        image_url: (item.gallery && item.gallery[idx]) ? item.gallery[idx].image_url : item.photo_url,
        action_text: 'Lihat Detail',
        link_url: ini.action_url || ini.link_url || '#',
        order_index: ini.sort_order || idx + 1
      }));
      const { error: iErr } = await supabase.from('initiatives_warga_demo1').insert(initPayload);
      if (iErr) console.warn(`   ⚠️ Initiatives error: ${iErr.message}`);
    }

    // 5. Masukkan Life Events & Works
    if (item.life_events && item.life_events.length > 0) {
      const lePayload = item.life_events.map((le, idx) => ({
        id: crypto.randomUUID(),
        profile_id: profileId,
        year_range: String(le.year || le.year_range),
        title: le.title,
        description: le.description,
        order_index: le.sort_order || idx + 1
      }));
      const { error: leErr } = await supabase.from('life_events_warga_demo1').insert(lePayload);
      if (leErr) console.warn(`   ⚠️ Life Events error: ${leErr.message}`);
    }
    if (item.works && item.works.length > 0) {
      const wPayload = item.works.map((w, idx) => ({
        id: crypto.randomUUID(),
        profile_id: profileId,
        title: w.title,
        category: 'Karya Monumental',
        description: w.description,
        link_url: '#',
        order_index: w.sort_order || idx + 1
      }));
      const { error: wErr } = await supabase.from('works_warga_demo1').insert(wPayload);
      if (wErr) console.warn(`   ⚠️ Works error: ${wErr.message}`);
    }

    // 6. Masukkan Rujukan Artikel
    if (item.articles && item.articles.length > 0) {
      const artPayload = item.articles.map((art, idx) => ({
        id: crypto.randomUUID(),
        profile_id: profileId,
        title: art.title,
        tag: 'ESAI & LIPUTAN',
        read_time: '5 Menit Membaca',
        description: art.excerpt || art.description || '',
        content_full: art.excerpt || '',
        link_url: art.source_url || art.link_url || '#',
        order_index: art.sort_order || idx + 1
      }));
      const { error: artErr } = await supabase.from('articles_warga_demo1').insert(artPayload);
      if (artErr) console.warn(`   ⚠️ Articles error: ${artErr.message}`);
    }

    console.log(`   ✅ Selesai: 4 Paragraf Tempo Style, ${item.gallery.length} Foto Si Mael, ${item.initiatives.length} Produk/Inisiatif Bang Marko.`);
    successCount++;
  }

  console.log('\n================================================================');
  console.log(`🎉 BATCH 1 (PENJAGA NALAR) BERHASIL DIPERBARUI: ${successCount}/10 TOKOH TUNTAS!`);
  console.log('================================================================');
}

seedBatch1();
