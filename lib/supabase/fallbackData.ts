import { FullProfileData, Profile } from './types';

export const fallbackProfiles: Record<string, FullProfileData> = {
  'ferry-irwandi': {
    profile: {
      id: '1e88343e-74f0-4595-8e11-3efa40ea9edc',
      slug: 'ferry-irwandi',
      name: 'FERRY IRWANDI',
      title: 'THE VOICES • DISRUPTOR • SUARA AKAL SEHAT',
      category: 'THE VOICES',
      bio_paragraphs: [
        'Sebagai mantan pegawai Kementerian Keuangan lulusan STAN, Ferry Irwandi paham betul gimana sistem bekerja dari dalam. Tapi melihat jutaan anak muda dan warga biasa terus-menerus terjebak skema tipu-tipu finansial di media sosial, ia memilih jalan terjal: melepas status abdi negara yang aman demi membangun ruang edukasi independen yang berani bicara jujur.',
        'Lewat Malaka Project dan kanal pribadinya, Ferry gak cuma ngasih kritik di layar kaca, tapi turun langsung bikin aksi nyata. Mulai dari membongkar logika busuk judi online, mengajak generasi muda menerapkan stoikisme praktis agar gak gampang cemas, sampai menggalang dana gotong royong lebih dari Rp 10,7 Miliar untuk beasiswa kuliah dan bantuan UKT mahasiswa di berbagai daerah.'
      ],
      quote: 'Di tengah gempuran algoritma yang bikin cemas dan iming-iming kaya instan, nalar kritis itu bukan gaya-gayaan—tapi tameng utama biar hidup lo tetap waras dan merdeka.',
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
      { id: 'g1', profile_id: '1e88343e-74f0-4595-8e11-3efa40ea9edc', title: 'Mimbar Bebas: Dialektika Nalar Kritis di Hadapan Ribuan Mahasiswa', image_url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80', order_index: 1 },
      { id: 'g2', profile_id: '1e88343e-74f0-4595-8e11-3efa40ea9edc', title: 'Dapur Riset & Produksi Malaka Project: Membedah Alur Keuangan Gelap', image_url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80', order_index: 2 },
      { id: 'g3', profile_id: '1e88343e-74f0-4595-8e11-3efa40ea9edc', title: 'Penyaluran Nyata: Beasiswa & Subsidi UKT Mahasiswa Berprestasi Daerah', image_url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80', order_index: 3 }
    ],
    articles: [
      { 
        id: 'a1', 
        profile_id: '1e88343e-74f0-4595-8e11-3efa40ea9edc', 
        title: 'Membongkar Jebakan Ilusi: Catatan Investigasi Ferry Irwandi Melawan Gurita Judol & Skema Cepat Kaya', 
        tag: 'INVESTIGASI & ADVOKASI', 
        read_time: '7 Menit Membaca', 
        description: 'Kisah di balik layar perlawanan Ferry Irwandi membongkar manipulasi psikologis di balik judi online: mengapa bandar gak pernah kalah dan gimana cara kita menjaga akal sehat.', 
        content_full: 'Sepanjang 2023 hingga hari ini, kotak pesan di media sosial Ferry Irwandi gak pernah sepi dari curhatan pilu. Ada mahasiswa yang panik karena tabungan semesterannya ludes, buruh pabrik yang terjebak utang demi mengejar "kemenangan semu", sampai keluarga yang retak gara-gara iming-iming cuan kilat dari ponsel.\n\nBagi Ferry, yang bertahun-tahun menganalisis angka dan anggaran di birokrasi, fenomena ini sangat jelas: ini bukan soal apes atau kurang beruntung, melainkan perang psikologis di mana masyarakat kita dimanipulasi oleh algoritma yang dirancang sangat licik.\n\n"Secara matematika, bandar itu gak akan pernah kalah. Rumus mereka dibangun dengan negative expected value mutlak," tegas Ferry di studionya. Namun, menjelaskan logika dingin ini di tengah masyarakat yang lagi terhimpit ekonomi jelas punya tantangan luar biasa. Ferry harus berhadapan dengan promosi masif para influencer, serbuan bot di kolom komentar, hingga teror digital yang menyerang ruang pribadinya.\n\nTantangan paling menguras energi justru saat menyadarkan mereka yang masih terjebak dalam ilusi "sunk cost"—merasa kalau terus main, modal yang hilang bakal balik. Lewat riset dan video investigasi mendalam di Malaka Project, Ferry gak cuma membeberkan aliran transaksi gelap, tapi mengajak kita membedah rasa takut dan keserakahan diri sendiri.\n\nBagi Ferry, perlawanan ini adalah soal menjaga martabat akal sehat warga. Literasi finansial bukan cuma teori buku tebal, tapi keberanian buat pasang rem logika sebelum jempol kita tergoda ilusi instan.', 
        link_url: '/artikel/membongkar-jebakan-ilusi-investigasi-ferry-irwandi', 
        order_index: 1 
      },
      { 
        id: 'a2', 
        profile_id: '1e88343e-74f0-4595-8e11-3efa40ea9edc', 
        title: 'Tenang di Tengah Badai: Stoikisme Praktis Ala Ferry Irwandi untuk Generasi yang Gampang Cemas', 
        tag: 'FILSAFAT & DIALEKTIKA', 
        read_time: '8 Menit Membaca', 
        description: 'Bagaimana filosofi stoikisme terapan menyelamatkan Ferry Irwandi dari ketakutan saat resign dan menghadapi serangan digital: fokus pada apa yang bisa lo kendalikan.', 
        content_full: 'Waktu memutuskan resign dari posisi pegawai negeri yang nyaman di tahun 2021, Ferry Irwandi gak langsung merasa heroik. Justru di kamar kos sempit tempat ia merintis Malaka Project, rasa cemas itu nyata: tabungan yang menipis, omongan miring orang sekitar, dan ketidakpastian masa depan tanpa gaji bulanan tetap.\n\nDi titik itulah, buku filsafat stoikisme karya Marcus Aurelius dan Epictetus berhenti jadi sekadar kutipan keren di media sosial, melainkan jadi jangkar penyelamat hidupnya.\n\nPrinsip utamanya sederhana tapi mengubah segalanya: "Dikotomi Kendali". Ferry membagi dunianya jadi dua: hal-hal yang berada di luar kuasanya (opini netizen, algoritma medsos, tuduhan buzzer) dan hal-hal yang 100% berada di bawah kendalinya (kejernihan berpikir, kerja keras risetnya, dan integritas yang ia pegang).\n\nKetika badai fitnah mulai berdatangan—mulai dari dituduh agen asing sampai diancam pelaporan hukum—Ferry gak membuang energinya buat marah-marah di linimasa. Ia mengalirkan fokusnya ke aksi nyata: membesarkan Malaka Project hingga menembus 1 juta subscriber dan menggalang dana gotong royong publik lebih dari Rp 10,7 Miliar untuk beasiswa anak-anak daerah.\n\nBuat Gen Z dan milenial yang hari ini sering kena mental gara-gara tekanan karir, fomo gaya hidup teman, dan masa depan yang serba buram, pengalaman Ferry ngasih bukti nyata: Stoikisme bukan berarti lo harus pasrah jadi keset, tapi tentang bikin pikiran lo setenang batu karang biar lo bisa terus melangkah dan berkarya tanpa takut diombang-ambingkan dunia.', 
        link_url: '/artikel/tenang-di-tengah-badai-stoikisme-ferry-irwandi', 
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
  'najwa-shihab': {
    profile: {
      id: '44444444-4444-4444-4444-444444444444',
      slug: 'najwa-shihab',
      name: 'NAJWA SHIHAB',
      title: 'THE VOICES • JURNALIS UTAMA • SUARA KETENAGAN & KEADILAN',
      category: 'THE VOICES',
      bio_paragraphs: [
        'Najwa Shihab adalah jurnalis senior, pembawa acara Mata Najwa, dan pendiri Narasi yang selama lebih dari dua dekade konsisten menguji kebenaran, menagih akuntabilitas penguasa, dan menyuarakan keadilan bagi warga Indonesia.',
        'Melalui Narasi dan berbagai aksi independennya, Najwa mengubah jurnalisme dari sekadar siaran berita menjadi gerakan partisipasi publik: mendorong generasi muda berani bersuara, mengawal isu-isu korupsi dan kebijakan publik, serta menggalang solidaritas warga untuk pendidikan dan kemanusiaan.'
      ],
      quote: 'Di hadapan keadilan dan kebenaran, kewajiban tertinggi seorang jurnalis adalah berdiri bersama warga dan menagih pertanggungjawaban dari mereka yang memegang kekuasaan.',
      photo_url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
      verified: true,
      status_text: 'VERIFIKASI TERKURASI',
      social_links: {
        youtube: 'https://youtube.com/@NarasiOfficial',
        instagram: 'https://instagram.com/najwashihab',
        twitter: 'https://twitter.com/NajwaShihab',
        spotify: 'https://open.spotify.com/show/matanajwa',
        website: 'https://narasi.tv',
        tiktok: 'https://tiktok.com/@najwashihab'
      },
      theme_default: 'light'
    },
    lifeEvents: [], works: [], gallery: [], articles: [], testimonials: [], initiatives: []
  },
  'sujiwo-tejo': {
    profile: {
      id: '55555555-5555-5555-5555-555555555555',
      slug: 'sujiwo-tejo',
      name: 'SUJIWO TEJO',
      title: 'THE VOICES • BUDAYAWAN • PRESIDEN JANCUKERS',
      category: 'THE VOICES',
      bio_paragraphs: [
        'Sujiwo Tejo (dikenal juga sebagai Mbah Jiwo) adalah seorang budayawan, dalang, penulis, dan seniman serba bisa Indonesia yang selama puluhan tahun konsisten menyuarakan kebebasan berpikir, kejujuran nurani, dan satir kebudayaan lewat media seni.',
        'Melalui karya sastra, pertunjukan wayang suket, lagu, dan esai-esainya, Mbah Jiwo merawat nilai-nilai kearifan lokal Nusantara sekaligus menjadi pemikir bebas yang berani menelanjangi kepalsuan sosial dengan humor filosofis yang membumi.'
      ],
      quote: 'Menikahi perempuan yang lo cintai itu soal takdir, tapi mencintai perempuan yang lo nikahi itu soal tanggung jawab. Sama halnya dengan mencintai negeri ini.',
      photo_url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80',
      verified: true,
      status_text: 'VERIFIKASI TERKURASI',
      social_links: {
        youtube: 'https://youtube.com/@sujiwotejo',
        twitter: 'https://twitter.com/sudjiwotedjo',
        instagram: 'https://instagram.com/president_jancukers',
        spotify: 'https://open.spotify.com/artist/sujiwotejo',
        website: 'https://sujiwotejo.com'
      },
      theme_default: 'dark'
    },
    lifeEvents: [], works: [], gallery: [], articles: [], testimonials: [], initiatives: []
  },
  'cania-citta': {
    profile: {
      id: '66666666-6666-6666-6666-666666666666',
      slug: 'cania-citta',
      name: 'CANIA CITTA',
      title: 'THE VOICES • PEMIKIR POLITIK • CO-FOUNDER MALAKA',
      category: 'THE VOICES',
      bio_paragraphs: [
        'Cania Citta Marsshita adalah pemikir politik, video esais, dan co-founder Malaka Project yang dikenal lewat keberaniannya membedah filsafat politik dan kebebasan individu.',
        'Melalui konten berbasis riset di Malaka Project, Cania mengajak generasi muda mempertanyakan dogma politik dan membangun nalar kritis.'
      ],
      quote: 'Kebebasan berpikir dan rasionalitas adalah hak paling mendasar yang tidak boleh dikompromikan oleh dogma apa pun.',
      photo_url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
      verified: true,
      status_text: 'VERIFIKASI TERKURASI',
      social_links: {
        youtube: 'https://youtube.com/@caniacitta',
        instagram: 'https://instagram.com/caniacitta',
        twitter: 'https://twitter.com/caniacitta'
      },
      theme_default: 'light'
    },
    lifeEvents: [], works: [], gallery: [], articles: [], testimonials: [], initiatives: []
  },
  'jerome-polin': {
    profile: {
      id: '77777777-7777-7777-7777-777777777777',
      slug: 'jerome-polin',
      name: 'JEROME POLIN',
      title: 'THE STRATEGISTS • EDUKATOR MATEMATIKA • FOUNDER MANTAPPU',
      category: 'THE STRATEGISTS',
      bio_paragraphs: [
        'Jerome Polin Sijabat adalah edukator matematika, YouTuber lulusan Waseda University, dan pengusaha muda pendiri Mantappu Corp.',
        'Lewat pembawaannya yang komunikatif, Jerome mengikis stigma matematika sebagai pelajaran menakutkan.'
      ],
      quote: 'Matematika bukan tentang menghafal rumus, tapi tentang mengasah pola pikir pemecahan masalah.',
      photo_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
      verified: true,
      status_text: 'VERIFIKASI TERKURASI',
      social_links: {
        youtube: 'https://youtube.com/@nihongomantappu',
        instagram: 'https://instagram.com/jeromepolin'
      },
      theme_default: 'light'
    },
    lifeEvents: [], works: [], gallery: [], articles: [], testimonials: [], initiatives: []
  },
  'yohanes-surya': {
    profile: {
      id: '88888888-8888-8888-8888-888888888888',
      slug: 'yohanes-surya',
      name: 'PROF. YOHANES SURYA',
      title: 'THE STRATEGISTS • FISIKAWAN • PENGEMBANG METODE GASING',
      category: 'THE STRATEGISTS',
      bio_paragraphs: [
        'Prof. Yohanes Surya Ph.D adalah fisikawan senior dan pencipta metode pembelajaran GASING.',
        'Beliau melatih anak-anak terpencil Indonesia hingga meraih emas olimpiade sains dunia.'
      ],
      quote: 'Tidak ada anak yang bodoh di dunia ini, yang ada hanyalah anak yang belum mendapatkan kesempatan belajar dengan cara yang tepat.',
      photo_url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
      verified: true,
      status_text: 'VERIFIKASI TERKURASI',
      social_links: {
        website: 'https://yohanessurya.com'
      },
      theme_default: 'light'
    },
    lifeEvents: [], works: [], gallery: [], articles: [], testimonials: [], initiatives: []
  },
  'ryu-hasan': {
    profile: {
      id: '99999999-9999-9999-9999-999999999999',
      slug: 'ryu-hasan',
      name: 'DR. RYU HASAN',
      title: 'THE STRATEGISTS • PAKAR NEUROSAINS • EDUKATOR BIOLOGI PERILAKU',
      category: 'THE STRATEGISTS',
      bio_paragraphs: [
        'Dr. Ryu Hasan adalah dokter spesialis bedah saraf dan komunikator sains biologi perilaku manusia.',
        'Dr. Ryu mendekonstruksi mitos emosi dan keputusan manusia dari sudut pandang neurosains.'
      ],
      quote: 'Semua keputusan dan emosi manusia berakar dari aktivitas biologis otak.',
      photo_url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80',
      verified: true,
      status_text: 'VERIFIKASI TERKURASI',
      social_links: {
        youtube: 'https://youtube.com/@ryuhasan'
      },
      theme_default: 'light'
    },
    lifeEvents: [], works: [], gallery: [], articles: [], testimonials: [], initiatives: []
  },
  'pandji-pragiwaksono': {
    profile: {
      id: 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa',
      slug: 'pandji-pragiwaksono',
      name: 'PANDJI PRAGIWAKSONO',
      title: 'THE ENTERTAINERS • KOMIKA SATIR • PIONIR STAND-UP COMEDY',
      category: 'THE ENTERTAINERS',
      bio_paragraphs: [
        'Pandji Pragiwaksono adalah pionir stand-up comedy Indonesia dan komika satir politik.',
        'Pandji mengajarkan pentingnya menertawakan isu-isu tabu dan menjaga ruang kebebasan berpendapat.'
      ],
      quote: 'Komedi adalah cara paling elegan untuk membicarakan hal-hal jujur yang biasanya ditakuti orang banyak.',
      photo_url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80',
      verified: true,
      status_text: 'VERIFIKASI TERKURASI',
      social_links: {
        youtube: 'https://youtube.com/@pandjipragiwaksono'
      },
      theme_default: 'dark'
    },
    lifeEvents: [], works: [], gallery: [], articles: [], testimonials: [], initiatives: []
  },
  'sal-priadi': {
    profile: {
      id: 'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb',
      slug: 'sal-priadi',
      name: 'SAL PRIADI',
      title: 'THE ENTERTAINERS • MUSISI POETIS • SASTRAWAN PERTUNJUKAN',
      category: 'THE ENTERTAINERS',
      bio_paragraphs: [
        'Sal Priadi adalah penyanyi dan penulis lagu Indonesia yang dikenal lewat narasi lirik musiknya yang sangat poetis.',
        'Karya-karyanya seperti Gala Bunga Matahari menjadi fenomena katarsis budaya bagi generasi muda.'
      ],
      quote: 'Musik adalah rumah bagi perasaan-perasaan yang tidak pernah sempat kita ucapkan secara langsung.',
      photo_url: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80',
      verified: true,
      status_text: 'VERIFIKASI TERKURASI',
      social_links: {
        spotify: 'https://open.spotify.com/artist/salpriadi'
      },
      theme_default: 'dark'
    },
    lifeEvents: [], works: [], gallery: [], articles: [], testimonials: [], initiatives: []
  },
  'arie-kriting': {
    profile: {
      id: 'cccccccc-cccc-cccc-cccc-cccccccccccc',
      slug: 'arie-kriting',
      name: 'ARIE KRITING',
      title: 'THE ENTERTAINERS • KOMIKA SATIR • SUARA KETENAGAN TIMUR',
      category: 'THE ENTERTAINERS',
      bio_paragraphs: [
        'Arie Kriting adalah komika, sutradara, dan aktor yang menyuarakan keadilan sosial Indonesia Timur.',
        'Arie menggunakan platform komedi untuk meruntuhkan stereotipe dan memperjuangkan hak warga daerah.'
      ],
      quote: 'Indonesia itu indah karena ragam suaranya, dan keadilan harus bisa dirasakan sama dari barat sampai ke timur.',
      photo_url: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=800&q=80',
      verified: true,
      status_text: 'VERIFIKASI TERKURASI',
      social_links: {
        youtube: 'https://youtube.com/@ArieKritingOfficial'
      },
      theme_default: 'dark'
    },
    lifeEvents: [], works: [], gallery: [], articles: [], testimonials: [], initiatives: []
  },
  'butet-manurung': {
    profile: {
      id: 'dddddddd-dddd-dddd-dddd-dddddddddddd',
      slug: 'butet-manurung',
      name: 'BUTET MANURUNG',
      title: 'THE GRASSROOTS • AKTIVIS PENDIDIKAN • PENDIRI SOKOLA RIMBA',
      category: 'THE GRASSROOTS',
      bio_paragraphs: [
        'Butet Manurung adalah pendiri Sokola Rimba yang mendedikasikan hidupnya mengajar Orang Rimba.',
        'Butet membela hak kedaulatan tanah dan identitas budaya masyarakat adat Indonesia.'
      ],
      quote: 'Pendidikan sejati tidak boleh mencabut seseorang dari akar budaya dan lingkungannya.',
      photo_url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80',
      verified: true,
      status_text: 'VERIFIKASI TERKURASI',
      social_links: {
        website: 'https://sokola.org'
      },
      theme_default: 'light'
    },
    lifeEvents: [], works: [], gallery: [], articles: [], testimonials: [], initiatives: []
  },
  'swietenia-puspa': {
    profile: {
      id: 'eeeeeeee-eeee-eeee-eeee-eeeeeeeeeeee',
      slug: 'swietenia-puspa',
      name: 'SWIETENIA PUSPA',
      title: 'THE GRASSROOTS • AKTIVIS LINGKUNGAN • PENDIRI DIVERS CLEAN ACTION',
      category: 'THE GRASSROOTS',
      bio_paragraphs: [
        'Swietenia Puspa Lestari adalah pendiri Divers Clean Action (DCA) yang menggerakkan pemuda membersihkan sampah laut.',
        'Swietenia masuk dalam daftar BBC 100 Women sebagai penggerak penyelamatan ekosistem laut Nusantara.'
      ],
      quote: 'Menjaga laut Indonesia bukan cuma tugas pemerintah, tapi tanggung jawab tiap individu.',
      photo_url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
      verified: true,
      status_text: 'VERIFIKASI TERKURASI',
      social_links: {
        website: 'https://diverscleanaction.org'
      },
      theme_default: 'light'
    },
    lifeEvents: [], works: [], gallery: [], articles: [], testimonials: [], initiatives: []
  },
  'mbah-minto': {
    profile: {
      id: 'ffffffff-ffff-ffff-ffff-ffffffffffff',
      slug: 'mbah-minto',
      name: 'MBAH MINTO',
      title: 'THE GRASSROOTS • MAESTRO BUDAYA • SIMBOL KEARIFAN LOKAL',
      category: 'THE GRASSROOTS',
      bio_paragraphs: [
        'Mbah Minto adalah maestro seni tradisi dan figur jenaka asal Klaten yang menjadi pahlawan kebudayaan warga.',
        'Sosoknya membuktikan bahwa kearifan lokal dan seni tradisi mampu menyatukan hati jutaan rakyat Indonesia.'
      ],
      quote: 'Keturunan dan gelar itu bisa dicari, tapi kejujuran hati dan rasa saling mengasihi adalah warisan terbesar manusia.',
      photo_url: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80',
      verified: true,
      status_text: 'VERIFIKASI TERKURASI',
      social_links: {
        youtube: 'https://youtube.com/@UCPoket'
      },
      theme_default: 'light'
    },
    lifeEvents: [], works: [], gallery: [], articles: [], testimonials: [], initiatives: []
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
    lifeEvents: [], works: [], gallery: [], articles: [], testimonials: [], initiatives: []
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
    lifeEvents: [], works: [], gallery: [], articles: [], testimonials: [], initiatives: []
  }
};

export const directoryProfiles: Profile[] = Object.values(fallbackProfiles).map(item => item.profile);
