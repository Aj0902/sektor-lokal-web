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
    lifeEvents: [
      { id: '1', profile_id: '44444444-4444-4444-4444-444444444444', year_range: '2001 — 2017', title: 'DEDIKASI JURNALISME (METRO TV & MATA NAJWA)', description: 'Mengawali karier sebagai reporter lapangan, meliput Tsunami Aceh 2004, hingga memandu program dialog politik paling berpengaruh di Indonesia.', order_index: 1 },
      { id: '2', profile_id: '44444444-4444-4444-4444-444444444444', year_range: '2017', title: 'TITIK BALIK INDEPENDENSI (PENDIRIAN NARASI)', description: 'Mendirikan Narasi sebagai ekosistem media independen berbasis kisah, jurnalistik kritis, dan partisipasi aktif anak muda.', order_index: 2 },
      { id: '3', profile_id: '44444444-4444-4444-4444-444444444444', year_range: '2018 — 2023', title: 'DUTA BACA INDONESIA & EDUSIASI LITERASI', description: 'Menjabat sebagai Duta Baca Indonesia, berkeliling ke berbagai penjuru negeri untuk menyalakan gairah membaca dan literasi kritis.', order_index: 3 },
      { id: '4', profile_id: '44444444-4444-4444-4444-444444444444', year_range: '2024 — 2026', title: 'GERAKAN KAWAL WAKIL RAKYAT & NARRATIVE FREEDOM', description: 'Mengawal transparansi pemilu, membuka ruang debat publik anak muda, dan memperjuangkan kebebasan pers di era digital.', order_index: 4 }
    ],
    works: [
      { id: 'w1', profile_id: '44444444-4444-4444-4444-444444444444', title: 'Mata Najwa', category: 'Program Dialog Politik & Investigasi', description: 'Program acara perbincangan mendalam yang menguji ketajaman argumen pejabat publik dan menagih komitmen keadilan bagi masyarakat.', link_url: 'https://narasi.tv/mata-najwa', order_index: 1 },
      { id: 'w2', profile_id: '44444444-4444-4444-4444-444444444444', title: 'Narasi Ecosystem', category: 'Platform Media & Diskursus Publik', description: 'Ekosistem konten digital independen yang mewadahi suara anak muda, esai budaya, dan jurnalisme investigatif.', link_url: 'https://narasi.tv', order_index: 2 },
      { id: 'w3', profile_id: '44444444-4444-4444-4444-444444444444', title: 'Catatan Najwa', category: 'Karya Tulis & Esai Kebangsaan', description: 'Refleksi kritis dan catatan personal Najwa Shihab tentang perjalanan demokrasi, hukum, dan harapan warga Indonesia.', link_url: 'https://www.gramedia.com', order_index: 3 },
      { id: 'w4', profile_id: '44444444-4444-4444-4444-444444444444', title: 'Gerakan Indonesia Membaca & Literasi Warga', category: 'Advokasi Pendidikan & Kebudayaan', description: 'Inisiatif berkelanjutan memperluas akses buku dan ruang diskusi kritis bagi komunitas anak muda di daerah.', link_url: 'https://narasi.tv', order_index: 4 }
    ],
    gallery: [
      { id: 'g1', profile_id: '44444444-4444-4444-4444-444444444444', title: 'Mata Najwa: Panggung Dialog Politik & Akuntabilitas', image_url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80', order_index: 1 },
      { id: 'g2', profile_id: '44444444-4444-4444-4444-444444444444', title: 'Gerakan Literasi Warga: Berkeliling Pelosok Nusantara', image_url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80', order_index: 2 },
      { id: 'g3', profile_id: '44444444-4444-4444-4444-444444444444', title: 'Narasi Fest: Ruang Kolaborasi & Suara Anak Muda', image_url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80', order_index: 3 }
    ],
    articles: [
      { 
        id: 'a1', 
        profile_id: '44444444-4444-4444-4444-444444444444', 
        title: 'Menagih Marwah Keadilan: Mengapa Suara Warga Tak Boleh Dikebiri', 
        tag: 'ESAI JURNALISTIK', 
        read_time: '8 Menit Membaca', 
        description: 'Refleksi mendalam Najwa Shihab tentang peran vital pers dan jurnalisme kritis dalam mengawal kebebasan berpendapat dan transparansi publik.', 
        content_full: 'Di tengah arus informasi yang serba cepat dan riuhnya opini digital, peran jurnalisme tidak pernah surut dari garis depan pertahanan demokrasi.\n\nBagi Najwa Shihab, menagih pertanggungjawaban penguasa bukan persoalan konfrontasi politik, melainkan mandat konstitusional warga. Ketika ruang-ruang publik dipenuhi narasi rekayasa dan retorika manis, tugas pers adalah menghadirkan pertanyaan-pertanyaan jernih yang mewakili kegelisahan rakyat biasa.\n\n"Kebenaran tidak pernah takut pada pengujian," tegas Najwa. Mengawal keadilan memerlukan keberanian untuk tetap berdiri di sisi warga, menguji setiap kebijakan yang berdampak pada hajat hidup orang banyak, dan memastikan bahwa suara mereka yang tak terdengar tetap menggema di panggung nasional.', 
        link_url: '/artikel/menagih-marwah-keadilan-najwa-shihab', 
        order_index: 1 
      },
      { 
        id: 'a2', 
        profile_id: '44444444-4444-4444-4444-444444444444', 
        title: 'Catatan Keberanian: Menyalakan Nyala Literasi di Ujung Negeri', 
        tag: 'LITERASI & WARISAN', 
        read_time: '7 Menit Membaca', 
        description: 'Catatan perjalanan Najwa Shihab berkeliling pelosok Nusantara untuk membangun ruang baca dan kesadaran bernalar anak muda.', 
        content_full: 'Membaca bukan sekadar mengeja kata di atas kertas, melainkan membuka jendela kedaulatan berpikir.\n\nDalam perjalanannya sebagai Duta Baca Indonesia, Najwa menyaksikan sendiri dahaganya anak-anak di pelosok Nusantara akan ilmu pengetahuan. Dari perpustakaan apung di pesisir hingga pojok baca sederhana di kaki gunung, semangat gotong royong warga untuk merawat literasi selalu menjadi pemantik harapan.\n\nGenerasi muda yang kritis dan terdidik adalah benteng terkuat sebuah bangsa. Ketika anak-anak kita dibekali keberanian bernalar dan akses literasi yang luas, mereka tidak akan mudah digoyahkan oleh pembodohan atau disinformasi.', 
        link_url: '/artikel/catatan-keberanian-literasi-najwa-shihab', 
        order_index: 2 
      }
    ],
    testimonials: [
      { id: 't1', profile_id: '44444444-4444-4444-4444-444444444444', author_name: 'Gita Wirjawan', author_role: 'Pendidik & Founder Endgame Podcast', quote: 'Najwa adalah simbol keberanian jurnalisme Indonesia yang konsisten mengawal kualitas diskursus publik kita.', order_index: 1 },
      { id: 't2', profile_id: '44444444-4444-4444-4444-444444444444', author_name: 'Ferry Irwandi', author_role: 'Video Esais & Pendiri Malaka Project', quote: 'Ketajaman dan konsistensi Mba Nana dalam menagih akuntabilitas adalah inspirasi besar bagi gerakan nalar kritis anak muda.', order_index: 2 }
    ],
    initiatives: [
      { 
        id: 'i1', 
        profile_id: '44444444-4444-4444-4444-444444444444', 
        title: 'Buku Catatan Najwa', 
        category: 'Buku Resmi Gramedia', 
        description: 'Buku esai dan pemikiran kritis Najwa Shihab tentang perjalanan demokrasi, hukum, dan harapan kebangsaan.', 
        price: 'Rp 125.000', 
        image_url: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 
        action_text: 'Pesan Buku Resmi Gramedia', 
        link_url: 'https://www.gramedia.com', 
        order_index: 1 
      },
      { 
        id: 'i2', 
        profile_id: '44444444-4444-4444-4444-444444444444', 
        title: 'Merchandise Resmi Narasi', 
        category: 'Merchandise Resmi', 
        description: 'Koleksi apparel dan jurnal resmi Narasi bertema kebebasan bersuara dan literasi publik.', 
        price: 'Rp 199.000', 
        image_url: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80', 
        action_text: 'Kunjungi Narasi Store', 
        link_url: 'https://narasi.tv', 
        order_index: 2 
      },
      { 
        id: 'i3', 
        profile_id: '44444444-4444-4444-4444-444444444444', 
        title: 'Tiket Event Narasi Fest & Kelas Jurnalistik', 
        category: 'Tiket Resmi Event', 
        description: 'Tiket festival wawasan, kelas jurnalisme publik, dan temu komunitas pemuda Narasi.', 
        price: 'Rp 150.000', 
        image_url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80', 
        action_text: 'Pesan Tiket Resmi', 
        link_url: 'https://narasi.tv', 
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
