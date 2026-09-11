BEGIN;
INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Prosa.ai (Deep-Tech AI NLP & Voice Engine)', 'Kecerdasan Buatan & Pemrosesan Bahasa Alami', 'Platform AI percakapan dan sintesis suara berbahasa Indonesia berakurasi tinggi yang digunakan oleh sektor perbankan dan layanan publik.', 'Freemium / B2B (Mulai Rp 299.000/bln)', 'Dukung Inisiatif', 'https://prosa.ai', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga p WHERE p.slug = 'ayu-purwarianti';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Korpus Data NLP Bahasa Daerah Nusantara (Pusat AI ITB)', 'Dataset Sains Komputasi Linguistik', 'Basis data terbuka korpus digital bahasa Jawa, Sunda, Minang, dan puluhan bahasa daerah untuk melatih mesin AI masa depan.', 'Akses Terbuka / Donasi Swadaya', 'Dukung Inisiatif', 'https://ai.itb.ac.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga p WHERE p.slug = 'ayu-purwarianti';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Kata.ai Conversational Platform (Mesin NLU Bahasa Gaul)', 'Platform B2B Conversational AI Enterprise', 'Infrastruktur pemrosesan jutaan pesan percakapan harian dengan akurasi pemahaman dialek informal Indonesia tertinggi.', 'Freemium / B2B (Mulai Rp 299.000/bln)', 'Dukung Inisiatif', 'https://kata.ai', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga p WHERE p.slug = 'irzan-raditya';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Kata Omnichat & Asisten Cerdas UMKM', 'Software SaaS Otomasi Layanan Pelanggan', 'Platform perpesanan terpadu berbasis AI yang membantu pengusaha kecil mengelola ribuan pesanan WhatsApp secara otomatis.', 'Akses Terbuka / Donasi Swadaya', 'Dukung Inisiatif', 'https://kata.ai', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga p WHERE p.slug = 'irzan-raditya';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'IlmuKomputer.com (Portal Open Knowledge IT Pertama)', 'Repositori Pendidikan Komputasi Terbuka', 'Situs edukasi teknologi informasi gratis legendaris yang telah melatih jutaan talenta pemrograman dan rekayasa jaringan Indonesia.', 'Akses Terbuka / Donasi Swadaya', 'Dukung Inisiatif', 'https://ilmukomputer.org', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga p WHERE p.slug = 'romi-satria-wahono';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Brainmatics (Pusat Pelatihan & Sertifikasi IT Profesional)', 'Institusi Pengembangan Talenta Perangkat Lunak', 'Lembaga pelatihan standar industri untuk software architecture, database management, dan machine learning bersertifikasi resmi.', 'Rp 199.000 - Rp 1.450.000 / paket', 'Dukung Inisiatif', 'https://brainmatics.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga p WHERE p.slug = 'romi-satria-wahono';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Sistem Eye-Tracking Diagnostik Pasien Gangguan Saraf (UGM Lab)', 'Rekayasa Biomedis & Antarmuka Manusia-Komputer', 'Alat pemantau pergerakan pupil mata berkecepatan tinggi untuk mendeteksi disfungsi neurologis dan rehabilitasi stroke secara presisi.', 'Akses Terbuka / Donasi Swadaya', 'Dukung Inisiatif', 'https://sunu.staff.ugm.ac.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga p WHERE p.slug = 'sunu-wibirama';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Sistem Deteksi Kelelahan Pengemudi Berbasis AI Visual', 'Teknologi Keselamatan Transportasi Cerdas', 'Sensor kamera cerdas yang membaca pola kedipan mata dan posisi kepala pengemudi bus/truk untuk mencegah kecelakaan di jalan tol.', 'Akses Terbuka / Donasi Swadaya', 'Dukung Inisiatif', 'https://ugm.ac.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga p WHERE p.slug = 'sunu-wibirama';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Metode GASING (Gampang, Asyik, dan Menyenangkan)', 'Metodologi Pengajaran Matematika & Sains Revolusioner', 'Pendekatan pembelajaran berhitung tanpa rumus mati berbasis logika visual dan eksplorasi konkret yang mempercepat penguasaan matematika dasar.', 'Akses Terbuka / Donasi Swadaya', 'Dukung Inisiatif', 'https://suryainstitute.org', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga p WHERE p.slug = 'yohanes-surya';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'TOFI (Tim Olimpiade Fisika Indonesia)', 'Program Pembinaan Talenta Sains Unggul Dunia', 'Kawah candradimuka pembinaan fisika intensif yang telah menyumbangkan lebih dari 100 medali emas internasional bagi Republik Indonesia.', 'Akses Terbuka / Donasi Swadaya', 'Dukung Inisiatif', 'https://suryainstitute.org', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga p WHERE p.slug = 'yohanes-surya';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'AMAN (Aliansi Masyarakat Adat Nusantara)', 'Organisasi Gerakan Hak Asasi & Kedaulatan Wilayah Adat', 'Gerakan masyarakat sipil adat terbesar di dunia yang mengadvokasi pengakuan hukum, perlindungan hutan ulayat, dan sekolah adat.', 'Swadaya Solidaritas Warga', 'Dukung Inisiatif', 'https://aman.or.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga p WHERE p.slug = 'rukka-sombolinggi';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Badan Registrasi Wilayah Adat (BRWA)', 'Sistem Informasi Geografis & Pemetaan Partisipatif', 'Lembaga pemetaan wilayah adat berbasis data spasial dan sosial mandiri yang telah mendaftarkan belasan juta hektare tanah leluhur.', 'Akses Terbuka / Donasi Swadaya', 'Dukung Inisiatif', 'https://brwa.or.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga p WHERE p.slug = 'rukka-sombolinggi';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Rumah Sakit Apung (RSA) doctorSHARE', 'Inovasi Fasilitas Medis Maritim Swadaya', 'Armada kapal bedah terapung berstandar medis internasional yang berlayar ke pulau-pulau 3T melayani operasi bedah mayor dan persalinan gratis.', 'Donasi Medis (Mulai Rp 25.000)', 'Dukung Inisiatif', 'https://doctorshare.org', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga p WHERE p.slug = 'dr-lie-dharmawan';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Dokter Terbang (Flying Doctors Indonesia)', 'Layanan Darurat Medis Daerah Terisolir', 'Tim dokter spesialis relawan yang diterbangkan menggunakan pesawat perintis ke lembah-lembah terpencil Papua dan pelosok Kalimantan.', 'Akses Terbuka / Donasi Swadaya', 'Dukung Inisiatif', 'https://doctorshare.org', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga p WHERE p.slug = 'dr-lie-dharmawan';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Koperasi Tenun Pewarna Alami Suku Mollo', 'Ekonomi Adat Berkelanjutan & Kriya Tradisional', 'Unit usaha mandiri ratusan perempuan penenun NTT yang menggunakan tanaman pewarna alami tanpa merusak kelestarian hutan.', 'Rp 450.000 - Rp 2.250.000', 'Dukung Inisiatif', 'https://sektorlokal.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga p WHERE p.slug = 'mama-aleta-baun';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Kawasan Lindung Adat Pegunungan Mutis', 'Konservasi Tanah Ulayat & Mata Air Alami', 'Wilayah hutan suaka adat yang diselamatkan dari tambang marmer, kini menjadi sumber air abadi bagi ribuan keluarga petani di pulau Timor.', 'Akses Terbuka / Donasi Swadaya', 'Dukung Inisiatif', 'https://sektorlokal.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga p WHERE p.slug = 'mama-aleta-baun';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'JMPPK (Jaringan Masyarakat Peduli Pegunungan Kendeng)', 'Gerakan Perlindungan Ekosistem Karst & Hak Tani', 'Koalisi petani akar rumput yang memperjuangkan perlindungan tandon air alami Pegunungan Kendeng dari kerusakan tambang.', 'Swadaya Solidaritas Warga', 'Dukung Inisiatif', 'https://jmppkkendeng.org', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga p WHERE p.slug = 'gunretno';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Praktik Tani Organik Sedulur Sikep Sukolilo', 'Kedaulatan Pangan Alami & Tanpa Utang Kimia', 'Model pertanian padi organik mandiri yang tidak bergantung pada benih hibrida industri dan pupuk kimia sintetis.', 'Akses Terbuka / Donasi Swadaya', 'Dukung Inisiatif', 'https://sektorlokal.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga p WHERE p.slug = 'gunretno';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Institut Mosintuwu (Pusat Rekonsiliasi & Kedaulatan Desa)', 'Lembaga Bina Perdamaian & Hak Asasi Perempuan', 'Organisasi akar rumput terdepan di Sulawesi Tengah yang melatih ribuan perempuan desa dalam advokasi anggaran, kesehatan reproduksi, dan perdamaian.', 'Swadaya Solidaritas Warga', 'Dukung Inisiatif', 'https://mosintuwu.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga p WHERE p.slug = 'lian-gogali';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Sekolah Perempuan & Sekolah Toleransi Poso', 'Pendidikan Kritis Warga Pascakonflik', 'Kurikulum pendidikan emansipatoris lintas iman yang memulihkan trauma komunal dan membangun solidaritas ekonomi bersama.', 'Rp 199.000 - Rp 1.450.000 / paket', 'Dukung Inisiatif', 'https://mosintuwu.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga p WHERE p.slug = 'lian-gogali';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'FRAS Sulteng (Front Rakyat Advokasi Sawit)', 'Serikat Pembela Hak Petani & Keadilan Agraria', 'Organisasi advokasi lapangan yang mendampingi komunitas petani gurem melawan perampasan tanah dan intimidasi perusahaan perkebunan.', 'Akses Terbuka / Donasi Swadaya', 'Dukung Inisiatif', 'https://sektorlokal.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga p WHERE p.slug = 'eva-susanti-bande';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Koperasi Tani Mandiri Berbasis Pangan Polikultur', 'Kedaulatan Pertanian Rakyat', 'Inisiatif pemulihan tanah bekas konsesi sawit menjadi kebun pangan polikultur (kakao, jagung, rempah) milik keluarga tani.', 'Akses Terbuka / Donasi Swadaya', 'Dukung Inisiatif', 'https://sektorlokal.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga p WHERE p.slug = 'eva-susanti-bande';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Armada Ambulans Motor Desa Flores Timur (YKS)', 'Inovasi Transportasi Medis Tepat Guna', 'Armada sepeda motor modifikasi khusus yang menembus jalan setapak hutan dan pegunungan terjal untuk evakuasi darurat ibu melahirkan.', 'Akses Terbuka / Donasi Swadaya', 'Dukung Inisiatif', 'https://sektorlokal.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga p WHERE p.slug = 'mansetus-balawala';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Skema Asuransi Mikro Gotong Royong Kesehatan', 'Fintech Sosial Komunal Berbasis Iuran Sukarela', 'Tabungan kesehatan komunitas yang dikelola bersama warga desa untuk mendanai biaya operasional bensin motor ambulans dan obat-obatan.', 'Akses Terbuka / Donasi Swadaya', 'Dukung Inisiatif', 'https://sektorlokal.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga p WHERE p.slug = 'mansetus-balawala';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Aksi Kamisan (Gerakan Payung Hitam Menolak Lupa)', 'Gerakan Moral Hak Asasi Manusia & Melawan Impunitas', 'Aksi diam damai setiap Kamis sore di seberang Istana Presiden yang telah berlangsung selama belasan tahun menuntut pengadilan HAM ad hoc.', 'Swadaya Solidaritas Warga', 'Dukung Inisiatif', 'https://aksikamisan.net', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga p WHERE p.slug = 'maria-catarina-sumarsih';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'JSKK (Jaringan Solidaritas Korban untuk Keadilan)', 'Koalisi Keluarga Korban Pelanggaran HAM Berat', 'Wadah persaudaraan keluarga korban kejahatan kemanusiaan masa lalu yang saling menguatkan dalam merawat ingatan kolektif bangsa.', 'Akses Terbuka / Donasi Swadaya', 'Dukung Inisiatif', 'https://kontras.org', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga p WHERE p.slug = 'maria-catarina-sumarsih';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Food Bank of Indonesia (Jejaring Food Rescue Nasional)', 'Logistik Kemanusiaan & Penyelamatan Makanan', 'Organisasi penyelamat makanan berlebih industri yang telah menyalurkan jutaan porsi makanan bergizi ke balita dan lansia prasejahtera.', 'Paket Donasi Pangan Rp 50.000', 'Dukung Inisiatif', 'https://foodbankindonesia.org', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga p WHERE p.slug = 'hendro-utomo';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Program Sayap dari Sayap (Nutrisi PAUD & Posyandu)', 'Intervensi Gizi Dini Anak Negeri', 'Penyediaan sarapan bergizi harian bagi puluhan ribu anak-anak usia dini di sekolah-sekolah rakyat pelosok kampung.', 'Akses Terbuka / Donasi Swadaya', 'Dukung Inisiatif', 'https://foodbankindonesia.org', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga p WHERE p.slug = 'hendro-utomo';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Sokola Institute (Sekolah Literasi Kontekstual Adat)', 'Pendidikan Emansipatoris & Hak Masyarakat Adat', 'Lembaga pendidikan alternatif nirlaba yang menyediakan akses literasi baca-tulis-hitung kontekstual bagi suku-suku pedalaman nusantara.', 'Bebas Biaya / Donasi Swadaya', 'Dukung Inisiatif', 'https://sokola.org', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga p WHERE p.slug = 'butet-manurung';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Buku: Sokola Rimba (Pengalaman Belajar Bersama Orang Rimba)', 'Karya Literatur Antropologi & Pendidikan', 'Buku catatan etnografis mendalam tentang dinamika perjumpaan budaya, kearifan rimba, dan perjuangan hak tanah Orang Rimba.', 'Rp 85.000 - Rp 185.000', 'Dukung Inisiatif', 'https://www.gramedia.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga p WHERE p.slug = 'butet-manurung';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Spedagi Bamboo Bicycle (Sepeda Bambu Lestari)', 'Desain Industri Kriya Mobilitas Hijau', 'Sepeda bambu berstandar internasional yang mengintegrasikan kekuatan serat bambu lokal Temanggung dengan estetika desain modern.', 'Rp 7.500.000 - Rp 14.500.000', 'Dukung Inisiatif', 'https://spedagi.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga p WHERE p.slug = 'singgih-susilo-kartono';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Pasar Papringan Temanggung', 'Rekayasa Sosial & Pasar Tradisional Bebas Plastik', 'Destinasi ekonomi komunal dua mingguan di tengah kebun bambu yang memberdayakan ratusan ibu-ibu desa menggunakan mata uang koin bambu.', 'Rp 85.000 - Rp 450.000', 'Dukung Inisiatif', 'https://pasarpapringan.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga p WHERE p.slug = 'singgih-susilo-kartono';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'JAVARA Indigenous Indonesia (Pangan Pusaka Nusantara)', 'Agribisnis Pangan Organik & Ekspor Heritage', 'Kurasi produk pangan alami terbesar di Indonesia yang memasok beras pusaka, garam artisanal, dan rempah liar ke pasar dunia.', 'Rp 35.000 - Rp 165.000 / pack', 'Dukung Inisiatif', 'https://javara.co.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga p WHERE p.slug = 'helianti-hilman';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Javara Academy & Sekolah Wirausaha Pangan Desa', 'Pendidikan Vokasi Agribisnis & Pelestarian Benih', 'Inkubator bisnis yang melatih ribuan keluarga petani mengadopsi standar sertifikasi organik internasional dan pengolahan pangan.', 'Rp 35.000 - Rp 165.000 / pack', 'Dukung Inisiatif', 'https://javara.co.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga p WHERE p.slug = 'helianti-hilman';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Du''Anyam (Wirausaha Sosial Kriya Daun Lontar)', 'Wirausaha Sosial & Kriya Anyaman Inklusif', 'Brand kriya sosial yang memasok produk anyaman berkualitas tinggi untuk sektor hospitality global dan suvenir korporasi.', 'Rp 120.000 - Rp 650.000', 'Dukung Inisiatif', 'https://duanyam.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga p WHERE p.slug = 'azalea-ayuningtyas';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Program Intervensi Gizi & Kesehatan Ibu Hamil NTT', 'Kesehatan Masyarakat & Penanganan Stunting', 'Program pemberian paket nutrisi protein dan pendampingan posyandu bagi keluarga penganyam di desa terpencil Flores.', 'Rp 85.000 - Rp 450.000', 'Dukung Inisiatif', 'https://duanyam.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga p WHERE p.slug = 'azalea-ayuningtyas';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Pipiltin Cocoa (Cokelat Artisan Bean-to-Bar Nusantara)', 'Manufaktur Cokelat Premium Single Origin', 'Lini produk cokelat murni berbahan 100% kakao lokal tanpa lemak nabati sawit yang mengangkat kekayaan profil tanah kepulauan Indonesia.', 'Rp 45.000 - Rp 135.000 / bar', 'Dukung Inisiatif', 'https://pipiltincocoa.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga p WHERE p.slug = 'tissa-aunilla';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Program Kemitraan Fermentasi Petani Kakao Daerah', 'Pemberdayaan Rantai Pasok Petani Kakao', 'Pelatihan standardisasi fermentasi dan pembelian langsung biji kakao dari petani di Aceh, Flores, Bali, dan Papua dengan harga premium.', 'Rp 45.000 - Rp 135.000 / bar', 'Dukung Inisiatif', 'https://pipiltincocoa.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga p WHERE p.slug = 'tissa-aunilla';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Brodo Footwear (Brand Sepatu Kulit & Sneakers Lokal)', 'Manufaktur Alas Kaki Kontemporer & Direct-to-Consumer', 'Lini produk sepatu kulit formal, boots, dan sneakers pria dengan standar uji mutu industri yang diproduksi oleh sentra pengrajin lokal Jawa Barat.', 'Rp 375.000 - Rp 899.000', 'Dukung Inisiatif', 'https://bro.do', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga p WHERE p.slug = 'yukka-harsono';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Ekosistem Mitra Pengrajin Kulit Cibaduyut Brodo', 'Pemberdayaan Sentra Manufaktur Tradisional', 'Program standardisasi jahit sol, pola presisi, dan transfer teknologi mesin potong kulit bagi puluhan bengkel pengrajin lokal.', 'Rp 375.000 - Rp 899.000', 'Dukung Inisiatif', 'https://bro.do', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga p WHERE p.slug = 'yukka-harsono';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Batik Kultur by Dea Valencia', 'Fesyen Wastra Kontemporer & Butik Inklusif', 'Brand busana batik ready-to-wear premium yang memadukan kain batik tulis/cap tradisional dengan siluet modern untuk pasar global.', 'Rp 450.000 - Rp 2.250.000', 'Dukung Inisiatif', 'https://batikkultur.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga p WHERE p.slug = 'dea-valencia';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Workshop Inklusif Pemberdayaan Difabel Semarang', 'Fasilitas Manufaktur Ramah Disabilitas', 'Sentra produksi garmen yang dirancang ergonomis untuk mempekerjakan puluhan penjahit dan pembuat pola penyandang disabilitas secara setara.', 'Rp 85.000 - Rp 450.000', 'Dukung Inisiatif', 'https://batikkultur.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga p WHERE p.slug = 'dea-valencia';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Hirka Footwear (Sepatu Kulit Eksotis Ceker Ayam)', 'Inovasi Manufaktur Material Sirkular & Fesyen Mewah', 'Koleksi sepatu kulit premium berbahan baku limbah ceker ayam dengan pola sisik alami unik yang diproduksi secara handmade di Bandung.', 'Rp 1.450.000 - Rp 3.200.000', 'Dukung Inisiatif', 'https://hirka.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga p WHERE p.slug = 'nurman-farieka-ramdhany';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Formula Penyamakan Kulit Unggas Ramah Lingkungan', 'Rekayasa Kimia Kulit Tepat Guna', 'Metode pemrosesan penyamakan kulit ceker ayam tanpa bahan kimia berbahaya kromium yang aman bagi lingkungan dan perajin.', 'Rp 85.000 - Rp 450.000', 'Dukung Inisiatif', 'https://hirka.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga p WHERE p.slug = 'nurman-farieka-ramdhany';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Rumah Mocaf Indonesia (Tepung Singkong Bebas Gluten)', 'Agroindustri Pangan Lokal & Hilirisasi Pertanian', 'Produsen tepung singkong fermentasi organik pengganti terigu gandum bersertifikat bebas gluten yang memasok industri roti dan kue global.', 'Rp 85.000 - Rp 450.000', 'Dukung Inisiatif', 'https://rumahmocaf.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga p WHERE p.slug = 'riza-azyumarridha-azra';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Mocafine & Lini Pangan Olahan Gluten-Free', 'Produk Konsumen Sehat Berbasis Singkong', 'Produk turunan tepung Mocaf berupa mi sehat non-gandum, tepung bumbu krispi, dan kue kering untuk gaya hidup sehat dan penderita autisme.', 'Rp 85.000 - Rp 450.000', 'Dukung Inisiatif', 'https://rumahmocaf.com', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga p WHERE p.slug = 'riza-azyumarridha-azra';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Foodizz (Akademi Bisnis Kuliner Digital)', 'EduTech Wirausaha F&B & Inkubator Bisnis', 'Platform pembelajaran digital komprehensif yang melatih ratusan ribu pengusaha kuliner dalam tata kelola operasional, HPP, dan scaling-up.', 'Rp 199.000 - Rp 1.450.000 / paket', 'Dukung Inisiatif', 'https://foodizz.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga p WHERE p.slug = 'stefanie-kurniadi';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Buku Panduan: 10 Langkah Membangun Bisnis Kuliner yang Berkelanjutan', 'Buku Bisnis Terapan & Manajemen F&B', 'Karya literatur praktis membedah cara menghitung Food Cost, standardisasi resep, dan manajemen kas restoran.', 'Rp 85.000 - Rp 185.000', 'Dukung Inisiatif', 'https://foodizz.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga p WHERE p.slug = 'stefanie-kurniadi';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Asgar Muda Foundation (Inkubator Wirausaha Pemuda Garut)', 'Pemberdayaan Pemuda Perdesaan & Inkubasi Bisnis', 'Yayasan sosial yang telah mencetak ribuan wirausahawan muda di Jawa Barat berbasis potensi agribisnis dan kriya lokal.', 'Rp 150.000 - Rp 1.200.000', 'Dukung Inisiatif', 'https://asgarmuda.org', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 1
FROM profiles_warga p WHERE p.slug = 'goris-mustaqim';

INSERT INTO initiatives_warga (profile_id, title, category, description, price, action_text, link_url, image_url, order_index)
SELECT p.id, 'Sentra Kerajinan Kulit Sukaregang Berdaya', 'Modernisasi Kriya Tradisional Daerah', 'Program peningkatan standar desain dan akses pemasaran digital bagi puluhan bengkel perajin jaket dan tas kulit di Garut.', 'Rp 150.000 - Rp 1.200.000', 'Dukung Inisiatif', 'https://sektorlokal.id', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80', 2
FROM profiles_warga p WHERE p.slug = 'goris-mustaqim';
COMMIT;
