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
        'Sebagai mantan pegawai Kementerian Keuangan lulusan STAN, Ferry Irwandi paham betul bagaimana sistem bekerja dari dalam. Menghadapi jutaan anak muda dan warga biasa yang terus-menerus terjebak skema tipu-tipu finansial di media sosial, ia mengambil langkah yang tak lazim: menanggalkan status abdi negara yang aman demi membangun ruang edukasi independen yang berani bicara jujur dan tajam.',
        'Lewat Malaka Project dan kanal pribadinya, Ferry tak sekadar melontarkan kritik di layar kaca, ia turun gelanggang menciptakan aksi nyata. Mulai dari membongkar logika kotor industri judi online, mengajak generasi muda menerapkan stoikisme praktis sebagai tameng kecemasan, hingga menggalang dana gotong royong publik yang fantastis—mencapai lebih dari Rp 10,7 Miliar—untuk menalangi beasiswa kuliah dan UKT mahasiswa di berbagai pelosok daerah.'
      ],
      quote: 'Di tengah gempuran algoritma yang menjajakan kecemasan dan iming-iming kaya instan, nalar kritis itu bukan untuk gaya-gayaan. Ia adalah tameng utama agar hidup lo tetap waras dan merdeka dari manipulasi.',
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
      { id: '1', profile_id: '1e88343e-74f0-4595-8e11-3efa40ea9edc', year_range: '2013 — 2020', title: 'ABDI NEGARA (KEMENKEU)', description: 'Mengabdi di bawah bendera Kementerian Keuangan, menyaksikan langsung arsitektur anggaran negara dan timpangnya realitas ekonomi warga dari balik birokrasi.', order_index: 1 },
      { id: '2', profile_id: '1e88343e-74f0-4595-8e11-3efa40ea9edc', year_range: '2021', title: 'TITIK BALIK RESIGNASI', description: 'Memilih melepaskan posisi stabil dan prestisius ASN demi memperjuangkan independensi narasi serta edukasi publik, tanpa sekat-sekat protokoler.', order_index: 2 },
      { id: '3', profile_id: '1e88343e-74f0-4595-8e11-3efa40ea9edc', year_range: '2022 — 2023', title: 'KELAHIRAN MALAKA PROJECT', description: 'Mendirikan Malaka Project sebagai wahana diskursus independen yang konsisten memproduksi esai video berbobot tentang filsafat praktis, ekonomi makro, dan akal sehat.', order_index: 3 },
      { id: '4', profile_id: '1e88343e-74f0-4595-8e11-3efa40ea9edc', year_range: '2024 — 2026', title: 'BEASISWA 10 MILIAR & BANTUAN UKT', description: 'Menghimpun solidaritas publik lewat gotong royong menembus angka Rp 10,7 Miliar untuk beasiswa daerah, subsidi UKT, dan menopang masa depan mahasiswa dari keluarga rentan.', order_index: 4 }
    ],
    works: [
      { id: 'w1', profile_id: '1e88343e-74f0-4595-8e11-3efa40ea9edc', title: 'Investigasi & Pembongkaran Skema Ponzi / Judol', category: 'Riset Finansial & Advokasi Publik', description: 'Pembedahan ilmiah dan rasional tentang probabilitas judi online dan arsitektur penipuan finansial digital yang sukses menguras kantong jutaan warga tanpa sadar.', link_url: 'https://youtube.com/@ferryirwandi', order_index: 1 },
      { id: 'w2', profile_id: '1e88343e-74f0-4595-8e11-3efa40ea9edc', title: 'Malaka Project', category: 'Media Riset & Diskursus Independen', description: 'Platform video esai tajam dengan lebih dari 1 juta pelanggan yang menguliti isu filsafat, ekonomi makro, dan kesadaran politik dengan cara yang relevan bagi anak muda.', link_url: 'https://malakaproject.id', order_index: 2 },
      { id: 'w3', profile_id: '1e88343e-74f0-4595-8e11-3efa40ea9edc', title: 'Buku Prinsipal Ekonomi & Stoikisme Praktis', category: 'Karya Tulis & Panduan Bernalar', description: 'Buku panduan merakit kembali nalar rasional, menavigasi ketidakpastian lewat filsafat stoikisme yang membumi dan mudah dipraktikkan.', link_url: 'https://www.gramedia.com', order_index: 3 },
      { id: 'w4', profile_id: '1e88343e-74f0-4595-8e11-3efa40ea9edc', title: 'Gerakan Beasiswa & Bantuan UKT Mahasiswa', category: 'Filantropi & Pendidikan Daerah', description: 'Inisiatif solidaritas massal yang mendanai SPP/UKT ribuan mahasiswa daerah berprestasi yang terancam putus kuliah.', link_url: 'https://kitabisa.com', order_index: 4 }
    ],
    gallery: [
      { id: 'g1', profile_id: '1e88343e-74f0-4595-8e11-3efa40ea9edc', title: 'Mimbar Bebas: Dialektika Nalar Kritis di Hadapan Ribuan Mahasiswa', image_url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80', order_index: 1 },
      { id: 'g2', profile_id: '1e88343e-74f0-4595-8e11-3efa40ea9edc', title: 'Dapur Riset & Produksi Malaka Project: Membedah Alur Keuangan Gelap', image_url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80', order_index: 2 },
      { id: 'g3', profile_id: '1e88343e-74f0-4595-8e11-3efa40ea9edc', title: 'Penyaluran Nyata: Beasiswa & Subsidi UKT Mahasiswa Berprestasi Daerah', image_url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80', order_index: 3 }
    ],
    articles: [
      { id: 'a1', profile_id: '1e88343e-74f0-4595-8e11-3efa40ea9edc', title: 'Membongkar Jebakan Ilusi: Catatan Investigasi Ferry Irwandi Melawan Gurita Judol', tag: 'INVESTIGASI & ADVOKASI', read_time: '7 Menit Membaca', description: 'Kisah di balik layar perlawanan Ferry membongkar manipulasi psikologis di balik judi online: mengapa bandar tidak pernah kalah dan bagaimana menjaga akal sehat.', content_full: 'Sepanjang tahun, pesan masuk Ferry Irwandi dipenuhi curhatan pilu. Mahasiswa kehilangan tabungan kuliah, buruh terjerat utang demi "kemenangan semu". Bagi Ferry, ini bukan masalah nasib, melainkan manipulasi algoritma. "Secara matematika, bandar tidak akan pernah kalah," tegasnya. Melalui riset di Malaka Project, Ferry membongkar transaksi gelap dan membedah psikologi keserakahan diri.', link_url: '/artikel/membongkar-jebakan-ilusi-investigasi-ferry-irwandi', order_index: 1 },
      { id: 'a2', profile_id: '1e88343e-74f0-4595-8e11-3efa40ea9edc', title: 'Tenang di Tengah Badai: Stoikisme Praktis Ala Ferry Irwandi untuk Generasi yang Gampang Cemas', tag: 'FILSAFAT & DIALEKTIKA', read_time: '8 Menit Membaca', description: 'Bagaimana filosofi stoikisme terapan menyelamatkan Ferry dari ketakutan saat resign dan menghadapi serangan digital dengan fokus pada apa yang bisa dikendalikan.', content_full: 'Ketika meninggalkan zona nyaman ASN di 2021, Ferry juga merasakan cemas. Di titik itulah Stoikisme berhenti menjadi sekadar kutipan estetis dan menjadi jangkar hidupnya. Prinsip dikotomi kendali memungkinkannya mengabaikan kebisingan opini dan serangan digital, untuk fokus menghasilkan karya dan menggalang dana lebih dari Rp 10 Miliar. Stoikisme, bagi Ferry, adalah cara menjadi batu karang di tengah badai.', link_url: '/artikel/tenang-di-tengah-badai-stoikisme-ferry-irwandi', order_index: 2 }
    ],
    testimonials: [
      { id: 't1', profile_id: '1e88343e-74f0-4595-8e11-3efa40ea9edc', author_name: 'Gita Wirjawan', author_role: 'Pendidik & Founder Endgame Podcast', quote: 'Ferry mampu mengemas materi keuangan dan diskursus sosial yang berat menjadi narasi yang sangat relevan dan membumi bagi generasi muda.', order_index: 1 },
      { id: 't2', profile_id: '1e88343e-74f0-4595-8e11-3efa40ea9edc', author_name: 'Baskara Putra (Hindia)', author_role: 'Musisi & Penulis Lagu', quote: 'Konsistensinya menyuarakan kebenaran di tengah riuhnya internet memberikan rasa aman dan titik tumpu rasional bagi anak muda.', order_index: 2 }
    ],
    initiatives: [
      { id: 'i1', profile_id: '1e88343e-74f0-4595-8e11-3efa40ea9edc', title: 'Buku Panduan Bernalar & Stoikisme Praktis', category: 'Buku Resmi', description: 'Karya literatur komprehensif yang mengupas metode dikotomi kendali, pertahanan logika dari manipulasi finansial, dan navigasi hidup.', price: 'Rp 149.000', image_url: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', action_text: 'Pesan Buku', link_url: 'https://www.gramedia.com', order_index: 1 },
      { id: 'i2', profile_id: '1e88343e-74f0-4595-8e11-3efa40ea9edc', title: 'Apparel Resmi Kolektif Malaka Project', category: 'Merchandise', description: 'Koleksi apparel resmi bertema kesadaran nalar di mana seluruh keuntungan dialokasikan untuk mendanai operasional riset dan beasiswa.', price: 'Rp 249.000', image_url: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80', action_text: 'Kunjungi Store', link_url: 'https://malakaproject.id', order_index: 2 },
      { id: 'i3', profile_id: '1e88343e-74f0-4595-8e11-3efa40ea9edc', title: 'Kanal Donasi Beasiswa Warga & Bantuan UKT', category: 'Gotong Royong', description: 'Kanal crowdfunding resmi di Kitabisa yang telah menyalurkan dana fantastis demi pendidikan mahasiswa daerah berprestasi.', price: 'Donasi Terbuka', image_url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80', action_text: 'Salurkan Donasi', link_url: 'https://kitabisa.com', order_index: 3 }
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
        'Karier Najwa Shihab tidak dibangun dari meja redaksi yang nyaman, melainkan dari keberaniannya turun ke jalan, meliput bencana tsunami Aceh 2004, hingga mencecar para penguasa di kursi panas Mata Najwa. Mantan jurnalis RCTI dan Metro TV ini telah membuktikan bahwa ruang wawancara bisa menjadi pengadilan publik ketika sistem hukum sering kali lumpuh saat menghadapi koruptor kakap dan politisi bermasalah.',
        'Ketika iklim televisi mulai beralih sekadar mengejar rating, Najwa mengambil langkah berani dengan mendirikan Narasi. Ia melepaskan diri dari raksasa media tradisional untuk membangun ekosistem jurnalisme partisipatif yang menjadikan warga—terutama anak muda—bukan hanya sebagai penonton, tapi juga agen pengawal demokrasi dan akuntabilitas publik di era digital.'
      ],
      quote: 'Kekuasaan cenderung korup, dan satu-satunya obat penawar dari penyakit itu adalah warga yang berani mengawasi, bertanya, dan menagih janji tanpa rasa takut.',
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
      { id: '1', profile_id: '44444444-4444-4444-4444-444444444444', year_range: '2001 — 2017', title: 'ERA METRO TV & MATA NAJWA', description: 'Merintis karir sebagai reporter lapangan hingga menjadi pembawa acara talkshow politik paling berpengaruh di Indonesia, berhadapan langsung dengan para penguasa.', order_index: 1 },
      { id: '2', profile_id: '44444444-4444-4444-4444-444444444444', year_range: '2018', title: 'MENDIRIKAN NARASI TV', description: 'Mengambil langkah independen dengan membangun perusahaan media digital berbasis jurnalisme warga, lepas dari bayang-bayang media konglomerat.', order_index: 2 },
      { id: '3', profile_id: '44444444-4444-4444-4444-444444444444', year_range: '2020', title: 'WAWANCARA KURSI KOSONG', description: 'Sebuah manuver jurnalistik legendaris; mewawancarai kursi kosong Menteri Kesehatan di tengah krisis pandemi ketika pejabat publik enggan memberikan transparansi.', order_index: 3 }
    ],
    works: [
      { id: 'w1', profile_id: '44444444-4444-4444-4444-444444444444', title: 'Mata Najwa: Dialog dan Akuntabilitas', category: 'Talkshow Politik & Jurnalistik', description: 'Program bincang-bincang ikonik yang menjadi arena pertarungan argumen para elit politik dan sarana warga menagih janji kampanye secara transparan.', link_url: 'https://narasi.tv', order_index: 1 },
      { id: 'w2', profile_id: '44444444-4444-4444-4444-444444444444', title: 'Narasi TV & Narasi Newsroom', category: 'Platform Media Warga', description: 'Ekosistem media digital yang memproduksi investigasi jurnalisme data (OSINT) untuk mengungkap kebrutalan aparat dan berbagai ketidakadilan sosial.', link_url: 'https://narasi.tv', order_index: 2 },
      { id: 'w3', profile_id: '44444444-4444-4444-4444-444444444444', title: 'Buku: Catatan Najwa', category: 'Karya Tulis & Pemikiran', description: 'Kumpulan refleksi dan kritik pedas tentang kondisi sosial politik Indonesia, ditulis dengan rima yang khas dan tajam.', link_url: 'https://www.gramedia.com', order_index: 3 }
    ],
    gallery: [
      { id: 'g1', profile_id: '44444444-4444-4444-4444-444444444444', title: 'Di Balik Layar Narasi Newsroom: Investigasi Open Source', image_url: 'https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1200&q=80', order_index: 1 },
      { id: 'g2', profile_id: '44444444-4444-4444-4444-444444444444', title: 'Wawancara Eksklusif: Menagih Jawaban dari Penguasa', image_url: 'https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?auto=format&fit=crop&w=1200&q=80', order_index: 2 }
    ],
    articles: [
      { id: 'a1', profile_id: '44444444-4444-4444-4444-444444444444', title: 'Kursi Kosong dan Demokrasi yang Menghindar', tag: 'OPINI & REFLEKSI', read_time: '5 Menit Membaca', description: 'Membedah mengapa aksi monolog di depan kursi kosong menjadi simbol paling memukul bagi pejabat publik yang menolak akuntabilitas saat pandemi.', content_full: 'Keputusan untuk mewawancarai kursi kosong bukan sekadar gimik televisi. Itu adalah manifestasi dari frustrasi publik terhadap pejabat yang lari dari tanggung jawab. Di saat ribuan nyawa melayang dan ketidakpastian memuncak, sikap bersembunyi dari pertanyaan publik adalah pengkhianatan terhadap sumpah jabatan.', link_url: '#', order_index: 1 },
      { id: 'a2', profile_id: '44444444-4444-4444-4444-444444444444', title: 'Dari Televisi Menuju Partisipasi Warga: Perjalanan Narasi', tag: 'MEDIA & JURNALISME', read_time: '6 Menit Membaca', description: 'Bagaimana Najwa Shihab mentransformasi bentuk jurnalisme dari siaran satu arah menjadi gerakan investigasi kolaboratif berbasis komunitas warga.', content_full: 'Era informasi menuntut kebaruan bentuk. Kita tidak bisa lagi hanya melempar berita ke udara lalu berharap perubahan terjadi. Lewat Narasi, jurnalisme menjadi dua arah. Komunitas warga dilibatkan mencari fakta, membongkar hoaks, hingga menganalisis jejak digital pejabat korup bersama jurnalis profesional.', link_url: '#', order_index: 2 }
    ],
    testimonials: [
      { id: 't1', profile_id: '44444444-4444-4444-4444-444444444444', author_name: 'Jusuf Kalla', author_role: 'Mantan Wakil Presiden RI', quote: 'Najwa adalah pewawancara yang cerdas, tajam, dan tidak pernah membiarkan tamunya lolos dari substansi yang harus dijawab.', order_index: 1 },
      { id: 't2', profile_id: '44444444-4444-4444-4444-444444444444', author_name: 'Dandhy Laksono', author_role: 'Jurnalis Investigasi Independen', quote: 'Langkah Najwa membangun Narasi membuktikan bahwa jurnalisme bermutu masih memiliki tempat yang besar di era clickbait.', order_index: 2 }
    ],
    initiatives: [
      { id: 'i1', profile_id: '44444444-4444-4444-4444-444444444444', title: 'Merchandise Kata-kata Mata Najwa', category: 'Apparel', description: 'Kaus dan aksesori dengan kutipan satir khas Catatan Najwa yang menjadi medium berekspresi secara politis bagi anak muda.', price: 'Rp 175.000', image_url: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80', action_text: 'Lihat Koleksi', link_url: 'https://narasi.tv', order_index: 1 },
      { id: 'i2', profile_id: '44444444-4444-4444-4444-444444444444', title: 'Buku Catatan Najwa Edisi Diperbarui', category: 'Literatur', description: 'Kumpulan rima dan narasi pengantar Mata Najwa yang membingkai persoalan kronis bangsa.', price: 'Rp 95.000', image_url: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', action_text: 'Pesan Sekarang', link_url: 'https://www.gramedia.com', order_index: 2 }
    ]
  },
  'dandhy-dwi-laksono': {
    profile: {
      id: 'dandhy-1234',
      slug: 'dandhy-dwi-laksono',
      name: 'DANDHY DWI LAKSONO',
      title: 'THE GRASSROOTS • JURNALIS INVESTIGASI • CO-FOUNDER WATCHDOC',
      category: 'THE GRASSROOTS',
      bio_paragraphs: [
        'Dandhy Dwi Laksono tidak percaya pada narasi pembangunan sepihak yang disajikan pemerintah. Ia menaiki sepeda motor keliling Nusantara dalam Ekspedisi Indonesia Biru dan Ekspedisi Indonesia Baru, masuk ke pedalaman tambang nikel hingga menyeberangi laut Papua, demi mendokumentasikan kehancuran ekologis dan perampasan lahan yang sering disembunyikan dari layar televisi nasional.',
        'Melalui rumah produksi Watchdoc Documentary, Dandhy merintis model jurnalisme independen berbasis koperasi dan urunan warga (crowdfunding). Karya-karyanya seperti Sexy Killers, The Endgames, dan Silat Tani tidak hanya ditonton jutaan kali, tapi juga sukses mengorganisir gerakan perlawanan sipil akar rumput. Ia membuktikan bahwa jurnalisme yang memihak pada kaum marjinal punya daya dobrak mengubah kebijakan.'
      ],
      quote: 'Kemajuan yang dibangun di atas penderitaan masyarakat adat dan kerusakan lingkungan bukanlah pembangunan. Itu adalah bentuk penjajahan gaya baru.',
      photo_url: 'https://images.unsplash.com/photo-1542156822-6924d1a71ace?auto=format&fit=crop&w=800&q=80',
      verified: true,
      status_text: 'VERIFIKASI TERKURASI',
      social_links: {
        youtube: 'https://youtube.com/@watchdoc',
        twitter: 'https://twitter.com/Dandhy_Laksono',
        instagram: 'https://instagram.com/dandhy_laksono',
        website: 'https://watchdoc.co.id'
      },
      theme_default: 'dark'
    },
    lifeEvents: [
      { id: '1', profile_id: 'dandhy-1234', year_range: '2015', title: 'EKSPEDISI INDONESIA BIRU', description: 'Mengelilingi Indonesia menggunakan sepeda motor untuk merekam konflik agraria, memotret realitas suku adat yang tergusur investasi tambang dan perkebunan monokultur.', order_index: 1 },
      { id: '2', profile_id: 'dandhy-1234', year_range: '2019', title: 'RILIS FILM SEXY KILLERS', description: 'Merilis dokumenter investigasi oligarki batu bara menjelang Pemilu 2019 yang memicu diskusi nasional hingga menembus puluhan juta penayangan YouTube.', order_index: 2 },
      { id: '3', profile_id: 'dandhy-1234', year_range: '2021', title: 'RAMON MAGSAYSAY AWARD', description: 'Menerima penghargaan Ramon Magsaysay bersama Watchdoc atas dedikasi jurnalistik dalam membela keadilan lingkungan dan hak asasi manusia di Asia.', order_index: 3 },
      { id: '4', profile_id: 'dandhy-1234', year_range: '2022', title: 'EKSPEDISI INDONESIA BARU', description: 'Melakukan ekspedisi lanjutan bersama kelompok koperasi warga untuk meneliti ketahanan pangan lokal, pertanian mandiri, dan krisis iklim.', order_index: 4 }
    ],
    works: [
      { id: 'w1', profile_id: 'dandhy-1234', title: 'Sexy Killers (Dokumenter)', category: 'Investigasi Lingkungan & Politik', description: 'Mengungkap jaring-jaring kepemilikan bisnis batu bara para elite politik dan dampak mematikannya bagi ekosistem serta kesehatan masyarakat sekitar.', link_url: 'https://youtube.com/@watchdoc', order_index: 1 },
      { id: 'w2', profile_id: 'dandhy-1234', title: 'Ekspedisi Indonesia Baru', category: 'Seri Jurnalistik Perjalanan', description: 'Seri dokumenter koperasi media yang memotret kekuatan pangan masyarakat akar rumput melawan gempuran korporasi pertanian industri.', link_url: 'https://youtube.com/@watchdoc', order_index: 2 },
      { id: 'w3', profile_id: 'dandhy-1234', title: 'The Endgames', category: 'Dokumenter Korupsi', description: 'Menginvestigasi pembusukan institusi pemberantasan korupsi akibat intervensi kekuasaan dan pelemahan kewenangan.', link_url: 'https://youtube.com/@watchdoc', order_index: 3 }
    ],
    gallery: [
      { id: 'g1', profile_id: 'dandhy-1234', title: 'Merekam Penghancuran Karst di Pegunungan Kendeng', image_url: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=1200&q=80', order_index: 1 },
      { id: 'g2', profile_id: 'dandhy-1234', title: 'Layar Tancap Warga: Nobar Dokumenter di Area Konflik Agraria', image_url: 'https://images.unsplash.com/photo-1542382156909-9ae37b3f56fd?auto=format&fit=crop&w=1200&q=80', order_index: 2 }
    ],
    articles: [
      { id: 'a1', profile_id: 'dandhy-1234', title: 'Di Balik Koperasi Media: Jurnalisme yang Dibayar oleh Publik', tag: 'MODEL BISNIS & MEDIA', read_time: '6 Menit Membaca', description: 'Bagaimana Watchdoc melepaskan diri dari belenggu donatur korporat dengan beralih pada model keanggotaan warga (crowdfunding).', content_full: 'Jika jurnalisme digerakkan oleh dana korporasi ekstraktif, tidak mungkin ia bisa independen melaporkan perusakan alam. Watchdoc membangun sistem patungan warga; sebuah koperasi ide dan dana. Hasilnya adalah karya-karya murni tanpa sensor, yang langsung dikembalikan sebagai amunisi wacana bagi rakyat sipil.', link_url: '#', order_index: 1 },
      { id: 'a2', profile_id: 'dandhy-1234', title: 'Jejak Nikel dan Narasi Semu Transisi Energi', tag: 'EKOLOGI & ADVOKASI', read_time: '7 Menit Membaca', description: 'Kritik tajam terhadap proyek ambisius baterai listrik yang justru melahirkan petaka lingkungan baru di timur Indonesia.', content_full: 'Transisi energi yang digaungkan pemerintah seringkali memihak pabrik dan ibu kota, sementara di Halmahera dan Morowali, sungai berubah merah bata. Emisi karbon mungkin turun di jalan protokol Jakarta, tetapi kehidupan ruang hidup masyarakat lokal musnah digilas alat berat demi menambang nikel.', link_url: '#', order_index: 2 }
    ],
    testimonials: [
      { id: 't1', profile_id: 'dandhy-1234', author_name: 'Haris Azhar', author_role: 'Aktivis HAM', quote: 'Dandhy dan Watchdoc adalah nyala api akal sehat di tengah matinya suara kritis media-media arus utama.', order_index: 1 }
    ],
    initiatives: [
      { id: 'i1', profile_id: 'dandhy-1234', title: 'Keanggotaan Koperasi Ekspedisi Indonesia Baru', category: 'Koperasi & Media', description: 'Menjadi anggota koperasi patungan warga untuk membiayai operasional riset dan produksi jurnalisme dokumenter independen.', price: 'Sistem Urunan', image_url: 'https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=800&q=80', action_text: 'Gabung Koperasi', link_url: 'https://koperasi.watchdoc.co.id', order_index: 1 }
    ]
  },
  'farwiza-farhan': {
    profile: {
      id: 'farwiza-5678',
      slug: 'farwiza-farhan',
      name: 'FARWIZA FARHAN',
      title: 'THE GRASSROOTS • AKTIVIS KONSERVASI HAKA • PELINDUNG LEUSER',
      category: 'THE GRASSROOTS',
      bio_paragraphs: [
        'Sebagai pakar biologi konservasi asal Aceh, Farwiza Farhan meletakkan taruhan hidupnya untuk mempertahankan Ekosistem Leuser—satu-satunya tempat di bumi di mana harimau, gajah, badak, dan orangutan sumatra hidup berdampingan. Lewat Yayasan HAkA (Hutan, Alam, dan Lingkungan Aceh), ia menggugat pemerintah dan korporasi kelapa sawit yang secara ilegal merusak paru-paru dunia tersebut.',
        'Lebih dari sekadar advokasi ruang sidang, Farwiza turun ke hutan menggalang kekuatan dari komunitas akar rumput. Ia memelopori pemberdayaan barisan perempuan ranger (penjaga hutan) di Aceh yang berani berpatroli menghadang pembalak liar. Atas keberaniannya memutus rantai impunitas perusak alam, Farwiza diakui di panggung global dan diangkat dalam majalah TIME sebagai sosok pemimpin iklim masa depan.'
      ],
      quote: 'Pohon yang ditebang hari ini tidak hanya menghilangkan rumah bagi harimau, tapi juga merampas ruang hidup, udara, dan masa depan anak cucu kita yang tak ternilai harganya.',
      photo_url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80',
      verified: true,
      status_text: 'VERIFIKASI TERKURASI',
      social_links: {
        instagram: 'https://instagram.com/farwiza',
        twitter: 'https://twitter.com/farwiza',
        website: 'https://www.haka.or.id/'
      },
      theme_default: 'light'
    },
    lifeEvents: [
      { id: '1', profile_id: 'farwiza-5678', year_range: '2012', title: 'MENDIRIKAN YAYASAN HAkA', description: 'Mendirikan Yayasan Hutan, Alam, dan Lingkungan Aceh untuk membangun pertahanan hukum sipil dan mobilisasi perlindungan Ekosistem Leuser.', order_index: 1 },
      { id: '2', profile_id: 'farwiza-5678', year_range: '2016', title: 'WHITLEY FUND FOR NATURE AWARD', description: 'Menerima penghargaan lingkungan prestisius dari Inggris atas perannya dalam kasus peradilan denda Rp 366 Miliar bagi perusahaan pembakar hutan.', order_index: 2 },
      { id: '3', profile_id: 'farwiza-5678', year_range: '2022', title: 'TIME 100 NEXT', description: 'Dinobatkan sebagai salah satu pemimpin masa depan dunia oleh Majalah TIME, bersanding dengan tokoh iklim dan inovator global.', order_index: 3 }
    ],
    works: [
      { id: 'w1', profile_id: 'farwiza-5678', title: 'Advokasi Penyelamatan Ekosistem Leuser', category: 'Konservasi & Advokasi Hukum', description: 'Gugatan perdata berkelanjutan terhadap korporasi perkebunan kelapa sawit raksasa yang mencoba mengubah fungsi kawasan pelestarian menjadi konsesi industri.', link_url: 'https://www.haka.or.id/', order_index: 1 },
      { id: 'w2', profile_id: 'farwiza-5678', title: 'Inisiatif Ranger Perempuan Aceh', category: 'Pemberdayaan Akar Rumput', description: 'Merekrut, melatih, dan memberdayakan perempuan lokal untuk memimpin operasi patroli hutan, mengubah lanskap konservasi yang selama ini didominasi pria.', link_url: 'https://www.haka.or.id/', order_index: 2 }
    ],
    gallery: [
      { id: 'g1', profile_id: 'farwiza-5678', title: 'Patroli Hutan Bersama Komunitas Ranger Perempuan di Aceh', image_url: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80', order_index: 1 }
    ],
    articles: [
      { id: 'a1', profile_id: 'farwiza-5678', title: 'Perempuan di Garis Depan Pertahanan Leuser', tag: 'KONSERVASI & GENDER', read_time: '6 Menit Membaca', description: 'Mengapa melibatkan perempuan lokal adalah kunci utama keberhasilan konservasi hutan dan menekan laju deforestasi.', content_full: 'Selama ini upaya penjagaan hutan sering dianggap ranah maskulin yang mengandalkan aparat bersenjata. Namun Farwiza membuktikan, ketika perempuan desa yang kehidupannya paling rentan terhadap bencana ekologis dilatih menjadi ranger, mereka memiliki militansi menjaga hutan yang luar biasa tangguh dan persisten.', link_url: '#', order_index: 1 }
    ],
    testimonials: [
      { id: 't1', profile_id: 'farwiza-5678', author_name: 'Leonardo DiCaprio', author_role: 'Aktor & Aktivis Lingkungan', quote: 'Dedikasi Farwiza dan timnya di HAkA sangat krusial dalam melindungi benteng terakhir ekosistem satwa liar paling luar biasa di Sumatera.', order_index: 1 }
    ],
    initiatives: [
      { id: 'i1', profile_id: 'farwiza-5678', title: 'Donasi Program Konservasi Leuser', category: 'Lingkungan', description: 'Platform donasi terbuka bagi perlengkapan lapangan dan logistik patroli hutan bagi tim penjaga konservasi Yayasan HAkA.', price: 'Bantu Donasi', image_url: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80', action_text: 'Dukung HAkA', link_url: 'https://www.haka.or.id/', order_index: 1 }
    ]
  },
  'onno-w-purbo': {
    profile: {
      id: 'onno-9999',
      slug: 'onno-w-purbo',
      name: 'ONNO W. PURBO',
      title: 'THE STRATEGISTS • BAPAK INTERNET RAKYAT • PAKAR TI',
      category: 'THE STRATEGISTS',
      bio_paragraphs: [
        'Jauh sebelum istilah startup digital dan unicorn menjamur, Onno W. Purbo telah meletakkan batu pertama infrastruktur internet akar rumput di Indonesia. Sang pakar teknologi informasi lulusan ITB dan Kanada ini memilih menolak bayaran mahal korporat multinasional demi mengajari pemuda desa menyolder antena Wajanbolic—menciptakan koneksi WiFi murah dari peralatan dapur bekas.',
        'Filosofi Onno sederhana: akses informasi adalah hak asasi manusia, bukan komoditas monopoli raksasa telekomunikasi. Melalui gerakan RT/RW Net dan OpenBTS (Base Transceiver Station mandiri), ia memecahkan isolasi ratusan daerah pelosok. Perjuangan panjangnya membebaskan frekuensi publik dari jerat regulasi usang menjadikannya legenda hidup demokrasi digital yang diakui dunia lewat penghargaan bergengsi dari Internet Society.'
      ],
      quote: 'Kemajuan sejati sebuah bangsa tidak diukur dari seberapa canggih teknologi di ibu kota, tapi dari seberapa mampu rakyat di desa merakit sendiri koneksi untuk memerdekakan pikiran mereka.',
      photo_url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
      verified: true,
      status_text: 'VERIFIKASI TERKURASI',
      social_links: {
        youtube: 'https://youtube.com/@onnowpurbo',
        twitter: 'https://twitter.com/onnowpurbo',
        website: 'https://lms.onnocenter.or.id/'
      },
      theme_default: 'dark'
    },
    lifeEvents: [
      { id: '1', profile_id: 'onno-9999', year_range: '1990an', title: 'MERINTIS JARINGAN PAGUYUBAN INTERNET', description: 'Membangun infrastruktur amatir radio jaringan paket (packet radio) di ITB sebagai cikal bakal internet kolektif pertama di tanah air.', order_index: 1 },
      { id: '2', profile_id: 'onno-9999', year_range: '2005', title: 'INOVASI ANTENA WAJANBOLIC', description: 'Mempopulerkan desain antena WiFi murah terbuat dari wajan masak untuk menarik sinyal internet jarak jauh bagi masyarakat pedesaan.', order_index: 2 },
      { id: '3', profile_id: 'onno-9999', year_range: '2013', title: 'GERAKAN OPEN BTS & RT/RW NET', description: 'Memelopori perakitan tower BTS mini swadaya masyarakat, melawan sentralisasi infrastruktur telekomunikasi komersial yang mengabaikan pelosok.', order_index: 3 },
      { id: '4', profile_id: 'onno-9999', year_range: '2020', title: 'POSTEL AWARD (INTERNET SOCIETY)', description: 'Menerima Jonathan B. Postel Service Award sebagai penghormatan tertinggi global atas jasa demokratisasi akses internet di negara berkembang.', order_index: 4 }
    ],
    works: [
      { id: 'w1', profile_id: 'onno-9999', title: 'Arsitektur Jaringan RT/RW Net', category: 'Infrastruktur Komunitas', description: 'Sistem tata kelola jaringan internet swadaya di mana warga secara patungan membeli bandwidth satelit lalu membagikannya secara lokal nirkabel.', link_url: 'https://lms.onnocenter.or.id/', order_index: 1 },
      { id: 'w2', profile_id: 'onno-9999', title: 'Portal Pembelajaran eLearning OnnoCenter', category: 'Edukasi Terbuka', description: 'Repositori raksasa berisikan ribuan jurnal teknis, buku digital, dan materi keamanan siber (cyber security) yang dapat diakses gratis oleh siapa saja.', link_url: 'https://lms.onnocenter.or.id/', order_index: 2 }
    ],
    gallery: [
      { id: 'g1', profile_id: 'onno-9999', title: 'Workshop Wajanbolic: Perakitan Antena Internet di Balai Desa', image_url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80', order_index: 1 }
    ],
    articles: [
      { id: 'a1', profile_id: 'onno-9999', title: 'Internet Sebagai Hak Asasi Manusia, Bukan Monopoli Kartel', tag: 'INFRASTRUKTUR & KEBIJAKAN', read_time: '6 Menit Membaca', description: 'Mengapa membebaskan frekuensi publik adalah kunci bagi pemerataan pendidikan dan ekonomi daerah-daerah tertinggal.', content_full: 'Ketika negara gagal menghadirkan konektivitas di ruang yang tidak menguntungkan secara bisnis, solusinya bukan menunggu bantuan operator besar. Solusinya adalah melonggarkan regulasi frekuensi agar warga bisa berdaulat atas teknologinya sendiri. Wajanbolic dan OpenBTS adalah simbol perlawanan terhadap kapitalisme data.', link_url: '#', order_index: 1 }
    ],
    testimonials: [
      { id: 't1', profile_id: 'onno-9999', author_name: 'Andrew Sullivan', author_role: 'Presiden Internet Society', quote: 'Onno Purbo membuktikan betapa kekuatan teknologi di tangan komunitas lokal mampu meruntuhkan batas-batas kemiskinan informasi.', order_index: 1 }
    ],
    initiatives: [
      { id: 'i1', profile_id: 'onno-9999', title: 'Akses eLearning & Buku Gratis IT', category: 'Pendidikan', description: 'Unduh ratusan panduan teknis, sistem operasi linux, hingga instalasi keamanan siber secara cuma-cuma melalui portal OnnoCenter.', price: 'Gratis / Open Source', image_url: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80', action_text: 'Akses Portal OnnoCenter', link_url: 'https://lms.onnocenter.or.id/', order_index: 1 }
    ]
  },
  'sujiwo-tejo': {
    profile: {
      id: '55555555-5555-5555-5555-555555555555',
      slug: 'sujiwo-tejo',
      name: 'SUJIWO TEJO',
      title: 'THE VOICES • BUDAYAWAN • PRESIDEN JANCUKERS',
      category: 'THE VOICES',
      bio_paragraphs: [
        'Sujiwo Tejo (sering dipanggil Mbah Jiwo) tidak pernah sudi terjebak dalam protokoler tata krama yang munafik. Sebagai mantan jurnalis Kompas yang banting setir menjadi dalang, ia mengacak-acak pakem pewayangan Jawa, menyisipkan orasi politik satir tentang korupsi birokrasi lewat medium wayang suket. Sosoknya bagaikan Punakawan di dunia nyata—mengkritik keras raja-raja senayan, tapi dengan humor teaterikal yang membuat rakyat tertawa lepas.',
        'Menyebut dirinya sebagai "Presiden Jancukers", Sujiwo Tejo mendekonstruksi makna kata makian menjadi simbol keakraban egaliter dan penolakan terhadap kediktatoran norma kaku. Lewat buku sastra seperti Rahvayana hingga lagu puitis Titi Kolo Mangsa, ia sukses membedah kompleksitas cinta, agama, dan nasionalisme dengan kejujuran batin yang mengoyak jiwa intelektual muda.'
      ],
      quote: 'Korupsi paling besar di republik ini bukanlah pencurian uang negara, melainkan pencurian akal sehat dan kejujuran nurani oleh para pemimpin yang gila hormat.',
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
    lifeEvents: [
      { id: '1', profile_id: '55555555-5555-5555-5555-555555555555', year_range: '1998', title: 'DEKONSTRUKSI WAYANG SUKET', description: 'Menggelar pertunjukan teater wayang dari rumput ilalang untuk menyindir keras kekuasaan Orde Baru di saat kebebasan berekspresi dibungkam.', order_index: 1 },
      { id: '2', profile_id: '55555555-5555-5555-5555-555555555555', year_range: '2012', title: 'GERAKAN JANCUKERS', description: 'Mendeklarasikan Republik Jancukers melalui Twitter; sebuah pergerakan sosial-kultural akar rumput yang menentang puritanisme dan fanatisme buta.', order_index: 2 },
      { id: '3', profile_id: '55555555-5555-5555-5555-555555555555', year_range: '2014', title: 'RILIS BUKU RAHVAYANA', description: 'Memutarbalikkan epik Ramayana dengan menjadikan sosok angkara murka Rahwana sebagai protagonis pemuja cinta sejati, membongkar dogma hitam-putih.', order_index: 3 }
    ],
    works: [
      { id: 'w1', profile_id: '55555555-5555-5555-5555-555555555555', title: 'Pertunjukan Teater Wayang Suket', category: 'Seni Pertunjukan', description: 'Lakon wayang nontradisional berbalut gamelan progresif yang secara eksplisit membongkar skandal korupsi dan kebobrokan hukum.', link_url: 'https://youtube.com/@sujiwotejo', order_index: 1 },
      { id: 'w2', profile_id: '55555555-5555-5555-5555-555555555555', title: 'Album Musik: Titi Kolo Mangsa', category: 'Musik Folklor', description: 'Album spiritual yang menggabungkan mantra-mantra Jawa kuno dengan aransemen jazz orkestra kontemporer.', link_url: 'https://open.spotify.com/artist/sujiwotejo', order_index: 2 },
      { id: 'w3', profile_id: '55555555-5555-5555-5555-555555555555', title: 'Buku Tuhan Maha Asyik', category: 'Filsafat Sastra', description: 'Buku kolaborasi bersama Emha Ainun Nadjib yang mendekatkan konsep spiritualitas ketuhanan secara inklusif dan membumi.', link_url: 'https://www.gramedia.com', order_index: 3 }
    ],
    gallery: [
      { id: 'g1', profile_id: '55555555-5555-5555-5555-555555555555', title: 'Monolog Sarkasme Wayang Kulit di Malam Puncak Kemerdekaan', image_url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80', order_index: 1 }
    ],
    articles: [
      { id: 'a1', profile_id: '55555555-5555-5555-5555-555555555555', title: 'Tertawa Melihat Penguasa Menari di Atas Penderitaan', tag: 'KOLOM BUDAYA', read_time: '5 Menit Membaca', description: 'Refleksi mendalam tentang seni sebagai perisai terakhir masyarakat sipil untuk waras menghadapi absurditas politik.', content_full: 'Ketika keadilan sudah dibeli dan hukum hanya berlaku bagi mereka yang kalah bayar, satu-satunya senjatamu adalah menertawakan mereka. Tertawa bukan tanda kalah, tapi tanda bahwa akal sehatmu tidak bisa dibeli.', link_url: '#', order_index: 1 }
    ],
    testimonials: [
      { id: 't1', profile_id: '55555555-5555-5555-5555-555555555555', author_name: 'Cak Nun', author_role: 'Budayawan & Pemikir Islam', quote: 'Sujiwo Tejo adalah anomali indah. Ia liar, urakan, namun pikirannya sanggup menembus langit spiritualitas yang seringkali luput dari kaum beragama formal.', order_index: 1 }
    ],
    initiatives: [
      { id: 'i1', profile_id: '55555555-5555-5555-5555-555555555555', title: 'Koleksi Sarung & Pakaian Adat Jancukers', category: 'Merchandise Budaya', description: 'Apparel bercorak etnik dan sarung harian sebagai identitas pembebasan budaya nusantara.', price: 'Rp 180.000', image_url: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80', action_text: 'Beli di Toko', link_url: 'https://sujiwotejo.com', order_index: 1 }
    ]
  },
  'cania-citta': {
    profile: {
      id: '66666666-6666-6666-6666-666666666666',
      slug: 'cania-citta',
      name: 'CANIA CITTA',
      title: 'THE VOICES • PEMIKIR POLITIK • CO-FOUNDER MALAKA',
      category: 'THE VOICES',
      bio_paragraphs: [
        'Cania Citta Marsshita mengukuhkan posisinya bukan sekadar sebagai figur intelektual muda, melainkan mesin pembongkar dogma. Berangkat dari latar belakang ilmu politik Universitas Indonesia, Cania berani menginterogasi kebijakan negara yang restriktif, menelanjangi regulasi diskriminatif, serta memperjuangkan kebebasan individu secara frontal di ruang digital yang kerap dipenuhi sensor moral konservatif.',
        'Sebagai Co-Founder Malaka Project, ia mentransformasi debat akademis kaku menjadi video esai populer yang renyah. Analisis Cania tentang hak kebebasan berpendapat, otonomi tubuh perempuan, dan bahaya polarisasi identitas berhasil memaksa Gen Z untuk tidak sekadar membebek argumen mayoritas, melainkan membangun pisau bedah logika yang runcing.'
      ],
      quote: 'Rasionalitas bukanlah sekadar alat untuk berdebat, melainkan senjata utama untuk membebaskan dirimu dari tirani mayoritas dan kebijakan negara yang ingin mendikte ruang privatmu.',
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
    lifeEvents: [
      { id: '1', profile_id: '66666666-6666-6666-6666-666666666666', year_range: '2017', title: 'GEJOLAK KEBEBASAN SIPIL', description: 'Memulai perlawanan intelektual publik melalui artikel dan debat kritis melawan RUU bermasalah yang mengancam otonomi ranah privat warga.', order_index: 1 },
      { id: '2', profile_id: '66666666-6666-6666-6666-666666666666', year_range: '2019', title: 'MENDIRIKAN PLATFORM EDUKASI', description: 'Berperan besar dalam menginisiasi platform-platform dialog interaktif yang mengenalkan pemikiran kebebasan individu di kancah media digital Indonesia.', order_index: 2 },
      { id: '3', profile_id: '66666666-6666-6666-6666-666666666666', year_range: '2022', title: 'AKSELERASI MALAKA PROJECT', description: 'Bergabung merintis Malaka Project bersama Ferry Irwandi, mengelevasi diskursus rasionalitas ekonomi dan kebebasan di hadapan jutaan subscriber.', order_index: 3 }
    ],
    works: [
      { id: 'w1', profile_id: '66666666-6666-6666-6666-666666666666', title: 'Seri Kajian Kebebasan Sipil', category: 'Analisis Kebijakan', description: 'Pembedahan tajam terhadap intervensi negara dalam kehidupan pribadi warga negara, dari kebebasan berekspresi hingga perlindungan data.', link_url: 'https://youtube.com/@caniacitta', order_index: 1 },
      { id: 'w2', profile_id: '66666666-6666-6666-6666-666666666666', title: 'Esai Politik Gen Z', category: 'Literasi Digital', description: 'Modul pemikiran kritis mengenai teori demokrasi dan filosofi kebebasan, yang disusun dalam bahasa visual yang lugas dan memikat.', link_url: 'https://malakaproject.id', order_index: 2 },
      { id: 'w3', profile_id: '66666666-6666-6666-6666-666666666666', title: 'Podcast Dialektika Cania', category: 'Ruang Diskursus', description: 'Mengupas kedangkalan argumen publik bersama tokoh intelektual, memancing pendengar untuk berani berbeda argumen secara ilmiah.', link_url: 'https://open.spotify.com', order_index: 3 }
    ],
    gallery: [
      { id: 'g1', profile_id: '66666666-6666-6666-6666-666666666666', title: 'Sidang Akademis: Membedah Ancaman Sensor Digital', image_url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80', order_index: 1 }
    ],
    articles: [
      { id: 'a1', profile_id: '66666666-6666-6666-6666-666666666666', title: 'Negara, Hukum, dan Tubuh Warga', tag: 'OPINI POLITIK', read_time: '7 Menit Membaca', description: 'Mengapa pembatasan kebebasan pribadi melalui dalih moralitas akan selalu berakhir menjadi alat tirani oleh kelas penguasa.', content_full: 'Menitipkan urusan ruang privat kepada intervensi undang-undang adalah bunuh diri demokrasi. Kebebasan tidak boleh disandera oleh selera otoritas moral yang berganti-ganti, sebab ketika negara dibiarkan mengatur wilayah paling privat, perlahan ia akan merampas kebebasan berekspresimu di ruang publik.', link_url: '#', order_index: 1 }
    ],
    testimonials: [
      { id: 't1', profile_id: '66666666-6666-6666-6666-666666666666', author_name: 'Ferry Irwandi', author_role: 'Founder Malaka Project', quote: 'Ketajaman logika Cania adalah antitesis sempurna dari perdebatan emosional medsos yang berisik namun kosong substansi.', order_index: 1 }
    ],
    initiatives: [
      { id: 'i1', profile_id: '66666666-6666-6666-6666-666666666666', title: 'Dukungan Riset Independen Malaka', category: 'Jurnalisme & Riset', description: 'Memberikan sumbangsih operasional agar produksi video analisis filosofis tetap berjalan tanpa setiran sponsor eksternal.', price: 'Patreon / Saweria', image_url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80', action_text: 'Dukung Riset', link_url: 'https://malakaproject.id', order_index: 1 }
    ]
  },
  'jerome-polin': {
    profile: {
      id: '77777777-7777-7777-7777-777777777777',
      slug: 'jerome-polin',
      name: 'JEROME POLIN',
      title: 'THE STRATEGISTS • EDUKATOR MATEMATIKA • FOUNDER MANTAPPU',
      category: 'THE STRATEGISTS',
      bio_paragraphs: [
        'Jerome Polin Sijabat membuktikan bahwa pendidikan tidak melulu soal dinding kelas yang kaku. Meraih beasiswa penuh di Universitas Waseda Jepang, ia berhasil meruntuhkan trauma jutaan anak muda Indonesia terhadap angka dan kalkulus lewat kanal YouTube Nihongo Mantappu. Ia mengubah materi yang ditakuti menjadi permainan asah otak yang mendebarkan sekaligus menghibur.',
        'Tidak berhenti sebagai edukator digital, Jerome mentransformasi keberhasilannya menjadi imperium bisnis Mantappu Corp, mengelola talent, dan menciptakan ekosistem F&B Menantea. Perjalanannya menegaskan satu pesan krusial: menguasai sains dan matematika adalah kunci strategi terbaik untuk memenangkan persaingan di era industri pop yang bergerak cepat.'
      ],
      quote: 'Belajar matematika bukanlah sekadar mengafal deretan rumus usang. Ia adalah seni melatih otakmu agar selalu siap memecahkan masalah paling rumit di dunia nyata dengan perhitungan yang presisi.',
      photo_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
      verified: true,
      status_text: 'VERIFIKASI TERKURASI',
      social_links: {
        youtube: 'https://youtube.com/@nihongomantappu',
        instagram: 'https://instagram.com/jeromepolin'
      },
      theme_default: 'light'
    },
    lifeEvents: [
      { id: '1', profile_id: '77777777-7777-7777-7777-777777777777', year_range: '2016', title: 'BEASISWA WASEDA UNIVERSITY', description: 'Berhasil meraih beasiswa penuh dari Mitsui Bussan Scholarship untuk studi Matematika Terapan di salah satu universitas paling elit di Jepang.', order_index: 1 },
      { id: '2', profile_id: '77777777-7777-7777-7777-777777777777', year_range: '2017', title: 'RINTISAN NIHONGO MANTAPPU', description: 'Mendirikan kanal YouTube edukasi untuk berbagi keseharian mahasiswa di Jepang, memperkenalkan budaya belajar keras ala Asia Timur ke pemuda Indonesia.', order_index: 2 },
      { id: '3', profile_id: '77777777-7777-7777-7777-777777777777', year_range: '2021', title: 'EKSPANSI MANTAPPU CORP & MENANTEA', description: 'Mengembangkan ekosistem bisnis rintisan di bidang manajemen bakat (talent management) multinasional serta jaringan ritel makanan dan minuman yang viral.', order_index: 3 }
    ],
    works: [
      { id: 'w1', profile_id: '77777777-7777-7777-7777-777777777777', title: 'Buku Mantappu Jiwa', category: 'Otobiografi Edukatif', description: 'Buku rekam jejak perjuangan yang sarat akan pesan daya juang, kalkulasi strategi akademis, dan rahasia memenangkan beasiswa luar negeri.', link_url: 'https://www.gramedia.com', order_index: 1 },
      { id: 'w2', profile_id: '77777777-7777-7777-7777-777777777777', title: 'Seri Battle Matematika', category: 'Konten Edukasi', description: 'Format video yang menantang publik figur maupun ahli internasional dalam adu cepat menyelesaikan soal rumit—mengemas sains layaknya turnamen olahraga.', link_url: 'https://youtube.com/@nihongomantappu', order_index: 2 },
      { id: 'w3', profile_id: '77777777-7777-7777-7777-777777777777', title: 'Mantappu Corp', category: 'Agensi Bakat Digital', description: 'Jejaring talent management yang menaungi kreator konten Asia dan mendorong sinergi antar budaya pop Indonesia dan Jepang.', link_url: 'https://mantappu.com', order_index: 3 }
    ],
    gallery: [
      { id: 'g1', profile_id: '77777777-7777-7777-7777-777777777777', title: 'Mengajar Kalkulus dengan Gaya Komedi di Studio Tokyo', image_url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80', order_index: 1 }
    ],
    articles: [
      { id: 'a1', profile_id: '77777777-7777-7777-7777-777777777777', title: 'Menghapus Fobia Angka: Strategi Jerome Menyihir Siswa Indonesia', tag: 'EDUKASI & INOVASI', read_time: '6 Menit Membaca', description: 'Bagaimana pendekatan edutainment sukses merevolusi stigma seramnya pelajaran matematika di sekolah menengah.', content_full: 'Rendahnya literasi sains dan matematika di Indonesia tidak berakar pada lambannya pemikiran, melainkan pada metode pedagogik yang militeristik dan kering. Dengan mengubah soal probabilitas menjadi tebak-tebakan komedi bersama teman, Jerome meretas kebiasaan malas mikir di kepala siswa.', link_url: '#', order_index: 1 }
    ],
    testimonials: [
      { id: 't1', profile_id: '77777777-7777-7777-7777-777777777777', author_name: 'Deddy Corbuzier', author_role: 'Podcaster & Entertainer', quote: 'Anak muda butuh figur yang pamer prestasi akademis, bukan sekadar pamer kekayaan palsu, dan Jerome mengisi celah itu dengan sangat cerdas.', order_index: 1 }
    ],
    initiatives: [
      { id: 'i1', profile_id: '77777777-7777-7777-7777-777777777777', title: 'Buku Mantappu Jiwa Edisi Spesial', category: 'Buku Motivasi', description: 'Kisah nyata perjalanan menembus rintangan finansial demi meraih pendidikan terbaik di Asia.', price: 'Rp 99.000', image_url: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', action_text: 'Beli Buku', link_url: 'https://www.gramedia.com', order_index: 1 }
    ]
  },
  'yohanes-surya': {
    profile: {
      id: '88888888-8888-8888-8888-888888888888',
      slug: 'yohanes-surya',
      name: 'PROF. YOHANES SURYA',
      title: 'THE STRATEGISTS • FISIKAWAN • PENGEMBANG METODE GASING',
      category: 'THE STRATEGISTS',
      bio_paragraphs: [
        'Ketika banyak pakar akademik bersembunyi di menara gading universitas bergengsi, Prof. Yohanes Surya Ph.D memilih jalan ekstrem: terbang ke pelosok desa di Papua, Nusa Tenggara, hingga pedalaman Kalimantan. Sang fisikawan meyakini bahwa keterbelakangan pendidikan di Indonesia bukanlah kutukan genetis, melainkan kegagalan distribusi metode pembelajaran yang layak.',
        'Menciptakan metode GASING (Gampang, Asyik, dan Menyenangkan), ia berhasil membuktikan tesisnya dengan gemilang. Ia melatih anak-anak dari daerah tertinggal—yang awalnya tidak bisa membaca dan berhitung—menjadi juara bertahan yang meraih medali emas di ajang Olimpiade Fisika dan Matematika tingkat dunia, mengalahkan negara-negara maju raksasa.'
      ],
      quote: 'Tidak ada anak yang terlahir bodoh. Jika seorang anak tidak mampu memahami sains, itu artinya ia hanya belum dipertemukan dengan guru dan cara belajar yang tepat.',
      photo_url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
      verified: true,
      status_text: 'VERIFIKASI TERKURASI',
      social_links: {
        website: 'https://yohanessurya.com'
      },
      theme_default: 'light'
    },
    lifeEvents: [
      { id: '1', profile_id: '88888888-8888-8888-8888-888888888888', year_range: '1993', title: 'TIM OLIMPIADE FISIKA INDONESIA', description: 'Mendirikan Tim Olimpiade Fisika Indonesia (TOFI) dan mulai melatih pelajar untuk berlaga di kejuaraan sains tingkat internasional dengan target emas.', order_index: 1 },
      { id: '2', profile_id: '88888888-8888-8888-8888-888888888888', year_range: '2006', title: 'EMAS ABSOLUT DUNIA', description: 'Mencetak sejarah ketika anak didiknya dari Indonesia merebut gelar juara dunia absolut (Absolute Winner) di ajang Olimpiade Fisika Asia dan Dunia.', order_index: 2 },
      { id: '3', profile_id: '88888888-8888-8888-8888-888888888888', year_range: '2010 — Kini', title: 'EKSPANSI METODE GASING', description: 'Menjalin kolaborasi dengan pemerintah daerah di kawasan Timur Indonesia untuk menerapkan metode GASING secara masif kepada ribuan anak suku pedalaman.', order_index: 3 }
    ],
    works: [
      { id: 'w1', profile_id: '88888888-8888-8888-8888-888888888888', title: 'Modul Pembelajaran GASING', category: 'Sistem Edukasi Inovatif', description: 'Rangkaian materi pelatihan guru dan kurikulum cepat berhitung yang mendekonstruksi kompleksitas fisika/matematika menjadi intuisi visual sederhana.', link_url: 'https://yohanessurya.com', order_index: 1 },
      { id: 'w2', profile_id: '88888888-8888-8888-8888-888888888888', title: 'Yayasan Surya Institute', category: 'Pusat Inkubasi Sains Terpadu', description: 'Lembaga yang fokus pada riset pedagogi dan pelatihan sains intensif bagi guru maupun murid unggulan yang siap menembus arena kompetisi global.', link_url: 'https://yohanessurya.com', order_index: 2 },
      { id: 'w3', profile_id: '88888888-8888-8888-8888-888888888888', title: 'Seri Buku Fisika Gampang Asyik Menyenangkan', category: 'Literatur Sains', description: 'Buku teks revolusioner yang diadaptasi secara luas di ribuan sekolah di Indonesia sebagai pedoman utama menghapus trauma belajar fisika.', link_url: 'https://www.gramedia.com', order_index: 3 }
    ],
    gallery: [
      { id: 'g1', profile_id: '88888888-8888-8888-8888-888888888888', title: 'Latihan Intensif Fisika bersama Anak-Anak Pedalaman Papua', image_url: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80', order_index: 1 }
    ],
    articles: [
      { id: 'a1', profile_id: '88888888-8888-8888-8888-888888888888', title: 'Mengubah Kutukan Ketertinggalan Menjadi Emas Dunia', tag: 'INSPIRASI & SAINS', read_time: '7 Menit Membaca', description: 'Perjalanan panjang Prof Yohanes Surya merintis rute sains dari kelas darurat di Papua menuju panggung kemenangan olimpiade fisika di Eropa.', content_full: 'Selama bertahun-tahun dunia akademik menganggap wilayah timur tidak mampu bersaing secara kognitif. Yohanes menampik argumen itu dengan radikal. Ia merekrut anak-anak suku pedalaman yang tak mengenal konsep gravitasi, melatih mereka dengan GASING siang malam. Hasilnya menggetarkan keangkuhan global: anak-anak itu berhasil mengalungkan medali emas.', link_url: '#', order_index: 1 }
    ],
    testimonials: [
      { id: 't1', profile_id: '88888888-8888-8888-8888-888888888888', author_name: 'Nadiem Makarim', author_role: 'Menteri Pendidikan (Eks)', quote: 'Pendekatan Prof Yohanes Surya adalah bukti nyata dari merdeka belajar—sebuah metode murni yang tidak dikte oleh silabus kaku, namun berorientasi pada daya nalar anak.', order_index: 1 }
    ],
    initiatives: [
      { id: 'i1', profile_id: '88888888-8888-8888-8888-888888888888', title: 'Paket Buku Latihan Metode GASING', category: 'Materi Belajar', description: 'Modul fisik dan digital yang sangat efektif dalam memandu orangtua/guru menanamkan konsep hitung dasar tanpa air mata.', price: 'Rp 220.000', image_url: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', action_text: 'Dapatkan Modul', link_url: 'https://yohanessurya.com', order_index: 1 }
    ]
  },
  'ryu-hasan': {
    profile: {
      id: '99999999-9999-9999-9999-999999999999',
      slug: 'ryu-hasan',
      name: 'DR. RYU HASAN',
      title: 'THE STRATEGISTS • PAKAR NEUROSAINS • EDUKATOR BIOLOGI PERILAKU',
      category: 'THE STRATEGISTS',
      bio_paragraphs: [
        'Dr. Ryu Hasan bukan sekadar dokter spesialis bedah saraf yang menghabiskan waktunya di ruang operasi, melainkan seorang pendedah kebohongan massal berbalut pseudosciece. Di saat publik Indonesia mabuk oleh klaim mistis, diet spiritual palsu, hingga cocokologi psikologi, Dr. Ryu hadir dengan pisau bedah biologi evolusioner dan neurosains yang tajam tak kenal kompromi.',
        'Melalui berbagai wawancara podcast, seminar, dan esai ilmiah populernya, ia mendekonstruksi mitos tentang kebebasan kehendak (free will), menjelaskan asal muasal empati hingga diskriminasi rasial murni dari aktivitas lobus frontal dan hormon neurotransmitter otak manusia. Pandangannya yang dingin, empiris, dan kadang terasa nihilistik telah membantu ribuan anak muda terbebas dari jebakan bias kognitif komersial.'
      ],
      quote: 'Semua keputusan heroik dan perasaan paling suci yang Anda yakini hari ini pada akhirnya bermuara pada aktivitas biologis miliaran sel saraf yang berseteru di balik tengkorak kepala Anda.',
      photo_url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80',
      verified: true,
      status_text: 'VERIFIKASI TERKURASI',
      social_links: {
        youtube: 'https://youtube.com/@ryuhasan'
      },
      theme_default: 'light'
    },
    lifeEvents: [
      { id: '1', profile_id: '99999999-9999-9999-9999-999999999999', year_range: '2000an', title: 'PRAKTIK BEDAH SARAF', description: 'Mendedikasikan karir medisnya dalam bidang neurologi dan bedah saraf yang menuntut presisi pemahaman terhadap arsitektur biologis otak manusia.', order_index: 1 },
      { id: '2', profile_id: '99999999-9999-9999-9999-999999999999', year_range: '2015', title: 'MENDOBRAK PSEUDOSCIENCE', description: 'Mulai vokal mengkritik praktik-praktik medis palsu (seperti pengobatan aktivasi otak tengah) di media sosial dan mengedukasi literasi berbasis neurosains modern.', order_index: 2 },
      { id: '3', profile_id: '99999999-9999-9999-9999-999999999999', year_range: '2021 — Kini', title: 'DIALEKTIKA NEUROSAINS SOSIAL', description: 'Menjadi narasumber utama di berbagai podcast progresif, menguliti perilaku korupsi, fanatisme beragama, dan asmara dari sudut pandang evolusi neurobiologi murni.', order_index: 3 }
    ],
    works: [
      { id: 'w1', profile_id: '99999999-9999-9999-9999-999999999999', title: 'Rasionalitas di Balik Tengkorak', category: 'Edukasi Literatur Sains', description: 'Kumpulan makalah dan pidato sains pop yang menjelaskan bagaimana otak mamalia memanipulasi kesadaran untuk menjamin insting bertahan hidup.', link_url: 'https://youtube.com', order_index: 1 },
      { id: 'w2', profile_id: '99999999-9999-9999-9999-999999999999', title: 'Mitos Otak Tengah dan Bias Medis', category: 'Advokasi Anti Penipuan Medis', description: 'Kampanye perlawanan ilmiah yang berhasil menghentikan berbagai lembaga bimbingan belajar komersial yang menjual klaim fiktif aktivasi otak ajaib.', link_url: 'https://youtube.com', order_index: 2 }
    ],
    gallery: [
      { id: 'g1', profile_id: '99999999-9999-9999-9999-999999999999', title: 'Diskusi Terbuka Membedah Mitos-Mitos Otak Manusia', image_url: 'https://images.unsplash.com/photo-1559757175-0eb30b96d52b?auto=format&fit=crop&w=1200&q=80', order_index: 1 }
    ],
    articles: [
      { id: 'a1', profile_id: '99999999-9999-9999-9999-999999999999', title: 'Mabuk Agama dan Hormon Dopamin: Sudut Pandang Evolusi', tag: 'NEUROSAINS & BUDAYA', read_time: '6 Menit Membaca', description: 'Analisis kontroversial Dr. Ryu tentang kaitan antara fanatisme, kebahagiaan ilusi komunitas, dan pelepasan hormon kebahagiaan di sirkuit otak.', content_full: 'Banyak pertikaian rasial dan dogma di dunia tidak dipicu oleh kebenaran ideologis, melainkan oleh kecanduan biologis sel otak terhadap hormon dopamin. Rasa "benar sendiri" memberikan sensasi kebahagiaan yang setara dengan obat penenang, menciptakan rantai setan permusuhan sosial.', link_url: '#', order_index: 1 }
    ],
    testimonials: [
      { id: 't1', profile_id: '99999999-9999-9999-9999-999999999999', author_name: 'Gita Wirjawan', author_role: 'Host Endgame Podcast', quote: 'Penjelasan dr. Ryu tentang fungsi otak dan biologi manusia merobohkan keangkuhan intelektual kita dan memaksa kita lebih rendah hati memahami asal-usul diri.', order_index: 1 }
    ],
    initiatives: [
      { id: 'i1', profile_id: '99999999-9999-9999-9999-999999999999', title: 'Masterclass Evolusi Perilaku & Neurosains', category: 'Kursus Online', description: 'Seri video pembelajaran premium yang membahas asal usul genetik dari penyakit mental, pengambilan risiko bisnis, hingga romantisme.', price: 'Rp 299.000', image_url: 'https://images.unsplash.com/photo-1559757175-0eb30b96d52b?auto=format&fit=crop&w=800&q=80', action_text: 'Daftar Kelas', link_url: 'https://youtube.com', order_index: 1 }
    ]
  },
  'pandji-pragiwaksono': {
    profile: {
      id: 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa',
      slug: 'pandji-pragiwaksono',
      name: 'PANDJI PRAGIWAKSONO',
      title: 'THE ENTERTAINERS • KOMIKA SATIR • PIONIR STAND-UP COMEDY',
      category: 'THE ENTERTAINERS',
      bio_paragraphs: [
        'Sebagai salah satu bapak pendiri ekosistem stand-up comedy di Indonesia, Pandji Pragiwaksono tidak pernah memposisikan komedi sekadar sebagai alat pereda tawa kosong. Baginya, komedi adalah pisau bedah sosial. Ia membongkar kemunafikan elit agama, mengoyak privilese oligarki, dan memaksa penontonnya menertawakan kecacatan moral bangsa ini di stadion yang penuh sesak penonton.',
        'Melalui berbagai tur dunia dan spesial pertunjukannya seperti Mesakke Bangsaku hingga Komoidoumenoi, Pandji menunjukkan kekuatan sejati seorang komika. Ia meletakkan kebebasan berpendapat bukan sebagai slogan teoretis, melainkan sebagai praktik nyata yang dieksekusi di ujung mikrofon, bahkan dengan risiko diboikot atau berurusan dengan ancaman tuntutan pidana pembatasan berekspresi.'
      ],
      quote: 'Komedi adalah cara paling elegan, paling cerdas, dan paling berbahaya untuk membicarakan hal-hal jujur yang biasanya ditakuti orang banyak.',
      photo_url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80',
      verified: true,
      status_text: 'VERIFIKASI TERKURASI',
      social_links: {
        youtube: 'https://youtube.com/@pandjipragiwaksono'
      },
      theme_default: 'dark'
    },
    lifeEvents: [
      { id: '1', profile_id: 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', year_range: '2011', title: 'KELAHIRAN STAND UP INDONESIA', description: 'Bersama beberapa rekan merintis komunitas dan acara televisi Stand Up Comedy, menggeser peta komedi nasional dari lawak slapstik ke arah observasi intelektual.', order_index: 1 },
      { id: '2', profile_id: 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', year_range: '2014', title: 'TUR DUNIA MESAKKE BANGSAKU', description: 'Melakukan tur stand-up komedi dunia pertama dari Indonesia, membawakan keresahan sosiopolitik tanah air ke audiens diaspora global.', order_index: 2 },
      { id: '3', profile_id: 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', year_range: '2023', title: 'HIJRAH KE NEW YORK', description: 'Mengambil langkah nekat meninggalkan tahta kejayaannya di Indonesia demi merintis karir sebagai komika kasta bawah di klub-klub komedi keras New York City.', order_index: 3 }
    ],
    works: [
      { id: 'w1', profile_id: 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', title: 'Special: Komoidoumenoi', category: 'Stand-Up Special', description: 'Pertunjukan masif berskala stadion yang menantang batas-batas sensor sosial di Indonesia terkait isu minoritas dan hegemoni kekuasaan.', link_url: 'https://comika.id', order_index: 1 },
      { id: 'w2', profile_id: 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', title: 'Buku: Nasional.Is.Me', category: 'Karya Tulis / Esai Pemuda', description: 'Esai perlawanan yang mendefinisikan ulang nasionalisme kaum muda, lepas dari belenggu dogmatis versi buku sejarah negara.', link_url: 'https://www.gramedia.com', order_index: 2 },
      { id: 'w3', profile_id: 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', title: 'Comika Company', category: 'Ekosistem Hiburan', description: 'Perusahaan inkubator stand-up komedi yang menyuplai talenta komika daerah ke layar lebar, manajemen, hingga rumah produksi independen.', link_url: 'https://comika.id', order_index: 3 }
    ],
    gallery: [
      { id: 'g1', profile_id: 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', title: 'Panggung Tunggal di Hadapan Ribuan Penonton Istora Senayan', image_url: 'https://images.unsplash.com/photo-1585699324551-f6c309eedeca?auto=format&fit=crop&w=1200&q=80', order_index: 1 }
    ],
    articles: [
      { id: 'a1', profile_id: 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', title: 'Melawan Sensor Lewat Lelucon Gelap', tag: 'OPINI & SENI', read_time: '6 Menit Membaca', description: 'Bagaimana stand-up comedy menjadi benteng pertahanan terakhir dari demokrasi yang semakin dicekik oleh undang-undang ITE.', content_full: 'Jika orang bisa dipenjara karena sekadar marah di sosial media, maka panggung komedi adalah celah pelarian kita. Sang pelawak bisa melempar kritik paling keras namun berlindung di balik premis dan punchline. Humor, pada dasarnya, adalah perisai politik rakyat.', link_url: '#', order_index: 1 }
    ],
    testimonials: [
      { id: 't1', profile_id: 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', author_name: 'Sujiwo Tejo', author_role: 'Budayawan', quote: 'Pandji membawa keberanian murni dalam kata-katanya. Ia berani mempertaruhkan popularitas demi menyampaikan kebenaran yang tak populer.', order_index: 1 }
    ],
    initiatives: [
      { id: 'i1', profile_id: 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', title: 'Akses Digital Comika.id', category: 'VOD Platform', description: 'Platform Video on Demand independen untuk menonton mahakarya stand-up special Pandji dan komika elit nasional tanpa pemotongan sensor TV.', price: 'Mulai Rp 100.000', image_url: 'https://images.unsplash.com/photo-1585699324551-f6c309eedeca?auto=format&fit=crop&w=800&q=80', action_text: 'Langganan Karya', link_url: 'https://comika.id', order_index: 1 }
    ]
  }
};

export const directoryProfiles: Profile[] = Object.values(fallbackProfiles).map(item => item.profile);
