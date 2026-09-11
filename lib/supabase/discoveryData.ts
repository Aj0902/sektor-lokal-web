export interface DiscoveryFigure {
  name: string;
  slug: string;
  role: string;
  connectingDiction: string;
  photoUrl?: string;
}

export interface DiscoveryLens {
  id: string;
  slug: string;
  name: string;
  editorialTitle: string;
  definition: string;
  narrative: string[];
  findingQuestion: string;
  color: string;
  accentBorder: string;
  figures: DiscoveryFigure[];
}

export const discoveryLenses: DiscoveryLens[] = [
  {
    id: '01',
    slug: 'penjaga-nalar',
    name: 'Penjaga Nalar',
    editorialTitle: 'Menolak Padam di Musim Bising',
    definition: 'Barisan yang menjaga kewarasan berpikir publik.',
    narrative: [
      'Ketika informasi bergerak jauh lebih cepat daripada kemampuan nalar publik untuk memeriksanya, ruang percakapan kita kerap dibanjiri kepalsuan yang diproduksi secara masif. Di era di mana polarisasi buatan dan rekayasa narasi mampu mengaburkan kebenaran, skeptisisme metodis menjadi instrumen pertahanan diri paling mendasar bagi setiap warga.',
      'Mereka yang berada di dalam laci ini bekerja di wilayah yang sering tidak kasat mata: menguji klaim, membongkar pasal hukum titipan, mempertanyakan kesewenang-wenangan kekuasaan, dan menyajikan jurnalisme investigasi audio-visual berbasis realitas lapangan yang luput dari media arus utama.'
    ],
    findingQuestion: 'Siapa yang membuat kita mampu melihat sesuatu yang sebelumnya tidak terlihat?',
    color: 'border-l-4 border-l-[#E11D48]',
    accentBorder: '#E11D48',
    figures: [
      {
        name: 'Najwa Shihab',
        slug: 'najwa-shihab',
        role: 'Jurnalis Investigasi & Pendiri Narasi Media',
        connectingDiction: 'Membuka ruang dialektika kritis independen dan menguji transparansi kebijakan elit politik secara lugas di hadapan jutaan publik.',
        photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Dandhy Dwi Laksono',
        slug: 'dandhy-dwi-laksono',
        role: 'Pendiri Watchdoc & Ekspedisi Indonesia Baru',
        connectingDiction: 'Merekam persekongkolan oligarki dan luka agraria lewat jurnalisme investigasi audio-visual yang diputar swadaya oleh warga di pematang sawah dan balai desa.',
        photoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Bivitri Susanti',
        slug: 'bivitri-susanti',
        role: 'Pakar Hukum Tata Negara & Co-founder STHI Jentera',
        connectingDiction: 'Mendekonstruksi manipulasi regulasi (autocratic legalism) menjadi analisis nalar sehat yang mudah dipahami warga sipil awam.',
        photoUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Aribowo Sasmito',
        slug: 'aribowo-sasmito',
        role: 'Co-founder & Fact-Check Specialist MAFINDO',
        connectingDiction: 'Menjaga benteng verifikasi fakta terbuka terbesar di Indonesia untuk menghentikan rantai penyebaran fitnah digital dan rekayasa kecerdasan buatan.',
        photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Abigail Limuria',
        slug: 'abigail-limuria',
        role: 'Co-founder Bijak Memilih & What The Fact Politics',
        connectingDiction: 'Mengolah data rekam jejak partai politik dan politisi menjadi visual informasi jernih yang memberdayakan pemilih pemula.',
        photoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Dr. Fahruddin Faiz',
        slug: 'fahruddin-faiz',
        role: 'Inisiator & Pengampu Ngaji Filsafat MJS Yogyakarta',
        connectingDiction: 'Membawa khazanah filsafat dan kebijaksanaan hidup ke ruang publik akar rumput secara inklusif untuk merawat kejernihan batin generasi muda.',
        photoUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80'
      }
    ]
  },
  {
    id: '02',
    slug: 'penyelamat-bumi',
    name: 'Penyelamat Bumi',
    editorialTitle: 'Bukan Sekadar Tagar di Layar',
    definition: 'Mereka yang bertaruh di lapangan untuk menahan kerusakan tapak.',
    narrative: [
      'Dari lebatnya benteng hutan tropis Leuser, aliran sungai yang tercemar mikroplastik industri, hingga bukit gundul yang langganan dilanda kekeringan, mereka berhadapan langsung dengan krisis ekologis yang nyata di depan mata.',
      'Mereka tidak berhenti pada deklarasi atau seminar lingkungan berbiaya mahal, melainkan bertaruh di tingkat tapak: menanam ratusan ribu pohon beringin secara mandiri, melatih warga menjadi detektif pencemaran air, hingga mendirikan industri daur ulang sirkular penopang rantai pasok nasional.'
    ],
    findingQuestion: 'Siapa yang benar-benar mengubah hubungan manusia dengan ekosistem di tingkat tapak?',
    color: 'border-l-4 border-l-[#10B981]',
    accentBorder: '#10B981',
    figures: [
      {
        name: 'Farwiza Farhan',
        slug: 'farwiza-farhan',
        role: 'Ketua Yayasan HAkA (Benteng Rimba Leuser)',
        connectingDiction: 'Memimpin litigasi tata ruang melawan industri perusak hutan dan menggalang barisan patroli ranger perempuan di garis depan rimba Leuser.',
        photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Mbah Sadiman',
        slug: 'mbah-sadiman',
        role: 'Inisiator Reboisasi Swadaya Bukit Gendol Wonogiri',
        connectingDiction: 'Menghidupkan kembali puluhan mata air di bukit tandus dengan menanam ratusan ribu pohon beringin secara tunggal selama 25 tahun.',
        photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Prigi Arisandi',
        slug: 'prigi-arisandi',
        role: 'Pendiri ECOTON & Detektif Sains Warga',
        connectingDiction: 'Melatih warga bantaran sungai menjadi detektif penguji kualitas air mandiri untuk membongkar perdagangan limbah plastik transnasional.',
        photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'M. Bijaksana Junerosano',
        slug: 'm-bijaksana-junerosano',
        role: 'Pendiri Waste4Change & Greeneration',
        connectingDiction: 'Merintis ekosistem pengelolaan sampah zero-waste to landfill berbasis standardisasi rantai pasok industri dan ekonomi sirkular modern.',
        photoUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'David Christian',
        slug: 'david-christian',
        role: 'Co-founder Evoware & Rethink Plastic',
        connectingDiction: 'Mengolah rumput laut lokal menjadi material kemasan sirkular yang terurai alami dan dapat dimakan untuk menggantikan saset plastik.',
        photoUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80'
      }
    ]
  },
  {
    id: '03',
    slug: 'pembangun-sistem',
    name: 'Pembangun Sistem',
    editorialTitle: 'Arsitek Fondasi Senyap',
    definition: 'Orang-orang yang membangun sesuatu agar tetap bekerja melampaui dirinya sendiri.',
    narrative: [
      'Tidak semua perubahan besar datang dalam bentuk panggung pidato megah. Sebagian hadir sebagai baris kode perangkat lunak, arsitektur data sipil terbuka, paten tomografi berkecepatan tinggi, atau protokol jaringan nirkabel murah yang perlahan mengubah cara masyarakat hidup dan bekerja.',
      'Mereka adalah para peretas etis, ilmuwan garasi, dan arsitek infrastruktur yang merancang instrumen publik berdaya tahan tinggi agar kemandirian teknologi terus bekerja bahkan ketika sang kreator tidak hadir.'
    ],
    findingQuestion: 'Siapa yang membangun sesuatu yang tetap bekerja bahkan ketika dirinya tidak hadir?',
    color: 'border-l-4 border-l-[#3B82F6]',
    accentBorder: '#3B82F6',
    figures: [
      {
        name: 'Dr. Onno W. Purbo',
        slug: 'onno-w-purbo',
        role: 'Inisiator Internet Rakyat, RT/RW-Net & OpenBTS',
        connectingDiction: 'Mendemokratisasi akses telekomunikasi dengan menciptakan arsitektur internet rakyat dari wajan penggorengan dan membagikan ilmunya secara cuma-cuma.',
        photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Ainun Najib',
        slug: 'ainun-najib',
        role: 'Arsitek Sistem Data Sipil, Inisiator KawalPemilu',
        connectingDiction: 'Menjaga transparansi suara demokrasi rakyat melalui agregasi data C1 terdesentralisasi berbasis kekuatan partisipasi sukarela warga.',
        photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Dr. Warsito P. Taruno',
        slug: 'warsito-p-taruno',
        role: 'Penemu Tomografi 4D (ECVT) & Pendiri CTech Labs',
        connectingDiction: 'Menciptakan pemindai tomografi 4D tercepat di dunia untuk riset energi dan terapi medis yang dikembangkan dari laboratorium mandiri.',
        photoUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Dr. Ayu Purwarianti',
        slug: 'ayu-purwarianti',
        role: 'Ketua Pusat Riset AI ITB & Pelopor NLP Nusantara',
        connectingDiction: 'Membangun korpus pemrosesan bahasa alami (NLP) kecerdasan buatan agar mesin mampu memahami bahasa daerah dan dialek percakapan informal Indonesia.',
        photoUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Alfatih Timur',
        slug: 'alfatih-timur',
        role: 'Co-founder & CEO Kitabisa.com',
        connectingDiction: 'Mentransformasikan budaya gotong royong tradisional ke dalam platform jembatan tolong-menolong digital yang transparan dan berskala masif.',
        photoUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80'
      }
    ]
  },
  {
    id: '04',
    slug: 'pejuang-akar-rumput',
    name: 'Pejuang Akar Rumput',
    editorialTitle: 'Di Tempat Negara Lupa Singgah',
    definition: 'Keteguhan yang menjaga martabat mereka yang paling sulit dijangkau.',
    narrative: [
      'Ada ketimpangan yang tidak otomatis selesai hanya karena undang-undang atau dokumen kebijakan telah diteken di meja birokrasi ibu kota. Di kepulauan terpencil dan pedalaman hutan ulayat, hukum formal kerap kalah cepat dengan penderitaan warga yang berhadapan dengan kemiskinan ekstrem dan perampasan ruang hidup.',
      'Di garis batas inilah para pejuang akar rumput hadir: mengoperasikan kapal bedah kayu di tengah badai laut lepas, mengajarkan membaca bagi anak-anak rimba, hingga berdiri tegak menolak pencaplokan tanah adat tanpa kompromi.'
    ],
    findingQuestion: 'Siapa yang bekerja di tempat sistem formal gagal menjangkau?',
    color: 'border-l-4 border-l-[#F59E0B]',
    accentBorder: '#F59E0B',
    figures: [
      {
        name: 'dr. Lie Dharmawan',
        slug: 'lie-dharmawan',
        role: 'Pendiri Rumah Sakit Apung doctorSHARE',
        connectingDiction: 'Menjual rumah pribadinya demi membiayai kapal bedah kayu yang menembus ombak samudera terdalam untuk mengoperasi ribuan warga pulau terluar secara cuma-cuma.',
        photoUrl: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Mama Aleta Baun',
        slug: 'mama-aleta-baun',
        role: 'Tokoh Adat Mollo NTT & Penjaga Mata Air',
        connectingDiction: 'Memimpin ratusan perempuan adat duduk menenun kain di depan moncong alat berat selama berbulan-bulan hingga izin tambang marmer dibatalkan total.',
        photoUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Rukka Sombolinggi',
        slug: 'rukka-sombolinggi',
        role: 'Sekretaris Jenderal Aliansi Masyarakat Adat Nusantara (AMAN)',
        connectingDiction: 'Memimpin perjuangan politik dan hukum untuk menyelamatkan jutaan hektare wilayah adat nusantara dari ancaman perampasan korporasi.',
        photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Butet Manurung',
        slug: 'saur-marlina-butet-manurung',
        role: 'Pendiri Sokola Institute',
        connectingDiction: 'Membekali masyarakat adat di pedalaman hutan dengan literasi kontekstual agar tidak terkelabui oleh perambah korporasi yang ingin mencaplok tanah ulayat.',
        photoUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Maria Catarina Sumarsih',
        slug: 'maria-catarina-sumarsih',
        role: 'Inisiator Aksi Kamisan & Penjaga Api Moral Keadilan',
        connectingDiction: 'Berdiri diam di seberang Istana Kepresidenan setiap hari Kamis selama hampir dua dekade menolak impunitas pelanggaran HAM berat.',
        photoUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80'
      }
    ]
  },
  {
    id: '05',
    slug: 'arsitek-usaha-mandiri',
    name: 'Arsitek Usaha Mandiri',
    editorialTitle: 'Membalik Arus Nilai',
    definition: 'Ketika usaha tidak berhenti pada transaksi, tetapi ikut membangun daya hidup.',
    narrative: [
      'Mereka menunjukkan bahwa keterbatasan material di desa dan pelosok nusantara tidak selalu harus berakhir sebagai komoditas mentah berharga murah. Dari sepeda bambu petung, olahan kakao murni bean-to-bar, anyaman lontar warisan leluhur, hingga limbah kulit ceker ayam, mereka membuktikan kedaulatan produksi lokal.',
      'Usaha yang mereka bangun tidak semata mengejar margin laba bagi segelintir pemodal, melainkan membangun rantai pasok etis yang membagi nilai tambah secara adil bersama para perajin dan petani desa.'
    ],
    findingQuestion: 'Siapa yang mengubah keterbatasan lokal menjadi model ekonomi yang bernilai?',
    color: 'border-l-4 border-l-[#EC4899]',
    accentBorder: '#EC4899',
    figures: [
      {
        name: 'Singgih Susilo Kartono',
        slug: 'singgih-susilo-kartono',
        role: 'Pendiri Spedagi, Magno & Penggagas Pasar Papringan',
        connectingDiction: 'Mengolah bambu petung desa Temanggung menjadi sepeda berpresisi tinggi yang lolos sertifikasi uji keselamatan jalan DIN Plus di Jerman.',
        photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Helianti Hilman',
        slug: 'helianti-hilman',
        role: 'Pendiri JAVARA Indigenous Indonesia',
        connectingDiction: 'Melindungi ribuan varietas benih pangan pusaka petani lokal dan membawanya ke pasar pangan organik kelas dunia di 30 negara.',
        photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Azalea Ayuningtyas',
        slug: 'azalea-ayuningtyas',
        role: 'Co-founder & CEO Du\'Anyam',
        connectingDiction: 'Mengubah tradisi anyaman daun lontar mama penganyam Flores Timur menjadi produk kriya bernilai tinggi yang mendanai perbaikan gizi ibu dan anak.',
        photoUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Tri Mumpuni',
        slug: 'tri-mumpuni',
        role: 'Direktur Eksekutif IBEKA',
        connectingDiction: 'Membangun kedaulatan energi di puluhan desa terpencil melalui pembangkit listrik mikrohidro yang dirawat dan dimiliki oleh komunitas warga sendiri.',
        photoUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Yukka Harsono',
        slug: 'yukka-harsono',
        role: 'Co-founder Brodo Footwear',
        connectingDiction: 'Memodernisasi sentra manufaktur kulit Cibaduyut dengan standar kendali mutu industri kontemporer dan akses langsung ke konsumen.',
        photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80'
      }
    ]
  },
  {
    id: '06',
    slug: 'perawat-jiwa-rasa',
    name: 'Perawat Jiwa & Rasa',
    editorialTitle: 'Ruang Hening di Tengah Histeria',
    definition: 'Mereka yang memberi bahasa bagi pengalaman manusia yang sulit dibicarakan.',
    narrative: [
      'Kelelahan batin, kecemasan eksistensial, luka sejarah, dan pencarian makna hidup hadir dalam denyut keseharian manusia urban modern. Di tengah kebisingan linimasa yang menuntut kepura-puraan bahagia, mereka yang berada di laci ini menyediakan ruang perlindungan emosional.',
      'Lewat lirik musik kontemplatif, sajak yang jernih dan hening, karya visual reflektif, hingga sinematografi yang menatap luka perempuan tanpa kepalsuan, mereka merawat kepekaan nurani bangsa.'
    ],
    findingQuestion: 'Siapa yang memberi masyarakat bahasa untuk memahami pengalaman batinnya?',
    color: 'border-l-4 border-l-[#8B5CF6]',
    accentBorder: '#8B5CF6',
    figures: [
      {
        name: 'Cholil Mahmud',
        slug: 'cholil-mahmud',
        role: 'Vokalis/Gitaris Efek Rumah Kaca',
        connectingDiction: 'Menghadirkan komposisi musik dan lirik kontemplatif yang menyuarakan luka politik, kerapuhan psikologis, dan perlawanan moral warga.',
        photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Kunto Aji',
        slug: 'kunto-aji',
        role: 'Musisi & Penggagas Album Mantra Mantra',
        connectingDiction: 'Mengubah karya musik pop menjadi instrumen terapi kesehatan mental, penerimaan diri, dan pelepasan beban emosional generasi muda.',
        photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Baskara Putra (Hindia)',
        slug: 'baskara-putra-hindia',
        role: 'Musisi & Penulis Lagu Generasi Muda',
        connectingDiction: 'Memotret secara telanjang tekanan hidup urban, depresi eksistensial, dan kepedihan kelas pekerja muda dalam lirik yang amat personal.',
        photoUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Nadin Amizah',
        slug: 'nadin-amizah',
        role: 'Musisi Folk Kontemplatif',
        connectingDiction: 'Menyediakan ruang perlindungan batin melalui untaian kata puitis yang merefleksikan rasa terima kasih, keluarga, dan ketakutan beranjak dewasa.',
        photoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Kamila Andini',
        slug: 'kamila-andini',
        role: 'Sutradara Sinema Artistik',
        connectingDiction: 'Membawa narasi penderitaan batin, hak otonomi tubuh, dan ketabahan perempuan Indonesia ke layar sinema artistik kelas dunia.',
        photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80'
      }
    ]
  },
  {
    id: '07',
    slug: 'penjaga-tawa',
    name: 'Penjaga Tawa',
    editorialTitle: 'Menertawakan Kemunafikan',
    definition: 'Ketika humor menjadi cara untuk tetap waras menghadapi kenyataan.',
    narrative: [
      'Tawa tidak selalu berarti melupakan masalah atau lari dari kenyataan. Sering kali, justru lewat kelakar yang tepat sasaran, sebuah persoalan yang rumit, busuk, dan menakutkan dapat dilihat secara terang benderang tanpa rasa gentar.',
      'Para penjaga tawa menggunakan seni komedi tunggal, penulisan naskah satir, dan dialektika humor sebagai instrumen pendidikan publik untuk membedah borok kebijakan serta menertawakan kemunafikan kekuasaan.'
    ],
    findingQuestion: 'Siapa yang menggunakan humor untuk membuat sesuatu yang serius tidak bisa lagi diabaikan?',
    color: 'border-l-4 border-l-[#E11D48]',
    accentBorder: '#E11D48',
    figures: [
      {
        name: 'Pandji Pragiwaksono',
        slug: 'pandji-pragiwaksono',
        role: 'Pelopor Stand-Up Comedy Indonesia & Pendiri Comika',
        connectingDiction: 'Menggunakan seni komedi tunggal sebagai instrumen pendidikan politik mandiri dan perlawanan terhadap feodalisme kekuasaan tanpa sensor televisi.',
        photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Bintang Emon',
        slug: 'bintang-emon',
        role: 'Komika & Kreator Satir Sosial-Politik (DPO)',
        connectingDiction: 'Merangkum keresahan warga biasa atas kebijakan publik yang absurd dan perilaku koruptif pejabat dalam format video pendek yang tajam.',
        photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Arie Kriting',
        slug: 'arie-kriting',
        role: 'Komika & Sutradara Satir Ketimpangan Daerah',
        connectingDiction: 'Menyuarakan kritik tajam atas ketimpangan pembangunan Jawa-sentris dan represi budaya di Indonesia Timur melalui humor humanis.',
        photoUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Abdur Arsyad',
        slug: 'abdur-arsyad',
        role: 'Komika, Penulis & Pengamat Kebijakan',
        connectingDiction: 'Membedah carut-marut pendidikan dan monopoli kekuasaan dengan rima bahasa tingkat tinggi dan logika matematika yang menggugah nalar.',
        photoUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Sakdiyah Ma\'ruf',
        slug: 'sakdiyah-maruf',
        role: 'Komika Muslimah & Pembela Hak Perempuan',
        connectingDiction: 'Mendobrak kultur patriarki dan kekerasan berbasis gender di komunitas keagamaan lewat medium komedi tunggal berstandar panggung global.',
        photoUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80'
      }
    ]
  },
  {
    id: '08',
    slug: 'pencerah-generasi',
    name: 'Pencerah Generasi',
    editorialTitle: 'Meretas Batas Kelas',
    definition: 'Membuat lebih banyak orang mampu menghadapi masa depan.',
    narrative: [
      'Pengetahuan dan logika berpikir saintifik tidak seharusnya hanya menjadi hak istimewa segelintir anak orang kaya di kota besar. Pendidikan sejati harus mampu meretas sekat kelas ekonomi dan memberikan kesempatan setara bagi siapa saja untuk berdiri mandiri.',
      'Mereka hadir merombak cara belajar: dari mengajarkan epistemologi first-principles thinking, menyediakan beasiswa komunitas bebas intervensi, hingga meluruskan bias literasi finansial agar anak muda tidak terperangkap ilusi kaya instan.'
    ],
    findingQuestion: 'Siapa yang membuat orang lain lebih mampu menghadapi masa depan?',
    color: 'border-l-4 border-l-[#06B6D4]',
    accentBorder: '#06B6D4',
    figures: [
      {
        name: 'Ferry Irwandi',
        slug: 'ferry-irwandi',
        role: 'Kreator Diskursus Publik, Co-founder Malaka Project & Beasiswa Warga',
        connectingDiction: 'Menolak kompromi iklan judi daring dan merintis ekosistem beasiswa sains komunitas bagi ratusan mahasiswa berprestasi dari keluarga prasejahtera.',
        photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Sabda PS',
        slug: 'sabda-ps',
        role: 'Edu-innovator & Pendiri Zenius Education',
        connectingDiction: 'Mengajarkan kerangka berpikir saintifik, logika formal, dan kesadaran bias kognitif kepada jutaan pelajar Indonesia untuk membersihkan salah kaprah belajar hafalan.',
        photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Gita Wirjawan',
        slug: 'gita-wirjawan',
        role: 'Inisiator Endgame Podcast & Edukator Literasi Kebangsaan',
        connectingDiction: 'Membuka diskursus geopolitik global, ekonomi makro, dan sains masa depan ke dalam format percakapan panjang bermutu bagi talenta muda.',
        photoUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Felicia Putri Tjiasaka',
        slug: 'felicia-putri-tjiasaka',
        role: 'Edukator Finansial Independen',
        connectingDiction: 'Membongkar jebakan investasi bodong dan pinjaman daring ilegal dengan mengajarkan pengelolaan keuangan rasional bagi kelas pekerja pemula.',
        photoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80'
      }
    ]
  },
  {
    id: '09',
    slug: 'duta-talenta',
    name: 'Duta Talenta',
    editorialTitle: 'Berkompetisi di Puncak Dunia',
    definition: 'Ketika kapasitas yang tumbuh di Indonesia menemukan panggung global.',
    narrative: [
      'Ada anak-anak bangsa yang membawa kapasitas intelektual, riset sains, keahlian rekayasa, dan kemahiran artistiknya melampaui batas geografis negara. Mereka membuktikan bahwa talenta yang berakar di tanah air mampu bersaing di barisan terdepan peradaban dunia.',
      'Yang paling memikat bukan sekadar deretan medali atau penghargaan yang mereka raih, melainkan bagaimana perjalanan hidup mereka memperlihatkan martabat dan kapasitas bangsa di panggung ilmu pengetahuan dan kebudayaan internasional.'
    ],
    findingQuestion: 'Siapa yang membawa kapasitas Indonesia ke panggung dunia tanpa kehilangan akar?',
    color: 'border-l-4 border-l-[#F97316]',
    accentBorder: '#F97316',
    figures: [
      {
        name: 'Prof. dr. Adi Utarini',
        slug: 'adi-utarini',
        role: 'Peneliti Nyamuk Wolbachia & Guru Besar FKKMK UGM',
        connectingDiction: 'Memimpin riset uji klinis teknologi Wolbachia di Yogyakarta yang berhasil menekan kasus demam berdarah hingga 77 persen dan diakui jurnal Nature dunia.',
        photoUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Dr. Carina Joe',
        slug: 'carina-joe',
        role: 'Ilmuwan Vaksin Oxford-AstraZeneca',
        connectingDiction: 'Menemukan formula manufaktur skala masif vaksin COVID-19 Oxford-AstraZeneca yang menyelamatkan miliaran nyawa manusia di seluruh penjuru bumi.',
        photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Dr. Khoirul Anwar',
        slug: 'khoirul-anwar',
        role: 'Penemu Paten Fondasi 4G LTE & Direktur AdWiTech',
        connectingDiction: 'Merancang algoritma komputasi ganda FFT OFDM yang menjadi standar fundamental transmisi nirkabel 4G LTE yang digunakan di seluruh ponsel pintar dunia.',
        photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Joey Alexander',
        slug: 'joey-alexander',
        role: 'Komposer & Pianis Jazz Dunia',
        connectingDiction: 'Pianis jazz termuda asal Bali yang dinominasikan dalam Grammy Awards dan memukau panggung musik jazz internasional.',
        photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80'
      }
    ]
  },
  {
    id: '10',
    slug: 'panggung-ekspresi',
    name: 'Panggung Ekspresi',
    editorialTitle: 'Karya Tanpa Rekayasa',
    definition: 'Orang-orang yang ikut membentuk cara Indonesia bercerita tentang dirinya sendiri.',
    narrative: [
      'Sinema, sastra, percakapan santai, dan budaya populer bukan sekadar komoditas tontonan pengisi waktu luang. Di dalamnya tercermin cara sebuah generasi melihat identitasnya, memperdebatkan nilai-nilai moral, dan menertawakan keanehan nasibnya sendiri.',
      'Mereka yang berada di laci ini menciptakan karya-karya orisinil yang jujur, menolak formula klise industri pesanan, dan membentuk lanskap bagaimana bangsa ini bertutur tentang luka, tawa, dan harapannya secara bermartabat.'
    ],
    findingQuestion: 'Siapa yang mengubah cara Indonesia bercerita tentang dirinya sendiri?',
    color: 'border-l-4 border-l-[#E11D48]',
    accentBorder: '#E11D48',
    figures: [
      {
        name: 'Eka Kurniawan',
        slug: 'eka-kurniawan',
        role: 'Sastrawan & Pengarang Realisme Magis Indonesia',
        connectingDiction: 'Mengisahkan luka sejarah dan mitologi lokal nusantara dengan teknik penceritaan sastra memukau yang diterjemahkan ke lebih dari 30 bahasa dunia.',
        photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Raditya Dika',
        slug: 'raditya-dika',
        role: 'Penulis, Komika & Sutradara Populer',
        connectingDiction: 'Pelopor penulisan komedi personal dan budaya podcast santai yang merevolusi cara generasi muda Indonesia menertawakan kesehariannya.',
        photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Vincent & Desta',
        slug: 'vincent-desta',
        role: 'Kreator Vindes Media & Budaya Pop Warga',
        connectingDiction: 'Membangun ekosistem media independen terintegrasi yang menghidupkan kembali kehangatan persahabatan, olahraga warga, dan dialog santai tanpa gimmick.',
        photoUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Zen RS (Zen Rachmat Sugito)',
        slug: 'zen-rs',
        role: 'Esais Naratif & Kurator Jurnalisme Presisi',
        connectingDiction: 'Piawai mengawinkan ketajaman analitis jurnalisme investigasi dengan keindahan stilistika sastra yang merangsang daya kontemplasi pembaca.',
        photoUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80'
      }
    ]
  }
];

export function getDiscoveryLensBySlug(slug: string): DiscoveryLens | undefined {
  return discoveryLenses.find((lens) => lens.slug === slug);
}
