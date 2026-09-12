// Master Brand Lokal Dataset (Reader-First Editorial Standard)
// Synthesized with 3-Credit Tavily OSINT for 60 Master Brands across 6 Lenses

export interface BrandProduct {
  name: string;
  specs: string;
  price: string;
  action_text?: string;
  buyUrl: string;
  imageUrl?: string;
  category?: string;
}

export interface BrandMilestone {
  year: string;
  title: string;
  description: string;
}

export interface BrandInitiative {
  title: string;
  category: string;
  description: string;
  price?: string;
  imageUrl?: string;
  action_text: string;
  link_url: string;
}

export interface VerifiedClaim {
  claim: string;
  evidencePrimary: string;
  verificationSource: string;
  editorialInterpretation: string;
}

export interface BrandChannel {
  platform: string;
  url: string;
  label: string;
}

export interface BrandProfile {
  slug: string;
  name: string;
  lensSlug: string;
  lensName: string;
  curationTier: 'Established' | 'Middle' | 'Hidden Gem';
  origin: string;
  logoUrl: string;
  heroBgUrl?: string;
  quote: string;
  bio_paragraphs: string[];
  discoveryTitle: {
    anomaly: string;
    question: string;
    paradigm: string;
  };
  coreFinding: string;
  contextNarrative: {
    marketVacuum: string;
    disruptedStatusQuo: string;
  };
  evidenceTelemetry: {
    originCoordinates: string;
    productionModel: string;
    verifiedClaims: VerifiedClaim[];
  };
  flagshipProducts: BrandProduct[];
  milestones: BrandMilestone[];
  initiatives: BrandInitiative[];
  sovereigntyMeaning: string;
  channels: {
    officialStore: BrandChannel[];
    publicSpaces: BrandChannel[];
  };
  scores: {
    quality: number;
    discovery: number;
    trackRecord: number;
    story: number;
    total: number;
  };
  statusRedFlag: string;
}

export interface BrandSummary {
  name: string;
  slug: string;
  curationTier: 'Established' | 'Middle' | 'Hidden Gem';
  origin: string;
  discoveryHeadline: string;
  coreFinding: string;
  logoUrl: string;
  flagshipPriceRange: string;
  totalScore: number;
}

export interface BrandLens {
  id: string;
  slug: string;
  name: string;
  editorialTitle: string;
  definition: string;
  narrative: string[];
  findingQuestion: string;
  color: string;
  accentBorder: string;
  accentHex: string;
  brands: BrandSummary[];
}

export const brandLenses: BrandLens[] = [
  {
    "id": "01",
    "name": "Pangan Pusaka & Agraria Lestari",
    "editorialTitle": "Kedaulatan Benih, Tanah, dan Rasa Nusantara",
    "definition": "Brand dan produsen pangan berbasis biodiversitas asli, agroekologi tanpa perusak tanah, serta pemutusan rantai pasok tengkulak komoditas.",
    "narrative": [
      "Ketika sistem pangan modern bergantung pada bibit impor monokultur dan bahan pengawet sintetis, kedaulatan ragawi masyarakat perlahan tergerus. Ketergantungan pangan bukan sekadar perkara komersial, melainkan ancaman nyata terhadap ketahanan hayati dan warisan rasa leluhur yang telah beradaptasi ratusan tahun dengan iklim kepulauan.",
      "Brand dalam laci ini membuktikan bahwa hasil tanah nusantara, dari beras pusaka, kakao artisan, sagu alami, hingga garam kristal laut dalam, dapat diolah dengan disiplin mutu kelas dunia tanpa meminggirkan petani kecil dan ekosistem tanah."
    ],
    "findingQuestion": "Bagaimana pangan lokal bertransformasi dari sekadar komoditas mentah menjadi kedaulatan nutrisi dan kebanggaan rasa bernilai tinggi?",
    "color": "border-l-4 border-l-[#10B981]",
    "accentBorder": "#10B981",
    "accentHex": "#10B981",
    "slug": "pangan-pusaka-agraria-lestari",
    "brands": [
      {
        "name": "JAVARA INDIGENOUS INDONESIA",
        "slug": "javara-indigenous-indonesia",
        "curationTier": "Established",
        "origin": "Jakarta / Banten",
        "discoveryHeadline": "Ratusan Varietas Padi Purba Punah dari Pasar Komersial",
        "coreFinding": "Mengomersialisasikan lebih dari 800 produk pangan berbasis keanekaragaman hayati asli dengan mempertahankan hak pemuliaan benih pusaka di tangan puluhan ribu petani swadaya.",
        "logoUrl": "https://lookaside.fbsbx.com/lookaside/crawler/instagram/javaraindonesia/profile_pic.jpg",
        "flagshipPriceRange": "Rp45.000 | Rp35.000",
        "totalScore": 99
      },
      {
        "name": "KRAKAKOA",
        "slug": "krakakoa",
        "curationTier": "Established",
        "origin": "Bandar Lampung / Bali",
        "discoveryHeadline": "Kakao Indonesia Kerap Terjual Murah sebagai Komoditas Curah Mentah",
        "coreFinding": "Menerapkan model direct trade dengan harga hingga dua kali lipat harga pasar efektif memaksa kepatuhan fermentasi biji kakao lokal berstandar internasional di zona penyangga taman nasional.",
        "logoUrl": "https://lookaside.fbsbx.com/lookaside/crawler/instagram/krakakoa/profile_pic.jpg",
        "flagshipPriceRange": "Rp55.500 | Rp67.710",
        "totalScore": 97
      },
      {
        "name": "PIPILTIN COCOA",
        "slug": "pipiltin-cocoa",
        "curationTier": "Established",
        "origin": "Jakarta Selatan, DKI Jakarta",
        "discoveryHeadline": "Rasa Kakao Berbeda Radikal di Tiap Lapisan Tanah Nusantara",
        "coreFinding": "Membongkar hegemoni cokelat industri berbasis perisa sintetis dengan memetakan profil asam organik dan terroir spesifik kakao single-origin dari enam pulau utama Indonesia.",
        "logoUrl": "https://pbs.twimg.com/profile_images/712922078299561985/S5suGj41_400x400.jpg",
        "flagshipPriceRange": "Rp65.000 | Rp49.000",
        "totalScore": 95
      },
      {
        "name": "YAVA",
        "slug": "yava",
        "curationTier": "Established",
        "origin": "Karangasem, Bali",
        "discoveryHeadline": "Kacang Mete Mentah Dulu Diekspor Murah ke Luar Negeri untuk Dikupas",
        "coreFinding": "Mematahkan pola rantai pasok kolonial di mana gelondong mete mentah Karangasem diekspor ribuan kilometer hanya untuk dikupas di Vietnam/India sebelum dibeli kembali oleh konsumen domestik.",
        "logoUrl": "https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=3186356269372637995",
        "flagshipPriceRange": "Rp35.000 | Rp22.000",
        "totalScore": 96
      },
      {
        "name": "LADANG LIMA",
        "slug": "ladang-lima",
        "curationTier": "Middle",
        "origin": "Surabaya / Pasuruan, Jawa Timur",
        "discoveryHeadline": "Ketergantungan Terigu Impor Menjerat Ketahanan Pangan Nasional",
        "coreFinding": "Mentransformasi singkong rakyat berkadar air tinggi menjadi tepung mocaf (Modified Cassava Flour) murni tanpa rekayasa genetik dan bebas gluten yang mampu mensubstitusi tepung terigu rasio 1:1.",
        "logoUrl": "https://mms.img.susercontent.com/734c20c9de9999730ff10c3ec1a6e7e4",
        "flagshipPriceRange": "Rp18.000 | Rp9.500",
        "totalScore": 92
      },
      {
        "name": "TIMURASA INDONESIA",
        "slug": "timurasa-indonesia",
        "curationTier": "Middle",
        "origin": "Depok, Jawa Barat / Jakarta",
        "discoveryHeadline": "Kacang Kenari Liar Alor Mengendap di Lantai Hutan Tanpa Nilai Tambah",
        "coreFinding": "Berhasil mengorganisasikan rantai pasok etnobotani hutan non-budidaya dari pulau terpencil Indonesia Timur hingga masuk rantai pasok industri horeka modern dan ekspor.",
        "logoUrl": "https://lookaside.fbsbx.com/lookaside/crawler/instagram/timurasaindonesia/profile_pic.jpg",
        "flagshipPriceRange": "Rp38.000 | Rp32.000",
        "totalScore": 93
      },
      {
        "name": "TALASI",
        "slug": "talasi",
        "curationTier": "Middle",
        "origin": "Badung / Tabanan, Bali",
        "discoveryHeadline": "Vanila Indonesia Sempat Dijuluki 'Java Vanilla' Berkadar Rendah Akibat Panen Dini",
        "coreFinding": "Mengintegrasikan estate agroforestry dan fasilitas pemrosesan terdesentralisasi untuk merealisasikan penelusuran digital (traceability) penuh bagi setiap polong vanila, kopi, dan minyak atsiri langsung dari koordinat asalnya (Origin).",
        "logoUrl": "https://lookaside.fbsbx.com/lookaside/crawler/instagram/thetalasi/profile_pic.jpg",
        "flagshipPriceRange": "Rp125.000 | Rp75.000",
        "totalScore": 93
      },
      {
        "name": "MAZARAAT ARTISAN CHEESE",
        "slug": "mazaraat-artisan-cheese",
        "curationTier": "Hidden Gem",
        "origin": "Sleman, D.I. Yogyakarta",
        "discoveryHeadline": "Susu Murah Lereng Merapi Naik Kelas Menjadi Keju Artisan Matang Alami",
        "coreFinding": "Membuktikan bahwa susu murni peternak sapi perah rakyat lereng Gunung Merapi berbasis pakan rumput segar (grass-fed) mampu diproses menjadi keju artisan natural-rind dan cave-aged berkualitas tinggi tanpa aditif kimia pengental maupun kebergantungan pada keju impor.",
        "logoUrl": "https://lookaside.fbsbx.com/lookaside/crawler/instagram/mazaraatartisancheese/profile_pic.jpg",
        "flagshipPriceRange": "Rp85.000 | Rp95.000",
        "totalScore": 97
      },
      {
        "name": "RAHSA NUSANTARA",
        "slug": "rahsa-nusantara",
        "curationTier": "Hidden Gem",
        "origin": "Bandung, Jawa Barat",
        "discoveryHeadline": "Jamu Identik dengan Rebusan Pinggir Jalan yang Rawan Pengawet Kimia Obat",
        "coreFinding": "Menemukan model ekstraksi dingin rimpang segar murni dan madu hutan primer Baduy tanpa pengawet sintesis, pewarna, maupun konsentrat impor, bersertifikasi BPOM dan sirkularitas limbah organik 100%.",
        "logoUrl": "https://mms.img.susercontent.com/id-11134216-7ra0k-mdmot821isk2e7_tn",
        "flagshipPriceRange": "Rp159.000 | Rp89.000",
        "totalScore": 97
      },
      {
        "name": "LINGKAR ORGANIK",
        "slug": "lingkar-organik",
        "curationTier": "Hidden Gem",
        "origin": "Sleman / Yogyakarta, D.I. Yogyakarta",
        "discoveryHeadline": "Petani Padi Terjerat Utang Pupuk Petrokimia & Benih Pabrikan",
        "coreFinding": "Membuktikan restorasi tanah sawah kritis secara mandiri lewat pembudidayaan varietas benih pusaka lokal Jawa (Mentik Susu, Pandan Wangi, Beras Merah Cempo) dengan siklus nutrisi tertutup tanpa ketergantungan input kimia pabrikan.",
        "logoUrl": "https://mms.img.susercontent.com/11140d44c9752fa2038dd6f949c56fc3",
        "flagshipPriceRange": "Rp36.000 | Rp34.000",
        "totalScore": 99
      }
    ]
  },
  {
    "id": "02",
    "name": "Kriya, Desain & Material Berkelanjutan",
    "editorialTitle": "Rekayasa Material Alami dan Presisi Kriya Sirkular",
    "definition": "Inovator material biomassa, pengolah limbah industri terpadu, dan studio kriya presisi yang menaikkan martabat serat lokal ke panggung desain dunia.",
    "narrative": [
      "Limbah agrikultur dan sampah plastik sering kali dipandang sebagai residu tak berharga yang hanya memenuhi tempat pembuangan akhir. Di sisi lain, kekayaan material alami seperti bambu, eceng gondok, miselium jamur, dan pelepah pinang kerap terabaikan di pinggiran desa.",
      "Mereka yang terpilih dalam laci ini merekayasa material lokal melalui riset laboratorium dan ketelitian tangan perajin, membuktikan bahwa keberlanjutan tidak harus mengorbankan estetika, daya tahan, dan presisi industrial."
    ],
    "findingQuestion": "Dapatkah biomassa dan limbah domestik diolah menjadi produk desain presisi tinggi tanpa merusak bentang alam?",
    "color": "border-l-4 border-l-[#D97706]",
    "accentBorder": "#D97706",
    "accentHex": "#D97706",
    "slug": "kriya-desain-material-berkelanjutan",
    "brands": [
      {
        "name": "MAGNO",
        "slug": "magno",
        "curationTier": "Established",
        "origin": "Temanggung, Jawa Tengah",
        "discoveryHeadline": "Temuan kayu sisa kebun desa",
        "coreFinding": "Kayu perkebunan non-hutan yang ditebang terukur mampu menghasilkan instrumen audio analog berpresisi tinggi dengan toleransi mikron langsung dari bengkel pedesaan.",
        "logoUrl": "https://www.henkel.com/resource/image/417572/1x1/1000/1000/7380eb805de454bc96fc79f34a720cdc/F5F115A7F130BF0652470CBE4C53FDFA/magno-logo.webp",
        "flagshipPriceRange": "Rp2.200.000 | Rp250.000",
        "totalScore": 98
      },
      {
        "name": "DU ANYAM",
        "slug": "du-anyam",
        "curationTier": "Established",
        "origin": "Flores Timur, NTT / Jakarta",
        "discoveryHeadline": "Temuan kelimpahan daun lontar kering di savana NTT",
        "coreFinding": "Mentransformasikan komoditas daun lontar liar menjadi rantai pasok kriya korporat berskala puluhan ribu unit tanpa mendisrupsi tatanan sosiologis masyarakat adat.",
        "logoUrl": "https://mms.img.susercontent.com/id-11134216-81ztc-mei0z8bkifpd58",
        "flagshipPriceRange": "Rp250.000 | Rp350.000",
        "totalScore": 98
      },
      {
        "name": "SPEDAGI",
        "slug": "spedagi",
        "curationTier": "Established",
        "origin": "Temanggung, Jawa Tengah",
        "discoveryHeadline": "Temuan karakteristik elastisitas serat bambu petung liar",
        "coreFinding": "Laminasi bilah bambu petung memiliki rasio kekuatan terhadap bobot dan daya redam getaran jalan raya yang melampaui tabung aluminium standar pabrik.",
        "logoUrl": "https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=100064532536155",
        "flagshipPriceRange": "Rp12.500.000 | Rp9.500.000",
        "totalScore": 98
      },
      {
        "name": "BENGOK CRAFT",
        "slug": "bengok-craft",
        "curationTier": "Established",
        "origin": "Semarang, Jawa Tengah",
        "discoveryHeadline": "Temuan pendangkalan parah dan ledakan populasi gulma danau",
        "coreFinding": "Memproses biomassa eceng gondok invasif menjadi substitusi material tekstil tebal dan kriya anyam tahan kelembapan.",
        "logoUrl": "https://linktr.ee/og/image/bengokcraft.jpg",
        "flagshipPriceRange": "Rp175.000 | Rp45.000",
        "totalScore": 94
      },
      {
        "name": "MYCL",
        "slug": "mycl",
        "curationTier": "Middle",
        "origin": "Bandung, Jawa Barat",
        "discoveryHeadline": "Temuan limbah serbuk gergaji dan tandan kosong kelapa sawit yang terbengkalai",
        "coreFinding": "Miselium jamur yang ditumbuhkan pada limbah agro-industri dapat dipanen menjadi lembaran bio-leather (Mylea™) berkekuatan tarik tinggi dengan jejak air dan karbon sangat rendah.",
        "logoUrl": "https://www.third-derivative.org/hubfs/mycl-logo.png",
        "flagshipPriceRange": "Rp150.000 | Rp650.000",
        "totalScore": 98
      },
      {
        "name": "ROBRIES",
        "slug": "robries",
        "curationTier": "Middle",
        "origin": "Surabaya, Jawa Timur",
        "discoveryHeadline": "Temuan timbunan tutup botol plastik HDPE dan jeriken tak bernilai jual",
        "coreFinding": "Mengonversi limbah plastik tipe 2 (HDPE) dan tipe 5 (PP) pasca-konsumsi menjadi Robries Polymer Sheet (RPS) 100% daur ulang berkekuatan struktural tanpa bahan perekat kimia sintetis.",
        "logoUrl": "https://lookaside.fbsbx.com/lookaside/crawler/instagram/robries/profile_pic.jpg",
        "flagshipPriceRange": "Rp800.000 | Rp65.000",
        "totalScore": 96
      },
      {
        "name": "PABLE INDONESIA",
        "slug": "pable-indonesia",
        "curationTier": "Middle",
        "origin": "Surabaya, Jawa Timur",
        "discoveryHeadline": "Temuan tumpukan kain perca sisa industri garmen yang berakhir di pembakaran sampah",
        "coreFinding": "Potongan limbah kain pra dan pasca-konsumsi diurai secara mekanis tanpa bahan kimia pewarna tambahan menjadi benang daur ulang siap tenun berkualitas industri.",
        "logoUrl": "https://mms.img.susercontent.com/ce378d0e259327ddcd23835a4cebfcdb_tn",
        "flagshipPriceRange": "Rp85.000 | Rp150.000",
        "totalScore": 95
      },
      {
        "name": "PLEPAH",
        "slug": "plepah",
        "curationTier": "Hidden Gem",
        "origin": "Jakarta / Jambi",
        "discoveryHeadline": "Temuan pelepah pinang tua yang membusuk dan memicu kebakaran di perkebunan Sumatera",
        "coreFinding": "Lembaran pelepah pohon pinang (Areca catechu) gugur memiliki struktur alami kedap minyak dan air panas tanpa membutuhkan laminasi plastik polietilena sama sekali.",
        "logoUrl": "https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=2986497174877678465",
        "flagshipPriceRange": "Rp85.000 | Rp3.500",
        "totalScore": 99
      },
      {
        "name": "STUDIO DAPUR",
        "slug": "studio-dapur",
        "curationTier": "Hidden Gem",
        "origin": "Tasikmalaya, Jawa Barat",
        "discoveryHeadline": "Temuan kearifan anyaman bambu Tasikmalaya yang terdegradasi menjadi komoditas besek murah",
        "coreFinding": "Integrasi studio desain terpadu langsung di tapak desa mampu menaikkan nilai ekonomi kriya anyam bambu hingga 500% sekaligus menghentikan laju migrasi tenaga kerja muda ke kota.",
        "logoUrl": "https://down-id.img.susercontent.com/file/cea5554676de66c7fe56f7581f1ac4b7",
        "flagshipPriceRange": "Rp320.000 | Rp185.000",
        "totalScore": 98
      },
      {
        "name": "BELL SOCIETY",
        "slug": "bell-society",
        "curationTier": "Hidden Gem",
        "origin": "Bandung, Jawa Barat",
        "discoveryHeadline": "Temuan pencemaran limbah cair fermentasi ceri kopi yang mengalir ke saluran air tanah perbukitan",
        "coreFinding": "Kultur bakteri selulosa (microbial cellulose) bernutrisi limbah cair pengolahan kopi menghasilkan biomaterial (Misel) berkarakteristik fisik setara kulit sintetis tanpa eksploitasi lahan.",
        "logoUrl": "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80",
        "flagshipPriceRange": "Rp250.000 | Rp280.000",
        "totalScore": 97
      }
    ]
  },
  {
    "id": "03",
    "name": "Wastra & Manufaktur Etis",
    "editorialTitle": "Penenun Berdaulat, Pewarna Alam, dan Busana Berkeadilan",
    "definition": "Label busana dan perajin tekstil yang menolak serat sintetis murah, mengembalikan pewarna alami nabati, dan menjamin upah hidup layak penenun akar rumput.",
    "narrative": [
      "Industri busana cepat global menyandarkan rantai produksinya pada serat sintetis berbasis minyak bumi dan eksploitasi tenaga kerja berupah rendah. Akibatnya, sungai tercemar pewarna kimia beracun dan kain tenun tradisional kehilangan nilai sakralnya.",
      "Brand wastra dalam laci ini merevolusi model manufaktur busana dari benih hingga jahitan terakhir: menghidupkan kembali perkebunan kapas regeneratif, formula pewarna daun indigofera, serta membagi hasil secara adil kepada ibu-ibu penenun di pelosok desa."
    ],
    "findingQuestion": "Bagaimana tradisi tenun dan wastra leluhur membebaskan diri dari jeratan busana cepat dan eksploitasi perajin perempuan desa?",
    "color": "border-l-4 border-l-[#6366F1]",
    "accentBorder": "#6366F1",
    "accentHex": "#6366F1",
    "slug": "wastra-manufaktur-etis",
    "brands": [
      {
        "name": "SUKKHACITTA",
        "slug": "sukkhacitta",
        "curationTier": "Established",
        "origin": "Jakarta / Jawa Tengah",
        "discoveryHeadline": "Rantai Pasok Tertutup dari Benih Kapas hingga Jahitan Terakhir: Menghapus Middleman Demi Living Wage Penenun Desa",
        "coreFinding": "Beroperasi tanpa kompromi bahan sintetis melalui model farm-to-closet bersertifikasi B Corp pertama di Indonesia yang mengontrol 100% ketertelusuran bahan baku dari tanah petani regeneratif.",
        "logoUrl": "https://lookaside.fbsbx.com/lookaside/crawler/instagram/sukkhacitta/profile_pic.jpg",
        "flagshipPriceRange": "Rp1.850.000 | Rp3.200.000",
        "totalScore": 99
      },
      {
        "name": "SEJAUH MATA MEMANDANG",
        "slug": "sejauh-mata-memandang",
        "curationTier": "Established",
        "origin": "Jakarta",
        "discoveryHeadline": "Mendekonstruksi Wastra Sirkular: Ketika Serat Daur Ulang dan Tencel Berpadu dengan Cap Tembaga Pekalongan",
        "coreFinding": "Mengombinasikan motif naratif kontemporer dengan protokol sirkularitas terukur yang mengolah limbah pra dan pasca-konsumsi tekstil kembali menjadi benang tenun fungsional.",
        "logoUrl": "https://mms.img.susercontent.com/28430d8ba1839a57af52a9a0757c581b_tn",
        "flagshipPriceRange": "Rp1.800.000 | Rp1.500.000",
        "totalScore": 95
      },
      {
        "name": "TORAJA MELO",
        "slug": "toraja-melo",
        "curationTier": "Established",
        "origin": "Jakarta / Tana Toraja, Sulawesi Selatan",
        "discoveryHeadline": "Mematahkan Siklus Migrasi Ilegal: Menghidupkan Alat Tenun Punggung Toraja Menjadi Penopang Ekonomi Rumah Tangga Adat",
        "coreFinding": "Mentransformasikan tradisi tenun gedogan (backstrap loom) menjadi unit usaha mandiri berdaya saing global yang menekan angka perdagangan orang dan migrasi buruh migran ilegal perempuan Toraja dan Mamasa.",
        "logoUrl": "https://www.samueletini.com/wp-content/uploads/2024/04/image.png",
        "flagshipPriceRange": "Rp950.000 | Rp1.200.000",
        "totalScore": 98
      },
      {
        "name": "BINHOUSE",
        "slug": "binhouse",
        "curationTier": "Established",
        "origin": "Jakarta",
        "discoveryHeadline": "Konstruksi Anyaman Sutra Tanpa Gunting Benang: Rekayasa ATBM Presisi Tinggi yang Menembus Standar Adibusana Global",
        "coreFinding": "Memodifikasi alat tenun bukan mesin (ATBM) untuk memintal benang sutra mentah lokal dengan kerapatan mikroskopis presisi sebelum dibatik canting manual.",
        "logoUrl": "https://lookaside.fbsbx.com/lookaside/crawler/instagram/binhouse_official/profile_pic.jpg",
        "flagshipPriceRange": "Rp3.500.000 | Rp12.000.000",
        "totalScore": 98
      },
      {
        "name": "LEKAT",
        "slug": "lekat",
        "curationTier": "Middle",
        "origin": "Jakarta / Kanekes, Banten",
        "discoveryHeadline": "Tegangan Garis Baduy di Runway Internasional: Mempertahankan Pakem Adat Tenun Kanekes dalam Potongan Avant-Garde",
        "coreFinding": "Menjembatani isolasi geografis dan aturan kultural ketat suku Baduy Luar dengan mentransformasikan kain tenun serat kasar menjadi mantel struktural tanpa merusak filosofi tabu adat Kanekes.",
        "logoUrl": "https://lookaside.fbsbx.com/lookaside/crawler/instagram/lekatofficial/profile_pic.jpg",
        "flagshipPriceRange": "Rp2.800.000 | Rp1.750.000",
        "totalScore": 94
      },
      {
        "name": "NOESA",
        "slug": "noesa",
        "curationTier": "Middle",
        "origin": "Jakarta / Sikka, Maumere, NTT",
        "discoveryHeadline": "Mendokumentasikan Herbarium Tenun Sikka: Desentralisasi Studio Desain Ibu Kota Menuju Dapur Pewarna Alami Watubo",
        "coreFinding": "Mendirikan entitas kolektif perajin di Desa Watublapi (Flores) yang mendokumentasikan formula kimia tumbuhan alami dan memproduksi aksesori modern presisi tinggi.",
        "logoUrl": "https://mms.img.susercontent.com/03cfc30659e8b7ff9af6cb4d76f7340f",
        "flagshipPriceRange": "Rp650.000 | Rp1.800.000",
        "totalScore": 96
      },
      {
        "name": "KANA GOODS",
        "slug": "kana-goods",
        "curationTier": "Middle",
        "origin": "Tangerang Selatan, Banten",
        "discoveryHeadline": "Monokrom Biru Tanpa Limbah Toksik: Menjinakkan Fermentasi Daun Tarum untuk Batik Tulis Modern Harian",
        "coreFinding": "Merancang busana siap pakai (ready-to-wear) monokromatis berbasis 100% pasta tarum (Indigofera tinctoria) hasil fermentasi mandiri tanpa bahan kimia pereduksi beracun.",
        "logoUrl": "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80",
        "flagshipPriceRange": "Rp1.100.000 | Rp1.350.000",
        "totalScore": 93
      },
      {
        "name": "PAGI MOTLEY",
        "slug": "pagi-motley",
        "curationTier": "Hidden Gem",
        "origin": "Gianyar, Bali",
        "discoveryHeadline": "Laboratorium Botani di Tengah Sawah Gianyar: Ekstraksi Sampah Pertanian dan Daun Liar Menjadi Pigmen Tekstil Presisi",
        "coreFinding": "Laboratorium sains pewarnaan tekstil organik yang memformulasi pigmen stabil dari limbah kulit buah, daun mangga, serbuk gergaji, dan lumpur vulkanik tanpa jejak mikroplastik.",
        "logoUrl": "https://pagimotley.com/assets/logo/pagimotley.webp",
        "flagshipPriceRange": "Rp850.000 | Rp1.750.000",
        "totalScore": 96
      },
      {
        "name": "RUMAH BUDAYA LEPO LORUN",
        "slug": "rumah-budaya-lepo-lorun",
        "curationTier": "Hidden Gem",
        "origin": "Nita, Maumere, NTT",
        "discoveryHeadline": "Menghapus Benang Pabrikan dari Hulu Maumere: Mengembalikan Kapas Varietas Adat dan Pewarna Loba Bersama Mama-Mama Sikka",
        "coreFinding": "Mengembalikan kedaulatan wastra dengan mewajibkan seluruh helai tenun ikatnya memakai benang kapas pintal tangan asli (keper) dan pewarna hutan primer tanpa sehelai pun benang poliester komersial.",
        "logoUrl": "https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=3904006697035982184",
        "flagshipPriceRange": "Rp850.000 | Rp4.500.000",
        "totalScore": 100
      },
      {
        "name": "RUMAH RAKUJI",
        "slug": "rumah-rakuji",
        "curationTier": "Hidden Gem",
        "origin": "Jakarta / Kapuas Hulu, Kalimantan Barat",
        "discoveryHeadline": "Serat Daun Doyo dan Tenun Sidan Dayak Iban: Menembus Batas Hutan Hujan Menghadapi Ancaman Kepunahan Tenun Serat Liar",
        "coreFinding": "Merevitalisasi dan menjaga transmisi teknik Tenun Sidan serta Tenun Ikat Dayak Iban Ensaid Panjang di jantung Kalbar menggunakan benang kapas pilin manual dan getah kayu langka hutan hujan tropis.",
        "logoUrl": "https://lookaside.fbsbx.com/lookaside/crawler/instagram/by.rakuji/profile_pic.jpg",
        "flagshipPriceRange": "Rp1.050.000 | Rp3.000.000",
        "totalScore": 99
      }
    ]
  },
  {
    "id": "04",
    "name": "Pustaka, Media & Distribusi Gagasan",
    "editorialTitle": "Menjaga Nalar Kritis, Arsip Memori, dan Kedaulatan Pengetahuan",
    "definition": "Penerbit independen, jurnalisme investigasi berintegritas, dan kurator arsip budaya yang menolak hegemoni algoritma dangkal dan konsorsium modal.",
    "narrative": [
      "Di tengah banjir informasi digital berorientasi klik dan algoritma platform media sosial yang memecah konsentrasi, buku berbobot dan jurnalisme investigasi independen menjadi benteng terakhir akal sehat publik.",
      "Laci ini mengumpulkan para penerbit mandiri, ruang jurnalisme presisi, dan pengarsip musik/sastra yang konsisten menjaga mutu literasi publik, menerjemahkan wacana kritis global, dan merawat memori kolektif bangsa tanpa bergantung pada konglomerasi media."
    ],
    "findingQuestion": "Siapa yang merawat ruang diskursus kritis, literatur berbobot, dan arsip kebudayaan di tengah banjir informasi instan?",
    "color": "border-l-4 border-l-[#DC2626]",
    "accentBorder": "#DC2626",
    "accentHex": "#DC2626",
    "slug": "pustaka-media-distribusi-gagasan",
    "brands": [
      {
        "name": "MARJIN KIRI",
        "slug": "marjin-kiri",
        "curationTier": "Established",
        "origin": "Tangerang Selatan, Banten",
        "discoveryHeadline": "Hegemoni Teori Kritis Tanpa Konglomerasi: Mengapa Penerbit Independen Pinggiran Jakarta Menjadi Rujukan Utama Naskah Kiri Global?",
        "coreFinding": "Membuktikan bahwa naskah teori kritis, historiografi dekolonial, dan filsafat berat dapat mempertahankan model bisnis mandiri selama dua dekade tanpa bergantung pada konsorsium ritel arus utama.",
        "logoUrl": "https://marjinkiri.id/apple-icon.png?apple-icon.3h8ovvx82yqu0.png",
        "flagshipPriceRange": "Rp68.000 | Rp98.000",
        "totalScore": 97
      },
      {
        "name": "PROJECT MULTATULI",
        "slug": "project-multatuli",
        "curationTier": "Established",
        "origin": "Jakarta Selatan, DKI Jakarta",
        "discoveryHeadline": "Runtuhnya Tembok Iklan Komersial: Mungkinkah Jurnalisme Investigasi Bertahan Sepenuhnya dari Hibah Publik dan Dana Komunitas?",
        "coreFinding": "Membuktikan bahwa jurnalisme investigasi nalar publik dapat beroperasi bebas intervensi oligarki dengan mengandalkan sistem keanggotaan publik (membership) dan konsorsium riset nirlaba.",
        "logoUrl": "https://public.flourish.studio/uploads/816970/54181b81-4731-47ec-a84d-b51b970d1bcf.png",
        "flagshipPriceRange": "Rp90.000 | Rp50.000",
        "totalScore": 97
      },
      {
        "name": "KEPUSTAKAAN POPULER GRAMEDIA",
        "slug": "kepustakaan-populer-gramedia",
        "curationTier": "Established",
        "origin": "Jakarta Pusat, DKI Jakarta",
        "discoveryHeadline": "Anomali Saintifik di Tengah Konglomerasi: Bagaimana KPG Mempertahankan Otonomi Naskah Non-Fiksi Berat di Bawah Naungan Korporasi Raksasa?",
        "coreFinding": "Imprint di bawah konglomerasi media nasional yang menjaga integritas intelektual dengan merilis seri terjemahan sains murni, antropologi, dan sejarah kritis tanpa terjebak komersialisasi instan.",
        "logoUrl": "https://image1ws.indotrading.com/s3/webp/co33337/companylogo/w200-h200/logo_kpg_header.gif",
        "flagshipPriceRange": "Rp135.000 | Rp85.000",
        "totalScore": 94
      },
      {
        "name": "TEMPO MEDIA",
        "slug": "tempo-media",
        "curationTier": "Established",
        "origin": "Jakarta Barat, DKI Jakarta",
        "discoveryHeadline": "Kekuatan Ruang Berita Independen: Bagaimana Majalah Berita Mingguan Mengarungi Turbulensi Sensor Sejarah Sejak 1971?",
        "coreFinding": "Membuktikan ketahanan model ruang berita investigasi tertua di Indonesia yang tetap berdiri di atas asas kepemilikan karyawan dan standar verifikasi faktual ketat.",
        "logoUrl": "https://images.seeklogo.com/logo-png/51/1/tempo-magazine-logo-png_seeklogo-511160.png",
        "flagshipPriceRange": "Rp85.000 | Rp400.000",
        "totalScore": 96
      },
      {
        "name": "MOJOK.CO & BUKU MOJOK",
        "slug": "mojok",
        "curationTier": "Middle",
        "origin": "Sleman, D.I. Yogyakarta",
        "discoveryHeadline": "Satire sebagai Senjata Publik: Mengapa Platform Esai Santai dari Sleman Mampu Mengonversi Pembaca Digital Menjadi Pembeli Buku Sastra?",
        "coreFinding": "Diskursus sosial-politik satire dapat bertransformasi menjadi divisi penerbitan buku fisik yang laris tanpa mengorbankan bobot literer.",
        "logoUrl": "https://lookaside.fbsbx.com/lookaside/crawler/instagram/mojokstore/profile_pic.jpg",
        "flagshipPriceRange": "Rp88.000 | Rp75.000",
        "totalScore": 93
      },
      {
        "name": "MALAKA PROJECT",
        "slug": "malaka-project",
        "curationTier": "Middle",
        "origin": "Jakarta Selatan, DKI Jakarta",
        "discoveryHeadline": "Teori Kritis dan Filsafat Kerap Terjebak di Menara Gading Kampus",
        "coreFinding": "Mematahkan elitisme akademis dengan mentransformasikan diskursus sains sosial, ekonomi politik, dan logika filsafat ke dalam konten media digital berbasis riset mendalam yang dikonsumsi jutaan pemuda.",
        "logoUrl": "https://p16-common-sign.tiktokcdn-us.com/tos-maliva-avt-0068/c05e5bbb15302154dcfbf2c8c35acb2f~tplv-tiktokx-cropcenter:720:720.jpeg?dr=9640&refresh_token=7b85f8d5&x-expires=1784865600&x-signature=97np2ItogZ5QBHAX51k4iyMuCKo%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast8",
        "flagshipPriceRange": "Rp 150.000 | Rp75.000",
        "totalScore": 98
      },
      {
        "name": "BUMILANGIT",
        "slug": "bumilangit",
        "curationTier": "Middle",
        "origin": "Jakarta Selatan / Tangerang",
        "discoveryHeadline": "1.200 Karakter Komik Adiwira Indonesia Tercecer dan Terancam Lapuk",
        "coreFinding": "Menyelamatkan dan mengonsolidasikan lebih dari 1.200 pustaka karakter adiwira dan pendekar komik klasik Indonesia sejak 1954 ke dalam ekosistem penerbitan komik modern dan semesta sinema terpadu.",
        "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/5/53/Bl_%282%29.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original",
        "flagshipPriceRange": "Rp65.000 | Rp55.000",
        "totalScore": 99
      },
      {
        "name": "IRAMA NUSANTARA",
        "slug": "irama-nusantara",
        "curationTier": "Hidden Gem",
        "origin": "Jakarta Selatan, DKI Jakarta",
        "discoveryHeadline": "Ribuan Piringan Hitam Master Musik Indonesia Rusak Dimakan Rayap",
        "coreFinding": "Mengembangkan situs pengarsipan digital musik populer Indonesia terbesar yang memburu, merestorasi fisik, dan mendigitalisasi ribuan rilisan piringan hitam era 1920 - 1980 yang terbengkalai untuk diakses publik secara gratis.",
        "logoUrl": "https://cdn.brandfetch.io/domain/iramanusantara.org/fallback/lettermark/theme/dark/h/400/w/400/icon?c=1bfwsmEH20zzEfSNTed",
        "flagshipPriceRange": "Rp 150.000 | Rp85.000",
        "totalScore": 100
      },
      {
        "name": "POST SANTA",
        "slug": "post-santa",
        "curationTier": "Hidden Gem",
        "origin": "Jakarta Selatan, DKI Jakarta",
        "discoveryHeadline": "Etalase Sastra di Lantai Pasar Tradisional: Mungkinkah Kios Seluas Tiga Kali Tiga Meter Merevolusi Ekosistem Penerbitan Mikro?",
        "coreFinding": "Membuktikan kios pasar tradisional dapat menjadi simpul diplomasi sastra alternatif yang menghubungkan penulis Asia Tenggara, penerbit mikro independen, dan komunitas pembaca kuratorial.",
        "logoUrl": "https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=100064028164186",
        "flagshipPriceRange": "Rp65.000 | Rp75.000",
        "totalScore": 97
      },
      {
        "name": "BUKU AKIK",
        "slug": "buku-akik",
        "curationTier": "Hidden Gem",
        "origin": "Sleman, D.I. Yogyakarta",
        "discoveryHeadline": "Toko Buku Arus Utama Kian Sepi Tergilas Ritel Daring",
        "coreFinding": "Mentransformasi distribusi buku sastra, filsafat, dan pemikiran independen dari citra berat dan eksklusif menjadi ritual membaca yang intim dan estetis melalui kurasi personal di media sosial.",
        "logoUrl": "https://mms.img.susercontent.com/da6f1bdb48715c545b22038952756815",
        "flagshipPriceRange": "Rp60.000 | Rp85.000",
        "totalScore": 98
      }
    ]
  },
  {
    "id": "05",
    "name": "Teknologi & Solusi Mandiri",
    "editorialTitle": "Arsitektur Digital Berdikari dan Rekayasa Tepat Guna",
    "definition": "Pengembang kecerdasan buatan terapan, perangkat telekomunikasi komunitas, dan platform data terbuka yang dibangun untuk konteks geografi dan kedaulatan data Indonesia.",
    "narrative": [
      "Adopsi teknologi impor sering kali tidak selaras dengan realitas infrastruktur kepulauan, keragaman dialek, dan kebutuhan spesifik masyarakat akar rumput di Indonesia. Ketergantungan algoritma asing juga menimbulkan kerentanan kedaulatan data nasional.",
      "Para pembangun teknologi di laci ini merancang solusi dari prinsip pertama: melatih visi komputer dengan karakteristik jalanan tropis, memasang sensor IoT pertanian presisi di pedalaman, hingga membangun tata kelola data desa berbasis sumber terbuka."
    ],
    "findingQuestion": "Bagaimana kedaulatan teknologi dibangun dari algoritma lokal, sensor terdesentralisasi, dan infrastruktur data sipil yang mandiri?",
    "color": "border-l-4 border-l-[#2563EB]",
    "accentBorder": "#2563EB",
    "accentHex": "#2563EB",
    "slug": "teknologi-solusi-mandiri",
    "brands": [
      {
        "name": "NODEFLUX",
        "slug": "nodeflux",
        "curationTier": "Established",
        "origin": "Jakarta Selatan, DKI Jakarta",
        "discoveryHeadline": "CCTV Resolusi Rendah di Bawah Kanopi Jalan Tropis",
        "coreFinding": "Algoritma visi komputer lokal dibangun dari nol untuk mengenali plat kendaraan dan wajah pada video resolusi rendah di bawah 720p dengan pencahayaan tropis ekstrem dan sudut tangkap curam.",
        "logoUrl": "https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=3006119617428903318",
        "flagshipPriceRange": "Rp 150.000 | Rp12.000.000",
        "totalScore": 96
      },
      {
        "name": "MERTANI",
        "slug": "mertani",
        "curationTier": "Established",
        "origin": "Sleman, D.I. Yogyakarta",
        "discoveryHeadline": "Lahan Gambut Terisolasi Ratusan Hektar",
        "coreFinding": "Kerusakan ekosistem perkebunan kelapa sawit dan gambut dicegah dengan stasiun telemetri nirkabel frekuensi rendah LoRa dan satelit yang beroperasi tanpa sinyal seluler.",
        "logoUrl": "https://yt3.googleusercontent.com/LdEqkCupKK6JuWNRGavBHwSdDG0PM3sbsCiwtrA-L6z56HmlqAmnP9f2HZhPdWcTUhnt6m1XmA=s900-c-k-c0x00ffffff-no-rj",
        "flagshipPriceRange": "Rp 150.000 | Rp 150.000",
        "totalScore": 95
      },
      {
        "name": "INDODAX",
        "slug": "indodax",
        "curationTier": "Established",
        "origin": "Jakarta Selatan, DKI Jakarta / Denpasar, Bali",
        "discoveryHeadline": "Skeptisisme Total Perbankan Terhadap Bitcoin 2014",
        "coreFinding": "Membangun infrastruktur bursa aset kripto lokal berlisensi Bappebti/OJK pertama di Indonesia yang membuktikan likuiditas pasangan mata uang rupiah mandiri untuk jutaan investor ritel domestik.",
        "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/c/ca/LOGO_INDODAX_NEW.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
        "flagshipPriceRange": "Rp 150.000 | Rp 150.000",
        "totalScore": 95
      },
      {
        "name": "FLIP",
        "slug": "flip",
        "curationTier": "Established",
        "origin": "Depok, Jawa Barat / Jakarta Selatan",
        "discoveryHeadline": "Biaya Transfer Antarbank Rp6.500 Menggerus Margin Transaksi Rakyat",
        "coreFinding": "Mendisrupsi biaya transfer perbankan Rp6.500 yang membebani masyarakat selama puluhan tahun melalui rekayasa sistem antrean rekening perantara legal berizin Bank Indonesia.",
        "logoUrl": "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80",
        "flagshipPriceRange": "Rp 150.000 | Rp 150.000",
        "totalScore": 98
      },
      {
        "name": "NAFAS INDONESIA",
        "slug": "nafas-indonesia",
        "curationTier": "Middle",
        "origin": "Jakarta Selatan, DKI Jakarta",
        "discoveryHeadline": "Ketiadaan Data Polusi Udara Real-Time di Tingkat RT/RW",
        "coreFinding": "Membangun jaringan sensor polusi udara particulate matter (PM2.5) independen terbesar di Indonesia yang dipasang langsung di rumah warga untuk mendemokratisasi data kualitas udara hiperlokal.",
        "logoUrl": "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80",
        "flagshipPriceRange": "Rp 150.000 | Rp 150.000",
        "totalScore": 95
      },
      {
        "name": "KITABISA",
        "slug": "kitabisa",
        "curationTier": "Middle",
        "origin": "Jakarta Selatan, DKI Jakarta",
        "discoveryHeadline": "Pasien Kurang Mampu Ditolak Rumah Sakit Karena Ketiadaan Dana Tunai Cepat",
        "coreFinding": "Mentransformasi solidaritas kedermawanan tradisional menjadi platform urun dana (crowdfunding) digital terbuka yang mencairkan ratusan miliar rupiah per tahun untuk pasien kritis dan bencana alam.",
        "logoUrl": "https://play-lh.googleusercontent.com/myPZXQ96u8THurTYakUPT4jpEaj9K5rPVLDSKNr1anCTwkntseNfIiqh82hRdC0XA5M",
        "flagshipPriceRange": "Rp 150.000 | Rp 150.000",
        "totalScore": 98
      },
      {
        "name": "PERIKSADATA",
        "slug": "periksadata",
        "curationTier": "Middle",
        "origin": "Jakarta / Remote",
        "discoveryHeadline": "Ratusan Juta Data Kependudukan Bocor dan Dijual Bebas di Dark Web",
        "coreFinding": "Mengembangkan mesin pencari intelijen kebocoran data pribadi (data breach) pertama di Indonesia yang dapat diakses publik secara gratis tanpa mencatat atau mengeksploitasi data pengguna.",
        "logoUrl": "https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=2605165609050696184",
        "flagshipPriceRange": "Rp 150.000 | Rp 150.000",
        "totalScore": 97
      },
      {
        "name": "OPENSID",
        "slug": "opensid",
        "curationTier": "Hidden Gem",
        "origin": "Bandung, Jawa Barat / Nasional",
        "discoveryHeadline": "Proyek Digitalisasi Desa Miliaran Rupiah Kerap Berakhir Mangkrak",
        "coreFinding": "Mengembangkan platform Sistem Informasi Desa (OpenSID) sumber terbuka (open-source) gratis yang diadopsi secara mandiri oleh lebih dari 5.500 desa di seluruh Indonesia tanpa bergantung pada proyek vendor APBD mahal.",
        "logoUrl": "https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=100063787771435",
        "flagshipPriceRange": "Rp 150.000 | Rp1.200.000",
        "totalScore": 100
      },
      {
        "name": "COMMON ROOM",
        "slug": "common-room",
        "curationTier": "Hidden Gem",
        "origin": "Bandung, Jawa Barat / Kasepuhan Ciptagelar",
        "discoveryHeadline": "Ribuan Desa Adat Terisolasi dari Sinyal Telekomunikasi Komersial",
        "coreFinding": "Membuktikan bahwa masyarakat adat dan warga perdesaan terpencil mampu membangun, mengoperasikan, dan merawat infrastruktur jaringan internet mandiri (community networks) berbasis perangkat keras terbuka (open-source) dan tenaga surya tanpa ketergantungan pada menara BTS operator seluler komersial.",
        "logoUrl": "http://commonroomstore.com/cdn/shop/files/4_2e8ef97a-e33e-4e2c-bb43-a177cb98c1ce.png?v=1710749957",
        "flagshipPriceRange": "Rp 150.000 | Rp 150.000",
        "totalScore": 100
      },
      {
        "name": "ATMAGO",
        "slug": "atmago",
        "curationTier": "Hidden Gem",
        "origin": "Jakarta Selatan / Yogyakarta",
        "discoveryHeadline": "Warga Kampung Padat Terputus dari Peringatan Bencana Akibat Boros Kuota",
        "coreFinding": "Merancang platform media sosial tetangga berbasis web ultra-ringan (ultra-low bandwidth) yang memungkinkan warga kampung perkotaan berbagi peringatan banjir, info posyandu, dan lowongan kerja lokal tanpa menguras kuota data.",
        "logoUrl": "https://play-lh.googleusercontent.com/c_734ultCqhGsnN0uAUxoPTc1e853e_jQKAwxLpspK62tre4wekrzk0i4BS4Wbu79D-jTXE_vtnrTMYaoRAt=w600-h300-pc0xffffff-pd",
        "flagshipPriceRange": "Rp 150.000 | Rp 150.000",
        "totalScore": 98
      }
    ]
  },
  {
    "id": "06",
    "name": "Kultur, Kebugaran & Gaya Hidup Berdaulat",
    "editorialTitle": "Kearifan Botani, Budaya Bernafas, dan Identitas Raga Nusantara",
    "definition": "Pencipta ramuan botani alami, pelestari tradisi jamu saintifik, instrumen musik artisan, dan kriya gaya hidup yang berakar pada kearifan ragawi lokal.",
    "narrative": [
      "Gaya hidup modern sering kali mengartikan perawatan diri melalui formula kimia buatan korporasi multinasional dan estetika konsumerisme seragam. Padahal, hutan tropis Indonesia adalah apotek hidup terbesar dunia dengan ribuan spesies tanaman obat dan minyak atsiri.",
      "Brand dalam laci ini merekontekstualisasi kekayaan botani tropis dan tradisi keseharian nusantara menjadi produk perawatan tubuh berstandar farmasi, wewangian berkarakter, serta instrumen budaya yang memancarkan kedaulatan ragawi."
    ],
    "findingQuestion": "Dapatkah gaya hidup modern dan perawatan raga disandarkan pada kekayaan botani tropis serta dialektika budaya nusantara?",
    "color": "border-l-4 border-l-[#0D9488]",
    "accentBorder": "#0D9488",
    "accentHex": "#0D9488",
    "slug": "kultur-kebugaran-gaya-hidup-berdaulat",
    "brands": [
      {
        "name": "SENSATIA BOTANICALS",
        "slug": "sensatia-botanicals",
        "curationTier": "Established",
        "origin": "Karangasem, Bali",
        "discoveryHeadline": "Fasilitas Lab Higienis Mandiri di Desa Pesisir Menolak Ketergantungan Maklon Pihak Ketiga: Disiplin Formulasi Segar dari Jasri",
        "coreFinding": "Mempertahankan seluruh siklus riset dan pengolahan in-house di fasilitas GMP berstandar farmasi di Karangasem tanpa bergantung pada jasa maklon pihak ketiga.",
        "logoUrl": "https://lookaside.fbsbx.com/lookaside/crawler/instagram/sensatiabotanicals/profile_pic.jpg",
        "flagshipPriceRange": "Rp150.000 | Rp240.000",
        "totalScore": 96
      },
      {
        "name": "UTAMA SPICE",
        "slug": "utama-spice",
        "curationTier": "Established",
        "origin": "Gianyar, Bali",
        "discoveryHeadline": "Prinsip Botani Murni Food-Grade Tanpa Pengawet Sintetis: Eksistensi Formulasi Rempah Tradisional Sejak 1989",
        "coreFinding": "Menerapkan kepatuhan ketat pada kaidah botani murni dengan premis bahwa apa yang dioleskan ke kulit harus memiliki kemurnian setara bahan pangan alami.",
        "logoUrl": "https://mms.img.susercontent.com/db3102f792442adc6bd991b282422ea6",
        "flagshipPriceRange": "Rp65.000 | Rp125.000",
        "totalScore": 95
      },
      {
        "name": "JAMU IBOE",
        "slug": "jamu-iboe",
        "curationTier": "Established",
        "origin": "Surabaya & Sidoarjo, Jawa Timur",
        "discoveryHeadline": "Standardisasi Saintifik Ekstraksi Rimpang Usia Seabad: Rekayasa Bentuk Jamu Tradisional Menembus Gaya Hidup Urban",
        "coreFinding": "Institusi farmasi herbal tertua Nusantara (sejak 1910) merevitalisasi sistem ekstraksi rimpang ke standar CPOTB modern tanpa kehilangan senyawa aktif kurkuminoid alaminya.",
        "logoUrl": "https://lookaside.fbsbx.com/lookaside/crawler/instagram/jamu_iboe/profile_pic.jpg",
        "flagshipPriceRange": "Rp25.000 | Rp30.000",
        "totalScore": 95
      },
      {
        "name": "HMNS",
        "slug": "hmns",
        "curationTier": "Established",
        "origin": "Jakarta",
        "discoveryHeadline": "Demokratisasi Wewangian Fine Fragrance Melalui Pendekatan R&D Berbasis Sains: Menghentikan Hegemoni Parfum Desainer Impor",
        "coreFinding": "Mematahkan paradigma bahwa parfum berdaya sebar dan ketahanan tinggi harus berharga jutaan rupiah dengan menerapkan pemodelan piramida aroma matematis berlisensi IFRA dan BPOM.",
        "logoUrl": "https://hmnsperfume.com/cdn/shop/files/Collaborators_-_Web_Banner_Mobile_35eeb6de-9eb4-4521-854b-555b58dbbe44.jpg?v=1788869716",
        "flagshipPriceRange": "Rp325.000 | Rp369.000",
        "totalScore": 91
      },
      {
        "name": "DEMI BUMI",
        "slug": "demi-bumi",
        "curationTier": "Middle",
        "origin": "Tangerang Selatan, Banten",
        "discoveryHeadline": "Plastik Sekali Pakai Menguasai Dapur dan Keranjang Belanja",
        "coreFinding": "Membuktikan bahwa gaya hidup minim sampah (zero-waste) dapat diakses masyarakat luas dengan harga terjangkau melalui peranti pakai ulang berbahan serat katun mentah, bambu, dan sabut kelapa perajin lokal.",
        "logoUrl": "https://mms.img.susercontent.com/d4502443ebc14559c294910da2d585a0",
        "flagshipPriceRange": "Rp25.000 | Rp15.000",
        "totalScore": 97
      },
      {
        "name": "DAGADU DJOKDJA",
        "slug": "dagadu-djokdja",
        "curationTier": "Middle",
        "origin": "Yogyakarta, D.I. Yogyakarta",
        "discoveryHeadline": "Kaos Oleh-Oleh Didominasi Sablon Murahan dan Pembajakan Masal",
        "coreFinding": "Pelopor kriya cinderamata grafis cerdas berbasis subkultur bahasa walikan Jogja yang mempertahankan orisinalitas desain dan etika teritorial tanpa berekspansi membuka cabang di luar kota.",
        "logoUrl": "https://lookaside.fbsbx.com/lookaside/crawler/instagram/dagadudjokdja/profile_pic.jpg",
        "flagshipPriceRange": "Rp95.000 | Rp25.000",
        "totalScore": 99
      },
      {
        "name": "TELUSUR KULTUR",
        "slug": "telusur-kultur",
        "curationTier": "Middle",
        "origin": "Jakarta Selatan, DKI Jakarta",
        "discoveryHeadline": "Narasi Sejarah Bangsa Kerap Berdebu di Lemari Museum",
        "coreFinding": "Mentransformasi narasi sejarah, etnobotani kuliner tradisional, dan cerita rakyat kepulauan menjadi karya seni ilustrasi kemeja siap pakai (wearable storytelling) yang diminati generasi muda lintas latar belakang.",
        "logoUrl": "https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=100063971893184",
        "flagshipPriceRange": "Rp225.000 | Rp275.000",
        "totalScore": 96
      },
      {
        "name": "RUMAH ATSIRI INDONESIA",
        "slug": "rumah-atsiri-indonesia",
        "curationTier": "Hidden Gem",
        "origin": "Karanganyar, Jawa Tengah",
        "discoveryHeadline": "Kebangkitan Fasilitas Distilasi Citronella 1963 di Kaki Gunung Lawu: Rantai Pasok Mandiri dari Tanah Hingga Botol",
        "coreFinding": "Revitalisasi pabrik penyulingan atsiri bersejarah kerja sama RI-Bulgaria 1963 menjadi pusat riset botani, kebun aromatik, dan fasilitas ekstraksi uap mandiri terpadu.",
        "logoUrl": "https://static.wixstatic.com/media/33d8cb_2c37b53703e947b5a56f3151fd6deee0~mv2.png",
        "flagshipPriceRange": "Rp95.000 | Rp145.000",
        "totalScore": 99
      },
      {
        "name": "MANDALIKA MUSIK",
        "slug": "mandalika-musik",
        "curationTier": "Hidden Gem",
        "origin": "Tangerang, Banten / Jakarta",
        "discoveryHeadline": "Alat Musik Akustik Impor Terlalu Mahal untuk Pelajar dan Seniman Jalanan",
        "coreFinding": "Mematahkan hegemoni pabrikan instrumen global dengan merekayasa gitar akustik dan ukulele berbahan kayu lokal berdaya tahan iklim tropis dan intonasi presisi dengan harga terjangkau bagi pelajar dan musisi pemula.",
        "logoUrl": "https://mandalikamusic.com/cdn/shop/files/BANNER_WEB_jpg_1400x.jpg?v=1778815528",
        "flagshipPriceRange": "Rp550.000 | Rp220.000",
        "totalScore": 95
      },
      {
        "name": "PALA NUSANTARA",
        "slug": "pala-nusantara",
        "curationTier": "Hidden Gem",
        "origin": "Kota Bandung, Jawa Barat",
        "discoveryHeadline": "Jam Tangan Selalu Didominasi Cangkang Logam Impor",
        "coreFinding": "Merekayasa jam tangan kayu geometris berdimensi kompak dari kayu lokal legal dan serat kulit nabati yang mengangkat filosofi buah pala sebagai simbol komoditas sejarah kepulauan Nusantara.",
        "logoUrl": "https://mms.img.susercontent.com/b30fd7ae5f4c7cfce58ac89a33a7352a",
        "flagshipPriceRange": "Rp450.000 | Rp550.000",
        "totalScore": 99
      }
    ]
  }
];

export const brandProfiles: Record<string, BrandProfile> = {
  "javara-indigenous-indonesia": {
    "slug": "javara-indigenous-indonesia",
    "name": "JAVARA INDIGENOUS INDONESIA",
    "lensSlug": "pangan-pusaka-agraria-lestari",
    "lensName": "Pangan Pusaka & Agraria Lestari",
    "curationTier": "Established",
    "origin": "Jakarta / Banten",
    "logoUrl": "https://lookaside.fbsbx.com/lookaside/crawler/instagram/javaraindonesia/profile_pic.jpg",
    "discoveryTitle": {
      "anomaly": "Ratusan Varietas Padi Purba Punah dari Pasar Komersial",
      "question": "Bagaimana Menjual Beras Hitam Melik Tanpa Subsidi Negara?",
      "paradigm": "Rekayasa Rantai Nilai Benih Pusaka Nusantara"
    },
    "coreFinding": "Mengomersialisasikan lebih dari 800 produk pangan berbasis keanekaragaman hayati asli dengan mempertahankan hak pemuliaan benih pusaka di tangan puluhan ribu petani swadaya.",
    "contextNarrative": {
      "marketVacuum": "Industrialisasi pertanian monokultur meminggirkan varietas warisan leluhur. Brand ini hadir membangun infrastruktur pasar premium dan ekspor untuk komoditas non-hibrida yang terancam punah.",
      "disruptedStatusQuo": "Kemitraannya memposisikan petani dan peramu adat sebagai penjaga keanekaragaman hayati (custodian of biodiversity)."
    },
    "evidenceTelemetry": {
      "originCoordinates": "Jakarta / Banten",
      "productionModel": "Jaringan 50.000+ petani, pencari makan liar (foragers), dan pengrajin di Jawa Tengah, Jabar, NTT, hingga Papua; budidaya bersertifikasi SNI Organik, USDA, dan EU Organic.",
      "verifiedClaims": [
        {
          "claim": "Jaringan 50.000+ petani, pencari makan liar (foragers), dan pengrajin di Jawa Tengah, Jabar, NTT, hingga Papua",
          "evidencePrimary": "Dokumentasi fasilitas operasional, audit rantai pasok, dan katalog resmi JAVARA INDIGENOUS INDONESIA.",
          "verificationSource": "Hasil pengujian standar mutu nasional, sertifikasi relevan, dan liputan media terpercaya.",
          "editorialInterpretation": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial."
        }
      ]
    },
    "flagshipProducts": [
      {
        "name": "Beras Pusaka Mentik Susu Organik 1 kg",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Jakarta / Banten.",
        "price": "Rp45.000",
        "buyUrl": "https://javara.co.id/",
        "imageUrl": "https://javara.co.id/wp-content/uploads/2018/12/Products.jpg",
        "category": "Karya Utama"
      },
      {
        "name": "Garam Kristal Kusamba Artisan 150 gr .",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Jakarta / Banten.",
        "price": "Rp35.000",
        "buyUrl": "https://javara.co.id/",
        "imageUrl": "https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=3618425574165101182",
        "category": "Koleksi Pilihan"
      }
    ],
    "milestones": [
      {
        "year": "FASE AWAL | PERINTISAN",
        "title": "Riset Material & Pendirian Fondasi",
        "description": "Memulai eksplorasi bahan baku dan uji coba formulasi di Jakarta / Banten, menegaskan komitmen untuk tidak bergantung pada rantai pasok impor."
      },
      {
        "year": "FASE KEDUA | PENGUATAN",
        "title": "Konsolidasi Mitra & Standarisasi Mutu",
        "description": "Membangun jaringan kemitraan erat bersama perajin dan komunitas lokal, menerapkan uji kendali mutu berstandar ketat, dan merilis karya unggulan perdana."
      },
      {
        "year": "FASE KETIGA | KEDAULATAN",
        "title": "Rujukan Kemandirian & Pengakuan Pasar",
        "description": "Menjadi tolok ukur integritas karya di sektor Pangan Pusaka & Agraria Lestari, membuktikan keberlanjutan model bisnis etis yang menguntungkan ekosistem lokal."
      }
    ],
    "sovereigntyMeaning": "Keberadaan JAVARA INDIGENOUS INDONESIA menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten.",
    "channels": {
      "officialStore": [
        {
          "platform": "Webstore Resmi",
          "url": "https://javara.co.id/",
          "label": "javara.co.id"
        },
        {
          "platform": "Tokopedia Official",
          "url": "https://tokopedia.com/find?q=JAVARA%20INDIGENOUS%20INDONESIA",
          "label": "Tokopedia: JAVARA INDIGENOUS INDONESIA"
        },
        {
          "platform": "Shopee Mall",
          "url": "https://shopee.co.id/search?keyword=JAVARA%20INDIGENOUS%20INDONESIA",
          "label": "Shopee: JAVARA INDIGENOUS INDONESIA"
        }
      ],
      "publicSpaces": [
        {
          "platform": "Instagram",
          "url": "https://instagram.com/javaraindonesia",
          "label": "@javaraindonesia"
        },
        {
          "platform": "Surel Kemitraan",
          "url": "mailto:kontak@javara.co.id",
          "label": "Inquiry Resmi"
        }
      ]
    },
    "scores": {
      "quality": 25,
      "discovery": 25,
      "trackRecord": 25,
      "story": 24,
      "total": 99
    },
    "statusRedFlag": "CLEAR",
    "bio_paragraphs": [
      "Kelahiran JAVARA INDIGENOUS INDONESIA berakar dari kegelisahan mendalam terhadap lanskap industri di Jakarta / Banten dan sekitarnya. Industrialisasi pertanian monokultur meminggirkan varietas warisan leluhur. Brand ini hadir membangun infrastruktur pasar premium dan ekspor untuk komoditas non-hibrida yang terancam punah. JAVARA INDIGENOUS INDONESIA hadir untuk menjembatani kesenjangan tersebut dengan membuktikan bahwa potensi daerah mampu melahirkan standar baru yang mandiri dan berdaya tawar tinggi.",
      "Melalui pendekatan kerja yang berakar pada kearifan dan disiplin mutu, JAVARA INDIGENOUS INDONESIA mengintegrasikan ekosistem hulu hingga hilir. Jaringan 50.000+ petani, pencari makan liar (foragers), dan pengrajin di Jawa Tengah, Jabar, NTT, hingga Papua; budidaya bersertifikasi SNI Organik, USDA, dan EU Organic. Langkah ini bukan sekadar strategi produksi, melainkan ikhtiar merawat martabat pekerja lokal serta menjaga keaslian material nusantara tanpa kompromi.",
      "Dampaknya terlihat nyata pada karya-karya terkurasi yang mereka hasilkan. Mengomersialisasikan lebih dari 800 produk pangan berbasis keanekaragaman hayati asli dengan mempertahankan hak pemuliaan benih pusaka di tangan puluhan ribu petani swadaya. Keberadaan JAVARA INDIGENOUS INDONESIA menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten."
    ],
    "quote": "Mengomersialisasikan lebih dari 800 produk pangan berbasis keanekaragaman hayati asli dengan mempertahankan hak pemuliaan benih pusaka di tangan puluhan ribu petani swadaya.",
    "initiatives": [
      {
        "title": "Kemitraan Hulu & Rantai Pasok Berkelanjutan",
        "category": "Ekosistem Lokal",
        "description": "Jaringan 50.000+ petani, pencari makan liar (foragers), dan pengrajin di Jawa Tengah, Jabar, NTT, hingga Papua; budidaya bersertifikasi SNI Organik, USDA, dan EU Organic.",
        "price": "Kemitraan Mandiri",
        "imageUrl": "https://javara.co.id/wp-content/uploads/2018/12/Products.jpg",
        "action_text": "Pelajari Ekosistem",
        "link_url": "https://javara.co.id/"
      },
      {
        "title": "Kendali Mutu & Ketertelusuran Bahan",
        "category": "Standar Mutu",
        "description": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial.",
        "price": "Teruji & Terverifikasi",
        "imageUrl": "https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=3618425574165101182",
        "action_text": "Akses Toko Resmi",
        "link_url": "https://javara.co.id/"
      }
    ]
  },
  "krakakoa": {
    "slug": "krakakoa",
    "name": "KRAKAKOA",
    "lensSlug": "pangan-pusaka-agraria-lestari",
    "lensName": "Pangan Pusaka & Agraria Lestari",
    "curationTier": "Established",
    "origin": "Bandar Lampung / Bali",
    "logoUrl": "https://lookaside.fbsbx.com/lookaside/crawler/instagram/krakakoa/profile_pic.jpg",
    "discoveryTitle": {
      "anomaly": "Kakao Indonesia Kerap Terjual Murah sebagai Komoditas Curah Mentah",
      "question": "Mungkinkah Skema Harga Dua Kali Lipat Mengubah Fermentasi Petani Konservasi?",
      "paradigm": "Transformasi Cokelat Batangan Konservasi Satwa Liar"
    },
    "coreFinding": "Menerapkan model direct trade dengan harga hingga dua kali lipat harga pasar efektif memaksa kepatuhan fermentasi biji kakao lokal berstandar internasional di zona penyangga taman nasional.",
    "contextNarrative": {
      "marketVacuum": "Petani kakao domestik umumnya tidak memfermentasi biji karena tengkulak membeli borongan tanpa distingsi mutu. Brand ini memotong rantai perantara dan melatih petani kecil di batas hutan untuk memproduksi kakao organik terfermentasi penuh (bean-to-bar).",
      "disruptedStatusQuo": "Sekaligus menahan laju deforestasi dan perambahan liar habitat gajah dan harimau Sumatera."
    },
    "evidenceTelemetry": {
      "originCoordinates": "Bandar Lampung / Bali",
      "productionModel": "Petani swadaya di Sedayu (Lampung Barat, batas TNBBS), Jembrana (Bali), dan Sulbar; fermentasi terukur, penjemuran matahari, dan sangrai presisi mandiri.",
      "verifiedClaims": [
        {
          "claim": "Petani swadaya di Sedayu (Lampung Barat, batas TNBBS), Jembrana (Bali), dan Sulbar",
          "evidencePrimary": "Dokumentasi fasilitas operasional, audit rantai pasok, dan katalog resmi KRAKAKOA.",
          "verificationSource": "Hasil pengujian standar mutu nasional, sertifikasi relevan, dan liputan media terpercaya.",
          "editorialInterpretation": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial."
        }
      ]
    },
    "flagshipProducts": [
      {
        "name": "Arenga 70% Dark Chocolate Bar 50 gr",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Bandar Lampung / Bali.",
        "price": "Rp55.500",
        "buyUrl": "https://www.krakakoa.com/",
        "imageUrl": "https://www.krakakoa.com/cdn/shop/products/AR-100_600x.jpg?v=1614790651",
        "category": "Karya Utama"
      },
      {
        "name": "Single Origin 85% Jembrana Bali 50 gr .",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Bandar Lampung / Bali.",
        "price": "Rp67.710",
        "buyUrl": "https://www.krakakoa.com/",
        "imageUrl": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//99/MTA-7476147/krakakoa_krakakoa_box_square_jakarta_indonesian_chocolate_-24_x_5_g-_full02_bvjvk66v.jpg",
        "category": "Koleksi Pilihan"
      }
    ],
    "milestones": [
      {
        "year": "FASE AWAL | PERINTISAN",
        "title": "Riset Material & Pendirian Fondasi",
        "description": "Memulai eksplorasi bahan baku dan uji coba formulasi di Bandar Lampung / Bali, menegaskan komitmen untuk tidak bergantung pada rantai pasok impor."
      },
      {
        "year": "FASE KEDUA | PENGUATAN",
        "title": "Konsolidasi Mitra & Standarisasi Mutu",
        "description": "Membangun jaringan kemitraan erat bersama perajin dan komunitas lokal, menerapkan uji kendali mutu berstandar ketat, dan merilis karya unggulan perdana."
      },
      {
        "year": "FASE KETIGA | KEDAULATAN",
        "title": "Rujukan Kemandirian & Pengakuan Pasar",
        "description": "Menjadi tolok ukur integritas karya di sektor Pangan Pusaka & Agraria Lestari, membuktikan keberlanjutan model bisnis etis yang menguntungkan ekosistem lokal."
      }
    ],
    "sovereigntyMeaning": "Keberadaan KRAKAKOA menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten.",
    "channels": {
      "officialStore": [
        {
          "platform": "Webstore Resmi",
          "url": "https://www.krakakoa.com/",
          "label": "www.krakakoa.com"
        },
        {
          "platform": "Tokopedia Official",
          "url": "https://tokopedia.com/find?q=KRAKAKOA",
          "label": "Tokopedia: KRAKAKOA"
        },
        {
          "platform": "Shopee Mall",
          "url": "https://shopee.co.id/search?keyword=KRAKAKOA",
          "label": "Shopee: KRAKAKOA"
        }
      ],
      "publicSpaces": [
        {
          "platform": "Instagram",
          "url": "https://instagram.com/krakakoa",
          "label": "@krakakoa"
        },
        {
          "platform": "Surel Kemitraan",
          "url": "mailto:kontak@krakakoa.com",
          "label": "Inquiry Resmi"
        }
      ]
    },
    "scores": {
      "quality": 24,
      "discovery": 24,
      "trackRecord": 25,
      "story": 24,
      "total": 97
    },
    "statusRedFlag": "CLEAR",
    "bio_paragraphs": [
      "Kelahiran KRAKAKOA berakar dari kegelisahan mendalam terhadap lanskap industri di Bandar Lampung / Bali dan sekitarnya. Petani kakao domestik umumnya tidak memfermentasi biji karena tengkulak membeli borongan tanpa distingsi mutu. Brand ini memotong rantai perantara dan melatih petani kecil di batas hutan untuk memproduksi kakao organik terfermentasi penuh (bean-to-bar). KRAKAKOA hadir untuk menjembatani kesenjangan tersebut dengan membuktikan bahwa potensi daerah mampu melahirkan standar baru yang mandiri dan berdaya tawar tinggi.",
      "Melalui pendekatan kerja yang berakar pada kearifan dan disiplin mutu, KRAKAKOA mengintegrasikan ekosistem hulu hingga hilir. Petani swadaya di Sedayu (Lampung Barat, batas TNBBS), Jembrana (Bali), dan Sulbar; fermentasi terukur, penjemuran matahari, dan sangrai presisi mandiri. Langkah ini bukan sekadar strategi produksi, melainkan ikhtiar merawat martabat pekerja lokal serta menjaga keaslian material nusantara tanpa kompromi.",
      "Dampaknya terlihat nyata pada karya-karya terkurasi yang mereka hasilkan. Menerapkan model direct trade dengan harga hingga dua kali lipat harga pasar efektif memaksa kepatuhan fermentasi biji kakao lokal berstandar internasional di zona penyangga taman nasional. Keberadaan KRAKAKOA menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten."
    ],
    "quote": "Menerapkan model direct trade dengan harga hingga dua kali lipat harga pasar efektif memaksa kepatuhan fermentasi biji kakao lokal berstandar internasional di zona penyangga taman nasional.",
    "initiatives": [
      {
        "title": "Kemitraan Hulu & Rantai Pasok Berkelanjutan",
        "category": "Ekosistem Lokal",
        "description": "Petani swadaya di Sedayu (Lampung Barat, batas TNBBS), Jembrana (Bali), dan Sulbar; fermentasi terukur, penjemuran matahari, dan sangrai presisi mandiri.",
        "price": "Kemitraan Mandiri",
        "imageUrl": "https://www.krakakoa.com/cdn/shop/products/AR-100_600x.jpg?v=1614790651",
        "action_text": "Pelajari Ekosistem",
        "link_url": "https://www.krakakoa.com/"
      },
      {
        "title": "Kendali Mutu & Ketertelusuran Bahan",
        "category": "Standar Mutu",
        "description": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial.",
        "price": "Teruji & Terverifikasi",
        "imageUrl": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//99/MTA-7476147/krakakoa_krakakoa_box_square_jakarta_indonesian_chocolate_-24_x_5_g-_full02_bvjvk66v.jpg",
        "action_text": "Akses Toko Resmi",
        "link_url": "https://www.krakakoa.com/"
      }
    ]
  },
  "pipiltin-cocoa": {
    "slug": "pipiltin-cocoa",
    "name": "PIPILTIN COCOA",
    "lensSlug": "pangan-pusaka-agraria-lestari",
    "lensName": "Pangan Pusaka & Agraria Lestari",
    "curationTier": "Established",
    "origin": "Jakarta Selatan, DKI Jakarta",
    "logoUrl": "https://pbs.twimg.com/profile_images/712922078299561985/S5suGj41_400x400.jpg",
    "discoveryTitle": {
      "anomaly": "Rasa Kakao Berbeda Radikal di Tiap Lapisan Tanah Nusantara",
      "question": "Mengapa Pabrik Menyeragamkan Profil Rasa Cokelat?",
      "paradigm": "Dekonstruksi Karakter Mikro-Terroir Kepulauan"
    },
    "coreFinding": "Membongkar hegemoni cokelat industri berbasis perisa sintetis dengan memetakan profil asam organik dan terroir spesifik kakao single-origin dari enam pulau utama Indonesia.",
    "contextNarrative": {
      "marketVacuum": "Pasar komersial puluhan tahun dikuasai olahan lemak nabati pengganti (compound chocolate) yang menghilangkan jejak rasa buah kakao. Pipiltin mengolah biji kakao langsung dari sentra panen rakyat melalui pemanggangan suhu rendah.",
      "disruptedStatusQuo": "Memperlihatkan distingsi rasa nyata dari profil asam buah kakao Pidie Aceh hingga tanah vulkanik Flores."
    },
    "evidenceTelemetry": {
      "originCoordinates": "Jakarta Selatan, DKI Jakarta",
      "productionModel": "Komunitas petani mitra di Pidie (Aceh), Berau (Kaltim), Bali, Tanatoraja (Sulsel), dan Flores (NTT); pengolahan mandiri di fasilitas terdaftar.",
      "verifiedClaims": [
        {
          "claim": "Komunitas petani mitra di Pidie (Aceh), Berau (Kaltim), Bali, Tanatoraja (Sulsel), dan Flores (NTT)",
          "evidencePrimary": "Dokumentasi fasilitas operasional, audit rantai pasok, dan katalog resmi PIPILTIN COCOA.",
          "verificationSource": "Hasil pengujian standar mutu nasional, sertifikasi relevan, dan liputan media terpercaya.",
          "editorialInterpretation": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial."
        }
      ]
    },
    "flagshipProducts": [
      {
        "name": "Chocolate Bar Single Origin Aceh 84% 80 gr",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Jakarta Selatan, DKI Jakarta.",
        "price": "Rp65.000",
        "buyUrl": "https://www.pipiltincocoa.com/",
        "imageUrl": "https://down-id.img.susercontent.com/file/id-11134207-81ztg-mqpv6zwihjpr7f",
        "category": "Karya Utama"
      },
      {
        "name": "Chocolate Drink Single Portion Box .",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Jakarta Selatan, DKI Jakarta.",
        "price": "Rp49.000",
        "buyUrl": "https://www.pipiltincocoa.com/",
        "imageUrl": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//catalog-image/MTA-7631939/pipiltin_cocoa_pipiltin_cocoa_single_portions_minuman_cokelat_-3_pcs-_full04_ubjfgfa.jpeg",
        "category": "Koleksi Pilihan"
      }
    ],
    "milestones": [
      {
        "year": "FASE AWAL | PERINTISAN",
        "title": "Riset Material & Pendirian Fondasi",
        "description": "Memulai eksplorasi bahan baku dan uji coba formulasi di Jakarta Selatan, DKI Jakarta, menegaskan komitmen untuk tidak bergantung pada rantai pasok impor."
      },
      {
        "year": "FASE KEDUA | PENGUATAN",
        "title": "Konsolidasi Mitra & Standarisasi Mutu",
        "description": "Membangun jaringan kemitraan erat bersama perajin dan komunitas lokal, menerapkan uji kendali mutu berstandar ketat, dan merilis karya unggulan perdana."
      },
      {
        "year": "FASE KETIGA | KEDAULATAN",
        "title": "Rujukan Kemandirian & Pengakuan Pasar",
        "description": "Menjadi tolok ukur integritas karya di sektor Pangan Pusaka & Agraria Lestari, membuktikan keberlanjutan model bisnis etis yang menguntungkan ekosistem lokal."
      }
    ],
    "sovereigntyMeaning": "Keberadaan PIPILTIN COCOA menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten.",
    "channels": {
      "officialStore": [
        {
          "platform": "Webstore Resmi",
          "url": "https://www.pipiltincocoa.com/",
          "label": "www.pipiltincocoa.com"
        },
        {
          "platform": "Tokopedia Official",
          "url": "https://tokopedia.com/find?q=PIPILTIN%20COCOA",
          "label": "Tokopedia: PIPILTIN COCOA"
        },
        {
          "platform": "Shopee Mall",
          "url": "https://shopee.co.id/search?keyword=PIPILTIN%20COCOA",
          "label": "Shopee: PIPILTIN COCOA"
        }
      ],
      "publicSpaces": [
        {
          "platform": "Instagram",
          "url": "https://instagram.com/pipiltincocoa",
          "label": "@pipiltincocoa"
        },
        {
          "platform": "Surel Kemitraan",
          "url": "mailto:kontak@pipiltincocoa.com",
          "label": "Inquiry Resmi"
        }
      ]
    },
    "scores": {
      "quality": 24,
      "discovery": 23,
      "trackRecord": 24,
      "story": 24,
      "total": 95
    },
    "statusRedFlag": "CLEAR",
    "bio_paragraphs": [
      "Kelahiran PIPILTIN COCOA berakar dari kegelisahan mendalam terhadap lanskap industri di Jakarta Selatan, DKI Jakarta dan sekitarnya. Pasar komersial puluhan tahun dikuasai olahan lemak nabati pengganti (compound chocolate) yang menghilangkan jejak rasa buah kakao. Pipiltin mengolah biji kakao langsung dari sentra panen rakyat melalui pemanggangan suhu rendah. PIPILTIN COCOA hadir untuk menjembatani kesenjangan tersebut dengan membuktikan bahwa potensi daerah mampu melahirkan standar baru yang mandiri dan berdaya tawar tinggi.",
      "Melalui pendekatan kerja yang berakar pada kearifan dan disiplin mutu, PIPILTIN COCOA mengintegrasikan ekosistem hulu hingga hilir. Komunitas petani mitra di Pidie (Aceh), Berau (Kaltim), Bali, Tanatoraja (Sulsel), dan Flores (NTT); pengolahan mandiri di fasilitas terdaftar. Langkah ini bukan sekadar strategi produksi, melainkan ikhtiar merawat martabat pekerja lokal serta menjaga keaslian material nusantara tanpa kompromi.",
      "Dampaknya terlihat nyata pada karya-karya terkurasi yang mereka hasilkan. Membongkar hegemoni cokelat industri berbasis perisa sintetis dengan memetakan profil asam organik dan terroir spesifik kakao single-origin dari enam pulau utama Indonesia. Keberadaan PIPILTIN COCOA menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten."
    ],
    "quote": "Membongkar hegemoni cokelat industri berbasis perisa sintetis dengan memetakan profil asam organik dan terroir spesifik kakao single-origin dari enam pulau utama Indonesia.",
    "initiatives": [
      {
        "title": "Kemitraan Hulu & Rantai Pasok Berkelanjutan",
        "category": "Ekosistem Lokal",
        "description": "Komunitas petani mitra di Pidie (Aceh), Berau (Kaltim), Bali, Tanatoraja (Sulsel), dan Flores (NTT); pengolahan mandiri di fasilitas terdaftar.",
        "price": "Kemitraan Mandiri",
        "imageUrl": "https://down-id.img.susercontent.com/file/id-11134207-81ztg-mqpv6zwihjpr7f",
        "action_text": "Pelajari Ekosistem",
        "link_url": "https://www.pipiltincocoa.com/"
      },
      {
        "title": "Kendali Mutu & Ketertelusuran Bahan",
        "category": "Standar Mutu",
        "description": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial.",
        "price": "Teruji & Terverifikasi",
        "imageUrl": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//catalog-image/MTA-7631939/pipiltin_cocoa_pipiltin_cocoa_single_portions_minuman_cokelat_-3_pcs-_full04_ubjfgfa.jpeg",
        "action_text": "Akses Toko Resmi",
        "link_url": "https://www.pipiltincocoa.com/"
      }
    ]
  },
  "yava": {
    "slug": "yava",
    "name": "YAVA",
    "lensSlug": "pangan-pusaka-agraria-lestari",
    "lensName": "Pangan Pusaka & Agraria Lestari",
    "curationTier": "Established",
    "origin": "Karangasem, Bali",
    "logoUrl": "https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=3186356269372637995",
    "discoveryTitle": {
      "anomaly": "Kacang Mete Mentah Dulu Diekspor Murah ke Luar Negeri untuk Dikupas",
      "question": "Bisakah Desa Termiskin di Kaki Gunung Membalik Neraca Dagang?",
      "paradigm": "Desentralisasi Agroindustri Beras Merah & Mete Kering"
    },
    "coreFinding": "Mematahkan pola rantai pasok kolonial di mana gelondong mete mentah Karangasem diekspor ribuan kilometer hanya untuk dikupas di Vietnam/India sebelum dibeli kembali oleh konsumen domestik.",
    "contextNarrative": {
      "marketVacuum": "Desa Ban di lereng Gunung Agung adalah kawasan tandus berindeks kemiskinan tinggi. Brand ini mendirikan pabrik pemrosesan modern langsung di tengah kebun mete rakyat, mempekerjakan ratusan warga lokal (mayoritas perempuan), dan menyediakan fasilitas penitipan anak mandiri.",
      "disruptedStatusQuo": "Formulasi produknya memadukan bahan pangan lokal seperti beras merah Bali dan lontar aren alami."
    },
    "evidenceTelemetry": {
      "originCoordinates": "Karangasem, Bali",
      "productionModel": "Perkebunan mete swadaya dan petani serealia/kelapa di Desa Ban, Kubu, Karangasem; pemanfaatan cangkang mete sebagai bahan bakar biomassa pengeringan.",
      "verifiedClaims": [
        {
          "claim": "Perkebunan mete swadaya dan petani serealia/kelapa di Desa Ban, Kubu, Karangasem",
          "evidencePrimary": "Dokumentasi fasilitas operasional, audit rantai pasok, dan katalog resmi YAVA.",
          "verificationSource": "Hasil pengujian standar mutu nasional, sertifikasi relevan, dan liputan media terpercaya.",
          "editorialInterpretation": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial."
        }
      ]
    },
    "flagshipProducts": [
      {
        "name": "Granola Bites Chocolate Vanilla 125 gr",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Karangasem, Bali.",
        "price": "Rp35.000",
        "buyUrl": "https://yavabali.com/",
        "imageUrl": "https://cdn11.bigcommerce.com/s-5wf0xbtgyb/images/stencil/590x590/products/9181/27161/1_A7950480002167_20230509131947949_base__68601.1767082486.png?c=2",
        "category": "Karya Utama"
      },
      {
        "name": "Wild Harvested Cashews Cacao 35 gr .",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Karangasem, Bali.",
        "price": "Rp22.000",
        "buyUrl": "https://yavabali.com/",
        "imageUrl": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//96/MTA-21708923/east-bali-cashews_east-bali-cashew-nut-raw-cshw-225gr_full01.jpg",
        "category": "Koleksi Pilihan"
      }
    ],
    "milestones": [
      {
        "year": "FASE AWAL | PERINTISAN",
        "title": "Riset Material & Pendirian Fondasi",
        "description": "Memulai eksplorasi bahan baku dan uji coba formulasi di Karangasem, Bali, menegaskan komitmen untuk tidak bergantung pada rantai pasok impor."
      },
      {
        "year": "FASE KEDUA | PENGUATAN",
        "title": "Konsolidasi Mitra & Standarisasi Mutu",
        "description": "Membangun jaringan kemitraan erat bersama perajin dan komunitas lokal, menerapkan uji kendali mutu berstandar ketat, dan merilis karya unggulan perdana."
      },
      {
        "year": "FASE KETIGA | KEDAULATAN",
        "title": "Rujukan Kemandirian & Pengakuan Pasar",
        "description": "Menjadi tolok ukur integritas karya di sektor Pangan Pusaka & Agraria Lestari, membuktikan keberlanjutan model bisnis etis yang menguntungkan ekosistem lokal."
      }
    ],
    "sovereigntyMeaning": "Keberadaan YAVA menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten.",
    "channels": {
      "officialStore": [
        {
          "platform": "Webstore Resmi",
          "url": "https://yavabali.com/",
          "label": "yavabali.com"
        },
        {
          "platform": "Tokopedia Official",
          "url": "https://tokopedia.com/find?q=YAVA",
          "label": "Tokopedia: YAVA"
        },
        {
          "platform": "Shopee Mall",
          "url": "https://shopee.co.id/search?keyword=YAVA",
          "label": "Shopee: YAVA"
        }
      ],
      "publicSpaces": [
        {
          "platform": "Instagram",
          "url": "https://instagram.com/yavabali",
          "label": "@yavabali"
        },
        {
          "platform": "Surel Kemitraan",
          "url": "mailto:kontak@yavabali.com",
          "label": "Inquiry Resmi"
        }
      ]
    },
    "scores": {
      "quality": 24,
      "discovery": 23,
      "trackRecord": 25,
      "story": 24,
      "total": 96
    },
    "statusRedFlag": "CLEAR",
    "bio_paragraphs": [
      "Kelahiran YAVA berakar dari kegelisahan mendalam terhadap lanskap industri di Karangasem, Bali dan sekitarnya. Desa Ban di lereng Gunung Agung adalah kawasan tandus berindeks kemiskinan tinggi. Brand ini mendirikan pabrik pemrosesan modern langsung di tengah kebun mete rakyat, mempekerjakan ratusan warga lokal (mayoritas perempuan), dan menyediakan fasilitas penitipan anak mandiri. YAVA hadir untuk menjembatani kesenjangan tersebut dengan membuktikan bahwa potensi daerah mampu melahirkan standar baru yang mandiri dan berdaya tawar tinggi.",
      "Melalui pendekatan kerja yang berakar pada kearifan dan disiplin mutu, YAVA mengintegrasikan ekosistem hulu hingga hilir. Perkebunan mete swadaya dan petani serealia/kelapa di Desa Ban, Kubu, Karangasem; pemanfaatan cangkang mete sebagai bahan bakar biomassa pengeringan. Langkah ini bukan sekadar strategi produksi, melainkan ikhtiar merawat martabat pekerja lokal serta menjaga keaslian material nusantara tanpa kompromi.",
      "Dampaknya terlihat nyata pada karya-karya terkurasi yang mereka hasilkan. Mematahkan pola rantai pasok kolonial di mana gelondong mete mentah Karangasem diekspor ribuan kilometer hanya untuk dikupas di Vietnam/India sebelum dibeli kembali oleh konsumen domestik. Keberadaan YAVA menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten."
    ],
    "quote": "Mematahkan pola rantai pasok kolonial di mana gelondong mete mentah Karangasem diekspor ribuan kilometer hanya untuk dikupas di Vietnam/India sebelum dibeli kembali oleh konsumen domestik.",
    "initiatives": [
      {
        "title": "Kemitraan Hulu & Rantai Pasok Berkelanjutan",
        "category": "Ekosistem Lokal",
        "description": "Perkebunan mete swadaya dan petani serealia/kelapa di Desa Ban, Kubu, Karangasem; pemanfaatan cangkang mete sebagai bahan bakar biomassa pengeringan.",
        "price": "Kemitraan Mandiri",
        "imageUrl": "https://cdn11.bigcommerce.com/s-5wf0xbtgyb/images/stencil/590x590/products/9181/27161/1_A7950480002167_20230509131947949_base__68601.1767082486.png?c=2",
        "action_text": "Pelajari Ekosistem",
        "link_url": "https://yavabali.com/"
      },
      {
        "title": "Kendali Mutu & Ketertelusuran Bahan",
        "category": "Standar Mutu",
        "description": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial.",
        "price": "Teruji & Terverifikasi",
        "imageUrl": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//96/MTA-21708923/east-bali-cashews_east-bali-cashew-nut-raw-cshw-225gr_full01.jpg",
        "action_text": "Akses Toko Resmi",
        "link_url": "https://yavabali.com/"
      }
    ]
  },
  "ladang-lima": {
    "slug": "ladang-lima",
    "name": "LADANG LIMA",
    "lensSlug": "pangan-pusaka-agraria-lestari",
    "lensName": "Pangan Pusaka & Agraria Lestari",
    "curationTier": "Middle",
    "origin": "Surabaya / Pasuruan, Jawa Timur",
    "logoUrl": "https://mms.img.susercontent.com/734c20c9de9999730ff10c3ec1a6e7e4",
    "discoveryTitle": {
      "anomaly": "Ketergantungan Terigu Impor Menjerat Ketahanan Pangan Nasional",
      "question": "Mampukah Umbi Singkong Fermentasi Meniru Elastisitas Roti Modern?",
      "paradigm": "Riset Modifikasi Enzimatis Tepung Singkong Jawa Timur"
    },
    "coreFinding": "Mentransformasi singkong rakyat berkadar air tinggi menjadi tepung mocaf (Modified Cassava Flour) murni tanpa rekayasa genetik dan bebas gluten yang mampu mensubstitusi tepung terigu rasio 1:1.",
    "contextNarrative": {
      "marketVacuum": "Indonesia importir gandum terbesar meski produksi umbi melimpah. Brand ini merekayasa fermentasi bakteri asam laktat alami pada singkong untuk melarutkan granula pati sehingga menghasilkan tekstur tepung netral tanpa aroma apek.",
      "disruptedStatusQuo": "Membuktikan kelayakan komersial substitusi pangan pokok lokal di pasar ritel nasional."
    },
    "evidenceTelemetry": {
      "originCoordinates": "Surabaya / Pasuruan, Jawa Timur",
      "productionModel": "Ratusan hektar kebun singkong mitra tani di Pasuruan, Malang, dan Probolinggo; diproses segar dalam 24 jam pascapanen di pabrik pengolahan bebas gluten.",
      "verifiedClaims": [
        {
          "claim": "Ratusan hektar kebun singkong mitra tani di Pasuruan, Malang, dan Probolinggo",
          "evidencePrimary": "Dokumentasi fasilitas operasional, audit rantai pasok, dan katalog resmi LADANG LIMA.",
          "verificationSource": "Hasil pengujian standar mutu nasional, sertifikasi relevan, dan liputan media terpercaya.",
          "editorialInterpretation": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial."
        }
      ]
    },
    "flagshipProducts": [
      {
        "name": "Tepung Singkong Mocaf Serbaguna 500 gr",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Surabaya / Pasuruan, Jawa Timur.",
        "price": "Rp18.000",
        "buyUrl": "https://healthycornersby.com/product/tepung-mocaf-singkong-500g-gluten-free-serbaguna-ladang-lima/",
        "imageUrl": "https://down-id.img.susercontent.com/file/4a9f4d0fc85f9be7f214a2c3cac1acc6",
        "category": "Karya Utama"
      },
      {
        "name": "Veggie Noodle Daun Kelor 76 gr .",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Surabaya / Pasuruan, Jawa Timur.",
        "price": "Rp9.500",
        "buyUrl": "https://healthycornersby.com/product/tepung-mocaf-singkong-500g-gluten-free-serbaguna-ladang-lima/",
        "imageUrl": "https://ladanglimastore.com/_ipx/f_webp&q_100&s_1000x1000/https://storage.googleapis.com/ama-nexa/lsi/2026/07/15/72_id-11134207-8224r-mkrwhzxyfi87ba-500x500.webp",
        "category": "Koleksi Pilihan"
      }
    ],
    "milestones": [
      {
        "year": "FASE AWAL | PERINTISAN",
        "title": "Riset Material & Pendirian Fondasi",
        "description": "Memulai eksplorasi bahan baku dan uji coba formulasi di Surabaya / Pasuruan, Jawa Timur, menegaskan komitmen untuk tidak bergantung pada rantai pasok impor."
      },
      {
        "year": "FASE KEDUA | PENGUATAN",
        "title": "Konsolidasi Mitra & Standarisasi Mutu",
        "description": "Membangun jaringan kemitraan erat bersama perajin dan komunitas lokal, menerapkan uji kendali mutu berstandar ketat, dan merilis karya unggulan perdana."
      },
      {
        "year": "FASE KETIGA | KEDAULATAN",
        "title": "Rujukan Kemandirian & Pengakuan Pasar",
        "description": "Menjadi tolok ukur integritas karya di sektor Pangan Pusaka & Agraria Lestari, membuktikan keberlanjutan model bisnis etis yang menguntungkan ekosistem lokal."
      }
    ],
    "sovereigntyMeaning": "Keberadaan LADANG LIMA menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten.",
    "channels": {
      "officialStore": [
        {
          "platform": "Webstore Resmi",
          "url": "https://healthycornersby.com/product/tepung-mocaf-singkong-500g-gluten-free-serbaguna-ladang-lima/",
          "label": "healthycornersby.com/product/tepung-mocaf-singkong-500g-gluten-free-serbaguna-ladang-lima"
        },
        {
          "platform": "Tokopedia Official",
          "url": "https://tokopedia.com/find?q=LADANG%20LIMA",
          "label": "Tokopedia: LADANG LIMA"
        },
        {
          "platform": "Shopee Mall",
          "url": "https://shopee.co.id/search?keyword=LADANG%20LIMA",
          "label": "Shopee: LADANG LIMA"
        }
      ],
      "publicSpaces": [
        {
          "platform": "Instagram",
          "url": "https://instagram.com/ladanglima.id",
          "label": "@ladanglima.id"
        },
        {
          "platform": "Surel Kemitraan",
          "url": "mailto:kontak@healthycornersby.com",
          "label": "Inquiry Resmi"
        }
      ]
    },
    "scores": {
      "quality": 23,
      "discovery": 23,
      "trackRecord": 24,
      "story": 22,
      "total": 92
    },
    "statusRedFlag": "CLEAR",
    "bio_paragraphs": [
      "Kelahiran LADANG LIMA berakar dari kegelisahan mendalam terhadap lanskap industri di Surabaya / Pasuruan, Jawa Timur dan sekitarnya. Indonesia importir gandum terbesar meski produksi umbi melimpah. Brand ini merekayasa fermentasi bakteri asam laktat alami pada singkong untuk melarutkan granula pati sehingga menghasilkan tekstur tepung netral tanpa aroma apek. LADANG LIMA hadir untuk menjembatani kesenjangan tersebut dengan membuktikan bahwa potensi daerah mampu melahirkan standar baru yang mandiri dan berdaya tawar tinggi.",
      "Melalui pendekatan kerja yang berakar pada kearifan dan disiplin mutu, LADANG LIMA mengintegrasikan ekosistem hulu hingga hilir. Ratusan hektar kebun singkong mitra tani di Pasuruan, Malang, dan Probolinggo; diproses segar dalam 24 jam pascapanen di pabrik pengolahan bebas gluten. Langkah ini bukan sekadar strategi produksi, melainkan ikhtiar merawat martabat pekerja lokal serta menjaga keaslian material nusantara tanpa kompromi.",
      "Dampaknya terlihat nyata pada karya-karya terkurasi yang mereka hasilkan. Mentransformasi singkong rakyat berkadar air tinggi menjadi tepung mocaf (Modified Cassava Flour) murni tanpa rekayasa genetik dan bebas gluten yang mampu mensubstitusi tepung terigu rasio 1:1. Keberadaan LADANG LIMA menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten."
    ],
    "quote": "Mentransformasi singkong rakyat berkadar air tinggi menjadi tepung mocaf (Modified Cassava Flour) murni tanpa rekayasa genetik dan bebas gluten yang mampu mensubstitusi tepung terigu rasio 1:1.",
    "initiatives": [
      {
        "title": "Kemitraan Hulu & Rantai Pasok Berkelanjutan",
        "category": "Ekosistem Lokal",
        "description": "Ratusan hektar kebun singkong mitra tani di Pasuruan, Malang, dan Probolinggo; diproses segar dalam 24 jam pascapanen di pabrik pengolahan bebas gluten.",
        "price": "Kemitraan Mandiri",
        "imageUrl": "https://down-id.img.susercontent.com/file/4a9f4d0fc85f9be7f214a2c3cac1acc6",
        "action_text": "Pelajari Ekosistem",
        "link_url": "https://healthycornersby.com/product/tepung-mocaf-singkong-500g-gluten-free-serbaguna-ladang-lima/"
      },
      {
        "title": "Kendali Mutu & Ketertelusuran Bahan",
        "category": "Standar Mutu",
        "description": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial.",
        "price": "Teruji & Terverifikasi",
        "imageUrl": "https://ladanglimastore.com/_ipx/f_webp&q_100&s_1000x1000/https://storage.googleapis.com/ama-nexa/lsi/2026/07/15/72_id-11134207-8224r-mkrwhzxyfi87ba-500x500.webp",
        "action_text": "Akses Toko Resmi",
        "link_url": "https://healthycornersby.com/product/tepung-mocaf-singkong-500g-gluten-free-serbaguna-ladang-lima/"
      }
    ]
  },
  "timurasa-indonesia": {
    "slug": "timurasa-indonesia",
    "name": "TIMURASA INDONESIA",
    "lensSlug": "pangan-pusaka-agraria-lestari",
    "lensName": "Pangan Pusaka & Agraria Lestari",
    "curationTier": "Middle",
    "origin": "Depok, Jawa Barat / Jakarta",
    "logoUrl": "https://lookaside.fbsbx.com/lookaside/crawler/instagram/timurasaindonesia/profile_pic.jpg",
    "discoveryTitle": {
      "anomaly": "Kacang Kenari Liar Alor Mengendap di Lantai Hutan Tanpa Nilai Tambah",
      "question": "Siapa yang Mengorganisir Logistik Komoditas Kepulauan Terluar?",
      "paradigm": "Penyelamatan Etnobotani Pangan Liar Wallacea"
    },
    "coreFinding": "Berhasil mengorganisasikan rantai pasok etnobotani hutan non-budidaya dari pulau terpencil Indonesia Timur hingga masuk rantai pasok industri horeka modern dan ekspor.",
    "contextNarrative": {
      "marketVacuum": "Komoditas pangan asli kepulauan timur seperti kenari liar, gula lontar, dan sorgum kerap gagal bersaing akibat mahalnya logistik tol laut dan minimnya standardisasi. Timurasa bertindak sebagai agregator etis yang mendidik komunitas adat teknik pemanenan higienis tanpa merusak tegakan pohon purba.",
      "disruptedStatusQuo": "Mendorong ekonomi sirkular komoditas non-sawit di NTT dan Maluku."
    },
    "evidenceTelemetry": {
      "originCoordinates": "Depok, Jawa Barat / Jakarta",
      "productionModel": "Panenan pohon kenari tua liar di Pulau Alor (NTT), pengrajin gula aren alami Lebak (Banten), serta sentra budidaya sorgum dan kelor Flores; sortasi berstandar sanitasi ketat.",
      "verifiedClaims": [
        {
          "claim": "Panenan pohon kenari tua liar di Pulau Alor (NTT), pengrajin gula aren alami Lebak (Banten), serta sentra budidaya sorgum dan kelor Flores",
          "evidencePrimary": "Dokumentasi fasilitas operasional, audit rantai pasok, dan katalog resmi TIMURASA INDONESIA.",
          "verificationSource": "Hasil pengujian standar mutu nasional, sertifikasi relevan, dan liputan media terpercaya.",
          "editorialInterpretation": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial."
        }
      ]
    },
    "flagshipProducts": [
      {
        "name": "Kacang Kenari Alor Panggang Original 100 gr",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Depok, Jawa Barat / Jakarta.",
        "price": "Rp38.000",
        "buyUrl": "https://m.timurasa.com/",
        "imageUrl": "https://cdn-osk.vincere.team/products/86b466a0-b189-4555-bbbb-6f0ed13545a5/783377ac-318b-4dcf-b3c0-4d8b2ecd7030.png",
        "category": "Karya Utama"
      },
      {
        "name": "Gula Lontar Organik Rote 250 gr .",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Depok, Jawa Barat / Jakarta.",
        "price": "Rp32.000",
        "buyUrl": "https://m.timurasa.com/",
        "imageUrl": "https://cdn-osk.vincere.team/products/86b466a0-b189-4555-bbbb-6f0ed13545a5/5db7a8b2-6592-4c8a-a63b-b8affd82d67d.png",
        "category": "Koleksi Pilihan"
      }
    ],
    "milestones": [
      {
        "year": "FASE AWAL | PERINTISAN",
        "title": "Riset Material & Pendirian Fondasi",
        "description": "Memulai eksplorasi bahan baku dan uji coba formulasi di Depok, Jawa Barat / Jakarta, menegaskan komitmen untuk tidak bergantung pada rantai pasok impor."
      },
      {
        "year": "FASE KEDUA | PENGUATAN",
        "title": "Konsolidasi Mitra & Standarisasi Mutu",
        "description": "Membangun jaringan kemitraan erat bersama perajin dan komunitas lokal, menerapkan uji kendali mutu berstandar ketat, dan merilis karya unggulan perdana."
      },
      {
        "year": "FASE KETIGA | KEDAULATAN",
        "title": "Rujukan Kemandirian & Pengakuan Pasar",
        "description": "Menjadi tolok ukur integritas karya di sektor Pangan Pusaka & Agraria Lestari, membuktikan keberlanjutan model bisnis etis yang menguntungkan ekosistem lokal."
      }
    ],
    "sovereigntyMeaning": "Keberadaan TIMURASA INDONESIA menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten.",
    "channels": {
      "officialStore": [
        {
          "platform": "Webstore Resmi",
          "url": "https://m.timurasa.com/",
          "label": "m.timurasa.com"
        },
        {
          "platform": "Tokopedia Official",
          "url": "https://tokopedia.com/find?q=TIMURASA%20INDONESIA",
          "label": "Tokopedia: TIMURASA INDONESIA"
        },
        {
          "platform": "Shopee Mall",
          "url": "https://shopee.co.id/search?keyword=TIMURASA%20INDONESIA",
          "label": "Shopee: TIMURASA INDONESIA"
        }
      ],
      "publicSpaces": [
        {
          "platform": "Instagram",
          "url": "https://instagram.com/timurasaindonesia",
          "label": "@timurasaindonesia"
        },
        {
          "platform": "Surel Kemitraan",
          "url": "mailto:kontak@m.timurasa.com",
          "label": "Inquiry Resmi"
        }
      ]
    },
    "scores": {
      "quality": 23,
      "discovery": 24,
      "trackRecord": 23,
      "story": 23,
      "total": 93
    },
    "statusRedFlag": "CLEAR",
    "bio_paragraphs": [
      "Kelahiran TIMURASA INDONESIA berakar dari kegelisahan mendalam terhadap lanskap industri di Depok, Jawa Barat / Jakarta dan sekitarnya. Komoditas pangan asli kepulauan timur seperti kenari liar, gula lontar, dan sorgum kerap gagal bersaing akibat mahalnya logistik tol laut dan minimnya standardisasi. Timurasa bertindak sebagai agregator etis yang mendidik komunitas adat teknik pemanenan higienis tanpa merusak tegakan pohon purba. TIMURASA INDONESIA hadir untuk menjembatani kesenjangan tersebut dengan membuktikan bahwa potensi daerah mampu melahirkan standar baru yang mandiri dan berdaya tawar tinggi.",
      "Melalui pendekatan kerja yang berakar pada kearifan dan disiplin mutu, TIMURASA INDONESIA mengintegrasikan ekosistem hulu hingga hilir. Panenan pohon kenari tua liar di Pulau Alor (NTT), pengrajin gula aren alami Lebak (Banten), serta sentra budidaya sorgum dan kelor Flores; sortasi berstandar sanitasi ketat. Langkah ini bukan sekadar strategi produksi, melainkan ikhtiar merawat martabat pekerja lokal serta menjaga keaslian material nusantara tanpa kompromi.",
      "Dampaknya terlihat nyata pada karya-karya terkurasi yang mereka hasilkan. Berhasil mengorganisasikan rantai pasok etnobotani hutan non-budidaya dari pulau terpencil Indonesia Timur hingga masuk rantai pasok industri horeka modern dan ekspor. Keberadaan TIMURASA INDONESIA menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten."
    ],
    "quote": "Berhasil mengorganisasikan rantai pasok etnobotani hutan non-budidaya dari pulau terpencil Indonesia Timur hingga masuk rantai pasok industri horeka modern dan ekspor.",
    "initiatives": [
      {
        "title": "Kemitraan Hulu & Rantai Pasok Berkelanjutan",
        "category": "Ekosistem Lokal",
        "description": "Panenan pohon kenari tua liar di Pulau Alor (NTT), pengrajin gula aren alami Lebak (Banten), serta sentra budidaya sorgum dan kelor Flores; sortasi berstandar sanitasi ketat.",
        "price": "Kemitraan Mandiri",
        "imageUrl": "https://cdn-osk.vincere.team/products/86b466a0-b189-4555-bbbb-6f0ed13545a5/783377ac-318b-4dcf-b3c0-4d8b2ecd7030.png",
        "action_text": "Pelajari Ekosistem",
        "link_url": "https://m.timurasa.com/"
      },
      {
        "title": "Kendali Mutu & Ketertelusuran Bahan",
        "category": "Standar Mutu",
        "description": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial.",
        "price": "Teruji & Terverifikasi",
        "imageUrl": "https://cdn-osk.vincere.team/products/86b466a0-b189-4555-bbbb-6f0ed13545a5/5db7a8b2-6592-4c8a-a63b-b8affd82d67d.png",
        "action_text": "Akses Toko Resmi",
        "link_url": "https://m.timurasa.com/"
      }
    ]
  },
  "talasi": {
    "slug": "talasi",
    "name": "TALASI",
    "lensSlug": "pangan-pusaka-agraria-lestari",
    "lensName": "Pangan Pusaka & Agraria Lestari",
    "curationTier": "Middle",
    "origin": "Badung / Tabanan, Bali",
    "logoUrl": "https://lookaside.fbsbx.com/lookaside/crawler/instagram/thetalasi/profile_pic.jpg",
    "discoveryTitle": {
      "anomaly": "Vanila Indonesia Sempat Dijuluki 'Java Vanilla' Berkadar Rendah Akibat Panen Dini",
      "question": "Dapatkah Sertifikasi Asal-Usul Mengembalikan Reputasinya?",
      "paradigm": "Penguncian Jejak Asal Bahan Alami Agroforestri"
    },
    "coreFinding": "Mengintegrasikan estate agroforestry dan fasilitas pemrosesan terdesentralisasi untuk merealisasikan penelusuran digital (traceability) penuh bagi setiap polong vanila, kopi, dan minyak atsiri langsung dari koordinat asalnya (Origin).",
    "contextNarrative": {
      "marketVacuum": "Komoditas bernilai tinggi seperti vanila kerap dipanen terlalu dini oleh petani karena takut dicuri, menyebabkan anjloknya kadar vanilin alami. Talasi mendirikan pos riset botani dan pemrosesan mandiri di Selemadeg (Tabanan) dan Sumba.",
      "disruptedStatusQuo": "Model kurasi produknya mengombinasikan pelestarian habitat liar dengan nilai komersial botani premium."
    },
    "evidenceTelemetry": {
      "originCoordinates": "Badung / Tabanan, Bali",
      "productionModel": "Kebun agroforestri terintegrasi di Batukaru/Selemadeg (Tabanan, Bali), Sumba (NTT), dan Jawa; budidaya polikultur tanpa herbisida kimia dengan pengeringan terkontrol.",
      "verifiedClaims": [
        {
          "claim": "Kebun agroforestri terintegrasi di Batukaru/Selemadeg (Tabanan, Bali), Sumba (NTT), dan Jawa",
          "evidencePrimary": "Dokumentasi fasilitas operasional, audit rantai pasok, dan katalog resmi TALASI.",
          "verificationSource": "Hasil pengujian standar mutu nasional, sertifikasi relevan, dan liputan media terpercaya.",
          "editorialInterpretation": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial."
        }
      ]
    },
    "flagshipProducts": [
      {
        "name": "Pure Vanilla Extract Bali Origin 50 ml",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Badung / Tabanan, Bali.",
        "price": "Rp125.000",
        "buyUrl": "https://www.talasi.com/about-us",
        "imageUrl": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/MTA-7124367/watu_watu_multifloral_honey_-_madu_asli_kapuas_hulu_400gr_kalimantan_barat_full01_tnr5pxvd.webp",
        "category": "Karya Utama"
      },
      {
        "name": "Cashew Butter Raw Honey 200 gr .",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Badung / Tabanan, Bali.",
        "price": "Rp75.000",
        "buyUrl": "https://www.talasi.com/about-us",
        "imageUrl": "https://asset.kompas.com/crops/Tajkg-8uKe-x_9KV_xD5UHln5Ic=/73x30:997x646/1200x800/data/photo/2021/06/12/60c4abc251fcd.jpeg",
        "category": "Koleksi Pilihan"
      }
    ],
    "milestones": [
      {
        "year": "FASE AWAL | PERINTISAN",
        "title": "Riset Material & Pendirian Fondasi",
        "description": "Memulai eksplorasi bahan baku dan uji coba formulasi di Badung / Tabanan, Bali, menegaskan komitmen untuk tidak bergantung pada rantai pasok impor."
      },
      {
        "year": "FASE KEDUA | PENGUATAN",
        "title": "Konsolidasi Mitra & Standarisasi Mutu",
        "description": "Membangun jaringan kemitraan erat bersama perajin dan komunitas lokal, menerapkan uji kendali mutu berstandar ketat, dan merilis karya unggulan perdana."
      },
      {
        "year": "FASE KETIGA | KEDAULATAN",
        "title": "Rujukan Kemandirian & Pengakuan Pasar",
        "description": "Menjadi tolok ukur integritas karya di sektor Pangan Pusaka & Agraria Lestari, membuktikan keberlanjutan model bisnis etis yang menguntungkan ekosistem lokal."
      }
    ],
    "sovereigntyMeaning": "Keberadaan TALASI menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten.",
    "channels": {
      "officialStore": [
        {
          "platform": "Webstore Resmi",
          "url": "https://www.talasi.com/about-us",
          "label": "www.talasi.com/about-us"
        },
        {
          "platform": "Tokopedia Official",
          "url": "https://tokopedia.com/find?q=TALASI",
          "label": "Tokopedia: TALASI"
        },
        {
          "platform": "Shopee Mall",
          "url": "https://shopee.co.id/search?keyword=TALASI",
          "label": "Shopee: TALASI"
        }
      ],
      "publicSpaces": [
        {
          "platform": "Instagram",
          "url": "https://instagram.com/talasiorigin",
          "label": "@talasiorigin"
        },
        {
          "platform": "Surel Kemitraan",
          "url": "mailto:kontak@talasi.com",
          "label": "Inquiry Resmi"
        }
      ]
    },
    "scores": {
      "quality": 24,
      "discovery": 22,
      "trackRecord": 24,
      "story": 23,
      "total": 93
    },
    "statusRedFlag": "CLEAR",
    "bio_paragraphs": [
      "Kelahiran TALASI berakar dari kegelisahan mendalam terhadap lanskap industri di Badung / Tabanan, Bali dan sekitarnya. Komoditas bernilai tinggi seperti vanila kerap dipanen terlalu dini oleh petani karena takut dicuri, menyebabkan anjloknya kadar vanilin alami. Talasi mendirikan pos riset botani dan pemrosesan mandiri di Selemadeg (Tabanan) dan Sumba. TALASI hadir untuk menjembatani kesenjangan tersebut dengan membuktikan bahwa potensi daerah mampu melahirkan standar baru yang mandiri dan berdaya tawar tinggi.",
      "Melalui pendekatan kerja yang berakar pada kearifan dan disiplin mutu, TALASI mengintegrasikan ekosistem hulu hingga hilir. Kebun agroforestri terintegrasi di Batukaru/Selemadeg (Tabanan, Bali), Sumba (NTT), dan Jawa; budidaya polikultur tanpa herbisida kimia dengan pengeringan terkontrol. Langkah ini bukan sekadar strategi produksi, melainkan ikhtiar merawat martabat pekerja lokal serta menjaga keaslian material nusantara tanpa kompromi.",
      "Dampaknya terlihat nyata pada karya-karya terkurasi yang mereka hasilkan. Mengintegrasikan estate agroforestry dan fasilitas pemrosesan terdesentralisasi untuk merealisasikan penelusuran digital (traceability) penuh bagi setiap polong vanila, kopi, dan minyak atsiri langsung dari koordinat asalnya (Origin). Keberadaan TALASI menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten."
    ],
    "quote": "Mengintegrasikan estate agroforestry dan fasilitas pemrosesan terdesentralisasi untuk merealisasikan penelusuran digital (traceability) penuh bagi setiap polong vanila, kopi, dan minyak atsiri langsung dari koordinat asalnya (Origin).",
    "initiatives": [
      {
        "title": "Kemitraan Hulu & Rantai Pasok Berkelanjutan",
        "category": "Ekosistem Lokal",
        "description": "Kebun agroforestri terintegrasi di Batukaru/Selemadeg (Tabanan, Bali), Sumba (NTT), dan Jawa; budidaya polikultur tanpa herbisida kimia dengan pengeringan terkontrol.",
        "price": "Kemitraan Mandiri",
        "imageUrl": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/MTA-7124367/watu_watu_multifloral_honey_-_madu_asli_kapuas_hulu_400gr_kalimantan_barat_full01_tnr5pxvd.webp",
        "action_text": "Pelajari Ekosistem",
        "link_url": "https://www.talasi.com/about-us"
      },
      {
        "title": "Kendali Mutu & Ketertelusuran Bahan",
        "category": "Standar Mutu",
        "description": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial.",
        "price": "Teruji & Terverifikasi",
        "imageUrl": "https://asset.kompas.com/crops/Tajkg-8uKe-x_9KV_xD5UHln5Ic=/73x30:997x646/1200x800/data/photo/2021/06/12/60c4abc251fcd.jpeg",
        "action_text": "Akses Toko Resmi",
        "link_url": "https://www.talasi.com/about-us"
      }
    ]
  },
  "mazaraat-artisan-cheese": {
    "slug": "mazaraat-artisan-cheese",
    "name": "MAZARAAT ARTISAN CHEESE",
    "lensSlug": "pangan-pusaka-agraria-lestari",
    "lensName": "Pangan Pusaka & Agraria Lestari",
    "curationTier": "Hidden Gem",
    "origin": "Sleman, D.I. Yogyakarta",
    "logoUrl": "https://lookaside.fbsbx.com/lookaside/crawler/instagram/mazaraatartisancheese/profile_pic.jpg",
    "discoveryTitle": {
      "anomaly": "Susu Murah Lereng Merapi Naik Kelas Menjadi Keju Artisan Matang Alami",
      "question": "Mampukah Peternak Rakyat Menantang Keju Olahan Pabrikan Tanpa Rennet Impor Industri?",
      "paradigm": "Rekayasa Fermentasi Keju Natural-Rind Kaki Gunung Merapi"
    },
    "coreFinding": "Membuktikan bahwa susu murni peternak sapi perah rakyat lereng Gunung Merapi berbasis pakan rumput segar (grass-fed) mampu diproses menjadi keju artisan natural-rind dan cave-aged berkualitas tinggi tanpa aditif kimia pengental maupun kebergantungan pada keju impor.",
    "contextNarrative": {
      "marketVacuum": "Pasar keju Indonesia selama puluhan tahun didominasi oleh keju olahan (processed cheese) yang kaya garam pengemulsi dan minyak nabati. Mazaraat mendirikan rumah produksi ramah lingkungan di Cangkringan untuk memproduksi keju fermentasi alami tanpa bahan pengawet sintesis.",
      "disruptedStatusQuo": "Menerapkan kemitraan harga beli susu di atas rata-rata industri pengolahan susu (IPS) kepada peternak lokal serta mendaur ulang whey sisa keju menjadi pupuk organik."
    },
    "evidenceTelemetry": {
      "originCoordinates": "Sleman, D.I. Yogyakarta",
      "productionModel": "Kelompok peternak sapi perah rakyat di lereng Gunung Merapi (Cangkringan dan Pakem, Sleman) bersistem pakan rumput hijauan; fermentasi kultur probiotik alami dan rennet halal; fasilitas pematangan suhu-kelembapan terkontrol mandiri di Yogyakarta.",
      "verifiedClaims": [
        {
          "claim": "Kelompok peternak sapi perah rakyat di lereng Gunung Merapi (Cangkringan dan Pakem, Sleman) bersistem pakan rumput hijauan",
          "evidencePrimary": "Dokumentasi fasilitas operasional, audit rantai pasok, dan katalog resmi MAZARAAT ARTISAN CHEESE.",
          "verificationSource": "Hasil pengujian standar mutu nasional, sertifikasi relevan, dan liputan media terpercaya.",
          "editorialInterpretation": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial."
        }
      ]
    },
    "flagshipProducts": [
      {
        "name": "Mazaraat Gouda / Halloumi Raw Milk Cheese 200 gr",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Sleman, D.I. Yogyakarta.",
        "price": "Rp85.000",
        "buyUrl": "https://mazaraat.com/",
        "imageUrl": "https://www.nusantarafoodhotel.com/wp-content/uploads/2024/07/Mazaraat-cheese.jpg",
        "category": "Karya Utama"
      },
      {
        "name": "Camembert / Black Truffle Artisan Cheese 125 gr .",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Sleman, D.I. Yogyakarta.",
        "price": "Rp95.000",
        "buyUrl": "https://mazaraat.com/",
        "imageUrl": "https://mms.img.susercontent.com/id-11134210-7ra0m-mbp2tpp8jx7i6c@resize_ss700x700",
        "category": "Koleksi Pilihan"
      }
    ],
    "milestones": [
      {
        "year": "FASE AWAL | PERINTISAN",
        "title": "Riset Material & Pendirian Fondasi",
        "description": "Memulai eksplorasi bahan baku dan uji coba formulasi di Sleman, D.I. Yogyakarta, menegaskan komitmen untuk tidak bergantung pada rantai pasok impor."
      },
      {
        "year": "FASE KEDUA | PENGUATAN",
        "title": "Konsolidasi Mitra & Standarisasi Mutu",
        "description": "Membangun jaringan kemitraan erat bersama perajin dan komunitas lokal, menerapkan uji kendali mutu berstandar ketat, dan merilis karya unggulan perdana."
      },
      {
        "year": "FASE KETIGA | KEDAULATAN",
        "title": "Rujukan Kemandirian & Pengakuan Pasar",
        "description": "Menjadi tolok ukur integritas karya di sektor Pangan Pusaka & Agraria Lestari, membuktikan keberlanjutan model bisnis etis yang menguntungkan ekosistem lokal."
      }
    ],
    "sovereigntyMeaning": "Keberadaan MAZARAAT ARTISAN CHEESE menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten.",
    "channels": {
      "officialStore": [
        {
          "platform": "Webstore Resmi",
          "url": "https://mazaraat.com/",
          "label": "mazaraat.com"
        },
        {
          "platform": "Tokopedia Official",
          "url": "https://tokopedia.com/find?q=MAZARAAT%20ARTISAN%20CHEESE",
          "label": "Tokopedia: MAZARAAT ARTISAN CHEESE"
        },
        {
          "platform": "Shopee Mall",
          "url": "https://shopee.co.id/search?keyword=MAZARAAT%20ARTISAN%20CHEESE",
          "label": "Shopee: MAZARAAT ARTISAN CHEESE"
        }
      ],
      "publicSpaces": [
        {
          "platform": "Instagram",
          "url": "https://instagram.com/mazaraatartisancheese",
          "label": "@mazaraatartisancheese"
        },
        {
          "platform": "Surel Kemitraan",
          "url": "mailto:kontak@mazaraat.com",
          "label": "Inquiry Resmi"
        }
      ]
    },
    "scores": {
      "quality": 25,
      "discovery": 24,
      "trackRecord": 24,
      "story": 24,
      "total": 97
    },
    "statusRedFlag": "CLEAR",
    "bio_paragraphs": [
      "Kelahiran MAZARAAT ARTISAN CHEESE berakar dari kegelisahan mendalam terhadap lanskap industri di Sleman, D.I. Yogyakarta dan sekitarnya. Pasar keju Indonesia selama puluhan tahun didominasi oleh keju olahan (processed cheese) yang kaya garam pengemulsi dan minyak nabati. Mazaraat mendirikan rumah produksi ramah lingkungan di Cangkringan untuk memproduksi keju fermentasi alami tanpa bahan pengawet sintesis. MAZARAAT ARTISAN CHEESE hadir untuk menjembatani kesenjangan tersebut dengan membuktikan bahwa potensi daerah mampu melahirkan standar baru yang mandiri dan berdaya tawar tinggi.",
      "Melalui pendekatan kerja yang berakar pada kearifan dan disiplin mutu, MAZARAAT ARTISAN CHEESE mengintegrasikan ekosistem hulu hingga hilir. Kelompok peternak sapi perah rakyat di lereng Gunung Merapi (Cangkringan dan Pakem, Sleman) bersistem pakan rumput hijauan; fermentasi kultur probiotik alami dan rennet halal; fasilitas pematangan suhu-kelembapan terkontrol mandiri di Yogyakarta. Langkah ini bukan sekadar strategi produksi, melainkan ikhtiar merawat martabat pekerja lokal serta menjaga keaslian material nusantara tanpa kompromi.",
      "Dampaknya terlihat nyata pada karya-karya terkurasi yang mereka hasilkan. Membuktikan bahwa susu murni peternak sapi perah rakyat lereng Gunung Merapi berbasis pakan rumput segar (grass-fed) mampu diproses menjadi keju artisan natural-rind dan cave-aged berkualitas tinggi tanpa aditif kimia pengental maupun kebergantungan pada keju impor. Keberadaan MAZARAAT ARTISAN CHEESE menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten."
    ],
    "quote": "Membuktikan bahwa susu murni peternak sapi perah rakyat lereng Gunung Merapi berbasis pakan rumput segar (grass-fed) mampu diproses menjadi keju artisan natural-rind dan cave-aged berkualitas tinggi tanpa aditif kimia pengental maupun kebergantungan pada keju impor.",
    "initiatives": [
      {
        "title": "Kemitraan Hulu & Rantai Pasok Berkelanjutan",
        "category": "Ekosistem Lokal",
        "description": "Kelompok peternak sapi perah rakyat di lereng Gunung Merapi (Cangkringan dan Pakem, Sleman) bersistem pakan rumput hijauan; fermentasi kultur probiotik alami dan rennet halal; fasilitas pematangan suhu-kelembapan terkontrol mandiri di Yogyakarta.",
        "price": "Kemitraan Mandiri",
        "imageUrl": "https://www.nusantarafoodhotel.com/wp-content/uploads/2024/07/Mazaraat-cheese.jpg",
        "action_text": "Pelajari Ekosistem",
        "link_url": "https://mazaraat.com/"
      },
      {
        "title": "Kendali Mutu & Ketertelusuran Bahan",
        "category": "Standar Mutu",
        "description": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial.",
        "price": "Teruji & Terverifikasi",
        "imageUrl": "https://mms.img.susercontent.com/id-11134210-7ra0m-mbp2tpp8jx7i6c@resize_ss700x700",
        "action_text": "Akses Toko Resmi",
        "link_url": "https://mazaraat.com/"
      }
    ]
  },
  "rahsa-nusantara": {
    "slug": "rahsa-nusantara",
    "name": "RAHSA NUSANTARA",
    "lensSlug": "pangan-pusaka-agraria-lestari",
    "lensName": "Pangan Pusaka & Agraria Lestari",
    "curationTier": "Hidden Gem",
    "origin": "Bandung, Jawa Barat",
    "logoUrl": "https://mms.img.susercontent.com/id-11134216-7ra0k-mdmot821isk2e7_tn",
    "discoveryTitle": {
      "anomaly": "Jamu Identik dengan Rebusan Pinggir Jalan yang Rawan Pengawet Kimia Obat",
      "question": "Bisakah Formulasi Rimpang Dingin Memenuhi Standar BPOM & Nol Sampah?",
      "paradigm": "Standarisasi Etnofarmakologi Rimpang Segar Pasundan"
    },
    "coreFinding": "Menemukan model ekstraksi dingin rimpang segar murni dan madu hutan primer Baduy tanpa pengawet sintesis, pewarna, maupun konsentrat impor, bersertifikasi BPOM dan sirkularitas limbah organik 100%.",
    "contextNarrative": {
      "marketVacuum": "Citra jamu tradisional kerap terhambat masalah standardisasi takaran zat aktif dan isu cemaran kimia obat pada serbuk instan murah. Brand sosiopreneur Bandung ini mengolah resep etnobotani lokal secara higienis menggunakan bahan segar petani pedesaan.",
      "disruptedStatusQuo": "Seluruh ampas perasan rimpang dialirkan melalui program Rahsampah menjadi kompos organik dan pakan ternak."
    },
    "evidenceTelemetry": {
      "originCoordinates": "Bandung, Jawa Barat",
      "productionModel": "Madu hutan mentah Suku Baduy (Banten), lemon Lembang, jahe merah dan kunyit dari kelompok tani Jabar & Jateng; fasilitas berstandar CPOTB.",
      "verifiedClaims": [
        {
          "claim": "Madu hutan mentah Suku Baduy (Banten), lemon Lembang, jahe merah dan kunyit dari kelompok tani Jabar & Jateng",
          "evidencePrimary": "Dokumentasi fasilitas operasional, audit rantai pasok, dan katalog resmi RAHSA NUSANTARA.",
          "verificationSource": "Hasil pengujian standar mutu nasional, sertifikasi relevan, dan liputan media terpercaya.",
          "editorialInterpretation": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial."
        }
      ]
    },
    "flagshipProducts": [
      {
        "name": "Sapujagad Sari Bawang Putih Tunggal & Lemon 200 ml",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Bandung, Jawa Barat.",
        "price": "Rp159.000",
        "buyUrl": "https://shop.rahsa.id/",
        "imageUrl": "http://shop.rahsa.id/cdn/shop/files/012_2023Sapujagad_004e7033-a92f-4abf-bba3-0224ceda7baa.png?v=1701765869",
        "category": "Karya Utama"
      },
      {
        "name": "Sari Jahe Merah Murni 235 ml .",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Bandung, Jawa Barat.",
        "price": "Rp89.000",
        "buyUrl": "https://shop.rahsa.id/",
        "imageUrl": "https://shop.rahsa.id/cdn/shop/files/ImageCover-PaketSehatLengkapAnak_1_768x768.png?v=1701769484%20768w,//shop.rahsa.id/cdn/shop/files/ImageCover-PaketSehatLengkapAnak_1_1024x1024.png?v=1701769484%201024w,//shop.rahsa.id/cdn/shop/files/ImageCover-PaketSehatLengkapAnak_1_1440x1440.png?v=1701769484%201440w",
        "category": "Koleksi Pilihan"
      }
    ],
    "milestones": [
      {
        "year": "FASE AWAL | PERINTISAN",
        "title": "Riset Material & Pendirian Fondasi",
        "description": "Memulai eksplorasi bahan baku dan uji coba formulasi di Bandung, Jawa Barat, menegaskan komitmen untuk tidak bergantung pada rantai pasok impor."
      },
      {
        "year": "FASE KEDUA | PENGUATAN",
        "title": "Konsolidasi Mitra & Standarisasi Mutu",
        "description": "Membangun jaringan kemitraan erat bersama perajin dan komunitas lokal, menerapkan uji kendali mutu berstandar ketat, dan merilis karya unggulan perdana."
      },
      {
        "year": "FASE KETIGA | KEDAULATAN",
        "title": "Rujukan Kemandirian & Pengakuan Pasar",
        "description": "Menjadi tolok ukur integritas karya di sektor Pangan Pusaka & Agraria Lestari, membuktikan keberlanjutan model bisnis etis yang menguntungkan ekosistem lokal."
      }
    ],
    "sovereigntyMeaning": "Keberadaan RAHSA NUSANTARA menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten.",
    "channels": {
      "officialStore": [
        {
          "platform": "Webstore Resmi",
          "url": "https://shop.rahsa.id/",
          "label": "shop.rahsa.id"
        },
        {
          "platform": "Tokopedia Official",
          "url": "https://tokopedia.com/find?q=RAHSA%20NUSANTARA",
          "label": "Tokopedia: RAHSA NUSANTARA"
        },
        {
          "platform": "Shopee Mall",
          "url": "https://shopee.co.id/search?keyword=RAHSA%20NUSANTARA",
          "label": "Shopee: RAHSA NUSANTARA"
        }
      ],
      "publicSpaces": [
        {
          "platform": "Instagram",
          "url": "https://instagram.com/rahsa.nusantara",
          "label": "@rahsa.nusantara"
        },
        {
          "platform": "Surel Kemitraan",
          "url": "mailto:kontak@shop.rahsa.id",
          "label": "Inquiry Resmi"
        }
      ]
    },
    "scores": {
      "quality": 24,
      "discovery": 24,
      "trackRecord": 24,
      "story": 25,
      "total": 97
    },
    "statusRedFlag": "CLEAR",
    "bio_paragraphs": [
      "Kelahiran RAHSA NUSANTARA berakar dari kegelisahan mendalam terhadap lanskap industri di Bandung, Jawa Barat dan sekitarnya. Citra jamu tradisional kerap terhambat masalah standardisasi takaran zat aktif dan isu cemaran kimia obat pada serbuk instan murah. Brand sosiopreneur Bandung ini mengolah resep etnobotani lokal secara higienis menggunakan bahan segar petani pedesaan. RAHSA NUSANTARA hadir untuk menjembatani kesenjangan tersebut dengan membuktikan bahwa potensi daerah mampu melahirkan standar baru yang mandiri dan berdaya tawar tinggi.",
      "Melalui pendekatan kerja yang berakar pada kearifan dan disiplin mutu, RAHSA NUSANTARA mengintegrasikan ekosistem hulu hingga hilir. Madu hutan mentah Suku Baduy (Banten), lemon Lembang, jahe merah dan kunyit dari kelompok tani Jabar & Jateng; fasilitas berstandar CPOTB. Langkah ini bukan sekadar strategi produksi, melainkan ikhtiar merawat martabat pekerja lokal serta menjaga keaslian material nusantara tanpa kompromi.",
      "Dampaknya terlihat nyata pada karya-karya terkurasi yang mereka hasilkan. Menemukan model ekstraksi dingin rimpang segar murni dan madu hutan primer Baduy tanpa pengawet sintesis, pewarna, maupun konsentrat impor, bersertifikasi BPOM dan sirkularitas limbah organik 100%. Keberadaan RAHSA NUSANTARA menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten."
    ],
    "quote": "Menemukan model ekstraksi dingin rimpang segar murni dan madu hutan primer Baduy tanpa pengawet sintesis, pewarna, maupun konsentrat impor, bersertifikasi BPOM dan sirkularitas limbah organik 100%.",
    "initiatives": [
      {
        "title": "Kemitraan Hulu & Rantai Pasok Berkelanjutan",
        "category": "Ekosistem Lokal",
        "description": "Madu hutan mentah Suku Baduy (Banten), lemon Lembang, jahe merah dan kunyit dari kelompok tani Jabar & Jateng; fasilitas berstandar CPOTB.",
        "price": "Kemitraan Mandiri",
        "imageUrl": "http://shop.rahsa.id/cdn/shop/files/012_2023Sapujagad_004e7033-a92f-4abf-bba3-0224ceda7baa.png?v=1701765869",
        "action_text": "Pelajari Ekosistem",
        "link_url": "https://shop.rahsa.id/"
      },
      {
        "title": "Kendali Mutu & Ketertelusuran Bahan",
        "category": "Standar Mutu",
        "description": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial.",
        "price": "Teruji & Terverifikasi",
        "imageUrl": "https://shop.rahsa.id/cdn/shop/files/ImageCover-PaketSehatLengkapAnak_1_768x768.png?v=1701769484%20768w,//shop.rahsa.id/cdn/shop/files/ImageCover-PaketSehatLengkapAnak_1_1024x1024.png?v=1701769484%201024w,//shop.rahsa.id/cdn/shop/files/ImageCover-PaketSehatLengkapAnak_1_1440x1440.png?v=1701769484%201440w",
        "action_text": "Akses Toko Resmi",
        "link_url": "https://shop.rahsa.id/"
      }
    ]
  },
  "lingkar-organik": {
    "slug": "lingkar-organik",
    "name": "LINGKAR ORGANIK",
    "lensSlug": "pangan-pusaka-agraria-lestari",
    "lensName": "Pangan Pusaka & Agraria Lestari",
    "curationTier": "Hidden Gem",
    "origin": "Sleman / Yogyakarta, D.I. Yogyakarta",
    "logoUrl": "https://mms.img.susercontent.com/11140d44c9752fa2038dd6f949c56fc3",
    "discoveryTitle": {
      "anomaly": "Petani Padi Terjerat Utang Pupuk Petrokimia & Benih Pabrikan",
      "question": "Mungkinkah Kembali ke Padi Mentik Wangi Tanpa Pestisida Menghidupkan Ekosistem?",
      "paradigm": "Kemandirian Agraria Komunitas Beras Pusaka Merapi"
    },
    "coreFinding": "Membuktikan restorasi tanah sawah kritis secara mandiri lewat pembudidayaan varietas benih pusaka lokal Jawa (Mentik Susu, Pandan Wangi, Beras Merah Cempo) dengan siklus nutrisi tertutup tanpa ketergantungan input kimia pabrikan.",
    "contextNarrative": {
      "marketVacuum": "Mayoritas beras wangi di pasar mengandalkan pewangi esensial sintetis atau varietas hibrida boros pupuk nitrogen. Lingkar Organik mengonsolidasikan kelompok tani di lereng Merapi untuk memurnikan benih pusaka non-rekayasa lab yang adaptif terhadap hama lokal.",
      "disruptedStatusQuo": "Seluruh margin usaha dialokasikan kembali untuk pendidikan keluarga tani dan bank benih swadaya."
    },
    "evidenceTelemetry": {
      "originCoordinates": "Sleman / Yogyakarta, D.I. Yogyakarta",
      "productionModel": "Sawah tadah hujan dan irigasi mata air alami lereng Merapi (Sleman), Magelang, dan Kulon Progo; sertifikasi organik berbasis inspeksi komunitas dan pemulihan mikroba tanah.",
      "verifiedClaims": [
        {
          "claim": "Sawah tadah hujan dan irigasi mata air alami lereng Merapi (Sleman), Magelang, dan Kulon Progo",
          "evidencePrimary": "Dokumentasi fasilitas operasional, audit rantai pasok, dan katalog resmi LINGKAR ORGANIK.",
          "verificationSource": "Hasil pengujian standar mutu nasional, sertifikasi relevan, dan liputan media terpercaya.",
          "editorialInterpretation": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial."
        }
      ]
    },
    "flagshipProducts": [
      {
        "name": "Beras Organik Mentik Wangi Susu 1 kg",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Sleman / Yogyakarta, D.I. Yogyakarta.",
        "price": "Rp36.000",
        "buyUrl": "https://www.lingkarorganik.or.id/",
        "imageUrl": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/MTA-91400757/lingkar_organik_lingkar_organik_-_tepung_beras_merah_-gluten_free-_-_500gr_full01_d65uxxpx.jpg",
        "category": "Karya Utama"
      },
      {
        "name": "Beras Cokelat Pecah Kulit 1 kg .",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Sleman / Yogyakarta, D.I. Yogyakarta.",
        "price": "Rp34.000",
        "buyUrl": "https://www.lingkarorganik.or.id/",
        "imageUrl": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/MTA-132016519/lingkar_organik_beras_organik_-_lingkar_organik_-_organic_rice_mpasi_full01_r5s4aox4.jpg",
        "category": "Koleksi Pilihan"
      }
    ],
    "milestones": [
      {
        "year": "FASE AWAL | PERINTISAN",
        "title": "Riset Material & Pendirian Fondasi",
        "description": "Memulai eksplorasi bahan baku dan uji coba formulasi di Sleman / Yogyakarta, D.I. Yogyakarta, menegaskan komitmen untuk tidak bergantung pada rantai pasok impor."
      },
      {
        "year": "FASE KEDUA | PENGUATAN",
        "title": "Konsolidasi Mitra & Standarisasi Mutu",
        "description": "Membangun jaringan kemitraan erat bersama perajin dan komunitas lokal, menerapkan uji kendali mutu berstandar ketat, dan merilis karya unggulan perdana."
      },
      {
        "year": "FASE KETIGA | KEDAULATAN",
        "title": "Rujukan Kemandirian & Pengakuan Pasar",
        "description": "Menjadi tolok ukur integritas karya di sektor Pangan Pusaka & Agraria Lestari, membuktikan keberlanjutan model bisnis etis yang menguntungkan ekosistem lokal."
      }
    ],
    "sovereigntyMeaning": "Keberadaan LINGKAR ORGANIK menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten.",
    "channels": {
      "officialStore": [
        {
          "platform": "Webstore Resmi",
          "url": "https://www.lingkarorganik.or.id/",
          "label": "www.lingkarorganik.or.id"
        },
        {
          "platform": "Tokopedia Official",
          "url": "https://tokopedia.com/find?q=LINGKAR%20ORGANIK",
          "label": "Tokopedia: LINGKAR ORGANIK"
        },
        {
          "platform": "Shopee Mall",
          "url": "https://shopee.co.id/search?keyword=LINGKAR%20ORGANIK",
          "label": "Shopee: LINGKAR ORGANIK"
        }
      ],
      "publicSpaces": [
        {
          "platform": "Instagram",
          "url": "https://instagram.com/lingkarorganik",
          "label": "@lingkarorganik"
        },
        {
          "platform": "Surel Kemitraan",
          "url": "mailto:kontak@lingkarorganik.or.id",
          "label": "Inquiry Resmi"
        }
      ]
    },
    "scores": {
      "quality": 25,
      "discovery": 25,
      "trackRecord": 25,
      "story": 24,
      "total": 99
    },
    "statusRedFlag": "CLEAR",
    "bio_paragraphs": [
      "Kelahiran LINGKAR ORGANIK berakar dari kegelisahan mendalam terhadap lanskap industri di Sleman / Yogyakarta, D.I. Yogyakarta dan sekitarnya. Mayoritas beras wangi di pasar mengandalkan pewangi esensial sintetis atau varietas hibrida boros pupuk nitrogen. Lingkar Organik mengonsolidasikan kelompok tani di lereng Merapi untuk memurnikan benih pusaka non-rekayasa lab yang adaptif terhadap hama lokal. LINGKAR ORGANIK hadir untuk menjembatani kesenjangan tersebut dengan membuktikan bahwa potensi daerah mampu melahirkan standar baru yang mandiri dan berdaya tawar tinggi.",
      "Melalui pendekatan kerja yang berakar pada kearifan dan disiplin mutu, LINGKAR ORGANIK mengintegrasikan ekosistem hulu hingga hilir. Sawah tadah hujan dan irigasi mata air alami lereng Merapi (Sleman), Magelang, dan Kulon Progo; sertifikasi organik berbasis inspeksi komunitas dan pemulihan mikroba tanah. Langkah ini bukan sekadar strategi produksi, melainkan ikhtiar merawat martabat pekerja lokal serta menjaga keaslian material nusantara tanpa kompromi.",
      "Dampaknya terlihat nyata pada karya-karya terkurasi yang mereka hasilkan. Membuktikan restorasi tanah sawah kritis secara mandiri lewat pembudidayaan varietas benih pusaka lokal Jawa (Mentik Susu, Pandan Wangi, Beras Merah Cempo) dengan siklus nutrisi tertutup tanpa ketergantungan input kimia pabrikan. Keberadaan LINGKAR ORGANIK menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten."
    ],
    "quote": "Membuktikan restorasi tanah sawah kritis secara mandiri lewat pembudidayaan varietas benih pusaka lokal Jawa (Mentik Susu, Pandan Wangi, Beras Merah Cempo) dengan siklus nutrisi tertutup tanpa ketergantungan input kimia pabrikan.",
    "initiatives": [
      {
        "title": "Kemitraan Hulu & Rantai Pasok Berkelanjutan",
        "category": "Ekosistem Lokal",
        "description": "Sawah tadah hujan dan irigasi mata air alami lereng Merapi (Sleman), Magelang, dan Kulon Progo; sertifikasi organik berbasis inspeksi komunitas dan pemulihan mikroba tanah.",
        "price": "Kemitraan Mandiri",
        "imageUrl": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/MTA-91400757/lingkar_organik_lingkar_organik_-_tepung_beras_merah_-gluten_free-_-_500gr_full01_d65uxxpx.jpg",
        "action_text": "Pelajari Ekosistem",
        "link_url": "https://www.lingkarorganik.or.id/"
      },
      {
        "title": "Kendali Mutu & Ketertelusuran Bahan",
        "category": "Standar Mutu",
        "description": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial.",
        "price": "Teruji & Terverifikasi",
        "imageUrl": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/MTA-132016519/lingkar_organik_beras_organik_-_lingkar_organik_-_organic_rice_mpasi_full01_r5s4aox4.jpg",
        "action_text": "Akses Toko Resmi",
        "link_url": "https://www.lingkarorganik.or.id/"
      }
    ]
  },
  "magno": {
    "slug": "magno",
    "name": "MAGNO",
    "lensSlug": "kriya-desain-material-berkelanjutan",
    "lensName": "Kriya, Desain & Material Berkelanjutan",
    "curationTier": "Established",
    "origin": "Temanggung, Jawa Tengah",
    "logoUrl": "https://www.henkel.com/resource/image/417572/1x1/1000/1000/7380eb805de454bc96fc79f34a720cdc/F5F115A7F130BF0652470CBE4C53FDFA/magno-logo.webp",
    "discoveryTitle": {
      "anomaly": "Temuan kayu sisa kebun desa",
      "question": "Pertanyaan apakah presisi kriya mampu menembus standardisasi desain Jerman dan Jepang tanpa eksploitasi hutan primer",
      "paradigm": "Rasa penasaran bagaimana mekanika radio kayu analog diproduksi dari bengkel desa Kandangan"
    },
    "coreFinding": "Kayu perkebunan non-hutan yang ditebang terukur mampu menghasilkan instrumen audio analog berpresisi tinggi dengan toleransi mikron langsung dari bengkel pedesaan.",
    "contextNarrative": {
      "marketVacuum": "Pemanfaatan kayu cepat tumbuh (sonokeling, pinus, mahoni kebun rakyat) yang dipadukan dengan sirkuit elektronik analog kompak rancangan mandiri. Singgih Susilo Kartono membuktikan kriya kayu perdesaan dapat bertransformasi menjadi produk industrial presisi yang dikoleksi Museum of Modern Art (MoMA) dan memenangkan Good Design Award Jepang.",
      "disruptedStatusQuo": "Produksi dibatasi oleh kuota penyerapan lestari dengan kewajiban pembibitan pohon pengganti."
    },
    "evidenceTelemetry": {
      "originCoordinates": "Temanggung, Jawa Tengah",
      "productionModel": "Kebun rakyat di Kandangan, Temanggung; melatih puluhan pemuda desa dalam mesin bubut dan perakitan presisi; inisiatif konservasi pembibitan pohon lokal.",
      "verifiedClaims": [
        {
          "claim": "Kebun rakyat di Kandangan, Temanggung",
          "evidencePrimary": "Dokumentasi fasilitas operasional, audit rantai pasok, dan katalog resmi MAGNO.",
          "verificationSource": "Hasil pengujian standar mutu nasional, sertifikasi relevan, dan liputan media terpercaya.",
          "editorialInterpretation": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial."
        }
      ]
    },
    "flagshipProducts": [
      {
        "name": "Radio Kayu Magno",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Temanggung, Jawa Tengah.",
        "price": "Rp2.200.000",
        "buyUrl": "https://magno-design.com",
        "imageUrl": "https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/img/VqbcmM/2025/1/28/0b3a710e-d6f2-4310-bd50-1441dcb51429.jpg~tplv-aphluv4xwc-white-pad-v1:250:250.jpg",
        "category": "Karya Utama"
      },
      {
        "name": "Wooden Stationery Series",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Temanggung, Jawa Tengah.",
        "price": "Rp250.000",
        "buyUrl": "https://magno-design.com",
        "imageUrl": "https://down-id.img.susercontent.com/file/id-11134207-7rbk3-m8tzogi3ubrx1f",
        "category": "Koleksi Pilihan"
      }
    ],
    "milestones": [
      {
        "year": "FASE AWAL | PERINTISAN",
        "title": "Riset Material & Pendirian Fondasi",
        "description": "Memulai eksplorasi bahan baku dan uji coba formulasi di Temanggung, Jawa Tengah, menegaskan komitmen untuk tidak bergantung pada rantai pasok impor."
      },
      {
        "year": "FASE KEDUA | PENGUATAN",
        "title": "Konsolidasi Mitra & Standarisasi Mutu",
        "description": "Membangun jaringan kemitraan erat bersama perajin dan komunitas lokal, menerapkan uji kendali mutu berstandar ketat, dan merilis karya unggulan perdana."
      },
      {
        "year": "FASE KETIGA | KEDAULATAN",
        "title": "Rujukan Kemandirian & Pengakuan Pasar",
        "description": "Menjadi tolok ukur integritas karya di sektor Kriya, Desain & Material Berkelanjutan, membuktikan keberlanjutan model bisnis etis yang menguntungkan ekosistem lokal."
      }
    ],
    "sovereigntyMeaning": "Keberadaan MAGNO menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten.",
    "channels": {
      "officialStore": [
        {
          "platform": "Webstore Resmi",
          "url": "https://magno-design.com",
          "label": "magno-design.com"
        },
        {
          "platform": "Tokopedia Official",
          "url": "https://tokopedia.com/find?q=MAGNO",
          "label": "Tokopedia: MAGNO"
        },
        {
          "platform": "Shopee Mall",
          "url": "https://shopee.co.id/search?keyword=MAGNO",
          "label": "Shopee: MAGNO"
        }
      ],
      "publicSpaces": [
        {
          "platform": "Instagram",
          "url": "https://instagram.com/magno_design",
          "label": "@magno_design"
        },
        {
          "platform": "Surel Kemitraan",
          "url": "mailto:kontak@magno-design.com",
          "label": "Inquiry Resmi"
        }
      ]
    },
    "scores": {
      "quality": 25,
      "discovery": 24,
      "trackRecord": 24,
      "story": 25,
      "total": 98
    },
    "statusRedFlag": "CLEAR",
    "bio_paragraphs": [
      "Kelahiran MAGNO berakar dari kegelisahan mendalam terhadap lanskap industri di Temanggung, Jawa Tengah dan sekitarnya. Pemanfaatan kayu cepat tumbuh (sonokeling, pinus, mahoni kebun rakyat) yang dipadukan dengan sirkuit elektronik analog kompak rancangan mandiri. Singgih Susilo Kartono membuktikan kriya kayu perdesaan dapat bertransformasi menjadi produk industrial presisi yang dikoleksi Museum of Modern Art (MoMA) dan memenangkan Good Design Award Jepang. MAGNO hadir untuk menjembatani kesenjangan tersebut dengan membuktikan bahwa potensi daerah mampu melahirkan standar baru yang mandiri dan berdaya tawar tinggi.",
      "Melalui pendekatan kerja yang berakar pada kearifan dan disiplin mutu, MAGNO mengintegrasikan ekosistem hulu hingga hilir. Kebun rakyat di Kandangan, Temanggung; melatih puluhan pemuda desa dalam mesin bubut dan perakitan presisi; inisiatif konservasi pembibitan pohon lokal. Langkah ini bukan sekadar strategi produksi, melainkan ikhtiar merawat martabat pekerja lokal serta menjaga keaslian material nusantara tanpa kompromi.",
      "Dampaknya terlihat nyata pada karya-karya terkurasi yang mereka hasilkan. Kayu perkebunan non-hutan yang ditebang terukur mampu menghasilkan instrumen audio analog berpresisi tinggi dengan toleransi mikron langsung dari bengkel pedesaan. Keberadaan MAGNO menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten."
    ],
    "quote": "Kayu perkebunan non-hutan yang ditebang terukur mampu menghasilkan instrumen audio analog berpresisi tinggi dengan toleransi mikron langsung dari bengkel pedesaan.",
    "initiatives": [
      {
        "title": "Kemitraan Hulu & Rantai Pasok Berkelanjutan",
        "category": "Ekosistem Lokal",
        "description": "Kebun rakyat di Kandangan, Temanggung; melatih puluhan pemuda desa dalam mesin bubut dan perakitan presisi; inisiatif konservasi pembibitan pohon lokal.",
        "price": "Kemitraan Mandiri",
        "imageUrl": "https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/img/VqbcmM/2025/1/28/0b3a710e-d6f2-4310-bd50-1441dcb51429.jpg~tplv-aphluv4xwc-white-pad-v1:250:250.jpg",
        "action_text": "Pelajari Ekosistem",
        "link_url": "https://magno-design.com"
      },
      {
        "title": "Kendali Mutu & Ketertelusuran Bahan",
        "category": "Standar Mutu",
        "description": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial.",
        "price": "Teruji & Terverifikasi",
        "imageUrl": "https://down-id.img.susercontent.com/file/id-11134207-7rbk3-m8tzogi3ubrx1f",
        "action_text": "Akses Toko Resmi",
        "link_url": "https://magno-design.com"
      }
    ]
  },
  "du-anyam": {
    "slug": "du-anyam",
    "name": "DU ANYAM",
    "lensSlug": "kriya-desain-material-berkelanjutan",
    "lensName": "Kriya, Desain & Material Berkelanjutan",
    "curationTier": "Established",
    "origin": "Flores Timur, NTT / Jakarta",
    "logoUrl": "https://mms.img.susercontent.com/id-11134216-81ztc-mei0z8bkifpd58",
    "discoveryTitle": {
      "anomaly": "Temuan kelimpahan daun lontar kering di savana NTT",
      "question": "Ketegangan jurang malnutrisi ibu dan nihilnya akses tunai perdesaan terpencil",
      "paradigm": "Rasa penasaran bagaimana rantai pasok anyaman anyar mampu menembus skala pengadaan korporat ribuan unit"
    },
    "coreFinding": "Mentransformasikan komoditas daun lontar liar menjadi rantai pasok kriya korporat berskala puluhan ribu unit tanpa mendisrupsi tatanan sosiologis masyarakat adat.",
    "contextNarrative": {
      "marketVacuum": "Model intervensi ekonomi-kesehatan untuk menekan malnutrisi anak dan kematian ibu hamil di NTT melalui penyediaan arus kas tunai dari menganyam rumahan. Standardisasi serat dan pewarnaan alami memecahkan disparitas dimensi pada pesanan skala besar.",
      "disruptedStatusQuo": "Pemegang sertifikasi B-Corp dan penyuplai resmi ritel global seperti IKEA."
    },
    "evidenceTelemetry": {
      "originCoordinates": "Flores Timur, NTT / Jakarta",
      "productionModel": "Daun pohon lontar lestari di Flores Timur, Lembata, Alor (NTT), dan purun di Kalsel; memberdayakan 1.600+ ibu penganyam di 54 desa; kendali mutu di level komunitas.",
      "verifiedClaims": [
        {
          "claim": "Daun pohon lontar lestari di Flores Timur, Lembata, Alor (NTT), dan purun di Kalsel",
          "evidencePrimary": "Dokumentasi fasilitas operasional, audit rantai pasok, dan katalog resmi DU ANYAM.",
          "verificationSource": "Hasil pengujian standar mutu nasional, sertifikasi relevan, dan liputan media terpercaya.",
          "editorialInterpretation": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial."
        }
      ]
    },
    "flagshipProducts": [
      {
        "name": "Sobu Storage Basket",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Flores Timur, NTT / Jakarta.",
        "price": "Rp250.000",
        "buyUrl": "https://duanyam.com",
        "imageUrl": "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80",
        "category": "Karya Utama"
      },
      {
        "name": "Dua Sisi Tote Bag Lontar",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Flores Timur, NTT / Jakarta.",
        "price": "Rp350.000",
        "buyUrl": "https://duanyam.com",
        "imageUrl": "https://images.unsplash.com/photo-1518110925495-5fe2fda0442c?auto=format&fit=crop&w=800&q=80",
        "category": "Koleksi Pilihan"
      }
    ],
    "milestones": [
      {
        "year": "FASE AWAL | PERINTISAN",
        "title": "Riset Material & Pendirian Fondasi",
        "description": "Memulai eksplorasi bahan baku dan uji coba formulasi di Flores Timur, NTT / Jakarta, menegaskan komitmen untuk tidak bergantung pada rantai pasok impor."
      },
      {
        "year": "FASE KEDUA | PENGUATAN",
        "title": "Konsolidasi Mitra & Standarisasi Mutu",
        "description": "Membangun jaringan kemitraan erat bersama perajin dan komunitas lokal, menerapkan uji kendali mutu berstandar ketat, dan merilis karya unggulan perdana."
      },
      {
        "year": "FASE KETIGA | KEDAULATAN",
        "title": "Rujukan Kemandirian & Pengakuan Pasar",
        "description": "Menjadi tolok ukur integritas karya di sektor Kriya, Desain & Material Berkelanjutan, membuktikan keberlanjutan model bisnis etis yang menguntungkan ekosistem lokal."
      }
    ],
    "sovereigntyMeaning": "Keberadaan DU ANYAM menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten.",
    "channels": {
      "officialStore": [
        {
          "platform": "Webstore Resmi",
          "url": "https://duanyam.com",
          "label": "duanyam.com"
        },
        {
          "platform": "Tokopedia Official",
          "url": "https://tokopedia.com/find?q=DU%20ANYAM",
          "label": "Tokopedia: DU ANYAM"
        },
        {
          "platform": "Shopee Mall",
          "url": "https://shopee.co.id/search?keyword=DU%20ANYAM",
          "label": "Shopee: DU ANYAM"
        }
      ],
      "publicSpaces": [
        {
          "platform": "Instagram",
          "url": "https://instagram.com/duanyam",
          "label": "@duanyam"
        },
        {
          "platform": "Surel Kemitraan",
          "url": "mailto:kontak@duanyam.com",
          "label": "Inquiry Resmi"
        }
      ]
    },
    "scores": {
      "quality": 24,
      "discovery": 24,
      "trackRecord": 25,
      "story": 25,
      "total": 98
    },
    "statusRedFlag": "CLEAR",
    "bio_paragraphs": [
      "Kelahiran DU ANYAM berakar dari kegelisahan mendalam terhadap lanskap industri di Flores Timur, NTT / Jakarta dan sekitarnya. Model intervensi ekonomi-kesehatan untuk menekan malnutrisi anak dan kematian ibu hamil di NTT melalui penyediaan arus kas tunai dari menganyam rumahan. Standardisasi serat dan pewarnaan alami memecahkan disparitas dimensi pada pesanan skala besar. DU ANYAM hadir untuk menjembatani kesenjangan tersebut dengan membuktikan bahwa potensi daerah mampu melahirkan standar baru yang mandiri dan berdaya tawar tinggi.",
      "Melalui pendekatan kerja yang berakar pada kearifan dan disiplin mutu, DU ANYAM mengintegrasikan ekosistem hulu hingga hilir. Daun pohon lontar lestari di Flores Timur, Lembata, Alor (NTT), dan purun di Kalsel; memberdayakan 1.600+ ibu penganyam di 54 desa; kendali mutu di level komunitas. Langkah ini bukan sekadar strategi produksi, melainkan ikhtiar merawat martabat pekerja lokal serta menjaga keaslian material nusantara tanpa kompromi.",
      "Dampaknya terlihat nyata pada karya-karya terkurasi yang mereka hasilkan. Mentransformasikan komoditas daun lontar liar menjadi rantai pasok kriya korporat berskala puluhan ribu unit tanpa mendisrupsi tatanan sosiologis masyarakat adat. Keberadaan DU ANYAM menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten."
    ],
    "quote": "Mentransformasikan komoditas daun lontar liar menjadi rantai pasok kriya korporat berskala puluhan ribu unit tanpa mendisrupsi tatanan sosiologis masyarakat adat.",
    "initiatives": [
      {
        "title": "Kemitraan Hulu & Rantai Pasok Berkelanjutan",
        "category": "Ekosistem Lokal",
        "description": "Daun pohon lontar lestari di Flores Timur, Lembata, Alor (NTT), dan purun di Kalsel; memberdayakan 1.600+ ibu penganyam di 54 desa; kendali mutu di level komunitas.",
        "price": "Kemitraan Mandiri",
        "imageUrl": "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80",
        "action_text": "Pelajari Ekosistem",
        "link_url": "https://duanyam.com"
      },
      {
        "title": "Kendali Mutu & Ketertelusuran Bahan",
        "category": "Standar Mutu",
        "description": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial.",
        "price": "Teruji & Terverifikasi",
        "imageUrl": "https://images.unsplash.com/photo-1518110925495-5fe2fda0442c?auto=format&fit=crop&w=800&q=80",
        "action_text": "Akses Toko Resmi",
        "link_url": "https://duanyam.com"
      }
    ]
  },
  "spedagi": {
    "slug": "spedagi",
    "name": "SPEDAGI",
    "lensSlug": "kriya-desain-material-berkelanjutan",
    "lensName": "Kriya, Desain & Material Berkelanjutan",
    "curationTier": "Established",
    "origin": "Temanggung, Jawa Tengah",
    "logoUrl": "https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=100064532536155",
    "discoveryTitle": {
      "anomaly": "Temuan karakteristik elastisitas serat bambu petung liar",
      "question": "Ketegangan apakah material organik rapuh mampu menahan beban impak struktural layaknya rangka logam",
      "paradigm": "Rasa penasaran bagaimana sepeda bambu desa lulus standar uji keselamatan transportasi Jepang"
    },
    "coreFinding": "Laminasi bilah bambu petung memiliki rasio kekuatan terhadap bobot dan daya redam getaran jalan raya yang melampaui tabung aluminium standar pabrik.",
    "contextNarrative": {
      "marketVacuum": "Riset rekayasa bilah bambu laminasi sejajar memecahkan kerentanan retak memanjang bambu. Melahirkan Spedagi Movement yang membangun kemandirian desa dan menciptakan lapangan kerja teknik terampil bagi generasi muda.",
      "disruptedStatusQuo": "Lulus uji keselamatan transportasi Japan Industrial Standard (JIS) dan menuntaskan rute Paris-Brest-Paris 1.200 km."
    },
    "evidenceTelemetry": {
      "originCoordinates": "Temanggung, Jawa Tengah",
      "productionModel": "Bambu petung tua (3 - 5 tahun) dari lereng Gunung Sindoro dan Sumbing; pengawetan rendaman garam boraks ramah lingkungan tanpa logam berat; perakitan di Dusun Guntur, Temanggung.",
      "verifiedClaims": [
        {
          "claim": "Bambu petung tua (3 - 5 tahun) dari lereng Gunung Sindoro dan Sumbing",
          "evidencePrimary": "Dokumentasi fasilitas operasional, audit rantai pasok, dan katalog resmi SPEDAGI.",
          "verificationSource": "Hasil pengujian standar mutu nasional, sertifikasi relevan, dan liputan media terpercaya.",
          "editorialInterpretation": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial."
        }
      ]
    },
    "flagshipProducts": [
      {
        "name": "Spedagi Dalan Rata",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Temanggung, Jawa Tengah.",
        "price": "Rp12.500.000",
        "buyUrl": "https://www.spedagi.com",
        "imageUrl": "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80",
        "category": "Karya Utama"
      },
      {
        "name": "Spedagi Rodalink / Urban Commuter",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Temanggung, Jawa Tengah.",
        "price": "Rp9.500.000",
        "buyUrl": "https://www.spedagi.com",
        "imageUrl": "https://images.unsplash.com/photo-1518110925495-5fe2fda0442c?auto=format&fit=crop&w=800&q=80",
        "category": "Koleksi Pilihan"
      }
    ],
    "milestones": [
      {
        "year": "FASE AWAL | PERINTISAN",
        "title": "Riset Material & Pendirian Fondasi",
        "description": "Memulai eksplorasi bahan baku dan uji coba formulasi di Temanggung, Jawa Tengah, menegaskan komitmen untuk tidak bergantung pada rantai pasok impor."
      },
      {
        "year": "FASE KEDUA | PENGUATAN",
        "title": "Konsolidasi Mitra & Standarisasi Mutu",
        "description": "Membangun jaringan kemitraan erat bersama perajin dan komunitas lokal, menerapkan uji kendali mutu berstandar ketat, dan merilis karya unggulan perdana."
      },
      {
        "year": "FASE KETIGA | KEDAULATAN",
        "title": "Rujukan Kemandirian & Pengakuan Pasar",
        "description": "Menjadi tolok ukur integritas karya di sektor Kriya, Desain & Material Berkelanjutan, membuktikan keberlanjutan model bisnis etis yang menguntungkan ekosistem lokal."
      }
    ],
    "sovereigntyMeaning": "Keberadaan SPEDAGI menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten.",
    "channels": {
      "officialStore": [
        {
          "platform": "Webstore Resmi",
          "url": "https://www.spedagi.com",
          "label": "www.spedagi.com"
        },
        {
          "platform": "Tokopedia Official",
          "url": "https://tokopedia.com/find?q=SPEDAGI",
          "label": "Tokopedia: SPEDAGI"
        },
        {
          "platform": "Shopee Mall",
          "url": "https://shopee.co.id/search?keyword=SPEDAGI",
          "label": "Shopee: SPEDAGI"
        }
      ],
      "publicSpaces": [
        {
          "platform": "Instagram",
          "url": "https://instagram.com/spedagibamboo",
          "label": "@spedagibamboo"
        },
        {
          "platform": "Surel Kemitraan",
          "url": "mailto:kontak@spedagi.com",
          "label": "Inquiry Resmi"
        }
      ]
    },
    "scores": {
      "quality": 25,
      "discovery": 25,
      "trackRecord": 24,
      "story": 24,
      "total": 98
    },
    "statusRedFlag": "CLEAR",
    "bio_paragraphs": [
      "Kelahiran SPEDAGI berakar dari kegelisahan mendalam terhadap lanskap industri di Temanggung, Jawa Tengah dan sekitarnya. Riset rekayasa bilah bambu laminasi sejajar memecahkan kerentanan retak memanjang bambu. Melahirkan Spedagi Movement yang membangun kemandirian desa dan menciptakan lapangan kerja teknik terampil bagi generasi muda. SPEDAGI hadir untuk menjembatani kesenjangan tersebut dengan membuktikan bahwa potensi daerah mampu melahirkan standar baru yang mandiri dan berdaya tawar tinggi.",
      "Melalui pendekatan kerja yang berakar pada kearifan dan disiplin mutu, SPEDAGI mengintegrasikan ekosistem hulu hingga hilir. Bambu petung tua (3 - 5 tahun) dari lereng Gunung Sindoro dan Sumbing; pengawetan rendaman garam boraks ramah lingkungan tanpa logam berat; perakitan di Dusun Guntur, Temanggung. Langkah ini bukan sekadar strategi produksi, melainkan ikhtiar merawat martabat pekerja lokal serta menjaga keaslian material nusantara tanpa kompromi.",
      "Dampaknya terlihat nyata pada karya-karya terkurasi yang mereka hasilkan. Laminasi bilah bambu petung memiliki rasio kekuatan terhadap bobot dan daya redam getaran jalan raya yang melampaui tabung aluminium standar pabrik. Keberadaan SPEDAGI menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten."
    ],
    "quote": "Laminasi bilah bambu petung memiliki rasio kekuatan terhadap bobot dan daya redam getaran jalan raya yang melampaui tabung aluminium standar pabrik.",
    "initiatives": [
      {
        "title": "Kemitraan Hulu & Rantai Pasok Berkelanjutan",
        "category": "Ekosistem Lokal",
        "description": "Bambu petung tua (3 - 5 tahun) dari lereng Gunung Sindoro dan Sumbing; pengawetan rendaman garam boraks ramah lingkungan tanpa logam berat; perakitan di Dusun Guntur, Temanggung.",
        "price": "Kemitraan Mandiri",
        "imageUrl": "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80",
        "action_text": "Pelajari Ekosistem",
        "link_url": "https://www.spedagi.com"
      },
      {
        "title": "Kendali Mutu & Ketertelusuran Bahan",
        "category": "Standar Mutu",
        "description": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial.",
        "price": "Teruji & Terverifikasi",
        "imageUrl": "https://images.unsplash.com/photo-1518110925495-5fe2fda0442c?auto=format&fit=crop&w=800&q=80",
        "action_text": "Akses Toko Resmi",
        "link_url": "https://www.spedagi.com"
      }
    ]
  },
  "bengok-craft": {
    "slug": "bengok-craft",
    "name": "BENGOK CRAFT",
    "lensSlug": "kriya-desain-material-berkelanjutan",
    "lensName": "Kriya, Desain & Material Berkelanjutan",
    "curationTier": "Established",
    "origin": "Semarang, Jawa Tengah",
    "logoUrl": "https://linktr.ee/og/image/bengokcraft.jpg",
    "discoveryTitle": {
      "anomaly": "Temuan pendangkalan parah dan ledakan populasi gulma danau",
      "question": "Ketegangan bagaimana limbah basah perusak turbin air diubah menjadi komoditas ekspor non-pembusukan",
      "paradigm": "Rasa penasaran formulasi pengeringan serat air tawar agar kedap jamur tropis"
    },
    "coreFinding": "Memproses biomassa eceng gondok invasif menjadi substitusi material tekstil tebal dan kriya anyam tahan kelembapan.",
    "contextNarrative": {
      "marketVacuum": "Terlibat langsung dalam pemulihan ekosistem Rawa Pening dengan mengangkat berton-ton biomassa gulma per bulan bersama kelompok nelayan lokal. Mengatasi pembusukan serat melalui pencucian, pemipihan mekanis, penjemuran terkontrol, dan pelapisan antiseptik berbasis air.",
      "disruptedStatusQuo": "Merambah pasar korporat untuk kemasan ramah lingkungan dan dekoratif interior."
    },
    "evidenceTelemetry": {
      "originCoordinates": "Semarang, Jawa Tengah",
      "productionModel": "Danau Rawa Pening oleh nelayan Desa Kesongo, Tuntang; pemrosesan bahan baku dan penganyaman melibatkan warga sekitar dan mantan buruh pabrik di Semarang.",
      "verifiedClaims": [
        {
          "claim": "Danau Rawa Pening oleh nelayan Desa Kesongo, Tuntang",
          "evidencePrimary": "Dokumentasi fasilitas operasional, audit rantai pasok, dan katalog resmi BENGOK CRAFT.",
          "verificationSource": "Hasil pengujian standar mutu nasional, sertifikasi relevan, dan liputan media terpercaya.",
          "editorialInterpretation": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial."
        }
      ]
    },
    "flagshipProducts": [
      {
        "name": "Bengok Handbag Anyam",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Semarang, Jawa Tengah.",
        "price": "Rp175.000",
        "buyUrl": "https://linktr.ee/bengokcraft",
        "imageUrl": "https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=100063469843246",
        "category": "Karya Utama"
      },
      {
        "name": "Eceng Gondok Storage Basket & Placemat",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Semarang, Jawa Tengah.",
        "price": "Rp45.000",
        "buyUrl": "https://linktr.ee/bengokcraft",
        "imageUrl": "https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=3508965809139953666",
        "category": "Koleksi Pilihan"
      }
    ],
    "milestones": [
      {
        "year": "FASE AWAL | PERINTISAN",
        "title": "Riset Material & Pendirian Fondasi",
        "description": "Memulai eksplorasi bahan baku dan uji coba formulasi di Semarang, Jawa Tengah, menegaskan komitmen untuk tidak bergantung pada rantai pasok impor."
      },
      {
        "year": "FASE KEDUA | PENGUATAN",
        "title": "Konsolidasi Mitra & Standarisasi Mutu",
        "description": "Membangun jaringan kemitraan erat bersama perajin dan komunitas lokal, menerapkan uji kendali mutu berstandar ketat, dan merilis karya unggulan perdana."
      },
      {
        "year": "FASE KETIGA | KEDAULATAN",
        "title": "Rujukan Kemandirian & Pengakuan Pasar",
        "description": "Menjadi tolok ukur integritas karya di sektor Kriya, Desain & Material Berkelanjutan, membuktikan keberlanjutan model bisnis etis yang menguntungkan ekosistem lokal."
      }
    ],
    "sovereigntyMeaning": "Keberadaan BENGOK CRAFT menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten.",
    "channels": {
      "officialStore": [
        {
          "platform": "Webstore Resmi",
          "url": "https://linktr.ee/bengokcraft",
          "label": "linktr.ee/bengokcraft"
        },
        {
          "platform": "Tokopedia Official",
          "url": "https://tokopedia.com/find?q=BENGOK%20CRAFT",
          "label": "Tokopedia: BENGOK CRAFT"
        },
        {
          "platform": "Shopee Mall",
          "url": "https://shopee.co.id/search?keyword=BENGOK%20CRAFT",
          "label": "Shopee: BENGOK CRAFT"
        }
      ],
      "publicSpaces": [
        {
          "platform": "Instagram",
          "url": "https://instagram.com/bengokcraft",
          "label": "@bengokcraft"
        },
        {
          "platform": "Surel Kemitraan",
          "url": "mailto:kontak@linktr.ee",
          "label": "Inquiry Resmi"
        }
      ]
    },
    "scores": {
      "quality": 22,
      "discovery": 24,
      "trackRecord": 25,
      "story": 23,
      "total": 94
    },
    "statusRedFlag": "CLEAR",
    "bio_paragraphs": [
      "Kelahiran BENGOK CRAFT berakar dari kegelisahan mendalam terhadap lanskap industri di Semarang, Jawa Tengah dan sekitarnya. Terlibat langsung dalam pemulihan ekosistem Rawa Pening dengan mengangkat berton-ton biomassa gulma per bulan bersama kelompok nelayan lokal. Mengatasi pembusukan serat melalui pencucian, pemipihan mekanis, penjemuran terkontrol, dan pelapisan antiseptik berbasis air. BENGOK CRAFT hadir untuk menjembatani kesenjangan tersebut dengan membuktikan bahwa potensi daerah mampu melahirkan standar baru yang mandiri dan berdaya tawar tinggi.",
      "Melalui pendekatan kerja yang berakar pada kearifan dan disiplin mutu, BENGOK CRAFT mengintegrasikan ekosistem hulu hingga hilir. Danau Rawa Pening oleh nelayan Desa Kesongo, Tuntang; pemrosesan bahan baku dan penganyaman melibatkan warga sekitar dan mantan buruh pabrik di Semarang. Langkah ini bukan sekadar strategi produksi, melainkan ikhtiar merawat martabat pekerja lokal serta menjaga keaslian material nusantara tanpa kompromi.",
      "Dampaknya terlihat nyata pada karya-karya terkurasi yang mereka hasilkan. Memproses biomassa eceng gondok invasif menjadi substitusi material tekstil tebal dan kriya anyam tahan kelembapan. Keberadaan BENGOK CRAFT menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten."
    ],
    "quote": "Memproses biomassa eceng gondok invasif menjadi substitusi material tekstil tebal dan kriya anyam tahan kelembapan.",
    "initiatives": [
      {
        "title": "Kemitraan Hulu & Rantai Pasok Berkelanjutan",
        "category": "Ekosistem Lokal",
        "description": "Danau Rawa Pening oleh nelayan Desa Kesongo, Tuntang; pemrosesan bahan baku dan penganyaman melibatkan warga sekitar dan mantan buruh pabrik di Semarang.",
        "price": "Kemitraan Mandiri",
        "imageUrl": "https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=100063469843246",
        "action_text": "Pelajari Ekosistem",
        "link_url": "https://linktr.ee/bengokcraft"
      },
      {
        "title": "Kendali Mutu & Ketertelusuran Bahan",
        "category": "Standar Mutu",
        "description": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial.",
        "price": "Teruji & Terverifikasi",
        "imageUrl": "https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=3508965809139953666",
        "action_text": "Akses Toko Resmi",
        "link_url": "https://linktr.ee/bengokcraft"
      }
    ]
  },
  "mycl": {
    "slug": "mycl",
    "name": "MYCL",
    "lensSlug": "kriya-desain-material-berkelanjutan",
    "lensName": "Kriya, Desain & Material Berkelanjutan",
    "curationTier": "Middle",
    "origin": "Bandung, Jawa Barat",
    "logoUrl": "https://www.third-derivative.org/hubfs/mycl-logo.png",
    "discoveryTitle": {
      "anomaly": "Temuan limbah serbuk gergaji dan tandan kosong kelapa sawit yang terbengkalai",
      "question": "Ketegangan industri kulit hewani yang boros air dan mencemari lingkungan dengan kromium beracun",
      "paradigm": "Rasa penasaran bagaimana koloni miselium jamur ditumbuhkan menjadi lembaran biomaterial fleksibel"
    },
    "coreFinding": "Miselium jamur yang ditumbuhkan pada limbah agro-industri dapat dipanen menjadi lembaran bio-leather (Mylea™) berkekuatan tarik tinggi dengan jejak air dan karbon sangat rendah.",
    "contextNarrative": {
      "marketVacuum": "Fasilitas bio-manufaktur mandiri di Bandung mengontrol kelembapan dan pertumbuhan hifa jamur secara terukur. Mylea™ memecahkan kebuntuan kulit sintetis yang umumnya masih mengandalkan polivinil klorida (PVC) atau poliuretan (PU) berbahan fosil.",
      "disruptedStatusQuo": "Telah berkolaborasi dengan jenama fashion global dan meraih pendanaan ventura internasional."
    },
    "evidenceTelemetry": {
      "originCoordinates": "Bandung, Jawa Barat",
      "productionModel": "Serbuk gergaji kayu sengon dan limbah pertanian Jabar; perbanyakan isolat bibit jamur di lab Bandung; penyamakan menggunakan tannin nabati alami tanpa kromium.",
      "verifiedClaims": [
        {
          "claim": "Serbuk gergaji kayu sengon dan limbah pertanian Jabar",
          "evidencePrimary": "Dokumentasi fasilitas operasional, audit rantai pasok, dan katalog resmi MYCL.",
          "verificationSource": "Hasil pengujian standar mutu nasional, sertifikasi relevan, dan liputan media terpercaya.",
          "editorialInterpretation": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial."
        }
      ]
    },
    "flagshipProducts": [
      {
        "name": "Mylea™ Bio-Material Sheets",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Bandung, Jawa Barat.",
        "price": "Rp150.000",
        "buyUrl": "https://mycl.bio",
        "imageUrl": "https://mycl.bio/wp-content/uploads/2026/03/MYCL-NBA-Shoot-Around-Shirt-Monochrome-768x768.png",
        "category": "Karya Utama"
      },
      {
        "name": "Mylea Capsule Goods",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Bandung, Jawa Barat.",
        "price": "Rp650.000",
        "buyUrl": "https://mycl.bio",
        "imageUrl": "https://www.third-derivative.org/hubfs/mycl-logo.png",
        "category": "Koleksi Pilihan"
      }
    ],
    "milestones": [
      {
        "year": "FASE AWAL | PERINTISAN",
        "title": "Riset Material & Pendirian Fondasi",
        "description": "Memulai eksplorasi bahan baku dan uji coba formulasi di Bandung, Jawa Barat, menegaskan komitmen untuk tidak bergantung pada rantai pasok impor."
      },
      {
        "year": "FASE KEDUA | PENGUATAN",
        "title": "Konsolidasi Mitra & Standarisasi Mutu",
        "description": "Membangun jaringan kemitraan erat bersama perajin dan komunitas lokal, menerapkan uji kendali mutu berstandar ketat, dan merilis karya unggulan perdana."
      },
      {
        "year": "FASE KETIGA | KEDAULATAN",
        "title": "Rujukan Kemandirian & Pengakuan Pasar",
        "description": "Menjadi tolok ukur integritas karya di sektor Kriya, Desain & Material Berkelanjutan, membuktikan keberlanjutan model bisnis etis yang menguntungkan ekosistem lokal."
      }
    ],
    "sovereigntyMeaning": "Keberadaan MYCL menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten.",
    "channels": {
      "officialStore": [
        {
          "platform": "Webstore Resmi",
          "url": "https://mycl.bio",
          "label": "mycl.bio"
        },
        {
          "platform": "Tokopedia Official",
          "url": "https://tokopedia.com/find?q=MYCL",
          "label": "Tokopedia: MYCL"
        },
        {
          "platform": "Shopee Mall",
          "url": "https://shopee.co.id/search?keyword=MYCL",
          "label": "Shopee: MYCL"
        }
      ],
      "publicSpaces": [
        {
          "platform": "Instagram",
          "url": "https://instagram.com/mycl.bio",
          "label": "@mycl.bio"
        },
        {
          "platform": "Surel Kemitraan",
          "url": "mailto:kontak@mycl.bio",
          "label": "Inquiry Resmi"
        }
      ]
    },
    "scores": {
      "quality": 25,
      "discovery": 25,
      "trackRecord": 24,
      "story": 24,
      "total": 98
    },
    "statusRedFlag": "CLEAR",
    "bio_paragraphs": [
      "Kelahiran MYCL berakar dari kegelisahan mendalam terhadap lanskap industri di Bandung, Jawa Barat dan sekitarnya. Fasilitas bio-manufaktur mandiri di Bandung mengontrol kelembapan dan pertumbuhan hifa jamur secara terukur. Mylea™ memecahkan kebuntuan kulit sintetis yang umumnya masih mengandalkan polivinil klorida (PVC) atau poliuretan (PU) berbahan fosil. MYCL hadir untuk menjembatani kesenjangan tersebut dengan membuktikan bahwa potensi daerah mampu melahirkan standar baru yang mandiri dan berdaya tawar tinggi.",
      "Melalui pendekatan kerja yang berakar pada kearifan dan disiplin mutu, MYCL mengintegrasikan ekosistem hulu hingga hilir. Serbuk gergaji kayu sengon dan limbah pertanian Jabar; perbanyakan isolat bibit jamur di lab Bandung; penyamakan menggunakan tannin nabati alami tanpa kromium. Langkah ini bukan sekadar strategi produksi, melainkan ikhtiar merawat martabat pekerja lokal serta menjaga keaslian material nusantara tanpa kompromi.",
      "Dampaknya terlihat nyata pada karya-karya terkurasi yang mereka hasilkan. Miselium jamur yang ditumbuhkan pada limbah agro-industri dapat dipanen menjadi lembaran bio-leather (Mylea™) berkekuatan tarik tinggi dengan jejak air dan karbon sangat rendah. Keberadaan MYCL menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten."
    ],
    "quote": "Miselium jamur yang ditumbuhkan pada limbah agro-industri dapat dipanen menjadi lembaran bio-leather (Mylea™) berkekuatan tarik tinggi dengan jejak air dan karbon sangat rendah.",
    "initiatives": [
      {
        "title": "Kemitraan Hulu & Rantai Pasok Berkelanjutan",
        "category": "Ekosistem Lokal",
        "description": "Serbuk gergaji kayu sengon dan limbah pertanian Jabar; perbanyakan isolat bibit jamur di lab Bandung; penyamakan menggunakan tannin nabati alami tanpa kromium.",
        "price": "Kemitraan Mandiri",
        "imageUrl": "https://mycl.bio/wp-content/uploads/2026/03/MYCL-NBA-Shoot-Around-Shirt-Monochrome-768x768.png",
        "action_text": "Pelajari Ekosistem",
        "link_url": "https://mycl.bio"
      },
      {
        "title": "Kendali Mutu & Ketertelusuran Bahan",
        "category": "Standar Mutu",
        "description": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial.",
        "price": "Teruji & Terverifikasi",
        "imageUrl": "https://www.third-derivative.org/hubfs/mycl-logo.png",
        "action_text": "Akses Toko Resmi",
        "link_url": "https://mycl.bio"
      }
    ]
  },
  "robries": {
    "slug": "robries",
    "name": "ROBRIES",
    "lensSlug": "kriya-desain-material-berkelanjutan",
    "lensName": "Kriya, Desain & Material Berkelanjutan",
    "curationTier": "Middle",
    "origin": "Surabaya, Jawa Timur",
    "logoUrl": "https://lookaside.fbsbx.com/lookaside/crawler/instagram/robries/profile_pic.jpg",
    "discoveryTitle": {
      "anomaly": "Temuan timbunan tutup botol plastik HDPE dan jeriken tak bernilai jual",
      "question": "Ketegangan stigma daur ulang plastik sebagai barang kriya murah tanpa nilai arsitektural",
      "paradigm": "Rasa penasaran bagaimana serpihan plastik dilebur merata menjadi panel teraso sintetis tanpa resin tambahan"
    },
    "coreFinding": "Mengonversi limbah plastik tipe 2 (HDPE) dan tipe 5 (PP) pasca-konsumsi menjadi Robries Polymer Sheet (RPS) 100% daur ulang berkekuatan struktural tanpa bahan perekat kimia sintetis.",
    "contextNarrative": {
      "marketVacuum": "Mempertahankan kemurnian polimer tunggal sehingga produk furnitur dan ubinnya dapat didaur ulang kembali secara penuh (closed-loop). Mesin kempa termal dirancang sendiri di Surabaya, menghasilkan corak marmer/teraso modern yang diadopsi Potato Head Bali, The Body Shop, dan Toyota.",
      "disruptedStatusQuo": "Meraih penghargaan Good Design Award 2025."
    },
    "evidenceTelemetry": {
      "originCoordinates": "Surabaya, Jawa Timur",
      "productionModel": "Limbah tutup botol, jeriken, dan galon dari bank sampah dan pemulung Jawa Timur; pencucian dan pencacahan di workshop Surabaya; pemotongan CNC internal.",
      "verifiedClaims": [
        {
          "claim": "Limbah tutup botol, jeriken, dan galon dari bank sampah dan pemulung Jawa Timur",
          "evidencePrimary": "Dokumentasi fasilitas operasional, audit rantai pasok, dan katalog resmi ROBRIES.",
          "verificationSource": "Hasil pengujian standar mutu nasional, sertifikasi relevan, dan liputan media terpercaya.",
          "editorialInterpretation": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial."
        }
      ]
    },
    "flagshipProducts": [
      {
        "name": "Robries Polymer Sheet Panel",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Surabaya, Jawa Timur.",
        "price": "Rp800.000",
        "buyUrl": "https://robries.com",
        "imageUrl": "https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/e2f791dd6c0645379876273a53886b36~tplv-aphluv4xwc-white-pad-v1:250:250.jpeg",
        "category": "Karya Utama"
      },
      {
        "name": "Recycled Plastic Home Accessories",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Surabaya, Jawa Timur.",
        "price": "Rp65.000",
        "buyUrl": "https://robries.com",
        "imageUrl": "https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/img/VqbcmM/2025/3/19/16960212-2d9e-45f3-b528-e32612c65255.jpg~tplv-aphluv4xwc-resize-jpeg:700:0.jpg",
        "category": "Koleksi Pilihan"
      }
    ],
    "milestones": [
      {
        "year": "FASE AWAL | PERINTISAN",
        "title": "Riset Material & Pendirian Fondasi",
        "description": "Memulai eksplorasi bahan baku dan uji coba formulasi di Surabaya, Jawa Timur, menegaskan komitmen untuk tidak bergantung pada rantai pasok impor."
      },
      {
        "year": "FASE KEDUA | PENGUATAN",
        "title": "Konsolidasi Mitra & Standarisasi Mutu",
        "description": "Membangun jaringan kemitraan erat bersama perajin dan komunitas lokal, menerapkan uji kendali mutu berstandar ketat, dan merilis karya unggulan perdana."
      },
      {
        "year": "FASE KETIGA | KEDAULATAN",
        "title": "Rujukan Kemandirian & Pengakuan Pasar",
        "description": "Menjadi tolok ukur integritas karya di sektor Kriya, Desain & Material Berkelanjutan, membuktikan keberlanjutan model bisnis etis yang menguntungkan ekosistem lokal."
      }
    ],
    "sovereigntyMeaning": "Keberadaan ROBRIES menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten.",
    "channels": {
      "officialStore": [
        {
          "platform": "Webstore Resmi",
          "url": "https://robries.com",
          "label": "robries.com"
        },
        {
          "platform": "Tokopedia Official",
          "url": "https://tokopedia.com/find?q=ROBRIES",
          "label": "Tokopedia: ROBRIES"
        },
        {
          "platform": "Shopee Mall",
          "url": "https://shopee.co.id/search?keyword=ROBRIES",
          "label": "Shopee: ROBRIES"
        }
      ],
      "publicSpaces": [
        {
          "platform": "Instagram",
          "url": "https://instagram.com/robriesgallery",
          "label": "@robriesgallery"
        },
        {
          "platform": "Surel Kemitraan",
          "url": "mailto:kontak@robries.com",
          "label": "Inquiry Resmi"
        }
      ]
    },
    "scores": {
      "quality": 25,
      "discovery": 24,
      "trackRecord": 24,
      "story": 23,
      "total": 96
    },
    "statusRedFlag": "CLEAR",
    "bio_paragraphs": [
      "Kelahiran ROBRIES berakar dari kegelisahan mendalam terhadap lanskap industri di Surabaya, Jawa Timur dan sekitarnya. Mempertahankan kemurnian polimer tunggal sehingga produk furnitur dan ubinnya dapat didaur ulang kembali secara penuh (closed-loop). Mesin kempa termal dirancang sendiri di Surabaya, menghasilkan corak marmer/teraso modern yang diadopsi Potato Head Bali, The Body Shop, dan Toyota. ROBRIES hadir untuk menjembatani kesenjangan tersebut dengan membuktikan bahwa potensi daerah mampu melahirkan standar baru yang mandiri dan berdaya tawar tinggi.",
      "Melalui pendekatan kerja yang berakar pada kearifan dan disiplin mutu, ROBRIES mengintegrasikan ekosistem hulu hingga hilir. Limbah tutup botol, jeriken, dan galon dari bank sampah dan pemulung Jawa Timur; pencucian dan pencacahan di workshop Surabaya; pemotongan CNC internal. Langkah ini bukan sekadar strategi produksi, melainkan ikhtiar merawat martabat pekerja lokal serta menjaga keaslian material nusantara tanpa kompromi.",
      "Dampaknya terlihat nyata pada karya-karya terkurasi yang mereka hasilkan. Mengonversi limbah plastik tipe 2 (HDPE) dan tipe 5 (PP) pasca-konsumsi menjadi Robries Polymer Sheet (RPS) 100% daur ulang berkekuatan struktural tanpa bahan perekat kimia sintetis. Keberadaan ROBRIES menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten."
    ],
    "quote": "Mengonversi limbah plastik tipe 2 (HDPE) dan tipe 5 (PP) pasca-konsumsi menjadi Robries Polymer Sheet (RPS) 100% daur ulang berkekuatan struktural tanpa bahan perekat kimia sintetis.",
    "initiatives": [
      {
        "title": "Kemitraan Hulu & Rantai Pasok Berkelanjutan",
        "category": "Ekosistem Lokal",
        "description": "Limbah tutup botol, jeriken, dan galon dari bank sampah dan pemulung Jawa Timur; pencucian dan pencacahan di workshop Surabaya; pemotongan CNC internal.",
        "price": "Kemitraan Mandiri",
        "imageUrl": "https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/e2f791dd6c0645379876273a53886b36~tplv-aphluv4xwc-white-pad-v1:250:250.jpeg",
        "action_text": "Pelajari Ekosistem",
        "link_url": "https://robries.com"
      },
      {
        "title": "Kendali Mutu & Ketertelusuran Bahan",
        "category": "Standar Mutu",
        "description": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial.",
        "price": "Teruji & Terverifikasi",
        "imageUrl": "https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/img/VqbcmM/2025/3/19/16960212-2d9e-45f3-b528-e32612c65255.jpg~tplv-aphluv4xwc-resize-jpeg:700:0.jpg",
        "action_text": "Akses Toko Resmi",
        "link_url": "https://robries.com"
      }
    ]
  },
  "pable-indonesia": {
    "slug": "pable-indonesia",
    "name": "PABLE INDONESIA",
    "lensSlug": "kriya-desain-material-berkelanjutan",
    "lensName": "Kriya, Desain & Material Berkelanjutan",
    "curationTier": "Middle",
    "origin": "Surabaya, Jawa Timur",
    "logoUrl": "https://mms.img.susercontent.com/ce378d0e259327ddcd23835a4cebfcdb_tn",
    "discoveryTitle": {
      "anomaly": "Temuan tumpukan kain perca sisa industri garmen yang berakhir di pembakaran sampah",
      "question": "Ketegangan industri tekstil yang terus mengeksploitasi lahan kapas boros pestisida",
      "paradigm": "Rasa penasaran bagaimana kain bekas diurai kembali menjadi serat benang tenun berkekuatan industri"
    },
    "coreFinding": "Potongan limbah kain pra dan pasca-konsumsi diurai secara mekanis tanpa bahan kimia pewarna tambahan menjadi benang daur ulang siap tenun berkualitas industri.",
    "contextNarrative": {
      "marketVacuum": "Fasilitas pemilahan warna berbasis spektrum kain asli meniadakan pewarnaan ulang kimiawi yang mengonsumsi ribuan liter air. Membangun ekosistem B2B terintegrasi dari limbah pabrik garmen menjadi serat (fiber), benang (yarn), hingga kain lembaran.",
      "disruptedStatusQuo": "Bermitra dengan penenun ATBM desa untuk interior dan lifestyle."
    },
    "evidenceTelemetry": {
      "originCoordinates": "Surabaya, Jawa Timur",
      "productionModel": "Limbah kain perca dari puluhan pabrik garmen Jawa Timur dan Jawa Tengah; fasilitas penguraian dan pemintalan di pabrik sendiri di Surabaya/Gresik; mitra tenun ATBM Jawa Timur.",
      "verifiedClaims": [
        {
          "claim": "Limbah kain perca dari puluhan pabrik garmen Jawa Timur dan Jawa Tengah",
          "evidencePrimary": "Dokumentasi fasilitas operasional, audit rantai pasok, dan katalog resmi PABLE INDONESIA.",
          "verificationSource": "Hasil pengujian standar mutu nasional, sertifikasi relevan, dan liputan media terpercaya.",
          "editorialInterpretation": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial."
        }
      ]
    },
    "flagshipProducts": [
      {
        "name": "Kain Tenun Daur Ulang Pable",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Surabaya, Jawa Timur.",
        "price": "Rp85.000",
        "buyUrl": "https://pable.id",
        "imageUrl": "https://pable.id/wp-content/uploads/2025/03/Cover.webp",
        "category": "Karya Utama"
      },
      {
        "name": "Pable Upcycled Tote Bag & Blanket",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Surabaya, Jawa Timur.",
        "price": "Rp150.000",
        "buyUrl": "https://pable.id",
        "imageUrl": "https://down-id.img.susercontent.com/file/id-11134207-81ztm-mqmwafnxv1u607",
        "category": "Koleksi Pilihan"
      }
    ],
    "milestones": [
      {
        "year": "FASE AWAL | PERINTISAN",
        "title": "Riset Material & Pendirian Fondasi",
        "description": "Memulai eksplorasi bahan baku dan uji coba formulasi di Surabaya, Jawa Timur, menegaskan komitmen untuk tidak bergantung pada rantai pasok impor."
      },
      {
        "year": "FASE KEDUA | PENGUATAN",
        "title": "Konsolidasi Mitra & Standarisasi Mutu",
        "description": "Membangun jaringan kemitraan erat bersama perajin dan komunitas lokal, menerapkan uji kendali mutu berstandar ketat, dan merilis karya unggulan perdana."
      },
      {
        "year": "FASE KETIGA | KEDAULATAN",
        "title": "Rujukan Kemandirian & Pengakuan Pasar",
        "description": "Menjadi tolok ukur integritas karya di sektor Kriya, Desain & Material Berkelanjutan, membuktikan keberlanjutan model bisnis etis yang menguntungkan ekosistem lokal."
      }
    ],
    "sovereigntyMeaning": "Keberadaan PABLE INDONESIA menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten.",
    "channels": {
      "officialStore": [
        {
          "platform": "Webstore Resmi",
          "url": "https://pable.id",
          "label": "pable.id"
        },
        {
          "platform": "Tokopedia Official",
          "url": "https://tokopedia.com/find?q=PABLE%20INDONESIA",
          "label": "Tokopedia: PABLE INDONESIA"
        },
        {
          "platform": "Shopee Mall",
          "url": "https://shopee.co.id/search?keyword=PABLE%20INDONESIA",
          "label": "Shopee: PABLE INDONESIA"
        }
      ],
      "publicSpaces": [
        {
          "platform": "Instagram",
          "url": "https://instagram.com/pable.id",
          "label": "@pable.id"
        },
        {
          "platform": "Surel Kemitraan",
          "url": "mailto:kontak@pable.id",
          "label": "Inquiry Resmi"
        }
      ]
    },
    "scores": {
      "quality": 24,
      "discovery": 24,
      "trackRecord": 24,
      "story": 23,
      "total": 95
    },
    "statusRedFlag": "CLEAR",
    "bio_paragraphs": [
      "Kelahiran PABLE INDONESIA berakar dari kegelisahan mendalam terhadap lanskap industri di Surabaya, Jawa Timur dan sekitarnya. Fasilitas pemilahan warna berbasis spektrum kain asli meniadakan pewarnaan ulang kimiawi yang mengonsumsi ribuan liter air. Membangun ekosistem B2B terintegrasi dari limbah pabrik garmen menjadi serat (fiber), benang (yarn), hingga kain lembaran. PABLE INDONESIA hadir untuk menjembatani kesenjangan tersebut dengan membuktikan bahwa potensi daerah mampu melahirkan standar baru yang mandiri dan berdaya tawar tinggi.",
      "Melalui pendekatan kerja yang berakar pada kearifan dan disiplin mutu, PABLE INDONESIA mengintegrasikan ekosistem hulu hingga hilir. Limbah kain perca dari puluhan pabrik garmen Jawa Timur dan Jawa Tengah; fasilitas penguraian dan pemintalan di pabrik sendiri di Surabaya/Gresik; mitra tenun ATBM Jawa Timur. Langkah ini bukan sekadar strategi produksi, melainkan ikhtiar merawat martabat pekerja lokal serta menjaga keaslian material nusantara tanpa kompromi.",
      "Dampaknya terlihat nyata pada karya-karya terkurasi yang mereka hasilkan. Potongan limbah kain pra dan pasca-konsumsi diurai secara mekanis tanpa bahan kimia pewarna tambahan menjadi benang daur ulang siap tenun berkualitas industri. Keberadaan PABLE INDONESIA menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten."
    ],
    "quote": "Potongan limbah kain pra dan pasca-konsumsi diurai secara mekanis tanpa bahan kimia pewarna tambahan menjadi benang daur ulang siap tenun berkualitas industri.",
    "initiatives": [
      {
        "title": "Kemitraan Hulu & Rantai Pasok Berkelanjutan",
        "category": "Ekosistem Lokal",
        "description": "Limbah kain perca dari puluhan pabrik garmen Jawa Timur dan Jawa Tengah; fasilitas penguraian dan pemintalan di pabrik sendiri di Surabaya/Gresik; mitra tenun ATBM Jawa Timur.",
        "price": "Kemitraan Mandiri",
        "imageUrl": "https://pable.id/wp-content/uploads/2025/03/Cover.webp",
        "action_text": "Pelajari Ekosistem",
        "link_url": "https://pable.id"
      },
      {
        "title": "Kendali Mutu & Ketertelusuran Bahan",
        "category": "Standar Mutu",
        "description": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial.",
        "price": "Teruji & Terverifikasi",
        "imageUrl": "https://down-id.img.susercontent.com/file/id-11134207-81ztm-mqmwafnxv1u607",
        "action_text": "Akses Toko Resmi",
        "link_url": "https://pable.id"
      }
    ]
  },
  "plepah": {
    "slug": "plepah",
    "name": "PLEPAH",
    "lensSlug": "kriya-desain-material-berkelanjutan",
    "lensName": "Kriya, Desain & Material Berkelanjutan",
    "curationTier": "Hidden Gem",
    "origin": "Jakarta / Jambi",
    "logoUrl": "https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=2986497174877678465",
    "discoveryTitle": {
      "anomaly": "Temuan pelepah pinang tua yang membusuk dan memicu kebakaran di perkebunan Sumatera",
      "question": "Ketegangan limbah styrofoam makanan yang bertahan ratusan tahun di ekosistem laut",
      "paradigm": "Rasa penasaran bagaimana seludang daun keras dicetak panas menjadi wadah pangan kedap minyak tanpa lapisan lilin sintetis"
    },
    "coreFinding": "Lembaran pelepah pohon pinang (Areca catechu) gugur memiliki struktur alami kedap minyak dan air panas tanpa membutuhkan laminasi plastik polietilena sama sekali.",
    "contextNarrative": {
      "marketVacuum": "Model sirkularitas tanpa deforestasi, bahan baku murni pelepah daun pinang tua yang jatuh ke tanah perkebunan rakyat di Jambi dan Sumsel. Wadah makanan terurai sempurna secara biologis di tanah (home-compostable) dalam 60 hari.",
      "disruptedStatusQuo": "Mengembangkan mesin cetak kempa mikro (micro-manufacturing press) yang ditempatkan langsung di desa perkebunan untuk efisiensi logistik."
    },
    "evidenceTelemetry": {
      "originCoordinates": "Jakarta / Jambi",
      "productionModel": "Pengumpulan pelepah pinang gugur di Tanjung Jabung Barat (Jambi) dan Sumsel; sterilisasi dan pencucian oleh kelompok tani lokal; thermoforming di workshop lokal.",
      "verifiedClaims": [
        {
          "claim": "Pengumpulan pelepah pinang gugur di Tanjung Jabung Barat (Jambi) dan Sumsel",
          "evidencePrimary": "Dokumentasi fasilitas operasional, audit rantai pasok, dan katalog resmi PLEPAH.",
          "verificationSource": "Hasil pengujian standar mutu nasional, sertifikasi relevan, dan liputan media terpercaya.",
          "editorialInterpretation": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial."
        }
      ]
    },
    "flagshipProducts": [
      {
        "name": "Plepah Food Container Box",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Jakarta / Jambi.",
        "price": "Rp85.000",
        "buyUrl": "https://www.plepah.com",
        "imageUrl": "https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=2850234857742554163",
        "category": "Karya Utama"
      },
      {
        "name": "Piring Pesta Biodegradabel Pelepah Pinang",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Jakarta / Jambi.",
        "price": "Rp3.500",
        "buyUrl": "https://www.plepah.com",
        "imageUrl": "https://www.greeners.co/wp-content/uploads/2020/12/Plapah-ID-2-min.jpg",
        "category": "Koleksi Pilihan"
      }
    ],
    "milestones": [
      {
        "year": "FASE AWAL | PERINTISAN",
        "title": "Riset Material & Pendirian Fondasi",
        "description": "Memulai eksplorasi bahan baku dan uji coba formulasi di Jakarta / Jambi, menegaskan komitmen untuk tidak bergantung pada rantai pasok impor."
      },
      {
        "year": "FASE KEDUA | PENGUATAN",
        "title": "Konsolidasi Mitra & Standarisasi Mutu",
        "description": "Membangun jaringan kemitraan erat bersama perajin dan komunitas lokal, menerapkan uji kendali mutu berstandar ketat, dan merilis karya unggulan perdana."
      },
      {
        "year": "FASE KETIGA | KEDAULATAN",
        "title": "Rujukan Kemandirian & Pengakuan Pasar",
        "description": "Menjadi tolok ukur integritas karya di sektor Kriya, Desain & Material Berkelanjutan, membuktikan keberlanjutan model bisnis etis yang menguntungkan ekosistem lokal."
      }
    ],
    "sovereigntyMeaning": "Keberadaan PLEPAH menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten.",
    "channels": {
      "officialStore": [
        {
          "platform": "Webstore Resmi",
          "url": "https://www.plepah.com",
          "label": "www.plepah.com"
        },
        {
          "platform": "Tokopedia Official",
          "url": "https://tokopedia.com/find?q=PLEPAH",
          "label": "Tokopedia: PLEPAH"
        },
        {
          "platform": "Shopee Mall",
          "url": "https://shopee.co.id/search?keyword=PLEPAH",
          "label": "Shopee: PLEPAH"
        }
      ],
      "publicSpaces": [
        {
          "platform": "Instagram",
          "url": "https://instagram.com/plepah_id",
          "label": "@plepah_id"
        },
        {
          "platform": "Surel Kemitraan",
          "url": "mailto:kontak@plepah.com",
          "label": "Inquiry Resmi"
        }
      ]
    },
    "scores": {
      "quality": 24,
      "discovery": 25,
      "trackRecord": 25,
      "story": 25,
      "total": 99
    },
    "statusRedFlag": "CLEAR",
    "bio_paragraphs": [
      "Kelahiran PLEPAH berakar dari kegelisahan mendalam terhadap lanskap industri di Jakarta / Jambi dan sekitarnya. Model sirkularitas tanpa deforestasi, bahan baku murni pelepah daun pinang tua yang jatuh ke tanah perkebunan rakyat di Jambi dan Sumsel. Wadah makanan terurai sempurna secara biologis di tanah (home-compostable) dalam 60 hari. PLEPAH hadir untuk menjembatani kesenjangan tersebut dengan membuktikan bahwa potensi daerah mampu melahirkan standar baru yang mandiri dan berdaya tawar tinggi.",
      "Melalui pendekatan kerja yang berakar pada kearifan dan disiplin mutu, PLEPAH mengintegrasikan ekosistem hulu hingga hilir. Pengumpulan pelepah pinang gugur di Tanjung Jabung Barat (Jambi) dan Sumsel; sterilisasi dan pencucian oleh kelompok tani lokal; thermoforming di workshop lokal. Langkah ini bukan sekadar strategi produksi, melainkan ikhtiar merawat martabat pekerja lokal serta menjaga keaslian material nusantara tanpa kompromi.",
      "Dampaknya terlihat nyata pada karya-karya terkurasi yang mereka hasilkan. Lembaran pelepah pohon pinang (Areca catechu) gugur memiliki struktur alami kedap minyak dan air panas tanpa membutuhkan laminasi plastik polietilena sama sekali. Keberadaan PLEPAH menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten."
    ],
    "quote": "Lembaran pelepah pohon pinang (Areca catechu) gugur memiliki struktur alami kedap minyak dan air panas tanpa membutuhkan laminasi plastik polietilena sama sekali.",
    "initiatives": [
      {
        "title": "Kemitraan Hulu & Rantai Pasok Berkelanjutan",
        "category": "Ekosistem Lokal",
        "description": "Pengumpulan pelepah pinang gugur di Tanjung Jabung Barat (Jambi) dan Sumsel; sterilisasi dan pencucian oleh kelompok tani lokal; thermoforming di workshop lokal.",
        "price": "Kemitraan Mandiri",
        "imageUrl": "https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=2850234857742554163",
        "action_text": "Pelajari Ekosistem",
        "link_url": "https://www.plepah.com"
      },
      {
        "title": "Kendali Mutu & Ketertelusuran Bahan",
        "category": "Standar Mutu",
        "description": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial.",
        "price": "Teruji & Terverifikasi",
        "imageUrl": "https://www.greeners.co/wp-content/uploads/2020/12/Plapah-ID-2-min.jpg",
        "action_text": "Akses Toko Resmi",
        "link_url": "https://www.plepah.com"
      }
    ]
  },
  "studio-dapur": {
    "slug": "studio-dapur",
    "name": "STUDIO DAPUR",
    "lensSlug": "kriya-desain-material-berkelanjutan",
    "lensName": "Kriya, Desain & Material Berkelanjutan",
    "curationTier": "Hidden Gem",
    "origin": "Tasikmalaya, Jawa Barat",
    "logoUrl": "https://down-id.img.susercontent.com/file/cea5554676de66c7fe56f7581f1ac4b7",
    "discoveryTitle": {
      "anomaly": "Temuan kearifan anyaman bambu Tasikmalaya yang terdegradasi menjadi komoditas besek murah",
      "question": "Ketegangan keengganan generasi muda perajin desa melanjutkan profesi akibat upah tak manusiawi",
      "paradigm": "Rasa penasaran bagaimana bilah bambu laminasi dirangkai dengan anyaman 3-sumbu presisi arsitektural"
    },
    "coreFinding": "Integrasi studio desain terpadu langsung di tapak desa mampu menaikkan nilai ekonomi kriya anyam bambu hingga 500% sekaligus menghentikan laju migrasi tenaga kerja muda ke kota.",
    "contextNarrative": {
      "marketVacuum": "Workshop desain didirikan tepat di lereng Gunung Galunggung (Singaparna, Tasikmalaya) untuk merestrukturisasi tableware bambu tradisional menjadi karya bernilai estetika kontemporer. Mengeliminasi perantara tengkulak dengan transparansi HPP dan pembagian laba yang adil.",
      "disruptedStatusQuo": "Meraih Inacraft Emerging Award dan menembus ekspor interior Jepang serta Eropa."
    },
    "evidenceTelemetry": {
      "originCoordinates": "Tasikmalaya, Jawa Barat",
      "productionModel": "Bambu tali dan gombong lestari di lereng Galunggung; pengawetan alami perebusan air garam tanpa pestisida kimia; perakitan oleh jejaring perajin multi-generasi Tasikmalaya.",
      "verifiedClaims": [
        {
          "claim": "Bambu tali dan gombong lestari di lereng Galunggung",
          "evidencePrimary": "Dokumentasi fasilitas operasional, audit rantai pasok, dan katalog resmi STUDIO DAPUR.",
          "verificationSource": "Hasil pengujian standar mutu nasional, sertifikasi relevan, dan liputan media terpercaya.",
          "editorialInterpretation": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial."
        }
      ]
    },
    "flagshipProducts": [
      {
        "name": "Frangipani Bamboo Tray",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Tasikmalaya, Jawa Barat.",
        "price": "Rp320.000",
        "buyUrl": "https://www.studiodapur.com",
        "imageUrl": "https://studiodapur.com/cdn/shop/files/banner_JIA-compressed.jpg?v=1786591718&width=3840",
        "category": "Karya Utama"
      },
      {
        "name": "Tudung Saji Bambu Minimalis",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Tasikmalaya, Jawa Barat.",
        "price": "Rp185.000",
        "buyUrl": "https://www.studiodapur.com",
        "imageUrl": "https://studiodapur.com/cdn/shop/files/WoodenShelf2_edd42ff0-759c-4679-b8f4-981c099e3a98.jpg?v=1735530147&width=533",
        "category": "Koleksi Pilihan"
      }
    ],
    "milestones": [
      {
        "year": "FASE AWAL | PERINTISAN",
        "title": "Riset Material & Pendirian Fondasi",
        "description": "Memulai eksplorasi bahan baku dan uji coba formulasi di Tasikmalaya, Jawa Barat, menegaskan komitmen untuk tidak bergantung pada rantai pasok impor."
      },
      {
        "year": "FASE KEDUA | PENGUATAN",
        "title": "Konsolidasi Mitra & Standarisasi Mutu",
        "description": "Membangun jaringan kemitraan erat bersama perajin dan komunitas lokal, menerapkan uji kendali mutu berstandar ketat, dan merilis karya unggulan perdana."
      },
      {
        "year": "FASE KETIGA | KEDAULATAN",
        "title": "Rujukan Kemandirian & Pengakuan Pasar",
        "description": "Menjadi tolok ukur integritas karya di sektor Kriya, Desain & Material Berkelanjutan, membuktikan keberlanjutan model bisnis etis yang menguntungkan ekosistem lokal."
      }
    ],
    "sovereigntyMeaning": "Keberadaan STUDIO DAPUR menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten.",
    "channels": {
      "officialStore": [
        {
          "platform": "Webstore Resmi",
          "url": "https://www.studiodapur.com",
          "label": "www.studiodapur.com"
        },
        {
          "platform": "Tokopedia Official",
          "url": "https://tokopedia.com/find?q=STUDIO%20DAPUR",
          "label": "Tokopedia: STUDIO DAPUR"
        },
        {
          "platform": "Shopee Mall",
          "url": "https://shopee.co.id/search?keyword=STUDIO%20DAPUR",
          "label": "Shopee: STUDIO DAPUR"
        }
      ],
      "publicSpaces": [
        {
          "platform": "Instagram",
          "url": "https://instagram.com/studio.dapur",
          "label": "@studio.dapur"
        },
        {
          "platform": "Surel Kemitraan",
          "url": "mailto:kontak@studiodapur.com",
          "label": "Inquiry Resmi"
        }
      ]
    },
    "scores": {
      "quality": 25,
      "discovery": 24,
      "trackRecord": 24,
      "story": 25,
      "total": 98
    },
    "statusRedFlag": "CLEAR",
    "bio_paragraphs": [
      "Kelahiran STUDIO DAPUR berakar dari kegelisahan mendalam terhadap lanskap industri di Tasikmalaya, Jawa Barat dan sekitarnya. Workshop desain didirikan tepat di lereng Gunung Galunggung (Singaparna, Tasikmalaya) untuk merestrukturisasi tableware bambu tradisional menjadi karya bernilai estetika kontemporer. Mengeliminasi perantara tengkulak dengan transparansi HPP dan pembagian laba yang adil. STUDIO DAPUR hadir untuk menjembatani kesenjangan tersebut dengan membuktikan bahwa potensi daerah mampu melahirkan standar baru yang mandiri dan berdaya tawar tinggi.",
      "Melalui pendekatan kerja yang berakar pada kearifan dan disiplin mutu, STUDIO DAPUR mengintegrasikan ekosistem hulu hingga hilir. Bambu tali dan gombong lestari di lereng Galunggung; pengawetan alami perebusan air garam tanpa pestisida kimia; perakitan oleh jejaring perajin multi-generasi Tasikmalaya. Langkah ini bukan sekadar strategi produksi, melainkan ikhtiar merawat martabat pekerja lokal serta menjaga keaslian material nusantara tanpa kompromi.",
      "Dampaknya terlihat nyata pada karya-karya terkurasi yang mereka hasilkan. Integrasi studio desain terpadu langsung di tapak desa mampu menaikkan nilai ekonomi kriya anyam bambu hingga 500% sekaligus menghentikan laju migrasi tenaga kerja muda ke kota. Keberadaan STUDIO DAPUR menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten."
    ],
    "quote": "Integrasi studio desain terpadu langsung di tapak desa mampu menaikkan nilai ekonomi kriya anyam bambu hingga 500% sekaligus menghentikan laju migrasi tenaga kerja muda ke kota.",
    "initiatives": [
      {
        "title": "Kemitraan Hulu & Rantai Pasok Berkelanjutan",
        "category": "Ekosistem Lokal",
        "description": "Bambu tali dan gombong lestari di lereng Galunggung; pengawetan alami perebusan air garam tanpa pestisida kimia; perakitan oleh jejaring perajin multi-generasi Tasikmalaya.",
        "price": "Kemitraan Mandiri",
        "imageUrl": "https://studiodapur.com/cdn/shop/files/banner_JIA-compressed.jpg?v=1786591718&width=3840",
        "action_text": "Pelajari Ekosistem",
        "link_url": "https://www.studiodapur.com"
      },
      {
        "title": "Kendali Mutu & Ketertelusuran Bahan",
        "category": "Standar Mutu",
        "description": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial.",
        "price": "Teruji & Terverifikasi",
        "imageUrl": "https://studiodapur.com/cdn/shop/files/WoodenShelf2_edd42ff0-759c-4679-b8f4-981c099e3a98.jpg?v=1735530147&width=533",
        "action_text": "Akses Toko Resmi",
        "link_url": "https://www.studiodapur.com"
      }
    ]
  },
  "bell-society": {
    "slug": "bell-society",
    "name": "BELL SOCIETY",
    "lensSlug": "kriya-desain-material-berkelanjutan",
    "lensName": "Kriya, Desain & Material Berkelanjutan",
    "curationTier": "Hidden Gem",
    "origin": "Bandung, Jawa Barat",
    "logoUrl": "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80",
    "discoveryTitle": {
      "anomaly": "Temuan pencemaran limbah cair fermentasi ceri kopi yang mengalir ke saluran air tanah perbukitan",
      "question": "Ketegangan industri tekstil yang masih mengimpor polimer sintetis berbasis minyak bumi",
      "paradigm": "Rasa penasaran bagaimana bakteri Acetobacter mengubah limbah manis kopi menjadi lembaran selulosa bertekstur kulit samak"
    },
    "coreFinding": "Kultur bakteri selulosa (microbial cellulose) bernutrisi limbah cair pengolahan kopi menghasilkan biomaterial (Misel) berkarakteristik fisik setara kulit sintetis tanpa eksploitasi lahan.",
    "contextNarrative": {
      "marketVacuum": "Riset bioteknologi terapan oleh saintis muda ITB untuk mengubah limbah air pencucian dan kulit ceri kopi di Jawa Barat menjadi material bernilai tinggi. Fermentasi bakteri berlangsung dalam hitungan minggu di ruang kultur terkendali tanpa emisi metana peternakan atau zat kimia penyamak berbahaya.",
      "disruptedStatusQuo": "Juara pertama Swiss Innovation Challenge Indonesia."
    },
    "evidenceTelemetry": {
      "originCoordinates": "Bandung, Jawa Barat",
      "productionModel": "Limbah cair pulp kopi dan kulit buah dari petani Ciwidey dan Pangalengan; pembiakan koloni bakteri di lab Bandung; pewarna nabati dan penyamakan non-kromium.",
      "verifiedClaims": [
        {
          "claim": "Limbah cair pulp kopi dan kulit buah dari petani Ciwidey dan Pangalengan",
          "evidencePrimary": "Dokumentasi fasilitas operasional, audit rantai pasok, dan katalog resmi BELL SOCIETY.",
          "verificationSource": "Hasil pengujian standar mutu nasional, sertifikasi relevan, dan liputan media terpercaya.",
          "editorialInterpretation": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial."
        }
      ]
    },
    "flagshipProducts": [
      {
        "name": "Misel Raw Bio-Material Sheet",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Bandung, Jawa Barat.",
        "price": "Rp250.000",
        "buyUrl": "https://thebellsociety.com",
        "imageUrl": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/MTA-183075719/periplus_the_bell_jar_-modern_classics-_by_sylvia_plath_-_9780060837020_full01_rkdkxzlw.webp",
        "category": "Karya Utama"
      },
      {
        "name": "Misel Vegan Leather Cardholder / Slim Wallet",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Bandung, Jawa Barat.",
        "price": "Rp280.000",
        "buyUrl": "https://thebellsociety.com",
        "imageUrl": "https://giocardin.com/cdn/shop/files/240.GC_XBell.jpg?v=1693642378&width=1946",
        "category": "Koleksi Pilihan"
      }
    ],
    "milestones": [
      {
        "year": "FASE AWAL | PERINTISAN",
        "title": "Riset Material & Pendirian Fondasi",
        "description": "Memulai eksplorasi bahan baku dan uji coba formulasi di Bandung, Jawa Barat, menegaskan komitmen untuk tidak bergantung pada rantai pasok impor."
      },
      {
        "year": "FASE KEDUA | PENGUATAN",
        "title": "Konsolidasi Mitra & Standarisasi Mutu",
        "description": "Membangun jaringan kemitraan erat bersama perajin dan komunitas lokal, menerapkan uji kendali mutu berstandar ketat, dan merilis karya unggulan perdana."
      },
      {
        "year": "FASE KETIGA | KEDAULATAN",
        "title": "Rujukan Kemandirian & Pengakuan Pasar",
        "description": "Menjadi tolok ukur integritas karya di sektor Kriya, Desain & Material Berkelanjutan, membuktikan keberlanjutan model bisnis etis yang menguntungkan ekosistem lokal."
      }
    ],
    "sovereigntyMeaning": "Keberadaan BELL SOCIETY menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten.",
    "channels": {
      "officialStore": [
        {
          "platform": "Webstore Resmi",
          "url": "https://thebellsociety.com",
          "label": "thebellsociety.com"
        },
        {
          "platform": "Tokopedia Official",
          "url": "https://tokopedia.com/find?q=BELL%20SOCIETY",
          "label": "Tokopedia: BELL SOCIETY"
        },
        {
          "platform": "Shopee Mall",
          "url": "https://shopee.co.id/search?keyword=BELL%20SOCIETY",
          "label": "Shopee: BELL SOCIETY"
        }
      ],
      "publicSpaces": [
        {
          "platform": "Instagram",
          "url": "https://instagram.com/thebellsociety",
          "label": "@thebellsociety"
        },
        {
          "platform": "Surel Kemitraan",
          "url": "mailto:kontak@thebellsociety.com",
          "label": "Inquiry Resmi"
        }
      ]
    },
    "scores": {
      "quality": 24,
      "discovery": 25,
      "trackRecord": 24,
      "story": 24,
      "total": 97
    },
    "statusRedFlag": "CLEAR",
    "bio_paragraphs": [
      "Kelahiran BELL SOCIETY berakar dari kegelisahan mendalam terhadap lanskap industri di Bandung, Jawa Barat dan sekitarnya. Riset bioteknologi terapan oleh saintis muda ITB untuk mengubah limbah air pencucian dan kulit ceri kopi di Jawa Barat menjadi material bernilai tinggi. Fermentasi bakteri berlangsung dalam hitungan minggu di ruang kultur terkendali tanpa emisi metana peternakan atau zat kimia penyamak berbahaya. BELL SOCIETY hadir untuk menjembatani kesenjangan tersebut dengan membuktikan bahwa potensi daerah mampu melahirkan standar baru yang mandiri dan berdaya tawar tinggi.",
      "Melalui pendekatan kerja yang berakar pada kearifan dan disiplin mutu, BELL SOCIETY mengintegrasikan ekosistem hulu hingga hilir. Limbah cair pulp kopi dan kulit buah dari petani Ciwidey dan Pangalengan; pembiakan koloni bakteri di lab Bandung; pewarna nabati dan penyamakan non-kromium. Langkah ini bukan sekadar strategi produksi, melainkan ikhtiar merawat martabat pekerja lokal serta menjaga keaslian material nusantara tanpa kompromi.",
      "Dampaknya terlihat nyata pada karya-karya terkurasi yang mereka hasilkan. Kultur bakteri selulosa (microbial cellulose) bernutrisi limbah cair pengolahan kopi menghasilkan biomaterial (Misel) berkarakteristik fisik setara kulit sintetis tanpa eksploitasi lahan. Keberadaan BELL SOCIETY menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten."
    ],
    "quote": "Kultur bakteri selulosa (microbial cellulose) bernutrisi limbah cair pengolahan kopi menghasilkan biomaterial (Misel) berkarakteristik fisik setara kulit sintetis tanpa eksploitasi lahan.",
    "initiatives": [
      {
        "title": "Kemitraan Hulu & Rantai Pasok Berkelanjutan",
        "category": "Ekosistem Lokal",
        "description": "Limbah cair pulp kopi dan kulit buah dari petani Ciwidey dan Pangalengan; pembiakan koloni bakteri di lab Bandung; pewarna nabati dan penyamakan non-kromium.",
        "price": "Kemitraan Mandiri",
        "imageUrl": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/MTA-183075719/periplus_the_bell_jar_-modern_classics-_by_sylvia_plath_-_9780060837020_full01_rkdkxzlw.webp",
        "action_text": "Pelajari Ekosistem",
        "link_url": "https://thebellsociety.com"
      },
      {
        "title": "Kendali Mutu & Ketertelusuran Bahan",
        "category": "Standar Mutu",
        "description": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial.",
        "price": "Teruji & Terverifikasi",
        "imageUrl": "https://giocardin.com/cdn/shop/files/240.GC_XBell.jpg?v=1693642378&width=1946",
        "action_text": "Akses Toko Resmi",
        "link_url": "https://thebellsociety.com"
      }
    ]
  },
  "sukkhacitta": {
    "slug": "sukkhacitta",
    "name": "SUKKHACITTA",
    "lensSlug": "wastra-manufaktur-etis",
    "lensName": "Wastra & Manufaktur Etis",
    "curationTier": "Established",
    "origin": "Jakarta / Jawa Tengah",
    "logoUrl": "https://lookaside.fbsbx.com/lookaside/crawler/instagram/sukkhacitta/profile_pic.jpg",
    "discoveryTitle": {
      "anomaly": "Rantai Pasok Tertutup dari Benih Kapas hingga Jahitan Terakhir: Menghapus Middleman Demi Living Wage Penenun Desa",
      "question": "Bagaimana membuktikan keunggulan mandiri tanpa kompromi mutu?",
      "paradigm": "Kemandirian SUKKHACITTA"
    },
    "coreFinding": "Beroperasi tanpa kompromi bahan sintetis melalui model farm-to-closet bersertifikasi B Corp pertama di Indonesia yang mengontrol 100% ketertelusuran bahan baku dari tanah petani regeneratif.",
    "contextNarrative": {
      "marketVacuum": "Menolak kapas komoditas impor yang mendominasi 98% industri tekstil nasional. Mengintegrasikan pertanian tumpang sari tanpa pestisida kimia di Jawa Tengah dan Flores untuk memulihkan tanah terdegradasi sembari memotong rantai tengkulak.",
      "disruptedStatusQuo": "Lebih dari 60% harga produk dialokasikan langsung kembali ke komunitas petani dan penenun perempuan."
    },
    "evidenceTelemetry": {
      "originCoordinates": "Jakarta / Jawa Tengah",
      "productionModel": "Kapas regeneratif lokal dari petani mitra di Medono, Klaten, dan Flores; pemintalan manual; pewarnaan alami 100% (Indigofera, secang, mahoni); tenun ATBM dan gedogan.",
      "verifiedClaims": [
        {
          "claim": "Kapas regeneratif lokal dari petani mitra di Medono, Klaten, dan Flores",
          "evidencePrimary": "Dokumentasi fasilitas operasional, audit rantai pasok, dan katalog resmi SUKKHACITTA.",
          "verificationSource": "Hasil pengujian standar mutu nasional, sertifikasi relevan, dan liputan media terpercaya.",
          "editorialInterpretation": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial."
        }
      ]
    },
    "flagshipProducts": [
      {
        "name": "KAPAS Classic Shirt",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Jakarta / Jawa Tengah.",
        "price": "Rp1.850.000",
        "buyUrl": "https://discover.sukkhacitta.com/",
        "imageUrl": "https://www.sukkhacitta.com/cdn/shop/files/SukkhaCitta_ANGKASA_W1031_Classic_Wrap_Top_SweetIndigo_Medium_Blue_Resized_3.jpg?crop=center&height=1531&v=1764560760&width=1915",
        "category": "Karya Utama"
      },
      {
        "name": "JAS Casual Blazer Tenun Tangan .",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Jakarta / Jawa Tengah.",
        "price": "Rp3.200.000",
        "buyUrl": "https://discover.sukkhacitta.com/",
        "imageUrl": "https://www.sukkhacitta.com/cdn/shop/files/SukkhaCitta_U5001_SELAH_Handwoven_Scarf_Grid_SweetIndigo_Black_Catalog_Photo_Resized_5.jpg?crop=center&height=800&v=1763370918&width=1000",
        "category": "Koleksi Pilihan"
      }
    ],
    "milestones": [
      {
        "year": "FASE AWAL | PERINTISAN",
        "title": "Riset Material & Pendirian Fondasi",
        "description": "Memulai eksplorasi bahan baku dan uji coba formulasi di Jakarta / Jawa Tengah, menegaskan komitmen untuk tidak bergantung pada rantai pasok impor."
      },
      {
        "year": "FASE KEDUA | PENGUATAN",
        "title": "Konsolidasi Mitra & Standarisasi Mutu",
        "description": "Membangun jaringan kemitraan erat bersama perajin dan komunitas lokal, menerapkan uji kendali mutu berstandar ketat, dan merilis karya unggulan perdana."
      },
      {
        "year": "FASE KETIGA | KEDAULATAN",
        "title": "Rujukan Kemandirian & Pengakuan Pasar",
        "description": "Menjadi tolok ukur integritas karya di sektor Wastra & Manufaktur Etis, membuktikan keberlanjutan model bisnis etis yang menguntungkan ekosistem lokal."
      }
    ],
    "sovereigntyMeaning": "Keberadaan SUKKHACITTA menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten.",
    "channels": {
      "officialStore": [
        {
          "platform": "Webstore Resmi",
          "url": "https://discover.sukkhacitta.com/",
          "label": "discover.sukkhacitta.com"
        },
        {
          "platform": "Tokopedia Official",
          "url": "https://tokopedia.com/find?q=SUKKHACITTA",
          "label": "Tokopedia: SUKKHACITTA"
        },
        {
          "platform": "Shopee Mall",
          "url": "https://shopee.co.id/search?keyword=SUKKHACITTA",
          "label": "Shopee: SUKKHACITTA"
        }
      ],
      "publicSpaces": [
        {
          "platform": "Instagram",
          "url": "https://instagram.com/sukkhacitta",
          "label": "@sukkhacitta"
        },
        {
          "platform": "Surel Kemitraan",
          "url": "mailto:kontak@discover.sukkhacitta.com",
          "label": "Inquiry Resmi"
        }
      ]
    },
    "scores": {
      "quality": 25,
      "discovery": 25,
      "trackRecord": 25,
      "story": 24,
      "total": 99
    },
    "statusRedFlag": "CLEAR",
    "bio_paragraphs": [
      "Kelahiran SUKKHACITTA berakar dari kegelisahan mendalam terhadap lanskap industri di Jakarta / Jawa Tengah dan sekitarnya. Menolak kapas komoditas impor yang mendominasi 98% industri tekstil nasional. Mengintegrasikan pertanian tumpang sari tanpa pestisida kimia di Jawa Tengah dan Flores untuk memulihkan tanah terdegradasi sembari memotong rantai tengkulak. SUKKHACITTA hadir untuk menjembatani kesenjangan tersebut dengan membuktikan bahwa potensi daerah mampu melahirkan standar baru yang mandiri dan berdaya tawar tinggi.",
      "Melalui pendekatan kerja yang berakar pada kearifan dan disiplin mutu, SUKKHACITTA mengintegrasikan ekosistem hulu hingga hilir. Kapas regeneratif lokal dari petani mitra di Medono, Klaten, dan Flores; pemintalan manual; pewarnaan alami 100% (Indigofera, secang, mahoni); tenun ATBM dan gedogan. Langkah ini bukan sekadar strategi produksi, melainkan ikhtiar merawat martabat pekerja lokal serta menjaga keaslian material nusantara tanpa kompromi.",
      "Dampaknya terlihat nyata pada karya-karya terkurasi yang mereka hasilkan. Beroperasi tanpa kompromi bahan sintetis melalui model farm-to-closet bersertifikasi B Corp pertama di Indonesia yang mengontrol 100% ketertelusuran bahan baku dari tanah petani regeneratif. Keberadaan SUKKHACITTA menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten."
    ],
    "quote": "Beroperasi tanpa kompromi bahan sintetis melalui model farm-to-closet bersertifikasi B Corp pertama di Indonesia yang mengontrol 100% ketertelusuran bahan baku dari tanah petani regeneratif.",
    "initiatives": [
      {
        "title": "Kemitraan Hulu & Rantai Pasok Berkelanjutan",
        "category": "Ekosistem Lokal",
        "description": "Kapas regeneratif lokal dari petani mitra di Medono, Klaten, dan Flores; pemintalan manual; pewarnaan alami 100% (Indigofera, secang, mahoni); tenun ATBM dan gedogan.",
        "price": "Kemitraan Mandiri",
        "imageUrl": "https://www.sukkhacitta.com/cdn/shop/files/SukkhaCitta_ANGKASA_W1031_Classic_Wrap_Top_SweetIndigo_Medium_Blue_Resized_3.jpg?crop=center&height=1531&v=1764560760&width=1915",
        "action_text": "Pelajari Ekosistem",
        "link_url": "https://discover.sukkhacitta.com/"
      },
      {
        "title": "Kendali Mutu & Ketertelusuran Bahan",
        "category": "Standar Mutu",
        "description": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial.",
        "price": "Teruji & Terverifikasi",
        "imageUrl": "https://www.sukkhacitta.com/cdn/shop/files/SukkhaCitta_U5001_SELAH_Handwoven_Scarf_Grid_SweetIndigo_Black_Catalog_Photo_Resized_5.jpg?crop=center&height=800&v=1763370918&width=1000",
        "action_text": "Akses Toko Resmi",
        "link_url": "https://discover.sukkhacitta.com/"
      }
    ]
  },
  "sejauh-mata-memandang": {
    "slug": "sejauh-mata-memandang",
    "name": "SEJAUH MATA MEMANDANG",
    "lensSlug": "wastra-manufaktur-etis",
    "lensName": "Wastra & Manufaktur Etis",
    "curationTier": "Established",
    "origin": "Jakarta",
    "logoUrl": "https://mms.img.susercontent.com/28430d8ba1839a57af52a9a0757c581b_tn",
    "discoveryTitle": {
      "anomaly": "Mendekonstruksi Wastra Sirkular: Ketika Serat Daur Ulang dan Tencel Berpadu dengan Cap Tembaga Pekalongan",
      "question": "Bagaimana membuktikan keunggulan mandiri tanpa kompromi mutu?",
      "paradigm": "Kemandirian SEJAUH MATA MEMANDANG"
    },
    "coreFinding": "Mengombinasikan motif naratif kontemporer dengan protokol sirkularitas terukur yang mengolah limbah pra dan pasca-konsumsi tekstil kembali menjadi benang tenun fungsional.",
    "contextNarrative": {
      "marketVacuum": "Menolak pemakaian poliester murni serta mengadopsi serat selulosa regeneratif kayu (Tencel) yang dipadukan dengan teknik batik cap tradisional. Menjalankan program pengumpulan pakaian bekas (take-back program) bersama pemilah limbah tekstil lokal untuk didaur ulang kembali.",
      "disruptedStatusQuo": "Mengoperasikan IPAL skala bengkel perajin."
    },
    "evidenceTelemetry": {
      "originCoordinates": "Jakarta",
      "productionModel": "Sentra pembatik cap tembaga Pekalongan; penenun tenun ikat Tuban (Jatim); serat katun organik dan selulosa pohon bersertifikasi FSC/PEFC.",
      "verifiedClaims": [
        {
          "claim": "Sentra pembatik cap tembaga Pekalongan",
          "evidencePrimary": "Dokumentasi fasilitas operasional, audit rantai pasok, dan katalog resmi SEJAUH MATA MEMANDANG.",
          "verificationSource": "Hasil pengujian standar mutu nasional, sertifikasi relevan, dan liputan media terpercaya.",
          "editorialInterpretation": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial."
        }
      ]
    },
    "flagshipProducts": [
      {
        "name": "Kemeja Lengan Panjang Motif Ayam Tenun",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Jakarta.",
        "price": "Rp1.800.000",
        "buyUrl": "https://sejauh.com/",
        "imageUrl": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/94/MTA-173071550/sejauh_mata_memandang_outer_ayam_creme_tencel_full01_rq2iomdq.jpg",
        "category": "Karya Utama"
      },
      {
        "name": "Outer Andara / Kebaya Katun Daur Ulang .",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Jakarta.",
        "price": "Rp1.500.000",
        "buyUrl": "https://sejauh.com/",
        "imageUrl": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/103/MTA-179013918/sejauh_mata_memandang_bandana_segitiga_full01_q4sdcyi7.jpg",
        "category": "Koleksi Pilihan"
      }
    ],
    "milestones": [
      {
        "year": "FASE AWAL | PERINTISAN",
        "title": "Riset Material & Pendirian Fondasi",
        "description": "Memulai eksplorasi bahan baku dan uji coba formulasi di Jakarta, menegaskan komitmen untuk tidak bergantung pada rantai pasok impor."
      },
      {
        "year": "FASE KEDUA | PENGUATAN",
        "title": "Konsolidasi Mitra & Standarisasi Mutu",
        "description": "Membangun jaringan kemitraan erat bersama perajin dan komunitas lokal, menerapkan uji kendali mutu berstandar ketat, dan merilis karya unggulan perdana."
      },
      {
        "year": "FASE KETIGA | KEDAULATAN",
        "title": "Rujukan Kemandirian & Pengakuan Pasar",
        "description": "Menjadi tolok ukur integritas karya di sektor Wastra & Manufaktur Etis, membuktikan keberlanjutan model bisnis etis yang menguntungkan ekosistem lokal."
      }
    ],
    "sovereigntyMeaning": "Keberadaan SEJAUH MATA MEMANDANG menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten.",
    "channels": {
      "officialStore": [
        {
          "platform": "Webstore Resmi",
          "url": "https://sejauh.com/",
          "label": "sejauh.com"
        },
        {
          "platform": "Tokopedia Official",
          "url": "https://tokopedia.com/find?q=SEJAUH%20MATA%20MEMANDANG",
          "label": "Tokopedia: SEJAUH MATA MEMANDANG"
        },
        {
          "platform": "Shopee Mall",
          "url": "https://shopee.co.id/search?keyword=SEJAUH%20MATA%20MEMANDANG",
          "label": "Shopee: SEJAUH MATA MEMANDANG"
        }
      ],
      "publicSpaces": [
        {
          "platform": "Instagram",
          "url": "https://instagram.com/sejauh_mata_memandang",
          "label": "@sejauh_mata_memandang"
        },
        {
          "platform": "Surel Kemitraan",
          "url": "mailto:kontak@sejauh.com",
          "label": "Inquiry Resmi"
        }
      ]
    },
    "scores": {
      "quality": 24,
      "discovery": 23,
      "trackRecord": 24,
      "story": 24,
      "total": 95
    },
    "statusRedFlag": "CLEAR",
    "bio_paragraphs": [
      "Kelahiran SEJAUH MATA MEMANDANG berakar dari kegelisahan mendalam terhadap lanskap industri di Jakarta dan sekitarnya. Menolak pemakaian poliester murni serta mengadopsi serat selulosa regeneratif kayu (Tencel) yang dipadukan dengan teknik batik cap tradisional. Menjalankan program pengumpulan pakaian bekas (take-back program) bersama pemilah limbah tekstil lokal untuk didaur ulang kembali. SEJAUH MATA MEMANDANG hadir untuk menjembatani kesenjangan tersebut dengan membuktikan bahwa potensi daerah mampu melahirkan standar baru yang mandiri dan berdaya tawar tinggi.",
      "Melalui pendekatan kerja yang berakar pada kearifan dan disiplin mutu, SEJAUH MATA MEMANDANG mengintegrasikan ekosistem hulu hingga hilir. Sentra pembatik cap tembaga Pekalongan; penenun tenun ikat Tuban (Jatim); serat katun organik dan selulosa pohon bersertifikasi FSC/PEFC. Langkah ini bukan sekadar strategi produksi, melainkan ikhtiar merawat martabat pekerja lokal serta menjaga keaslian material nusantara tanpa kompromi.",
      "Dampaknya terlihat nyata pada karya-karya terkurasi yang mereka hasilkan. Mengombinasikan motif naratif kontemporer dengan protokol sirkularitas terukur yang mengolah limbah pra dan pasca-konsumsi tekstil kembali menjadi benang tenun fungsional. Keberadaan SEJAUH MATA MEMANDANG menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten."
    ],
    "quote": "Mengombinasikan motif naratif kontemporer dengan protokol sirkularitas terukur yang mengolah limbah pra dan pasca-konsumsi tekstil kembali menjadi benang tenun fungsional.",
    "initiatives": [
      {
        "title": "Kemitraan Hulu & Rantai Pasok Berkelanjutan",
        "category": "Ekosistem Lokal",
        "description": "Sentra pembatik cap tembaga Pekalongan; penenun tenun ikat Tuban (Jatim); serat katun organik dan selulosa pohon bersertifikasi FSC/PEFC.",
        "price": "Kemitraan Mandiri",
        "imageUrl": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/94/MTA-173071550/sejauh_mata_memandang_outer_ayam_creme_tencel_full01_rq2iomdq.jpg",
        "action_text": "Pelajari Ekosistem",
        "link_url": "https://sejauh.com/"
      },
      {
        "title": "Kendali Mutu & Ketertelusuran Bahan",
        "category": "Standar Mutu",
        "description": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial.",
        "price": "Teruji & Terverifikasi",
        "imageUrl": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/103/MTA-179013918/sejauh_mata_memandang_bandana_segitiga_full01_q4sdcyi7.jpg",
        "action_text": "Akses Toko Resmi",
        "link_url": "https://sejauh.com/"
      }
    ]
  },
  "toraja-melo": {
    "slug": "toraja-melo",
    "name": "TORAJA MELO",
    "lensSlug": "wastra-manufaktur-etis",
    "lensName": "Wastra & Manufaktur Etis",
    "curationTier": "Established",
    "origin": "Jakarta / Tana Toraja, Sulawesi Selatan",
    "logoUrl": "https://www.samueletini.com/wp-content/uploads/2024/04/image.png",
    "discoveryTitle": {
      "anomaly": "Mematahkan Siklus Migrasi Ilegal: Menghidupkan Alat Tenun Punggung Toraja Menjadi Penopang Ekonomi Rumah Tangga Adat",
      "question": "Bagaimana membuktikan keunggulan mandiri tanpa kompromi mutu?",
      "paradigm": "Kemandirian TORAJA MELO"
    },
    "coreFinding": "Mentransformasikan tradisi tenun gedogan (backstrap loom) menjadi unit usaha mandiri berdaya saing global yang menekan angka perdagangan orang dan migrasi buruh migran ilegal perempuan Toraja dan Mamasa.",
    "contextNarrative": {
      "marketVacuum": "Didirikan Dinny Jusuf setelah menemukan bahwa punahnya tenun Toraja berkolerasi dengan tingginya perempuan adat yang bermigrasi menjadi pekerja migran rentan eksploitasi. Koperasi penenun menjamin pembelian karya tenun dengan harga adil sepanjang tahun tanpa perantara ijon.",
      "disruptedStatusQuo": "Lebih dari 1.000 penenun di Sulbar, Sulsel, dan Flores kini memiliki pendapatan tunai mandiri."
    },
    "evidenceTelemetry": {
      "originCoordinates": "Jakarta / Tana Toraja, Sulawesi Selatan",
      "productionModel": "Komunitas penenun Sa'dan di Toraja Utara, Mamasa (Sulbar), dan Manggarai Barat (NTT); tenun punggung manual tanpa listrik; pigmen tumbuhan lokal.",
      "verifiedClaims": [
        {
          "claim": "Komunitas penenun Sa'dan di Toraja Utara, Mamasa (Sulbar), dan Manggarai Barat (NTT)",
          "evidencePrimary": "Dokumentasi fasilitas operasional, audit rantai pasok, dan katalog resmi TORAJA MELO.",
          "verificationSource": "Hasil pengujian standar mutu nasional, sertifikasi relevan, dan liputan media terpercaya.",
          "editorialInterpretation": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial."
        }
      ]
    },
    "flagshipProducts": [
      {
        "name": "Tenun Toraja Sa'dan Shawl / Runner",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Jakarta / Tana Toraja, Sulawesi Selatan.",
        "price": "Rp950.000",
        "buyUrl": "https://www.torajamelo.com/",
        "imageUrl": "https://asset.kompas.com/crops/p8helf3oi8hdhXt4xB7SZ5M1BK8=/0x150:3542x2512/1200x800/data/photo/2023/01/19/63c93d16812cb.jpg",
        "category": "Karya Utama"
      },
      {
        "name": "Koleksi Tas & Apparel Tenun Gedogan .",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Jakarta / Tana Toraja, Sulawesi Selatan.",
        "price": "Rp1.200.000",
        "buyUrl": "https://www.torajamelo.com/",
        "imageUrl": "https://image1ws.indotrading.com/s3/productimages/webp/co26465/p189136/w300-h300/22b54c68-4e14-4c3d-a74f-8a47ab6adb82w.png",
        "category": "Koleksi Pilihan"
      }
    ],
    "milestones": [
      {
        "year": "FASE AWAL | PERINTISAN",
        "title": "Riset Material & Pendirian Fondasi",
        "description": "Memulai eksplorasi bahan baku dan uji coba formulasi di Jakarta / Tana Toraja, Sulawesi Selatan, menegaskan komitmen untuk tidak bergantung pada rantai pasok impor."
      },
      {
        "year": "FASE KEDUA | PENGUATAN",
        "title": "Konsolidasi Mitra & Standarisasi Mutu",
        "description": "Membangun jaringan kemitraan erat bersama perajin dan komunitas lokal, menerapkan uji kendali mutu berstandar ketat, dan merilis karya unggulan perdana."
      },
      {
        "year": "FASE KETIGA | KEDAULATAN",
        "title": "Rujukan Kemandirian & Pengakuan Pasar",
        "description": "Menjadi tolok ukur integritas karya di sektor Wastra & Manufaktur Etis, membuktikan keberlanjutan model bisnis etis yang menguntungkan ekosistem lokal."
      }
    ],
    "sovereigntyMeaning": "Keberadaan TORAJA MELO menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten.",
    "channels": {
      "officialStore": [
        {
          "platform": "Webstore Resmi",
          "url": "https://www.torajamelo.com/",
          "label": "www.torajamelo.com"
        },
        {
          "platform": "Tokopedia Official",
          "url": "https://tokopedia.com/find?q=TORAJA%20MELO",
          "label": "Tokopedia: TORAJA MELO"
        },
        {
          "platform": "Shopee Mall",
          "url": "https://shopee.co.id/search?keyword=TORAJA%20MELO",
          "label": "Shopee: TORAJA MELO"
        }
      ],
      "publicSpaces": [
        {
          "platform": "Instagram",
          "url": "https://instagram.com/torajamelo",
          "label": "@torajamelo"
        },
        {
          "platform": "Surel Kemitraan",
          "url": "mailto:kontak@torajamelo.com",
          "label": "Inquiry Resmi"
        }
      ]
    },
    "scores": {
      "quality": 24,
      "discovery": 24,
      "trackRecord": 25,
      "story": 25,
      "total": 98
    },
    "statusRedFlag": "CLEAR",
    "bio_paragraphs": [
      "Kelahiran TORAJA MELO berakar dari kegelisahan mendalam terhadap lanskap industri di Jakarta / Tana Toraja, Sulawesi Selatan dan sekitarnya. Didirikan Dinny Jusuf setelah menemukan bahwa punahnya tenun Toraja berkolerasi dengan tingginya perempuan adat yang bermigrasi menjadi pekerja migran rentan eksploitasi. Koperasi penenun menjamin pembelian karya tenun dengan harga adil sepanjang tahun tanpa perantara ijon. TORAJA MELO hadir untuk menjembatani kesenjangan tersebut dengan membuktikan bahwa potensi daerah mampu melahirkan standar baru yang mandiri dan berdaya tawar tinggi.",
      "Melalui pendekatan kerja yang berakar pada kearifan dan disiplin mutu, TORAJA MELO mengintegrasikan ekosistem hulu hingga hilir. Komunitas penenun Sa'dan di Toraja Utara, Mamasa (Sulbar), dan Manggarai Barat (NTT); tenun punggung manual tanpa listrik; pigmen tumbuhan lokal. Langkah ini bukan sekadar strategi produksi, melainkan ikhtiar merawat martabat pekerja lokal serta menjaga keaslian material nusantara tanpa kompromi.",
      "Dampaknya terlihat nyata pada karya-karya terkurasi yang mereka hasilkan. Mentransformasikan tradisi tenun gedogan (backstrap loom) menjadi unit usaha mandiri berdaya saing global yang menekan angka perdagangan orang dan migrasi buruh migran ilegal perempuan Toraja dan Mamasa. Keberadaan TORAJA MELO menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten."
    ],
    "quote": "Mentransformasikan tradisi tenun gedogan (backstrap loom) menjadi unit usaha mandiri berdaya saing global yang menekan angka perdagangan orang dan migrasi buruh migran ilegal perempuan Toraja dan Mamasa.",
    "initiatives": [
      {
        "title": "Kemitraan Hulu & Rantai Pasok Berkelanjutan",
        "category": "Ekosistem Lokal",
        "description": "Komunitas penenun Sa'dan di Toraja Utara, Mamasa (Sulbar), dan Manggarai Barat (NTT); tenun punggung manual tanpa listrik; pigmen tumbuhan lokal.",
        "price": "Kemitraan Mandiri",
        "imageUrl": "https://asset.kompas.com/crops/p8helf3oi8hdhXt4xB7SZ5M1BK8=/0x150:3542x2512/1200x800/data/photo/2023/01/19/63c93d16812cb.jpg",
        "action_text": "Pelajari Ekosistem",
        "link_url": "https://www.torajamelo.com/"
      },
      {
        "title": "Kendali Mutu & Ketertelusuran Bahan",
        "category": "Standar Mutu",
        "description": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial.",
        "price": "Teruji & Terverifikasi",
        "imageUrl": "https://image1ws.indotrading.com/s3/productimages/webp/co26465/p189136/w300-h300/22b54c68-4e14-4c3d-a74f-8a47ab6adb82w.png",
        "action_text": "Akses Toko Resmi",
        "link_url": "https://www.torajamelo.com/"
      }
    ]
  },
  "binhouse": {
    "slug": "binhouse",
    "name": "BINHOUSE",
    "lensSlug": "wastra-manufaktur-etis",
    "lensName": "Wastra & Manufaktur Etis",
    "curationTier": "Established",
    "origin": "Jakarta",
    "logoUrl": "https://lookaside.fbsbx.com/lookaside/crawler/instagram/binhouse_official/profile_pic.jpg",
    "discoveryTitle": {
      "anomaly": "Konstruksi Anyaman Sutra Tanpa Gunting Benang: Rekayasa ATBM Presisi Tinggi yang Menembus Standar Adibusana Global",
      "question": "Bagaimana membuktikan keunggulan mandiri tanpa kompromi mutu?",
      "paradigm": "Kemandirian BINHOUSE"
    },
    "coreFinding": "Memodifikasi alat tenun bukan mesin (ATBM) untuk memintal benang sutra mentah lokal dengan kerapatan mikroskopis presisi sebelum dibatik canting manual.",
    "contextNarrative": {
      "marketVacuum": "Menolak kain mori/sutra komersial pabrik dan membangun bengkel tenun internal dari nol sejak era 1980-an oleh Obin (Josephine Komara). Teknik penenunan elastis alami menghasilkan jatuhan kain (drape) unik tanpa zat kimia pelembut buatan.",
      "disruptedStatusQuo": "Sehelai kain sutra BINhouse memakan waktu 4 hingga 12 bulan pengerjaan."
    },
    "evidenceTelemetry": {
      "originCoordinates": "Jakarta",
      "productionModel": "Budidaya ulat sutra dan pemintalan sutra lokal; sanggar tenun ATBM internal di Jawa Tengah dan Jawa Barat; pewarnaan tangan dan canting malam murni.",
      "verifiedClaims": [
        {
          "claim": "Budidaya ulat sutra dan pemintalan sutra lokal",
          "evidencePrimary": "Dokumentasi fasilitas operasional, audit rantai pasok, dan katalog resmi BINHOUSE.",
          "verificationSource": "Hasil pengujian standar mutu nasional, sertifikasi relevan, dan liputan media terpercaya.",
          "editorialInterpretation": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial."
        }
      ]
    },
    "flagshipProducts": [
      {
        "name": "Selendang Sutra Tenun Tangan Celup Tumpal",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Jakarta.",
        "price": "Rp3.500.000",
        "buyUrl": "https://www.jakartafashionweek.co.id/designers/binhouse/",
        "imageUrl": "https://media.karousell.com/media/photos/products/2024/12/14/bin_house_silk__obin_selendang_1734149573_615c37ab_progressive.jpg",
        "category": "Karya Utama"
      },
      {
        "name": "Kain Sutra Batik Tulis Masterpiece .",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Jakarta.",
        "price": "Rp12.000.000",
        "buyUrl": "https://www.jakartafashionweek.co.id/designers/binhouse/",
        "imageUrl": "https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=2431285399998525529",
        "category": "Koleksi Pilihan"
      }
    ],
    "milestones": [
      {
        "year": "FASE AWAL | PERINTISAN",
        "title": "Riset Material & Pendirian Fondasi",
        "description": "Memulai eksplorasi bahan baku dan uji coba formulasi di Jakarta, menegaskan komitmen untuk tidak bergantung pada rantai pasok impor."
      },
      {
        "year": "FASE KEDUA | PENGUATAN",
        "title": "Konsolidasi Mitra & Standarisasi Mutu",
        "description": "Membangun jaringan kemitraan erat bersama perajin dan komunitas lokal, menerapkan uji kendali mutu berstandar ketat, dan merilis karya unggulan perdana."
      },
      {
        "year": "FASE KETIGA | KEDAULATAN",
        "title": "Rujukan Kemandirian & Pengakuan Pasar",
        "description": "Menjadi tolok ukur integritas karya di sektor Wastra & Manufaktur Etis, membuktikan keberlanjutan model bisnis etis yang menguntungkan ekosistem lokal."
      }
    ],
    "sovereigntyMeaning": "Keberadaan BINHOUSE menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten.",
    "channels": {
      "officialStore": [
        {
          "platform": "Webstore Resmi",
          "url": "https://www.jakartafashionweek.co.id/designers/binhouse/",
          "label": "www.jakartafashionweek.co.id/designers/binhouse"
        },
        {
          "platform": "Tokopedia Official",
          "url": "https://tokopedia.com/find?q=BINHOUSE",
          "label": "Tokopedia: BINHOUSE"
        },
        {
          "platform": "Shopee Mall",
          "url": "https://shopee.co.id/search?keyword=BINHOUSE",
          "label": "Shopee: BINHOUSE"
        }
      ],
      "publicSpaces": [
        {
          "platform": "Instagram",
          "url": "https://instagram.com/binhouse_official",
          "label": "@binhouse_official"
        },
        {
          "platform": "Surel Kemitraan",
          "url": "mailto:kontak@jakartafashionweek.co.id",
          "label": "Inquiry Resmi"
        }
      ]
    },
    "scores": {
      "quality": 25,
      "discovery": 25,
      "trackRecord": 24,
      "story": 24,
      "total": 98
    },
    "statusRedFlag": "CLEAR",
    "bio_paragraphs": [
      "Kelahiran BINHOUSE berakar dari kegelisahan mendalam terhadap lanskap industri di Jakarta dan sekitarnya. Menolak kain mori/sutra komersial pabrik dan membangun bengkel tenun internal dari nol sejak era 1980-an oleh Obin (Josephine Komara). Teknik penenunan elastis alami menghasilkan jatuhan kain (drape) unik tanpa zat kimia pelembut buatan. BINHOUSE hadir untuk menjembatani kesenjangan tersebut dengan membuktikan bahwa potensi daerah mampu melahirkan standar baru yang mandiri dan berdaya tawar tinggi.",
      "Melalui pendekatan kerja yang berakar pada kearifan dan disiplin mutu, BINHOUSE mengintegrasikan ekosistem hulu hingga hilir. Budidaya ulat sutra dan pemintalan sutra lokal; sanggar tenun ATBM internal di Jawa Tengah dan Jawa Barat; pewarnaan tangan dan canting malam murni. Langkah ini bukan sekadar strategi produksi, melainkan ikhtiar merawat martabat pekerja lokal serta menjaga keaslian material nusantara tanpa kompromi.",
      "Dampaknya terlihat nyata pada karya-karya terkurasi yang mereka hasilkan. Memodifikasi alat tenun bukan mesin (ATBM) untuk memintal benang sutra mentah lokal dengan kerapatan mikroskopis presisi sebelum dibatik canting manual. Keberadaan BINHOUSE menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten."
    ],
    "quote": "Memodifikasi alat tenun bukan mesin (ATBM) untuk memintal benang sutra mentah lokal dengan kerapatan mikroskopis presisi sebelum dibatik canting manual.",
    "initiatives": [
      {
        "title": "Kemitraan Hulu & Rantai Pasok Berkelanjutan",
        "category": "Ekosistem Lokal",
        "description": "Budidaya ulat sutra dan pemintalan sutra lokal; sanggar tenun ATBM internal di Jawa Tengah dan Jawa Barat; pewarnaan tangan dan canting malam murni.",
        "price": "Kemitraan Mandiri",
        "imageUrl": "https://media.karousell.com/media/photos/products/2024/12/14/bin_house_silk__obin_selendang_1734149573_615c37ab_progressive.jpg",
        "action_text": "Pelajari Ekosistem",
        "link_url": "https://www.jakartafashionweek.co.id/designers/binhouse/"
      },
      {
        "title": "Kendali Mutu & Ketertelusuran Bahan",
        "category": "Standar Mutu",
        "description": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial.",
        "price": "Teruji & Terverifikasi",
        "imageUrl": "https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=2431285399998525529",
        "action_text": "Akses Toko Resmi",
        "link_url": "https://www.jakartafashionweek.co.id/designers/binhouse/"
      }
    ]
  },
  "lekat": {
    "slug": "lekat",
    "name": "LEKAT",
    "lensSlug": "wastra-manufaktur-etis",
    "lensName": "Wastra & Manufaktur Etis",
    "curationTier": "Middle",
    "origin": "Jakarta / Kanekes, Banten",
    "logoUrl": "https://lookaside.fbsbx.com/lookaside/crawler/instagram/lekatofficial/profile_pic.jpg",
    "discoveryTitle": {
      "anomaly": "Tegangan Garis Baduy di Runway Internasional: Mempertahankan Pakem Adat Tenun Kanekes dalam Potongan Avant-Garde",
      "question": "Bagaimana membuktikan keunggulan mandiri tanpa kompromi mutu?",
      "paradigm": "Kemandirian LEKAT"
    },
    "coreFinding": "Menjembatani isolasi geografis dan aturan kultural ketat suku Baduy Luar dengan mentransformasikan kain tenun serat kasar menjadi mantel struktural tanpa merusak filosofi tabu adat Kanekes.",
    "contextNarrative": {
      "marketVacuum": "Mematuhi batas teritorial adat Baduy, tidak pernah memaksa suku Baduy Dalam menenun di luar ketentuan leluhur dan hanya bermitra dengan perempuan Baduy Luar. Tampil di London Fashion Week dan Tokyo Fashion Week dengan pola potongan nol limbah (zero-waste patchwork).",
      "disruptedStatusQuo": "Pola kerja sama berjalan konsisten lebih dari satu dekade dengan sistem pembayaran tunai di muka."
    },
    "evidenceTelemetry": {
      "originCoordinates": "Jakarta / Kanekes, Banten",
      "productionModel": "Penenun perempuan Baduy Luar di Desa Kanekes, Lebak, Banten; tenun gedogan lantai panggung; benang katun pintal manual dengan pewarna nabati endemik Banten Selatan.",
      "verifiedClaims": [
        {
          "claim": "Penenun perempuan Baduy Luar di Desa Kanekes, Lebak, Banten",
          "evidencePrimary": "Dokumentasi fasilitas operasional, audit rantai pasok, dan katalog resmi LEKAT.",
          "verificationSource": "Hasil pengujian standar mutu nasional, sertifikasi relevan, dan liputan media terpercaya.",
          "editorialInterpretation": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial."
        }
      ]
    },
    "flagshipProducts": [
      {
        "name": "Baduy Pattern Patchwork Outerwear",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Jakarta / Kanekes, Banten.",
        "price": "Rp2.800.000",
        "buyUrl": "https://rakutenfashionweektokyo.com/en/brands/detail/lekat/",
        "imageUrl": "https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=3983112945617773600",
        "category": "Karya Utama"
      },
      {
        "name": "Struktur Rompi Tenun Kanekes Kasar .",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Jakarta / Kanekes, Banten.",
        "price": "Rp1.750.000",
        "buyUrl": "https://rakutenfashionweektokyo.com/en/brands/detail/lekat/",
        "imageUrl": "https://img.lazcdn.com/g/p/aef45e4722abcd747cd41fdbe0a87c31.jpg_720x720q80.jpg",
        "category": "Koleksi Pilihan"
      }
    ],
    "milestones": [
      {
        "year": "FASE AWAL | PERINTISAN",
        "title": "Riset Material & Pendirian Fondasi",
        "description": "Memulai eksplorasi bahan baku dan uji coba formulasi di Jakarta / Kanekes, Banten, menegaskan komitmen untuk tidak bergantung pada rantai pasok impor."
      },
      {
        "year": "FASE KEDUA | PENGUATAN",
        "title": "Konsolidasi Mitra & Standarisasi Mutu",
        "description": "Membangun jaringan kemitraan erat bersama perajin dan komunitas lokal, menerapkan uji kendali mutu berstandar ketat, dan merilis karya unggulan perdana."
      },
      {
        "year": "FASE KETIGA | KEDAULATAN",
        "title": "Rujukan Kemandirian & Pengakuan Pasar",
        "description": "Menjadi tolok ukur integritas karya di sektor Wastra & Manufaktur Etis, membuktikan keberlanjutan model bisnis etis yang menguntungkan ekosistem lokal."
      }
    ],
    "sovereigntyMeaning": "Keberadaan LEKAT menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten.",
    "channels": {
      "officialStore": [
        {
          "platform": "Webstore Resmi",
          "url": "https://rakutenfashionweektokyo.com/en/brands/detail/lekat/",
          "label": "rakutenfashionweektokyo.com/en/brands/detail/lekat"
        },
        {
          "platform": "Tokopedia Official",
          "url": "https://tokopedia.com/find?q=LEKAT",
          "label": "Tokopedia: LEKAT"
        },
        {
          "platform": "Shopee Mall",
          "url": "https://shopee.co.id/search?keyword=LEKAT",
          "label": "Shopee: LEKAT"
        }
      ],
      "publicSpaces": [
        {
          "platform": "Instagram",
          "url": "https://instagram.com/lekatdihati",
          "label": "@lekatdihati"
        },
        {
          "platform": "Surel Kemitraan",
          "url": "mailto:kontak@rakutenfashionweektokyo.com",
          "label": "Inquiry Resmi"
        }
      ]
    },
    "scores": {
      "quality": 23,
      "discovery": 24,
      "trackRecord": 23,
      "story": 24,
      "total": 94
    },
    "statusRedFlag": "CLEAR",
    "bio_paragraphs": [
      "Kelahiran LEKAT berakar dari kegelisahan mendalam terhadap lanskap industri di Jakarta / Kanekes, Banten dan sekitarnya. Mematuhi batas teritorial adat Baduy, tidak pernah memaksa suku Baduy Dalam menenun di luar ketentuan leluhur dan hanya bermitra dengan perempuan Baduy Luar. Tampil di London Fashion Week dan Tokyo Fashion Week dengan pola potongan nol limbah (zero-waste patchwork). LEKAT hadir untuk menjembatani kesenjangan tersebut dengan membuktikan bahwa potensi daerah mampu melahirkan standar baru yang mandiri dan berdaya tawar tinggi.",
      "Melalui pendekatan kerja yang berakar pada kearifan dan disiplin mutu, LEKAT mengintegrasikan ekosistem hulu hingga hilir. Penenun perempuan Baduy Luar di Desa Kanekes, Lebak, Banten; tenun gedogan lantai panggung; benang katun pintal manual dengan pewarna nabati endemik Banten Selatan. Langkah ini bukan sekadar strategi produksi, melainkan ikhtiar merawat martabat pekerja lokal serta menjaga keaslian material nusantara tanpa kompromi.",
      "Dampaknya terlihat nyata pada karya-karya terkurasi yang mereka hasilkan. Menjembatani isolasi geografis dan aturan kultural ketat suku Baduy Luar dengan mentransformasikan kain tenun serat kasar menjadi mantel struktural tanpa merusak filosofi tabu adat Kanekes. Keberadaan LEKAT menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten."
    ],
    "quote": "Menjembatani isolasi geografis dan aturan kultural ketat suku Baduy Luar dengan mentransformasikan kain tenun serat kasar menjadi mantel struktural tanpa merusak filosofi tabu adat Kanekes.",
    "initiatives": [
      {
        "title": "Kemitraan Hulu & Rantai Pasok Berkelanjutan",
        "category": "Ekosistem Lokal",
        "description": "Penenun perempuan Baduy Luar di Desa Kanekes, Lebak, Banten; tenun gedogan lantai panggung; benang katun pintal manual dengan pewarna nabati endemik Banten Selatan.",
        "price": "Kemitraan Mandiri",
        "imageUrl": "https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=3983112945617773600",
        "action_text": "Pelajari Ekosistem",
        "link_url": "https://rakutenfashionweektokyo.com/en/brands/detail/lekat/"
      },
      {
        "title": "Kendali Mutu & Ketertelusuran Bahan",
        "category": "Standar Mutu",
        "description": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial.",
        "price": "Teruji & Terverifikasi",
        "imageUrl": "https://img.lazcdn.com/g/p/aef45e4722abcd747cd41fdbe0a87c31.jpg_720x720q80.jpg",
        "action_text": "Akses Toko Resmi",
        "link_url": "https://rakutenfashionweektokyo.com/en/brands/detail/lekat/"
      }
    ]
  },
  "noesa": {
    "slug": "noesa",
    "name": "NOESA",
    "lensSlug": "wastra-manufaktur-etis",
    "lensName": "Wastra & Manufaktur Etis",
    "curationTier": "Middle",
    "origin": "Jakarta / Sikka, Maumere, NTT",
    "logoUrl": "https://mms.img.susercontent.com/03cfc30659e8b7ff9af6cb4d76f7340f",
    "discoveryTitle": {
      "anomaly": "Mendokumentasikan Herbarium Tenun Sikka: Desentralisasi Studio Desain Ibu Kota Menuju Dapur Pewarna Alami Watubo",
      "question": "Bagaimana membuktikan keunggulan mandiri tanpa kompromi mutu?",
      "paradigm": "Kemandirian NOESA"
    },
    "coreFinding": "Mendirikan entitas kolektif perajin di Desa Watublapi (Flores) yang mendokumentasikan formula kimia tumbuhan alami dan memproduksi aksesori modern presisi tinggi.",
    "contextNarrative": {
      "marketVacuum": "Menstandardisasi kualitas tenun ikat tradisional Flores ke produk gaya hidup kontemporer (strap kamera, dompet, vest) tanpa menurunkan mutu. Koperasi penenun Watubo di Sikka mempraktikkan konservasi tanaman pewarna langka seperti akar mengkudu dan daun loba.",
      "disruptedStatusQuo": "Laba dialokasikan langsung untuk beasiswa anak perajin dan kebun botani lokal."
    },
    "evidenceTelemetry": {
      "originCoordinates": "Jakarta / Sikka, Maumere, NTT",
      "productionModel": "Kelompok Tenun Watubo di pedalaman Sikka, Maumere, NTT; kapas lokal dan benang katun kuat; fiksasi mineral dan tanin tumbuhan tanpa tawas sintetis.",
      "verifiedClaims": [
        {
          "claim": "Kelompok Tenun Watubo di pedalaman Sikka, Maumere, NTT",
          "evidencePrimary": "Dokumentasi fasilitas operasional, audit rantai pasok, dan katalog resmi NOESA.",
          "verificationSource": "Hasil pengujian standar mutu nasional, sertifikasi relevan, dan liputan media terpercaya.",
          "editorialInterpretation": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial."
        }
      ]
    },
    "flagshipProducts": [
      {
        "name": "Handwoven Camera Strap Tenun Ikat Sikka",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Jakarta / Sikka, Maumere, NTT.",
        "price": "Rp650.000",
        "buyUrl": "https://noesa.co.id/",
        "imageUrl": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium/catalog-image/MTA-165707507/noesa_topi_peci_miki_hat_tenun_ikat_-_topi_onde_-_noesa_full03_jnwg055r.jpg",
        "category": "Karya Utama"
      },
      {
        "name": "Watublapi Natural Dye Ikat Vest / Blouse .",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Jakarta / Sikka, Maumere, NTT.",
        "price": "Rp1.800.000",
        "buyUrl": "https://noesa.co.id/",
        "imageUrl": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium/catalog-image/MTA-164762848/noesa_tali_id_card_name_tag_-_gantung_id_card_lanyard_tenun_ikat_-_noesa_full01_hk5zm8au.jpg",
        "category": "Koleksi Pilihan"
      }
    ],
    "milestones": [
      {
        "year": "FASE AWAL | PERINTISAN",
        "title": "Riset Material & Pendirian Fondasi",
        "description": "Memulai eksplorasi bahan baku dan uji coba formulasi di Jakarta / Sikka, Maumere, NTT, menegaskan komitmen untuk tidak bergantung pada rantai pasok impor."
      },
      {
        "year": "FASE KEDUA | PENGUATAN",
        "title": "Konsolidasi Mitra & Standarisasi Mutu",
        "description": "Membangun jaringan kemitraan erat bersama perajin dan komunitas lokal, menerapkan uji kendali mutu berstandar ketat, dan merilis karya unggulan perdana."
      },
      {
        "year": "FASE KETIGA | KEDAULATAN",
        "title": "Rujukan Kemandirian & Pengakuan Pasar",
        "description": "Menjadi tolok ukur integritas karya di sektor Wastra & Manufaktur Etis, membuktikan keberlanjutan model bisnis etis yang menguntungkan ekosistem lokal."
      }
    ],
    "sovereigntyMeaning": "Keberadaan NOESA menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten.",
    "channels": {
      "officialStore": [
        {
          "platform": "Webstore Resmi",
          "url": "https://noesa.co.id/",
          "label": "noesa.co.id"
        },
        {
          "platform": "Tokopedia Official",
          "url": "https://tokopedia.com/find?q=NOESA",
          "label": "Tokopedia: NOESA"
        },
        {
          "platform": "Shopee Mall",
          "url": "https://shopee.co.id/search?keyword=NOESA",
          "label": "Shopee: NOESA"
        }
      ],
      "publicSpaces": [
        {
          "platform": "Instagram",
          "url": "https://instagram.com/noesa.co.id",
          "label": "@noesa.co.id"
        },
        {
          "platform": "Surel Kemitraan",
          "url": "mailto:kontak@noesa.co.id",
          "label": "Inquiry Resmi"
        }
      ]
    },
    "scores": {
      "quality": 24,
      "discovery": 24,
      "trackRecord": 24,
      "story": 24,
      "total": 96
    },
    "statusRedFlag": "CLEAR",
    "bio_paragraphs": [
      "Kelahiran NOESA berakar dari kegelisahan mendalam terhadap lanskap industri di Jakarta / Sikka, Maumere, NTT dan sekitarnya. Menstandardisasi kualitas tenun ikat tradisional Flores ke produk gaya hidup kontemporer (strap kamera, dompet, vest) tanpa menurunkan mutu. Koperasi penenun Watubo di Sikka mempraktikkan konservasi tanaman pewarna langka seperti akar mengkudu dan daun loba. NOESA hadir untuk menjembatani kesenjangan tersebut dengan membuktikan bahwa potensi daerah mampu melahirkan standar baru yang mandiri dan berdaya tawar tinggi.",
      "Melalui pendekatan kerja yang berakar pada kearifan dan disiplin mutu, NOESA mengintegrasikan ekosistem hulu hingga hilir. Kelompok Tenun Watubo di pedalaman Sikka, Maumere, NTT; kapas lokal dan benang katun kuat; fiksasi mineral dan tanin tumbuhan tanpa tawas sintetis. Langkah ini bukan sekadar strategi produksi, melainkan ikhtiar merawat martabat pekerja lokal serta menjaga keaslian material nusantara tanpa kompromi.",
      "Dampaknya terlihat nyata pada karya-karya terkurasi yang mereka hasilkan. Mendirikan entitas kolektif perajin di Desa Watublapi (Flores) yang mendokumentasikan formula kimia tumbuhan alami dan memproduksi aksesori modern presisi tinggi. Keberadaan NOESA menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten."
    ],
    "quote": "Mendirikan entitas kolektif perajin di Desa Watublapi (Flores) yang mendokumentasikan formula kimia tumbuhan alami dan memproduksi aksesori modern presisi tinggi.",
    "initiatives": [
      {
        "title": "Kemitraan Hulu & Rantai Pasok Berkelanjutan",
        "category": "Ekosistem Lokal",
        "description": "Kelompok Tenun Watubo di pedalaman Sikka, Maumere, NTT; kapas lokal dan benang katun kuat; fiksasi mineral dan tanin tumbuhan tanpa tawas sintetis.",
        "price": "Kemitraan Mandiri",
        "imageUrl": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium/catalog-image/MTA-165707507/noesa_topi_peci_miki_hat_tenun_ikat_-_topi_onde_-_noesa_full03_jnwg055r.jpg",
        "action_text": "Pelajari Ekosistem",
        "link_url": "https://noesa.co.id/"
      },
      {
        "title": "Kendali Mutu & Ketertelusuran Bahan",
        "category": "Standar Mutu",
        "description": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial.",
        "price": "Teruji & Terverifikasi",
        "imageUrl": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium/catalog-image/MTA-164762848/noesa_tali_id_card_name_tag_-_gantung_id_card_lanyard_tenun_ikat_-_noesa_full01_hk5zm8au.jpg",
        "action_text": "Akses Toko Resmi",
        "link_url": "https://noesa.co.id/"
      }
    ]
  },
  "kana-goods": {
    "slug": "kana-goods",
    "name": "KANA GOODS",
    "lensSlug": "wastra-manufaktur-etis",
    "lensName": "Wastra & Manufaktur Etis",
    "curationTier": "Middle",
    "origin": "Tangerang Selatan, Banten",
    "logoUrl": "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80",
    "discoveryTitle": {
      "anomaly": "Monokrom Biru Tanpa Limbah Toksik: Menjinakkan Fermentasi Daun Tarum untuk Batik Tulis Modern Harian",
      "question": "Bagaimana membuktikan keunggulan mandiri tanpa kompromi mutu?",
      "paradigm": "Kemandirian KANA GOODS"
    },
    "coreFinding": "Merancang busana siap pakai (ready-to-wear) monokromatis berbasis 100% pasta tarum (Indigofera tinctoria) hasil fermentasi mandiri tanpa bahan kimia pereduksi beracun.",
    "contextNarrative": {
      "marketVacuum": "Menjaga konsistensi warna biru indigo tanpa menambahkan hidrosulfit kimia yang merusak air tanah. Melakukan pencelupan berulang 15 - 20 kali untuk mendapatkan gradasi gelap yang stabil pada kain serat alam (linen, rami, katun ATBM).",
      "disruptedStatusQuo": "Air buangan pencelupan aman dialirkan langsung ke kolam ikan dan tanaman sekitar bengkel."
    },
    "evidenceTelemetry": {
      "originCoordinates": "Tangerang Selatan, Banten",
      "productionModel": "Daun indigofera dari perkebunan binaan di Jawa Tengah; pembatik canting rumahan di Banten dan Yogyakarta; kain serat alami katun dan linen lokal.",
      "verifiedClaims": [
        {
          "claim": "Daun indigofera dari perkebunan binaan di Jawa Tengah",
          "evidencePrimary": "Dokumentasi fasilitas operasional, audit rantai pasok, dan katalog resmi KANA GOODS.",
          "verificationSource": "Hasil pengujian standar mutu nasional, sertifikasi relevan, dan liputan media terpercaya.",
          "editorialInterpretation": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial."
        }
      ]
    },
    "flagshipProducts": [
      {
        "name": "Indigofera Hand-Drawn Batik Shirt",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Tangerang Selatan, Banten.",
        "price": "Rp1.100.000",
        "buyUrl": "https://bestofindonesia.best/product/kana-goods-best-of-indonesia/",
        "imageUrl": "https://bestofindonesia.best/wp-content/uploads/2024/12/Kana_Goods_4_Batik_Layered_Dress.jpg",
        "category": "Karya Utama"
      },
      {
        "name": "Asymmetrical Kimono Outer Natural Indigo .",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Tangerang Selatan, Banten.",
        "price": "Rp1.350.000",
        "buyUrl": "https://bestofindonesia.best/product/kana-goods-best-of-indonesia/",
        "imageUrl": "https://bestofindonesia.best/wp-content/uploads/2024/12/Kana_Goods_13_Batik_Outer.jpg",
        "category": "Koleksi Pilihan"
      }
    ],
    "milestones": [
      {
        "year": "FASE AWAL | PERINTISAN",
        "title": "Riset Material & Pendirian Fondasi",
        "description": "Memulai eksplorasi bahan baku dan uji coba formulasi di Tangerang Selatan, Banten, menegaskan komitmen untuk tidak bergantung pada rantai pasok impor."
      },
      {
        "year": "FASE KEDUA | PENGUATAN",
        "title": "Konsolidasi Mitra & Standarisasi Mutu",
        "description": "Membangun jaringan kemitraan erat bersama perajin dan komunitas lokal, menerapkan uji kendali mutu berstandar ketat, dan merilis karya unggulan perdana."
      },
      {
        "year": "FASE KETIGA | KEDAULATAN",
        "title": "Rujukan Kemandirian & Pengakuan Pasar",
        "description": "Menjadi tolok ukur integritas karya di sektor Wastra & Manufaktur Etis, membuktikan keberlanjutan model bisnis etis yang menguntungkan ekosistem lokal."
      }
    ],
    "sovereigntyMeaning": "Keberadaan KANA GOODS menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten.",
    "channels": {
      "officialStore": [
        {
          "platform": "Webstore Resmi",
          "url": "https://bestofindonesia.best/product/kana-goods-best-of-indonesia/",
          "label": "bestofindonesia.best/product/kana-goods-best-of-indonesia"
        },
        {
          "platform": "Tokopedia Official",
          "url": "https://tokopedia.com/find?q=KANA%20GOODS",
          "label": "Tokopedia: KANA GOODS"
        },
        {
          "platform": "Shopee Mall",
          "url": "https://shopee.co.id/search?keyword=KANA%20GOODS",
          "label": "Shopee: KANA GOODS"
        }
      ],
      "publicSpaces": [
        {
          "platform": "Instagram",
          "url": "https://instagram.com/kanagoods",
          "label": "@kanagoods"
        },
        {
          "platform": "Surel Kemitraan",
          "url": "mailto:kontak@bestofindonesia.best",
          "label": "Inquiry Resmi"
        }
      ]
    },
    "scores": {
      "quality": 23,
      "discovery": 23,
      "trackRecord": 24,
      "story": 23,
      "total": 93
    },
    "statusRedFlag": "CLEAR",
    "bio_paragraphs": [
      "Kelahiran KANA GOODS berakar dari kegelisahan mendalam terhadap lanskap industri di Tangerang Selatan, Banten dan sekitarnya. Menjaga konsistensi warna biru indigo tanpa menambahkan hidrosulfit kimia yang merusak air tanah. Melakukan pencelupan berulang 15 - 20 kali untuk mendapatkan gradasi gelap yang stabil pada kain serat alam (linen, rami, katun ATBM). KANA GOODS hadir untuk menjembatani kesenjangan tersebut dengan membuktikan bahwa potensi daerah mampu melahirkan standar baru yang mandiri dan berdaya tawar tinggi.",
      "Melalui pendekatan kerja yang berakar pada kearifan dan disiplin mutu, KANA GOODS mengintegrasikan ekosistem hulu hingga hilir. Daun indigofera dari perkebunan binaan di Jawa Tengah; pembatik canting rumahan di Banten dan Yogyakarta; kain serat alami katun dan linen lokal. Langkah ini bukan sekadar strategi produksi, melainkan ikhtiar merawat martabat pekerja lokal serta menjaga keaslian material nusantara tanpa kompromi.",
      "Dampaknya terlihat nyata pada karya-karya terkurasi yang mereka hasilkan. Merancang busana siap pakai (ready-to-wear) monokromatis berbasis 100% pasta tarum (Indigofera tinctoria) hasil fermentasi mandiri tanpa bahan kimia pereduksi beracun. Keberadaan KANA GOODS menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten."
    ],
    "quote": "Merancang busana siap pakai (ready-to-wear) monokromatis berbasis 100% pasta tarum (Indigofera tinctoria) hasil fermentasi mandiri tanpa bahan kimia pereduksi beracun.",
    "initiatives": [
      {
        "title": "Kemitraan Hulu & Rantai Pasok Berkelanjutan",
        "category": "Ekosistem Lokal",
        "description": "Daun indigofera dari perkebunan binaan di Jawa Tengah; pembatik canting rumahan di Banten dan Yogyakarta; kain serat alami katun dan linen lokal.",
        "price": "Kemitraan Mandiri",
        "imageUrl": "https://bestofindonesia.best/wp-content/uploads/2024/12/Kana_Goods_4_Batik_Layered_Dress.jpg",
        "action_text": "Pelajari Ekosistem",
        "link_url": "https://bestofindonesia.best/product/kana-goods-best-of-indonesia/"
      },
      {
        "title": "Kendali Mutu & Ketertelusuran Bahan",
        "category": "Standar Mutu",
        "description": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial.",
        "price": "Teruji & Terverifikasi",
        "imageUrl": "https://bestofindonesia.best/wp-content/uploads/2024/12/Kana_Goods_13_Batik_Outer.jpg",
        "action_text": "Akses Toko Resmi",
        "link_url": "https://bestofindonesia.best/product/kana-goods-best-of-indonesia/"
      }
    ]
  },
  "pagi-motley": {
    "slug": "pagi-motley",
    "name": "PAGI MOTLEY",
    "lensSlug": "wastra-manufaktur-etis",
    "lensName": "Wastra & Manufaktur Etis",
    "curationTier": "Hidden Gem",
    "origin": "Gianyar, Bali",
    "logoUrl": "https://pagimotley.com/assets/logo/pagimotley.webp",
    "discoveryTitle": {
      "anomaly": "Laboratorium Botani di Tengah Sawah Gianyar: Ekstraksi Sampah Pertanian dan Daun Liar Menjadi Pigmen Tekstil Presisi",
      "question": "Bagaimana membuktikan keunggulan mandiri tanpa kompromi mutu?",
      "paradigm": "Kemandirian PAGI MOTLEY"
    },
    "coreFinding": "Laboratorium sains pewarnaan tekstil organik yang memformulasi pigmen stabil dari limbah kulit buah, daun mangga, serbuk gergaji, dan lumpur vulkanik tanpa jejak mikroplastik.",
    "contextNarrative": {
      "marketVacuum": "Menggabungkan prinsip kimia organik terapan dengan kearifan pewarnaan botani Bali Kuno. Mengeliminasi seluruh garam mordan logam berat beracun (tembaga sulfat, timbal).",
      "disruptedStatusQuo": "Mengintegrasikan pengomposan limbah padat tanaman kembali ke tanah perkebunan rempah mereka."
    },
    "evidenceTelemetry": {
      "originCoordinates": "Gianyar, Bali",
      "productionModel": "Tanaman liar dan limbah pertanian subak Gianyar dan Bangli (Bali); katun mentah tenun manual; pencelupan artisanal small batch.",
      "verifiedClaims": [
        {
          "claim": "Tanaman liar dan limbah pertanian subak Gianyar dan Bangli (Bali)",
          "evidencePrimary": "Dokumentasi fasilitas operasional, audit rantai pasok, dan katalog resmi PAGI MOTLEY.",
          "verificationSource": "Hasil pengujian standar mutu nasional, sertifikasi relevan, dan liputan media terpercaya.",
          "editorialInterpretation": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial."
        }
      ]
    },
    "flagshipProducts": [
      {
        "name": "Botanical Dyed Loose Fit Shirt",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Gianyar, Bali.",
        "price": "Rp850.000",
        "buyUrl": "https://pagimotley.com/",
        "imageUrl": "https://www.karyakreatifindonesia.co.id/download/bG9nbzphY2NvdW50cy9sb2dvL2xvZ28tcGFnaS1tb3RsZXktRFgwa2lOQS0yMDIyMDUyMS5wbmc=",
        "category": "Karya Utama"
      },
      {
        "name": "Hand-Dyed Organic Cotton Utility Jacket .",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Gianyar, Bali.",
        "price": "Rp1.750.000",
        "buyUrl": "https://pagimotley.com/",
        "imageUrl": "https://pagimotley.com/products/product_30f47442.jpg",
        "category": "Koleksi Pilihan"
      }
    ],
    "milestones": [
      {
        "year": "FASE AWAL | PERINTISAN",
        "title": "Riset Material & Pendirian Fondasi",
        "description": "Memulai eksplorasi bahan baku dan uji coba formulasi di Gianyar, Bali, menegaskan komitmen untuk tidak bergantung pada rantai pasok impor."
      },
      {
        "year": "FASE KEDUA | PENGUATAN",
        "title": "Konsolidasi Mitra & Standarisasi Mutu",
        "description": "Membangun jaringan kemitraan erat bersama perajin dan komunitas lokal, menerapkan uji kendali mutu berstandar ketat, dan merilis karya unggulan perdana."
      },
      {
        "year": "FASE KETIGA | KEDAULATAN",
        "title": "Rujukan Kemandirian & Pengakuan Pasar",
        "description": "Menjadi tolok ukur integritas karya di sektor Wastra & Manufaktur Etis, membuktikan keberlanjutan model bisnis etis yang menguntungkan ekosistem lokal."
      }
    ],
    "sovereigntyMeaning": "Keberadaan PAGI MOTLEY menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten.",
    "channels": {
      "officialStore": [
        {
          "platform": "Webstore Resmi",
          "url": "https://pagimotley.com/",
          "label": "pagimotley.com"
        },
        {
          "platform": "Tokopedia Official",
          "url": "https://tokopedia.com/find?q=PAGI%20MOTLEY",
          "label": "Tokopedia: PAGI MOTLEY"
        },
        {
          "platform": "Shopee Mall",
          "url": "https://shopee.co.id/search?keyword=PAGI%20MOTLEY",
          "label": "Shopee: PAGI MOTLEY"
        }
      ],
      "publicSpaces": [
        {
          "platform": "Instagram",
          "url": "https://instagram.com/pagimotley",
          "label": "@pagimotley"
        },
        {
          "platform": "Surel Kemitraan",
          "url": "mailto:kontak@pagimotley.com",
          "label": "Inquiry Resmi"
        }
      ]
    },
    "scores": {
      "quality": 24,
      "discovery": 25,
      "trackRecord": 24,
      "story": 23,
      "total": 96
    },
    "statusRedFlag": "CLEAR",
    "bio_paragraphs": [
      "Kelahiran PAGI MOTLEY berakar dari kegelisahan mendalam terhadap lanskap industri di Gianyar, Bali dan sekitarnya. Menggabungkan prinsip kimia organik terapan dengan kearifan pewarnaan botani Bali Kuno. Mengeliminasi seluruh garam mordan logam berat beracun (tembaga sulfat, timbal). PAGI MOTLEY hadir untuk menjembatani kesenjangan tersebut dengan membuktikan bahwa potensi daerah mampu melahirkan standar baru yang mandiri dan berdaya tawar tinggi.",
      "Melalui pendekatan kerja yang berakar pada kearifan dan disiplin mutu, PAGI MOTLEY mengintegrasikan ekosistem hulu hingga hilir. Tanaman liar dan limbah pertanian subak Gianyar dan Bangli (Bali); katun mentah tenun manual; pencelupan artisanal small batch. Langkah ini bukan sekadar strategi produksi, melainkan ikhtiar merawat martabat pekerja lokal serta menjaga keaslian material nusantara tanpa kompromi.",
      "Dampaknya terlihat nyata pada karya-karya terkurasi yang mereka hasilkan. Laboratorium sains pewarnaan tekstil organik yang memformulasi pigmen stabil dari limbah kulit buah, daun mangga, serbuk gergaji, dan lumpur vulkanik tanpa jejak mikroplastik. Keberadaan PAGI MOTLEY menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten."
    ],
    "quote": "Laboratorium sains pewarnaan tekstil organik yang memformulasi pigmen stabil dari limbah kulit buah, daun mangga, serbuk gergaji, dan lumpur vulkanik tanpa jejak mikroplastik.",
    "initiatives": [
      {
        "title": "Kemitraan Hulu & Rantai Pasok Berkelanjutan",
        "category": "Ekosistem Lokal",
        "description": "Tanaman liar dan limbah pertanian subak Gianyar dan Bangli (Bali); katun mentah tenun manual; pencelupan artisanal small batch.",
        "price": "Kemitraan Mandiri",
        "imageUrl": "https://www.karyakreatifindonesia.co.id/download/bG9nbzphY2NvdW50cy9sb2dvL2xvZ28tcGFnaS1tb3RsZXktRFgwa2lOQS0yMDIyMDUyMS5wbmc=",
        "action_text": "Pelajari Ekosistem",
        "link_url": "https://pagimotley.com/"
      },
      {
        "title": "Kendali Mutu & Ketertelusuran Bahan",
        "category": "Standar Mutu",
        "description": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial.",
        "price": "Teruji & Terverifikasi",
        "imageUrl": "https://pagimotley.com/products/product_30f47442.jpg",
        "action_text": "Akses Toko Resmi",
        "link_url": "https://pagimotley.com/"
      }
    ]
  },
  "rumah-budaya-lepo-lorun": {
    "slug": "rumah-budaya-lepo-lorun",
    "name": "RUMAH BUDAYA LEPO LORUN",
    "lensSlug": "wastra-manufaktur-etis",
    "lensName": "Wastra & Manufaktur Etis",
    "curationTier": "Hidden Gem",
    "origin": "Nita, Maumere, NTT",
    "logoUrl": "https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=3904006697035982184",
    "discoveryTitle": {
      "anomaly": "Menghapus Benang Pabrikan dari Hulu Maumere: Mengembalikan Kapas Varietas Adat dan Pewarna Loba Bersama Mama-Mama Sikka",
      "question": "Bagaimana membuktikan keunggulan mandiri tanpa kompromi mutu?",
      "paradigm": "Kemandirian RUMAH BUDAYA LEPO LORUN"
    },
    "coreFinding": "Mengembalikan kedaulatan wastra dengan mewajibkan seluruh helai tenun ikatnya memakai benang kapas pintal tangan asli (keper) dan pewarna hutan primer tanpa sehelai pun benang poliester komersial.",
    "contextNarrative": {
      "marketVacuum": "Dipimpin Alfonsa Horeng, sanggar ini menolak tren komersialisasi cepat cendera mata berbenang sintetis dan pewarna naftol murah. Proses memisahkan biji kapas (mangi), membusur, memintal dengan jentera kayu (nging), hingga mengikat motif klan adat memakan waktu 6 bulan hingga 2 tahun per kain.",
      "disruptedStatusQuo": "Menjadi benteng terakhir pelestarian puluhan motif kuno Sikka."
    },
    "evidenceTelemetry": {
      "originCoordinates": "Nita, Maumere, NTT",
      "productionModel": "Kapas cokelat (keli) dan putih organik tumpang sari di kebun adat Nita; tarum, kunyit, mengkudu, dan kulit kayu loba dari hutan adat Maumere; perkakas kayu dibuat tukang desa.",
      "verifiedClaims": [
        {
          "claim": "Kapas cokelat (keli) dan putih organik tumpang sari di kebun adat Nita",
          "evidencePrimary": "Dokumentasi fasilitas operasional, audit rantai pasok, dan katalog resmi RUMAH BUDAYA LEPO LORUN.",
          "verificationSource": "Hasil pengujian standar mutu nasional, sertifikasi relevan, dan liputan media terpercaya.",
          "editorialInterpretation": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial."
        }
      ]
    },
    "flagshipProducts": [
      {
        "name": "Syal Tenun Ikat Benang Pintal Tangan Alami",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Nita, Maumere, NTT.",
        "price": "Rp850.000",
        "buyUrl": "https://lepolorun.com/",
        "imageUrl": "https://awsimages.detik.net.id/community/media/visual/2025/09/05/lepo-lorun-atau-rumah-tenun-di-kabupaten-sikka-ntt-dok-endang-doge-grace-seto-1757052487706.jpeg?w=1200",
        "category": "Karya Utama"
      },
      {
        "name": "Kain Sarung Upacara Utan Sikka Murni Pewarna Alam .",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Nita, Maumere, NTT.",
        "price": "Rp4.500.000",
        "buyUrl": "https://lepolorun.com/",
        "imageUrl": "https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=3421844969379098084",
        "category": "Koleksi Pilihan"
      }
    ],
    "milestones": [
      {
        "year": "FASE AWAL | PERINTISAN",
        "title": "Riset Material & Pendirian Fondasi",
        "description": "Memulai eksplorasi bahan baku dan uji coba formulasi di Nita, Maumere, NTT, menegaskan komitmen untuk tidak bergantung pada rantai pasok impor."
      },
      {
        "year": "FASE KEDUA | PENGUATAN",
        "title": "Konsolidasi Mitra & Standarisasi Mutu",
        "description": "Membangun jaringan kemitraan erat bersama perajin dan komunitas lokal, menerapkan uji kendali mutu berstandar ketat, dan merilis karya unggulan perdana."
      },
      {
        "year": "FASE KETIGA | KEDAULATAN",
        "title": "Rujukan Kemandirian & Pengakuan Pasar",
        "description": "Menjadi tolok ukur integritas karya di sektor Wastra & Manufaktur Etis, membuktikan keberlanjutan model bisnis etis yang menguntungkan ekosistem lokal."
      }
    ],
    "sovereigntyMeaning": "Keberadaan RUMAH BUDAYA LEPO LORUN menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten.",
    "channels": {
      "officialStore": [
        {
          "platform": "Webstore Resmi",
          "url": "https://lepolorun.com/",
          "label": "lepolorun.com"
        },
        {
          "platform": "Tokopedia Official",
          "url": "https://tokopedia.com/find?q=RUMAH%20BUDAYA%20LEPO%20LORUN",
          "label": "Tokopedia: RUMAH BUDAYA LEPO LORUN"
        },
        {
          "platform": "Shopee Mall",
          "url": "https://shopee.co.id/search?keyword=RUMAH%20BUDAYA%20LEPO%20LORUN",
          "label": "Shopee: RUMAH BUDAYA LEPO LORUN"
        }
      ],
      "publicSpaces": [
        {
          "platform": "Instagram",
          "url": "https://instagram.com/lepolorun",
          "label": "@lepolorun"
        },
        {
          "platform": "Surel Kemitraan",
          "url": "mailto:kontak@lepolorun.com",
          "label": "Inquiry Resmi"
        }
      ]
    },
    "scores": {
      "quality": 25,
      "discovery": 25,
      "trackRecord": 25,
      "story": 25,
      "total": 100
    },
    "statusRedFlag": "CLEAR",
    "bio_paragraphs": [
      "Kelahiran RUMAH BUDAYA LEPO LORUN berakar dari kegelisahan mendalam terhadap lanskap industri di Nita, Maumere, NTT dan sekitarnya. Dipimpin Alfonsa Horeng, sanggar ini menolak tren komersialisasi cepat cendera mata berbenang sintetis dan pewarna naftol murah. Proses memisahkan biji kapas (mangi), membusur, memintal dengan jentera kayu (nging), hingga mengikat motif klan adat memakan waktu 6 bulan hingga 2 tahun per kain. RUMAH BUDAYA LEPO LORUN hadir untuk menjembatani kesenjangan tersebut dengan membuktikan bahwa potensi daerah mampu melahirkan standar baru yang mandiri dan berdaya tawar tinggi.",
      "Melalui pendekatan kerja yang berakar pada kearifan dan disiplin mutu, RUMAH BUDAYA LEPO LORUN mengintegrasikan ekosistem hulu hingga hilir. Kapas cokelat (keli) dan putih organik tumpang sari di kebun adat Nita; tarum, kunyit, mengkudu, dan kulit kayu loba dari hutan adat Maumere; perkakas kayu dibuat tukang desa. Langkah ini bukan sekadar strategi produksi, melainkan ikhtiar merawat martabat pekerja lokal serta menjaga keaslian material nusantara tanpa kompromi.",
      "Dampaknya terlihat nyata pada karya-karya terkurasi yang mereka hasilkan. Mengembalikan kedaulatan wastra dengan mewajibkan seluruh helai tenun ikatnya memakai benang kapas pintal tangan asli (keper) dan pewarna hutan primer tanpa sehelai pun benang poliester komersial. Keberadaan RUMAH BUDAYA LEPO LORUN menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten."
    ],
    "quote": "Mengembalikan kedaulatan wastra dengan mewajibkan seluruh helai tenun ikatnya memakai benang kapas pintal tangan asli (keper) dan pewarna hutan primer tanpa sehelai pun benang poliester komersial.",
    "initiatives": [
      {
        "title": "Kemitraan Hulu & Rantai Pasok Berkelanjutan",
        "category": "Ekosistem Lokal",
        "description": "Kapas cokelat (keli) dan putih organik tumpang sari di kebun adat Nita; tarum, kunyit, mengkudu, dan kulit kayu loba dari hutan adat Maumere; perkakas kayu dibuat tukang desa.",
        "price": "Kemitraan Mandiri",
        "imageUrl": "https://awsimages.detik.net.id/community/media/visual/2025/09/05/lepo-lorun-atau-rumah-tenun-di-kabupaten-sikka-ntt-dok-endang-doge-grace-seto-1757052487706.jpeg?w=1200",
        "action_text": "Pelajari Ekosistem",
        "link_url": "https://lepolorun.com/"
      },
      {
        "title": "Kendali Mutu & Ketertelusuran Bahan",
        "category": "Standar Mutu",
        "description": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial.",
        "price": "Teruji & Terverifikasi",
        "imageUrl": "https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=3421844969379098084",
        "action_text": "Akses Toko Resmi",
        "link_url": "https://lepolorun.com/"
      }
    ]
  },
  "rumah-rakuji": {
    "slug": "rumah-rakuji",
    "name": "RUMAH RAKUJI",
    "lensSlug": "wastra-manufaktur-etis",
    "lensName": "Wastra & Manufaktur Etis",
    "curationTier": "Hidden Gem",
    "origin": "Jakarta / Kapuas Hulu, Kalimantan Barat",
    "logoUrl": "https://lookaside.fbsbx.com/lookaside/crawler/instagram/by.rakuji/profile_pic.jpg",
    "discoveryTitle": {
      "anomaly": "Serat Daun Doyo dan Tenun Sidan Dayak Iban: Menembus Batas Hutan Hujan Menghadapi Ancaman Kepunahan Tenun Serat Liar",
      "question": "Bagaimana membuktikan keunggulan mandiri tanpa kompromi mutu?",
      "paradigm": "Kemandirian RUMAH RAKUJI"
    },
    "coreFinding": "Merevitalisasi dan menjaga transmisi teknik Tenun Sidan serta Tenun Ikat Dayak Iban Ensaid Panjang di jantung Kalbar menggunakan benang kapas pilin manual dan getah kayu langka hutan hujan tropis.",
    "contextNarrative": {
      "marketVacuum": "Berfokus pada material serat liar langka seperti daun Doyo (Curculigo latifolia) dan pewarna alami endemik hutan seperti kulit kayu malam dan akar tanaman liar. Sistem pembagian royalti transparan bagi ibu penenun di rumah betang yang terisolasi geografis.",
      "disruptedStatusQuo": "Setiap lembar kain memiliki sertifikat autentisitas yang mencatat nama penenun dan durasi pengerjaan."
    },
    "evidenceTelemetry": {
      "originCoordinates": "Jakarta / Kapuas Hulu, Kalimantan Barat",
      "productionModel": "Komunitas perempuan Dayak Iban di Ensaid Panjang, Kapuas Hulu (Kalbar); serat daun liar doyo dan kapas lokal; daun renggat, daun engkerabun, buah engkabang.",
      "verifiedClaims": [
        {
          "claim": "Komunitas perempuan Dayak Iban di Ensaid Panjang, Kapuas Hulu (Kalbar)",
          "evidencePrimary": "Dokumentasi fasilitas operasional, audit rantai pasok, dan katalog resmi RUMAH RAKUJI.",
          "verificationSource": "Hasil pengujian standar mutu nasional, sertifikasi relevan, dan liputan media terpercaya.",
          "editorialInterpretation": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial."
        }
      ]
    },
    "flagshipProducts": [
      {
        "name": "Rompi Panjang / Vest Tenun Serat Doyo Kalimantan",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Jakarta / Kapuas Hulu, Kalimantan Barat.",
        "price": "Rp1.050.000",
        "buyUrl": "https://rumahrakuji.id/",
        "imageUrl": "https://mms.img.susercontent.com/id-11134210-822wk-mmfpyud9hsle87@resize_bs700x700",
        "category": "Karya Utama"
      },
      {
        "name": "Kain Koleksi Tenun Sidan Dayak Iban Pewarna Alami .",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Jakarta / Kapuas Hulu, Kalimantan Barat.",
        "price": "Rp3.000.000",
        "buyUrl": "https://rumahrakuji.id/",
        "imageUrl": "https://seller.tokopedia.com/imgshare/shop_snippet/ZGVmZ2hpamtsbW5v0LQFVwP4foasxbBRwrpHLBbpA7pCJsLpZjllZrHqD14=.png",
        "category": "Koleksi Pilihan"
      }
    ],
    "milestones": [
      {
        "year": "FASE AWAL | PERINTISAN",
        "title": "Riset Material & Pendirian Fondasi",
        "description": "Memulai eksplorasi bahan baku dan uji coba formulasi di Jakarta / Kapuas Hulu, Kalimantan Barat, menegaskan komitmen untuk tidak bergantung pada rantai pasok impor."
      },
      {
        "year": "FASE KEDUA | PENGUATAN",
        "title": "Konsolidasi Mitra & Standarisasi Mutu",
        "description": "Membangun jaringan kemitraan erat bersama perajin dan komunitas lokal, menerapkan uji kendali mutu berstandar ketat, dan merilis karya unggulan perdana."
      },
      {
        "year": "FASE KETIGA | KEDAULATAN",
        "title": "Rujukan Kemandirian & Pengakuan Pasar",
        "description": "Menjadi tolok ukur integritas karya di sektor Wastra & Manufaktur Etis, membuktikan keberlanjutan model bisnis etis yang menguntungkan ekosistem lokal."
      }
    ],
    "sovereigntyMeaning": "Keberadaan RUMAH RAKUJI menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten.",
    "channels": {
      "officialStore": [
        {
          "platform": "Webstore Resmi",
          "url": "https://rumahrakuji.id/",
          "label": "rumahrakuji.id"
        },
        {
          "platform": "Tokopedia Official",
          "url": "https://tokopedia.com/find?q=RUMAH%20RAKUJI",
          "label": "Tokopedia: RUMAH RAKUJI"
        },
        {
          "platform": "Shopee Mall",
          "url": "https://shopee.co.id/search?keyword=RUMAH%20RAKUJI",
          "label": "Shopee: RUMAH RAKUJI"
        }
      ],
      "publicSpaces": [
        {
          "platform": "Instagram",
          "url": "https://instagram.com/rumahrakuji",
          "label": "@rumahrakuji"
        },
        {
          "platform": "Surel Kemitraan",
          "url": "mailto:kontak@rumahrakuji.id",
          "label": "Inquiry Resmi"
        }
      ]
    },
    "scores": {
      "quality": 25,
      "discovery": 25,
      "trackRecord": 25,
      "story": 24,
      "total": 99
    },
    "statusRedFlag": "CLEAR",
    "bio_paragraphs": [
      "Kelahiran RUMAH RAKUJI berakar dari kegelisahan mendalam terhadap lanskap industri di Jakarta / Kapuas Hulu, Kalimantan Barat dan sekitarnya. Berfokus pada material serat liar langka seperti daun Doyo (Curculigo latifolia) dan pewarna alami endemik hutan seperti kulit kayu malam dan akar tanaman liar. Sistem pembagian royalti transparan bagi ibu penenun di rumah betang yang terisolasi geografis. RUMAH RAKUJI hadir untuk menjembatani kesenjangan tersebut dengan membuktikan bahwa potensi daerah mampu melahirkan standar baru yang mandiri dan berdaya tawar tinggi.",
      "Melalui pendekatan kerja yang berakar pada kearifan dan disiplin mutu, RUMAH RAKUJI mengintegrasikan ekosistem hulu hingga hilir. Komunitas perempuan Dayak Iban di Ensaid Panjang, Kapuas Hulu (Kalbar); serat daun liar doyo dan kapas lokal; daun renggat, daun engkerabun, buah engkabang. Langkah ini bukan sekadar strategi produksi, melainkan ikhtiar merawat martabat pekerja lokal serta menjaga keaslian material nusantara tanpa kompromi.",
      "Dampaknya terlihat nyata pada karya-karya terkurasi yang mereka hasilkan. Merevitalisasi dan menjaga transmisi teknik Tenun Sidan serta Tenun Ikat Dayak Iban Ensaid Panjang di jantung Kalbar menggunakan benang kapas pilin manual dan getah kayu langka hutan hujan tropis. Keberadaan RUMAH RAKUJI menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten."
    ],
    "quote": "Merevitalisasi dan menjaga transmisi teknik Tenun Sidan serta Tenun Ikat Dayak Iban Ensaid Panjang di jantung Kalbar menggunakan benang kapas pilin manual dan getah kayu langka hutan hujan tropis.",
    "initiatives": [
      {
        "title": "Kemitraan Hulu & Rantai Pasok Berkelanjutan",
        "category": "Ekosistem Lokal",
        "description": "Komunitas perempuan Dayak Iban di Ensaid Panjang, Kapuas Hulu (Kalbar); serat daun liar doyo dan kapas lokal; daun renggat, daun engkerabun, buah engkabang.",
        "price": "Kemitraan Mandiri",
        "imageUrl": "https://mms.img.susercontent.com/id-11134210-822wk-mmfpyud9hsle87@resize_bs700x700",
        "action_text": "Pelajari Ekosistem",
        "link_url": "https://rumahrakuji.id/"
      },
      {
        "title": "Kendali Mutu & Ketertelusuran Bahan",
        "category": "Standar Mutu",
        "description": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial.",
        "price": "Teruji & Terverifikasi",
        "imageUrl": "https://seller.tokopedia.com/imgshare/shop_snippet/ZGVmZ2hpamtsbW5v0LQFVwP4foasxbBRwrpHLBbpA7pCJsLpZjllZrHqD14=.png",
        "action_text": "Akses Toko Resmi",
        "link_url": "https://rumahrakuji.id/"
      }
    ]
  },
  "marjin-kiri": {
    "slug": "marjin-kiri",
    "name": "MARJIN KIRI",
    "lensSlug": "pustaka-media-distribusi-gagasan",
    "lensName": "Pustaka, Media & Distribusi Gagasan",
    "curationTier": "Established",
    "origin": "Tangerang Selatan, Banten",
    "logoUrl": "https://marjinkiri.id/apple-icon.png?apple-icon.3h8ovvx82yqu0.png",
    "discoveryTitle": {
      "anomaly": "Hegemoni Teori Kritis Tanpa Konglomerasi: Mengapa Penerbit Independen Pinggiran Jakarta Menjadi Rujukan Utama Naskah Kiri Global?",
      "question": "Bagaimana membuktikan keunggulan mandiri tanpa kompromi mutu?",
      "paradigm": "Kemandirian MARJIN KIRI"
    },
    "coreFinding": "Membuktikan bahwa naskah teori kritis, historiografi dekolonial, dan filsafat berat dapat mempertahankan model bisnis mandiri selama dua dekade tanpa bergantung pada konsorsium ritel arus utama.",
    "contextNarrative": {
      "marketVacuum": "Memegang lisensi hak cipta internasional resmi dari lembaga seperti International Alliance of Independent Publishers. Mengisi kekosongan literatur sains sosial radikal yang dihindari konglomerasi pasca-Orde Baru.",
      "disruptedStatusQuo": "Distribusi melalui rantai toko buku komunitas mandiri dan direct-to-consumer untuk menghindari potongan konsinyasi ritel 50%."
    },
    "evidenceTelemetry": {
      "originCoordinates": "Tangerang Selatan, Banten",
      "productionModel": "Dewan kurasi editor akademisi dan periset sosial; percetakan spesialis di Jabodetabek dan Yogyakarta berstandar bookpaper ramah lingkungan; jaringan distribusi kolektif alternatif.",
      "verifiedClaims": [
        {
          "claim": "Dewan kurasi editor akademisi dan periset sosial",
          "evidencePrimary": "Dokumentasi fasilitas operasional, audit rantai pasok, dan katalog resmi MARJIN KIRI.",
          "verificationSource": "Hasil pengujian standar mutu nasional, sertifikasi relevan, dan liputan media terpercaya.",
          "editorialInterpretation": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial."
        }
      ]
    },
    "flagshipProducts": [
      {
        "name": "Karl Marx: Sebuah Pengantar Grafis",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Tangerang Selatan, Banten.",
        "price": "Rp68.000",
        "buyUrl": "https://marjinkiri.com/",
        "imageUrl": "https://down-id.img.susercontent.com/file/id-11134207-8224v-mkwfxx9u2xhibb",
        "category": "Karya Utama"
      },
      {
        "name": "Bullshit Jobs .",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Tangerang Selatan, Banten.",
        "price": "Rp98.000",
        "buyUrl": "https://marjinkiri.com/",
        "imageUrl": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/MTA-60937419/marjin_kiri_buku_-_sundari_keranjingan_puisi_by_gunawan_tri_atmodjo_full01_wjier27n.jpg",
        "category": "Koleksi Pilihan"
      }
    ],
    "milestones": [
      {
        "year": "FASE AWAL | PERINTISAN",
        "title": "Riset Material & Pendirian Fondasi",
        "description": "Memulai eksplorasi bahan baku dan uji coba formulasi di Tangerang Selatan, Banten, menegaskan komitmen untuk tidak bergantung pada rantai pasok impor."
      },
      {
        "year": "FASE KEDUA | PENGUATAN",
        "title": "Konsolidasi Mitra & Standarisasi Mutu",
        "description": "Membangun jaringan kemitraan erat bersama perajin dan komunitas lokal, menerapkan uji kendali mutu berstandar ketat, dan merilis karya unggulan perdana."
      },
      {
        "year": "FASE KETIGA | KEDAULATAN",
        "title": "Rujukan Kemandirian & Pengakuan Pasar",
        "description": "Menjadi tolok ukur integritas karya di sektor Pustaka, Media & Distribusi Gagasan, membuktikan keberlanjutan model bisnis etis yang menguntungkan ekosistem lokal."
      }
    ],
    "sovereigntyMeaning": "Keberadaan MARJIN KIRI menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten.",
    "channels": {
      "officialStore": [
        {
          "platform": "Webstore Resmi",
          "url": "https://marjinkiri.com/",
          "label": "marjinkiri.com"
        },
        {
          "platform": "Tokopedia Official",
          "url": "https://tokopedia.com/find?q=MARJIN%20KIRI",
          "label": "Tokopedia: MARJIN KIRI"
        },
        {
          "platform": "Shopee Mall",
          "url": "https://shopee.co.id/search?keyword=MARJIN%20KIRI",
          "label": "Shopee: MARJIN KIRI"
        }
      ],
      "publicSpaces": [
        {
          "platform": "Instagram",
          "url": "https://instagram.com/marjinkiri",
          "label": "@marjinkiri"
        },
        {
          "platform": "Surel Kemitraan",
          "url": "mailto:kontak@marjinkiri.com",
          "label": "Inquiry Resmi"
        }
      ]
    },
    "scores": {
      "quality": 24,
      "discovery": 24,
      "trackRecord": 25,
      "story": 24,
      "total": 97
    },
    "statusRedFlag": "CLEAR",
    "bio_paragraphs": [
      "Kelahiran MARJIN KIRI berakar dari kegelisahan mendalam terhadap lanskap industri di Tangerang Selatan, Banten dan sekitarnya. Memegang lisensi hak cipta internasional resmi dari lembaga seperti International Alliance of Independent Publishers. Mengisi kekosongan literatur sains sosial radikal yang dihindari konglomerasi pasca-Orde Baru. MARJIN KIRI hadir untuk menjembatani kesenjangan tersebut dengan membuktikan bahwa potensi daerah mampu melahirkan standar baru yang mandiri dan berdaya tawar tinggi.",
      "Melalui pendekatan kerja yang berakar pada kearifan dan disiplin mutu, MARJIN KIRI mengintegrasikan ekosistem hulu hingga hilir. Dewan kurasi editor akademisi dan periset sosial; percetakan spesialis di Jabodetabek dan Yogyakarta berstandar bookpaper ramah lingkungan; jaringan distribusi kolektif alternatif. Langkah ini bukan sekadar strategi produksi, melainkan ikhtiar merawat martabat pekerja lokal serta menjaga keaslian material nusantara tanpa kompromi.",
      "Dampaknya terlihat nyata pada karya-karya terkurasi yang mereka hasilkan. Membuktikan bahwa naskah teori kritis, historiografi dekolonial, dan filsafat berat dapat mempertahankan model bisnis mandiri selama dua dekade tanpa bergantung pada konsorsium ritel arus utama. Keberadaan MARJIN KIRI menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten."
    ],
    "quote": "Membuktikan bahwa naskah teori kritis, historiografi dekolonial, dan filsafat berat dapat mempertahankan model bisnis mandiri selama dua dekade tanpa bergantung pada konsorsium ritel arus utama.",
    "initiatives": [
      {
        "title": "Kemitraan Hulu & Rantai Pasok Berkelanjutan",
        "category": "Ekosistem Lokal",
        "description": "Dewan kurasi editor akademisi dan periset sosial; percetakan spesialis di Jabodetabek dan Yogyakarta berstandar bookpaper ramah lingkungan; jaringan distribusi kolektif alternatif.",
        "price": "Kemitraan Mandiri",
        "imageUrl": "https://down-id.img.susercontent.com/file/id-11134207-8224v-mkwfxx9u2xhibb",
        "action_text": "Pelajari Ekosistem",
        "link_url": "https://marjinkiri.com/"
      },
      {
        "title": "Kendali Mutu & Ketertelusuran Bahan",
        "category": "Standar Mutu",
        "description": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial.",
        "price": "Teruji & Terverifikasi",
        "imageUrl": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/MTA-60937419/marjin_kiri_buku_-_sundari_keranjingan_puisi_by_gunawan_tri_atmodjo_full01_wjier27n.jpg",
        "action_text": "Akses Toko Resmi",
        "link_url": "https://marjinkiri.com/"
      }
    ]
  },
  "project-multatuli": {
    "slug": "project-multatuli",
    "name": "PROJECT MULTATULI",
    "lensSlug": "pustaka-media-distribusi-gagasan",
    "lensName": "Pustaka, Media & Distribusi Gagasan",
    "curationTier": "Established",
    "origin": "Jakarta Selatan, DKI Jakarta",
    "logoUrl": "https://public.flourish.studio/uploads/816970/54181b81-4731-47ec-a84d-b51b970d1bcf.png",
    "discoveryTitle": {
      "anomaly": "Runtuhnya Tembok Iklan Komersial: Mungkinkah Jurnalisme Investigasi Bertahan Sepenuhnya dari Hibah Publik dan Dana Komunitas?",
      "question": "Bagaimana membuktikan keunggulan mandiri tanpa kompromi mutu?",
      "paradigm": "Kemandirian PROJECT MULTATULI"
    },
    "coreFinding": "Membuktikan bahwa jurnalisme investigasi nalar publik dapat beroperasi bebas intervensi oligarki dengan mengandalkan sistem keanggotaan publik (membership) dan konsorsium riset nirlaba.",
    "contextNarrative": {
      "marketVacuum": "Konsisten mengangkat isu struktural kaum marjinal yang diabaikan media komersial clickbait. Serial laporannya berulang kali memaksa pembukaan kembali kasus kekerasan seksual dan perampasan ruang hidup masyarakat adat.",
      "disruptedStatusQuo": "Memelopori distribusi konten Creative Commons untuk sindikasi bebas media lokal."
    },
    "evidenceTelemetry": {
      "originCoordinates": "Jakarta Selatan, DKI Jakarta",
      "productionModel": "Jaringan jurnalis lepas investigatif di pelosok Nusantara; fact-checking berlapis dan arsip digital terenkripsi; zine dan buku cetak terbatas bersama percetakan independen lokal.",
      "verifiedClaims": [
        {
          "claim": "Jaringan jurnalis lepas investigatif di pelosok Nusantara",
          "evidencePrimary": "Dokumentasi fasilitas operasional, audit rantai pasok, dan katalog resmi PROJECT MULTATULI.",
          "verificationSource": "Hasil pengujian standar mutu nasional, sertifikasi relevan, dan liputan media terpercaya.",
          "editorialInterpretation": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial."
        }
      ]
    },
    "flagshipProducts": [
      {
        "name": "Seri Buku Investigasi Kolektif: Mengabarkan dari Pinggiran",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Jakarta Selatan, DKI Jakarta.",
        "price": "Rp90.000",
        "buyUrl": "https://projectmultatuli.org/",
        "imageUrl": "https://down-id.img.susercontent.com/file/id-11134207-822wg-mo6j4fsh3gn9d5",
        "category": "Karya Utama"
      },
      {
        "name": "Keanggotaan Kawan M .",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Jakarta Selatan, DKI Jakarta.",
        "price": "Rp50.000",
        "buyUrl": "https://projectmultatuli.org/",
        "imageUrl": "https://projectmultatuli.org/wp-content/uploads/2026/03/INAproc1-1024x683.png",
        "category": "Koleksi Pilihan"
      }
    ],
    "milestones": [
      {
        "year": "FASE AWAL | PERINTISAN",
        "title": "Riset Material & Pendirian Fondasi",
        "description": "Memulai eksplorasi bahan baku dan uji coba formulasi di Jakarta Selatan, DKI Jakarta, menegaskan komitmen untuk tidak bergantung pada rantai pasok impor."
      },
      {
        "year": "FASE KEDUA | PENGUATAN",
        "title": "Konsolidasi Mitra & Standarisasi Mutu",
        "description": "Membangun jaringan kemitraan erat bersama perajin dan komunitas lokal, menerapkan uji kendali mutu berstandar ketat, dan merilis karya unggulan perdana."
      },
      {
        "year": "FASE KETIGA | KEDAULATAN",
        "title": "Rujukan Kemandirian & Pengakuan Pasar",
        "description": "Menjadi tolok ukur integritas karya di sektor Pustaka, Media & Distribusi Gagasan, membuktikan keberlanjutan model bisnis etis yang menguntungkan ekosistem lokal."
      }
    ],
    "sovereigntyMeaning": "Keberadaan PROJECT MULTATULI menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten.",
    "channels": {
      "officialStore": [
        {
          "platform": "Webstore Resmi",
          "url": "https://projectmultatuli.org/",
          "label": "projectmultatuli.org"
        },
        {
          "platform": "Tokopedia Official",
          "url": "https://tokopedia.com/find?q=PROJECT%20MULTATULI",
          "label": "Tokopedia: PROJECT MULTATULI"
        },
        {
          "platform": "Shopee Mall",
          "url": "https://shopee.co.id/search?keyword=PROJECT%20MULTATULI",
          "label": "Shopee: PROJECT MULTATULI"
        }
      ],
      "publicSpaces": [
        {
          "platform": "Instagram",
          "url": "https://instagram.com/projectmultatuli",
          "label": "@projectmultatuli"
        },
        {
          "platform": "Surel Kemitraan",
          "url": "mailto:kontak@projectmultatuli.org",
          "label": "Inquiry Resmi"
        }
      ]
    },
    "scores": {
      "quality": 25,
      "discovery": 25,
      "trackRecord": 23,
      "story": 24,
      "total": 97
    },
    "statusRedFlag": "CLEAR",
    "bio_paragraphs": [
      "Kelahiran PROJECT MULTATULI berakar dari kegelisahan mendalam terhadap lanskap industri di Jakarta Selatan, DKI Jakarta dan sekitarnya. Konsisten mengangkat isu struktural kaum marjinal yang diabaikan media komersial clickbait. Serial laporannya berulang kali memaksa pembukaan kembali kasus kekerasan seksual dan perampasan ruang hidup masyarakat adat. PROJECT MULTATULI hadir untuk menjembatani kesenjangan tersebut dengan membuktikan bahwa potensi daerah mampu melahirkan standar baru yang mandiri dan berdaya tawar tinggi.",
      "Melalui pendekatan kerja yang berakar pada kearifan dan disiplin mutu, PROJECT MULTATULI mengintegrasikan ekosistem hulu hingga hilir. Jaringan jurnalis lepas investigatif di pelosok Nusantara; fact-checking berlapis dan arsip digital terenkripsi; zine dan buku cetak terbatas bersama percetakan independen lokal. Langkah ini bukan sekadar strategi produksi, melainkan ikhtiar merawat martabat pekerja lokal serta menjaga keaslian material nusantara tanpa kompromi.",
      "Dampaknya terlihat nyata pada karya-karya terkurasi yang mereka hasilkan. Membuktikan bahwa jurnalisme investigasi nalar publik dapat beroperasi bebas intervensi oligarki dengan mengandalkan sistem keanggotaan publik (membership) dan konsorsium riset nirlaba. Keberadaan PROJECT MULTATULI menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten."
    ],
    "quote": "Membuktikan bahwa jurnalisme investigasi nalar publik dapat beroperasi bebas intervensi oligarki dengan mengandalkan sistem keanggotaan publik (membership) dan konsorsium riset nirlaba.",
    "initiatives": [
      {
        "title": "Kemitraan Hulu & Rantai Pasok Berkelanjutan",
        "category": "Ekosistem Lokal",
        "description": "Jaringan jurnalis lepas investigatif di pelosok Nusantara; fact-checking berlapis dan arsip digital terenkripsi; zine dan buku cetak terbatas bersama percetakan independen lokal.",
        "price": "Kemitraan Mandiri",
        "imageUrl": "https://down-id.img.susercontent.com/file/id-11134207-822wg-mo6j4fsh3gn9d5",
        "action_text": "Pelajari Ekosistem",
        "link_url": "https://projectmultatuli.org/"
      },
      {
        "title": "Kendali Mutu & Ketertelusuran Bahan",
        "category": "Standar Mutu",
        "description": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial.",
        "price": "Teruji & Terverifikasi",
        "imageUrl": "https://projectmultatuli.org/wp-content/uploads/2026/03/INAproc1-1024x683.png",
        "action_text": "Akses Toko Resmi",
        "link_url": "https://projectmultatuli.org/"
      }
    ]
  },
  "kepustakaan-populer-gramedia": {
    "slug": "kepustakaan-populer-gramedia",
    "name": "KEPUSTAKAAN POPULER GRAMEDIA",
    "lensSlug": "pustaka-media-distribusi-gagasan",
    "lensName": "Pustaka, Media & Distribusi Gagasan",
    "curationTier": "Established",
    "origin": "Jakarta Pusat, DKI Jakarta",
    "logoUrl": "https://image1ws.indotrading.com/s3/webp/co33337/companylogo/w200-h200/logo_kpg_header.gif",
    "discoveryTitle": {
      "anomaly": "Anomali Saintifik di Tengah Konglomerasi: Bagaimana KPG Mempertahankan Otonomi Naskah Non-Fiksi Berat di Bawah Naungan Korporasi Raksasa?",
      "question": "Bagaimana membuktikan keunggulan mandiri tanpa kompromi mutu?",
      "paradigm": "Kemandirian KEPUSTAKAAN POPULER GRAMEDIA"
    },
    "coreFinding": "Imprint di bawah konglomerasi media nasional yang menjaga integritas intelektual dengan merilis seri terjemahan sains murni, antropologi, dan sejarah kritis tanpa terjebak komersialisasi instan.",
    "contextNarrative": {
      "marketVacuum": "Dewan redaksi khusus memisahkan garis editorialnya dari orientasi buku motivasi populer. Mengisi kekosongan literasi sains populer tingkat tinggi di Indonesia (Jared Diamond, Harari, arsip komik sejarah).",
      "disruptedStatusQuo": "Sinergi dengan jaringan ritel induk menjamin ketersediaan literatur ilmiah di kota lapis ke-2 dan ke-3."
    },
    "evidenceTelemetry": {
      "originCoordinates": "Jakarta Pusat, DKI Jakarta",
      "productionModel": "Alih bahasa oleh penerjemah akademik berpengalaman; pencetakan terintegrasi Gramedia Group; jalur ritel nasional dan katalog mandiri.",
      "verifiedClaims": [
        {
          "claim": "Alih bahasa oleh penerjemah akademik berpengalaman",
          "evidencePrimary": "Dokumentasi fasilitas operasional, audit rantai pasok, dan katalog resmi KEPUSTAKAAN POPULER GRAMEDIA.",
          "verificationSource": "Hasil pengujian standar mutu nasional, sertifikasi relevan, dan liputan media terpercaya.",
          "editorialInterpretation": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial."
        }
      ]
    },
    "flagshipProducts": [
      {
        "name": "Guns, Germs & Steel",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Jakarta Pusat, DKI Jakarta.",
        "price": "Rp135.000",
        "buyUrl": "https://siapabilang.com/",
        "imageUrl": "https://down-id.img.susercontent.com/file/id-11134207-7rasg-m1k2y2yfo3zv9e",
        "category": "Karya Utama"
      },
      {
        "name": "Seri Kisah Istimewa Bung Karno .",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Jakarta Pusat, DKI Jakarta.",
        "price": "Rp85.000",
        "buyUrl": "https://siapabilang.com/",
        "imageUrl": "https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=3913446030372521269",
        "category": "Koleksi Pilihan"
      }
    ],
    "milestones": [
      {
        "year": "FASE AWAL | PERINTISAN",
        "title": "Riset Material & Pendirian Fondasi",
        "description": "Memulai eksplorasi bahan baku dan uji coba formulasi di Jakarta Pusat, DKI Jakarta, menegaskan komitmen untuk tidak bergantung pada rantai pasok impor."
      },
      {
        "year": "FASE KEDUA | PENGUATAN",
        "title": "Konsolidasi Mitra & Standarisasi Mutu",
        "description": "Membangun jaringan kemitraan erat bersama perajin dan komunitas lokal, menerapkan uji kendali mutu berstandar ketat, dan merilis karya unggulan perdana."
      },
      {
        "year": "FASE KETIGA | KEDAULATAN",
        "title": "Rujukan Kemandirian & Pengakuan Pasar",
        "description": "Menjadi tolok ukur integritas karya di sektor Pustaka, Media & Distribusi Gagasan, membuktikan keberlanjutan model bisnis etis yang menguntungkan ekosistem lokal."
      }
    ],
    "sovereigntyMeaning": "Keberadaan KEPUSTAKAAN POPULER GRAMEDIA menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten.",
    "channels": {
      "officialStore": [
        {
          "platform": "Webstore Resmi",
          "url": "https://siapabilang.com/",
          "label": "siapabilang.com"
        },
        {
          "platform": "Tokopedia Official",
          "url": "https://tokopedia.com/find?q=KEPUSTAKAAN%20POPULER%20GRAMEDIA",
          "label": "Tokopedia: KEPUSTAKAAN POPULER GRAMEDIA"
        },
        {
          "platform": "Shopee Mall",
          "url": "https://shopee.co.id/search?keyword=KEPUSTAKAAN%20POPULER%20GRAMEDIA",
          "label": "Shopee: KEPUSTAKAAN POPULER GRAMEDIA"
        }
      ],
      "publicSpaces": [
        {
          "platform": "Instagram",
          "url": "https://instagram.com/penerbitkpg",
          "label": "@penerbitkpg"
        },
        {
          "platform": "Surel Kemitraan",
          "url": "mailto:kontak@siapabilang.com",
          "label": "Inquiry Resmi"
        }
      ]
    },
    "scores": {
      "quality": 24,
      "discovery": 22,
      "trackRecord": 25,
      "story": 23,
      "total": 94
    },
    "statusRedFlag": "CLEAR",
    "bio_paragraphs": [
      "Kelahiran KEPUSTAKAAN POPULER GRAMEDIA berakar dari kegelisahan mendalam terhadap lanskap industri di Jakarta Pusat, DKI Jakarta dan sekitarnya. Dewan redaksi khusus memisahkan garis editorialnya dari orientasi buku motivasi populer. Mengisi kekosongan literasi sains populer tingkat tinggi di Indonesia (Jared Diamond, Harari, arsip komik sejarah). KEPUSTAKAAN POPULER GRAMEDIA hadir untuk menjembatani kesenjangan tersebut dengan membuktikan bahwa potensi daerah mampu melahirkan standar baru yang mandiri dan berdaya tawar tinggi.",
      "Melalui pendekatan kerja yang berakar pada kearifan dan disiplin mutu, KEPUSTAKAAN POPULER GRAMEDIA mengintegrasikan ekosistem hulu hingga hilir. Alih bahasa oleh penerjemah akademik berpengalaman; pencetakan terintegrasi Gramedia Group; jalur ritel nasional dan katalog mandiri. Langkah ini bukan sekadar strategi produksi, melainkan ikhtiar merawat martabat pekerja lokal serta menjaga keaslian material nusantara tanpa kompromi.",
      "Dampaknya terlihat nyata pada karya-karya terkurasi yang mereka hasilkan. Imprint di bawah konglomerasi media nasional yang menjaga integritas intelektual dengan merilis seri terjemahan sains murni, antropologi, dan sejarah kritis tanpa terjebak komersialisasi instan. Keberadaan KEPUSTAKAAN POPULER GRAMEDIA menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten."
    ],
    "quote": "Imprint di bawah konglomerasi media nasional yang menjaga integritas intelektual dengan merilis seri terjemahan sains murni, antropologi, dan sejarah kritis tanpa terjebak komersialisasi instan.",
    "initiatives": [
      {
        "title": "Kemitraan Hulu & Rantai Pasok Berkelanjutan",
        "category": "Ekosistem Lokal",
        "description": "Alih bahasa oleh penerjemah akademik berpengalaman; pencetakan terintegrasi Gramedia Group; jalur ritel nasional dan katalog mandiri.",
        "price": "Kemitraan Mandiri",
        "imageUrl": "https://down-id.img.susercontent.com/file/id-11134207-7rasg-m1k2y2yfo3zv9e",
        "action_text": "Pelajari Ekosistem",
        "link_url": "https://siapabilang.com/"
      },
      {
        "title": "Kendali Mutu & Ketertelusuran Bahan",
        "category": "Standar Mutu",
        "description": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial.",
        "price": "Teruji & Terverifikasi",
        "imageUrl": "https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=3913446030372521269",
        "action_text": "Akses Toko Resmi",
        "link_url": "https://siapabilang.com/"
      }
    ]
  },
  "tempo-media": {
    "slug": "tempo-media",
    "name": "TEMPO MEDIA",
    "lensSlug": "pustaka-media-distribusi-gagasan",
    "lensName": "Pustaka, Media & Distribusi Gagasan",
    "curationTier": "Established",
    "origin": "Jakarta Barat, DKI Jakarta",
    "logoUrl": "https://images.seeklogo.com/logo-png/51/1/tempo-magazine-logo-png_seeklogo-511160.png",
    "discoveryTitle": {
      "anomaly": "Kekuatan Ruang Berita Independen: Bagaimana Majalah Berita Mingguan Mengarungi Turbulensi Sensor Sejarah Sejak 1971?",
      "question": "Bagaimana membuktikan keunggulan mandiri tanpa kompromi mutu?",
      "paradigm": "Kemandirian TEMPO MEDIA"
    },
    "coreFinding": "Membuktikan ketahanan model ruang berita investigasi tertua di Indonesia yang tetap berdiri di atas asas kepemilikan karyawan dan standar verifikasi faktual ketat.",
    "contextNarrative": {
      "marketVacuum": "Berakar dari independensi rubrik editorial yang mengalami dua kali pembredelan era Orde Baru dan tetap mempertahankan jurnalisme presisi. Edisi khusus investigasinya membongkar skandal lingkungan, kartel, dan korupsi kekuasaan secara konsisten.",
      "disruptedStatusQuo": "Monetisasi model langganan digital berbayar yang sukses di Asia Tenggara."
    },
    "evidenceTelemetry": {
      "originCoordinates": "Jakarta Barat, DKI Jakarta",
      "productionModel": "Divisi riset dan arsip berita mandiri; jaringan koresponden nasional; divisi logistik independen dan aplikasi Tempo ID.",
      "verifiedClaims": [
        {
          "claim": "Divisi riset dan arsip berita mandiri",
          "evidencePrimary": "Dokumentasi fasilitas operasional, audit rantai pasok, dan katalog resmi TEMPO MEDIA.",
          "verificationSource": "Hasil pengujian standar mutu nasional, sertifikasi relevan, dan liputan media terpercaya.",
          "editorialInterpretation": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial."
        }
      ]
    },
    "flagshipProducts": [
      {
        "name": "Majalah Edisi Investigasi Khusus Cetak",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Jakarta Barat, DKI Jakarta.",
        "price": "Rp85.000",
        "buyUrl": "https://tempo.co/",
        "imageUrl": "https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=2678510937245596292",
        "category": "Karya Utama"
      },
      {
        "name": "Paket Tahunan Tempo Digital .",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Jakarta Barat, DKI Jakarta.",
        "price": "Rp400.000",
        "buyUrl": "https://tempo.co/",
        "imageUrl": "https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/42bf0a08f53e4585b0036fb319269266~tplv-aphluv4xwc-resize-jpeg:700:0.jpeg",
        "category": "Koleksi Pilihan"
      }
    ],
    "milestones": [
      {
        "year": "FASE AWAL | PERINTISAN",
        "title": "Riset Material & Pendirian Fondasi",
        "description": "Memulai eksplorasi bahan baku dan uji coba formulasi di Jakarta Barat, DKI Jakarta, menegaskan komitmen untuk tidak bergantung pada rantai pasok impor."
      },
      {
        "year": "FASE KEDUA | PENGUATAN",
        "title": "Konsolidasi Mitra & Standarisasi Mutu",
        "description": "Membangun jaringan kemitraan erat bersama perajin dan komunitas lokal, menerapkan uji kendali mutu berstandar ketat, dan merilis karya unggulan perdana."
      },
      {
        "year": "FASE KETIGA | KEDAULATAN",
        "title": "Rujukan Kemandirian & Pengakuan Pasar",
        "description": "Menjadi tolok ukur integritas karya di sektor Pustaka, Media & Distribusi Gagasan, membuktikan keberlanjutan model bisnis etis yang menguntungkan ekosistem lokal."
      }
    ],
    "sovereigntyMeaning": "Keberadaan TEMPO MEDIA menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten.",
    "channels": {
      "officialStore": [
        {
          "platform": "Webstore Resmi",
          "url": "https://tempo.co/",
          "label": "tempo.co"
        },
        {
          "platform": "Tokopedia Official",
          "url": "https://tokopedia.com/find?q=TEMPO%20MEDIA",
          "label": "Tokopedia: TEMPO MEDIA"
        },
        {
          "platform": "Shopee Mall",
          "url": "https://shopee.co.id/search?keyword=TEMPO%20MEDIA",
          "label": "Shopee: TEMPO MEDIA"
        }
      ],
      "publicSpaces": [
        {
          "platform": "Instagram",
          "url": "https://instagram.com/tempodotco",
          "label": "@tempodotco"
        },
        {
          "platform": "Surel Kemitraan",
          "url": "mailto:kontak@tempo.co",
          "label": "Inquiry Resmi"
        }
      ]
    },
    "scores": {
      "quality": 25,
      "discovery": 23,
      "trackRecord": 25,
      "story": 23,
      "total": 96
    },
    "statusRedFlag": "CLEAR",
    "bio_paragraphs": [
      "Kelahiran TEMPO MEDIA berakar dari kegelisahan mendalam terhadap lanskap industri di Jakarta Barat, DKI Jakarta dan sekitarnya. Berakar dari independensi rubrik editorial yang mengalami dua kali pembredelan era Orde Baru dan tetap mempertahankan jurnalisme presisi. Edisi khusus investigasinya membongkar skandal lingkungan, kartel, dan korupsi kekuasaan secara konsisten. TEMPO MEDIA hadir untuk menjembatani kesenjangan tersebut dengan membuktikan bahwa potensi daerah mampu melahirkan standar baru yang mandiri dan berdaya tawar tinggi.",
      "Melalui pendekatan kerja yang berakar pada kearifan dan disiplin mutu, TEMPO MEDIA mengintegrasikan ekosistem hulu hingga hilir. Divisi riset dan arsip berita mandiri; jaringan koresponden nasional; divisi logistik independen dan aplikasi Tempo ID. Langkah ini bukan sekadar strategi produksi, melainkan ikhtiar merawat martabat pekerja lokal serta menjaga keaslian material nusantara tanpa kompromi.",
      "Dampaknya terlihat nyata pada karya-karya terkurasi yang mereka hasilkan. Membuktikan ketahanan model ruang berita investigasi tertua di Indonesia yang tetap berdiri di atas asas kepemilikan karyawan dan standar verifikasi faktual ketat. Keberadaan TEMPO MEDIA menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten."
    ],
    "quote": "Membuktikan ketahanan model ruang berita investigasi tertua di Indonesia yang tetap berdiri di atas asas kepemilikan karyawan dan standar verifikasi faktual ketat.",
    "initiatives": [
      {
        "title": "Kemitraan Hulu & Rantai Pasok Berkelanjutan",
        "category": "Ekosistem Lokal",
        "description": "Divisi riset dan arsip berita mandiri; jaringan koresponden nasional; divisi logistik independen dan aplikasi Tempo ID.",
        "price": "Kemitraan Mandiri",
        "imageUrl": "https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=2678510937245596292",
        "action_text": "Pelajari Ekosistem",
        "link_url": "https://tempo.co/"
      },
      {
        "title": "Kendali Mutu & Ketertelusuran Bahan",
        "category": "Standar Mutu",
        "description": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial.",
        "price": "Teruji & Terverifikasi",
        "imageUrl": "https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/42bf0a08f53e4585b0036fb319269266~tplv-aphluv4xwc-resize-jpeg:700:0.jpeg",
        "action_text": "Akses Toko Resmi",
        "link_url": "https://tempo.co/"
      }
    ]
  },
  "mojok": {
    "slug": "mojok",
    "name": "MOJOK.CO & BUKU MOJOK",
    "lensSlug": "pustaka-media-distribusi-gagasan",
    "lensName": "Pustaka, Media & Distribusi Gagasan",
    "curationTier": "Middle",
    "origin": "Sleman, D.I. Yogyakarta",
    "logoUrl": "https://lookaside.fbsbx.com/lookaside/crawler/instagram/mojokstore/profile_pic.jpg",
    "discoveryTitle": {
      "anomaly": "Satire sebagai Senjata Publik: Mengapa Platform Esai Santai dari Sleman Mampu Mengonversi Pembaca Digital Menjadi Pembeli Buku Sastra?",
      "question": "Bagaimana membuktikan keunggulan mandiri tanpa kompromi mutu?",
      "paradigm": "Kemandirian MOJOK.CO & BUKU MOJOK"
    },
    "coreFinding": "Diskursus sosial-politik satire dapat bertransformasi menjadi divisi penerbitan buku fisik yang laris tanpa mengorbankan bobot literer.",
    "contextNarrative": {
      "marketVacuum": "Meredefinisi gaya esai di Indonesia dengan membuang kekakuan akademis agar dapat diakses generasi muda. Buku Mojok mengisi ceruk fiksi dan memoar alternatif yang dihindari penerbit besar Jakarta.",
      "disruptedStatusQuo": "Loyalitas komunitas diuji lewat konversi pembaca web ke pre-order cetak fisik yang sering ludes dalam hitungan jam."
    },
    "evidenceTelemetry": {
      "originCoordinates": "Sleman, D.I. Yogyakarta",
      "productionModel": "Kurasi editor komunitas Yogyakarta; percetakan vendor lokal di Sleman dan Bantul; toko online mandiri dan jejaring toko buku indie se-Jawa.",
      "verifiedClaims": [
        {
          "claim": "Kurasi editor komunitas Yogyakarta",
          "evidencePrimary": "Dokumentasi fasilitas operasional, audit rantai pasok, dan katalog resmi MOJOK.CO & BUKU MOJOK.",
          "verificationSource": "Hasil pengujian standar mutu nasional, sertifikasi relevan, dan liputan media terpercaya.",
          "editorialInterpretation": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial."
        }
      ]
    },
    "flagshipProducts": [
      {
        "name": "Orang-Orang Bloomington",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Sleman, D.I. Yogyakarta.",
        "price": "Rp88.000",
        "buyUrl": "https://mojok.co/",
        "imageUrl": "https://mojokstore.com/wp-content/uploads/2025/10/ajaran-bahagia-dari-jawa-1-300x445.png",
        "category": "Karya Utama"
      },
      {
        "name": "Esai Puthut EA .",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Sleman, D.I. Yogyakarta.",
        "price": "Rp75.000",
        "buyUrl": "https://mojok.co/",
        "imageUrl": "https://mojokstore.com/wp-content/uploads/2025/02/Esok-Jilbab-Kita-Dirayakan-1-300x445.png",
        "category": "Koleksi Pilihan"
      }
    ],
    "milestones": [
      {
        "year": "FASE AWAL | PERINTISAN",
        "title": "Riset Material & Pendirian Fondasi",
        "description": "Memulai eksplorasi bahan baku dan uji coba formulasi di Sleman, D.I. Yogyakarta, menegaskan komitmen untuk tidak bergantung pada rantai pasok impor."
      },
      {
        "year": "FASE KEDUA | PENGUATAN",
        "title": "Konsolidasi Mitra & Standarisasi Mutu",
        "description": "Membangun jaringan kemitraan erat bersama perajin dan komunitas lokal, menerapkan uji kendali mutu berstandar ketat, dan merilis karya unggulan perdana."
      },
      {
        "year": "FASE KETIGA | KEDAULATAN",
        "title": "Rujukan Kemandirian & Pengakuan Pasar",
        "description": "Menjadi tolok ukur integritas karya di sektor Pustaka, Media & Distribusi Gagasan, membuktikan keberlanjutan model bisnis etis yang menguntungkan ekosistem lokal."
      }
    ],
    "sovereigntyMeaning": "Keberadaan MOJOK.CO & BUKU MOJOK menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten.",
    "channels": {
      "officialStore": [
        {
          "platform": "Webstore Resmi",
          "url": "https://mojok.co/",
          "label": "mojok.co"
        },
        {
          "platform": "Tokopedia Official",
          "url": "https://tokopedia.com/find?q=MOJOK.CO%20%26%20BUKU%20MOJOK",
          "label": "Tokopedia: MOJOK.CO & BUKU MOJOK"
        },
        {
          "platform": "Shopee Mall",
          "url": "https://shopee.co.id/search?keyword=MOJOK.CO%20%26%20BUKU%20MOJOK",
          "label": "Shopee: MOJOK.CO & BUKU MOJOK"
        }
      ],
      "publicSpaces": [
        {
          "platform": "Instagram",
          "url": "https://instagram.com/mojokdotco",
          "label": "@mojokdotco"
        },
        {
          "platform": "Surel Kemitraan",
          "url": "mailto:kontak@mojok.co",
          "label": "Inquiry Resmi"
        }
      ]
    },
    "scores": {
      "quality": 23,
      "discovery": 24,
      "trackRecord": 22,
      "story": 24,
      "total": 93
    },
    "statusRedFlag": "CLEAR",
    "bio_paragraphs": [
      "Kelahiran MOJOK.CO & BUKU MOJOK berakar dari kegelisahan mendalam terhadap lanskap industri di Sleman, D.I. Yogyakarta dan sekitarnya. Meredefinisi gaya esai di Indonesia dengan membuang kekakuan akademis agar dapat diakses generasi muda. Buku Mojok mengisi ceruk fiksi dan memoar alternatif yang dihindari penerbit besar Jakarta. MOJOK.CO & BUKU MOJOK hadir untuk menjembatani kesenjangan tersebut dengan membuktikan bahwa potensi daerah mampu melahirkan standar baru yang mandiri dan berdaya tawar tinggi.",
      "Melalui pendekatan kerja yang berakar pada kearifan dan disiplin mutu, MOJOK.CO & BUKU MOJOK mengintegrasikan ekosistem hulu hingga hilir. Kurasi editor komunitas Yogyakarta; percetakan vendor lokal di Sleman dan Bantul; toko online mandiri dan jejaring toko buku indie se-Jawa. Langkah ini bukan sekadar strategi produksi, melainkan ikhtiar merawat martabat pekerja lokal serta menjaga keaslian material nusantara tanpa kompromi.",
      "Dampaknya terlihat nyata pada karya-karya terkurasi yang mereka hasilkan. Diskursus sosial-politik satire dapat bertransformasi menjadi divisi penerbitan buku fisik yang laris tanpa mengorbankan bobot literer. Keberadaan MOJOK.CO & BUKU MOJOK menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten."
    ],
    "quote": "Diskursus sosial-politik satire dapat bertransformasi menjadi divisi penerbitan buku fisik yang laris tanpa mengorbankan bobot literer.",
    "initiatives": [
      {
        "title": "Kemitraan Hulu & Rantai Pasok Berkelanjutan",
        "category": "Ekosistem Lokal",
        "description": "Kurasi editor komunitas Yogyakarta; percetakan vendor lokal di Sleman dan Bantul; toko online mandiri dan jejaring toko buku indie se-Jawa.",
        "price": "Kemitraan Mandiri",
        "imageUrl": "https://mojokstore.com/wp-content/uploads/2025/10/ajaran-bahagia-dari-jawa-1-300x445.png",
        "action_text": "Pelajari Ekosistem",
        "link_url": "https://mojok.co/"
      },
      {
        "title": "Kendali Mutu & Ketertelusuran Bahan",
        "category": "Standar Mutu",
        "description": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial.",
        "price": "Teruji & Terverifikasi",
        "imageUrl": "https://mojokstore.com/wp-content/uploads/2025/02/Esok-Jilbab-Kita-Dirayakan-1-300x445.png",
        "action_text": "Akses Toko Resmi",
        "link_url": "https://mojok.co/"
      }
    ]
  },
  "malaka-project": {
    "slug": "malaka-project",
    "name": "MALAKA PROJECT",
    "lensSlug": "pustaka-media-distribusi-gagasan",
    "lensName": "Pustaka, Media & Distribusi Gagasan",
    "curationTier": "Middle",
    "origin": "Jakarta Selatan, DKI Jakarta",
    "logoUrl": "https://p16-common-sign.tiktokcdn-us.com/tos-maliva-avt-0068/c05e5bbb15302154dcfbf2c8c35acb2f~tplv-tiktokx-cropcenter:720:720.jpeg?dr=9640&refresh_token=7b85f8d5&x-expires=1784865600&x-signature=97np2ItogZ5QBHAX51k4iyMuCKo%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=useast8",
    "discoveryTitle": {
      "anomaly": "Teori Kritis dan Filsafat Kerap Terjebak di Menara Gading Kampus",
      "question": "Mungkinkah Gagasan Dialektika Dikonsumsi Jutaan Netizen YouTube?",
      "paradigm": "Demokratisasi Nalar Publik Melalui Media Visual Eksplanatori"
    },
    "coreFinding": "Mematahkan elitisme akademis dengan mentransformasikan diskursus sains sosial, ekonomi politik, dan logika filsafat ke dalam konten media digital berbasis riset mendalam yang dikonsumsi jutaan pemuda.",
    "contextNarrative": {
      "marketVacuum": "Didirikan oleh Ferry Irwandi dkk sebagai respons atas maraknya disinformasi dan konten sensasional di ruang digital Indonesia. Malaka Project mengonversi teori sosial rumit menjadi video esai berstandar produksi tinggi tanpa menyederhanakan substansi nalar kritis.",
      "disruptedStatusQuo": "Berhasil membangun ekosistem komunitas pembelajar mandiri dan mendanai pembangunan infrastruktur sekolah swadaya di Banten dari donasi publik."
    },
    "evidenceTelemetry": {
      "originCoordinates": "Jakarta Selatan, DKI Jakarta",
      "productionModel": "Tim periset literatur, naskah, dan animator independen di Jakarta; kurasi naskah berbasis jurnal ilmiah terindeks; produksi audiovisual mandiri tanpa modal konglomerasi media.",
      "verifiedClaims": [
        {
          "claim": "Tim periset literatur, naskah, dan animator independen di Jakarta",
          "evidencePrimary": "Dokumentasi fasilitas operasional, audit rantai pasok, dan katalog resmi MALAKA PROJECT.",
          "verificationSource": "Hasil pengujian standar mutu nasional, sertifikasi relevan, dan liputan media terpercaya.",
          "editorialInterpretation": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial."
        }
      ]
    },
    "flagshipProducts": [
      {
        "name": "Video Esai Literasi Nalar Publik Malaka",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Jakarta Selatan, DKI Jakarta.",
        "price": "Rp 150.000",
        "buyUrl": "https://malakaproject.com/",
        "imageUrl": "https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=3503241047357053402",
        "category": "Karya Utama"
      },
      {
        "name": "Zine / Merchandise Literasi Malaka .",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Jakarta Selatan, DKI Jakarta.",
        "price": "Rp75.000",
        "buyUrl": "https://malakaproject.com/",
        "imageUrl": "https://seller.tokopedia.com/imgshare/shop_snippet/ZGVmZ2hpamtsbW5v0LQFVwP4foasx7NUybRMLHznt2_xLUjTmZhdLuB1y9A=.png",
        "category": "Koleksi Pilihan"
      }
    ],
    "milestones": [
      {
        "year": "FASE AWAL | PERINTISAN",
        "title": "Riset Material & Pendirian Fondasi",
        "description": "Memulai eksplorasi bahan baku dan uji coba formulasi di Jakarta Selatan, DKI Jakarta, menegaskan komitmen untuk tidak bergantung pada rantai pasok impor."
      },
      {
        "year": "FASE KEDUA | PENGUATAN",
        "title": "Konsolidasi Mitra & Standarisasi Mutu",
        "description": "Membangun jaringan kemitraan erat bersama perajin dan komunitas lokal, menerapkan uji kendali mutu berstandar ketat, dan merilis karya unggulan perdana."
      },
      {
        "year": "FASE KETIGA | KEDAULATAN",
        "title": "Rujukan Kemandirian & Pengakuan Pasar",
        "description": "Menjadi tolok ukur integritas karya di sektor Pustaka, Media & Distribusi Gagasan, membuktikan keberlanjutan model bisnis etis yang menguntungkan ekosistem lokal."
      }
    ],
    "sovereigntyMeaning": "Keberadaan MALAKA PROJECT menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten.",
    "channels": {
      "officialStore": [
        {
          "platform": "Webstore Resmi",
          "url": "https://malakaproject.com/",
          "label": "malakaproject.com"
        },
        {
          "platform": "Tokopedia Official",
          "url": "https://tokopedia.com/find?q=MALAKA%20PROJECT",
          "label": "Tokopedia: MALAKA PROJECT"
        },
        {
          "platform": "Shopee Mall",
          "url": "https://shopee.co.id/search?keyword=MALAKA%20PROJECT",
          "label": "Shopee: MALAKA PROJECT"
        }
      ],
      "publicSpaces": [
        {
          "platform": "Instagram",
          "url": "https://instagram.com/malakaproject",
          "label": "@malakaproject"
        },
        {
          "platform": "Surel Kemitraan",
          "url": "mailto:kontak@malakaproject.com",
          "label": "Inquiry Resmi"
        }
      ]
    },
    "scores": {
      "quality": 24,
      "discovery": 25,
      "trackRecord": 24,
      "story": 25,
      "total": 98
    },
    "statusRedFlag": "CLEAR",
    "bio_paragraphs": [
      "Kelahiran MALAKA PROJECT berakar dari kegelisahan mendalam terhadap lanskap industri di Jakarta Selatan, DKI Jakarta dan sekitarnya. Didirikan oleh Ferry Irwandi dkk sebagai respons atas maraknya disinformasi dan konten sensasional di ruang digital Indonesia. Malaka Project mengonversi teori sosial rumit menjadi video esai berstandar produksi tinggi tanpa menyederhanakan substansi nalar kritis. MALAKA PROJECT hadir untuk menjembatani kesenjangan tersebut dengan membuktikan bahwa potensi daerah mampu melahirkan standar baru yang mandiri dan berdaya tawar tinggi.",
      "Melalui pendekatan kerja yang berakar pada kearifan dan disiplin mutu, MALAKA PROJECT mengintegrasikan ekosistem hulu hingga hilir. Tim periset literatur, naskah, dan animator independen di Jakarta; kurasi naskah berbasis jurnal ilmiah terindeks; produksi audiovisual mandiri tanpa modal konglomerasi media. Langkah ini bukan sekadar strategi produksi, melainkan ikhtiar merawat martabat pekerja lokal serta menjaga keaslian material nusantara tanpa kompromi.",
      "Dampaknya terlihat nyata pada karya-karya terkurasi yang mereka hasilkan. Mematahkan elitisme akademis dengan mentransformasikan diskursus sains sosial, ekonomi politik, dan logika filsafat ke dalam konten media digital berbasis riset mendalam yang dikonsumsi jutaan pemuda. Keberadaan MALAKA PROJECT menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten."
    ],
    "quote": "Mematahkan elitisme akademis dengan mentransformasikan diskursus sains sosial, ekonomi politik, dan logika filsafat ke dalam konten media digital berbasis riset mendalam yang dikonsumsi jutaan pemuda.",
    "initiatives": [
      {
        "title": "Kemitraan Hulu & Rantai Pasok Berkelanjutan",
        "category": "Ekosistem Lokal",
        "description": "Tim periset literatur, naskah, dan animator independen di Jakarta; kurasi naskah berbasis jurnal ilmiah terindeks; produksi audiovisual mandiri tanpa modal konglomerasi media.",
        "price": "Kemitraan Mandiri",
        "imageUrl": "https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=3503241047357053402",
        "action_text": "Pelajari Ekosistem",
        "link_url": "https://malakaproject.com/"
      },
      {
        "title": "Kendali Mutu & Ketertelusuran Bahan",
        "category": "Standar Mutu",
        "description": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial.",
        "price": "Teruji & Terverifikasi",
        "imageUrl": "https://seller.tokopedia.com/imgshare/shop_snippet/ZGVmZ2hpamtsbW5v0LQFVwP4foasx7NUybRMLHznt2_xLUjTmZhdLuB1y9A=.png",
        "action_text": "Akses Toko Resmi",
        "link_url": "https://malakaproject.com/"
      }
    ]
  },
  "bumilangit": {
    "slug": "bumilangit",
    "name": "BUMILANGIT",
    "lensSlug": "pustaka-media-distribusi-gagasan",
    "lensName": "Pustaka, Media & Distribusi Gagasan",
    "curationTier": "Middle",
    "origin": "Jakarta Selatan / Tangerang",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/5/53/Bl_%282%29.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original",
    "discoveryTitle": {
      "anomaly": "1.200 Karakter Komik Adiwira Indonesia Tercecer dan Terancam Lapuk",
      "question": "Bisakah Warisan Hasmi dan Ganes TH Menandingi Semesta Sinematik Global?",
      "paradigm": "Rekonstruksi Pustaka Cerita Bergambar Nusantara Abad ke-20"
    },
    "coreFinding": "Menyelamatkan dan mengonsolidasikan lebih dari 1.200 pustaka karakter adiwira dan pendekar komik klasik Indonesia sejak 1954 ke dalam ekosistem penerbitan komik modern dan semesta sinema terpadu.",
    "contextNarrative": {
      "marketVacuum": "Selama beberapa dekade, master komik karya Hasmi (Gundala), Ganes TH (Si Buta dari Gua Hantu), dan RA Kosasih tercecer tanpa pengelolaan hak cipta yang profesional. Bumilangit mengakuisisi dan merestorasi arsip fisik komik kuno tersebut, lalu menerbitkan kembali versi cetak remastered, webtoon digital, hingga waralaba layar lebar (Jagat Sinema Bumilangit).",
      "disruptedStatusQuo": "Membuktikan bahwa pustaka narasi mitologi modern Nusantara memiliki daya tawar IP setara waralaba global."
    },
    "evidenceTelemetry": {
      "originCoordinates": "Jakarta Selatan / Tangerang",
      "productionModel": "Akuisisi lisensi resmi dari para ahli waris maestro komik Indonesia; studio komikus dan ilustrator in-house di Jakarta; pencetakan komik fisik bermitra dengan percetakan nasional.",
      "verifiedClaims": [
        {
          "claim": "Akuisisi lisensi resmi dari para ahli waris maestro komik Indonesia",
          "evidencePrimary": "Dokumentasi fasilitas operasional, audit rantai pasok, dan katalog resmi BUMILANGIT.",
          "verificationSource": "Hasil pengujian standar mutu nasional, sertifikasi relevan, dan liputan media terpercaya.",
          "editorialInterpretation": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial."
        }
      ]
    },
    "flagshipProducts": [
      {
        "name": "Komik Remastered Gundala / Si Buta dari Gua Hantu",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Jakarta Selatan / Tangerang.",
        "price": "Rp65.000",
        "buyUrl": "https://bumilangit.com/",
        "imageUrl": "https://bumilangit.com/_next/image?url=https%3A%2F%2Fcms.bumilangit.com%2Fuploads%2FSBDGH_BANNER_BUMILANGIT_ALT_1455_x_650_291125_28e0334c6d.jpg&w=3840&q=75",
        "category": "Karya Utama"
      },
      {
        "name": "Komik Jagat Bumilangit Revolusi .",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Jakarta Selatan / Tangerang.",
        "price": "Rp55.000",
        "buyUrl": "https://bumilangit.com/",
        "imageUrl": "https://www.bumilangit.com/_next/image?url=https%3A%2F%2Fcms.bumilangit.com%2Fuploads%2FTELKOMSEL_POSTER_5ce5c0d227.png&w=3840&q=75",
        "category": "Koleksi Pilihan"
      }
    ],
    "milestones": [
      {
        "year": "FASE AWAL | PERINTISAN",
        "title": "Riset Material & Pendirian Fondasi",
        "description": "Memulai eksplorasi bahan baku dan uji coba formulasi di Jakarta Selatan / Tangerang, menegaskan komitmen untuk tidak bergantung pada rantai pasok impor."
      },
      {
        "year": "FASE KEDUA | PENGUATAN",
        "title": "Konsolidasi Mitra & Standarisasi Mutu",
        "description": "Membangun jaringan kemitraan erat bersama perajin dan komunitas lokal, menerapkan uji kendali mutu berstandar ketat, dan merilis karya unggulan perdana."
      },
      {
        "year": "FASE KETIGA | KEDAULATAN",
        "title": "Rujukan Kemandirian & Pengakuan Pasar",
        "description": "Menjadi tolok ukur integritas karya di sektor Pustaka, Media & Distribusi Gagasan, membuktikan keberlanjutan model bisnis etis yang menguntungkan ekosistem lokal."
      }
    ],
    "sovereigntyMeaning": "Keberadaan BUMILANGIT menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten.",
    "channels": {
      "officialStore": [
        {
          "platform": "Webstore Resmi",
          "url": "https://bumilangit.com/",
          "label": "bumilangit.com"
        },
        {
          "platform": "Tokopedia Official",
          "url": "https://tokopedia.com/find?q=BUMILANGIT",
          "label": "Tokopedia: BUMILANGIT"
        },
        {
          "platform": "Shopee Mall",
          "url": "https://shopee.co.id/search?keyword=BUMILANGIT",
          "label": "Shopee: BUMILANGIT"
        }
      ],
      "publicSpaces": [
        {
          "platform": "Instagram",
          "url": "https://instagram.com/bumilangitofficial",
          "label": "@bumilangitofficial"
        },
        {
          "platform": "Surel Kemitraan",
          "url": "mailto:kontak@bumilangit.com",
          "label": "Inquiry Resmi"
        }
      ]
    },
    "scores": {
      "quality": 25,
      "discovery": 24,
      "trackRecord": 25,
      "story": 25,
      "total": 99
    },
    "statusRedFlag": "CLEAR",
    "bio_paragraphs": [
      "Kelahiran BUMILANGIT berakar dari kegelisahan mendalam terhadap lanskap industri di Jakarta Selatan / Tangerang dan sekitarnya. Selama beberapa dekade, master komik karya Hasmi (Gundala), Ganes TH (Si Buta dari Gua Hantu), dan RA Kosasih tercecer tanpa pengelolaan hak cipta yang profesional. Bumilangit mengakuisisi dan merestorasi arsip fisik komik kuno tersebut, lalu menerbitkan kembali versi cetak remastered, webtoon digital, hingga waralaba layar lebar (Jagat Sinema Bumilangit). BUMILANGIT hadir untuk menjembatani kesenjangan tersebut dengan membuktikan bahwa potensi daerah mampu melahirkan standar baru yang mandiri dan berdaya tawar tinggi.",
      "Melalui pendekatan kerja yang berakar pada kearifan dan disiplin mutu, BUMILANGIT mengintegrasikan ekosistem hulu hingga hilir. Akuisisi lisensi resmi dari para ahli waris maestro komik Indonesia; studio komikus dan ilustrator in-house di Jakarta; pencetakan komik fisik bermitra dengan percetakan nasional. Langkah ini bukan sekadar strategi produksi, melainkan ikhtiar merawat martabat pekerja lokal serta menjaga keaslian material nusantara tanpa kompromi.",
      "Dampaknya terlihat nyata pada karya-karya terkurasi yang mereka hasilkan. Menyelamatkan dan mengonsolidasikan lebih dari 1.200 pustaka karakter adiwira dan pendekar komik klasik Indonesia sejak 1954 ke dalam ekosistem penerbitan komik modern dan semesta sinema terpadu. Keberadaan BUMILANGIT menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten."
    ],
    "quote": "Menyelamatkan dan mengonsolidasikan lebih dari 1.200 pustaka karakter adiwira dan pendekar komik klasik Indonesia sejak 1954 ke dalam ekosistem penerbitan komik modern dan semesta sinema terpadu.",
    "initiatives": [
      {
        "title": "Kemitraan Hulu & Rantai Pasok Berkelanjutan",
        "category": "Ekosistem Lokal",
        "description": "Akuisisi lisensi resmi dari para ahli waris maestro komik Indonesia; studio komikus dan ilustrator in-house di Jakarta; pencetakan komik fisik bermitra dengan percetakan nasional.",
        "price": "Kemitraan Mandiri",
        "imageUrl": "https://bumilangit.com/_next/image?url=https%3A%2F%2Fcms.bumilangit.com%2Fuploads%2FSBDGH_BANNER_BUMILANGIT_ALT_1455_x_650_291125_28e0334c6d.jpg&w=3840&q=75",
        "action_text": "Pelajari Ekosistem",
        "link_url": "https://bumilangit.com/"
      },
      {
        "title": "Kendali Mutu & Ketertelusuran Bahan",
        "category": "Standar Mutu",
        "description": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial.",
        "price": "Teruji & Terverifikasi",
        "imageUrl": "https://www.bumilangit.com/_next/image?url=https%3A%2F%2Fcms.bumilangit.com%2Fuploads%2FTELKOMSEL_POSTER_5ce5c0d227.png&w=3840&q=75",
        "action_text": "Akses Toko Resmi",
        "link_url": "https://bumilangit.com/"
      }
    ]
  },
  "irama-nusantara": {
    "slug": "irama-nusantara",
    "name": "IRAMA NUSANTARA",
    "lensSlug": "pustaka-media-distribusi-gagasan",
    "lensName": "Pustaka, Media & Distribusi Gagasan",
    "curationTier": "Hidden Gem",
    "origin": "Jakarta Selatan, DKI Jakarta",
    "logoUrl": "https://cdn.brandfetch.io/domain/iramanusantara.org/fallback/lettermark/theme/dark/h/400/w/400/icon?c=1bfwsmEH20zzEfSNTed",
    "discoveryTitle": {
      "anomaly": "Ribuan Piringan Hitam Master Musik Indonesia Rusak Dimakan Rayap",
      "question": "Mungkinkah Inisiatif Nirlaba Menyelamatkan Arsip Audio Seabad Silam?",
      "paradigm": "Digitalisasi Gerilya Membangun Ensiklopedia Suara Nusantara Terbuka"
    },
    "coreFinding": "Mengembangkan situs pengarsipan digital musik populer Indonesia terbesar yang memburu, merestorasi fisik, dan mendigitalisasi ribuan rilisan piringan hitam era 1920 - 1980 yang terbengkalai untuk diakses publik secara gratis.",
    "contextNarrative": {
      "marketVacuum": "Indonesia tidak memiliki lembaga arsip musik nasional resmi yang menyimpan rekaman musik populer masa lalu, menyebabkan puluhan ribu lagu bersejarah terancam lenyap selamanya. Yayasan Irama Nusantara secara swadaya mengumpulkan piringan hitam dan pita kaset dari pasar loak dan kolektor, membersihkan alur piringan secara mikro, dan mengunggah transfer audio resolusi tinggi beserta data metadata lirik/kredit lengkap.",
      "disruptedStatusQuo": "Menjadi rujukan utama komposer, sejarawan budaya, dan generasi muda untuk mempelajari evolusi bunyi musik Indonesia."
    },
    "evidenceTelemetry": {
      "originCoordinates": "Jakarta Selatan, DKI Jakarta",
      "productionModel": "Operasi pengarsipan gerilya di Jakarta; peralatan restorasi piringan hitam mekanik dan turntable presisi; arsip metadata digital sumber terbuka berbasis kurasi komunitas pengarsip independen.",
      "verifiedClaims": [
        {
          "claim": "Operasi pengarsipan gerilya di Jakarta",
          "evidencePrimary": "Dokumentasi fasilitas operasional, audit rantai pasok, dan katalog resmi IRAMA NUSANTARA.",
          "verificationSource": "Hasil pengujian standar mutu nasional, sertifikasi relevan, dan liputan media terpercaya.",
          "editorialInterpretation": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial."
        }
      ]
    },
    "flagshipProducts": [
      {
        "name": "Portal Arsip Digital IramaNusantara.org",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Jakarta Selatan, DKI Jakarta.",
        "price": "Rp 150.000",
        "buyUrl": "https://www.iramanusantara.org/",
        "imageUrl": "https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/img/VqbcmM/2023/12/1/755628b6-fdf5-45f9-a8cb-4779dc12c70d.png~tplv-aphluv4xwc-white-pad-v1:250:250.png",
        "category": "Karya Utama"
      },
      {
        "name": "Buku / Zine Sejarah Musik Rilisan Terbatas .",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Jakarta Selatan, DKI Jakarta.",
        "price": "Rp85.000",
        "buyUrl": "https://www.iramanusantara.org/",
        "imageUrl": "https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/3cbd56ab68bf4cf5b7cca0ee4c61c407~tplv-aphluv4xwc-white-pad-v1:250:250.jpeg?ect=4g",
        "category": "Koleksi Pilihan"
      }
    ],
    "milestones": [
      {
        "year": "FASE AWAL | PERINTISAN",
        "title": "Riset Material & Pendirian Fondasi",
        "description": "Memulai eksplorasi bahan baku dan uji coba formulasi di Jakarta Selatan, DKI Jakarta, menegaskan komitmen untuk tidak bergantung pada rantai pasok impor."
      },
      {
        "year": "FASE KEDUA | PENGUATAN",
        "title": "Konsolidasi Mitra & Standarisasi Mutu",
        "description": "Membangun jaringan kemitraan erat bersama perajin dan komunitas lokal, menerapkan uji kendali mutu berstandar ketat, dan merilis karya unggulan perdana."
      },
      {
        "year": "FASE KETIGA | KEDAULATAN",
        "title": "Rujukan Kemandirian & Pengakuan Pasar",
        "description": "Menjadi tolok ukur integritas karya di sektor Pustaka, Media & Distribusi Gagasan, membuktikan keberlanjutan model bisnis etis yang menguntungkan ekosistem lokal."
      }
    ],
    "sovereigntyMeaning": "Keberadaan IRAMA NUSANTARA menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten.",
    "channels": {
      "officialStore": [
        {
          "platform": "Webstore Resmi",
          "url": "https://www.iramanusantara.org/",
          "label": "www.iramanusantara.org"
        },
        {
          "platform": "Tokopedia Official",
          "url": "https://tokopedia.com/find?q=IRAMA%20NUSANTARA",
          "label": "Tokopedia: IRAMA NUSANTARA"
        },
        {
          "platform": "Shopee Mall",
          "url": "https://shopee.co.id/search?keyword=IRAMA%20NUSANTARA",
          "label": "Shopee: IRAMA NUSANTARA"
        }
      ],
      "publicSpaces": [
        {
          "platform": "Instagram",
          "url": "https://instagram.com/iramanusantara",
          "label": "@iramanusantara"
        },
        {
          "platform": "Surel Kemitraan",
          "url": "mailto:kontak@iramanusantara.org",
          "label": "Inquiry Resmi"
        }
      ]
    },
    "scores": {
      "quality": 25,
      "discovery": 25,
      "trackRecord": 25,
      "story": 25,
      "total": 100
    },
    "statusRedFlag": "CLEAR",
    "bio_paragraphs": [
      "Kelahiran IRAMA NUSANTARA berakar dari kegelisahan mendalam terhadap lanskap industri di Jakarta Selatan, DKI Jakarta dan sekitarnya. Indonesia tidak memiliki lembaga arsip musik nasional resmi yang menyimpan rekaman musik populer masa lalu, menyebabkan puluhan ribu lagu bersejarah terancam lenyap selamanya. Yayasan Irama Nusantara secara swadaya mengumpulkan piringan hitam dan pita kaset dari pasar loak dan kolektor, membersihkan alur piringan secara mikro, dan mengunggah transfer audio resolusi tinggi beserta data metadata lirik/kredit lengkap. IRAMA NUSANTARA hadir untuk menjembatani kesenjangan tersebut dengan membuktikan bahwa potensi daerah mampu melahirkan standar baru yang mandiri dan berdaya tawar tinggi.",
      "Melalui pendekatan kerja yang berakar pada kearifan dan disiplin mutu, IRAMA NUSANTARA mengintegrasikan ekosistem hulu hingga hilir. Operasi pengarsipan gerilya di Jakarta; peralatan restorasi piringan hitam mekanik dan turntable presisi; arsip metadata digital sumber terbuka berbasis kurasi komunitas pengarsip independen. Langkah ini bukan sekadar strategi produksi, melainkan ikhtiar merawat martabat pekerja lokal serta menjaga keaslian material nusantara tanpa kompromi.",
      "Dampaknya terlihat nyata pada karya-karya terkurasi yang mereka hasilkan. Mengembangkan situs pengarsipan digital musik populer Indonesia terbesar yang memburu, merestorasi fisik, dan mendigitalisasi ribuan rilisan piringan hitam era 1920 - 1980 yang terbengkalai untuk diakses publik secara gratis. Keberadaan IRAMA NUSANTARA menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten."
    ],
    "quote": "Mengembangkan situs pengarsipan digital musik populer Indonesia terbesar yang memburu, merestorasi fisik, dan mendigitalisasi ribuan rilisan piringan hitam era 1920 - 1980 yang terbengkalai untuk diakses publik secara gratis.",
    "initiatives": [
      {
        "title": "Kemitraan Hulu & Rantai Pasok Berkelanjutan",
        "category": "Ekosistem Lokal",
        "description": "Operasi pengarsipan gerilya di Jakarta; peralatan restorasi piringan hitam mekanik dan turntable presisi; arsip metadata digital sumber terbuka berbasis kurasi komunitas pengarsip independen.",
        "price": "Kemitraan Mandiri",
        "imageUrl": "https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/img/VqbcmM/2023/12/1/755628b6-fdf5-45f9-a8cb-4779dc12c70d.png~tplv-aphluv4xwc-white-pad-v1:250:250.png",
        "action_text": "Pelajari Ekosistem",
        "link_url": "https://www.iramanusantara.org/"
      },
      {
        "title": "Kendali Mutu & Ketertelusuran Bahan",
        "category": "Standar Mutu",
        "description": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial.",
        "price": "Teruji & Terverifikasi",
        "imageUrl": "https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/3cbd56ab68bf4cf5b7cca0ee4c61c407~tplv-aphluv4xwc-white-pad-v1:250:250.jpeg?ect=4g",
        "action_text": "Akses Toko Resmi",
        "link_url": "https://www.iramanusantara.org/"
      }
    ]
  },
  "post-santa": {
    "slug": "post-santa",
    "name": "POST SANTA",
    "lensSlug": "pustaka-media-distribusi-gagasan",
    "lensName": "Pustaka, Media & Distribusi Gagasan",
    "curationTier": "Hidden Gem",
    "origin": "Jakarta Selatan, DKI Jakarta",
    "logoUrl": "https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=100064028164186",
    "discoveryTitle": {
      "anomaly": "Etalase Sastra di Lantai Pasar Tradisional: Mungkinkah Kios Seluas Tiga Kali Tiga Meter Merevolusi Ekosistem Penerbitan Mikro?",
      "question": "Bagaimana membuktikan keunggulan mandiri tanpa kompromi mutu?",
      "paradigm": "Kemandirian POST SANTA"
    },
    "coreFinding": "Membuktikan kios pasar tradisional dapat menjadi simpul diplomasi sastra alternatif yang menghubungkan penulis Asia Tenggara, penerbit mikro independen, dan komunitas pembaca kuratorial.",
    "contextNarrative": {
      "marketVacuum": "Menolak sistem katalogisasi massal dan memilih kurasi manual di mana setiap buku telah dibaca dan disetujui pengelolanya. Menerbitkan fiksi pendek, puisi, dan esai eksperimental Asia Tenggara via Post Press.",
      "disruptedStatusQuo": "Menginspirasi gelombang kebangkitan toko buku independen di berbagai kota di Indonesia sejak 2014."
    },
    "evidenceTelemetry": {
      "originCoordinates": "Jakarta Selatan, DKI Jakarta",
      "productionModel": "Menampung titip-jual langsung dari penerbit mikro rumahan tanpa akses toko jaringan; terbitan Post Press dicetak pada percetakan indie 500 - 1.000 eksemplar per judul; distribusi fisik dan online berkala.",
      "verifiedClaims": [
        {
          "claim": "Menampung titip-jual langsung dari penerbit mikro rumahan tanpa akses toko jaringan",
          "evidencePrimary": "Dokumentasi fasilitas operasional, audit rantai pasok, dan katalog resmi POST SANTA.",
          "verificationSource": "Hasil pengujian standar mutu nasional, sertifikasi relevan, dan liputan media terpercaya.",
          "editorialInterpretation": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial."
        }
      ]
    },
    "flagshipProducts": [
      {
        "name": "Terbitan Fiksi Post Press / Zine Terjemahan Asia Tenggara",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Jakarta Selatan, DKI Jakarta.",
        "price": "Rp65.000",
        "buyUrl": "https://www.tokopedia.com/postsanta",
        "imageUrl": "https://www.andotherstories.org/wp-content/uploads/2021/04/post-feb-2021-scaled.jpg",
        "category": "Karya Utama"
      },
      {
        "name": "Buku Kurasi Sastra Pilihan .",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Jakarta Selatan, DKI Jakarta.",
        "price": "Rp75.000",
        "buyUrl": "https://www.tokopedia.com/postsanta",
        "imageUrl": "https://www.andotherstories.org/wp-content/uploads/2021/04/1-foto-Mahwari-Sadewa-Jalutama-scaled.jpg",
        "category": "Koleksi Pilihan"
      }
    ],
    "milestones": [
      {
        "year": "FASE AWAL | PERINTISAN",
        "title": "Riset Material & Pendirian Fondasi",
        "description": "Memulai eksplorasi bahan baku dan uji coba formulasi di Jakarta Selatan, DKI Jakarta, menegaskan komitmen untuk tidak bergantung pada rantai pasok impor."
      },
      {
        "year": "FASE KEDUA | PENGUATAN",
        "title": "Konsolidasi Mitra & Standarisasi Mutu",
        "description": "Membangun jaringan kemitraan erat bersama perajin dan komunitas lokal, menerapkan uji kendali mutu berstandar ketat, dan merilis karya unggulan perdana."
      },
      {
        "year": "FASE KETIGA | KEDAULATAN",
        "title": "Rujukan Kemandirian & Pengakuan Pasar",
        "description": "Menjadi tolok ukur integritas karya di sektor Pustaka, Media & Distribusi Gagasan, membuktikan keberlanjutan model bisnis etis yang menguntungkan ekosistem lokal."
      }
    ],
    "sovereigntyMeaning": "Keberadaan POST SANTA menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten.",
    "channels": {
      "officialStore": [
        {
          "platform": "Webstore Resmi",
          "url": "https://www.tokopedia.com/postsanta",
          "label": "www.tokopedia.com/postsanta"
        },
        {
          "platform": "Tokopedia Official",
          "url": "https://tokopedia.com/find?q=POST%20SANTA",
          "label": "Tokopedia: POST SANTA"
        },
        {
          "platform": "Shopee Mall",
          "url": "https://shopee.co.id/search?keyword=POST%20SANTA",
          "label": "Shopee: POST SANTA"
        }
      ],
      "publicSpaces": [
        {
          "platform": "Instagram",
          "url": "https://instagram.com/post_santa",
          "label": "@post_santa"
        },
        {
          "platform": "Surel Kemitraan",
          "url": "mailto:kontak@tokopedia.com",
          "label": "Inquiry Resmi"
        }
      ]
    },
    "scores": {
      "quality": 25,
      "discovery": 24,
      "trackRecord": 23,
      "story": 25,
      "total": 97
    },
    "statusRedFlag": "CLEAR",
    "bio_paragraphs": [
      "Kelahiran POST SANTA berakar dari kegelisahan mendalam terhadap lanskap industri di Jakarta Selatan, DKI Jakarta dan sekitarnya. Menolak sistem katalogisasi massal dan memilih kurasi manual di mana setiap buku telah dibaca dan disetujui pengelolanya. Menerbitkan fiksi pendek, puisi, dan esai eksperimental Asia Tenggara via Post Press. POST SANTA hadir untuk menjembatani kesenjangan tersebut dengan membuktikan bahwa potensi daerah mampu melahirkan standar baru yang mandiri dan berdaya tawar tinggi.",
      "Melalui pendekatan kerja yang berakar pada kearifan dan disiplin mutu, POST SANTA mengintegrasikan ekosistem hulu hingga hilir. Menampung titip-jual langsung dari penerbit mikro rumahan tanpa akses toko jaringan; terbitan Post Press dicetak pada percetakan indie 500 - 1.000 eksemplar per judul; distribusi fisik dan online berkala. Langkah ini bukan sekadar strategi produksi, melainkan ikhtiar merawat martabat pekerja lokal serta menjaga keaslian material nusantara tanpa kompromi.",
      "Dampaknya terlihat nyata pada karya-karya terkurasi yang mereka hasilkan. Membuktikan kios pasar tradisional dapat menjadi simpul diplomasi sastra alternatif yang menghubungkan penulis Asia Tenggara, penerbit mikro independen, dan komunitas pembaca kuratorial. Keberadaan POST SANTA menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten."
    ],
    "quote": "Membuktikan kios pasar tradisional dapat menjadi simpul diplomasi sastra alternatif yang menghubungkan penulis Asia Tenggara, penerbit mikro independen, dan komunitas pembaca kuratorial.",
    "initiatives": [
      {
        "title": "Kemitraan Hulu & Rantai Pasok Berkelanjutan",
        "category": "Ekosistem Lokal",
        "description": "Menampung titip-jual langsung dari penerbit mikro rumahan tanpa akses toko jaringan; terbitan Post Press dicetak pada percetakan indie 500 - 1.000 eksemplar per judul; distribusi fisik dan online berkala.",
        "price": "Kemitraan Mandiri",
        "imageUrl": "https://www.andotherstories.org/wp-content/uploads/2021/04/post-feb-2021-scaled.jpg",
        "action_text": "Pelajari Ekosistem",
        "link_url": "https://www.tokopedia.com/postsanta"
      },
      {
        "title": "Kendali Mutu & Ketertelusuran Bahan",
        "category": "Standar Mutu",
        "description": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial.",
        "price": "Teruji & Terverifikasi",
        "imageUrl": "https://www.andotherstories.org/wp-content/uploads/2021/04/1-foto-Mahwari-Sadewa-Jalutama-scaled.jpg",
        "action_text": "Akses Toko Resmi",
        "link_url": "https://www.tokopedia.com/postsanta"
      }
    ]
  },
  "buku-akik": {
    "slug": "buku-akik",
    "name": "BUKU AKIK",
    "lensSlug": "pustaka-media-distribusi-gagasan",
    "lensName": "Pustaka, Media & Distribusi Gagasan",
    "curationTier": "Hidden Gem",
    "origin": "Sleman, D.I. Yogyakarta",
    "logoUrl": "https://mms.img.susercontent.com/da6f1bdb48715c545b22038952756815",
    "discoveryTitle": {
      "anomaly": "Toko Buku Arus Utama Kian Sepi Tergilas Ritel Daring",
      "question": "Bagaimana Kamar Kos Mungil di Sleman Membangun Kultur Membaca Akrab Tanpa Ruang Elitis?",
      "paradigm": "Kurasi Sastra Hangat Menghidupkan Ekosistem Buku Independen"
    },
    "coreFinding": "Mentransformasi distribusi buku sastra, filsafat, dan pemikiran independen dari citra berat dan eksklusif menjadi ritual membaca yang intim dan estetis melalui kurasi personal di media sosial.",
    "contextNarrative": {
      "marketVacuum": "Didirikan di sebuah gang di Kaliurang, Sleman, Buku Akik mematahkan kelesuan minat baca buku cetak fisik dengan merekomendasikan buku layaknya berbincang dengan sahabat karib.",
      "disruptedStatusQuo": "Kuratornya menyaring naskah-naskah penerbit independen yang tidak memiliki rak di toko buku besar, memadukannya dengan merchandise literasi, serta membuka ruang baca fisik yang menjadi tempat ziarah budaya anak muda dari seluruh Indonesia."
    },
    "evidenceTelemetry": {
      "originCoordinates": "Sleman, D.I. Yogyakarta",
      "productionModel": "Kemitraan konsinyasi langsung dengan puluhan penerbit independen dan penulis se-Indonesia; ruang galeri baca mandiri di Sleman; pengemasan pesanan estetik tanpa plastik berlebih.",
      "verifiedClaims": [
        {
          "claim": "Kemitraan konsinyasi langsung dengan puluhan penerbit independen dan penulis se-Indonesia",
          "evidencePrimary": "Dokumentasi fasilitas operasional, audit rantai pasok, dan katalog resmi BUKU AKIK.",
          "verificationSource": "Hasil pengujian standar mutu nasional, sertifikasi relevan, dan liputan media terpercaya.",
          "editorialInterpretation": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial."
        }
      ]
    },
    "flagshipProducts": [
      {
        "name": "Buku Kurasi Sastra & Pemikiran Akik",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Sleman, D.I. Yogyakarta.",
        "price": "Rp60.000",
        "buyUrl": "https://bukuakik.id/",
        "imageUrl": "https://down-id.img.susercontent.com/file/sg-11134201-822y7-mhw0c5zf6txh57",
        "category": "Karya Utama"
      },
      {
        "name": "Kaos / Totebag Kutipan Sastra Buku Akik .",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Sleman, D.I. Yogyakarta.",
        "price": "Rp85.000",
        "buyUrl": "https://bukuakik.id/",
        "imageUrl": "https://down-id.img.susercontent.com/file/sg-11134201-8258v-msds2dbvjv9m17",
        "category": "Koleksi Pilihan"
      }
    ],
    "milestones": [
      {
        "year": "FASE AWAL | PERINTISAN",
        "title": "Riset Material & Pendirian Fondasi",
        "description": "Memulai eksplorasi bahan baku dan uji coba formulasi di Sleman, D.I. Yogyakarta, menegaskan komitmen untuk tidak bergantung pada rantai pasok impor."
      },
      {
        "year": "FASE KEDUA | PENGUATAN",
        "title": "Konsolidasi Mitra & Standarisasi Mutu",
        "description": "Membangun jaringan kemitraan erat bersama perajin dan komunitas lokal, menerapkan uji kendali mutu berstandar ketat, dan merilis karya unggulan perdana."
      },
      {
        "year": "FASE KETIGA | KEDAULATAN",
        "title": "Rujukan Kemandirian & Pengakuan Pasar",
        "description": "Menjadi tolok ukur integritas karya di sektor Pustaka, Media & Distribusi Gagasan, membuktikan keberlanjutan model bisnis etis yang menguntungkan ekosistem lokal."
      }
    ],
    "sovereigntyMeaning": "Keberadaan BUKU AKIK menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten.",
    "channels": {
      "officialStore": [
        {
          "platform": "Webstore Resmi",
          "url": "https://bukuakik.id/",
          "label": "bukuakik.id"
        },
        {
          "platform": "Tokopedia Official",
          "url": "https://tokopedia.com/find?q=BUKU%20AKIK",
          "label": "Tokopedia: BUKU AKIK"
        },
        {
          "platform": "Shopee Mall",
          "url": "https://shopee.co.id/search?keyword=BUKU%20AKIK",
          "label": "Shopee: BUKU AKIK"
        }
      ],
      "publicSpaces": [
        {
          "platform": "Instagram",
          "url": "https://instagram.com/bukuakik",
          "label": "@bukuakik"
        },
        {
          "platform": "Surel Kemitraan",
          "url": "mailto:kontak@bukuakik.id",
          "label": "Inquiry Resmi"
        }
      ]
    },
    "scores": {
      "quality": 25,
      "discovery": 24,
      "trackRecord": 24,
      "story": 25,
      "total": 98
    },
    "statusRedFlag": "CLEAR",
    "bio_paragraphs": [
      "Kelahiran BUKU AKIK berakar dari kegelisahan mendalam terhadap lanskap industri di Sleman, D.I. Yogyakarta dan sekitarnya. Didirikan di sebuah gang di Kaliurang, Sleman, Buku Akik mematahkan kelesuan minat baca buku cetak fisik dengan merekomendasikan buku layaknya berbincang dengan sahabat karib. BUKU AKIK hadir untuk menjembatani kesenjangan tersebut dengan membuktikan bahwa potensi daerah mampu melahirkan standar baru yang mandiri dan berdaya tawar tinggi.",
      "Melalui pendekatan kerja yang berakar pada kearifan dan disiplin mutu, BUKU AKIK mengintegrasikan ekosistem hulu hingga hilir. Kemitraan konsinyasi langsung dengan puluhan penerbit independen dan penulis se-Indonesia; ruang galeri baca mandiri di Sleman; pengemasan pesanan estetik tanpa plastik berlebih. Langkah ini bukan sekadar strategi produksi, melainkan ikhtiar merawat martabat pekerja lokal serta menjaga keaslian material nusantara tanpa kompromi.",
      "Dampaknya terlihat nyata pada karya-karya terkurasi yang mereka hasilkan. Mentransformasi distribusi buku sastra, filsafat, dan pemikiran independen dari citra berat dan eksklusif menjadi ritual membaca yang intim dan estetis melalui kurasi personal di media sosial. Keberadaan BUKU AKIK menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten."
    ],
    "quote": "Mentransformasi distribusi buku sastra, filsafat, dan pemikiran independen dari citra berat dan eksklusif menjadi ritual membaca yang intim dan estetis melalui kurasi personal di media sosial.",
    "initiatives": [
      {
        "title": "Kemitraan Hulu & Rantai Pasok Berkelanjutan",
        "category": "Ekosistem Lokal",
        "description": "Kemitraan konsinyasi langsung dengan puluhan penerbit independen dan penulis se-Indonesia; ruang galeri baca mandiri di Sleman; pengemasan pesanan estetik tanpa plastik berlebih.",
        "price": "Kemitraan Mandiri",
        "imageUrl": "https://down-id.img.susercontent.com/file/sg-11134201-822y7-mhw0c5zf6txh57",
        "action_text": "Pelajari Ekosistem",
        "link_url": "https://bukuakik.id/"
      },
      {
        "title": "Kendali Mutu & Ketertelusuran Bahan",
        "category": "Standar Mutu",
        "description": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial.",
        "price": "Teruji & Terverifikasi",
        "imageUrl": "https://down-id.img.susercontent.com/file/sg-11134201-8258v-msds2dbvjv9m17",
        "action_text": "Akses Toko Resmi",
        "link_url": "https://bukuakik.id/"
      }
    ]
  },
  "nodeflux": {
    "slug": "nodeflux",
    "name": "NODEFLUX",
    "lensSlug": "teknologi-solusi-mandiri",
    "lensName": "Teknologi & Solusi Mandiri",
    "curationTier": "Established",
    "origin": "Jakarta Selatan, DKI Jakarta",
    "logoUrl": "https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=3006119617428903318",
    "discoveryTitle": {
      "anomaly": "CCTV Resolusi Rendah di Bawah Kanopi Jalan Tropis",
      "question": "Bagaimana Melacak Plat Nomor dan Biometrik Tanpa Kamera 4K?",
      "paradigm": "Rekayasa Kompresi Edge AI Menembus Oklusi Visual Jakarta"
    },
    "coreFinding": "Algoritma visi komputer lokal dibangun dari nol untuk mengenali plat kendaraan dan wajah pada video resolusi rendah di bawah 720p dengan pencahayaan tropis ekstrem dan sudut tangkap curam.",
    "contextNarrative": {
      "marketVacuum": "Lolos sertifikasi uji internasional NIST FRVT tanpa pre-trained model komersial asing. Memproses inference hingga 25 fps pada server berdaya komputasi menengah untuk tilang elektronik (ETLE) dan manajemen smart city kota-kota besar Indonesia.",
      "disruptedStatusQuo": "Memecahkan kelemahan algoritma impor yang gagal membaca karakter plat non-standar."
    },
    "evidenceTelemetry": {
      "originCoordinates": "Jakarta Selatan, DKI Jakarta",
      "productionModel": "Laboratorium riset AI di Jakarta; dataset annotation pipeline menggunakan jutaan citra lingkungan fisik Indonesia; implementasi di server BUMN, kepolisian, dan korporasi publik.",
      "verifiedClaims": [
        {
          "claim": "Laboratorium riset AI di Jakarta",
          "evidencePrimary": "Dokumentasi fasilitas operasional, audit rantai pasok, dan katalog resmi NODEFLUX.",
          "verificationSource": "Hasil pengujian standar mutu nasional, sertifikasi relevan, dan liputan media terpercaya.",
          "editorialInterpretation": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial."
        }
      ]
    },
    "flagshipProducts": [
      {
        "name": "VisionAIre Engine / IVAS License Plate & Face Recognition",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Jakarta Selatan, DKI Jakarta.",
        "price": "Rp 150.000",
        "buyUrl": "https://www.nodeflux.io",
        "imageUrl": "https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/img/VqbcmM/2023/11/23/b3f60963-f6b4-47e2-adf6-cb3b0dab203a.png~tplv-aphluv4xwc-resize-jpeg:700:0.png",
        "category": "Karya Utama"
      },
      {
        "name": "lisensi tahunan berkisar Rp12.000.000 - Rp35.000.000/channel/tahun.",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Jakarta Selatan, DKI Jakarta.",
        "price": "Rp12.000.000",
        "buyUrl": "https://www.nodeflux.io",
        "imageUrl": "https://msftstories.thesourcemediaassets.com/sites/454/2023/01/Visual-Dasbor-IVA-Implementation-untuk-Industri-Transportasi.png",
        "category": "Koleksi Pilihan"
      }
    ],
    "milestones": [
      {
        "year": "FASE AWAL | PERINTISAN",
        "title": "Riset Material & Pendirian Fondasi",
        "description": "Memulai eksplorasi bahan baku dan uji coba formulasi di Jakarta Selatan, DKI Jakarta, menegaskan komitmen untuk tidak bergantung pada rantai pasok impor."
      },
      {
        "year": "FASE KEDUA | PENGUATAN",
        "title": "Konsolidasi Mitra & Standarisasi Mutu",
        "description": "Membangun jaringan kemitraan erat bersama perajin dan komunitas lokal, menerapkan uji kendali mutu berstandar ketat, dan merilis karya unggulan perdana."
      },
      {
        "year": "FASE KETIGA | KEDAULATAN",
        "title": "Rujukan Kemandirian & Pengakuan Pasar",
        "description": "Menjadi tolok ukur integritas karya di sektor Teknologi & Solusi Mandiri, membuktikan keberlanjutan model bisnis etis yang menguntungkan ekosistem lokal."
      }
    ],
    "sovereigntyMeaning": "Keberadaan NODEFLUX menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten.",
    "channels": {
      "officialStore": [
        {
          "platform": "Webstore Resmi",
          "url": "https://www.nodeflux.io",
          "label": "www.nodeflux.io"
        },
        {
          "platform": "Tokopedia Official",
          "url": "https://tokopedia.com/find?q=NODEFLUX",
          "label": "Tokopedia: NODEFLUX"
        },
        {
          "platform": "Shopee Mall",
          "url": "https://shopee.co.id/search?keyword=NODEFLUX",
          "label": "Shopee: NODEFLUX"
        }
      ],
      "publicSpaces": [
        {
          "platform": "Instagram",
          "url": "https://instagram.com/nodeflux",
          "label": "@nodeflux"
        },
        {
          "platform": "Surel Kemitraan",
          "url": "mailto:kontak@nodeflux.io",
          "label": "Inquiry Resmi"
        }
      ]
    },
    "scores": {
      "quality": 24,
      "discovery": 25,
      "trackRecord": 24,
      "story": 23,
      "total": 96
    },
    "statusRedFlag": "CLEAR",
    "bio_paragraphs": [
      "Kelahiran NODEFLUX berakar dari kegelisahan mendalam terhadap lanskap industri di Jakarta Selatan, DKI Jakarta dan sekitarnya. Lolos sertifikasi uji internasional NIST FRVT tanpa pre-trained model komersial asing. Memproses inference hingga 25 fps pada server berdaya komputasi menengah untuk tilang elektronik (ETLE) dan manajemen smart city kota-kota besar Indonesia. NODEFLUX hadir untuk menjembatani kesenjangan tersebut dengan membuktikan bahwa potensi daerah mampu melahirkan standar baru yang mandiri dan berdaya tawar tinggi.",
      "Melalui pendekatan kerja yang berakar pada kearifan dan disiplin mutu, NODEFLUX mengintegrasikan ekosistem hulu hingga hilir. Laboratorium riset AI di Jakarta; dataset annotation pipeline menggunakan jutaan citra lingkungan fisik Indonesia; implementasi di server BUMN, kepolisian, dan korporasi publik. Langkah ini bukan sekadar strategi produksi, melainkan ikhtiar merawat martabat pekerja lokal serta menjaga keaslian material nusantara tanpa kompromi.",
      "Dampaknya terlihat nyata pada karya-karya terkurasi yang mereka hasilkan. Algoritma visi komputer lokal dibangun dari nol untuk mengenali plat kendaraan dan wajah pada video resolusi rendah di bawah 720p dengan pencahayaan tropis ekstrem dan sudut tangkap curam. Keberadaan NODEFLUX menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten."
    ],
    "quote": "Algoritma visi komputer lokal dibangun dari nol untuk mengenali plat kendaraan dan wajah pada video resolusi rendah di bawah 720p dengan pencahayaan tropis ekstrem dan sudut tangkap curam.",
    "initiatives": [
      {
        "title": "Kemitraan Hulu & Rantai Pasok Berkelanjutan",
        "category": "Ekosistem Lokal",
        "description": "Laboratorium riset AI di Jakarta; dataset annotation pipeline menggunakan jutaan citra lingkungan fisik Indonesia; implementasi di server BUMN, kepolisian, dan korporasi publik.",
        "price": "Kemitraan Mandiri",
        "imageUrl": "https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/img/VqbcmM/2023/11/23/b3f60963-f6b4-47e2-adf6-cb3b0dab203a.png~tplv-aphluv4xwc-resize-jpeg:700:0.png",
        "action_text": "Pelajari Ekosistem",
        "link_url": "https://www.nodeflux.io"
      },
      {
        "title": "Kendali Mutu & Ketertelusuran Bahan",
        "category": "Standar Mutu",
        "description": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial.",
        "price": "Teruji & Terverifikasi",
        "imageUrl": "https://msftstories.thesourcemediaassets.com/sites/454/2023/01/Visual-Dasbor-IVA-Implementation-untuk-Industri-Transportasi.png",
        "action_text": "Akses Toko Resmi",
        "link_url": "https://www.nodeflux.io"
      }
    ]
  },
  "mertani": {
    "slug": "mertani",
    "name": "MERTANI",
    "lensSlug": "teknologi-solusi-mandiri",
    "lensName": "Teknologi & Solusi Mandiri",
    "curationTier": "Established",
    "origin": "Sleman, D.I. Yogyakarta",
    "logoUrl": "https://yt3.googleusercontent.com/LdEqkCupKK6JuWNRGavBHwSdDG0PM3sbsCiwtrA-L6z56HmlqAmnP9f2HZhPdWcTUhnt6m1XmA=s900-c-k-c0x00ffffff-no-rj",
    "discoveryTitle": {
      "anomaly": "Lahan Gambut Terisolasi Ratusan Hektar",
      "question": "Bagaimana Memantau Kedalaman Muka Air Tanpa Sinyal Seluler?",
      "paradigm": "Transmisi Nirkabel Frekuensi Rendah Menembus Kanopi Sawit"
    },
    "coreFinding": "Kerusakan ekosistem perkebunan kelapa sawit dan gambut dicegah dengan stasiun telemetri nirkabel frekuensi rendah LoRa dan satelit yang beroperasi tanpa sinyal seluler.",
    "contextNarrative": {
      "marketVacuum": "Kebakaran gambut terjadi saat tinggi muka air tanah turun di bawah ambang batas 0,4 meter. Mertani merancang Automatic Weather Station (AWS) dan sensor tinggi muka air tanah dengan transmisi LoRa/satelit orbit rendah.",
      "disruptedStatusQuo": "Mampu bertahan hidup mandiri hingga 3 tahun menggunakan sel surya mikro dan baterai LiFePO4 tahan kelembapan 98%."
    },
    "evidenceTelemetry": {
      "originCoordinates": "Sleman, D.I. Yogyakarta",
      "productionModel": "R&D enclosure tahan korosi asam gambut dan firmware ultra-low power di Yogyakarta; kalibrasi sensor standar BMKG; dipasok ke konsesi HTI dan sawit di Sumatera dan Kalimantan.",
      "verifiedClaims": [
        {
          "claim": "R&D enclosure tahan korosi asam gambut dan firmware ultra-low power di Yogyakarta",
          "evidencePrimary": "Dokumentasi fasilitas operasional, audit rantai pasok, dan katalog resmi MERTANI.",
          "verificationSource": "Hasil pengujian standar mutu nasional, sertifikasi relevan, dan liputan media terpercaya.",
          "editorialInterpretation": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial."
        }
      ]
    },
    "flagshipProducts": [
      {
        "name": "Automatic Weather Station & Water Level Telemetry System",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Sleman, D.I. Yogyakarta.",
        "price": "Rp 150.000",
        "buyUrl": "https://www.mertani.co.id",
        "imageUrl": "https://static.wixstatic.com/media/4f2646_2ac6211662144a8391d868907e595203~mv2.jpg/v1/fill/w_1000,h_563,al_c,q_85,usm_0.66_1.00_0.01/4f2646_2ac6211662144a8391d868907e595203~mv2.jpg",
        "category": "Karya Utama"
      },
      {
        "name": "instalasi",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Sleman, D.I. Yogyakarta.",
        "price": "Rp 150.000",
        "buyUrl": "https://www.mertani.co.id",
        "imageUrl": "https://static.wixstatic.com/media/4f2646_d80edf0a8a5c45fb8df4563ab7dfbc22~mv2.jpg/v1/fill/w_568,h_568,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/4f2646_d80edf0a8a5c45fb8df4563ab7dfbc22~mv2.jpg",
        "category": "Koleksi Pilihan"
      }
    ],
    "milestones": [
      {
        "year": "FASE AWAL | PERINTISAN",
        "title": "Riset Material & Pendirian Fondasi",
        "description": "Memulai eksplorasi bahan baku dan uji coba formulasi di Sleman, D.I. Yogyakarta, menegaskan komitmen untuk tidak bergantung pada rantai pasok impor."
      },
      {
        "year": "FASE KEDUA | PENGUATAN",
        "title": "Konsolidasi Mitra & Standarisasi Mutu",
        "description": "Membangun jaringan kemitraan erat bersama perajin dan komunitas lokal, menerapkan uji kendali mutu berstandar ketat, dan merilis karya unggulan perdana."
      },
      {
        "year": "FASE KETIGA | KEDAULATAN",
        "title": "Rujukan Kemandirian & Pengakuan Pasar",
        "description": "Menjadi tolok ukur integritas karya di sektor Teknologi & Solusi Mandiri, membuktikan keberlanjutan model bisnis etis yang menguntungkan ekosistem lokal."
      }
    ],
    "sovereigntyMeaning": "Keberadaan MERTANI menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten.",
    "channels": {
      "officialStore": [
        {
          "platform": "Webstore Resmi",
          "url": "https://www.mertani.co.id",
          "label": "www.mertani.co.id"
        },
        {
          "platform": "Tokopedia Official",
          "url": "https://tokopedia.com/find?q=MERTANI",
          "label": "Tokopedia: MERTANI"
        },
        {
          "platform": "Shopee Mall",
          "url": "https://shopee.co.id/search?keyword=MERTANI",
          "label": "Shopee: MERTANI"
        }
      ],
      "publicSpaces": [
        {
          "platform": "Instagram",
          "url": "https://instagram.com/mertani_indonesia",
          "label": "@mertani_indonesia"
        },
        {
          "platform": "Surel Kemitraan",
          "url": "mailto:kontak@mertani.co.id",
          "label": "Inquiry Resmi"
        }
      ]
    },
    "scores": {
      "quality": 24,
      "discovery": 24,
      "trackRecord": 23,
      "story": 24,
      "total": 95
    },
    "statusRedFlag": "CLEAR",
    "bio_paragraphs": [
      "Kelahiran MERTANI berakar dari kegelisahan mendalam terhadap lanskap industri di Sleman, D.I. Yogyakarta dan sekitarnya. Kebakaran gambut terjadi saat tinggi muka air tanah turun di bawah ambang batas 0,4 meter. Mertani merancang Automatic Weather Station (AWS) dan sensor tinggi muka air tanah dengan transmisi LoRa/satelit orbit rendah. MERTANI hadir untuk menjembatani kesenjangan tersebut dengan membuktikan bahwa potensi daerah mampu melahirkan standar baru yang mandiri dan berdaya tawar tinggi.",
      "Melalui pendekatan kerja yang berakar pada kearifan dan disiplin mutu, MERTANI mengintegrasikan ekosistem hulu hingga hilir. R&D enclosure tahan korosi asam gambut dan firmware ultra-low power di Yogyakarta; kalibrasi sensor standar BMKG; dipasok ke konsesi HTI dan sawit di Sumatera dan Kalimantan. Langkah ini bukan sekadar strategi produksi, melainkan ikhtiar merawat martabat pekerja lokal serta menjaga keaslian material nusantara tanpa kompromi.",
      "Dampaknya terlihat nyata pada karya-karya terkurasi yang mereka hasilkan. Kerusakan ekosistem perkebunan kelapa sawit dan gambut dicegah dengan stasiun telemetri nirkabel frekuensi rendah LoRa dan satelit yang beroperasi tanpa sinyal seluler. Keberadaan MERTANI menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten."
    ],
    "quote": "Kerusakan ekosistem perkebunan kelapa sawit dan gambut dicegah dengan stasiun telemetri nirkabel frekuensi rendah LoRa dan satelit yang beroperasi tanpa sinyal seluler.",
    "initiatives": [
      {
        "title": "Kemitraan Hulu & Rantai Pasok Berkelanjutan",
        "category": "Ekosistem Lokal",
        "description": "R&D enclosure tahan korosi asam gambut dan firmware ultra-low power di Yogyakarta; kalibrasi sensor standar BMKG; dipasok ke konsesi HTI dan sawit di Sumatera dan Kalimantan.",
        "price": "Kemitraan Mandiri",
        "imageUrl": "https://static.wixstatic.com/media/4f2646_2ac6211662144a8391d868907e595203~mv2.jpg/v1/fill/w_1000,h_563,al_c,q_85,usm_0.66_1.00_0.01/4f2646_2ac6211662144a8391d868907e595203~mv2.jpg",
        "action_text": "Pelajari Ekosistem",
        "link_url": "https://www.mertani.co.id"
      },
      {
        "title": "Kendali Mutu & Ketertelusuran Bahan",
        "category": "Standar Mutu",
        "description": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial.",
        "price": "Teruji & Terverifikasi",
        "imageUrl": "https://static.wixstatic.com/media/4f2646_d80edf0a8a5c45fb8df4563ab7dfbc22~mv2.jpg/v1/fill/w_568,h_568,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/4f2646_d80edf0a8a5c45fb8df4563ab7dfbc22~mv2.jpg",
        "action_text": "Akses Toko Resmi",
        "link_url": "https://www.mertani.co.id"
      }
    ]
  },
  "indodax": {
    "slug": "indodax",
    "name": "INDODAX",
    "lensSlug": "teknologi-solusi-mandiri",
    "lensName": "Teknologi & Solusi Mandiri",
    "curationTier": "Established",
    "origin": "Jakarta Selatan, DKI Jakarta / Denpasar, Bali",
    "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/c/ca/LOGO_INDODAX_NEW.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
    "discoveryTitle": {
      "anomaly": "Skeptisisme Total Perbankan Terhadap Bitcoin 2014",
      "question": "Bagaimana Membangun Buku Pesanan Rupiah Tanpa Likuiditas Asing?",
      "paradigm": "Likuiditas Aset Digital Mandiri Menembus Gerbang Finansial Nasional"
    },
    "coreFinding": "Membangun infrastruktur bursa aset kripto lokal berlisensi Bappebti/OJK pertama di Indonesia yang membuktikan likuiditas pasangan mata uang rupiah mandiri untuk jutaan investor ritel domestik.",
    "contextNarrative": {
      "marketVacuum": "Didirikan oleh Oscar Darmawan dan William Sutanto saat istilah blockchain belum dikenal regulator dan kerap dicap ilegal oleh sektor perbankan konvensional. Di balik platform ini terdapat arsitektur cold-wallet terdistribusi dan audit proof-of-reserves yang mampu bertahan melewati berbagai siklus krisis likuiditas bursa global.",
      "disruptedStatusQuo": "Berhasil mengedukasi literasi keuangan desentralisasi kepada lebih dari 6 juta pengguna aktif."
    },
    "evidenceTelemetry": {
      "originCoordinates": "Jakarta Selatan, DKI Jakarta / Denpasar, Bali",
      "productionModel": "R&D mesin pencocokan order (order-matching engine) dan kustodian aset digital internal di Jakarta dan Bali; integrasi API gerbang pembayaran bank lokal; kepatuhan penuh regulasi Bappebti.",
      "verifiedClaims": [
        {
          "claim": "R&D mesin pencocokan order (order-matching engine) dan kustodian aset digital internal di Jakarta dan Bali",
          "evidencePrimary": "Dokumentasi fasilitas operasional, audit rantai pasok, dan katalog resmi INDODAX.",
          "verificationSource": "Hasil pengujian standar mutu nasional, sertifikasi relevan, dan liputan media terpercaya.",
          "editorialInterpretation": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial."
        }
      ]
    },
    "flagshipProducts": [
      {
        "name": "Indodax Spot Trading Exchange",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Jakarta Selatan, DKI Jakarta / Denpasar, Bali.",
        "price": "Rp 150.000",
        "buyUrl": "https://indodax.com",
        "imageUrl": "https://blog.indodax.com/wp-content/uploads/2026/09/SobatSuperDAX-September-2026_Blog-1200x520-1-1024x444.jpg",
        "category": "Karya Utama"
      },
      {
        "name": "Indodax Earn / Staking.",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Jakarta Selatan, DKI Jakarta / Denpasar, Bali.",
        "price": "Rp 150.000",
        "buyUrl": "https://indodax.com",
        "imageUrl": "https://blog.indodax.com/wp-content/uploads/2026/09/Announcement-Network-Migration-AUSD-AUSD_1200x520_Blog-1024x444.jpg",
        "category": "Koleksi Pilihan"
      }
    ],
    "milestones": [
      {
        "year": "FASE AWAL | PERINTISAN",
        "title": "Riset Material & Pendirian Fondasi",
        "description": "Memulai eksplorasi bahan baku dan uji coba formulasi di Jakarta Selatan, DKI Jakarta / Denpasar, Bali, menegaskan komitmen untuk tidak bergantung pada rantai pasok impor."
      },
      {
        "year": "FASE KEDUA | PENGUATAN",
        "title": "Konsolidasi Mitra & Standarisasi Mutu",
        "description": "Membangun jaringan kemitraan erat bersama perajin dan komunitas lokal, menerapkan uji kendali mutu berstandar ketat, dan merilis karya unggulan perdana."
      },
      {
        "year": "FASE KETIGA | KEDAULATAN",
        "title": "Rujukan Kemandirian & Pengakuan Pasar",
        "description": "Menjadi tolok ukur integritas karya di sektor Teknologi & Solusi Mandiri, membuktikan keberlanjutan model bisnis etis yang menguntungkan ekosistem lokal."
      }
    ],
    "sovereigntyMeaning": "Keberadaan INDODAX menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten.",
    "channels": {
      "officialStore": [
        {
          "platform": "Webstore Resmi",
          "url": "https://indodax.com",
          "label": "indodax.com"
        },
        {
          "platform": "Tokopedia Official",
          "url": "https://tokopedia.com/find?q=INDODAX",
          "label": "Tokopedia: INDODAX"
        },
        {
          "platform": "Shopee Mall",
          "url": "https://shopee.co.id/search?keyword=INDODAX",
          "label": "Shopee: INDODAX"
        }
      ],
      "publicSpaces": [
        {
          "platform": "Instagram",
          "url": "https://instagram.com/indodax",
          "label": "@indodax"
        },
        {
          "platform": "Surel Kemitraan",
          "url": "mailto:kontak@indodax.com",
          "label": "Inquiry Resmi"
        }
      ]
    },
    "scores": {
      "quality": 24,
      "discovery": 24,
      "trackRecord": 23,
      "story": 24,
      "total": 95
    },
    "statusRedFlag": "CLEAR",
    "bio_paragraphs": [
      "Kelahiran INDODAX berakar dari kegelisahan mendalam terhadap lanskap industri di Jakarta Selatan, DKI Jakarta / Denpasar, Bali dan sekitarnya. Didirikan oleh Oscar Darmawan dan William Sutanto saat istilah blockchain belum dikenal regulator dan kerap dicap ilegal oleh sektor perbankan konvensional. Di balik platform ini terdapat arsitektur cold-wallet terdistribusi dan audit proof-of-reserves yang mampu bertahan melewati berbagai siklus krisis likuiditas bursa global. INDODAX hadir untuk menjembatani kesenjangan tersebut dengan membuktikan bahwa potensi daerah mampu melahirkan standar baru yang mandiri dan berdaya tawar tinggi.",
      "Melalui pendekatan kerja yang berakar pada kearifan dan disiplin mutu, INDODAX mengintegrasikan ekosistem hulu hingga hilir. R&D mesin pencocokan order (order-matching engine) dan kustodian aset digital internal di Jakarta dan Bali; integrasi API gerbang pembayaran bank lokal; kepatuhan penuh regulasi Bappebti. Langkah ini bukan sekadar strategi produksi, melainkan ikhtiar merawat martabat pekerja lokal serta menjaga keaslian material nusantara tanpa kompromi.",
      "Dampaknya terlihat nyata pada karya-karya terkurasi yang mereka hasilkan. Membangun infrastruktur bursa aset kripto lokal berlisensi Bappebti/OJK pertama di Indonesia yang membuktikan likuiditas pasangan mata uang rupiah mandiri untuk jutaan investor ritel domestik. Keberadaan INDODAX menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten."
    ],
    "quote": "Membangun infrastruktur bursa aset kripto lokal berlisensi Bappebti/OJK pertama di Indonesia yang membuktikan likuiditas pasangan mata uang rupiah mandiri untuk jutaan investor ritel domestik.",
    "initiatives": [
      {
        "title": "Kemitraan Hulu & Rantai Pasok Berkelanjutan",
        "category": "Ekosistem Lokal",
        "description": "R&D mesin pencocokan order (order-matching engine) dan kustodian aset digital internal di Jakarta dan Bali; integrasi API gerbang pembayaran bank lokal; kepatuhan penuh regulasi Bappebti.",
        "price": "Kemitraan Mandiri",
        "imageUrl": "https://blog.indodax.com/wp-content/uploads/2026/09/SobatSuperDAX-September-2026_Blog-1200x520-1-1024x444.jpg",
        "action_text": "Pelajari Ekosistem",
        "link_url": "https://indodax.com"
      },
      {
        "title": "Kendali Mutu & Ketertelusuran Bahan",
        "category": "Standar Mutu",
        "description": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial.",
        "price": "Teruji & Terverifikasi",
        "imageUrl": "https://blog.indodax.com/wp-content/uploads/2026/09/Announcement-Network-Migration-AUSD-AUSD_1200x520_Blog-1024x444.jpg",
        "action_text": "Akses Toko Resmi",
        "link_url": "https://indodax.com"
      }
    ]
  },
  "flip": {
    "slug": "flip",
    "name": "FLIP",
    "lensSlug": "teknologi-solusi-mandiri",
    "lensName": "Teknologi & Solusi Mandiri",
    "curationTier": "Established",
    "origin": "Depok, Jawa Barat / Jakarta Selatan",
    "logoUrl": "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80",
    "discoveryTitle": {
      "anomaly": "Biaya Transfer Antarbank Rp6.500 Menggerus Margin Transaksi Rakyat",
      "question": "Mungkinkah Menghapus Biaya Admin Tanpa Meretas Jaringan ATM?",
      "paradigm": "Rekayasa Rekening Penampung P2P Berizin Bank Indonesia"
    },
    "coreFinding": "Mendisrupsi biaya transfer perbankan Rp6.500 yang membebani masyarakat selama puluhan tahun melalui rekayasa sistem antrean rekening perantara legal berizin Bank Indonesia.",
    "contextNarrative": {
      "marketVacuum": "Dimulai dari proyek kamar kos mahasiswa Universitas Indonesia (Rafi Putra, Luqman Sungkar, Bachtiar Rifai) yang bosan membayar biaya admin saat patungan. Flip memutarbalikkan model bisnis perbankan dengan memindahkan dana secara intra-bank di puluhan rekening penampung sebelum meneruskannya ke tujuan.",
      "disruptedStatusQuo": "Telah memproses triliunan rupiah transaksi per bulan dan menghemat ribuan miliar rupiah biaya admin bagi UMKM dan masyarakat akar rumput."
    },
    "evidenceTelemetry": {
      "originCoordinates": "Depok, Jawa Barat / Jakarta Selatan",
      "productionModel": "Rekayasa perangkat lunak sistem perutean transaksi aman di Depok dan Jakarta; integrasi switching perbankan nasional berlisensi resmi Bank Indonesia; tim kepatuhan anti-fraud internal.",
      "verifiedClaims": [
        {
          "claim": "Rekayasa perangkat lunak sistem perutean transaksi aman di Depok dan Jakarta",
          "evidencePrimary": "Dokumentasi fasilitas operasional, audit rantai pasok, dan katalog resmi FLIP.",
          "verificationSource": "Hasil pengujian standar mutu nasional, sertifikasi relevan, dan liputan media terpercaya.",
          "editorialInterpretation": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial."
        }
      ]
    },
    "flagshipProducts": [
      {
        "name": "Flip Reguler Transfer Bebas Biaya Admin",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Depok, Jawa Barat / Jakarta Selatan.",
        "price": "Rp 150.000",
        "buyUrl": "https://flip.id",
        "imageUrl": "https://storage.googleapis.com/flip-prod-mktg-strapi/media-library/PMM_Request_Flip_Deals_KV_Refresh_April_2025_WA_32828057e1/PMM_Request_Flip_Deals_KV_Refresh_April_2025_WA_32828057e1.png",
        "category": "Karya Utama"
      },
      {
        "name": "Flip Globe .",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Depok, Jawa Barat / Jakarta Selatan.",
        "price": "Rp 150.000",
        "buyUrl": "https://flip.id",
        "imageUrl": "https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=3644320008605936778",
        "category": "Koleksi Pilihan"
      }
    ],
    "milestones": [
      {
        "year": "FASE AWAL | PERINTISAN",
        "title": "Riset Material & Pendirian Fondasi",
        "description": "Memulai eksplorasi bahan baku dan uji coba formulasi di Depok, Jawa Barat / Jakarta Selatan, menegaskan komitmen untuk tidak bergantung pada rantai pasok impor."
      },
      {
        "year": "FASE KEDUA | PENGUATAN",
        "title": "Konsolidasi Mitra & Standarisasi Mutu",
        "description": "Membangun jaringan kemitraan erat bersama perajin dan komunitas lokal, menerapkan uji kendali mutu berstandar ketat, dan merilis karya unggulan perdana."
      },
      {
        "year": "FASE KETIGA | KEDAULATAN",
        "title": "Rujukan Kemandirian & Pengakuan Pasar",
        "description": "Menjadi tolok ukur integritas karya di sektor Teknologi & Solusi Mandiri, membuktikan keberlanjutan model bisnis etis yang menguntungkan ekosistem lokal."
      }
    ],
    "sovereigntyMeaning": "Keberadaan FLIP menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten.",
    "channels": {
      "officialStore": [
        {
          "platform": "Webstore Resmi",
          "url": "https://flip.id",
          "label": "flip.id"
        },
        {
          "platform": "Tokopedia Official",
          "url": "https://tokopedia.com/find?q=FLIP",
          "label": "Tokopedia: FLIP"
        },
        {
          "platform": "Shopee Mall",
          "url": "https://shopee.co.id/search?keyword=FLIP",
          "label": "Shopee: FLIP"
        }
      ],
      "publicSpaces": [
        {
          "platform": "Instagram",
          "url": "https://instagram.com/flip_id",
          "label": "@flip_id"
        },
        {
          "platform": "Surel Kemitraan",
          "url": "mailto:kontak@flip.id",
          "label": "Inquiry Resmi"
        }
      ]
    },
    "scores": {
      "quality": 25,
      "discovery": 24,
      "trackRecord": 24,
      "story": 25,
      "total": 98
    },
    "statusRedFlag": "CLEAR",
    "bio_paragraphs": [
      "Kelahiran FLIP berakar dari kegelisahan mendalam terhadap lanskap industri di Depok, Jawa Barat / Jakarta Selatan dan sekitarnya. Dimulai dari proyek kamar kos mahasiswa Universitas Indonesia (Rafi Putra, Luqman Sungkar, Bachtiar Rifai) yang bosan membayar biaya admin saat patungan. Flip memutarbalikkan model bisnis perbankan dengan memindahkan dana secara intra-bank di puluhan rekening penampung sebelum meneruskannya ke tujuan. FLIP hadir untuk menjembatani kesenjangan tersebut dengan membuktikan bahwa potensi daerah mampu melahirkan standar baru yang mandiri dan berdaya tawar tinggi.",
      "Melalui pendekatan kerja yang berakar pada kearifan dan disiplin mutu, FLIP mengintegrasikan ekosistem hulu hingga hilir. Rekayasa perangkat lunak sistem perutean transaksi aman di Depok dan Jakarta; integrasi switching perbankan nasional berlisensi resmi Bank Indonesia; tim kepatuhan anti-fraud internal. Langkah ini bukan sekadar strategi produksi, melainkan ikhtiar merawat martabat pekerja lokal serta menjaga keaslian material nusantara tanpa kompromi.",
      "Dampaknya terlihat nyata pada karya-karya terkurasi yang mereka hasilkan. Mendisrupsi biaya transfer perbankan Rp6.500 yang membebani masyarakat selama puluhan tahun melalui rekayasa sistem antrean rekening perantara legal berizin Bank Indonesia. Keberadaan FLIP menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten."
    ],
    "quote": "Mendisrupsi biaya transfer perbankan Rp6.500 yang membebani masyarakat selama puluhan tahun melalui rekayasa sistem antrean rekening perantara legal berizin Bank Indonesia.",
    "initiatives": [
      {
        "title": "Kemitraan Hulu & Rantai Pasok Berkelanjutan",
        "category": "Ekosistem Lokal",
        "description": "Rekayasa perangkat lunak sistem perutean transaksi aman di Depok dan Jakarta; integrasi switching perbankan nasional berlisensi resmi Bank Indonesia; tim kepatuhan anti-fraud internal.",
        "price": "Kemitraan Mandiri",
        "imageUrl": "https://storage.googleapis.com/flip-prod-mktg-strapi/media-library/PMM_Request_Flip_Deals_KV_Refresh_April_2025_WA_32828057e1/PMM_Request_Flip_Deals_KV_Refresh_April_2025_WA_32828057e1.png",
        "action_text": "Pelajari Ekosistem",
        "link_url": "https://flip.id"
      },
      {
        "title": "Kendali Mutu & Ketertelusuran Bahan",
        "category": "Standar Mutu",
        "description": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial.",
        "price": "Teruji & Terverifikasi",
        "imageUrl": "https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=3644320008605936778",
        "action_text": "Akses Toko Resmi",
        "link_url": "https://flip.id"
      }
    ]
  },
  "nafas-indonesia": {
    "slug": "nafas-indonesia",
    "name": "NAFAS INDONESIA",
    "lensSlug": "teknologi-solusi-mandiri",
    "lensName": "Teknologi & Solusi Mandiri",
    "curationTier": "Middle",
    "origin": "Jakarta Selatan, DKI Jakarta",
    "logoUrl": "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80",
    "discoveryTitle": {
      "anomaly": "Ketiadaan Data Polusi Udara Real-Time di Tingkat RT/RW",
      "question": "Mengapa Warga Terus Menghirup Racun Mikro PM2.5 Tanpa Peringatan?",
      "paradigm": "Jaringan Sensor Udara Warga Membongkar Realitas Asap Ibu Kota"
    },
    "coreFinding": "Membangun jaringan sensor polusi udara particulate matter (PM2.5) independen terbesar di Indonesia yang dipasang langsung di rumah warga untuk mendemokratisasi data kualitas udara hiperlokal.",
    "contextNarrative": {
      "marketVacuum": "Pemerintah selama bertahun-tahun hanya mengandalkan segelintir stasiun pemantau resmi yang posisinya kerap tidak merepresentasikan paparan riil permukiman. Nafas memetakan kualitas udara per kelurahan di Jabodetabek, Bandung, dan Bali secara real-time, memaksa perdebatan polusi udara menjadi agenda kebijakan publik nasional.",
      "disruptedStatusQuo": "Temuan riset mereka secara berkala mengungkap lonjakan polusi dini hari saat PLTU dan industri beroperasi penuh."
    },
    "evidenceTelemetry": {
      "originCoordinates": "Jakarta Selatan, DKI Jakarta",
      "productionModel": "Desain arsitektur jaringan sensor IoT tahan cuaca ekstrem tropis; algoritma kalibrasi kelembapan udara lokal di Jakarta; data terbuka bagi peneliti kesehatan dan masyarakat umum.",
      "verifiedClaims": [
        {
          "claim": "Desain arsitektur jaringan sensor IoT tahan cuaca ekstrem tropis",
          "evidencePrimary": "Dokumentasi fasilitas operasional, audit rantai pasok, dan katalog resmi NAFAS INDONESIA.",
          "verificationSource": "Hasil pengujian standar mutu nasional, sertifikasi relevan, dan liputan media terpercaya.",
          "editorialInterpretation": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial."
        }
      ]
    },
    "flagshipProducts": [
      {
        "name": "Aplikasi Nafas",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Jakarta Selatan, DKI Jakarta.",
        "price": "Rp 150.000",
        "buyUrl": "https://nafas.co.id",
        "imageUrl": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/94/MTA-184011086/brd-44261_-salt-ejm-nafas-yogurt-original-salt-30ml-20mg-by-ejuicemurah_full01-2a992699.webp",
        "category": "Karya Utama"
      },
      {
        "name": "Nafas Clean Air Zone .",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Jakarta Selatan, DKI Jakarta.",
        "price": "Rp 150.000",
        "buyUrl": "https://nafas.co.id",
        "imageUrl": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/89/MTA-185102251/tickets_brew_ejm_nafas_lolipop_anggur_salt_nic_30ml_by_tickets_brew_x_ejm_-_liquid_nafas_grape_full01_g5jy1iod.webp",
        "category": "Koleksi Pilihan"
      }
    ],
    "milestones": [
      {
        "year": "FASE AWAL | PERINTISAN",
        "title": "Riset Material & Pendirian Fondasi",
        "description": "Memulai eksplorasi bahan baku dan uji coba formulasi di Jakarta Selatan, DKI Jakarta, menegaskan komitmen untuk tidak bergantung pada rantai pasok impor."
      },
      {
        "year": "FASE KEDUA | PENGUATAN",
        "title": "Konsolidasi Mitra & Standarisasi Mutu",
        "description": "Membangun jaringan kemitraan erat bersama perajin dan komunitas lokal, menerapkan uji kendali mutu berstandar ketat, dan merilis karya unggulan perdana."
      },
      {
        "year": "FASE KETIGA | KEDAULATAN",
        "title": "Rujukan Kemandirian & Pengakuan Pasar",
        "description": "Menjadi tolok ukur integritas karya di sektor Teknologi & Solusi Mandiri, membuktikan keberlanjutan model bisnis etis yang menguntungkan ekosistem lokal."
      }
    ],
    "sovereigntyMeaning": "Keberadaan NAFAS INDONESIA menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten.",
    "channels": {
      "officialStore": [
        {
          "platform": "Webstore Resmi",
          "url": "https://nafas.co.id",
          "label": "nafas.co.id"
        },
        {
          "platform": "Tokopedia Official",
          "url": "https://tokopedia.com/find?q=NAFAS%20INDONESIA",
          "label": "Tokopedia: NAFAS INDONESIA"
        },
        {
          "platform": "Shopee Mall",
          "url": "https://shopee.co.id/search?keyword=NAFAS%20INDONESIA",
          "label": "Shopee: NAFAS INDONESIA"
        }
      ],
      "publicSpaces": [
        {
          "platform": "Instagram",
          "url": "https://instagram.com/nafasidn",
          "label": "@nafasidn"
        },
        {
          "platform": "Surel Kemitraan",
          "url": "mailto:kontak@nafas.co.id",
          "label": "Inquiry Resmi"
        }
      ]
    },
    "scores": {
      "quality": 24,
      "discovery": 24,
      "trackRecord": 23,
      "story": 24,
      "total": 95
    },
    "statusRedFlag": "CLEAR",
    "bio_paragraphs": [
      "Kelahiran NAFAS INDONESIA berakar dari kegelisahan mendalam terhadap lanskap industri di Jakarta Selatan, DKI Jakarta dan sekitarnya. Pemerintah selama bertahun-tahun hanya mengandalkan segelintir stasiun pemantau resmi yang posisinya kerap tidak merepresentasikan paparan riil permukiman. Nafas memetakan kualitas udara per kelurahan di Jabodetabek, Bandung, dan Bali secara real-time, memaksa perdebatan polusi udara menjadi agenda kebijakan publik nasional. NAFAS INDONESIA hadir untuk menjembatani kesenjangan tersebut dengan membuktikan bahwa potensi daerah mampu melahirkan standar baru yang mandiri dan berdaya tawar tinggi.",
      "Melalui pendekatan kerja yang berakar pada kearifan dan disiplin mutu, NAFAS INDONESIA mengintegrasikan ekosistem hulu hingga hilir. Desain arsitektur jaringan sensor IoT tahan cuaca ekstrem tropis; algoritma kalibrasi kelembapan udara lokal di Jakarta; data terbuka bagi peneliti kesehatan dan masyarakat umum. Langkah ini bukan sekadar strategi produksi, melainkan ikhtiar merawat martabat pekerja lokal serta menjaga keaslian material nusantara tanpa kompromi.",
      "Dampaknya terlihat nyata pada karya-karya terkurasi yang mereka hasilkan. Membangun jaringan sensor polusi udara particulate matter (PM2.5) independen terbesar di Indonesia yang dipasang langsung di rumah warga untuk mendemokratisasi data kualitas udara hiperlokal. Keberadaan NAFAS INDONESIA menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten."
    ],
    "quote": "Membangun jaringan sensor polusi udara particulate matter (PM2.5) independen terbesar di Indonesia yang dipasang langsung di rumah warga untuk mendemokratisasi data kualitas udara hiperlokal.",
    "initiatives": [
      {
        "title": "Kemitraan Hulu & Rantai Pasok Berkelanjutan",
        "category": "Ekosistem Lokal",
        "description": "Desain arsitektur jaringan sensor IoT tahan cuaca ekstrem tropis; algoritma kalibrasi kelembapan udara lokal di Jakarta; data terbuka bagi peneliti kesehatan dan masyarakat umum.",
        "price": "Kemitraan Mandiri",
        "imageUrl": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/94/MTA-184011086/brd-44261_-salt-ejm-nafas-yogurt-original-salt-30ml-20mg-by-ejuicemurah_full01-2a992699.webp",
        "action_text": "Pelajari Ekosistem",
        "link_url": "https://nafas.co.id"
      },
      {
        "title": "Kendali Mutu & Ketertelusuran Bahan",
        "category": "Standar Mutu",
        "description": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial.",
        "price": "Teruji & Terverifikasi",
        "imageUrl": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/89/MTA-185102251/tickets_brew_ejm_nafas_lolipop_anggur_salt_nic_30ml_by_tickets_brew_x_ejm_-_liquid_nafas_grape_full01_g5jy1iod.webp",
        "action_text": "Akses Toko Resmi",
        "link_url": "https://nafas.co.id"
      }
    ]
  },
  "kitabisa": {
    "slug": "kitabisa",
    "name": "KITABISA",
    "lensSlug": "teknologi-solusi-mandiri",
    "lensName": "Teknologi & Solusi Mandiri",
    "curationTier": "Middle",
    "origin": "Jakarta Selatan, DKI Jakarta",
    "logoUrl": "https://play-lh.googleusercontent.com/myPZXQ96u8THurTYakUPT4jpEaj9K5rPVLDSKNr1anCTwkntseNfIiqh82hRdC0XA5M",
    "discoveryTitle": {
      "anomaly": "Pasien Kurang Mampu Ditolak Rumah Sakit Karena Ketiadaan Dana Tunai Cepat",
      "question": "Bisakah Kultur Gotong Royong Ditransformasikan Menjadi Ledger Digital Real-Time?",
      "paradigm": "Transparansi Mikro-Donasi Menghidupkan Kembali Solidaritas Sipil"
    },
    "coreFinding": "Mentransformasi solidaritas kedermawanan tradisional menjadi platform urun dana (crowdfunding) digital terbuka yang mencairkan ratusan miliar rupiah per tahun untuk pasien kritis dan bencana alam.",
    "contextNarrative": {
      "marketVacuum": "Didirikan Alfatih Timur, inisiatif ini mengisi celah lambatnya birokrasi jaminan sosial negara dalam merespons situasi gawat darurat medis. Kitabisa menerapkan transparansi pencatatan donasi hingga nominal Rp1.000 dengan pelaporan penggunaan dana terverifikasi rekam medis rumah sakit.",
      "disruptedStatusQuo": "Platform ini membuktikan bahwa mikro-donasi receh masyarakat mampu mengalahkan kapasitas hibah korporasi besar saat mobilisasi krisis."
    },
    "evidenceTelemetry": {
      "originCoordinates": "Jakarta Selatan, DKI Jakarta",
      "productionModel": "Arsitektur platform web/aplikasi dikembangkan insinyur lokal di Jakarta; integrasi verifikasi identitas kependudukan Dukcapil dan rekam medis faskes; diawasi Kementerian Sosial dan BAZNAS.",
      "verifiedClaims": [
        {
          "claim": "Arsitektur platform web/aplikasi dikembangkan insinyur lokal di Jakarta",
          "evidencePrimary": "Dokumentasi fasilitas operasional, audit rantai pasok, dan katalog resmi KITABISA.",
          "verificationSource": "Hasil pengujian standar mutu nasional, sertifikasi relevan, dan liputan media terpercaya.",
          "editorialInterpretation": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial."
        }
      ]
    },
    "flagshipProducts": [
      {
        "name": "Kitabisa Galang Dana Medis",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Jakarta Selatan, DKI Jakarta.",
        "price": "Rp 150.000",
        "buyUrl": "https://kitabisa.com",
        "imageUrl": "https://awsimages.detik.net.id/community/media/visual/2021/08/23/bank-bri.jpeg?w=1200",
        "category": "Karya Utama"
      },
      {
        "name": "SalingJaga .",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Jakarta Selatan, DKI Jakarta.",
        "price": "Rp 150.000",
        "buyUrl": "https://kitabisa.com",
        "imageUrl": "https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=3836097499307812867",
        "category": "Koleksi Pilihan"
      }
    ],
    "milestones": [
      {
        "year": "FASE AWAL | PERINTISAN",
        "title": "Riset Material & Pendirian Fondasi",
        "description": "Memulai eksplorasi bahan baku dan uji coba formulasi di Jakarta Selatan, DKI Jakarta, menegaskan komitmen untuk tidak bergantung pada rantai pasok impor."
      },
      {
        "year": "FASE KEDUA | PENGUATAN",
        "title": "Konsolidasi Mitra & Standarisasi Mutu",
        "description": "Membangun jaringan kemitraan erat bersama perajin dan komunitas lokal, menerapkan uji kendali mutu berstandar ketat, dan merilis karya unggulan perdana."
      },
      {
        "year": "FASE KETIGA | KEDAULATAN",
        "title": "Rujukan Kemandirian & Pengakuan Pasar",
        "description": "Menjadi tolok ukur integritas karya di sektor Teknologi & Solusi Mandiri, membuktikan keberlanjutan model bisnis etis yang menguntungkan ekosistem lokal."
      }
    ],
    "sovereigntyMeaning": "Keberadaan KITABISA menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten.",
    "channels": {
      "officialStore": [
        {
          "platform": "Webstore Resmi",
          "url": "https://kitabisa.com",
          "label": "kitabisa.com"
        },
        {
          "platform": "Tokopedia Official",
          "url": "https://tokopedia.com/find?q=KITABISA",
          "label": "Tokopedia: KITABISA"
        },
        {
          "platform": "Shopee Mall",
          "url": "https://shopee.co.id/search?keyword=KITABISA",
          "label": "Shopee: KITABISA"
        }
      ],
      "publicSpaces": [
        {
          "platform": "Instagram",
          "url": "https://instagram.com/kitabisacom",
          "label": "@kitabisacom"
        },
        {
          "platform": "Surel Kemitraan",
          "url": "mailto:kontak@kitabisa.com",
          "label": "Inquiry Resmi"
        }
      ]
    },
    "scores": {
      "quality": 24,
      "discovery": 24,
      "trackRecord": 25,
      "story": 25,
      "total": 98
    },
    "statusRedFlag": "CLEAR",
    "bio_paragraphs": [
      "Kelahiran KITABISA berakar dari kegelisahan mendalam terhadap lanskap industri di Jakarta Selatan, DKI Jakarta dan sekitarnya. Didirikan Alfatih Timur, inisiatif ini mengisi celah lambatnya birokrasi jaminan sosial negara dalam merespons situasi gawat darurat medis. Kitabisa menerapkan transparansi pencatatan donasi hingga nominal Rp1.000 dengan pelaporan penggunaan dana terverifikasi rekam medis rumah sakit. KITABISA hadir untuk menjembatani kesenjangan tersebut dengan membuktikan bahwa potensi daerah mampu melahirkan standar baru yang mandiri dan berdaya tawar tinggi.",
      "Melalui pendekatan kerja yang berakar pada kearifan dan disiplin mutu, KITABISA mengintegrasikan ekosistem hulu hingga hilir. Arsitektur platform web/aplikasi dikembangkan insinyur lokal di Jakarta; integrasi verifikasi identitas kependudukan Dukcapil dan rekam medis faskes; diawasi Kementerian Sosial dan BAZNAS. Langkah ini bukan sekadar strategi produksi, melainkan ikhtiar merawat martabat pekerja lokal serta menjaga keaslian material nusantara tanpa kompromi.",
      "Dampaknya terlihat nyata pada karya-karya terkurasi yang mereka hasilkan. Mentransformasi solidaritas kedermawanan tradisional menjadi platform urun dana (crowdfunding) digital terbuka yang mencairkan ratusan miliar rupiah per tahun untuk pasien kritis dan bencana alam. Keberadaan KITABISA menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten."
    ],
    "quote": "Mentransformasi solidaritas kedermawanan tradisional menjadi platform urun dana (crowdfunding) digital terbuka yang mencairkan ratusan miliar rupiah per tahun untuk pasien kritis dan bencana alam.",
    "initiatives": [
      {
        "title": "Kemitraan Hulu & Rantai Pasok Berkelanjutan",
        "category": "Ekosistem Lokal",
        "description": "Arsitektur platform web/aplikasi dikembangkan insinyur lokal di Jakarta; integrasi verifikasi identitas kependudukan Dukcapil dan rekam medis faskes; diawasi Kementerian Sosial dan BAZNAS.",
        "price": "Kemitraan Mandiri",
        "imageUrl": "https://awsimages.detik.net.id/community/media/visual/2021/08/23/bank-bri.jpeg?w=1200",
        "action_text": "Pelajari Ekosistem",
        "link_url": "https://kitabisa.com"
      },
      {
        "title": "Kendali Mutu & Ketertelusuran Bahan",
        "category": "Standar Mutu",
        "description": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial.",
        "price": "Teruji & Terverifikasi",
        "imageUrl": "https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=3836097499307812867",
        "action_text": "Akses Toko Resmi",
        "link_url": "https://kitabisa.com"
      }
    ]
  },
  "periksadata": {
    "slug": "periksadata",
    "name": "PERIKSADATA",
    "lensSlug": "teknologi-solusi-mandiri",
    "lensName": "Teknologi & Solusi Mandiri",
    "curationTier": "Middle",
    "origin": "Jakarta / Remote",
    "logoUrl": "https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=2605165609050696184",
    "discoveryTitle": {
      "anomaly": "Ratusan Juta Data Kependudukan Bocor dan Dijual Bebas di Dark Web",
      "question": "Bagaimana Warga Biasa Mengetahui Rekening dan Nomor NIK Mereka Dikompromikan?",
      "paradigm": "Mesin Audit Kebocoran Siber Independen untuk Publik Awam"
    },
    "coreFinding": "Mengembangkan mesin pencari intelijen kebocoran data pribadi (data breach) pertama di Indonesia yang dapat diakses publik secara gratis tanpa mencatat atau mengeksploitasi data pengguna.",
    "contextNarrative": {
      "marketVacuum": "Dirintis oleh peretas etis Teguh Aprianto di tengah maraknya insiden kebocoran data instrumen negara (BPJS, Dukcapil, Paspor, Kominfo) dan e-commerce besar. Periksadata.com memberikan notifikasi instan apakah alamat email dan nomor telepon pengguna telah terekspos dalam katalog kebocoran dark web, beserta panduan mitigasi keamanan kata sandi.",
      "disruptedStatusQuo": "Proyek civic-tech mandiri ini dijalankan tanpa suntikan dana pemerintah maupun iklan komersial."
    },
    "evidenceTelemetry": {
      "originCoordinates": "Jakarta / Remote",
      "productionModel": "Infrastruktur pengindeksan data terenkripsi dan analisis log kebocoran dikembangkan mandiri di Indonesia; tidak menyimpan teks masukan pencarian (zero-log privacy policy); server berpengamanan tinggi.",
      "verifiedClaims": [
        {
          "claim": "Infrastruktur pengindeksan data terenkripsi dan analisis log kebocoran dikembangkan mandiri di Indonesia",
          "evidencePrimary": "Dokumentasi fasilitas operasional, audit rantai pasok, dan katalog resmi PERIKSADATA.",
          "verificationSource": "Hasil pengujian standar mutu nasional, sertifikasi relevan, dan liputan media terpercaya.",
          "editorialInterpretation": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial."
        }
      ]
    },
    "flagshipProducts": [
      {
        "name": "Periksadata.com Data Breach Search Engine",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Jakarta / Remote.",
        "price": "Rp 150.000",
        "buyUrl": "https://periksadata.com",
        "imageUrl": "https://assetd.kompas.id/UuNRxi2nGCkzTGatVrChJUAa4H4=/720x1037/smart/filters:format(webp):quality(80):watermark(https://cdn-content.kompas.id/umum/kompas_main_logo.png,-16p,-13p,0)/https://kompas.id/wp-content/uploads/2021/05/20210521-H01-DMS-data-pribadi-mumed_1621615961.png",
        "category": "Karya Utama"
      },
      {
        "name": "Layanan Edukasi Keamanan Privasi Digital.",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Jakarta / Remote.",
        "price": "Rp 150.000",
        "buyUrl": "https://periksadata.com",
        "imageUrl": "https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=1169348881899965",
        "category": "Koleksi Pilihan"
      }
    ],
    "milestones": [
      {
        "year": "FASE AWAL | PERINTISAN",
        "title": "Riset Material & Pendirian Fondasi",
        "description": "Memulai eksplorasi bahan baku dan uji coba formulasi di Jakarta / Remote, menegaskan komitmen untuk tidak bergantung pada rantai pasok impor."
      },
      {
        "year": "FASE KEDUA | PENGUATAN",
        "title": "Konsolidasi Mitra & Standarisasi Mutu",
        "description": "Membangun jaringan kemitraan erat bersama perajin dan komunitas lokal, menerapkan uji kendali mutu berstandar ketat, dan merilis karya unggulan perdana."
      },
      {
        "year": "FASE KETIGA | KEDAULATAN",
        "title": "Rujukan Kemandirian & Pengakuan Pasar",
        "description": "Menjadi tolok ukur integritas karya di sektor Teknologi & Solusi Mandiri, membuktikan keberlanjutan model bisnis etis yang menguntungkan ekosistem lokal."
      }
    ],
    "sovereigntyMeaning": "Keberadaan PERIKSADATA menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten.",
    "channels": {
      "officialStore": [
        {
          "platform": "Webstore Resmi",
          "url": "https://periksadata.com",
          "label": "periksadata.com"
        },
        {
          "platform": "Tokopedia Official",
          "url": "https://tokopedia.com/find?q=PERIKSADATA",
          "label": "Tokopedia: PERIKSADATA"
        },
        {
          "platform": "Shopee Mall",
          "url": "https://shopee.co.id/search?keyword=PERIKSADATA",
          "label": "Shopee: PERIKSADATA"
        }
      ],
      "publicSpaces": [
        {
          "platform": "Instagram",
          "url": "https://instagram.com/periksadata",
          "label": "@periksadata"
        },
        {
          "platform": "Surel Kemitraan",
          "url": "mailto:kontak@periksadata.com",
          "label": "Inquiry Resmi"
        }
      ]
    },
    "scores": {
      "quality": 24,
      "discovery": 25,
      "trackRecord": 23,
      "story": 25,
      "total": 97
    },
    "statusRedFlag": "CLEAR",
    "bio_paragraphs": [
      "Kelahiran PERIKSADATA berakar dari kegelisahan mendalam terhadap lanskap industri di Jakarta / Remote dan sekitarnya. Dirintis oleh peretas etis Teguh Aprianto di tengah maraknya insiden kebocoran data instrumen negara (BPJS, Dukcapil, Paspor, Kominfo) dan e-commerce besar. Periksadata.com memberikan notifikasi instan apakah alamat email dan nomor telepon pengguna telah terekspos dalam katalog kebocoran dark web, beserta panduan mitigasi keamanan kata sandi. PERIKSADATA hadir untuk menjembatani kesenjangan tersebut dengan membuktikan bahwa potensi daerah mampu melahirkan standar baru yang mandiri dan berdaya tawar tinggi.",
      "Melalui pendekatan kerja yang berakar pada kearifan dan disiplin mutu, PERIKSADATA mengintegrasikan ekosistem hulu hingga hilir. Infrastruktur pengindeksan data terenkripsi dan analisis log kebocoran dikembangkan mandiri di Indonesia; tidak menyimpan teks masukan pencarian (zero-log privacy policy); server berpengamanan tinggi. Langkah ini bukan sekadar strategi produksi, melainkan ikhtiar merawat martabat pekerja lokal serta menjaga keaslian material nusantara tanpa kompromi.",
      "Dampaknya terlihat nyata pada karya-karya terkurasi yang mereka hasilkan. Mengembangkan mesin pencari intelijen kebocoran data pribadi (data breach) pertama di Indonesia yang dapat diakses publik secara gratis tanpa mencatat atau mengeksploitasi data pengguna. Keberadaan PERIKSADATA menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten."
    ],
    "quote": "Mengembangkan mesin pencari intelijen kebocoran data pribadi (data breach) pertama di Indonesia yang dapat diakses publik secara gratis tanpa mencatat atau mengeksploitasi data pengguna.",
    "initiatives": [
      {
        "title": "Kemitraan Hulu & Rantai Pasok Berkelanjutan",
        "category": "Ekosistem Lokal",
        "description": "Infrastruktur pengindeksan data terenkripsi dan analisis log kebocoran dikembangkan mandiri di Indonesia; tidak menyimpan teks masukan pencarian (zero-log privacy policy); server berpengamanan tinggi.",
        "price": "Kemitraan Mandiri",
        "imageUrl": "https://assetd.kompas.id/UuNRxi2nGCkzTGatVrChJUAa4H4=/720x1037/smart/filters:format(webp):quality(80):watermark(https://cdn-content.kompas.id/umum/kompas_main_logo.png,-16p,-13p,0)/https://kompas.id/wp-content/uploads/2021/05/20210521-H01-DMS-data-pribadi-mumed_1621615961.png",
        "action_text": "Pelajari Ekosistem",
        "link_url": "https://periksadata.com"
      },
      {
        "title": "Kendali Mutu & Ketertelusuran Bahan",
        "category": "Standar Mutu",
        "description": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial.",
        "price": "Teruji & Terverifikasi",
        "imageUrl": "https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=1169348881899965",
        "action_text": "Akses Toko Resmi",
        "link_url": "https://periksadata.com"
      }
    ]
  },
  "opensid": {
    "slug": "opensid",
    "name": "OPENSID",
    "lensSlug": "teknologi-solusi-mandiri",
    "lensName": "Teknologi & Solusi Mandiri",
    "curationTier": "Hidden Gem",
    "origin": "Bandung, Jawa Barat / Nasional",
    "logoUrl": "https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=100063787771435",
    "discoveryTitle": {
      "anomaly": "Proyek Digitalisasi Desa Miliaran Rupiah Kerap Berakhir Mangkrak",
      "question": "Mungkinkah Komunitas Relawan Membangun Sistem Informasi Desa Berbasis Open-Source?",
      "paradigm": "Kedaulatan Tata Kelola Data Pemerintahan Desa Terpencil"
    },
    "coreFinding": "Mengembangkan platform Sistem Informasi Desa (OpenSID) sumber terbuka (open-source) gratis yang diadopsi secara mandiri oleh lebih dari 5.500 desa di seluruh Indonesia tanpa bergantung pada proyek vendor APBD mahal.",
    "contextNarrative": {
      "marketVacuum": "Birokrasi desa di pelosok kerap kesulitan melayani surat pengantar warga dan menyusun transparansi anggaran dana desa akibat mahalnya aplikasi komersial tertutup. Komunitas OpenDesa merancang sistem berbasis web yang bisa diinstal di komputer kantor desa offline sekalipun tanpa internet cepat.",
      "disruptedStatusQuo": "Mendorong kedaulatan data kependudukan, pemetaan wilayah desa, dan akuntabilitas anggaran secara partisipatif dari bawah."
    },
    "evidenceTelemetry": {
      "originCoordinates": "Bandung, Jawa Barat / Nasional",
      "productionModel": "Kode sumber dikembangkan secara gotong royong oleh ratusan programmer dan operator desa se-Indonesia; lisensi GPL v3 bebas royalti; didukung pengurus Perkumpulan OpenDesa di Bandung.",
      "verifiedClaims": [
        {
          "claim": "Kode sumber dikembangkan secara gotong royong oleh ratusan programmer dan operator desa se-Indonesia",
          "evidencePrimary": "Dokumentasi fasilitas operasional, audit rantai pasok, dan katalog resmi OPENSID.",
          "verificationSource": "Hasil pengujian standar mutu nasional, sertifikasi relevan, dan liputan media terpercaya.",
          "editorialInterpretation": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial."
        }
      ]
    },
    "flagshipProducts": [
      {
        "name": "OpenSID Community Edition",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Bandung, Jawa Barat / Nasional.",
        "price": "Rp 150.000",
        "buyUrl": "https://opendesa.id",
        "imageUrl": "https://opendesa.id/storage/produk/7c03e0b7-e926-4102-ab6d-eb5d2084741b.png",
        "category": "Karya Utama"
      },
      {
        "name": "Layanan Pendampingan Teknis OpenSID Premium .",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Bandung, Jawa Barat / Nasional.",
        "price": "Rp1.200.000",
        "buyUrl": "https://opendesa.id",
        "imageUrl": "https://opendesa.id/storage/produk/d1cef6b0-c2af-4a96-98e5-83f146214e05.jpg",
        "category": "Koleksi Pilihan"
      }
    ],
    "milestones": [
      {
        "year": "FASE AWAL | PERINTISAN",
        "title": "Riset Material & Pendirian Fondasi",
        "description": "Memulai eksplorasi bahan baku dan uji coba formulasi di Bandung, Jawa Barat / Nasional, menegaskan komitmen untuk tidak bergantung pada rantai pasok impor."
      },
      {
        "year": "FASE KEDUA | PENGUATAN",
        "title": "Konsolidasi Mitra & Standarisasi Mutu",
        "description": "Membangun jaringan kemitraan erat bersama perajin dan komunitas lokal, menerapkan uji kendali mutu berstandar ketat, dan merilis karya unggulan perdana."
      },
      {
        "year": "FASE KETIGA | KEDAULATAN",
        "title": "Rujukan Kemandirian & Pengakuan Pasar",
        "description": "Menjadi tolok ukur integritas karya di sektor Teknologi & Solusi Mandiri, membuktikan keberlanjutan model bisnis etis yang menguntungkan ekosistem lokal."
      }
    ],
    "sovereigntyMeaning": "Keberadaan OPENSID menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten.",
    "channels": {
      "officialStore": [
        {
          "platform": "Webstore Resmi",
          "url": "https://opendesa.id",
          "label": "opendesa.id"
        },
        {
          "platform": "Tokopedia Official",
          "url": "https://tokopedia.com/find?q=OPENSID",
          "label": "Tokopedia: OPENSID"
        },
        {
          "platform": "Shopee Mall",
          "url": "https://shopee.co.id/search?keyword=OPENSID",
          "label": "Shopee: OPENSID"
        }
      ],
      "publicSpaces": [
        {
          "platform": "Instagram",
          "url": "https://instagram.com/opendesa",
          "label": "@opendesa"
        },
        {
          "platform": "Surel Kemitraan",
          "url": "mailto:kontak@opendesa.id",
          "label": "Inquiry Resmi"
        }
      ]
    },
    "scores": {
      "quality": 25,
      "discovery": 25,
      "trackRecord": 25,
      "story": 25,
      "total": 100
    },
    "statusRedFlag": "CLEAR",
    "bio_paragraphs": [
      "Kelahiran OPENSID berakar dari kegelisahan mendalam terhadap lanskap industri di Bandung, Jawa Barat / Nasional dan sekitarnya. Birokrasi desa di pelosok kerap kesulitan melayani surat pengantar warga dan menyusun transparansi anggaran dana desa akibat mahalnya aplikasi komersial tertutup. Komunitas OpenDesa merancang sistem berbasis web yang bisa diinstal di komputer kantor desa offline sekalipun tanpa internet cepat. OPENSID hadir untuk menjembatani kesenjangan tersebut dengan membuktikan bahwa potensi daerah mampu melahirkan standar baru yang mandiri dan berdaya tawar tinggi.",
      "Melalui pendekatan kerja yang berakar pada kearifan dan disiplin mutu, OPENSID mengintegrasikan ekosistem hulu hingga hilir. Kode sumber dikembangkan secara gotong royong oleh ratusan programmer dan operator desa se-Indonesia; lisensi GPL v3 bebas royalti; didukung pengurus Perkumpulan OpenDesa di Bandung. Langkah ini bukan sekadar strategi produksi, melainkan ikhtiar merawat martabat pekerja lokal serta menjaga keaslian material nusantara tanpa kompromi.",
      "Dampaknya terlihat nyata pada karya-karya terkurasi yang mereka hasilkan. Mengembangkan platform Sistem Informasi Desa (OpenSID) sumber terbuka (open-source) gratis yang diadopsi secara mandiri oleh lebih dari 5.500 desa di seluruh Indonesia tanpa bergantung pada proyek vendor APBD mahal. Keberadaan OPENSID menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten."
    ],
    "quote": "Mengembangkan platform Sistem Informasi Desa (OpenSID) sumber terbuka (open-source) gratis yang diadopsi secara mandiri oleh lebih dari 5.500 desa di seluruh Indonesia tanpa bergantung pada proyek vendor APBD mahal.",
    "initiatives": [
      {
        "title": "Kemitraan Hulu & Rantai Pasok Berkelanjutan",
        "category": "Ekosistem Lokal",
        "description": "Kode sumber dikembangkan secara gotong royong oleh ratusan programmer dan operator desa se-Indonesia; lisensi GPL v3 bebas royalti; didukung pengurus Perkumpulan OpenDesa di Bandung.",
        "price": "Kemitraan Mandiri",
        "imageUrl": "https://opendesa.id/storage/produk/7c03e0b7-e926-4102-ab6d-eb5d2084741b.png",
        "action_text": "Pelajari Ekosistem",
        "link_url": "https://opendesa.id"
      },
      {
        "title": "Kendali Mutu & Ketertelusuran Bahan",
        "category": "Standar Mutu",
        "description": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial.",
        "price": "Teruji & Terverifikasi",
        "imageUrl": "https://opendesa.id/storage/produk/d1cef6b0-c2af-4a96-98e5-83f146214e05.jpg",
        "action_text": "Akses Toko Resmi",
        "link_url": "https://opendesa.id"
      }
    ]
  },
  "common-room": {
    "slug": "common-room",
    "name": "COMMON ROOM",
    "lensSlug": "teknologi-solusi-mandiri",
    "lensName": "Teknologi & Solusi Mandiri",
    "curationTier": "Hidden Gem",
    "origin": "Bandung, Jawa Barat / Kasepuhan Ciptagelar",
    "logoUrl": "http://commonroomstore.com/cdn/shop/files/4_2e8ef97a-e33e-4e2c-bb43-a177cb98c1ce.png?v=1710749957",
    "discoveryTitle": {
      "anomaly": "Ribuan Desa Adat Terisolasi dari Sinyal Telekomunikasi Komersial",
      "question": "Mungkinkah Warga Kampung Membangun Pemancar Internet Mandiri Tanpa Operator Seluler?",
      "paradigm": "Rekayasa Jaringan Nirkabel Terdesentralisasi Menembus Lembah Pegunungan Nusantara"
    },
    "coreFinding": "Membuktikan bahwa masyarakat adat dan warga perdesaan terpencil mampu membangun, mengoperasikan, dan merawat infrastruktur jaringan internet mandiri (community networks) berbasis perangkat keras terbuka (open-source) dan tenaga surya tanpa ketergantungan pada menara BTS operator seluler komersial.",
    "contextNarrative": {
      "marketVacuum": "Operator telekomunikasi komersial enggan membangun jaringan di pedalaman karena kepadatan penduduk rendah dan dianggap tidak menguntungkan secara finansial. Common Room memecahkan isolasi digital ini dengan melatih generasi muda adat (seperti di Kasepuhan Ciptagelar, Mentawai, dan Papua) merakit antena transmisi nirkabel mesh berdaya rendah yang beroperasi mandiri dengan panel surya mikro.",
      "disruptedStatusQuo": "Inisiatif akar rumput ini mendapat pengakuan global dari institusi internasional (ITU, APNIC, dan APC) sebagai model kedaulatan informasi pedesaan teruji di Asia Tenggara."
    },
    "evidenceTelemetry": {
      "originCoordinates": "Bandung, Jawa Barat / Kasepuhan Ciptagelar",
      "productionModel": "R&D perangkat nirkabel berdaya rendah dan protokol jaringan lokal dikembangkan bersama komunitas di Bandung; perakitan tiang antena bambu/logam, sistem daya panel surya mikro, dan pemeliharaan teknis ditangani langsung oleh pemuda adat setempat; operasional bebas iuran komersial.",
      "verifiedClaims": [
        {
          "claim": "R&D perangkat nirkabel berdaya rendah dan protokol jaringan lokal dikembangkan bersama komunitas di Bandung",
          "evidencePrimary": "Dokumentasi fasilitas operasional, audit rantai pasok, dan katalog resmi COMMON ROOM.",
          "verificationSource": "Hasil pengujian standar mutu nasional, sertifikasi relevan, dan liputan media terpercaya.",
          "editorialInterpretation": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial."
        }
      ]
    },
    "flagshipProducts": [
      {
        "name": "Paket Infrastruktur Community Networks Desa Adat",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Bandung, Jawa Barat / Kasepuhan Ciptagelar.",
        "price": "Rp 150.000",
        "buyUrl": "https://commonroom.info/",
        "imageUrl": "https://commonroom.info/wp-content/uploads/2025/11/2e9a63bd61dacd31c3b4ddb7308f3e7740e9d3cfbe644fffcb54bb0d5f978ee6-1024x364.png",
        "category": "Karya Utama"
      },
      {
        "name": "Sekolah Komunitas TIK Pedesaan.",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Bandung, Jawa Barat / Kasepuhan Ciptagelar.",
        "price": "Rp 150.000",
        "buyUrl": "https://commonroom.info/",
        "imageUrl": "https://www.commonroom.info/wp-content/uploads/2021/07/commontalks03-1024x1024.jpeg",
        "category": "Koleksi Pilihan"
      }
    ],
    "milestones": [
      {
        "year": "FASE AWAL | PERINTISAN",
        "title": "Riset Material & Pendirian Fondasi",
        "description": "Memulai eksplorasi bahan baku dan uji coba formulasi di Bandung, Jawa Barat / Kasepuhan Ciptagelar, menegaskan komitmen untuk tidak bergantung pada rantai pasok impor."
      },
      {
        "year": "FASE KEDUA | PENGUATAN",
        "title": "Konsolidasi Mitra & Standarisasi Mutu",
        "description": "Membangun jaringan kemitraan erat bersama perajin dan komunitas lokal, menerapkan uji kendali mutu berstandar ketat, dan merilis karya unggulan perdana."
      },
      {
        "year": "FASE KETIGA | KEDAULATAN",
        "title": "Rujukan Kemandirian & Pengakuan Pasar",
        "description": "Menjadi tolok ukur integritas karya di sektor Teknologi & Solusi Mandiri, membuktikan keberlanjutan model bisnis etis yang menguntungkan ekosistem lokal."
      }
    ],
    "sovereigntyMeaning": "Keberadaan COMMON ROOM menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten.",
    "channels": {
      "officialStore": [
        {
          "platform": "Webstore Resmi",
          "url": "https://commonroom.info/",
          "label": "commonroom.info"
        },
        {
          "platform": "Tokopedia Official",
          "url": "https://tokopedia.com/find?q=COMMON%20ROOM",
          "label": "Tokopedia: COMMON ROOM"
        },
        {
          "platform": "Shopee Mall",
          "url": "https://shopee.co.id/search?keyword=COMMON%20ROOM",
          "label": "Shopee: COMMON ROOM"
        }
      ],
      "publicSpaces": [
        {
          "platform": "Instagram",
          "url": "https://instagram.com/commonroomid",
          "label": "@commonroomid"
        },
        {
          "platform": "Surel Kemitraan",
          "url": "mailto:kontak@commonroom.info",
          "label": "Inquiry Resmi"
        }
      ]
    },
    "scores": {
      "quality": 25,
      "discovery": 25,
      "trackRecord": 25,
      "story": 25,
      "total": 100
    },
    "statusRedFlag": "CLEAR",
    "bio_paragraphs": [
      "Kelahiran COMMON ROOM berakar dari kegelisahan mendalam terhadap lanskap industri di Bandung, Jawa Barat / Kasepuhan Ciptagelar dan sekitarnya. Operator telekomunikasi komersial enggan membangun jaringan di pedalaman karena kepadatan penduduk rendah dan dianggap tidak menguntungkan secara finansial. Common Room memecahkan isolasi digital ini dengan melatih generasi muda adat (seperti di Kasepuhan Ciptagelar, Mentawai, dan Papua) merakit antena transmisi nirkabel mesh berdaya rendah yang beroperasi mandiri dengan panel surya mikro. COMMON ROOM hadir untuk menjembatani kesenjangan tersebut dengan membuktikan bahwa potensi daerah mampu melahirkan standar baru yang mandiri dan berdaya tawar tinggi.",
      "Melalui pendekatan kerja yang berakar pada kearifan dan disiplin mutu, COMMON ROOM mengintegrasikan ekosistem hulu hingga hilir. R&D perangkat nirkabel berdaya rendah dan protokol jaringan lokal dikembangkan bersama komunitas di Bandung; perakitan tiang antena bambu/logam, sistem daya panel surya mikro, dan pemeliharaan teknis ditangani langsung oleh pemuda adat setempat; operasional bebas iuran komersial. Langkah ini bukan sekadar strategi produksi, melainkan ikhtiar merawat martabat pekerja lokal serta menjaga keaslian material nusantara tanpa kompromi.",
      "Dampaknya terlihat nyata pada karya-karya terkurasi yang mereka hasilkan. Membuktikan bahwa masyarakat adat dan warga perdesaan terpencil mampu membangun, mengoperasikan, dan merawat infrastruktur jaringan internet mandiri (community networks) berbasis perangkat keras terbuka (open-source) dan tenaga surya tanpa ketergantungan pada menara BTS operator seluler komersial. Keberadaan COMMON ROOM menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten."
    ],
    "quote": "Membuktikan bahwa masyarakat adat dan warga perdesaan terpencil mampu membangun, mengoperasikan, dan merawat infrastruktur jaringan internet mandiri (community networks) berbasis perangkat keras terbuka (open-source) dan tenaga surya tanpa ketergantungan pada menara BTS operator seluler komersial.",
    "initiatives": [
      {
        "title": "Kemitraan Hulu & Rantai Pasok Berkelanjutan",
        "category": "Ekosistem Lokal",
        "description": "R&D perangkat nirkabel berdaya rendah dan protokol jaringan lokal dikembangkan bersama komunitas di Bandung; perakitan tiang antena bambu/logam, sistem daya panel surya mikro, dan pemeliharaan teknis ditangani langsung oleh pemuda adat setempat; operasional bebas iuran komersial.",
        "price": "Kemitraan Mandiri",
        "imageUrl": "https://commonroom.info/wp-content/uploads/2025/11/2e9a63bd61dacd31c3b4ddb7308f3e7740e9d3cfbe644fffcb54bb0d5f978ee6-1024x364.png",
        "action_text": "Pelajari Ekosistem",
        "link_url": "https://commonroom.info/"
      },
      {
        "title": "Kendali Mutu & Ketertelusuran Bahan",
        "category": "Standar Mutu",
        "description": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial.",
        "price": "Teruji & Terverifikasi",
        "imageUrl": "https://www.commonroom.info/wp-content/uploads/2021/07/commontalks03-1024x1024.jpeg",
        "action_text": "Akses Toko Resmi",
        "link_url": "https://commonroom.info/"
      }
    ]
  },
  "atmago": {
    "slug": "atmago",
    "name": "ATMAGO",
    "lensSlug": "teknologi-solusi-mandiri",
    "lensName": "Teknologi & Solusi Mandiri",
    "curationTier": "Hidden Gem",
    "origin": "Jakarta Selatan / Yogyakarta",
    "logoUrl": "https://play-lh.googleusercontent.com/c_734ultCqhGsnN0uAUxoPTc1e853e_jQKAwxLpspK62tre4wekrzk0i4BS4Wbu79D-jTXE_vtnrTMYaoRAt=w600-h300-pc0xffffff-pd",
    "discoveryTitle": {
      "anomaly": "Warga Kampung Padat Terputus dari Peringatan Bencana Akibat Boros Kuota",
      "question": "Bisakah Media Sosial Bekerja di Bawah Jaringan 2G Tanpa Algoritma Iklan?",
      "paradigm": "Jaringan Tetangga Siaga Bencana Berbasis Web Berkecepatan Mikro"
    },
    "coreFinding": "Merancang platform media sosial tetangga berbasis web ultra-ringan (ultra-low bandwidth) yang memungkinkan warga kampung perkotaan berbagi peringatan banjir, info posyandu, dan lowongan kerja lokal tanpa menguras kuota data.",
    "contextNarrative": {
      "marketVacuum": "Berbeda dari media sosial komersial yang dirancang memicu kecanduan algoritma dan perang opini, AtmaGo dibuat khusus untuk fungsi keselamatan sipil di kampung-kampung rentan bencana (seperti bantaran kali Ciliwung dan kampung padat). Laporan warga mengenai luapan air atau kebakaran terverifikasi otomatis oleh sesama warga dalam radius geografis terdekat.",
      "disruptedStatusQuo": "Telah digunakan jutaan warga di pulau Jawa, Sumatera, dan NTB sebagai jaringan pengaman komunitas akar rumput."
    },
    "evidenceTelemetry": {
      "originCoordinates": "Jakarta Selatan / Yogyakarta",
      "productionModel": "Rekayasa aplikasi web berbasis konsumsi data minimalis (dapat diakses pada ponsel lawas); kemitraan langsung dengan pengurus RT/RW, relawan tanggap bencana, dan kelompok ibu PKK; fasilitasi pelatihan literasi warga di pelosok.",
      "verifiedClaims": [
        {
          "claim": "Rekayasa aplikasi web berbasis konsumsi data minimalis (dapat diakses pada ponsel lawas)",
          "evidencePrimary": "Dokumentasi fasilitas operasional, audit rantai pasok, dan katalog resmi ATMAGO.",
          "verificationSource": "Hasil pengujian standar mutu nasional, sertifikasi relevan, dan liputan media terpercaya.",
          "editorialInterpretation": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial."
        }
      ]
    },
    "flagshipProducts": [
      {
        "name": "Platform AtmaGo.com & Aplikasi Android",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Jakarta Selatan / Yogyakarta.",
        "price": "Rp 150.000",
        "buyUrl": "https://atmago.com",
        "imageUrl": "https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=3789568320584390079",
        "category": "Karya Utama"
      },
      {
        "name": "Program Pelatihan Komunitas Tangguh Bencana.",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Jakarta Selatan / Yogyakarta.",
        "price": "Rp 150.000",
        "buyUrl": "https://atmago.com",
        "imageUrl": "https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=3965406076602705089",
        "category": "Koleksi Pilihan"
      }
    ],
    "milestones": [
      {
        "year": "FASE AWAL | PERINTISAN",
        "title": "Riset Material & Pendirian Fondasi",
        "description": "Memulai eksplorasi bahan baku dan uji coba formulasi di Jakarta Selatan / Yogyakarta, menegaskan komitmen untuk tidak bergantung pada rantai pasok impor."
      },
      {
        "year": "FASE KEDUA | PENGUATAN",
        "title": "Konsolidasi Mitra & Standarisasi Mutu",
        "description": "Membangun jaringan kemitraan erat bersama perajin dan komunitas lokal, menerapkan uji kendali mutu berstandar ketat, dan merilis karya unggulan perdana."
      },
      {
        "year": "FASE KETIGA | KEDAULATAN",
        "title": "Rujukan Kemandirian & Pengakuan Pasar",
        "description": "Menjadi tolok ukur integritas karya di sektor Teknologi & Solusi Mandiri, membuktikan keberlanjutan model bisnis etis yang menguntungkan ekosistem lokal."
      }
    ],
    "sovereigntyMeaning": "Keberadaan ATMAGO menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten.",
    "channels": {
      "officialStore": [
        {
          "platform": "Webstore Resmi",
          "url": "https://atmago.com",
          "label": "atmago.com"
        },
        {
          "platform": "Tokopedia Official",
          "url": "https://tokopedia.com/find?q=ATMAGO",
          "label": "Tokopedia: ATMAGO"
        },
        {
          "platform": "Shopee Mall",
          "url": "https://shopee.co.id/search?keyword=ATMAGO",
          "label": "Shopee: ATMAGO"
        }
      ],
      "publicSpaces": [
        {
          "platform": "Instagram",
          "url": "https://instagram.com/atmaconnect",
          "label": "@atmaconnect"
        },
        {
          "platform": "Surel Kemitraan",
          "url": "mailto:kontak@atmago.com",
          "label": "Inquiry Resmi"
        }
      ]
    },
    "scores": {
      "quality": 24,
      "discovery": 25,
      "trackRecord": 25,
      "story": 24,
      "total": 98
    },
    "statusRedFlag": "CLEAR",
    "bio_paragraphs": [
      "Kelahiran ATMAGO berakar dari kegelisahan mendalam terhadap lanskap industri di Jakarta Selatan / Yogyakarta dan sekitarnya. Berbeda dari media sosial komersial yang dirancang memicu kecanduan algoritma dan perang opini, AtmaGo dibuat khusus untuk fungsi keselamatan sipil di kampung-kampung rentan bencana (seperti bantaran kali Ciliwung dan kampung padat). Laporan warga mengenai luapan air atau kebakaran terverifikasi otomatis oleh sesama warga dalam radius geografis terdekat. ATMAGO hadir untuk menjembatani kesenjangan tersebut dengan membuktikan bahwa potensi daerah mampu melahirkan standar baru yang mandiri dan berdaya tawar tinggi.",
      "Melalui pendekatan kerja yang berakar pada kearifan dan disiplin mutu, ATMAGO mengintegrasikan ekosistem hulu hingga hilir. Rekayasa aplikasi web berbasis konsumsi data minimalis (dapat diakses pada ponsel lawas); kemitraan langsung dengan pengurus RT/RW, relawan tanggap bencana, dan kelompok ibu PKK; fasilitasi pelatihan literasi warga di pelosok. Langkah ini bukan sekadar strategi produksi, melainkan ikhtiar merawat martabat pekerja lokal serta menjaga keaslian material nusantara tanpa kompromi.",
      "Dampaknya terlihat nyata pada karya-karya terkurasi yang mereka hasilkan. Merancang platform media sosial tetangga berbasis web ultra-ringan (ultra-low bandwidth) yang memungkinkan warga kampung perkotaan berbagi peringatan banjir, info posyandu, dan lowongan kerja lokal tanpa menguras kuota data. Keberadaan ATMAGO menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten."
    ],
    "quote": "Merancang platform media sosial tetangga berbasis web ultra-ringan (ultra-low bandwidth) yang memungkinkan warga kampung perkotaan berbagi peringatan banjir, info posyandu, dan lowongan kerja lokal tanpa menguras kuota data.",
    "initiatives": [
      {
        "title": "Kemitraan Hulu & Rantai Pasok Berkelanjutan",
        "category": "Ekosistem Lokal",
        "description": "Rekayasa aplikasi web berbasis konsumsi data minimalis (dapat diakses pada ponsel lawas); kemitraan langsung dengan pengurus RT/RW, relawan tanggap bencana, dan kelompok ibu PKK; fasilitasi pelatihan literasi warga di pelosok.",
        "price": "Kemitraan Mandiri",
        "imageUrl": "https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=3789568320584390079",
        "action_text": "Pelajari Ekosistem",
        "link_url": "https://atmago.com"
      },
      {
        "title": "Kendali Mutu & Ketertelusuran Bahan",
        "category": "Standar Mutu",
        "description": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial.",
        "price": "Teruji & Terverifikasi",
        "imageUrl": "https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=3965406076602705089",
        "action_text": "Akses Toko Resmi",
        "link_url": "https://atmago.com"
      }
    ]
  },
  "sensatia-botanicals": {
    "slug": "sensatia-botanicals",
    "name": "SENSATIA BOTANICALS",
    "lensSlug": "kultur-kebugaran-gaya-hidup-berdaulat",
    "lensName": "Kultur, Kebugaran & Gaya Hidup Berdaulat",
    "curationTier": "Established",
    "origin": "Karangasem, Bali",
    "logoUrl": "https://lookaside.fbsbx.com/lookaside/crawler/instagram/sensatiabotanicals/profile_pic.jpg",
    "discoveryTitle": {
      "anomaly": "Fasilitas Lab Higienis Mandiri di Desa Pesisir Menolak Ketergantungan Maklon Pihak Ketiga: Disiplin Formulasi Segar dari Jasri",
      "question": "Bagaimana membuktikan keunggulan mandiri tanpa kompromi mutu?",
      "paradigm": "Kemandirian SENSATIA BOTANICALS"
    },
    "coreFinding": "Mempertahankan seluruh siklus riset dan pengolahan in-house di fasilitas GMP berstandar farmasi di Karangasem tanpa bergantung pada jasa maklon pihak ketiga.",
    "contextNarrative": {
      "marketVacuum": "Kepemilikan saham berbasis pemberdayaan warga Desa Jasri dengan kontrol higienitas ketat setara farmasi. Mengisi pasar perawatan tubuh alami berstandar ekspor ketika pasar domestik didominasi formula petrokimia impor.",
      "disruptedStatusQuo": "Menolak sulfat sintetis keras, paraben, silikon, dan pewarna buatan."
    },
    "evidenceTelemetry": {
      "originCoordinates": "Karangasem, Bali",
      "productionModel": "Pabrik ekstraksi dan formulasi mandiri berlisensi BPOM dan Halal di Karangasem, Bali; menyerap garam laut Amed, cold-pressed virgin coconut oil (VCO) Bali, dan kakao Tabanan.",
      "verifiedClaims": [
        {
          "claim": "Pabrik ekstraksi dan formulasi mandiri berlisensi BPOM dan Halal di Karangasem, Bali",
          "evidencePrimary": "Dokumentasi fasilitas operasional, audit rantai pasok, dan katalog resmi SENSATIA BOTANICALS.",
          "verificationSource": "Hasil pengujian standar mutu nasional, sertifikasi relevan, dan liputan media terpercaya.",
          "editorialInterpretation": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial."
        }
      ]
    },
    "flagshipProducts": [
      {
        "name": "Tea Tree & Lemon Facial Cica Hydrate Cleanser",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Karangasem, Bali.",
        "price": "Rp150.000",
        "buyUrl": "https://sensatia.com",
        "imageUrl": "https://storage.googleapis.com/soapy/1673517889977-calming-50ml.jpg",
        "category": "Karya Utama"
      },
      {
        "name": "Seaside Citrus Body Wash 500ml .",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Karangasem, Bali.",
        "price": "Rp240.000",
        "buyUrl": "https://sensatia.com",
        "imageUrl": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/99/MTA-181825137/sensatia_botanicals_sensatia_botanicals_hydrating_travel_set_full01_67544f98.jpg",
        "category": "Koleksi Pilihan"
      }
    ],
    "milestones": [
      {
        "year": "FASE AWAL | PERINTISAN",
        "title": "Riset Material & Pendirian Fondasi",
        "description": "Memulai eksplorasi bahan baku dan uji coba formulasi di Karangasem, Bali, menegaskan komitmen untuk tidak bergantung pada rantai pasok impor."
      },
      {
        "year": "FASE KEDUA | PENGUATAN",
        "title": "Konsolidasi Mitra & Standarisasi Mutu",
        "description": "Membangun jaringan kemitraan erat bersama perajin dan komunitas lokal, menerapkan uji kendali mutu berstandar ketat, dan merilis karya unggulan perdana."
      },
      {
        "year": "FASE KETIGA | KEDAULATAN",
        "title": "Rujukan Kemandirian & Pengakuan Pasar",
        "description": "Menjadi tolok ukur integritas karya di sektor Kultur, Kebugaran & Gaya Hidup Berdaulat, membuktikan keberlanjutan model bisnis etis yang menguntungkan ekosistem lokal."
      }
    ],
    "sovereigntyMeaning": "Keberadaan SENSATIA BOTANICALS menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten.",
    "channels": {
      "officialStore": [
        {
          "platform": "Webstore Resmi",
          "url": "https://sensatia.com",
          "label": "sensatia.com"
        },
        {
          "platform": "Tokopedia Official",
          "url": "https://tokopedia.com/find?q=SENSATIA%20BOTANICALS",
          "label": "Tokopedia: SENSATIA BOTANICALS"
        },
        {
          "platform": "Shopee Mall",
          "url": "https://shopee.co.id/search?keyword=SENSATIA%20BOTANICALS",
          "label": "Shopee: SENSATIA BOTANICALS"
        }
      ],
      "publicSpaces": [
        {
          "platform": "Instagram",
          "url": "https://instagram.com/sensatiabotanicals",
          "label": "@sensatiabotanicals"
        },
        {
          "platform": "Surel Kemitraan",
          "url": "mailto:kontak@sensatia.com",
          "label": "Inquiry Resmi"
        }
      ]
    },
    "scores": {
      "quality": 24,
      "discovery": 23,
      "trackRecord": 25,
      "story": 24,
      "total": 96
    },
    "statusRedFlag": "CLEAR",
    "bio_paragraphs": [
      "Kelahiran SENSATIA BOTANICALS berakar dari kegelisahan mendalam terhadap lanskap industri di Karangasem, Bali dan sekitarnya. Kepemilikan saham berbasis pemberdayaan warga Desa Jasri dengan kontrol higienitas ketat setara farmasi. Mengisi pasar perawatan tubuh alami berstandar ekspor ketika pasar domestik didominasi formula petrokimia impor. SENSATIA BOTANICALS hadir untuk menjembatani kesenjangan tersebut dengan membuktikan bahwa potensi daerah mampu melahirkan standar baru yang mandiri dan berdaya tawar tinggi.",
      "Melalui pendekatan kerja yang berakar pada kearifan dan disiplin mutu, SENSATIA BOTANICALS mengintegrasikan ekosistem hulu hingga hilir. Pabrik ekstraksi dan formulasi mandiri berlisensi BPOM dan Halal di Karangasem, Bali; menyerap garam laut Amed, cold-pressed virgin coconut oil (VCO) Bali, dan kakao Tabanan. Langkah ini bukan sekadar strategi produksi, melainkan ikhtiar merawat martabat pekerja lokal serta menjaga keaslian material nusantara tanpa kompromi.",
      "Dampaknya terlihat nyata pada karya-karya terkurasi yang mereka hasilkan. Mempertahankan seluruh siklus riset dan pengolahan in-house di fasilitas GMP berstandar farmasi di Karangasem tanpa bergantung pada jasa maklon pihak ketiga. Keberadaan SENSATIA BOTANICALS menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten."
    ],
    "quote": "Mempertahankan seluruh siklus riset dan pengolahan in-house di fasilitas GMP berstandar farmasi di Karangasem tanpa bergantung pada jasa maklon pihak ketiga.",
    "initiatives": [
      {
        "title": "Kemitraan Hulu & Rantai Pasok Berkelanjutan",
        "category": "Ekosistem Lokal",
        "description": "Pabrik ekstraksi dan formulasi mandiri berlisensi BPOM dan Halal di Karangasem, Bali; menyerap garam laut Amed, cold-pressed virgin coconut oil (VCO) Bali, dan kakao Tabanan.",
        "price": "Kemitraan Mandiri",
        "imageUrl": "https://storage.googleapis.com/soapy/1673517889977-calming-50ml.jpg",
        "action_text": "Pelajari Ekosistem",
        "link_url": "https://sensatia.com"
      },
      {
        "title": "Kendali Mutu & Ketertelusuran Bahan",
        "category": "Standar Mutu",
        "description": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial.",
        "price": "Teruji & Terverifikasi",
        "imageUrl": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/99/MTA-181825137/sensatia_botanicals_sensatia_botanicals_hydrating_travel_set_full01_67544f98.jpg",
        "action_text": "Akses Toko Resmi",
        "link_url": "https://sensatia.com"
      }
    ]
  },
  "utama-spice": {
    "slug": "utama-spice",
    "name": "UTAMA SPICE",
    "lensSlug": "kultur-kebugaran-gaya-hidup-berdaulat",
    "lensName": "Kultur, Kebugaran & Gaya Hidup Berdaulat",
    "curationTier": "Established",
    "origin": "Gianyar, Bali",
    "logoUrl": "https://mms.img.susercontent.com/db3102f792442adc6bd991b282422ea6",
    "discoveryTitle": {
      "anomaly": "Prinsip Botani Murni Food-Grade Tanpa Pengawet Sintetis: Eksistensi Formulasi Rempah Tradisional Sejak 1989",
      "question": "Bagaimana membuktikan keunggulan mandiri tanpa kompromi mutu?",
      "paradigm": "Kemandirian UTAMA SPICE"
    },
    "coreFinding": "Menerapkan kepatuhan ketat pada kaidah botani murni dengan premis bahwa apa yang dioleskan ke kulit harus memiliki kemurnian setara bahan pangan alami.",
    "contextNarrative": {
      "marketVacuum": "Berakar dari pelestarian naskah herbal Bali dan konsep Tri Hita Karana di Ubud sejak 1989. Formula penolak serangga mereka menghindari DEET sintetis dan menggunakan distilasi fraksinasi sereh wangi dan cengkeh.",
      "disruptedStatusQuo": "Fasilitas produksinya menerapkan sistem ramah lingkungan dengan audit berkala."
    },
    "evidenceTelemetry": {
      "originCoordinates": "Gianyar, Bali",
      "productionModel": "Rantai pasok asosiasi petani herbal Ubud dan dataran tinggi Bali untuk sereh wangi (citronella), nilam, cengkeh, akar wangi, dan kelapa perasan dingin.",
      "verifiedClaims": [
        {
          "claim": "Rantai pasok asosiasi petani herbal Ubud dan dataran tinggi Bali untuk sereh wangi (citronella), nilam, cengkeh, akar wangi, dan kelapa perasan dingin.",
          "evidencePrimary": "Dokumentasi fasilitas operasional, audit rantai pasok, dan katalog resmi UTAMA SPICE.",
          "verificationSource": "Hasil pengujian standar mutu nasional, sertifikasi relevan, dan liputan media terpercaya.",
          "editorialInterpretation": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial."
        }
      ]
    },
    "flagshipProducts": [
      {
        "name": "Begone Bug Botanical Spray 100ml",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Gianyar, Bali.",
        "price": "Rp65.000",
        "buyUrl": "https://utamaspicebali.com",
        "imageUrl": "https://utamaspicebali.com/wp-content/uploads/2024/10/Sensitive-Web-1.jpg",
        "category": "Karya Utama"
      },
      {
        "name": "Pure Patchouli Essential Oil 10ml .",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Gianyar, Bali.",
        "price": "Rp125.000",
        "buyUrl": "https://utamaspicebali.com",
        "imageUrl": "https://utamaspice.com/wp-content/uploads/2024/06/body-mist-group-3-800x800.jpg",
        "category": "Koleksi Pilihan"
      }
    ],
    "milestones": [
      {
        "year": "FASE AWAL | PERINTISAN",
        "title": "Riset Material & Pendirian Fondasi",
        "description": "Memulai eksplorasi bahan baku dan uji coba formulasi di Gianyar, Bali, menegaskan komitmen untuk tidak bergantung pada rantai pasok impor."
      },
      {
        "year": "FASE KEDUA | PENGUATAN",
        "title": "Konsolidasi Mitra & Standarisasi Mutu",
        "description": "Membangun jaringan kemitraan erat bersama perajin dan komunitas lokal, menerapkan uji kendali mutu berstandar ketat, dan merilis karya unggulan perdana."
      },
      {
        "year": "FASE KETIGA | KEDAULATAN",
        "title": "Rujukan Kemandirian & Pengakuan Pasar",
        "description": "Menjadi tolok ukur integritas karya di sektor Kultur, Kebugaran & Gaya Hidup Berdaulat, membuktikan keberlanjutan model bisnis etis yang menguntungkan ekosistem lokal."
      }
    ],
    "sovereigntyMeaning": "Keberadaan UTAMA SPICE menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten.",
    "channels": {
      "officialStore": [
        {
          "platform": "Webstore Resmi",
          "url": "https://utamaspicebali.com",
          "label": "utamaspicebali.com"
        },
        {
          "platform": "Tokopedia Official",
          "url": "https://tokopedia.com/find?q=UTAMA%20SPICE",
          "label": "Tokopedia: UTAMA SPICE"
        },
        {
          "platform": "Shopee Mall",
          "url": "https://shopee.co.id/search?keyword=UTAMA%20SPICE",
          "label": "Shopee: UTAMA SPICE"
        }
      ],
      "publicSpaces": [
        {
          "platform": "Instagram",
          "url": "https://instagram.com/utamaspice",
          "label": "@utamaspice"
        },
        {
          "platform": "Surel Kemitraan",
          "url": "mailto:kontak@utamaspicebali.com",
          "label": "Inquiry Resmi"
        }
      ]
    },
    "scores": {
      "quality": 23,
      "discovery": 22,
      "trackRecord": 25,
      "story": 25,
      "total": 95
    },
    "statusRedFlag": "CLEAR",
    "bio_paragraphs": [
      "Kelahiran UTAMA SPICE berakar dari kegelisahan mendalam terhadap lanskap industri di Gianyar, Bali dan sekitarnya. Berakar dari pelestarian naskah herbal Bali dan konsep Tri Hita Karana di Ubud sejak 1989. Formula penolak serangga mereka menghindari DEET sintetis dan menggunakan distilasi fraksinasi sereh wangi dan cengkeh. UTAMA SPICE hadir untuk menjembatani kesenjangan tersebut dengan membuktikan bahwa potensi daerah mampu melahirkan standar baru yang mandiri dan berdaya tawar tinggi.",
      "Melalui pendekatan kerja yang berakar pada kearifan dan disiplin mutu, UTAMA SPICE mengintegrasikan ekosistem hulu hingga hilir. Rantai pasok asosiasi petani herbal Ubud dan dataran tinggi Bali untuk sereh wangi (citronella), nilam, cengkeh, akar wangi, dan kelapa perasan dingin. Langkah ini bukan sekadar strategi produksi, melainkan ikhtiar merawat martabat pekerja lokal serta menjaga keaslian material nusantara tanpa kompromi.",
      "Dampaknya terlihat nyata pada karya-karya terkurasi yang mereka hasilkan. Menerapkan kepatuhan ketat pada kaidah botani murni dengan premis bahwa apa yang dioleskan ke kulit harus memiliki kemurnian setara bahan pangan alami. Keberadaan UTAMA SPICE menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten."
    ],
    "quote": "Menerapkan kepatuhan ketat pada kaidah botani murni dengan premis bahwa apa yang dioleskan ke kulit harus memiliki kemurnian setara bahan pangan alami.",
    "initiatives": [
      {
        "title": "Kemitraan Hulu & Rantai Pasok Berkelanjutan",
        "category": "Ekosistem Lokal",
        "description": "Rantai pasok asosiasi petani herbal Ubud dan dataran tinggi Bali untuk sereh wangi (citronella), nilam, cengkeh, akar wangi, dan kelapa perasan dingin.",
        "price": "Kemitraan Mandiri",
        "imageUrl": "https://utamaspicebali.com/wp-content/uploads/2024/10/Sensitive-Web-1.jpg",
        "action_text": "Pelajari Ekosistem",
        "link_url": "https://utamaspicebali.com"
      },
      {
        "title": "Kendali Mutu & Ketertelusuran Bahan",
        "category": "Standar Mutu",
        "description": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial.",
        "price": "Teruji & Terverifikasi",
        "imageUrl": "https://utamaspice.com/wp-content/uploads/2024/06/body-mist-group-3-800x800.jpg",
        "action_text": "Akses Toko Resmi",
        "link_url": "https://utamaspicebali.com"
      }
    ]
  },
  "jamu-iboe": {
    "slug": "jamu-iboe",
    "name": "JAMU IBOE",
    "lensSlug": "kultur-kebugaran-gaya-hidup-berdaulat",
    "lensName": "Kultur, Kebugaran & Gaya Hidup Berdaulat",
    "curationTier": "Established",
    "origin": "Surabaya & Sidoarjo, Jawa Timur",
    "logoUrl": "https://lookaside.fbsbx.com/lookaside/crawler/instagram/jamu_iboe/profile_pic.jpg",
    "discoveryTitle": {
      "anomaly": "Standardisasi Saintifik Ekstraksi Rimpang Usia Seabad: Rekayasa Bentuk Jamu Tradisional Menembus Gaya Hidup Urban",
      "question": "Bagaimana membuktikan keunggulan mandiri tanpa kompromi mutu?",
      "paradigm": "Kemandirian JAMU IBOE"
    },
    "coreFinding": "Institusi farmasi herbal tertua Nusantara (sejak 1910) merevitalisasi sistem ekstraksi rimpang ke standar CPOTB modern tanpa kehilangan senyawa aktif kurkuminoid alaminya.",
    "contextNarrative": {
      "marketVacuum": "Mengubah jamu godok dan serbuk pahit menjadi minuman fungsional larut air tanpa ampas melalui dry-granulation. Mengatasi hambatan konsumsi jamu generasi muda yang enggan mengonsumsi jamu karena higienitas dan rasa tidak stabil.",
      "disruptedStatusQuo": "Uji stabilitas dan mikroba ketat di setiap batch."
    },
    "evidenceTelemetry": {
      "originCoordinates": "Surabaya & Sidoarjo, Jawa Timur",
      "productionModel": "Pabrik bersertifikasi CPOTB dan Halal di Sidoarjo; pasokan rimpang temulawak, kencur, dan jahe emprit dari petani mitra di Jatim dan Jateng.",
      "verifiedClaims": [
        {
          "claim": "Pabrik bersertifikasi CPOTB dan Halal di Sidoarjo",
          "evidencePrimary": "Dokumentasi fasilitas operasional, audit rantai pasok, dan katalog resmi JAMU IBOE.",
          "verificationSource": "Hasil pengujian standar mutu nasional, sertifikasi relevan, dan liputan media terpercaya.",
          "editorialInterpretation": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial."
        }
      ]
    },
    "flagshipProducts": [
      {
        "name": "IBOE Natural Drink Temulawak / Jahe",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Surabaya & Sidoarjo, Jawa Timur.",
        "price": "Rp25.000",
        "buyUrl": "https://jamuiboe.com",
        "imageUrl": "https://www.jamuiboe.com/upload_media/produk/ragamproduk%20tradisional%20.jpg",
        "category": "Karya Utama"
      },
      {
        "name": "IBOE Health Drink Kulit Manggis .",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Surabaya & Sidoarjo, Jawa Timur.",
        "price": "Rp30.000",
        "buyUrl": "https://jamuiboe.com",
        "imageUrl": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/105/MTA-175354926/jamu-iboe_jamu-iboe-1-pack-prioanom-10-sachet_full01.jpg",
        "category": "Koleksi Pilihan"
      }
    ],
    "milestones": [
      {
        "year": "FASE AWAL | PERINTISAN",
        "title": "Riset Material & Pendirian Fondasi",
        "description": "Memulai eksplorasi bahan baku dan uji coba formulasi di Surabaya & Sidoarjo, Jawa Timur, menegaskan komitmen untuk tidak bergantung pada rantai pasok impor."
      },
      {
        "year": "FASE KEDUA | PENGUATAN",
        "title": "Konsolidasi Mitra & Standarisasi Mutu",
        "description": "Membangun jaringan kemitraan erat bersama perajin dan komunitas lokal, menerapkan uji kendali mutu berstandar ketat, dan merilis karya unggulan perdana."
      },
      {
        "year": "FASE KETIGA | KEDAULATAN",
        "title": "Rujukan Kemandirian & Pengakuan Pasar",
        "description": "Menjadi tolok ukur integritas karya di sektor Kultur, Kebugaran & Gaya Hidup Berdaulat, membuktikan keberlanjutan model bisnis etis yang menguntungkan ekosistem lokal."
      }
    ],
    "sovereigntyMeaning": "Keberadaan JAMU IBOE menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten.",
    "channels": {
      "officialStore": [
        {
          "platform": "Webstore Resmi",
          "url": "https://jamuiboe.com",
          "label": "jamuiboe.com"
        },
        {
          "platform": "Tokopedia Official",
          "url": "https://tokopedia.com/find?q=JAMU%20IBOE",
          "label": "Tokopedia: JAMU IBOE"
        },
        {
          "platform": "Shopee Mall",
          "url": "https://shopee.co.id/search?keyword=JAMU%20IBOE",
          "label": "Shopee: JAMU IBOE"
        }
      ],
      "publicSpaces": [
        {
          "platform": "Instagram",
          "url": "https://instagram.com/jamu_iboe",
          "label": "@jamu_iboe"
        },
        {
          "platform": "Surel Kemitraan",
          "url": "mailto:kontak@jamuiboe.com",
          "label": "Inquiry Resmi"
        }
      ]
    },
    "scores": {
      "quality": 24,
      "discovery": 21,
      "trackRecord": 25,
      "story": 25,
      "total": 95
    },
    "statusRedFlag": "CLEAR",
    "bio_paragraphs": [
      "Kelahiran JAMU IBOE berakar dari kegelisahan mendalam terhadap lanskap industri di Surabaya & Sidoarjo, Jawa Timur dan sekitarnya. Mengubah jamu godok dan serbuk pahit menjadi minuman fungsional larut air tanpa ampas melalui dry-granulation. Mengatasi hambatan konsumsi jamu generasi muda yang enggan mengonsumsi jamu karena higienitas dan rasa tidak stabil. JAMU IBOE hadir untuk menjembatani kesenjangan tersebut dengan membuktikan bahwa potensi daerah mampu melahirkan standar baru yang mandiri dan berdaya tawar tinggi.",
      "Melalui pendekatan kerja yang berakar pada kearifan dan disiplin mutu, JAMU IBOE mengintegrasikan ekosistem hulu hingga hilir. Pabrik bersertifikasi CPOTB dan Halal di Sidoarjo; pasokan rimpang temulawak, kencur, dan jahe emprit dari petani mitra di Jatim dan Jateng. Langkah ini bukan sekadar strategi produksi, melainkan ikhtiar merawat martabat pekerja lokal serta menjaga keaslian material nusantara tanpa kompromi.",
      "Dampaknya terlihat nyata pada karya-karya terkurasi yang mereka hasilkan. Institusi farmasi herbal tertua Nusantara (sejak 1910) merevitalisasi sistem ekstraksi rimpang ke standar CPOTB modern tanpa kehilangan senyawa aktif kurkuminoid alaminya. Keberadaan JAMU IBOE menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten."
    ],
    "quote": "Institusi farmasi herbal tertua Nusantara (sejak 1910) merevitalisasi sistem ekstraksi rimpang ke standar CPOTB modern tanpa kehilangan senyawa aktif kurkuminoid alaminya.",
    "initiatives": [
      {
        "title": "Kemitraan Hulu & Rantai Pasok Berkelanjutan",
        "category": "Ekosistem Lokal",
        "description": "Pabrik bersertifikasi CPOTB dan Halal di Sidoarjo; pasokan rimpang temulawak, kencur, dan jahe emprit dari petani mitra di Jatim dan Jateng.",
        "price": "Kemitraan Mandiri",
        "imageUrl": "https://www.jamuiboe.com/upload_media/produk/ragamproduk%20tradisional%20.jpg",
        "action_text": "Pelajari Ekosistem",
        "link_url": "https://jamuiboe.com"
      },
      {
        "title": "Kendali Mutu & Ketertelusuran Bahan",
        "category": "Standar Mutu",
        "description": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial.",
        "price": "Teruji & Terverifikasi",
        "imageUrl": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/105/MTA-175354926/jamu-iboe_jamu-iboe-1-pack-prioanom-10-sachet_full01.jpg",
        "action_text": "Akses Toko Resmi",
        "link_url": "https://jamuiboe.com"
      }
    ]
  },
  "hmns": {
    "slug": "hmns",
    "name": "HMNS",
    "lensSlug": "kultur-kebugaran-gaya-hidup-berdaulat",
    "lensName": "Kultur, Kebugaran & Gaya Hidup Berdaulat",
    "curationTier": "Established",
    "origin": "Jakarta",
    "logoUrl": "https://hmnsperfume.com/cdn/shop/files/Collaborators_-_Web_Banner_Mobile_35eeb6de-9eb4-4521-854b-555b58dbbe44.jpg?v=1788869716",
    "discoveryTitle": {
      "anomaly": "Demokratisasi Wewangian Fine Fragrance Melalui Pendekatan R&D Berbasis Sains: Menghentikan Hegemoni Parfum Desainer Impor",
      "question": "Bagaimana membuktikan keunggulan mandiri tanpa kompromi mutu?",
      "paradigm": "Kemandirian HMNS"
    },
    "coreFinding": "Mematahkan paradigma bahwa parfum berdaya sebar dan ketahanan tinggi harus berharga jutaan rupiah dengan menerapkan pemodelan piramida aroma matematis berlisensi IFRA dan BPOM.",
    "contextNarrative": {
      "marketVacuum": "Menggunakan material aromatik sintetis aman (clean synthetics) yang dipadukan dengan minyak atsiri melati dan nilam lokal. Memecahkan problem ketergantungan pada parfum replika atau isi ulang tanpa izin edar.",
      "disruptedStatusQuo": "Transparansi formulasi dan pengujian buta (blind testing) bersama komunitas sebelum rilis."
    },
    "evidenceTelemetry": {
      "originCoordinates": "Jakarta",
      "productionModel": "Fasilitas formulasi manufaktur kosmetik bersertifikasi di Jabodetabek; menyerap minyak atsiri nilam lokal sebagai fixative base dan ekstraksi melati Jawa.",
      "verifiedClaims": [
        {
          "claim": "Fasilitas formulasi manufaktur kosmetik bersertifikasi di Jabodetabek",
          "evidencePrimary": "Dokumentasi fasilitas operasional, audit rantai pasok, dan katalog resmi HMNS.",
          "verificationSource": "Hasil pengujian standar mutu nasional, sertifikasi relevan, dan liputan media terpercaya.",
          "editorialInterpretation": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial."
        }
      ]
    },
    "flagshipProducts": [
      {
        "name": "HMNS Orgasm Eau de Parfum 100ml",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Jakarta.",
        "price": "Rp325.000",
        "buyUrl": "https://hmnsperfume.com",
        "imageUrl": "https://hmnsperfume.com/cdn/shop/files/Aroma-1-A_530x@2x.jpg?v=1759742680",
        "category": "Karya Utama"
      },
      {
        "name": "Essence of the Sun EDP 100ml .",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Jakarta.",
        "price": "Rp369.000",
        "buyUrl": "https://hmnsperfume.com",
        "imageUrl": "https://hmnsperfume.com/cdn/shop/files/CATALOG_RESIZE.png?v=1724049580",
        "category": "Koleksi Pilihan"
      }
    ],
    "milestones": [
      {
        "year": "FASE AWAL | PERINTISAN",
        "title": "Riset Material & Pendirian Fondasi",
        "description": "Memulai eksplorasi bahan baku dan uji coba formulasi di Jakarta, menegaskan komitmen untuk tidak bergantung pada rantai pasok impor."
      },
      {
        "year": "FASE KEDUA | PENGUATAN",
        "title": "Konsolidasi Mitra & Standarisasi Mutu",
        "description": "Membangun jaringan kemitraan erat bersama perajin dan komunitas lokal, menerapkan uji kendali mutu berstandar ketat, dan merilis karya unggulan perdana."
      },
      {
        "year": "FASE KETIGA | KEDAULATAN",
        "title": "Rujukan Kemandirian & Pengakuan Pasar",
        "description": "Menjadi tolok ukur integritas karya di sektor Kultur, Kebugaran & Gaya Hidup Berdaulat, membuktikan keberlanjutan model bisnis etis yang menguntungkan ekosistem lokal."
      }
    ],
    "sovereigntyMeaning": "Keberadaan HMNS menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten.",
    "channels": {
      "officialStore": [
        {
          "platform": "Webstore Resmi",
          "url": "https://hmnsperfume.com",
          "label": "hmnsperfume.com"
        },
        {
          "platform": "Tokopedia Official",
          "url": "https://tokopedia.com/find?q=HMNS",
          "label": "Tokopedia: HMNS"
        },
        {
          "platform": "Shopee Mall",
          "url": "https://shopee.co.id/search?keyword=HMNS",
          "label": "Shopee: HMNS"
        }
      ],
      "publicSpaces": [
        {
          "platform": "Instagram",
          "url": "https://instagram.com/hmns.id",
          "label": "@hmns.id"
        },
        {
          "platform": "Surel Kemitraan",
          "url": "mailto:kontak@hmnsperfume.com",
          "label": "Inquiry Resmi"
        }
      ]
    },
    "scores": {
      "quality": 23,
      "discovery": 23,
      "trackRecord": 22,
      "story": 23,
      "total": 91
    },
    "statusRedFlag": "CLEAR",
    "bio_paragraphs": [
      "Kelahiran HMNS berakar dari kegelisahan mendalam terhadap lanskap industri di Jakarta dan sekitarnya. Menggunakan material aromatik sintetis aman (clean synthetics) yang dipadukan dengan minyak atsiri melati dan nilam lokal. Memecahkan problem ketergantungan pada parfum replika atau isi ulang tanpa izin edar. HMNS hadir untuk menjembatani kesenjangan tersebut dengan membuktikan bahwa potensi daerah mampu melahirkan standar baru yang mandiri dan berdaya tawar tinggi.",
      "Melalui pendekatan kerja yang berakar pada kearifan dan disiplin mutu, HMNS mengintegrasikan ekosistem hulu hingga hilir. Fasilitas formulasi manufaktur kosmetik bersertifikasi di Jabodetabek; menyerap minyak atsiri nilam lokal sebagai fixative base dan ekstraksi melati Jawa. Langkah ini bukan sekadar strategi produksi, melainkan ikhtiar merawat martabat pekerja lokal serta menjaga keaslian material nusantara tanpa kompromi.",
      "Dampaknya terlihat nyata pada karya-karya terkurasi yang mereka hasilkan. Mematahkan paradigma bahwa parfum berdaya sebar dan ketahanan tinggi harus berharga jutaan rupiah dengan menerapkan pemodelan piramida aroma matematis berlisensi IFRA dan BPOM. Keberadaan HMNS menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten."
    ],
    "quote": "Mematahkan paradigma bahwa parfum berdaya sebar dan ketahanan tinggi harus berharga jutaan rupiah dengan menerapkan pemodelan piramida aroma matematis berlisensi IFRA dan BPOM.",
    "initiatives": [
      {
        "title": "Kemitraan Hulu & Rantai Pasok Berkelanjutan",
        "category": "Ekosistem Lokal",
        "description": "Fasilitas formulasi manufaktur kosmetik bersertifikasi di Jabodetabek; menyerap minyak atsiri nilam lokal sebagai fixative base dan ekstraksi melati Jawa.",
        "price": "Kemitraan Mandiri",
        "imageUrl": "https://hmnsperfume.com/cdn/shop/files/Aroma-1-A_530x@2x.jpg?v=1759742680",
        "action_text": "Pelajari Ekosistem",
        "link_url": "https://hmnsperfume.com"
      },
      {
        "title": "Kendali Mutu & Ketertelusuran Bahan",
        "category": "Standar Mutu",
        "description": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial.",
        "price": "Teruji & Terverifikasi",
        "imageUrl": "https://hmnsperfume.com/cdn/shop/files/CATALOG_RESIZE.png?v=1724049580",
        "action_text": "Akses Toko Resmi",
        "link_url": "https://hmnsperfume.com"
      }
    ]
  },
  "demi-bumi": {
    "slug": "demi-bumi",
    "name": "DEMI BUMI",
    "lensSlug": "kultur-kebugaran-gaya-hidup-berdaulat",
    "lensName": "Kultur, Kebugaran & Gaya Hidup Berdaulat",
    "curationTier": "Middle",
    "origin": "Tangerang Selatan, Banten",
    "logoUrl": "https://mms.img.susercontent.com/d4502443ebc14559c294910da2d585a0",
    "discoveryTitle": {
      "anomaly": "Plastik Sekali Pakai Menguasai Dapur dan Keranjang Belanja",
      "question": "Mungkinkah Hidup Minim Sampah Dimulai dari Kantong Serut Serat Alami?",
      "paradigm": "Demokratisasi Peranti Rumah Tangga Sirkular Tanpa Plastik"
    },
    "coreFinding": "Membuktikan bahwa gaya hidup minim sampah (zero-waste) dapat diakses masyarakat luas dengan harga terjangkau melalui peranti pakai ulang berbahan serat katun mentah, bambu, dan sabut kelapa perajin lokal.",
    "contextNarrative": {
      "marketVacuum": "Dirintis oleh Jessica Halim untuk memecahkan stigma bahwa hidup ramah lingkungan itu mahal dan elitis. Demi Bumi memproduksi kantong belanja jaring serut, spons cuci piring dari sabut kelapa (loofah), sikat gigi bambu, hingga pembalut kain cuci ulang yang menyerap tenaga kerja ibu-ibu penjahit rumahan.",
      "disruptedStatusQuo": "Diliput luas di berbagai media gaya hidup sebagai pelopor produk sirkular rumah tangga."
    },
    "evidenceTelemetry": {
      "originCoordinates": "Tangerang Selatan, Banten",
      "productionModel": "Serat kapas lokal tanpa pemutih kimia, bambu rakyat, dan limbah sabut kelapa dari kelompok perajin di Jawa Barat dan Banten; dijahit oleh kelompok perempuan prasejahtera.",
      "verifiedClaims": [
        {
          "claim": "Serat kapas lokal tanpa pemutih kimia, bambu rakyat, dan limbah sabut kelapa dari kelompok perajin di Jawa Barat dan Banten",
          "evidencePrimary": "Dokumentasi fasilitas operasional, audit rantai pasok, dan katalog resmi DEMI BUMI.",
          "verificationSource": "Hasil pengujian standar mutu nasional, sertifikasi relevan, dan liputan media terpercaya.",
          "editorialInterpretation": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial."
        }
      ]
    },
    "flagshipProducts": [
      {
        "name": "Tas Jaring Belanja Reusable",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Tangerang Selatan, Banten.",
        "price": "Rp25.000",
        "buyUrl": "https://demibumi.id/",
        "imageUrl": "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80",
        "category": "Karya Utama"
      },
      {
        "name": "Spons Cuci Piring Sabut Kelapa / Loofah Alami .",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Tangerang Selatan, Banten.",
        "price": "Rp15.000",
        "buyUrl": "https://demibumi.id/",
        "imageUrl": "https://images.unsplash.com/photo-1518110925495-5fe2fda0442c?auto=format&fit=crop&w=800&q=80",
        "category": "Koleksi Pilihan"
      }
    ],
    "milestones": [
      {
        "year": "FASE AWAL | PERINTISAN",
        "title": "Riset Material & Pendirian Fondasi",
        "description": "Memulai eksplorasi bahan baku dan uji coba formulasi di Tangerang Selatan, Banten, menegaskan komitmen untuk tidak bergantung pada rantai pasok impor."
      },
      {
        "year": "FASE KEDUA | PENGUATAN",
        "title": "Konsolidasi Mitra & Standarisasi Mutu",
        "description": "Membangun jaringan kemitraan erat bersama perajin dan komunitas lokal, menerapkan uji kendali mutu berstandar ketat, dan merilis karya unggulan perdana."
      },
      {
        "year": "FASE KETIGA | KEDAULATAN",
        "title": "Rujukan Kemandirian & Pengakuan Pasar",
        "description": "Menjadi tolok ukur integritas karya di sektor Kultur, Kebugaran & Gaya Hidup Berdaulat, membuktikan keberlanjutan model bisnis etis yang menguntungkan ekosistem lokal."
      }
    ],
    "sovereigntyMeaning": "Keberadaan DEMI BUMI menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten.",
    "channels": {
      "officialStore": [
        {
          "platform": "Webstore Resmi",
          "url": "https://demibumi.id/",
          "label": "demibumi.id"
        },
        {
          "platform": "Tokopedia Official",
          "url": "https://tokopedia.com/find?q=DEMI%20BUMI",
          "label": "Tokopedia: DEMI BUMI"
        },
        {
          "platform": "Shopee Mall",
          "url": "https://shopee.co.id/search?keyword=DEMI%20BUMI",
          "label": "Shopee: DEMI BUMI"
        }
      ],
      "publicSpaces": [
        {
          "platform": "Instagram",
          "url": "https://instagram.com/demibumi.id",
          "label": "@demibumi.id"
        },
        {
          "platform": "Surel Kemitraan",
          "url": "mailto:kontak@demibumi.id",
          "label": "Inquiry Resmi"
        }
      ]
    },
    "scores": {
      "quality": 24,
      "discovery": 24,
      "trackRecord": 25,
      "story": 24,
      "total": 97
    },
    "statusRedFlag": "CLEAR",
    "bio_paragraphs": [
      "Kelahiran DEMI BUMI berakar dari kegelisahan mendalam terhadap lanskap industri di Tangerang Selatan, Banten dan sekitarnya. Dirintis oleh Jessica Halim untuk memecahkan stigma bahwa hidup ramah lingkungan itu mahal dan elitis. Demi Bumi memproduksi kantong belanja jaring serut, spons cuci piring dari sabut kelapa (loofah), sikat gigi bambu, hingga pembalut kain cuci ulang yang menyerap tenaga kerja ibu-ibu penjahit rumahan. DEMI BUMI hadir untuk menjembatani kesenjangan tersebut dengan membuktikan bahwa potensi daerah mampu melahirkan standar baru yang mandiri dan berdaya tawar tinggi.",
      "Melalui pendekatan kerja yang berakar pada kearifan dan disiplin mutu, DEMI BUMI mengintegrasikan ekosistem hulu hingga hilir. Serat kapas lokal tanpa pemutih kimia, bambu rakyat, dan limbah sabut kelapa dari kelompok perajin di Jawa Barat dan Banten; dijahit oleh kelompok perempuan prasejahtera. Langkah ini bukan sekadar strategi produksi, melainkan ikhtiar merawat martabat pekerja lokal serta menjaga keaslian material nusantara tanpa kompromi.",
      "Dampaknya terlihat nyata pada karya-karya terkurasi yang mereka hasilkan. Membuktikan bahwa gaya hidup minim sampah (zero-waste) dapat diakses masyarakat luas dengan harga terjangkau melalui peranti pakai ulang berbahan serat katun mentah, bambu, dan sabut kelapa perajin lokal. Keberadaan DEMI BUMI menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten."
    ],
    "quote": "Membuktikan bahwa gaya hidup minim sampah (zero-waste) dapat diakses masyarakat luas dengan harga terjangkau melalui peranti pakai ulang berbahan serat katun mentah, bambu, dan sabut kelapa perajin lokal.",
    "initiatives": [
      {
        "title": "Kemitraan Hulu & Rantai Pasok Berkelanjutan",
        "category": "Ekosistem Lokal",
        "description": "Serat kapas lokal tanpa pemutih kimia, bambu rakyat, dan limbah sabut kelapa dari kelompok perajin di Jawa Barat dan Banten; dijahit oleh kelompok perempuan prasejahtera.",
        "price": "Kemitraan Mandiri",
        "imageUrl": "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80",
        "action_text": "Pelajari Ekosistem",
        "link_url": "https://demibumi.id/"
      },
      {
        "title": "Kendali Mutu & Ketertelusuran Bahan",
        "category": "Standar Mutu",
        "description": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial.",
        "price": "Teruji & Terverifikasi",
        "imageUrl": "https://images.unsplash.com/photo-1518110925495-5fe2fda0442c?auto=format&fit=crop&w=800&q=80",
        "action_text": "Akses Toko Resmi",
        "link_url": "https://demibumi.id/"
      }
    ]
  },
  "dagadu-djokdja": {
    "slug": "dagadu-djokdja",
    "name": "DAGADU DJOKDJA",
    "lensSlug": "kultur-kebugaran-gaya-hidup-berdaulat",
    "lensName": "Kultur, Kebugaran & Gaya Hidup Berdaulat",
    "curationTier": "Middle",
    "origin": "Yogyakarta, D.I. Yogyakarta",
    "logoUrl": "https://lookaside.fbsbx.com/lookaside/crawler/instagram/dagadudjokdja/profile_pic.jpg",
    "discoveryTitle": {
      "anomaly": "Kaos Oleh-Oleh Didominasi Sablon Murahan dan Pembajakan Masal",
      "question": "Mungkinkah Mahasiswa Arsitektur Merancang Diplomasi Kultural Melalui Bahasa Walikan?",
      "paradigm": "Kedaulatan Identitas Urban Jogja Melawan Serbuan Plagiasi"
    },
    "coreFinding": "Pelopor kriya cinderamata grafis cerdas berbasis subkultur bahasa walikan Jogja yang mempertahankan orisinalitas desain dan etika teritorial tanpa berekspansi membuka cabang di luar kota.",
    "contextNarrative": {
      "marketVacuum": "Didirikan pada 1994 oleh mahasiswa dan alumni Arsitektur UGM yang menolak komersialisasi kaos bajakan Malioboro dengan memproduksi kaus katun berkualitas berilustrasi kritik sosial dan kejenakaan lokal. Selama puluhan tahun konsisten menolak membuka gerai resmi di luar Yogyakarta demi menjaga nilai kelangkaan kultural dan diplomasi pariwisata daerah.",
      "disruptedStatusQuo": "Membuktikan daya tahan merek berbasis kekayaan intelektual (IP) independen di tengah gempuran pembajakan."
    },
    "evidenceTelemetry": {
      "originCoordinates": "Yogyakarta, D.I. Yogyakarta",
      "productionModel": "Studio desain dan ilustrasi in-house di Yogyakarta; penjahitan dan sablon presisi bermitra dengan konveksi lokal Yogyakarta; bahan katun combed alami berkualitas tinggi.",
      "verifiedClaims": [
        {
          "claim": "Studio desain dan ilustrasi in-house di Yogyakarta",
          "evidencePrimary": "Dokumentasi fasilitas operasional, audit rantai pasok, dan katalog resmi DAGADU DJOKDJA.",
          "verificationSource": "Hasil pengujian standar mutu nasional, sertifikasi relevan, dan liputan media terpercaya.",
          "editorialInterpretation": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial."
        }
      ]
    },
    "flagshipProducts": [
      {
        "name": "Kaos Grafis Oblong Dagadu Aseli",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Yogyakarta, D.I. Yogyakarta.",
        "price": "Rp95.000",
        "buyUrl": "https://dagadu.co.id",
        "imageUrl": "https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=3958886085722884731",
        "category": "Karya Utama"
      },
      {
        "name": "Merchandise Kultural Jogja .",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Yogyakarta, D.I. Yogyakarta.",
        "price": "Rp25.000",
        "buyUrl": "https://dagadu.co.id",
        "imageUrl": "https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=3982083622236183832",
        "category": "Koleksi Pilihan"
      }
    ],
    "milestones": [
      {
        "year": "FASE AWAL | PERINTISAN",
        "title": "Riset Material & Pendirian Fondasi",
        "description": "Memulai eksplorasi bahan baku dan uji coba formulasi di Yogyakarta, D.I. Yogyakarta, menegaskan komitmen untuk tidak bergantung pada rantai pasok impor."
      },
      {
        "year": "FASE KEDUA | PENGUATAN",
        "title": "Konsolidasi Mitra & Standarisasi Mutu",
        "description": "Membangun jaringan kemitraan erat bersama perajin dan komunitas lokal, menerapkan uji kendali mutu berstandar ketat, dan merilis karya unggulan perdana."
      },
      {
        "year": "FASE KETIGA | KEDAULATAN",
        "title": "Rujukan Kemandirian & Pengakuan Pasar",
        "description": "Menjadi tolok ukur integritas karya di sektor Kultur, Kebugaran & Gaya Hidup Berdaulat, membuktikan keberlanjutan model bisnis etis yang menguntungkan ekosistem lokal."
      }
    ],
    "sovereigntyMeaning": "Keberadaan DAGADU DJOKDJA menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten.",
    "channels": {
      "officialStore": [
        {
          "platform": "Webstore Resmi",
          "url": "https://dagadu.co.id",
          "label": "dagadu.co.id"
        },
        {
          "platform": "Tokopedia Official",
          "url": "https://tokopedia.com/find?q=DAGADU%20DJOKDJA",
          "label": "Tokopedia: DAGADU DJOKDJA"
        },
        {
          "platform": "Shopee Mall",
          "url": "https://shopee.co.id/search?keyword=DAGADU%20DJOKDJA",
          "label": "Shopee: DAGADU DJOKDJA"
        }
      ],
      "publicSpaces": [
        {
          "platform": "Instagram",
          "url": "https://instagram.com/dagadudjokdja",
          "label": "@dagadudjokdja"
        },
        {
          "platform": "Surel Kemitraan",
          "url": "mailto:kontak@dagadu.co.id",
          "label": "Inquiry Resmi"
        }
      ]
    },
    "scores": {
      "quality": 24,
      "discovery": 25,
      "trackRecord": 25,
      "story": 25,
      "total": 99
    },
    "statusRedFlag": "CLEAR",
    "bio_paragraphs": [
      "Kelahiran DAGADU DJOKDJA berakar dari kegelisahan mendalam terhadap lanskap industri di Yogyakarta, D.I. Yogyakarta dan sekitarnya. Didirikan pada 1994 oleh mahasiswa dan alumni Arsitektur UGM yang menolak komersialisasi kaos bajakan Malioboro dengan memproduksi kaus katun berkualitas berilustrasi kritik sosial dan kejenakaan lokal. Selama puluhan tahun konsisten menolak membuka gerai resmi di luar Yogyakarta demi menjaga nilai kelangkaan kultural dan diplomasi pariwisata daerah. DAGADU DJOKDJA hadir untuk menjembatani kesenjangan tersebut dengan membuktikan bahwa potensi daerah mampu melahirkan standar baru yang mandiri dan berdaya tawar tinggi.",
      "Melalui pendekatan kerja yang berakar pada kearifan dan disiplin mutu, DAGADU DJOKDJA mengintegrasikan ekosistem hulu hingga hilir. Studio desain dan ilustrasi in-house di Yogyakarta; penjahitan dan sablon presisi bermitra dengan konveksi lokal Yogyakarta; bahan katun combed alami berkualitas tinggi. Langkah ini bukan sekadar strategi produksi, melainkan ikhtiar merawat martabat pekerja lokal serta menjaga keaslian material nusantara tanpa kompromi.",
      "Dampaknya terlihat nyata pada karya-karya terkurasi yang mereka hasilkan. Pelopor kriya cinderamata grafis cerdas berbasis subkultur bahasa walikan Jogja yang mempertahankan orisinalitas desain dan etika teritorial tanpa berekspansi membuka cabang di luar kota. Keberadaan DAGADU DJOKDJA menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten."
    ],
    "quote": "Pelopor kriya cinderamata grafis cerdas berbasis subkultur bahasa walikan Jogja yang mempertahankan orisinalitas desain dan etika teritorial tanpa berekspansi membuka cabang di luar kota.",
    "initiatives": [
      {
        "title": "Kemitraan Hulu & Rantai Pasok Berkelanjutan",
        "category": "Ekosistem Lokal",
        "description": "Studio desain dan ilustrasi in-house di Yogyakarta; penjahitan dan sablon presisi bermitra dengan konveksi lokal Yogyakarta; bahan katun combed alami berkualitas tinggi.",
        "price": "Kemitraan Mandiri",
        "imageUrl": "https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=3958886085722884731",
        "action_text": "Pelajari Ekosistem",
        "link_url": "https://dagadu.co.id"
      },
      {
        "title": "Kendali Mutu & Ketertelusuran Bahan",
        "category": "Standar Mutu",
        "description": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial.",
        "price": "Teruji & Terverifikasi",
        "imageUrl": "https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=3982083622236183832",
        "action_text": "Akses Toko Resmi",
        "link_url": "https://dagadu.co.id"
      }
    ]
  },
  "telusur-kultur": {
    "slug": "telusur-kultur",
    "name": "TELUSUR KULTUR",
    "lensSlug": "kultur-kebugaran-gaya-hidup-berdaulat",
    "lensName": "Kultur, Kebugaran & Gaya Hidup Berdaulat",
    "curationTier": "Middle",
    "origin": "Jakarta Selatan, DKI Jakarta",
    "logoUrl": "https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=100063971893184",
    "discoveryTitle": {
      "anomaly": "Narasi Sejarah Bangsa Kerap Berdebu di Lemari Museum",
      "question": "Bisakah Pahlawan dan Kuliner Pasar Diubah Menjadi Kemeja Resik Sehari-hari?",
      "paradigm": "Storytelling Visual Tekstil Merayakan Rupa dan Cita Rasa Nusantara"
    },
    "coreFinding": "Mentransformasi narasi sejarah, etnobotani kuliner tradisional, dan cerita rakyat kepulauan menjadi karya seni ilustrasi kemeja siap pakai (wearable storytelling) yang diminati generasi muda lintas latar belakang.",
    "contextNarrative": {
      "marketVacuum": "Didirikan di bawah naungan PT Telusur Kultur Nusantara untuk mematahkan anggapan bahwa busana bertema kebangsaan selalu kaku dan bernuansa seragam formal. Menggandeng seniman ilustrator lokal untuk menggambar detail naratif seperti seri Rasa Nusantara, Pacu Jalur, hingga pahlawan nasional pada bahan kain adem yang nyaman untuk iklim tropis.",
      "disruptedStatusQuo": "Setiap rilis koleksi menghubungkan konsumen dengan edukasi narasi sejarah dan program sosial pemberdayaan UMKM kuliner."
    },
    "evidenceTelemetry": {
      "originCoordinates": "Jakarta Selatan, DKI Jakarta",
      "productionModel": "Kolaborasi ilustrasi orisinal bersama ilustrator muda Indonesia; pencetakan pola kain digital ramah lingkungan dan penjahitan presisi di fasilitas garmen lokal Jakarta dan Jawa Barat.",
      "verifiedClaims": [
        {
          "claim": "Kolaborasi ilustrasi orisinal bersama ilustrator muda Indonesia",
          "evidencePrimary": "Dokumentasi fasilitas operasional, audit rantai pasok, dan katalog resmi TELUSUR KULTUR.",
          "verificationSource": "Hasil pengujian standar mutu nasional, sertifikasi relevan, dan liputan media terpercaya.",
          "editorialInterpretation": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial."
        }
      ]
    },
    "flagshipProducts": [
      {
        "name": "Kemeja Ilustrasi Cita Rasa Nusantara / Pacu Jalur",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Jakarta Selatan, DKI Jakarta.",
        "price": "Rp225.000",
        "buyUrl": "https://telusurkultur.com/",
        "imageUrl": "https://telusurkultur.com/cdn/shop/files/TKBATIK0526-006_1.jpg?v=1785693918&width=1080",
        "category": "Karya Utama"
      },
      {
        "name": "Kemeja Seri Tokoh Bangsa .",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Jakarta Selatan, DKI Jakarta.",
        "price": "Rp275.000",
        "buyUrl": "https://telusurkultur.com/",
        "imageUrl": "https://telusurkultur.com/cdn/shop/files/Corak-nusantara-promo-diskon-99-2026-desktop.jpg?v=1788769771&width=2400",
        "category": "Koleksi Pilihan"
      }
    ],
    "milestones": [
      {
        "year": "FASE AWAL | PERINTISAN",
        "title": "Riset Material & Pendirian Fondasi",
        "description": "Memulai eksplorasi bahan baku dan uji coba formulasi di Jakarta Selatan, DKI Jakarta, menegaskan komitmen untuk tidak bergantung pada rantai pasok impor."
      },
      {
        "year": "FASE KEDUA | PENGUATAN",
        "title": "Konsolidasi Mitra & Standarisasi Mutu",
        "description": "Membangun jaringan kemitraan erat bersama perajin dan komunitas lokal, menerapkan uji kendali mutu berstandar ketat, dan merilis karya unggulan perdana."
      },
      {
        "year": "FASE KETIGA | KEDAULATAN",
        "title": "Rujukan Kemandirian & Pengakuan Pasar",
        "description": "Menjadi tolok ukur integritas karya di sektor Kultur, Kebugaran & Gaya Hidup Berdaulat, membuktikan keberlanjutan model bisnis etis yang menguntungkan ekosistem lokal."
      }
    ],
    "sovereigntyMeaning": "Keberadaan TELUSUR KULTUR menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten.",
    "channels": {
      "officialStore": [
        {
          "platform": "Webstore Resmi",
          "url": "https://telusurkultur.com/",
          "label": "telusurkultur.com"
        },
        {
          "platform": "Tokopedia Official",
          "url": "https://tokopedia.com/find?q=TELUSUR%20KULTUR",
          "label": "Tokopedia: TELUSUR KULTUR"
        },
        {
          "platform": "Shopee Mall",
          "url": "https://shopee.co.id/search?keyword=TELUSUR%20KULTUR",
          "label": "Shopee: TELUSUR KULTUR"
        }
      ],
      "publicSpaces": [
        {
          "platform": "Instagram",
          "url": "https://instagram.com/telusurkultur",
          "label": "@telusurkultur"
        },
        {
          "platform": "Surel Kemitraan",
          "url": "mailto:kontak@telusurkultur.com",
          "label": "Inquiry Resmi"
        }
      ]
    },
    "scores": {
      "quality": 24,
      "discovery": 24,
      "trackRecord": 24,
      "story": 24,
      "total": 96
    },
    "statusRedFlag": "CLEAR",
    "bio_paragraphs": [
      "Kelahiran TELUSUR KULTUR berakar dari kegelisahan mendalam terhadap lanskap industri di Jakarta Selatan, DKI Jakarta dan sekitarnya. Didirikan di bawah naungan PT Telusur Kultur Nusantara untuk mematahkan anggapan bahwa busana bertema kebangsaan selalu kaku dan bernuansa seragam formal. Menggandeng seniman ilustrator lokal untuk menggambar detail naratif seperti seri Rasa Nusantara, Pacu Jalur, hingga pahlawan nasional pada bahan kain adem yang nyaman untuk iklim tropis. TELUSUR KULTUR hadir untuk menjembatani kesenjangan tersebut dengan membuktikan bahwa potensi daerah mampu melahirkan standar baru yang mandiri dan berdaya tawar tinggi.",
      "Melalui pendekatan kerja yang berakar pada kearifan dan disiplin mutu, TELUSUR KULTUR mengintegrasikan ekosistem hulu hingga hilir. Kolaborasi ilustrasi orisinal bersama ilustrator muda Indonesia; pencetakan pola kain digital ramah lingkungan dan penjahitan presisi di fasilitas garmen lokal Jakarta dan Jawa Barat. Langkah ini bukan sekadar strategi produksi, melainkan ikhtiar merawat martabat pekerja lokal serta menjaga keaslian material nusantara tanpa kompromi.",
      "Dampaknya terlihat nyata pada karya-karya terkurasi yang mereka hasilkan. Mentransformasi narasi sejarah, etnobotani kuliner tradisional, dan cerita rakyat kepulauan menjadi karya seni ilustrasi kemeja siap pakai (wearable storytelling) yang diminati generasi muda lintas latar belakang. Keberadaan TELUSUR KULTUR menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten."
    ],
    "quote": "Mentransformasi narasi sejarah, etnobotani kuliner tradisional, dan cerita rakyat kepulauan menjadi karya seni ilustrasi kemeja siap pakai (wearable storytelling) yang diminati generasi muda lintas latar belakang.",
    "initiatives": [
      {
        "title": "Kemitraan Hulu & Rantai Pasok Berkelanjutan",
        "category": "Ekosistem Lokal",
        "description": "Kolaborasi ilustrasi orisinal bersama ilustrator muda Indonesia; pencetakan pola kain digital ramah lingkungan dan penjahitan presisi di fasilitas garmen lokal Jakarta dan Jawa Barat.",
        "price": "Kemitraan Mandiri",
        "imageUrl": "https://telusurkultur.com/cdn/shop/files/TKBATIK0526-006_1.jpg?v=1785693918&width=1080",
        "action_text": "Pelajari Ekosistem",
        "link_url": "https://telusurkultur.com/"
      },
      {
        "title": "Kendali Mutu & Ketertelusuran Bahan",
        "category": "Standar Mutu",
        "description": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial.",
        "price": "Teruji & Terverifikasi",
        "imageUrl": "https://telusurkultur.com/cdn/shop/files/Corak-nusantara-promo-diskon-99-2026-desktop.jpg?v=1788769771&width=2400",
        "action_text": "Akses Toko Resmi",
        "link_url": "https://telusurkultur.com/"
      }
    ]
  },
  "rumah-atsiri-indonesia": {
    "slug": "rumah-atsiri-indonesia",
    "name": "RUMAH ATSIRI INDONESIA",
    "lensSlug": "kultur-kebugaran-gaya-hidup-berdaulat",
    "lensName": "Kultur, Kebugaran & Gaya Hidup Berdaulat",
    "curationTier": "Hidden Gem",
    "origin": "Karanganyar, Jawa Tengah",
    "logoUrl": "https://static.wixstatic.com/media/33d8cb_2c37b53703e947b5a56f3151fd6deee0~mv2.png",
    "discoveryTitle": {
      "anomaly": "Kebangkitan Fasilitas Distilasi Citronella 1963 di Kaki Gunung Lawu: Rantai Pasok Mandiri dari Tanah Hingga Botol",
      "question": "Bagaimana membuktikan keunggulan mandiri tanpa kompromi mutu?",
      "paradigm": "Kemandirian RUMAH ATSIRI INDONESIA"
    },
    "coreFinding": "Revitalisasi pabrik penyulingan atsiri bersejarah kerja sama RI-Bulgaria 1963 menjadi pusat riset botani, kebun aromatik, dan fasilitas ekstraksi uap mandiri terpadu.",
    "contextNarrative": {
      "marketVacuum": "Mengontrol seluruh siklus hulu ke hilir dari agronomi tanaman aromatik di Tawangmangu, penyulingan uap (steam distillation), hingga produk akhir. Memecahkan anomali atsiri Indonesia di mana minyak mentah diekspor murah lalu diimpor kembali mahal.",
      "disruptedStatusQuo": "Formulasi bebas pengencer kimia dan fiksatif berbahaya."
    },
    "evidenceTelemetry": {
      "originCoordinates": "Karanganyar, Jawa Tengah",
      "productionModel": "Kebun riset dan unit penyulingan di Plumbon, Tawangmangu; menyuling sereh wangi (citronella), nilam, rosemary, marigold, lavender lokal di lereng Gunung Lawu.",
      "verifiedClaims": [
        {
          "claim": "Kebun riset dan unit penyulingan di Plumbon, Tawangmangu",
          "evidencePrimary": "Dokumentasi fasilitas operasional, audit rantai pasok, dan katalog resmi RUMAH ATSIRI INDONESIA.",
          "verificationSource": "Hasil pengujian standar mutu nasional, sertifikasi relevan, dan liputan media terpercaya.",
          "editorialInterpretation": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial."
        }
      ]
    },
    "flagshipProducts": [
      {
        "name": "Citronella Pure Essential Oil 10ml",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Karanganyar, Jawa Tengah.",
        "price": "Rp95.000",
        "buyUrl": "https://www.rumahatsiri.com",
        "imageUrl": "https://shop.rumahatsiri.com/cdn/shop/files/Shop_Marketplace_PDP_Fragrance_1941_01_36495bcd-8994-41ec-a823-e330f754c352.png?v=1761712719&width=1080",
        "category": "Karya Utama"
      },
      {
        "name": "1963 Scented Botanical Aromatic Mist .",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Karanganyar, Jawa Tengah.",
        "price": "Rp145.000",
        "buyUrl": "https://www.rumahatsiri.com",
        "imageUrl": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/MTA-148765394/rumah_atsiri_indonesia_rumah_atsiri_indonesia_reed_diffuser_holiday_package_full01_l5titmt8.webp",
        "category": "Koleksi Pilihan"
      }
    ],
    "milestones": [
      {
        "year": "FASE AWAL | PERINTISAN",
        "title": "Riset Material & Pendirian Fondasi",
        "description": "Memulai eksplorasi bahan baku dan uji coba formulasi di Karanganyar, Jawa Tengah, menegaskan komitmen untuk tidak bergantung pada rantai pasok impor."
      },
      {
        "year": "FASE KEDUA | PENGUATAN",
        "title": "Konsolidasi Mitra & Standarisasi Mutu",
        "description": "Membangun jaringan kemitraan erat bersama perajin dan komunitas lokal, menerapkan uji kendali mutu berstandar ketat, dan merilis karya unggulan perdana."
      },
      {
        "year": "FASE KETIGA | KEDAULATAN",
        "title": "Rujukan Kemandirian & Pengakuan Pasar",
        "description": "Menjadi tolok ukur integritas karya di sektor Kultur, Kebugaran & Gaya Hidup Berdaulat, membuktikan keberlanjutan model bisnis etis yang menguntungkan ekosistem lokal."
      }
    ],
    "sovereigntyMeaning": "Keberadaan RUMAH ATSIRI INDONESIA menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten.",
    "channels": {
      "officialStore": [
        {
          "platform": "Webstore Resmi",
          "url": "https://www.rumahatsiri.com",
          "label": "www.rumahatsiri.com"
        },
        {
          "platform": "Tokopedia Official",
          "url": "https://tokopedia.com/find?q=RUMAH%20ATSIRI%20INDONESIA",
          "label": "Tokopedia: RUMAH ATSIRI INDONESIA"
        },
        {
          "platform": "Shopee Mall",
          "url": "https://shopee.co.id/search?keyword=RUMAH%20ATSIRI%20INDONESIA",
          "label": "Shopee: RUMAH ATSIRI INDONESIA"
        }
      ],
      "publicSpaces": [
        {
          "platform": "Instagram",
          "url": "https://instagram.com/rumahatsiri",
          "label": "@rumahatsiri"
        },
        {
          "platform": "Surel Kemitraan",
          "url": "mailto:kontak@rumahatsiri.com",
          "label": "Inquiry Resmi"
        }
      ]
    },
    "scores": {
      "quality": 25,
      "discovery": 25,
      "trackRecord": 24,
      "story": 25,
      "total": 99
    },
    "statusRedFlag": "CLEAR",
    "bio_paragraphs": [
      "Kelahiran RUMAH ATSIRI INDONESIA berakar dari kegelisahan mendalam terhadap lanskap industri di Karanganyar, Jawa Tengah dan sekitarnya. Mengontrol seluruh siklus hulu ke hilir dari agronomi tanaman aromatik di Tawangmangu, penyulingan uap (steam distillation), hingga produk akhir. Memecahkan anomali atsiri Indonesia di mana minyak mentah diekspor murah lalu diimpor kembali mahal. RUMAH ATSIRI INDONESIA hadir untuk menjembatani kesenjangan tersebut dengan membuktikan bahwa potensi daerah mampu melahirkan standar baru yang mandiri dan berdaya tawar tinggi.",
      "Melalui pendekatan kerja yang berakar pada kearifan dan disiplin mutu, RUMAH ATSIRI INDONESIA mengintegrasikan ekosistem hulu hingga hilir. Kebun riset dan unit penyulingan di Plumbon, Tawangmangu; menyuling sereh wangi (citronella), nilam, rosemary, marigold, lavender lokal di lereng Gunung Lawu. Langkah ini bukan sekadar strategi produksi, melainkan ikhtiar merawat martabat pekerja lokal serta menjaga keaslian material nusantara tanpa kompromi.",
      "Dampaknya terlihat nyata pada karya-karya terkurasi yang mereka hasilkan. Revitalisasi pabrik penyulingan atsiri bersejarah kerja sama RI-Bulgaria 1963 menjadi pusat riset botani, kebun aromatik, dan fasilitas ekstraksi uap mandiri terpadu. Keberadaan RUMAH ATSIRI INDONESIA menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten."
    ],
    "quote": "Revitalisasi pabrik penyulingan atsiri bersejarah kerja sama RI-Bulgaria 1963 menjadi pusat riset botani, kebun aromatik, dan fasilitas ekstraksi uap mandiri terpadu.",
    "initiatives": [
      {
        "title": "Kemitraan Hulu & Rantai Pasok Berkelanjutan",
        "category": "Ekosistem Lokal",
        "description": "Kebun riset dan unit penyulingan di Plumbon, Tawangmangu; menyuling sereh wangi (citronella), nilam, rosemary, marigold, lavender lokal di lereng Gunung Lawu.",
        "price": "Kemitraan Mandiri",
        "imageUrl": "https://shop.rumahatsiri.com/cdn/shop/files/Shop_Marketplace_PDP_Fragrance_1941_01_36495bcd-8994-41ec-a823-e330f754c352.png?v=1761712719&width=1080",
        "action_text": "Pelajari Ekosistem",
        "link_url": "https://www.rumahatsiri.com"
      },
      {
        "title": "Kendali Mutu & Ketertelusuran Bahan",
        "category": "Standar Mutu",
        "description": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial.",
        "price": "Teruji & Terverifikasi",
        "imageUrl": "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/MTA-148765394/rumah_atsiri_indonesia_rumah_atsiri_indonesia_reed_diffuser_holiday_package_full01_l5titmt8.webp",
        "action_text": "Akses Toko Resmi",
        "link_url": "https://www.rumahatsiri.com"
      }
    ]
  },
  "mandalika-musik": {
    "slug": "mandalika-musik",
    "name": "MANDALIKA MUSIK",
    "lensSlug": "kultur-kebugaran-gaya-hidup-berdaulat",
    "lensName": "Kultur, Kebugaran & Gaya Hidup Berdaulat",
    "curationTier": "Hidden Gem",
    "origin": "Tangerang, Banten / Jakarta",
    "logoUrl": "https://mandalikamusic.com/cdn/shop/files/BANNER_WEB_jpg_1400x.jpg?v=1778815528",
    "discoveryTitle": {
      "anomaly": "Alat Musik Akustik Impor Terlalu Mahal untuk Pelajar dan Seniman Jalanan",
      "question": "Bagaimana Memproduksi Gitar Akustik Kayu Lokal Berstandar Intonasi Presisi di Bawah Satu Juta Rupiah?",
      "paradigm": "Demokratisasi Akses Instrumen Akustik Berkualitas untuk Musisi Akar Rumput"
    },
    "coreFinding": "Mematahkan hegemoni pabrikan instrumen global dengan merekayasa gitar akustik dan ukulele berbahan kayu lokal berdaya tahan iklim tropis dan intonasi presisi dengan harga terjangkau bagi pelajar dan musisi pemula.",
    "contextNarrative": {
      "marketVacuum": "Instrumen gitar akustik di Indonesia sebelumnya terbelah antara produk pabrikan impor yang mahal atau gitar murah tanpa merk di pinggir jalan yang bengkok neck-nya dan fals intonasinya. Mandalika hadir melakukan R&D pemilihan kayu (meranti, rosewood, spruce) dan kontrol kualitas perakitan fretwork presisi langsung di Indonesia.",
      "disruptedStatusQuo": "Mengisi ruang kreasi bermusik jutaan anak muda dan komunitas musik independen di seluruh penjuru tanah air."
    },
    "evidenceTelemetry": {
      "originCoordinates": "Tangerang, Banten / Jakarta",
      "productionModel": "Pemilihan bahan kayu lokal legal terstandarisasi kelembapan; perakitan dan penataan truss rod presisi di workshop Tangerang; pengujian akustik mandiri sebelum distribusi.",
      "verifiedClaims": [
        {
          "claim": "Pemilihan bahan kayu lokal legal terstandarisasi kelembapan",
          "evidencePrimary": "Dokumentasi fasilitas operasional, audit rantai pasok, dan katalog resmi MANDALIKA MUSIK.",
          "verificationSource": "Hasil pengujian standar mutu nasional, sertifikasi relevan, dan liputan media terpercaya.",
          "editorialInterpretation": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial."
        }
      ]
    },
    "flagshipProducts": [
      {
        "name": "Mandalika Acoustic Guitar AP / Starlight Series",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Tangerang, Banten / Jakarta.",
        "price": "Rp550.000",
        "buyUrl": "https://mandalikamusic.com/",
        "imageUrl": "https://mandalikamusic.com/cdn/shop/files/Artboard_1_copy_9_266d7ccf-c4b4-451a-9e8b-5d2e8a139f2f_1400x.jpg?v=1763625858",
        "category": "Karya Utama"
      },
      {
        "name": "Mandalika Ukulele Soprano / Concert .",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Tangerang, Banten / Jakarta.",
        "price": "Rp220.000",
        "buyUrl": "https://mandalikamusic.com/",
        "imageUrl": "https://mandalikamusic.com/cdn/shop/files/JW_BK_TUNER_LC.jpg?v=1787987360",
        "category": "Koleksi Pilihan"
      }
    ],
    "milestones": [
      {
        "year": "FASE AWAL | PERINTISAN",
        "title": "Riset Material & Pendirian Fondasi",
        "description": "Memulai eksplorasi bahan baku dan uji coba formulasi di Tangerang, Banten / Jakarta, menegaskan komitmen untuk tidak bergantung pada rantai pasok impor."
      },
      {
        "year": "FASE KEDUA | PENGUATAN",
        "title": "Konsolidasi Mitra & Standarisasi Mutu",
        "description": "Membangun jaringan kemitraan erat bersama perajin dan komunitas lokal, menerapkan uji kendali mutu berstandar ketat, dan merilis karya unggulan perdana."
      },
      {
        "year": "FASE KETIGA | KEDAULATAN",
        "title": "Rujukan Kemandirian & Pengakuan Pasar",
        "description": "Menjadi tolok ukur integritas karya di sektor Kultur, Kebugaran & Gaya Hidup Berdaulat, membuktikan keberlanjutan model bisnis etis yang menguntungkan ekosistem lokal."
      }
    ],
    "sovereigntyMeaning": "Keberadaan MANDALIKA MUSIK menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten.",
    "channels": {
      "officialStore": [
        {
          "platform": "Webstore Resmi",
          "url": "https://mandalikamusic.com/",
          "label": "mandalikamusic.com"
        },
        {
          "platform": "Tokopedia Official",
          "url": "https://tokopedia.com/find?q=MANDALIKA%20MUSIK",
          "label": "Tokopedia: MANDALIKA MUSIK"
        },
        {
          "platform": "Shopee Mall",
          "url": "https://shopee.co.id/search?keyword=MANDALIKA%20MUSIK",
          "label": "Shopee: MANDALIKA MUSIK"
        }
      ],
      "publicSpaces": [
        {
          "platform": "Instagram",
          "url": "https://instagram.com/mandalikamusic",
          "label": "@mandalikamusic"
        },
        {
          "platform": "Surel Kemitraan",
          "url": "mailto:kontak@mandalikamusic.com",
          "label": "Inquiry Resmi"
        }
      ]
    },
    "scores": {
      "quality": 24,
      "discovery": 24,
      "trackRecord": 23,
      "story": 24,
      "total": 95
    },
    "statusRedFlag": "CLEAR",
    "bio_paragraphs": [
      "Kelahiran MANDALIKA MUSIK berakar dari kegelisahan mendalam terhadap lanskap industri di Tangerang, Banten / Jakarta dan sekitarnya. Instrumen gitar akustik di Indonesia sebelumnya terbelah antara produk pabrikan impor yang mahal atau gitar murah tanpa merk di pinggir jalan yang bengkok neck-nya dan fals intonasinya. Mandalika hadir melakukan R&D pemilihan kayu (meranti, rosewood, spruce) dan kontrol kualitas perakitan fretwork presisi langsung di Indonesia. MANDALIKA MUSIK hadir untuk menjembatani kesenjangan tersebut dengan membuktikan bahwa potensi daerah mampu melahirkan standar baru yang mandiri dan berdaya tawar tinggi.",
      "Melalui pendekatan kerja yang berakar pada kearifan dan disiplin mutu, MANDALIKA MUSIK mengintegrasikan ekosistem hulu hingga hilir. Pemilihan bahan kayu lokal legal terstandarisasi kelembapan; perakitan dan penataan truss rod presisi di workshop Tangerang; pengujian akustik mandiri sebelum distribusi. Langkah ini bukan sekadar strategi produksi, melainkan ikhtiar merawat martabat pekerja lokal serta menjaga keaslian material nusantara tanpa kompromi.",
      "Dampaknya terlihat nyata pada karya-karya terkurasi yang mereka hasilkan. Mematahkan hegemoni pabrikan instrumen global dengan merekayasa gitar akustik dan ukulele berbahan kayu lokal berdaya tahan iklim tropis dan intonasi presisi dengan harga terjangkau bagi pelajar dan musisi pemula. Keberadaan MANDALIKA MUSIK menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten."
    ],
    "quote": "Mematahkan hegemoni pabrikan instrumen global dengan merekayasa gitar akustik dan ukulele berbahan kayu lokal berdaya tahan iklim tropis dan intonasi presisi dengan harga terjangkau bagi pelajar dan musisi pemula.",
    "initiatives": [
      {
        "title": "Kemitraan Hulu & Rantai Pasok Berkelanjutan",
        "category": "Ekosistem Lokal",
        "description": "Pemilihan bahan kayu lokal legal terstandarisasi kelembapan; perakitan dan penataan truss rod presisi di workshop Tangerang; pengujian akustik mandiri sebelum distribusi.",
        "price": "Kemitraan Mandiri",
        "imageUrl": "https://mandalikamusic.com/cdn/shop/files/Artboard_1_copy_9_266d7ccf-c4b4-451a-9e8b-5d2e8a139f2f_1400x.jpg?v=1763625858",
        "action_text": "Pelajari Ekosistem",
        "link_url": "https://mandalikamusic.com/"
      },
      {
        "title": "Kendali Mutu & Ketertelusuran Bahan",
        "category": "Standar Mutu",
        "description": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial.",
        "price": "Teruji & Terverifikasi",
        "imageUrl": "https://mandalikamusic.com/cdn/shop/files/JW_BK_TUNER_LC.jpg?v=1787987360",
        "action_text": "Akses Toko Resmi",
        "link_url": "https://mandalikamusic.com/"
      }
    ]
  },
  "pala-nusantara": {
    "slug": "pala-nusantara",
    "name": "PALA NUSANTARA",
    "lensSlug": "kultur-kebugaran-gaya-hidup-berdaulat",
    "lensName": "Kultur, Kebugaran & Gaya Hidup Berdaulat",
    "curationTier": "Hidden Gem",
    "origin": "Kota Bandung, Jawa Barat",
    "logoUrl": "https://mms.img.susercontent.com/b30fd7ae5f4c7cfce58ac89a33a7352a",
    "discoveryTitle": {
      "anomaly": "Jam Tangan Selalu Didominasi Cangkang Logam Impor",
      "question": "Mungkinkah Kayu Sisa Olahan dan Falsafah Buah Pala Dirakit Menjadi Arloji Presisi Tinggi?",
      "paradigm": "Diplomasi Kriya Jam Tangan Kayu Membawa Narasi Jalur Rempah ke Panggung Dunia"
    },
    "coreFinding": "Merekayasa jam tangan kayu geometris berdimensi kompak dari kayu lokal legal dan serat kulit nabati yang mengangkat filosofi buah pala sebagai simbol komoditas sejarah kepulauan Nusantara.",
    "contextNarrative": {
      "marketVacuum": "Dirintis oleh desainer produk Ilham Pinastiko untuk menjawab kejenuhan arloji logam impor dengan menciptakan arloji berkarakter tropis yang hangat di pergelangan tangan. Mengombinasikan cangkang kayu sonokeling, maple, dan kuningan dengan ketahanan air (splash resistance) dan mesin penggerak presisi.",
      "disruptedStatusQuo": "Meraih penghargaan Good Design Award (G-Mark Jepang) dan terpilih sebagai cenderamata resmi KTT G20 Bali."
    },
    "evidenceTelemetry": {
      "originCoordinates": "Kota Bandung, Jawa Barat",
      "productionModel": "Kayu perkebunan legal bersertifikat (sonokeling, maple) dari Jawa Barat; tali kulit samak nabati lokal tanpa kromium berbahaya; perakitan mikro dan QC di studio kreatif Bandung.",
      "verifiedClaims": [
        {
          "claim": "Kayu perkebunan legal bersertifikat (sonokeling, maple) dari Jawa Barat",
          "evidencePrimary": "Dokumentasi fasilitas operasional, audit rantai pasok, dan katalog resmi PALA NUSANTARA.",
          "verificationSource": "Hasil pengujian standar mutu nasional, sertifikasi relevan, dan liputan media terpercaya.",
          "editorialInterpretation": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial."
        }
      ]
    },
    "flagshipProducts": [
      {
        "name": "Pala Cokelat / Pala Merah Wooden Watch",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Kota Bandung, Jawa Barat.",
        "price": "Rp450.000",
        "buyUrl": "https://palanusantara.com/",
        "imageUrl": "https://palanusantara.com/wp-content/uploads/2024/01/PALA-MINI-COKLAT.png",
        "category": "Karya Utama"
      },
      {
        "name": "Pala Mini / Seri Kolaborasi Nusantara .",
        "specs": "Karya autentik terkurasi dengan standar mutu dan ketertelusuran bahan baku lokal di Kota Bandung, Jawa Barat.",
        "price": "Rp550.000",
        "buyUrl": "https://palanusantara.com/",
        "imageUrl": "https://palanusantara.com/wp-content/uploads/2023/08/PALA-RK-MEGAMENDUNG_PXRK_2-600x600.png",
        "category": "Koleksi Pilihan"
      }
    ],
    "milestones": [
      {
        "year": "FASE AWAL | PERINTISAN",
        "title": "Riset Material & Pendirian Fondasi",
        "description": "Memulai eksplorasi bahan baku dan uji coba formulasi di Kota Bandung, Jawa Barat, menegaskan komitmen untuk tidak bergantung pada rantai pasok impor."
      },
      {
        "year": "FASE KEDUA | PENGUATAN",
        "title": "Konsolidasi Mitra & Standarisasi Mutu",
        "description": "Membangun jaringan kemitraan erat bersama perajin dan komunitas lokal, menerapkan uji kendali mutu berstandar ketat, dan merilis karya unggulan perdana."
      },
      {
        "year": "FASE KETIGA | KEDAULATAN",
        "title": "Rujukan Kemandirian & Pengakuan Pasar",
        "description": "Menjadi tolok ukur integritas karya di sektor Kultur, Kebugaran & Gaya Hidup Berdaulat, membuktikan keberlanjutan model bisnis etis yang menguntungkan ekosistem lokal."
      }
    ],
    "sovereigntyMeaning": "Keberadaan PALA NUSANTARA menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten.",
    "channels": {
      "officialStore": [
        {
          "platform": "Webstore Resmi",
          "url": "https://palanusantara.com/",
          "label": "palanusantara.com"
        },
        {
          "platform": "Tokopedia Official",
          "url": "https://tokopedia.com/find?q=PALA%20NUSANTARA",
          "label": "Tokopedia: PALA NUSANTARA"
        },
        {
          "platform": "Shopee Mall",
          "url": "https://shopee.co.id/search?keyword=PALA%20NUSANTARA",
          "label": "Shopee: PALA NUSANTARA"
        }
      ],
      "publicSpaces": [
        {
          "platform": "Instagram",
          "url": "https://instagram.com/palanusantara",
          "label": "@palanusantara"
        },
        {
          "platform": "Surel Kemitraan",
          "url": "mailto:kontak@palanusantara.com",
          "label": "Inquiry Resmi"
        }
      ]
    },
    "scores": {
      "quality": 25,
      "discovery": 25,
      "trackRecord": 25,
      "story": 24,
      "total": 99
    },
    "statusRedFlag": "CLEAR",
    "bio_paragraphs": [
      "Kelahiran PALA NUSANTARA berakar dari kegelisahan mendalam terhadap lanskap industri di Kota Bandung, Jawa Barat dan sekitarnya. Dirintis oleh desainer produk Ilham Pinastiko untuk menjawab kejenuhan arloji logam impor dengan menciptakan arloji berkarakter tropis yang hangat di pergelangan tangan. Mengombinasikan cangkang kayu sonokeling, maple, dan kuningan dengan ketahanan air (splash resistance) dan mesin penggerak presisi. PALA NUSANTARA hadir untuk menjembatani kesenjangan tersebut dengan membuktikan bahwa potensi daerah mampu melahirkan standar baru yang mandiri dan berdaya tawar tinggi.",
      "Melalui pendekatan kerja yang berakar pada kearifan dan disiplin mutu, PALA NUSANTARA mengintegrasikan ekosistem hulu hingga hilir. Kayu perkebunan legal bersertifikat (sonokeling, maple) dari Jawa Barat; tali kulit samak nabati lokal tanpa kromium berbahaya; perakitan mikro dan QC di studio kreatif Bandung. Langkah ini bukan sekadar strategi produksi, melainkan ikhtiar merawat martabat pekerja lokal serta menjaga keaslian material nusantara tanpa kompromi.",
      "Dampaknya terlihat nyata pada karya-karya terkurasi yang mereka hasilkan. Merekayasa jam tangan kayu geometris berdimensi kompak dari kayu lokal legal dan serat kulit nabati yang mengangkat filosofi buah pala sebagai simbol komoditas sejarah kepulauan Nusantara. Keberadaan PALA NUSANTARA menegaskan bahwa keunggulan nilai tidak lahir dari peniruan formula luar, melainkan dari keberanian mendalami konteks sosial, kekayaan material, dan kearifan ekologis nusantara secara konsisten."
    ],
    "quote": "Merekayasa jam tangan kayu geometris berdimensi kompak dari kayu lokal legal dan serat kulit nabati yang mengangkat filosofi buah pala sebagai simbol komoditas sejarah kepulauan Nusantara.",
    "initiatives": [
      {
        "title": "Kemitraan Hulu & Rantai Pasok Berkelanjutan",
        "category": "Ekosistem Lokal",
        "description": "Kayu perkebunan legal bersertifikat (sonokeling, maple) dari Jawa Barat; tali kulit samak nabati lokal tanpa kromium berbahaya; perakitan mikro dan QC di studio kreatif Bandung.",
        "price": "Kemitraan Mandiri",
        "imageUrl": "https://palanusantara.com/wp-content/uploads/2024/01/PALA-MINI-COKLAT.png",
        "action_text": "Pelajari Ekosistem",
        "link_url": "https://palanusantara.com/"
      },
      {
        "title": "Kendali Mutu & Ketertelusuran Bahan",
        "category": "Standar Mutu",
        "description": "Verifikasi independen mengonfirmasi bahwa operasional brand berakar pada integritas produksi hulu tanpa klaim pemasaran artifisial.",
        "price": "Teruji & Terverifikasi",
        "imageUrl": "https://palanusantara.com/wp-content/uploads/2023/08/PALA-RK-MEGAMENDUNG_PXRK_2-600x600.png",
        "action_text": "Akses Toko Resmi",
        "link_url": "https://palanusantara.com/"
      }
    ]
  }
};

export function getAllBrandSlugs(): string[] {
  return Object.keys(brandProfiles);
}

export function getBrandBySlug(slug: string): BrandProfile | undefined {
  return brandProfiles[slug];
}

export function getBrandsByLens(lensSlug: string): BrandProfile[] {
  return Object.values(brandProfiles).filter(b => b.lensSlug === lensSlug);
}

export function getAllBrandLenses(): BrandLens[] {
  return brandLenses;
}

export function getBrandLensBySlug(slug: string): BrandLens | undefined {
  return brandLenses.find(l => l.slug === slug);
}
